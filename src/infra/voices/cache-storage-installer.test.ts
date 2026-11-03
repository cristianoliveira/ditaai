import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  KITTEN_VOICES,
  KOKORO_ENGINE_ASSETS,
  KOKORO_VOICES,
  listVoices,
} from '../../domain/voices/catalog';
import { sourceUrl } from '../../domain/voices/voice';
import { CacheStorageVoiceInstaller } from './cache-storage-installer';
import type { downloadToCache } from './download-to-cache';
import { KITTEN_MODEL_GRAPH_BYTES } from './kitten-model';
import { KOKORO_CACHE_NAME, kokoroAssetIntegrity, kokoroDownloadHeaders } from './kokoro-model';

function stubCache() {
  const modelVoice = KITTEN_VOICES[0];
  if (!modelVoice) throw new Error('Expected a Kitten speaker');
  const modelUrl = sourceUrl(modelVoice.source);
  const entries = new Map<string, Response>();
  const cache = {
    match: vi.fn(async (url: string) => entries.get(url)?.clone()),
    put: vi.fn(async (url: string, response: Response) => {
      entries.set(url, response.clone());
    }),
    delete: vi.fn(async (url: string) => entries.delete(url)),
  };
  vi.stubGlobal('caches', { open: vi.fn().mockResolvedValue(cache) });
  const fetch = vi.fn(async (url: string) =>
    url === modelUrl
      ? new Response(new Uint8Array(KITTEN_MODEL_GRAPH_BYTES), {
          headers: { 'content-length': String(KITTEN_MODEL_GRAPH_BYTES) },
        })
      : new Response('model bytes'),
  );
  vi.stubGlobal('fetch', fetch);
  return { cache, entries, fetch };
}

describe('CacheStorageVoiceInstaller Kokoro assets', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('replaces partial assets and retains shared model files until the last voice is removed', async () => {
    const entries = new Map<string, Response>();
    const cache = {
      match: vi.fn(async (url: string) => entries.get(url)?.clone()),
      put: vi.fn(async (url: string, response: Response) => {
        entries.set(url, response.clone());
      }),
      delete: vi.fn(async (url: string) => entries.delete(url)),
    };
    const cacheName = vi.fn(async (_name: string) => cache);
    vi.stubGlobal('caches', { open: cacheName });

    const allSources = [
      ...KOKORO_ENGINE_ASSETS.assets.map((asset) => asset.source),
      ...listVoices('kokoro').map((voice) => voice.source),
    ];
    const downloads: Array<{ url: string; bytes: number | undefined; sha256: string | undefined }> =
      [];
    const download: typeof downloadToCache = async (url, _progress, bytes, _cacheName, sha256) => {
      downloads.push({ url, bytes, sha256 });
      const source = allSources.find((candidate) => sourceUrl(candidate) === url);
      if (!source) throw new Error(`Unexpected Kokoro URL: ${url}`);
      const headers = kokoroDownloadHeaders(null, source);
      await cache.put(url, new Response('verified', { headers }));
    };
    const first = KOKORO_VOICES[0];
    const second = KOKORO_VOICES[1];
    if (!first || !second) throw new Error('Expected Kokoro presets');

    entries.set(sourceUrl(first.source), new Response('partial voice'));
    const modelAsset = KOKORO_ENGINE_ASSETS.assets.find(
      (asset) => asset.name === 'onnx/model_quantized.onnx',
    );
    if (!modelAsset) throw new Error('Expected the Kokoro q8 model asset');
    const modelUrl = sourceUrl(modelAsset.source);
    entries.set(modelUrl, new Response('partial model'));
    const installer = new CacheStorageVoiceInstaller(download);

    await installer.install(first);
    await installer.install(second);

    expect(downloads).toHaveLength(6);
    expect(cacheName).toHaveBeenCalledWith(KOKORO_CACHE_NAME);
    expect(downloads[0]?.bytes).toBe(44);
    expect(downloads[0]?.sha256).toMatch(/^[a-f0-9]{64}$/);
    expect(await installer.isInstalled(first)).toBe(true);
    expect(await installer.isInstalled(second)).toBe(true);
    await expect(installer.listInstalled()).resolves.toHaveLength(2);

    await installer.uninstall(first);
    expect(entries.has(modelUrl)).toBe(true);
    expect(await installer.isInstalled(second)).toBe(true);

    await installer.uninstall(second);
    expect(entries.size).toBe(0);
  });

  it('rejects cached Kokoro voice assets without the verified digest marker', async () => {
    const voice = KOKORO_VOICES[0];
    if (!voice) throw new Error('Expected a Kokoro preset');
    const url = sourceUrl(voice.source);
    const entries = new Map([[url, new Response('corrupt')]]);
    const cache = {
      match: vi.fn(async (key: string) => entries.get(key)?.clone()),
      put: vi.fn(async (key: string, response: Response) => {
        entries.set(key, response.clone());
      }),
      delete: vi.fn(async (key: string) => entries.delete(key)),
    };
    vi.stubGlobal('caches', { open: vi.fn().mockResolvedValue(cache) });
    const download: typeof downloadToCache = async (
      assetUrl,
      _progress,
      _bytes,
      _cacheName,
      _sha,
    ) => {
      const source = [
        ...KOKORO_ENGINE_ASSETS.assets.map((asset) => asset.source),
        ...listVoices('kokoro').map((candidate) => candidate.source),
      ].find((candidate) => sourceUrl(candidate) === assetUrl);
      if (!source) throw new Error(`Unexpected Kokoro URL: ${assetUrl}`);
      await cache.put(
        assetUrl,
        new Response('verified', { headers: kokoroDownloadHeaders(null, source) }),
      );
    };
    const installer = new CacheStorageVoiceInstaller(download);

    expect(await installer.isInstalled(voice)).toBe(false);
    await installer.install(voice);
    expect(cache.delete).toHaveBeenCalledWith(url);
    expect(await installer.isInstalled(voice)).toBe(true);
  });
});

describe('CacheStorageVoiceInstaller Kitten aliases', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('replaces a partial graph, then reuses the verified shared bundle for every speaker', async () => {
    const { cache, entries, fetch } = stubCache();
    const bella = KITTEN_VOICES[0];
    if (!bella) throw new Error('Expected a Kitten speaker');
    entries.set(sourceUrl(bella.source), new Response('partial model'));
    const installer = new CacheStorageVoiceInstaller();
    const jasper = KITTEN_VOICES[1];
    if (!jasper) throw new Error('Expected a second Kitten speaker');

    await installer.install(bella);
    await installer.install(jasper);

    expect(cache.delete).toHaveBeenCalledWith(sourceUrl(bella.source));
    expect(fetch).toHaveBeenCalledTimes(3);
    await expect(installer.listInstalled()).resolves.toHaveLength(8);
    for (const voice of KITTEN_VOICES) {
      await expect(installer.isInstalled(voice)).resolves.toBe(true);
    }
  });

  it('treats the model and embeddings as one bundle when uninstalling an alias', async () => {
    const { entries } = stubCache();
    const installer = new CacheStorageVoiceInstaller();
    const voice = KITTEN_VOICES[0];
    if (!voice) throw new Error('Expected a Kitten speaker');
    await installer.install(voice);

    await installer.uninstall(voice);

    const otherVoice = KITTEN_VOICES[1];
    if (!otherVoice) throw new Error('Expected another Kitten speaker');
    expect(entries.size).toBe(0);
    await expect(installer.isInstalled(otherVoice)).resolves.toBe(false);
  });
});
