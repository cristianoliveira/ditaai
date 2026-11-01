import { afterEach, describe, expect, it, vi } from 'vitest';
import { KITTEN_VOICES } from '../../domain/voices/catalog';
import { sourceUrl } from '../../domain/voices/voice';
import { CacheStorageVoiceInstaller } from './cache-storage-installer';
import { KITTEN_MODEL_GRAPH_BYTES } from './kitten-model';

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
