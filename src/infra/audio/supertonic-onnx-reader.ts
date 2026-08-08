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
  /** Base URL for ONNX model files (cache:// or https://). */
  assetsPath?: string;
  /** URL for the voice style JSON. */
  voiceStylePath?: string;
  language?: string;
  speed?: number;
  totalSteps?: number;
  /** Injected AudioContext factory for testing. */
  audioContextFactory?: () => AudioContext;
}

export class SupertonicOnnxReader implements TextReader {
  private readonly assetsPath: string;
  private readonly voiceStylePath: string;
  private readonly language: string;
  private readonly speed: number;
  private readonly totalSteps: number;
  private readonly audioContextFactory: () => AudioContext;

  private tts: TextToSpeech | null = null;
  private audioContext: AudioContext | null = null;
  private sourceNode: AudioBufferSourceNode | null = null;
  private abortController: AbortController | null = null;

  constructor(config: SupertonicOnnxConfig = {}) {
    this.assetsPath = config.assetsPath ?? 'assets/supertonic';
    this.voiceStylePath = config.voiceStylePath ?? `${this.assetsPath}/voice_styles/M1.json`;
    this.language = config.language ?? 'en';
    this.speed = config.speed ?? 1.05;
    this.totalSteps = config.totalSteps ?? 8;
    this.audioContextFactory =
      config.audioContextFactory ?? (() => new AudioContext({ sampleRate: 44100 }));
  }

  async speak(text: string, options?: SpeakOptions): Promise<void> {
    this.abortController = new AbortController();
    const offset = options?.resumeFromChar ?? 0;
    const textToSpeak = offset > 0 ? text.slice(offset) : text;
    if (!textToSpeak.trim()) return;

    // Ensure models are loaded (lazy first-use load)
    if (!this.tts) {
      this.tts = (await loadTextToSpeech(this.assetsPath)).tts;
    }

    const style = await loadVoiceStyle([this.voiceStylePath]);
    const { wav } = await this.tts.infer(
      [textToSpeak],
      [this.language],
      style,
      this.totalSteps,
      this.speed,
    );

    const wavBuffer = writeWav(new Float32Array(wav), this.tts.sampleRate);
    await this.playAudioWithBoundaries(wavBuffer, textToSpeak, offset, options);
  }

  stop(): void {
    this.abortController?.abort();
    if (this.sourceNode) {
      try {
        this.sourceNode.stop();
      } catch {
        // already stopped
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
    const totalChars = text.length;
    const lastCharPos = offset + totalChars;

    const source = ctx.createBufferSource();
    source.buffer = audioBuffer;
    source.playbackRate.value = options?.rate ?? 1;
    source.connect(ctx.destination);
    this.sourceNode = source;

    const tickMs = 50;
    let boundaryIndex = 0;

    const tick = setInterval(() => {
      if (ctx.state === 'closed') {
        clearInterval(tick);
        return;
      }
      const elapsed = ctx.currentTime - startTime;
      const progress = Math.min(elapsed / audioDuration, 1);
      const currentCharPos = offset + Math.floor(progress * totalChars);

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

    let startTime = 0;

    return new Promise<void>((resolve) => {
      source.addEventListener('ended', () => {
        clearInterval(tick);
        while (boundaryIndex < words.length) {
          const word = words[boundaryIndex];
          if (!word || word.charIndex > lastCharPos) {
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
