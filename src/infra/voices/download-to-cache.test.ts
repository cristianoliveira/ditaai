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

  it('rejects failed downloads without opening the cache', async () => {
    const open = vi.fn();
    vi.stubGlobal('caches', { open });
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response(null, { status: 404 })));

    await expect(downloadToCache(url)).rejects.toThrow(`Download failed: 404 ${url}`);
    expect(open).not.toHaveBeenCalled();
  });
});
