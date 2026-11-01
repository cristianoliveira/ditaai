import * as ort from 'onnxruntime-web';
import type { BoundarySchedule, SpeakOptions, TextReader } from '../../domain/audio/text-reader';
import { logger } from '../../lib/logger';
import type { KittenAssets, KittenVoiceEmbedding } from './kitten-cache';
import { type Phonemize, textToKittenTokenIds } from './kitten-phonemizer';
import { computeWordTimings } from './word-timing';

interface PreparedSpeech {
  audio: AudioBuffer;
  schedule: BoundarySchedule;
}

export interface KittenOnnxReaderConfig {
  assets: KittenAssets;
  voiceAlias: string;
  phonemize?: Phonemize;
  audioContextFactory?: () => AudioContext;
  sessionFactory?: (model: ArrayBuffer) => Promise<ort.InferenceSession>;
}

const SAMPLE_RATE = 24_000;
const MAX_CHARS_PER_CHUNK = 400;

export class KittenOnnxReader implements TextReader {
  private readonly assets: KittenAssets;
  private readonly voiceAlias: string;
  private readonly phonemize?: Phonemize;
  private readonly audioContextFactory: () => AudioContext;
  private readonly sessionFactory: (model: ArrayBuffer) => Promise<ort.InferenceSession>;
  private session: ort.InferenceSession | null = null;
  private sessionInitialization: Promise<ort.InferenceSession> | null = null;
  private audioContext: AudioContext | null = null;
  private sourceNode: AudioBufferSourceNode | null = null;
  private readonly prepared = new Map<string, Promise<PreparedSpeech>>();
  private inferenceQueue: Promise<void> = Promise.resolve();

  /** Boundaries are relayed from the offscreen document to the active tab. */
  onBoundary?: SpeakOptions['onBoundary'];
  onBoundarySchedule?: (schedule: BoundarySchedule) => void;
  onSynthesisComplete?: (metrics: {
    sampleCount: number;
    inferenceMs: number;
    peak: number;
    rms: number;
  }) => void;
  onPlaybackStarted?: () => void;

  constructor(config: KittenOnnxReaderConfig) {
    this.assets = config.assets;
    this.voiceAlias = config.voiceAlias;
    this.phonemize = config.phonemize;
    this.audioContextFactory =
      config.audioContextFactory ?? (() => new AudioContext({ sampleRate: SAMPLE_RATE }));
    this.sessionFactory = config.sessionFactory ?? createSession;
  }

  async prepare(text: string, options?: SpeakOptions): Promise<void> {
    await this.getPreparedSpeech(text, options);
  }

  async speak(text: string, options?: SpeakOptions): Promise<void> {
    const offset = options?.resumeFromChar ?? 0;
    const textToSpeak = offset > 0 ? text.slice(offset) : text;
    if (!textToSpeak.trim()) return;

    const key = JSON.stringify([text, options?.resumeFromChar ?? 0, options?.rate ?? 1]);
    const speech = await this.getPreparedSpeech(text, options);
    this.prepared.delete(key);
    await this.play(speech, options?.volume);
  }

  private getPreparedSpeech(text: string, options?: SpeakOptions): Promise<PreparedSpeech> {
    const key = JSON.stringify([text, options?.resumeFromChar ?? 0, options?.rate ?? 1]);
    const cached = this.prepared.get(key);
    if (cached) return cached;

    const pending = this.synthesize(text, options);
    this.prepared.set(key, pending);
    void pending.catch(() => {
      if (this.prepared.get(key) === pending) this.prepared.delete(key);
    });
    while (this.prepared.size > 4) {
      const oldest = this.prepared.keys().next().value;
      if (!oldest) break;
      this.prepared.delete(oldest);
    }
    return pending;
  }

