import { afterEach, describe, expect, it, vi } from 'vitest';
import { downloadToCache } from './download-to-cache';

const url = 'https://example.test/voice.json';

function stubCache(): { put: ReturnType<typeof vi.fn>; cachedBody: () => string | undefined } {
  let body: string | undefined;
  const put = vi.fn(async (_url: string, response: Response) => {
    body = await response.text();
  });

  vi.stubGlobal('caches', {
    open: vi.fn().mockResolvedValue({ put }),
  });

  return { put, cachedBody: () => body };
}

describe('downloadToCache', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('caches a response without a content-length header without locking its body', async () => {
    const cache = stubCache();
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response('voice data')));
    const onProgress = vi.fn();

    await downloadToCache(url, onProgress);

    expect(cache.put).toHaveBeenCalledOnce();
    expect(cache.cachedBody()).toBe('voice data');
    expect(onProgress).toHaveBeenLastCalledWith(100);
  });

  it('reports progress and caches a streamed response', async () => {
    const cache = stubCache();
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(
        new Response('voice data', {
          headers: { 'content-length': '10', 'content-type': 'application/json' },
        }),
      ),
    );
    const onProgress = vi.fn();

    await downloadToCache(url, onProgress);

    expect(cache.cachedBody()).toBe('voice data');
    expect(onProgress).toHaveBeenLastCalledWith(100);
  });

  it('verifies a pinned SHA-256 before caching downloaded model assets', async () => {
    const cache = stubCache();
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response('voice data')));

    await downloadToCache(
      url,
      undefined,
      10,
      'kokoro-tts-v1',
      'e5fba3b4bc9e4a355ecb98a9367c85de18d8631632fad36b400311d87199034e',
    );

    const cached = cache.put.mock.calls[0]?.[1];
    expect(cached?.headers.get('x-dita-verified-sha256')).toBe(
      'e5fba3b4bc9e4a355ecb98a9367c85de18d8631632fad36b400311d87199034e',
    );
  });

  it('rejects a corrupt asset without caching it', async () => {
    const cache = stubCache();
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response('voice data')));

    await expect(
      downloadToCache(url, undefined, 10, 'kokoro-tts-v1', '0'.repeat(64)),
    ).rejects.toThrow(`Integrity check failed for ${url}`);
    expect(cache.put).not.toHaveBeenCalled();
  });

  it('rejects a truncated streamed download without caching it', async () => {
    const cache = stubCache();
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(new Response('short', { headers: { 'content-length': '10' } })),
    );

    await expect(downloadToCache(url)).rejects.toThrow('Incomplete download');
    expect(cache.put).not.toHaveBeenCalled();
  });

  it('rejects an unexpected asset size without caching it', async () => {
    const cache = stubCache();
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response('short')));

    await expect(downloadToCache(url, undefined, 10)).rejects.toThrow('expected 10 bytes');
    expect(cache.put).not.toHaveBeenCalled();
  });

  it('rejects failed downloads without opening the cache', async () => {
    const open = vi.fn();
    vi.stubGlobal('caches', { open });
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response(null, { status: 404 })));

    await expect(downloadToCache(url)).rejects.toThrow(`Download failed: 404 ${url}`);
    expect(open).not.toHaveBeenCalled();
  });
});
