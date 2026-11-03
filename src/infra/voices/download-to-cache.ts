import { verifiedDownloadHeaders } from './kitten-model';

const CACHE_NAME = 'dita-voices';
const MAX_UNVERIFIED_ASSET_BYTES = 256 * 1024 * 1024;
const INITIAL_BUFFER_BYTES = 64 * 1024;

async function openCache(cacheName = CACHE_NAME): Promise<Cache> {
  return await caches.open(cacheName);
}

export async function downloadToCache(
  url: string,
  onProgress?: (percentage: number) => void,
  expectedByteLength?: number,
  cacheName = CACHE_NAME,
  expectedSha256?: string,
): Promise<void> {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Download failed: ${response.status} ${url}`);

  const header = response.headers.get('content-length');
  const parsedLength = header === null ? undefined : Number(header);
  const contentLength =
    parsedLength !== undefined && Number.isSafeInteger(parsedLength) && parsedLength >= 0
      ? parsedLength
      : undefined;

  const maxBytes = expectedByteLength ?? MAX_UNVERIFIED_ASSET_BYTES;
  if (contentLength !== undefined && contentLength > maxBytes) {
    await response.body?.cancel();
    throw new Error(
      `Download exceeds expected size: ${url} (expected at most ${maxBytes} bytes, got ${contentLength})`,
    );
  }

  if (!response.body) {
    const buffer = await response.arrayBuffer();
    assertCompleteDownload(url, buffer.byteLength, expectedByteLength);
    await assertExpectedSha256(url, buffer, expectedSha256);
    const cache = await openCache(cacheName);
    await cache.put(
      url,
      new Response(buffer, {
        headers: verifiedDownloadHeaders(
          response.headers.get('content-type'),
          expectedByteLength,
          expectedSha256,
        ),
      }),
    );
    onProgress?.(100);
    return;
  }

  const initialBufferBytes = Math.min(maxBytes, expectedByteLength ?? INITIAL_BUFFER_BYTES);
  let buffer = new Uint8Array(initialBufferBytes);
  const reader = response.body.getReader();
  let received = 0;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    if (!value) continue;

    if (maxBytes !== undefined && received + value.length > maxBytes) {
      await reader.cancel();
      throw new Error(
        `Download exceeds expected size: ${url} (expected at most ${maxBytes} bytes)`,
      );
    }

    const requiredBytes = received + value.length;
    if (requiredBytes > buffer.byteLength) {
      const capacity = Math.min(maxBytes, Math.max(requiredBytes, buffer.byteLength * 2));
      const expanded = new Uint8Array(capacity);
      expanded.set(buffer.subarray(0, received));
      buffer = expanded;
    }
    buffer.set(value, received);
    received = requiredBytes;
    if (contentLength) onProgress?.(Math.round((received / contentLength) * 100));
  }

  assertCompleteDownload(url, received, expectedByteLength);
  if (contentLength !== undefined && received !== contentLength) {
    throw new Error(
      `Incomplete download: ${url} (expected ${contentLength} bytes, got ${received})`,
    );
  }

  const bytes = buffer.subarray(0, received);
  await assertExpectedSha256(url, bytes, expectedSha256);
  const cachedResponse = new Response(bytes, {
    status: 200,
    headers: verifiedDownloadHeaders(
      response.headers.get('content-type'),
      expectedByteLength,
      expectedSha256,
    ),
  });

  const cache = await openCache(cacheName);
  await cache.put(url, cachedResponse);
  onProgress?.(100);
}

async function assertExpectedSha256(
  url: string,
  bytes: BufferSource,
  expectedSha256?: string,
): Promise<void> {
  if (!expectedSha256) return;
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  const actualSha256 = Array.from(new Uint8Array(digest), (byte) =>
    byte.toString(16).padStart(2, '0'),
  ).join('');
  if (actualSha256 !== expectedSha256) {
    throw new Error(`Integrity check failed for ${url}`);
  }
}

function assertCompleteDownload(
  url: string,
  byteLength: number,
  expectedByteLength?: number,
): void {
  if (expectedByteLength !== undefined && byteLength !== expectedByteLength) {
    throw new Error(
      `Incomplete download: ${url} (expected ${expectedByteLength} bytes, got ${byteLength})`,
    );
  }
}
