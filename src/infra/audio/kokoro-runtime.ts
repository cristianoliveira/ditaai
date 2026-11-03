import {
  AutoTokenizer,
  RawAudio,
  StyleTextToSpeech2Model,
  Tensor,
  env,
} from '@huggingface/transformers';
import { type GenerateOptions, KokoroTTS } from 'kokoro-js';
import { KOKORO_VOICES, kokoroVoiceAlias } from '../../domain/voices/catalog';
import { sourceUrl } from '../../domain/voices/voice';
import {
  KOKORO_CACHE_NAME,
  areKokoroAssetsInstalled,
  isVerifiedKokoroAsset,
} from '../voices/kokoro-model';

const MODEL_ID = 'onnx-community/Kokoro-82M-v1.0-ONNX';
const REVISION = '1939ad2a8e416c0acfeecc08a694d14ef25f2231';
const VOICE_EMBEDDING_SIZE = 510 * 256;
const SAMPLE_RATE = 24_000;

export type KokoroVoiceAlias = 'af_heart' | 'am_michael' | 'bf_emma' | 'bm_george';

interface KokoroAudio {
  audio: Float32Array;
  sampling_rate: number;
}

interface KokoroSynthesisOptions {
  voice: KokoroVoiceAlias;
  speed: number;
}

export interface KokoroSynthesizer {
  generate(text: string, options: KokoroSynthesisOptions): Promise<KokoroAudio>;
}

let modelInitialization:
  | Promise<{
      model: Awaited<ReturnType<typeof StyleTextToSpeech2Model.from_pretrained>>;
      tokenizer: Awaited<ReturnType<typeof AutoTokenizer.from_pretrained>>;
    }>
  | undefined;

class CachedVoiceKokoroTTS extends KokoroTTS {
  private static inferenceQueue: Promise<void> = Promise.resolve();
  private readonly voiceData: Map<KokoroVoiceAlias, Float32Array>;

  constructor(
    model: Awaited<ReturnType<typeof StyleTextToSpeech2Model.from_pretrained>>,
    tokenizer: Awaited<ReturnType<typeof AutoTokenizer.from_pretrained>>,
    voice: KokoroVoiceAlias,
    embedding: Float32Array,
  ) {
    super(model, tokenizer);
    this.voiceData = new Map([[voice, embedding]]);
  }

  override async generate_from_ids(
    inputIds: Tensor,
    { voice = 'af_heart', speed = 1 }: GenerateOptions = {},
  ): Promise<RawAudio> {
    const embedding = this.voiceData.get(voice as KokoroVoiceAlias);
    if (!embedding) throw new Error(`Kokoro voice is not installed: ${voice}`);

    const tokenCount = inputIds.dims.at(-1) ?? 0;
    const styleOffset = 256 * Math.min(Math.max(tokenCount - 2, 0), 509);
    const style = embedding.subarray(styleOffset, styleOffset + 256);
    const inputs = {
      input_ids: inputIds,
      style: new Tensor('float32', style, [1, 256]),
      speed: new Tensor('float32', new Float32Array([speed]), [1]),
    };

    const inference = CachedVoiceKokoroTTS.inferenceQueue.then(() => this.model(inputs));
    CachedVoiceKokoroTTS.inferenceQueue = inference.then(
      () => undefined,
      () => undefined,
    );
    const { waveform } = await inference;
    return new RawAudio(waveform.data as Float32Array, SAMPLE_RATE);
  }
}

/** Load the pinned model and the selected verified voice without remote fallback. */
export async function loadKokoroTts(voiceId: string): Promise<KokoroSynthesizer> {
  const voice = KOKORO_VOICES.find((candidate) => candidate.id === voiceId);
  const alias = kokoroVoiceAlias(voiceId) as KokoroVoiceAlias | undefined;
  if (!voice || !alias) throw new Error(`Unknown Kokoro voice: ${voiceId}`);

  const cache = await caches.open(KOKORO_CACHE_NAME);
  if (!(await areKokoroAssetsInstalled(cache))) {
    throw new Error('Kokoro model assets are not installed');
  }

  const voiceUrl = sourceUrl(voice.source);
  const response = await cache.match(voiceUrl);
  if (!response || !isVerifiedKokoroAsset(voiceUrl, response)) {
    throw new Error(`Kokoro voice is not installed or verified: ${voiceId}`);
  }
  const voiceBytes = await response.arrayBuffer();
  const embedding = new Float32Array(voiceBytes);
  if (embedding.length !== VOICE_EMBEDDING_SIZE) {
    throw new Error(`Kokoro voice embedding has an invalid size: ${voiceId}`);
  }

  modelInitialization ??= loadModel(cache).catch((error: unknown) => {
    modelInitialization = undefined;
    throw error;
  });
  const { model, tokenizer } = await modelInitialization;
  return new CachedVoiceKokoroTTS(model, tokenizer, alias, embedding);
}

async function loadModel(cache: Cache) {
  env.allowLocalModels = true;
  env.useBrowserCache = false;
  env.useCustomCache = true;
  env.customCache = cache;
  env.allowRemoteModels = false;

  const revision = REVISION;
  const [model, tokenizer] = await Promise.all([
    StyleTextToSpeech2Model.from_pretrained(MODEL_ID, {
      dtype: 'q8',
      device: 'wasm',
      revision,
      local_files_only: true,
    }),
    AutoTokenizer.from_pretrained(MODEL_ID, {
      revision,
      local_files_only: true,
    }),
  ]);

  return { model, tokenizer };
}
