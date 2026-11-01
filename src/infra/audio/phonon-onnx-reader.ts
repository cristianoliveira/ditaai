import type { PhononTTS } from 'phonon-tts';
import type {
  BoundaryEvent,
  BoundarySchedule,
  SpeakOptions,
  TextReader,
} from '../../domain/audio/text-reader';
import { logger } from '../../lib/logger';
import { computeWordTimings } from './word-timing';

interface PreparedSpeech {
  samples: Float32Array;
  boundaries: ReturnType<typeof computeWordTimings>;
}

export interface PhononOnnxReaderConfig {
  audioContextFactory?: (sampleRate: number) => AudioContext;
}

const MAX_PREPARED_SPEECH = 4;

export class PhononOnnxReader implements TextReader {
  private readonly audioContextFactory: (sampleRate: number) => AudioContext;
  private readonly preparations = new Map<string, Promise<PreparedSpeech>>();
  private readonly controllers = new Set<AbortController>();
  /** Keep inference exclusive even when lookahead overlaps a seek or playback request. */
  private inferenceQueue: Promise<void> = Promise.resolve();
  private audioContext: AudioContext | null = null;
  private activePlayback: { source: AudioBufferSourceNode; finish: () => void } | null = null;
  private operationId = 0;

  onBoundary?: (event: BoundaryEvent) => void;
  onBoundarySchedule?: (schedule: BoundarySchedule) => void;

  constructor(
    private readonly tts: PhononTTS,
    config: PhononOnnxReaderConfig = {},
  ) {
    this.audioContextFactory =
      config.audioContextFactory ?? ((sampleRate) => new AudioContext({ sampleRate }));
  }

  async prepare(text: string, options?: SpeakOptions): Promise<void> {
    await this.getPreparedSpeech(text, options);
  }

  async speak(text: string, options?: SpeakOptions): Promise<void> {
    const operationId = this.operationId;
    const offset = options?.resumeFromChar ?? 0;
    const textToSpeak = text.slice(offset);
    if (!textToSpeak.trim()) return;

    const key = this.preparationKey(text, offset);
    const prepared = await this.getPreparedSpeech(text, options);
    if (operationId !== this.operationId) return;
    this.preparations.delete(key);
    await this.play(prepared, options);
  }

  private getPreparedSpeech(text: string, options?: SpeakOptions): Promise<PreparedSpeech> {
    const offset = options?.resumeFromChar ?? 0;
    const textToSpeak = text.slice(offset);
    if (!textToSpeak.trim())
      return Promise.reject(new Error('Phonon cannot synthesize empty text'));

    const key = this.preparationKey(text, offset);
    const existing = this.preparations.get(key);
    if (existing) return existing;

    const controller = new AbortController();
    this.controllers.add(controller);
    const preparation = this.queueInference(() =>
      this.synthesize(textToSpeak, offset, controller.signal),
    ).finally(() => this.controllers.delete(controller));
    this.preparations.set(key, preparation);
    void preparation.catch(() => {
      if (this.preparations.get(key) === preparation) this.preparations.delete(key);
    });
    while (this.preparations.size > MAX_PREPARED_SPEECH) {
      const oldestKey = this.preparations.keys().next().value;
      if (oldestKey === undefined) break;
      const oldest = this.preparations.get(oldestKey);
      this.preparations.delete(oldestKey);
      void oldest?.catch(() => {});
    }
    return preparation;
  }

  private queueInference<T>(infer: () => Promise<T>): Promise<T> {
    const queued = this.inferenceQueue.then(infer, infer);
    this.inferenceQueue = queued.then(
      () => undefined,
      () => undefined,
    );
    return queued;
  }

