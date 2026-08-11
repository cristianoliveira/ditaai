/**
 * In-browser Supertonic TTS reader. No external server needed.
 *
 * Downloads ONNX models + voice style from Cache Storage (populated by
 * the voice installer) and runs inference via onnxruntime-web.
 *
 * Word boundaries are computed proportionally from text + audio duration.
 */

import type {
  BoundaryEvent,
  BoundarySchedule,
  SpeakOptions,
  TextReader,
} from '../../domain/audio/text-reader';
import { logger } from '../../lib/logger';
import { loadTextToSpeech, loadVoiceStyle, writeWav } from './supertonic-helper';
import type { TextToSpeech } from './supertonic-helper';
import { computeWordTimings } from './word-timing';

interface PreparedSpeech {
  audioBuffer: AudioBuffer;
  words: ReturnType<typeof computeWordTimings>;
  sampleCount: number;
  durationSum: number;
}

/**
 * Above this chars/sec the Supertonic duration predictor is under-predicting
 * total duration, producing fast speech. Normal narration sits around 15
 * chars/s; the observed regression ran ~26 chars/s. 22 leaves headroom above
 * natural variation while catching the failure mode.
 */
export const FAST_SPEECH_CHARS_PER_SEC = 22;

export interface SpeechRate {
  charsPerSec: number;
  anomalous: boolean;
}

/** Pure playback-rate metric for logging. Deterministic and unit-tested. */
export function speechRate(spokenChars: number, durationMs: number): SpeechRate {
  if (durationMs <= 0) return { charsPerSec: 0, anomalous: false };
  const charsPerSec = spokenChars / (durationMs / 1000);
  return { charsPerSec, anomalous: charsPerSec > FAST_SPEECH_CHARS_PER_SEC };
}

export interface SupertonicOnnxConfig {
  /** URL prefix for fetching model files (https://) or record of cached ArrayBuffers. */
  modelAssets?: string | Record<string, ArrayBuffer>;
  /** URL for the voice style JSON, or its ArrayBuffer. */
  voiceStyle?: string | ArrayBuffer;
  language?: string;
  speed?: number;
  totalSteps?: number;
  /** Injected AudioContext factory for testing. */
  audioContextFactory?: () => AudioContext;
}

export class SupertonicOnnxReader implements TextReader {
  private readonly modelAssets: string | Record<string, ArrayBuffer>;
  private readonly voiceStyle: string | ArrayBuffer;
  private readonly language: string;
  private readonly speed: number;
  private readonly totalSteps: number;
  private readonly audioContextFactory: () => AudioContext;

  private tts: TextToSpeech | null = null;
  private ttsInitialization: Promise<TextToSpeech> | null = null;
  private style: Awaited<ReturnType<typeof loadVoiceStyle>> | null = null;
  private styleInitialization: Promise<Awaited<ReturnType<typeof loadVoiceStyle>>> | null = null;
  private readonly preparations = new Map<string, Promise<PreparedSpeech>>();
  /** ONNX Runtime's session is not re-entrant. A seek can start preparation for
   * its target while lookahead inference is still running, so all inference
   * must pass through one queue. */
  private inferenceQueue: Promise<void> = Promise.resolve();
  private audioContext: AudioContext | null = null;
  private sourceNode: AudioBufferSourceNode | null = null;
  private speechCount = 0;
  private preparationCount = 0;

  /** Called for each word boundary during playback. Set before speak(). */
  onBoundary?: (event: BoundaryEvent) => void;
  /** Sends timing data to a scheduler outside the inference event loop. */
  onBoundarySchedule?: (schedule: BoundarySchedule) => void;

  constructor(config: SupertonicOnnxConfig = {}) {
    this.modelAssets = config.modelAssets ?? 'assets/supertonic';
    this.voiceStyle =
      config.voiceStyle ??
      (typeof this.modelAssets === 'string' ? `${this.modelAssets}/voice_styles/M1.json` : 'M1');
    this.language = config.language ?? 'en';
    this.speed = config.speed ?? 1.05;
    this.totalSteps = config.totalSteps ?? 8;
    this.audioContextFactory =
      config.audioContextFactory ?? (() => new AudioContext({ sampleRate: 44100 }));
  }

