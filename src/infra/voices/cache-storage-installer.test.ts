import { afterEach, describe, expect, it, vi } from 'vitest';
import { KITTEN_VOICES } from '../../domain/voices/catalog';
import { CacheStorageVoiceInstaller } from './cache-storage-installer';

function stubCache() {
  const entries = new Map<string, Response>();
  const cache = {
    match: vi.fn(async (url: string) => entries.get(url)?.clone()),
    put: vi.fn(async (url: string, response: Response) => {
      entries.set(url, response.clone());
    }),
    delete: vi.fn(async (url: string) => entries.delete(url)),
  };
  vi.stubGlobal('caches', { open: vi.fn().mockResolvedValue(cache) });
  const fetch = vi.fn(async () => new Response('model bytes'));
  vi.stubGlobal('fetch', fetch);
  return { cache, entries, fetch };
}

describe('CacheStorageVoiceInstaller Kitten aliases', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('downloads shared runtime files once and recognizes every bundled speaker', async () => {
    const { fetch } = stubCache();
    const installer = new CacheStorageVoiceInstaller();
    const bella = KITTEN_VOICES[0];
    const jasper = KITTEN_VOICES[1];
    if (!bella || !jasper) throw new Error('Expected Kitten speakers');

    await installer.install(bella);
    await installer.install(jasper);

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