  private async synthesize(
    text: string,
    offset: number,
    signal: AbortSignal,
  ): Promise<PreparedSpeech> {
    if (signal.aborted) throw abortError();
    const stream = this.tts.stream(text, { voice: 'default', signal });
    const chunks: Float32Array[] = [];
    let sampleCount = 0;

    try {
      for await (const chunk of stream) {
        if (signal.aborted) throw abortError();
        if (!(chunk instanceof Float32Array)) throw new Error('Phonon returned invalid audio');
        chunks.push(chunk);
        sampleCount += chunk.length;
      }
    } catch (error) {
      if (signal.aborted) throw abortError();
      throw error;
    }

    if (signal.aborted) throw abortError();
    if (sampleCount === 0) throw new Error('Phonon produced no audio for this text');

    const samples = new Float32Array(sampleCount);
    let cursor = 0;
    let peak = 0;
    for (const chunk of chunks) {
      for (const sample of chunk) {
        if (!Number.isFinite(sample)) throw new Error('Phonon returned invalid audio');
        peak = Math.max(peak, Math.abs(sample));
      }
      samples.set(chunk, cursor);
      cursor += chunk.length;
    }
    if (peak < 1e-5) throw new Error('Phonon produced silent audio');

    logger.info('[phonon] synthesis:complete', {
      inputChars: text.length,
      sampleCount,
      sampleRate: this.tts.sampleRate,
      durationMs: (sampleCount / this.tts.sampleRate) * 1_000,
    });
    return { samples, boundaries: computeWordTimings(text, offset) };
  }

  private play(prepared: PreparedSpeech, options?: SpeakOptions): Promise<void> {
    const context = this.getAudioContext();
    const audio = context.createBuffer(1, prepared.samples.length, this.tts.sampleRate);
    audio.copyToChannel(prepared.samples, 0);

    const source = context.createBufferSource();
    source.buffer = audio;
    const rate = validRate(options?.rate);
    source.playbackRate.value = rate;
    const gain = context.createGain();
    gain.gain.value = options?.volume ?? 1;
    source.connect(gain);
    gain.connect(context.destination);

    const schedule: BoundarySchedule = {
      durationMs: (audio.duration * 1_000) / rate,
      boundaries: prepared.boundaries,
      sampleCount: prepared.samples.length,
    };
    this.onBoundarySchedule?.(schedule);
    this.activePlayback = { source, finish: () => {} };

    return new Promise<void>((resolve) => {
      let finished = false;
      const finish = (): void => {
        if (finished) return;
        finished = true;
        source.disconnect();
        if (this.activePlayback?.source === source) this.activePlayback = null;
        resolve();
      };
      this.activePlayback = { source, finish };
      source.addEventListener('ended', finish, { once: true });
      source.start();
      logger.info('[phonon] playback:started', {
        sampleCount: prepared.samples.length,
        durationMs: schedule.durationMs,
        rate,
      });
    });
  }

  private preparationKey(text: string, offset: number): string {
    return JSON.stringify([text, offset]);
  }

  private getAudioContext(): AudioContext {
    if (!this.audioContext || this.audioContext.state === 'closed') {
      this.audioContext = this.audioContextFactory(this.tts.sampleRate);
    }
    return this.audioContext;
  }

  pause(): void {
    if (this.audioContext?.state === 'running') this.audioContext.suspend().catch(() => {});
  }

  resume(): void {
    if (this.audioContext?.state === 'suspended') this.audioContext.resume().catch(() => {});
  }

  stop(): void {
    this.operationId++;
    for (const controller of this.controllers) controller.abort();
    this.controllers.clear();
    this.preparations.clear();

    const playback = this.activePlayback;
    if (!playback) return;
    this.activePlayback = null;
    try {
      playback.source.stop();
    } catch {
      // An already-ended source cannot be stopped again.
    }
    playback.finish();
  }

  dispose(): void {
    this.stop();
    this.tts.dispose();
    void this.audioContext?.close();
    this.audioContext = null;
  }
}

function validRate(rate: number | undefined): number {
  if (rate === undefined || !Number.isFinite(rate)) return 1;
  return Math.max(0.1, rate);
}

function abortError(): DOMException {
  return new DOMException('Phonon synthesis was cancelled', 'AbortError');
}
