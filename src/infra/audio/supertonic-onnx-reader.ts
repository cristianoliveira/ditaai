/**
 * In-browser Supertonic TTS reader. No external server needed.
 *
 * Downloads ONNX models + voice style from Cache Storage (populated by
 * the voice installer) and runs inference via onnxruntime-web.
 *
 * Word boundaries are computed proportionally from text + audio duration.
 */

import type { BoundaryEvent, SpeakOptions, TextReader } from '../../domain/audio/text-reader';
import { loadTextToSpeech, loadVoiceStyle, writeWav } from './supertonic-helper';
import type { TextToSpeech } from './supertonic-helper';

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
  private audioContext: AudioContext | null = null;
  private sourceNode: AudioBufferSourceNode | null = null;
  private speechCount = 0;

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

  async speak(text: string, options?: SpeakOptions): Promise<void> {
    const speechId = ++this.speechCount;
    const offset = options?.resumeFromChar ?? 0;
    const textToSpeak = offset > 0 ? text.slice(offset) : text;
    if (!textToSpeak.trim()) return;

    if (!this.tts) {
      const startedAt = Date.now();
      console.info(`[dita][supertonic:${speechId}] models:initialize`);
      const result = await loadTextToSpeech(this.modelAssets);
      this.tts = result.tts;
      console.info(`[dita][supertonic:${speechId}] models:ready`, {
        durationMs: Date.now() - startedAt,
      });
    } else {
      console.info(`[dita][supertonic:${speechId}] models:reuse`);
    }

    const inferenceStartedAt = Date.now();
    console.info(`[dita][supertonic:${speechId}] inference:start`, {
      textLength: textToSpeak.length,
      totalSteps: this.totalSteps,
    });
    const style = await loadVoiceStyle([this.voiceStyle] as ArrayBuffer[] | string[]);
    const { wav } = await this.tts.infer(
      [textToSpeak],
      [this.language],
      style,
      this.totalSteps,
      this.speed,
    );
    console.info(`[dita][supertonic:${speechId}] inference:complete`, {
      durationMs: Date.now() - inferenceStartedAt,
      sampleCount: wav.length,
    });

    const playbackStartedAt = Date.now();
    console.info(`[dita][supertonic:${speechId}] playback:start`);
    const wavBuffer = writeWav(new Float32Array(wav), this.tts.sampleRate);
    await this.playAudioWithBoundaries(wavBuffer, textToSpeak, offset, options);
    console.info(`[dita][supertonic:${speechId}] playback:complete`, {
      durationMs: Date.now() - playbackStartedAt,
    });
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

  private async playAudioWithBoundaries(
    wavBuffer: ArrayBuffer,
    text: string,
    offset: number,
    options?: SpeakOptions,
  ): Promise<void> {
    const ctx = this.getAudioContext();
    const audioBuffer = await ctx.decodeAudioData(wavBuffer);
    const audioDuration = audioBuffer.duration;

    const words = computeWords(text, offset);
    const source = ctx.createBufferSource();
    source.buffer = audioBuffer;
    source.playbackRate.value = options?.rate ?? 1;
    source.connect(ctx.destination);
    this.sourceNode = source;

    const tickMs = 50;
    let boundaryIndex = 0;

    let startTime = 0;

    const tick = setInterval(() => {
      if (ctx.state === 'closed') {
        clearInterval(tick);
        return;
      }
      const elapsed = ctx.currentTime - startTime;
      const progress = Math.min(elapsed / audioDuration, 1);
      const currentCharPos = offset + Math.floor(progress * text.length);

      while (boundaryIndex < words.length) {
        const word = words[boundaryIndex];
        if (!word || word.charIndex > currentCharPos) break;
        options?.onBoundary?.(word);
        boundaryIndex++;
      }

      if (boundaryIndex >= words.length && elapsed >= audioDuration) {
        clearInterval(tick);
      }
    }, tickMs);

    return new Promise<void>((resolve) => {
      source.addEventListener('ended', () => {
        clearInterval(tick);
        while (boundaryIndex < words.length) {
          const word = words[boundaryIndex];
          if (!word || word.charIndex > offset + text.length) {
            boundaryIndex++;
            continue;
          }
          options?.onBoundary?.(word);
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

function computeWords(text: string, offset: number): BoundaryEvent[] {
  const words: BoundaryEvent[] = [];
  for (const match of text.matchAll(/\S+/g)) {
    words.push({
      charIndex: offset + match.index,
      charLength: match[0].length,
    });
  }
  return words;
}
