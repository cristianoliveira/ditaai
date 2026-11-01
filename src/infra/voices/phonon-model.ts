import { PHONON_ENGINE_ASSETS, PHONON_VOICES } from '../../domain/voices/catalog';
import { type VoiceSource, sourceUrl } from '../../domain/voices/voice';

export const PHONON_CACHE_NAME = 'phonon-tts-v1';
export const PHONON_MODEL_Q8_BYTES = 64_512_352;

const VERIFIED_SIZE_HEADER = 'x-dita-verified-size';

const [configAsset, tokenizerAsset, modelAsset] = PHONON_ENGINE_ASSETS.assets;
const [defaultVoice] = PHONON_VOICES;
if (!configAsset || !tokenizerAsset || !modelAsset || !defaultVoice) {
  throw new Error('Phonon asset catalog is incomplete');
}

const PHONON_ASSET_SIZES = new Map<string, number>([
  [sourceUrl(configAsset.source), 2_851],
  [sourceUrl(tokenizerAsset.source), 277_967],
  [sourceUrl(modelAsset.source), PHONON_MODEL_Q8_BYTES],
  [sourceUrl(defaultVoice.source), 256_136],
]);

export function phononAssetByteLength(source: VoiceSource): number | undefined {
  return PHONON_ASSET_SIZES.get(sourceUrl(source));
}

export function isVerifiedPhononAsset(url: string, response: Response): boolean {
  const expectedByteLength = PHONON_ASSET_SIZES.get(url);
  return (
    expectedByteLength !== undefined &&
    response.headers.get(VERIFIED_SIZE_HEADER) === String(expectedByteLength)
  );
}

export async function arePhononAssetsInstalled(cache: Cache): Promise<boolean> {
  for (const asset of PHONON_ENGINE_ASSETS.assets) {
    const url = sourceUrl(asset.source);
    const response = await cache.match(url);
    if (!response || !isVerifiedPhononAsset(url, response)) return false;
  }

  const voice = PHONON_VOICES[0];
  if (!voice) return false;
  const url = sourceUrl(voice.source);
  const response = await cache.match(url);
  return response !== undefined && isVerifiedPhononAsset(url, response);
}