  async prepare(text: string, options?: SpeakOptions): Promise<void> {
    await this.getPreparedSpeech(text, options);
  }

  async speak(text: string, options?: SpeakOptions): Promise<void> {
    const speechId = ++this.speechCount;
    const preparationKey = this.preparationKey(text, options);
    const prepared = await this.getPreparedSpeech(text, options);
    if (!prepared) return;
    this.preparations.delete(preparationKey);

    const spokenChars = text.length - (options?.resumeFromChar ?? 0);
    const playbackStartedAt = Date.now();
    logger.info(`[supertonic:${speechId}] playback:start`, {
      rate: options?.rate ?? null,
      volume: options?.volume ?? null,
      resumeFromChar: options?.resumeFromChar ?? 0,
      chars: text.length,
    });
    await this.playAudioWithBoundaries(prepared, options?.volume);
    const durationMs = Date.now() - playbackStartedAt;
    const rate = speechRate(spokenChars, durationMs);
    logger.info(`[supertonic:${speechId}] playback:complete`, { durationMs, ...rate });
    if (rate.anomalous) {
      logger.warn(`[supertonic:${speechId}] playback:fast-speech-detected`, {
        chars: spokenChars,
        ...rate,
      });
    }
  }

  private getPreparedSpeech(text: string, options?: SpeakOptions): Promise<PreparedSpeech | null> {
    const offset = options?.resumeFromChar ?? 0;
    const textToSpeak = offset > 0 ? text.slice(offset) : text;
    if (!textToSpeak.trim()) return Promise.resolve(null);

    const key = this.preparationKey(text, options);
    const existing = this.preparations.get(key);
    if (existing) return existing;

    const preparation = this.generateSpeech(textToSpeak, offset, options);
    this.preparations.set(key, preparation);
    void preparation.catch(() => {
      if (this.preparations.get(key) === preparation) this.preparations.delete(key);
    });
    while (this.preparations.size > 2) {
      const oldestKey = this.preparations.keys().next().value;
      if (oldestKey === undefined) break;
      this.preparations.delete(oldestKey);
    }
    return preparation;
  }

  private async generateSpeech(
    text: string,
    offset: number,
    options?: SpeakOptions,
  ): Promise<PreparedSpeech> {
    const preparationId = ++this.preparationCount;
    const [tts, style] = await Promise.all([
      this.getTextToSpeech(preparationId),
      this.getVoiceStyle(),
    ]);
    const speed = options?.rate ?? this.speed;
    const quality = options?.quality ?? this.totalSteps;
    const language = options?.language ?? this.language;
    const inferenceStartedAt = Date.now();
    logger.info(`[supertonic:prepare:${preparationId}] inference:start`, {
      textLength: text.length,
      totalSteps: quality,
      speed,
      language,
    });
    const inference = this.inferenceQueue.then(() =>
      tts.infer([text], [language], style, quality, speed),
    );
    this.inferenceQueue = inference.then(
      () => undefined,
      () => undefined,
    );
    const { wav, duration } = await inference;
    logger.info(`[supertonic:prepare:${preparationId}] inference:complete`, {
      durationMs: Date.now() - inferenceStartedAt,
      sampleCount: wav.length,
      durationSum: duration.reduce((sum, d) => sum + d, 0),
    });

    const wavBuffer = writeWav(new Float32Array(wav), tts.sampleRate);
    const audioBuffer = await this.getAudioContext().decodeAudioData(wavBuffer);
    return {
      audioBuffer,
      words: computeWordTimings(text, offset),
      sampleCount: wav.length,
      durationSum: duration.reduce((sum, d) => sum + d, 0),
    };
  }

