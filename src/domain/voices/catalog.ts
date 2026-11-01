/** Catalog of Supertonic preset voices and shared engine assets. */

import type { EngineAssets, Voice } from './voice';

/**
 * Supertonic 3 preset voices (M1-M5, F1-F5).
 * Source: https://huggingface.co/Supertone/supertonic-3
 */
const HF_REPO = 'Supertone/supertonic-3';
const HF_REVISION = 'main';

function voice(id: string, name: string, gender: 'male' | 'female'): Voice {
  return {
    id,
    name: `Supertonic ${name}`,
    gender,
    engine: 'supertonic',
    language: 'multilingual',
    source: {
      type: 'huggingface',
      repo: HF_REPO,
      revision: HF_REVISION,
      path: `voice_styles/${id}.json`,
    },
  };
}

export const SUPERTONIC_VOICES: Voice[] = [
  voice('M1', 'Male 1', 'male'),
  voice('M2', 'Male 2', 'male'),
  voice('M3', 'Male 3', 'male'),
  voice('M4', 'Male 4', 'male'),
  voice('M5', 'Male 5', 'male'),
  voice('F1', 'Female 1', 'female'),
  voice('F2', 'Female 2', 'female'),
  voice('F3', 'Female 3', 'female'),
  voice('F4', 'Female 4', 'female'),
  voice('F5', 'Female 5', 'female'),
];

/** Shared ONNX runtime files needed by all Supertonic voices. */
export const SUPERTONIC_ENGINE_ASSETS: EngineAssets = {
  engine: 'supertonic',
  assets: [
    'duration_predictor.onnx',
    'text_encoder.onnx',
    'vector_estimator.onnx',
    'vocoder.onnx',
    'tts.json',
    'unicode_indexer.json',
  ].map((name) => ({
    name,
    source: {
      type: 'huggingface',
      repo: HF_REPO,
      revision: HF_REVISION,
      path: `onnx/${name}`,
    },
  })),
};

const KITTEN_REPO = 'onnx-community/KittenTTS-Nano-v0.8-ONNX';
const KITTEN_REVISION = '6078af30aab083436023d04ba845aedd9d1a9206';

/** The pinned Nano model bundles all eight English speaker embeddings together. */
const KITTEN_SPEAKERS = [
  { alias: 'Bella', gender: 'female' },
  { alias: 'Jasper', gender: 'male' },
  { alias: 'Luna', gender: 'female' },
  { alias: 'Bruno', gender: 'male' },
  { alias: 'Rosie', gender: 'female' },
  { alias: 'Hugo', gender: 'male' },
  { alias: 'Kiki', gender: 'female' },
  { alias: 'Leo', gender: 'male' },
] as const;

function kittenSource(): Voice['source'] {
  return {
    type: 'huggingface',
    repo: KITTEN_REPO,
    revision: KITTEN_REVISION,
    path: 'onnx/model.onnx',
  };
}

export const KITTEN_VOICES: Voice[] = KITTEN_SPEAKERS.map(({ alias, gender }) => ({
  id: `kitten-${alias.toLowerCase()}`,
  name: `Kitten ${alias}`,
  gender,
  engine: 'kitten',
  language: 'en',
  source: kittenSource(),
}));

export function kittenVoiceAlias(voiceId: string): string | undefined {
  return KITTEN_SPEAKERS.find((speaker) => `kitten-${speaker.alias.toLowerCase()}` === voiceId)
    ?.alias;
}

/** Shared config + voice embeddings for the pinned Kitten Nano export. */
export const KITTEN_ENGINE_ASSETS: EngineAssets = {
  engine: 'kitten',
  assets: ['kitten_config.json', 'voices.npz'].map((name) => ({
    name,
    source: {
      type: 'huggingface',
      repo: KITTEN_REPO,
      revision: KITTEN_REVISION,
      path: name,
    },
  })),
};

/** All known voice catalogs, keyed by engine. */
export const VOICE_CATALOGS: Record<string, Voice[]> = {
  supertonic: SUPERTONIC_VOICES,
  kitten: KITTEN_VOICES,
};

/** All known engine assets, keyed by engine. */
export const ENGINE_ASSETS: Record<string, EngineAssets> = {
  supertonic: SUPERTONIC_ENGINE_ASSETS,
  kitten: KITTEN_ENGINE_ASSETS,
};

export function listVoices(engine?: string): Voice[] {
  if (engine) return VOICE_CATALOGS[engine] ?? [];
  return Object.values(VOICE_CATALOGS).flat();
}

export function findVoice(id: string, engine: string): Voice | undefined {
  return (VOICE_CATALOGS[engine] ?? []).find((v) => v.id === id);
}
