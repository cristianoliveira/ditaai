/**
 * Loads Supertonic ONNX models and voice styles from Cache Storage.
 *
 * The CacheStorageVoiceInstaller writes files to the Cache API under
 * the 'dita-voices' cache name. This module reads them back as
 * ArrayBuffers that onnxruntime-web can consume directly.
 */

import { SUPERTONIC_ENGINE_ASSETS, SUPERTONIC_VOICES } from '../../domain/voices/catalog';
import { sourceUrl } from '../../domain/voices/voice';

const CACHE_NAME = 'dita-voices';

async function openCache(): Promise<Cache> {
  return await caches.open(CACHE_NAME);
}

/** Load all Supertonic engine model files from Cache Storage. */
export async function loadModelAssets(cache: Cache): Promise<Record<string, ArrayBuffer>> {
  const assets: Record<string, ArrayBuffer> = {};

  for (const asset of SUPERTONIC_ENGINE_ASSETS.assets) {
    const url = sourceUrl(asset.source);
    const response = await cache.match(url);
    if (!response) {
      throw new Error(
        `Supertonic engine asset not installed: ${asset.name}. Download voices first from the Dita voices page.`,
      );
    }
    assets[asset.name] = await response.arrayBuffer();
  }

  return assets;
}

/** Check if all Supertonic engine assets are installed. */
export async function areModelAssetsInstalled(): Promise<boolean> {
  const cache = await openCache();
  for (const asset of SUPERTONIC_ENGINE_ASSETS.assets) {
    const url = sourceUrl(asset.source);
    const response = await cache.match(url);
    if (!response) return false;
  }
  return true;
}

/** Load a voice style from Cache Storage by voice ID (e.g. 'M1'). */
export async function loadVoiceStyleBuffer(cache: Cache, voiceId: string): Promise<ArrayBuffer> {
  const voice = SUPERTONIC_VOICES.find((v) => v.id === voiceId);
  if (!voice) throw new Error(`Unknown voice: ${voiceId}`);

  const url = sourceUrl(voice.source);
  const response = await cache.match(url);
  if (!response) {
    throw new Error(`Voice ${voiceId} not installed. Download it from the Dita voices page.`);
  }

  return response.arrayBuffer();
}

/** Check if a specific voice is installed. */
export async function isVoiceInstalled(voiceId: string): Promise<boolean> {
  const cache = await openCache();
  const voice = SUPERTONIC_VOICES.find((v) => v.id === voiceId);
  if (!voice) return false;

  const url = sourceUrl(voice.source);
  const response = await cache.match(url);
  return response !== undefined;
}

/** Open the voices cache. Exported for use by other cache consumers. */
export { openCache };
