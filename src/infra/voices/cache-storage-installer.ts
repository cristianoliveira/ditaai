/**
 * Downloads voice files from HuggingFace and stores them in the Cache Storage API.
 *
 * Cache Storage persists across browser sessions but may be evicted under disk
 * pressure. For permanent storage, bundle voices in the extension package.
 */

import { ENGINE_ASSETS, KOKORO_ENGINE_ASSETS, listVoices } from '../../domain/voices/catalog';
import type { VoiceInstaller } from '../../domain/voices/installer';
import type { InstalledVoice, Voice } from '../../domain/voices/voice';
import { sourceUrl } from '../../domain/voices/voice';
import { downloadToCache } from './download-to-cache';
import { KITTEN_MODEL_GRAPH_BYTES, isVerifiedKittenModel } from './kitten-model';
import {
  KOKORO_CACHE_NAME,
  areKokoroAssetsInstalled,
  isVerifiedKokoroAsset,
  kokoroAssetIntegrity,
} from './kokoro-model';
import {
  PHONON_CACHE_NAME,
  arePhononAssetsInstalled,
  isVerifiedPhononAsset,
  phononAssetByteLength,
} from './phonon-model';

const CACHE_NAME = 'dita-voices';

type DownloadToCache = typeof downloadToCache;

function cacheNameFor(engine: string): string {
  if (engine === 'phonon') return PHONON_CACHE_NAME;
  if (engine === 'kokoro') return KOKORO_CACHE_NAME;
  return CACHE_NAME;
}

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

async function openCache(cacheName = CACHE_NAME): Promise<Cache> {
  return await caches.open(cacheName);
}

export class CacheStorageVoiceInstaller implements VoiceInstaller {
  constructor(private readonly download: DownloadToCache = downloadToCache) {}

  async install(voice: Voice): Promise<InstalledVoice> {
    const cacheName = cacheNameFor(voice.engine);
    const cache = await openCache(cacheName);
    const url = sourceUrl(voice.source);

    // Download engine assets if absent; Phonon also rejects stale or partial entries.
    for (const asset of ENGINE_ASSETS[voice.engine]?.assets ?? []) {
      const assetUrl = sourceUrl(asset.source);
      let cached = await cache.match(assetUrl);
      if (
        cached &&
        ((voice.engine === 'phonon' && !isVerifiedPhononAsset(assetUrl, cached)) ||
          (voice.engine === 'kokoro' && !isVerifiedKokoroAsset(assetUrl, cached)))
      ) {
        await cache.delete(assetUrl);
        cached = undefined;
      }
      if (cached) continue;

      if (voice.engine === 'phonon') {
        await this.download(assetUrl, undefined, phononAssetByteLength(asset.source), cacheName);
      } else if (voice.engine === 'kokoro') {
        const integrity = kokoroAssetIntegrity(asset.source);
        if (!integrity) throw new Error(`Unknown Kokoro asset: ${assetUrl}`);
        await this.download(assetUrl, undefined, integrity.bytes, cacheName, integrity.sha256);
      } else {
        await fetchAndCache(cache, assetUrl);
      }
    }

    // Aliases share one model artifact; only reuse a complete verified download.
    let cachedVoice = await cache.match(url);
    if (
      (voice.engine === 'kitten' && cachedVoice && !isVerifiedKittenModel(cachedVoice)) ||
      (voice.engine === 'phonon' && cachedVoice && !isVerifiedPhononAsset(url, cachedVoice)) ||
      (voice.engine === 'kokoro' && cachedVoice && !isVerifiedKokoroAsset(url, cachedVoice))
    ) {
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
    } else if (voice.engine === 'phonon') {
      await this.download(url, undefined, phononAssetByteLength(voice.source), cacheName);
      cachedVoice = await cache.match(url);
      if (!cachedVoice || !isVerifiedPhononAsset(url, cachedVoice)) {
        throw new Error(`Downloaded Phonon voice asset is not verified: ${url}`);
      }
      sizeBytes = (await cachedVoice.arrayBuffer()).byteLength;
    } else if (voice.engine === 'kokoro') {
      const integrity = kokoroAssetIntegrity(voice.source);
      if (!integrity) throw new Error(`Unknown Kokoro voice asset: ${url}`);
      await this.download(url, undefined, integrity.bytes, cacheName, integrity.sha256);
      cachedVoice = await cache.match(url);
      if (!cachedVoice || !isVerifiedKokoroAsset(url, cachedVoice)) {
        throw new Error(`Downloaded Kokoro voice asset is not verified: ${url}`);
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
    const cache = await openCache(cacheNameFor(voice.engine));
    await cache.delete(sourceUrl(voice.source));
    // Kitten and Phonon are indivisible; Kokoro shared files remain while a preset is installed.
    if (voice.engine === 'kitten' || voice.engine === 'phonon') {
      for (const asset of ENGINE_ASSETS[voice.engine]?.assets ?? []) {
        await cache.delete(sourceUrl(asset.source));
      }
    }
    if (voice.engine === 'kokoro') {
      let anotherVoiceInstalled = false;
      for (const candidate of listVoices('kokoro')) {
        if (candidate.id === voice.id) continue;
        const url = sourceUrl(candidate.source);
        const response = await cache.match(url);
        if (response && isVerifiedKokoroAsset(url, response)) {
          anotherVoiceInstalled = true;
          break;
        }
      }
      if (!anotherVoiceInstalled) {
        for (const asset of KOKORO_ENGINE_ASSETS.assets) {
          await cache.delete(sourceUrl(asset.source));
        }
      }
    }
  }

  async isInstalled(voice: Voice): Promise<boolean> {
    const cache = await openCache(cacheNameFor(voice.engine));
    if (voice.engine === 'phonon') return arePhononAssetsInstalled(cache);
    if (voice.engine === 'kokoro') {
      const url = sourceUrl(voice.source);
      const response = await cache.match(url);
      return (
        response !== undefined &&
        isVerifiedKokoroAsset(url, response) &&
        (await areKokoroAssetsInstalled(cache))
      );
    }

    const voiceResponse = await cache.match(sourceUrl(voice.source));
    if (!voiceResponse) return false;
    if (voice.engine === 'kitten' && !isVerifiedKittenModel(voiceResponse)) return false;

    for (const asset of ENGINE_ASSETS[voice.engine]?.assets ?? []) {
      if (!(await cache.match(sourceUrl(asset.source)))) return false;
    }
    return true;
  }

  async listInstalled(): Promise<InstalledVoice[]> {
    const installed: InstalledVoice[] = [];

    for (const voice of listVoices()) {
      if (!(await this.isInstalled(voice))) continue;
      const cache = await openCache(cacheNameFor(voice.engine));
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
  const cache = await openCache(cacheNameFor(voice.engine));
  const url = sourceUrl(voice.source);
  const cached = await cache.match(url);
  return cached ? url : null;
}

/** Get all cached engine asset URLs for an engine. */
export async function getCachedEngineAssets(engine: string): Promise<Map<string, string>> {
  const cache = await openCache(cacheNameFor(engine));
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
