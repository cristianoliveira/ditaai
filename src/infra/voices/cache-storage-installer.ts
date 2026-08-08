/**
 * Downloads voice files from HuggingFace and stores them in the Cache Storage API.
 *
 * Cache Storage persists across browser sessions but may be evicted under disk
 * pressure. For permanent storage, bundle voices in the extension package.
 */

import { ENGINE_ASSETS } from '../../domain/voices/catalog';
import type { VoiceInstaller } from '../../domain/voices/installer';
import type { InstalledVoice, Voice } from '../../domain/voices/voice';
import { sourceUrl, voiceKey } from '../../domain/voices/voice';

const CACHE_NAME = 'dita-voices';

/** Fetch + cache a single URL, returns stored size in bytes. */
async function fetchAndCache(cache: Cache, url: string): Promise<number> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Download failed: ${response.status} ${url}`);
  }
  const cloned = response.clone();
  await cache.put(url, response);
  const buffer = await cloned.arrayBuffer();
  return buffer.byteLength;
}

async function openCache(): Promise<Cache> {
  return await caches.open(CACHE_NAME);
}

export class CacheStorageVoiceInstaller implements VoiceInstaller {
  async install(voice: Voice): Promise<InstalledVoice> {
    const cache = await openCache();
    const url = sourceUrl(voice.source);

    // Download engine assets if not already cached
    const engineAssets = ENGINE_ASSETS[voice.engine];
    if (engineAssets) {
      for (const asset of engineAssets.assets) {
        const assetUrl = sourceUrl(asset.source);
        const cached = await cache.match(assetUrl);
        if (!cached) {
          await fetchAndCache(cache, assetUrl);
        }
      }
    }

    // Download the voice style file
    const sizeBytes = await fetchAndCache(cache, url);

    return {
      voice,
      installedAt: Date.now(),
      sizeBytes,
    };
  }

  async uninstall(voice: Voice): Promise<void> {
    const cache = await openCache();
    const url = sourceUrl(voice.source);
    await cache.delete(url);
  }

  async isInstalled(voice: Voice): Promise<boolean> {
    const cache = await openCache();
    const url = sourceUrl(voice.source);
    const cached = await cache.match(url);
    return cached !== undefined;
  }

  async listInstalled(): Promise<InstalledVoice[]> {
    const cache = await openCache();
    const keys = await cache.keys();
    const installed: InstalledVoice[] = [];

    for (const key of keys) {
      const url = key.url;
      // Match voice style URLs: .../resolve/main/voice_styles/M1.json
      const match = url.match(/\/voice_styles\/([A-Z]\d)\.json$/);
      if (!match) continue;

      const voiceId = match[1];
      if (!voiceId) continue;
      const response = await cache.match(url);
      if (!response) continue;
      const buffer = await response.clone().arrayBuffer();

      installed.push({
        voice: {
          id: voiceId,
          name: `Supertonic ${voiceId}`,
          gender: voiceId.startsWith('M') ? 'male' : 'female',
          engine: 'supertonic',
          language: 'multilingual',
          source: {
            type: 'huggingface',
            repo: 'Supertone/supertonic-3',
            revision: 'main',
            path: `voice_styles/${voiceId}.json`,
          },
        },
        installedAt: 0,
        sizeBytes: buffer.byteLength,
      });
    }

    return installed;
  }
}

/** Get the cached URL for a voice (used by the TTS reader to load it). */
export async function getCachedVoiceUrl(voice: Voice): Promise<string | null> {
  const cache = await openCache();
  const url = sourceUrl(voice.source);
  const cached = await cache.match(url);
  return cached ? url : null;
}

/** Get all cached engine asset URLs for an engine. */
export async function getCachedEngineAssets(engine: string): Promise<Map<string, string>> {
  const cache = await openCache();
  const engineAssets = ENGINE_ASSETS[engine];
  const result = new Map<string, string>();

  if (!engineAssets) return result;

  for (const asset of engineAssets.assets) {
    const url = sourceUrl(asset.source);
    const cached = await cache.match(url);
    if (cached) {
      result.set(asset.name, url);
    }
  }

  return result;
}
