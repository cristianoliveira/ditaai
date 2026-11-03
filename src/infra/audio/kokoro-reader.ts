import type { BoundarySchedule, SpeakOptions, TextReader } from '../../domain/audio/text-reader';
import type { KokoroSynthesizer, KokoroVoiceAlias } from './kokoro-runtime';
import { computeWordTimings } from './word-timing';

const SAMPLE_RATE = 24_000;
const MAX_PREPARED_SPEECH = 4;

interface PreparedSpeech {
  audio: AudioBuffer;
  schedule: BoundarySchedule;
}

export class KokoroReader implements TextReader {
  private readonly prepared = new Map<string, Promise<PreparedSpeech>>();
  private synthesisQueue: Promise<void> = Promise.resolve();
  private audioContext: AudioContext | null = null;
  private sourceNode: AudioBufferSourceNode | null = null;
  private playbackId = 0;

  onBoundary?: SpeakOptions['onBoundary'];
  onBoundarySchedule?: (schedule: BoundarySchedule) => void;

  constructor(
    private readonly tts: KokoroSynthesizer,
    private readonly voice: KokoroVoiceAlias,
    private readonly audioContextFactory: () => AudioContext = () =>
      new AudioContext({ sampleRate: SAMPLE_RATE }),
  ) {}

  async prepare(text: string, options?: SpeakOptions): Promise<void> {
    await this.getPreparedSpeech(text, options);
  }

  async speak(text: string, options?: SpeakOptions): Promise<void> {
    const playbackId = ++this.playbackId;
    this.stopSource();

    const speech = await this.getPreparedSpeech(text, options);
    if (playbackId !== this.playbackId) return;

    this.onBoundary = options?.onBoundary;
    await this.play(speech, options?.volume);
    if (playbackId === this.playbackId) this.onBoundary = undefined;
  }

  private getPreparedSpeech(text: string, options?: SpeakOptions): Promise<PreparedSpeech> {
    const offset = Math.max(0, options?.resumeFromChar ?? 0);
    const textToSpeak = offset > 0 ? text.slice(offset) : text;
    if (!textToSpeak.trim()) {
      return Promise.reject(new Error('Kokoro cannot synthesize empty text'));
    }

    const rate = normalizedRate(options?.rate);
    const key = JSON.stringify([text, offset, rate]);
    const cached = this.prepared.get(key);
    if (cached) return cached;

    const pending = this.synthesisQueue.then(async () => {
      const result = await this.tts.generate(textToSpeak, { voice: this.voice, speed: rate });
      const samples = result.audio;
      if (result.sampling_rate !== SAMPLE_RATE || samples.length === 0) {
        throw new Error('Kokoro returned invalid audio');
      }
      let peak = 0;
      for (const sample of samples) {
        if (!Number.isFinite(sample)) throw new Error('Kokoro returned invalid audio');
        peak = Math.max(peak, Math.abs(sample));
      }
      if (peak < 1e-5) throw new Error('Kokoro produced silent audio');

      const context = this.getAudioContext();
      const audio = context.createBuffer(1, samples.length, SAMPLE_RATE);
      audio.copyToChannel(samples, 0);
      return {
        audio,
        schedule: {
          durationMs: audio.duration * 1_000,
          boundaries: computeWordTimings(textToSpeak, offset),
          sampleCount: samples.length,
        },
      };
    });
    this.synthesisQueue = pending.then(
      () => undefined,
      () => undefined,
    );
    this.prepared.set(key, pending);
    void pending.catch(() => {
      if (this.prepared.get(key) === pending) this.prepared.delete(key);
    });
    while (this.prepared.size > MAX_PREPARED_SPEECH) {
      const oldestKey = this.prepared.keys().next().value;
      if (oldestKey === undefined) break;
      this.prepared.delete(oldestKey);
    }
    return pending;
  }

  private play(speech: PreparedSpeech, volume?: number): Promise<void> {
    const context = this.getAudioContext();
    const source = context.createBufferSource();
    const gain = context.createGain();
    source.buffer = speech.audio;
    gain.gain.value = volume ?? 1;
    source.connect(gain);
    gain.connect(context.destination);
    this.sourceNode = source;

    return new Promise((resolve) => {
      source.addEventListener('ended', () => {
        source.disconnect();
        if (this.sourceNode === source) this.sourceNode = null;
        resolve();
      });
      this.onBoundarySchedule?.(speech.schedule);
      source.start();
    });
  }

  private getAudioContext(): AudioContext {
    if (!this.audioContext || this.audioContext.state === 'closed') {
      this.audioContext = this.audioContextFactory();
    }
    return this.audioContext;
  }

  private stopSource(): void {
    const source = this.sourceNode;
    this.sourceNode = null;
    if (!source) return;
    try {
      source.stop();
    } catch {
      // A source that already ended cannot be stopped again.
    }
  }

  pause(): void {
    if (this.audioContext?.state === 'running') void this.audioContext.suspend();
  }

  resume(): void {
    if (this.audioContext?.state === 'suspended') void this.audioContext.resume();
  }

  stop(): void {
    this.playbackId++;
    this.prepared.clear();
    this.onBoundary = undefined;
    this.stopSource();
  }
}

function normalizedRate(rate?: number): number {
  if (rate === undefined || !Number.isFinite(rate)) return 1;
  return Math.min(2, Math.max(0.5, rate));
}
