import { KITTEN_VOICES } from '../../domain/voices/catalog';
import { sourceUrl } from '../../domain/voices/voice';

export const KITTEN_MODEL_GRAPH_BYTES = 56_767_095;
const MODEL_SIZE_HEADER = 'x-dita-verified-size';

export function kittenModelUrl(): string {
  const voice = KITTEN_VOICES[0];
  if (!voice) throw new Error('Kitten voice catalog is empty');
  return sourceUrl(voice.source);
}

export function isVerifiedKittenModel(response: Response): boolean {
  return response.headers.get(MODEL_SIZE_HEADER) === String(KITTEN_MODEL_GRAPH_BYTES);
}

export async function isKittenModelCached(cache: Cache): Promise<boolean> {
  const response = await cache.match(kittenModelUrl());
  return response !== undefined && isVerifiedKittenModel(response);
}

export function verifiedDownloadHeaders(
  contentType: string | null,
  expectedByteLength?: number,
  expectedSha256?: string,
): Headers {
  const headers = new Headers({ 'content-type': contentType ?? 'application/octet-stream' });
  if (expectedByteLength !== undefined) {
    headers.set(MODEL_SIZE_HEADER, String(expectedByteLength));
  }
  if (expectedSha256) headers.set('x-dita-verified-sha256', expectedSha256);
  return headers;
}
