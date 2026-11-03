import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { KOKORO_ENGINE_ASSETS, KOKORO_VOICES } from '../../domain/voices/catalog';
import { sourceUrl } from '../../domain/voices/voice';
import { kokoroDownloadHeaders } from '../voices/kokoro-model';

const mocks = vi.hoisted(() => ({
  modelFromPretrained: vi.fn(),
  tokenizerFromPretrained: vi.fn(),
  env: {
    allowLocalModels: false,
    allowRemoteModels: true,
    useBrowserCache: true,
    useCustomCache: false,
    customCache: undefined as Cache | undefined,
  },
}));

vi.mock('@huggingface/transformers', () => ({
  AutoTokenizer: { from_pretrained: mocks.tokenizerFromPretrained },
  RawAudio: class {},
  StyleTextToSpeech2Model: { from_pretrained: mocks.modelFromPretrained },
  Tensor: class {},
  env: mocks.env,
}));

vi.mock('kokoro-js', () => ({
  KokoroTTS: class {
    constructor(
      readonly model: unknown,
      readonly tokenizer: unknown,
    ) {}
  },
}));

function stubCache(
  options: { missingUrl?: string; unverifiedVoice?: boolean; voiceByteLength?: number } = {},
) {
  const voice = KOKORO_VOICES[0];
  if (!voice) throw new Error('Kokoro catalog is empty');

  const entries = new Map<string, Response>();
  for (const asset of KOKORO_ENGINE_ASSETS.assets) {
    if (sourceUrl(asset.source) === options.missingUrl) continue;
    const headers = kokoroDownloadHeaders(null, asset.source);
    entries.set(sourceUrl(asset.source), new Response('', { headers }));
  }

  const voiceHeaders = kokoroDownloadHeaders(null, voice.source);
  if (options.unverifiedVoice) voiceHeaders.set('x-dita-verified-sha256', '0'.repeat(64));
  const voiceBuffer = new Uint8Array(options.voiceByteLength ?? 522_240);
  entries.set(sourceUrl(voice.source), new Response(voiceBuffer, { headers: voiceHeaders }));

  const cache = {
    match: vi.fn(async (url: string) => entries.get(url)?.clone()),
  } as unknown as Cache;
  vi.stubGlobal('caches', { open: vi.fn().mockResolvedValue(cache) });
  return { cache, voice };
}

describe('loadKokoroTts', () => {
  beforeEach(() => {
    vi.resetModules();
    mocks.modelFromPretrained.mockReset().mockResolvedValue({});
    mocks.tokenizerFromPretrained.mockReset().mockResolvedValue({});
    Object.assign(mocks.env, {
      allowLocalModels: false,
      allowRemoteModels: true,
      useBrowserCache: true,
      useCustomCache: false,
      customCache: undefined,
    });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('rejects an unknown voice before opening the cache', async () => {
    const open = vi.fn();
    vi.stubGlobal('caches', { open });
    const { loadKokoroTts } = await import('./kokoro-runtime');

    await expect(loadKokoroTts('kokoro-not-a-voice')).rejects.toThrow(
      'Unknown Kokoro voice: kokoro-not-a-voice',
    );
    expect(open).not.toHaveBeenCalled();
    expect(mocks.modelFromPretrained).not.toHaveBeenCalled();
  });

  it('rejects missing shared model assets without initializing Transformers.js', async () => {
    const missingAsset = KOKORO_ENGINE_ASSETS.assets[0];
    if (!missingAsset) throw new Error('Kokoro model assets are empty');
    stubCache({ missingUrl: sourceUrl(missingAsset.source) });
    const voice = KOKORO_VOICES[0];
    if (!voice) throw new Error('Kokoro catalog is empty');
    const { loadKokoroTts } = await import('./kokoro-runtime');

    await expect(loadKokoroTts(voice.id)).rejects.toThrow('Kokoro model assets are not installed');
    expect(mocks.modelFromPretrained).not.toHaveBeenCalled();
    expect(mocks.tokenizerFromPretrained).not.toHaveBeenCalled();
  });

  it('rejects a wrong-sized selected voice even when its cache markers are valid', async () => {
    const { voice } = stubCache({ voiceByteLength: 4 });
    const { loadKokoroTts } = await import('./kokoro-runtime');

    await expect(loadKokoroTts(voice.id)).rejects.toThrow(
      `Kokoro voice embedding has an invalid size: ${voice.id}`,
    );
    expect(mocks.modelFromPretrained).not.toHaveBeenCalled();
  });

  it('rejects an unverified selected voice before initializing the model', async () => {
    const { voice } = stubCache({ unverifiedVoice: true });
    const { loadKokoroTts } = await import('./kokoro-runtime');

    await expect(loadKokoroTts(voice.id)).rejects.toThrow(
      `Kokoro voice is not installed or verified: ${voice.id}`,
    );
    expect(mocks.modelFromPretrained).not.toHaveBeenCalled();
  });

  it('loads the pinned model and tokenizer from the verified local cache only', async () => {
    const { cache, voice } = stubCache();
    const { loadKokoroTts } = await import('./kokoro-runtime');

    await expect(loadKokoroTts(voice.id)).resolves.toBeDefined();

    expect(mocks.env).toMatchObject({
      allowLocalModels: true,
      allowRemoteModels: false,
      useBrowserCache: false,
      useCustomCache: true,
      customCache: cache,
    });
    expect(mocks.modelFromPretrained).toHaveBeenCalledWith(
      'onnx-community/Kokoro-82M-v1.0-ONNX',
      expect.objectContaining({
        dtype: 'q8',
        device: 'wasm',
        revision: '1939ad2a8e416c0acfeecc08a694d14ef25f2231',
        local_files_only: true,
      }),
    );
    expect(mocks.tokenizerFromPretrained).toHaveBeenCalledWith(
      'onnx-community/Kokoro-82M-v1.0-ONNX',
      expect.objectContaining({
        revision: '1939ad2a8e416c0acfeecc08a694d14ef25f2231',
        local_files_only: true,
      }),
    );
  });

  it('retries model initialization after a failed load', async () => {
    const { voice } = stubCache();
    const { loadKokoroTts } = await import('./kokoro-runtime');
    mocks.modelFromPretrained.mockRejectedValueOnce(new Error('model initialization failed'));

    await expect(loadKokoroTts(voice.id)).rejects.toThrow('model initialization failed');
    await expect(loadKokoroTts(voice.id)).resolves.toBeDefined();

    expect(mocks.modelFromPretrained).toHaveBeenCalledTimes(2);
  });
});