  private async getTextToSpeech(preparationId: number): Promise<TextToSpeech> {
    if (this.tts) {
      logger.info(`[supertonic:prepare:${preparationId}] models:reuse`);
      return this.tts;
    }
    if (this.ttsInitialization) return this.ttsInitialization;

    const startedAt = Date.now();
    logger.info(`[supertonic:prepare:${preparationId}] models:initialize`);
    this.ttsInitialization = loadTextToSpeech(this.modelAssets)
      .then(({ tts }) => {
        this.tts = tts;
        logger.info(`[supertonic:prepare:${preparationId}] models:ready`, {
          durationMs: Date.now() - startedAt,
        });
        return tts;
      })
      .finally(() => {
        this.ttsInitialization = null;
      });
    return this.ttsInitialization;
  }

  private async getVoiceStyle(): Promise<Awaited<ReturnType<typeof loadVoiceStyle>>> {
    if (this.style) return this.style;
    if (this.styleInitialization) return this.styleInitialization;

    this.styleInitialization = loadVoiceStyle([this.voiceStyle] as ArrayBuffer[] | string[])
      .then((style) => {
        this.style = style;
        return style;
      })
      .finally(() => {
        this.styleInitialization = null;
      });
    return this.styleInitialization;
  }

  private preparationKey(text: string, options?: SpeakOptions): string {
    return JSON.stringify([
      text,
      options?.resumeFromChar ?? 0,
      options?.rate ?? this.speed,
      options?.quality ?? this.totalSteps,
      options?.language ?? this.language,
    ]);
  }

  stop(): void {
    if (this.sourceNode) {
      try {
        this.sourceNode.stop();
      } catch {
        /* already stopped */
      }
      this.sourceNode.disconnect();
      this.sourceNode = null;
    }
  }

  pause(): void {
    if (this.audioContext?.state === 'running') {
      this.audioContext.suspend().catch(() => {});
    }
  }

  resume(): void {
    if (this.audioContext?.state === 'suspended') {
      this.audioContext.resume().catch(() => {});
    }
  }

  private playAudioWithBoundaries(prepared: PreparedSpeech, volume?: number): Promise<void> {
    const ctx = this.getAudioContext();
    const { audioBuffer, words } = prepared;
    const audioDuration = audioBuffer.duration;
    const source = ctx.createBufferSource();
    source.buffer = audioBuffer;
    source.playbackRate.value = 1;
    const gain = ctx.createGain();
    gain.gain.value = volume ?? 1;
    source.connect(gain);
    gain.connect(ctx.destination);
    this.sourceNode = source;

    this.onBoundarySchedule?.({
      durationMs: audioDuration * 1_000,
      boundaries: words,
      sampleCount: prepared.sampleCount,
      durationSum: prepared.durationSum,
    });

    const tickMs = 50;
    let boundaryIndex = 0;
    let startTime = 0;
    const tick = this.onBoundarySchedule
      ? undefined
      : setInterval(() => {
          if (ctx.state === 'closed') {
            if (tick) clearInterval(tick);
            return;
          }
          const elapsed = ctx.currentTime - startTime;
          const progress = Math.min(elapsed / audioDuration, 1);

          while (boundaryIndex < words.length) {
            const word = words[boundaryIndex];
            if (!word || word.startFraction > progress) break;
            this.onBoundary?.(word);
            boundaryIndex++;
          }

          if (boundaryIndex >= words.length && elapsed >= audioDuration && tick) {
            clearInterval(tick);
          }
        }, tickMs);

    return new Promise<void>((resolve) => {
      source.addEventListener('ended', () => {
        if (tick) clearInterval(tick);
        while (!this.onBoundarySchedule && boundaryIndex < words.length) {
          const word = words[boundaryIndex];
          if (word) this.onBoundary?.(word);
          boundaryIndex++;
        }
        this.sourceNode = null;
        resolve();
      });

      source.start();
      startTime = ctx.currentTime;
    });
  }

  private getAudioContext(): AudioContext {
    if (!this.audioContext || this.audioContext.state === 'closed') {
      this.audioContext = this.audioContextFactory();
    }
    return this.audioContext;
  }
}
