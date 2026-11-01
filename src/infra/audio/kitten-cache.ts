import { unzipSync } from 'fflate';
import { KITTEN_ENGINE_ASSETS } from '../../domain/voices/catalog';
import { sourceUrl } from '../../domain/voices/voice';
import { isKittenModelCached, isVerifiedKittenModel, kittenModelUrl } from '../voices/kitten-model';

const CACHE_NAME = 'dita-voices';

export interface KittenVoiceEmbedding {
  data: Float32Array;
  styleCount: number;
  styleDim: number;
}

export interface KittenConfig {
  name: string;
  model: string;
  voices: string;
  speed_priors?: Record<string, number>;
  voice_aliases: Record<string, string>;
}

export interface KittenAssets {
  model: ArrayBuffer;
  config: KittenConfig;
  voices: Record<string, KittenVoiceEmbedding>;
}

function voiceSourceUrl(): string {
  return kittenModelUrl();
}

function readNpy(bytes: Uint8Array): KittenVoiceEmbedding {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const magic = new TextDecoder().decode(bytes.subarray(1, 6));
  if (bytes[0] !== 0x93 || magic !== 'NUMPY') throw new Error('Invalid Kitten voice NPY entry');

  const major = bytes[6];
  const headerOffset = major === 1 ? 10 : 12;
  const headerLength = major === 1 ? view.getUint16(8, true) : view.getUint32(8, true);
  const header = new TextDecoder().decode(
    bytes.subarray(headerOffset, headerOffset + headerLength),
  );
  const dtype = header.match(/'descr'\s*:\s*'([^']+)'/)?.[1];
  const shapeText = header.match(/'shape'\s*:\s*\(([^)]*)\)/)?.[1];
  const shape = shapeText
    ?.split(',')
    .map((part) => Number.parseInt(part.trim(), 10))
    .filter((value) => Number.isInteger(value));

  if (!dtype || !dtype.endsWith('f4') || !shape || shape.length !== 2) {
    throw new Error('Unsupported Kitten voice embedding format');
  }

  const count = shape[0];
  const styleDim = shape[1];
  if (!count || !styleDim) throw new Error('Empty Kitten voice embedding');
  const dataOffset = headerOffset + headerLength;
  const expectedBytes = count * styleDim * Float32Array.BYTES_PER_ELEMENT;
  if (bytes.byteLength - dataOffset !== expectedBytes) {
    throw new Error('Invalid Kitten voice embedding length');
  }

  const data = new Float32Array(expectedBytes / Float32Array.BYTES_PER_ELEMENT);
  const littleEndian = dtype.startsWith('<') || dtype.startsWith('|');
  const values = new DataView(bytes.buffer, bytes.byteOffset + dataOffset, expectedBytes);
  for (let index = 0; index < data.length; index++) {
    data[index] = values.getFloat32(index * Float32Array.BYTES_PER_ELEMENT, littleEndian);
  }

  return { data, styleCount: count, styleDim };
}

export function parseKittenVoiceArchive(buffer: ArrayBuffer): Record<string, KittenVoiceEmbedding> {
  const entries = unzipSync(new Uint8Array(buffer));
  const voices: Record<string, KittenVoiceEmbedding> = {};
  for (const [name, bytes] of Object.entries(entries)) {
    if (!name.endsWith('.npy')) continue;
    voices[name.slice(0, -4)] = readNpy(bytes);
  }
  if (Object.keys(voices).length === 0)
    throw new Error('Kitten voice archive contains no embeddings');
  return voices;
}

export async function loadKittenAssets(cache: Cache): Promise<KittenAssets> {
  const buffers = new Map<string, ArrayBuffer>();
  for (const asset of KITTEN_ENGINE_ASSETS.assets) {
    const url = sourceUrl(asset.source);
    const response = await cache.match(url);
    if (!response) throw new Error(`Kitten asset not installed: ${asset.name}`);
    buffers.set(asset.name, await response.arrayBuffer());
  }

  const graphResponse = await cache.match(voiceSourceUrl());
  if (!graphResponse || !isVerifiedKittenModel(graphResponse)) {
    throw new Error('Kitten model is incomplete. Download it again from the Dita voices page.');
  }
  const configBytes = buffers.get('kitten_config.json');
  const voiceBytes = buffers.get('voices.npz');
  if (!configBytes || !voiceBytes) throw new Error('Kitten runtime assets are incomplete');

  const config = JSON.parse(new TextDecoder().decode(configBytes)) as KittenConfig;
  return {
    model: await graphResponse.arrayBuffer(),
    config,
    voices: parseKittenVoiceArchive(voiceBytes),
  };
}

export async function areKittenAssetsInstalled(cache: Cache): Promise<boolean> {
  for (const asset of KITTEN_ENGINE_ASSETS.assets) {
    if (!(await cache.match(sourceUrl(asset.source)))) return false;
  }
  return isKittenModelCached(cache);
}

export async function openVoiceCache(): Promise<Cache> {
  return caches.open(CACHE_NAME);
}

export { voiceSourceUrl };
