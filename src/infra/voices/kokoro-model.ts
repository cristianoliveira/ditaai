import { KOKORO_ENGINE_ASSETS, KOKORO_VOICES } from '../../domain/voices/catalog';
import type { VoiceSource } from '../../domain/voices/voice';
import { sourceUrl } from '../../domain/voices/voice';

export const KOKORO_CACHE_NAME = 'kokoro-tts-v1';
export const KOKORO_MODEL_BYTES = 92_361_116;
export const KOKORO_VOICE_BYTES = 522_240;

const VERIFIED_SIZE_HEADER = 'x-dita-verified-size';
const VERIFIED_SHA256_HEADER = 'x-dita-verified-sha256';

function engineAssetUrl(name: string): string {
  const asset = KOKORO_ENGINE_ASSETS.assets.find((candidate) => candidate.name === name);
  if (!asset) throw new Error(`Missing Kokoro engine asset: ${name}`);
  return sourceUrl(asset.source);
}

function voiceAssetUrl(id: string): string {
  const voice = KOKORO_VOICES.find((candidate) => candidate.id === id);
  if (!voice) throw new Error(`Missing Kokoro voice: ${id}`);
  return sourceUrl(voice.source);
}

const ASSET_INTEGRITY = new Map<string, { bytes: number; sha256: string }>([
  [
    engineAssetUrl('config.json'),
    { bytes: 44, sha256: 'df34b4f930b23447cd4dc410fabfb42eb3f24e803e6c3f97d618fb359380a36f' },
  ],
  [
    engineAssetUrl('tokenizer.json'),
    { bytes: 3_497, sha256: '77a02c8e164413299b4b4c403b14f8e0e1c1b727db4d46a09d6327b861060a34' },
  ],
  [
    engineAssetUrl('tokenizer_config.json'),
    { bytes: 113, sha256: 'be1cb066d6ef6b074b3f15e6a6dd21ac88ff3cdaedf325f0aaed686c70f75d20' },
  ],
  [
    engineAssetUrl('onnx/model_quantized.onnx'),
    {
      bytes: KOKORO_MODEL_BYTES,
      sha256: 'fbae9257e1e05ffc727e951ef9b9c98418e6d79f1c9b6b13bd59f5c9028a1478',
    },
  ],
  [
    voiceAssetUrl('kokoro-af-heart'),
    {
      bytes: KOKORO_VOICE_BYTES,
      sha256: 'd583ccff3cdca2f7fae535cb998ac07e9fcb90f09737b9a41fa2734ec44a8f0b',
    },
  ],
  [
    voiceAssetUrl('kokoro-am-michael'),
    {
      bytes: KOKORO_VOICE_BYTES,
      sha256: '1d1f21dd8da39c30705cd4c75d039d265e9bc4a2a93ed09bc9e1b1225eb95ba1',
    },
  ],
  [
    voiceAssetUrl('kokoro-bf-emma'),
    {
      bytes: KOKORO_VOICE_BYTES,
      sha256: '669fe0647f9dd04fcab92f1439a40eeb4c8b4ab1f82e4996fe3d918ce4a63b73',
    },
  ],
  [
    voiceAssetUrl('kokoro-bm-george'),
    {
      bytes: KOKORO_VOICE_BYTES,
      sha256: 'c4b235a4c1f2cd3b939fed08b899ce9385638b763f7b73a59616c4fc9bd6c9bc',
    },
  ],
]);

export function kokoroAssetIntegrity(
  source: VoiceSource,
): { bytes: number; sha256: string } | undefined {
  return ASSET_INTEGRITY.get(sourceUrl(source));
}

export function isVerifiedKokoroAsset(url: string, response: Response): boolean {
  const expected = ASSET_INTEGRITY.get(url);
  return (
    expected !== undefined &&
    response.headers.get(VERIFIED_SIZE_HEADER) === String(expected.bytes) &&
    response.headers.get(VERIFIED_SHA256_HEADER) === expected.sha256
  );
}

export async function areKokoroAssetsInstalled(cache: Cache): Promise<boolean> {
  for (const asset of KOKORO_ENGINE_ASSETS.assets) {
    const url = sourceUrl(asset.source);
    const response = await cache.match(url);
    if (!response || !isVerifiedKokoroAsset(url, response)) return false;
  }
  return true;
}

export function kokoroDownloadHeaders(contentType: string | null, source: VoiceSource): Headers {
  const integrity = kokoroAssetIntegrity(source);
  if (!integrity) throw new Error(`Unknown Kokoro asset: ${sourceUrl(source)}`);
  const headers = new Headers({ 'content-type': contentType ?? 'application/octet-stream' });
  headers.set(VERIFIED_SIZE_HEADER, String(integrity.bytes));
  headers.set(VERIFIED_SHA256_HEADER, integrity.sha256);
  return headers;
}