  private async synthesize(text: string, options?: SpeakOptions): Promise<PreparedSpeech> {
    const offset = options?.resumeFromChar ?? 0;
    const textToSpeak = offset > 0 ? text.slice(offset) : text;
    const session = await this.getSession();
    const alias = this.assets.config.voice_aliases[this.voiceAlias];
    const voice = alias ? this.assets.voices[alias] : undefined;
    if (!alias || !voice) throw new Error(`Kitten voice embedding is missing: ${this.voiceAlias}`);
    const speedPrior = this.assets.config.speed_priors?.[alias] ?? 1;

    const chunks = splitText(textToSpeak, MAX_CHARS_PER_CHUNK);
    if (chunks.length === 0) throw new Error('Kitten cannot synthesize empty text');
    const inferenceStartedAt = Date.now();
    const audioChunks: Float32Array[] = [];
    for (const chunk of chunks) {
      const tokenIds = await textToKittenTokenIds(chunk, this.phonemize);
      if (tokenIds.length <= 3) continue;
      const style = styleForText(voice, chunk.length);
      const inference = this.inferenceQueue.then(() =>
        session.run({
          input_ids: new ort.Tensor('int64', BigInt64Array.from(tokenIds, BigInt), [
            1,
            tokenIds.length,
          ]),
          style: new ort.Tensor('float32', style, [1, style.length]),
          speed: new ort.Tensor(
            'float32',
            new Float32Array([(options?.rate ?? 1) * speedPrior]),
            [1],
          ),
        }),
      );
      this.inferenceQueue = inference.then(
        () => undefined,
        () => undefined,
      );
      const outputs = await inference;
      const outputName = session.outputNames[0];
      const waveform = outputName ? outputs[outputName]?.data : undefined;
      if (!(waveform instanceof Float32Array) || waveform.length === 0) {
        throw new Error('Kitten model returned no audio');
      }
      if (!Number.isFinite(waveform[0])) throw new Error('Kitten model returned invalid audio');
      audioChunks.push(waveform);
    }

    const totalSamples = audioChunks.reduce((sum, chunk) => sum + chunk.length, 0);
    if (totalSamples === 0) throw new Error('Kitten produced no audio for this text');
    const samples = new Float32Array(totalSamples);
    let cursor = 0;
    for (const chunk of audioChunks) {
      samples.set(chunk, cursor);
      cursor += chunk.length;
    }

    let peak = 0;
    let sumSquares = 0;
    for (const sample of samples) {
      if (!Number.isFinite(sample)) throw new Error('Kitten model returned invalid audio');
      const magnitude = Math.abs(sample);
      peak = Math.max(peak, magnitude);
      sumSquares += sample * sample;
    }
    if (peak < 1e-5) throw new Error('Kitten produced silent audio');

    const inferenceMs = Date.now() - inferenceStartedAt;
    const rms = Math.sqrt(sumSquares / samples.length);
    logger.info('[kitten] synthesis:complete', {
      inputChars: textToSpeak.length,
      chunks: chunks.length,
      sampleCount: samples.length,
      inferenceMs,
      peak,
      rms,
    });
    this.onSynthesisComplete?.({ sampleCount: samples.length, inferenceMs, peak, rms });
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
  }

  private async getSession(): Promise<ort.InferenceSession> {
    if (this.session) return this.session;
    if (this.sessionInitialization) return this.sessionInitialization;
    this.sessionInitialization = this.sessionFactory(this.assets.model)
      .then((session) => {
        this.session = session;
        return session;
      })
      .finally(() => {
        this.sessionInitialization = null;
      });
    return this.sessionInitialization;
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
      source.start();
      this.onPlaybackStarted?.();
      this.onBoundarySchedule?.(speech.schedule);
    });
  }

  private getAudioContext(): AudioContext {
    if (!this.audioContext || this.audioContext.state === 'closed') {
      this.audioContext = this.audioContextFactory();
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
    const source = this.sourceNode;
    if (!source) return;
    this.sourceNode = null;
    try {
      source.stop();
    } catch {
      // A source that has already ended cannot be stopped again.
    }
  }
}

async function createSession(model: ArrayBuffer): Promise<ort.InferenceSession> {
  if ('gpu' in navigator) {
    try {
      return await ort.InferenceSession.create(model, { executionProviders: ['webgpu'] });
    } catch {
      // WebGPU is optional; keep the offline engine available through WASM.
    }
  }
  return ort.InferenceSession.create(model, { executionProviders: ['wasm'] });
}

function styleForText(voice: KittenVoiceEmbedding, length: number): Float32Array {
  const styleIndex = Math.min(length, voice.styleCount - 1);
  const start = styleIndex * voice.styleDim;
  return voice.data.slice(start, start + voice.styleDim);
}

function splitText(text: string, maxLength: number): string[] {
  const sentences = text.match(/[^.!?]*[.!?]+|[^.!?]+$/g) ?? [text];
  const chunks: string[] = [];
  for (const rawSentence of sentences) {
    const sentence = rawSentence.trim();
    if (!sentence) continue;
    if (sentence.length <= maxLength) {
      chunks.push(sentence);
      continue;
    }
    let current = '';
    for (const word of sentence.split(/\s+/)) {
      if (word.length > maxLength) {
        if (current) chunks.push(current);
        chunks.push(word);
        current = '';
        continue;
      }
      if (current && current.length + word.length + 1 > maxLength) {
        chunks.push(current);
        current = word;
      } else {
        current = current ? `${current} ${word}` : word;
      }
    }
    if (current) chunks.push(current);
  }
  return chunks;
}
