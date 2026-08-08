/**
 * TextReader adapter for Supertonic TTS via local HTTP server.
 *
 * Requires supertonic serve running locally:
 *   pip install 'supertonic[serve]'
 *   supertonic serve --cors 'chrome-extension://*'
 *
 * POSTs text to /v1/tts, plays the returned WAV via AudioContext,
 * and computes approximate word-level boundary events.
 */

import type { BoundaryEvent, SpeakOptions, TextReader } from '../../domain/audio/text-reader';

export interface SupertonicConfig {
  baseUrl?: string;
  voice?: string;
  lang?: string;
  speed?: number;
  totalSteps?: number;
  /** Injected factory — for testing. Defaults to new AudioContext(). */
  audioContextFactory?: () => AudioContext;
}

export class SupertonicReader implements TextReader {
  private readonly baseUrl: string;
  private readonly voice: string;
  private readonly lang: string;
  private readonly speed: number;
  private readonly totalSteps: number;
  private readonly audioContextFactory: () => AudioContext;

  private audioContext: AudioContext | null = null;
  private sourceNode: AudioBufferSourceNode | null = null;
  private abortController: AbortController | null = null;

  constructor(config: SupertonicConfig = {}) {
    this.baseUrl = config.baseUrl ?? 'http://127.0.0.1:7788';
    this.voice = config.voice ?? 'M1';
    this.lang = config.lang ?? 'en';
    this.speed = config.speed ?? 1.05;
    this.totalSteps = config.totalSteps ?? 8;
    this.audioContextFactory =
      config.audioContextFactory ?? (() => new AudioContext({ sampleRate: 44100 }));
  }

  async speak(text: string, options?: SpeakOptions): Promise<void> {
    this.abortController = new AbortController();

    // If resumeFromChar is set, only speak the remaining portion.
    // Boundary events will be offset back to absolute positions.
    const offset = options?.resumeFromChar ?? 0;
    const textToSpeak = offset > 0 ? text.slice(offset) : text;
    if (!textToSpeak.trim()) return;

    // Request TTS from local server
    const response = await fetch(`${this.baseUrl}/v1/tts`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        text: textToSpeak,
        voice: this.voice,
        lang: this.lang,
        speed: this.speed,
        total_steps: this.totalSteps,
      }),
      signal: this.abortController.signal,
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      const message = err?.error?.message ?? `Supertonic server error: ${response.status}`;
      throw new Error(message);
    }

    const audioData = await response.arrayBuffer();
    await this.playAudioWithBoundaries(audioData, textToSpeak, offset, options);
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
    audioData: ArrayBuffer,
    text: string,
    offset: number,
    options?: SpeakOptions,
  ): Promise<void> {
    const ctx = this.getAudioContext();
    const audioBuffer = await ctx.decodeAudioData(audioData.slice(0));
    const duration = audioBuffer.duration;

    // Pre-compute word positions — map char positions to time offsets
    const words = computeWords(text, offset);
    const totalChars = text.length;
    const lastCharPos = offset + totalChars;

    const source = ctx.createBufferSource();
    source.buffer = audioBuffer;
    source.playbackRate.value = options?.rate ?? 1;
    source.connect(ctx.destination);
    this.sourceNode = source;

    // Fire boundary events at proportional time positions
    const boundaryInterval = 50; // ms between checks
    let boundaryIndex = 0;

    const tick = setInterval(() => {
      if (ctx.state === 'closed') {
        clearInterval(tick);
        return;
      }
      const elapsed = ctx.currentTime - startTime;
      // Map elapsed time to char position proportionally
      const progress = Math.min(elapsed / duration, 1);
      const currentCharPos = offset + Math.floor(progress * totalChars);

      while (boundaryIndex < words.length) {
        const word = words[boundaryIndex];
        if (!word) break;
        if (word.charIndex > currentCharPos) break;
        options?.onBoundary?.(word);
        boundaryIndex++;
      }

      // All words spoken and audio finished
      if (boundaryIndex >= words.length && elapsed >= duration) {
        clearInterval(tick);
      }
    }, boundaryInterval);

    let startTime = 0;

    return new Promise<void>((resolve) => {
      source.addEventListener('ended', () => {
        clearInterval(tick);
        // Fire any remaining boundary events
        while (boundaryIndex < words.length) {
          const word = words[boundaryIndex];
          if (!word) break;
          if (word.charIndex <= lastCharPos) {
            options?.onBoundary?.(word);
          }
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

/** Extract word positions from text. Offset is added to charIndex for absolute positions. */
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
