import { afterEach, describe, expect, it, vi } from 'vitest';
import { PHONON_ENGINE_ASSETS, PHONON_VOICES } from '../../domain/voices/catalog';
import { sourceUrl } from '../../domain/voices/voice';
import { CacheStorageVoiceInstaller } from './cache-storage-installer';
import {
  PHONON_CACHE_NAME,
  PHONON_MODEL_Q8_BYTES,
  isVerifiedPhononAsset,
  phononAssetByteLength,
} from './phonon-model';

const VERIFIED_SIZE_HEADER = 'x-dita-verified-size';
function getModelAsset() {
  const modelAsset = PHONON_ENGINE_ASSETS.assets[2];
  if (!modelAsset) throw new Error('Phonon test catalog is incomplete');
  return modelAsset;
}

function getPhononVoice() {
  const voice = PHONON_VOICES[0];
  if (!voice) throw new Error('Phonon test catalog is incomplete');
  return voice;
}

function verifiedResponse(url: string): Response {
  const source = [
    ...PHONON_ENGINE_ASSETS.assets.map((asset) => asset.source),
    getPhononVoice().source,
  ].find((candidate) => sourceUrl(candidate) === url);
  const byteLength = source && phononAssetByteLength(source);
  if (byteLength === undefined) throw new Error(`No Phonon size for ${url}`);
  return new Response('verified bytes', {
    headers: { [VERIFIED_SIZE_HEADER]: String(byteLength) },
  });
}

function stubPhononCache() {
  const entries = new Map<string, Response>();
  const cache = {
    match: vi.fn(async (url: string) => entries.get(url)?.clone()),
    put: vi.fn(async (url: string, response: Response) => {
      entries.set(url, response.clone());
    }),
    delete: vi.fn(async (url: string) => entries.delete(url)),
  };
  const open = vi.fn(async () => cache);
  vi.stubGlobal('caches', { open });
  const download = vi.fn(async (url: string, _progress, expectedByteLength, cacheName) => {
    expect(cacheName).toBe(PHONON_CACHE_NAME);
    const source = [
      ...PHONON_ENGINE_ASSETS.assets.map((asset) => asset.source),
      getPhononVoice().source,
    ].find((candidate) => sourceUrl(candidate) === url);
    expect(expectedByteLength).toBe(source && phononAssetByteLength(source));
    await cache.put(url, verifiedResponse(url));
  });
  return { cache, entries, open, download };
}

describe('Phonon cached assets', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('pins the q8 model size and verifies all files in the runtime cache', async () => {
    const { entries, download, open } = stubPhononCache();
    const voice = getPhononVoice();
    const installer = new CacheStorageVoiceInstaller(download);

    await installer.install(voice);
    await installer.install(voice);

    expect(PHONON_MODEL_Q8_BYTES).toBe(64_512_352);
    expect(download).toHaveBeenCalledTimes(4);
    expect(open).toHaveBeenCalledWith(PHONON_CACHE_NAME);
    expect(entries.size).toBe(4);
    await expect(installer.isInstalled(voice)).resolves.toBe(true);
    await expect(installer.listInstalled()).resolves.toEqual([
      expect.objectContaining({ voice, sizeBytes: 'verified bytes'.length }),
    ]);
    expect(
      isVerifiedPhononAsset(
        sourceUrl(getModelAsset().source),
        entries.get(sourceUrl(getModelAsset().source)) ?? new Response('missing'),
      ),
    ).toBe(true);
  });

  it('replaces a cached model missing the integrity marker before reporting installed', async () => {
    const { cache, entries, download } = stubPhononCache();
    const installer = new CacheStorageVoiceInstaller(download);
    const voice = getPhononVoice();
    const modelUrl = sourceUrl(getModelAsset().source);
    entries.set(modelUrl, new Response('truncated model'));

    await installer.install(voice);

    expect(cache.delete).toHaveBeenCalledWith(modelUrl);
    expect(download).toHaveBeenCalledTimes(4);
    await expect(installer.isInstalled(voice)).resolves.toBe(true);
  });

  it('uninstalls the indivisible model and voice bundle', async () => {
    const { entries, download } = stubPhononCache();
    const installer = new CacheStorageVoiceInstaller(download);
    const voice = getPhononVoice();
    await installer.install(voice);

    await installer.uninstall(voice);

    expect(entries.size).toBe(0);
    await expect(installer.isInstalled(voice)).resolves.toBe(false);
  });
});
