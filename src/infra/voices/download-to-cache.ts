const CACHE_NAME = 'dita-voices';

async function openCache(): Promise<Cache> {
  return await caches.open(CACHE_NAME);
}

export async function downloadToCache(
  url: string,
  onProgress?: (percentage: number) => void,
): Promise<void> {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Download failed: ${response.status} ${url}`);

  const contentLength = Number(response.headers.get('content-length') ?? '0');
  if (!response.body || !contentLength) {
    const cache = await openCache();
    await cache.put(url, response);
    onProgress?.(100);
    return;
  }

  const reader = response.body.getReader();
  const chunks: Uint8Array[] = [];
  let received = 0;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    if (!value) continue;

    chunks.push(value);
    received += value.length;
    onProgress?.(Math.round((received / contentLength) * 100));
  }

  const totalLength = chunks.reduce((sum, chunk) => sum + chunk.length, 0);
  const buffer = new Uint8Array(totalLength);
  let offset = 0;
  for (const chunk of chunks) {
    buffer.set(chunk, offset);
    offset += chunk.length;
  }

  const cachedResponse = new Response(buffer, {
    status: 200,
    headers: { 'content-type': response.headers.get('content-type') ?? 'application/octet-stream' },
  });

  const cache = await openCache();
  await cache.put(url, cachedResponse);
  onProgress?.(100);
}
