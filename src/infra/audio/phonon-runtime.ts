import { type LoadOptions, PhononTTS } from 'phonon-tts';
import PhononWasmUrl from 'phonon-tts/wasm/phonon_tts_bg.wasm?url';
import PhononWasmSimdUrl from 'phonon-tts/wasm/phonon_tts_simd_bg.wasm?url';
import PhononWorkerUrl from 'phonon-tts/worker.js?worker&url';
import { PHONON_ENGINE_ASSETS, PHONON_VOICES } from '../../domain/voices/catalog';
import { sourceUrl } from '../../domain/voices/voice';
import { PHONON_CACHE_NAME } from '../voices/phonon-model';

const assetsByName = new Map(
  PHONON_ENGINE_ASSETS.assets.map((asset) => [asset.name, sourceUrl(asset.source)]),
);

export function phononLoadOptions(): LoadOptions {
  const weights = assetsByName.get('model.q8.gguf');
  const tokenizer = assetsByName.get('tokenizer.json');
  const config = assetsByName.get('config.json');
  const voice = PHONON_VOICES[0];
  if (!weights || !tokenizer || !config || !voice) {
    throw new Error('Phonon model catalog is incomplete');
  }

  return {
    lang: 'en',
    quant: 'q8',
    device: 'cpu',
    threads: 1,
    cache: true,
    workerUrl: PhononWorkerUrl,
    wasmUrl: PhononWasmUrl,
    simdWasmUrl: PhononWasmSimdUrl,
    model: {
      weights: { q8: weights },
      tokenizer,
      config,
      voices: { default: sourceUrl(voice.source) },
      defaultVoice: 'default',
    },
    onProgress: (progress) => {
      // The install page owns download progress; this reports cache-backed model startup.
      if (!progress.cached) {
        console.warn('[phonon] runtime fetched an asset outside the voice installer', {
          file: progress.file,
          loaded: progress.loaded,
          total: progress.total,
          cache: PHONON_CACHE_NAME,
        });
      }
    },
  };
}

export async function loadPhononTts(): Promise<PhononTTS> {
  return PhononTTS.load(phononLoadOptions());
}
