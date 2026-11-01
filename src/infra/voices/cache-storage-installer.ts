/**
 * Downloads voice files from HuggingFace and stores them in the Cache Storage API.
 *
 * Cache Storage persists across browser sessions but may be evicted under disk
 * pressure. For permanent storage, bundle voices in the extension package.
 */

import { ENGINE_ASSETS, listVoices } from '../../domain/voices/catalog';
import type { VoiceInstaller } from '../../domain/voices/installer';
import type { InstalledVoice, Voice } from '../../domain/voices/voice';
import { sourceUrl } from '../../domain/voices/voice';
import { downloadToCache } from './download-to-cache';
import { KITTEN_MODEL_GRAPH_BYTES, isVerifiedKittenModel } from './kitten-model';

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

    // Aliases share one model artifact; only reuse a complete verified download.
    let cachedVoice = await cache.match(url);
    if (voice.engine === 'kitten' && cachedVoice && !isVerifiedKittenModel(cachedVoice)) {
      await cache.delete(url);
      cachedVoice = undefined;
    }
    let sizeBytes: number;
    if (cachedVoice) {
      sizeBytes = (await cachedVoice.arrayBuffer()).byteLength;
    } else if (voice.engine === 'kitten') {
      await downloadToCache(url, undefined, KITTEN_MODEL_GRAPH_BYTES);
      cachedVoice = await cache.match(url);
      if (!cachedVoice || !isVerifiedKittenModel(cachedVoice)) {
        throw new Error(`Downloaded Kitten model is not verified: ${url}`);
      }
      sizeBytes = (await cachedVoice.arrayBuffer()).byteLength;
    } else {
      sizeBytes = await fetchAndCache(cache, url);
    }

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
    // Kitten aliases are backed by one indivisible model/embedding bundle.
    if (voice.engine === 'kitten') {
      for (const asset of ENGINE_ASSETS[voice.engine]?.assets ?? []) {
        await cache.delete(sourceUrl(asset.source));
      }
    }
  }

  async isInstalled(voice: Voice): Promise<boolean> {
    const cache = await openCache();
    const voiceResponse = await cache.match(sourceUrl(voice.source));
    if (!voiceResponse) return false;
    if (voice.engine === 'kitten' && !isVerifiedKittenModel(voiceResponse)) return false;
    for (const asset of ENGINE_ASSETS[voice.engine]?.assets ?? []) {
      if (!(await cache.match(sourceUrl(asset.source)))) return false;
    }
    return true;
  }

  async listInstalled(): Promise<InstalledVoice[]> {
    const cache = await openCache();
    const installed: InstalledVoice[] = [];

    for (const voice of listVoices()) {
      if (!(await this.isInstalled(voice))) continue;
      const response = await cache.match(sourceUrl(voice.source));
      if (!response) continue;
      const buffer = await response.clone().arrayBuffer();
      installed.push({ voice, installedAt: 0, sizeBytes: buffer.byteLength });
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
