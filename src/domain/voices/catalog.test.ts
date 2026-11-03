import { describe, expect, it } from 'vitest';
import {
  ENGINE_ASSETS,
  KITTEN_ENGINE_ASSETS,
  KITTEN_VOICES,
  KOKORO_ENGINE_ASSETS,
  KOKORO_VOICES,
  PHONON_ENGINE_ASSETS,
  PHONON_VOICES,
  SUPERTONIC_ENGINE_ASSETS,
  SUPERTONIC_VOICES,
  findVoice,
  kittenVoiceAlias,
  listVoices,
} from './catalog';
import { sourceUrl, voiceKey } from './voice';

describe('catalog', () => {
  describe('SUPERTONIC_VOICES', () => {
    it('has 10 preset voices (M1-M5, F1-F5)', () => {
      expect(SUPERTONIC_VOICES).toHaveLength(10);
    });

    it('has 5 male and 5 female voices', () => {
      const males = SUPERTONIC_VOICES.filter((v) => v.gender === 'male');
      const females = SUPERTONIC_VOICES.filter((v) => v.gender === 'female');
      expect(males).toHaveLength(5);
      expect(females).toHaveLength(5);
    });

    it.each(SUPERTONIC_VOICES)(
      'voice $id has a huggingface source pointing to voice_styles/',
      (v) => {
        expect(v.source.type).toBe('huggingface');
        expect(v.source.repo).toBe('Supertone/supertonic-3');
        expect(v.source.path).toMatch(/^voice_styles\/[MF]\d\.json$/);
      },
    );

    it.each(SUPERTONIC_VOICES)('voice $id matches its filename', (v) => {
      expect(v.source.path).toBe(`voice_styles/${v.id}.json`);
    });
  });

  describe('SUPERTONIC_ENGINE_ASSETS', () => {
    it('has 6 shared ONNX/config files', () => {
      expect(SUPERTONIC_ENGINE_ASSETS.assets).toHaveLength(6);
    });

    it('includes the 4 ONNX models', () => {
      const names = SUPERTONIC_ENGINE_ASSETS.assets.map((a) => a.name);
      expect(names).toContain('duration_predictor.onnx');
      expect(names).toContain('text_encoder.onnx');
      expect(names).toContain('vector_estimator.onnx');
      expect(names).toContain('vocoder.onnx');
    });

    it('includes tts.json and unicode_indexer.json configs', () => {
      const names = SUPERTONIC_ENGINE_ASSETS.assets.map((a) => a.name);
      expect(names).toContain('tts.json');
      expect(names).toContain('unicode_indexer.json');
    });

    it.each(SUPERTONIC_ENGINE_ASSETS.assets)('asset $name points to onnx/', (a) => {
      expect(a.source.path).toMatch(/^onnx\//);
    });
  });

  describe('listVoices', () => {
    it('lists all voices when no engine filter', () => {
      expect(listVoices()).toHaveLength(23);
    });

    it('filters by engine', () => {
      expect(listVoices('supertonic')).toHaveLength(10);
    });

    it('includes the Kitten voice for the Kitten engine', () => {
      expect(listVoices('kitten')).toEqual(KITTEN_VOICES);
    });

    it('includes Kokoro voices for the Kokoro engine', () => {
      expect(listVoices('kokoro')).toEqual(KOKORO_VOICES);
    });

    it('includes Phonon voices for the Phonon engine', () => {
      expect(listVoices('phonon')).toEqual(PHONON_VOICES);
    });

    it('returns empty for unknown engine', () => {
      expect(listVoices('unknown')).toEqual([]);
    });
  });

  describe('KITTEN_VOICES', () => {
    it('exposes the eight pinned English voices with supported genders', () => {
      expect(KITTEN_VOICES.map(({ id, gender }) => [id, gender])).toEqual([
        ['kitten-bella', 'female'],
        ['kitten-jasper', 'male'],
        ['kitten-luna', 'female'],
        ['kitten-bruno', 'male'],
        ['kitten-rosie', 'female'],
        ['kitten-hugo', 'male'],
        ['kitten-kiki', 'female'],
        ['kitten-leo', 'male'],
      ]);
      expect(KITTEN_VOICES.every((voice) => voice.language === 'en')).toBe(true);
      expect(new Set(KITTEN_VOICES.map((voice) => voice.id)).size).toBe(8);
      expect(new Set(KITTEN_VOICES.map((voice) => sourceUrl(voice.source))).size).toBe(1);
      expect(KITTEN_VOICES.map((voice) => kittenVoiceAlias(voice.id))).toEqual([
        'Bella',
        'Jasper',
        'Luna',
        'Bruno',
        'Rosie',
        'Hugo',
        'Kiki',
        'Leo',
      ]);
      expect(kittenVoiceAlias('kitten-not-a-voice')).toBeUndefined();
      expect(KITTEN_VOICES[0]).toMatchObject({
        id: 'kitten-bella',
        name: 'Kitten Bella',
        gender: 'female',
        engine: 'kitten',
        source: {
          repo: 'onnx-community/KittenTTS-Nano-v0.8-ONNX',
          revision: '6078af30aab083436023d04ba845aedd9d1a9206',
          path: 'onnx/model.onnx',
        },
      });
    });

    it('lists the config and voice archive as shared runtime assets', () => {
      expect(KITTEN_ENGINE_ASSETS.assets.map((asset) => asset.name)).toEqual([
        'kitten_config.json',
        'voices.npz',
      ]);
    });
  });

  describe('KOKORO_VOICES', () => {
    it('exposes four pinned English presets across American and British voices', () => {
      expect(KOKORO_VOICES.map(({ id, gender, source }) => [id, gender, source.path])).toEqual([
        ['kokoro-af-heart', 'female', 'voices/af_heart.bin'],
        ['kokoro-am-michael', 'male', 'voices/am_michael.bin'],
        ['kokoro-bf-emma', 'female', 'voices/bf_emma.bin'],
        ['kokoro-bm-george', 'male', 'voices/bm_george.bin'],
      ]);
      expect(KOKORO_VOICES.every((voice) => voice.language === 'en')).toBe(true);
      expect(
        KOKORO_VOICES.every(
          (voice) => voice.source.revision === '1939ad2a8e416c0acfeecc08a694d14ef25f2231',
        ),
      ).toBe(true);
    });

    it('lists the shared q8 model and tokenizer assets from the same revision', () => {
      expect(KOKORO_ENGINE_ASSETS.assets.map((asset) => asset.name)).toEqual([
        'config.json',
        'tokenizer.json',
        'tokenizer_config.json',
        'onnx/model_quantized.onnx',
      ]);
      expect(
        KOKORO_ENGINE_ASSETS.assets.every(
          (asset) => asset.source.revision === KOKORO_VOICES[0]?.source.revision,
        ),
      ).toBe(true);
    });
  });

  describe('PHONON_VOICES', () => {
    it('exposes one pinned English default voice with neutral gender', () => {
      expect(PHONON_VOICES).toEqual([
        {
          id: 'phonon-31m-en-default',
          name: 'Phonon 31m English (Default)',
          gender: 'neutral',
          engine: 'phonon',
          language: 'en',
          source: {
            type: 'huggingface',
            repo: 'gradium/phonon-31m-en',
            revision: '8c64b55ec301728e2d1695bfea87a08a267d0c2d',
            path: 'default-voice.safetensors',
          },
        },
      ]);
    });

    it('has the pinned q8 weights, config, and tokenizer as shared engine assets', () => {
      expect(PHONON_ENGINE_ASSETS.engine).toBe('phonon');
      expect(PHONON_ENGINE_ASSETS.assets.map((asset) => asset.name)).toEqual([
        'config.json',
        'tokenizer.json',
        'model.q8.gguf',
      ]);
      expect(
        PHONON_ENGINE_ASSETS.assets.every(
          (asset) =>
            asset.source.repo === 'gradium/phonon-31m-en' &&
            asset.source.revision === '8c64b55ec301728e2d1695bfea87a08a267d0c2d',
        ),
      ).toBe(true);
    });
  });

  describe('findVoice', () => {
    it('finds Phonon default by id and engine', () => {
      expect(findVoice('phonon-31m-en-default', 'phonon')).toEqual(PHONON_VOICES[0]);
    });

    it('finds Kitten Bella by id and engine', () => {
      expect(findVoice('kitten-bella', 'kitten')).toEqual(KITTEN_VOICES[0]);
    });

    it('finds M1 by id and engine', () => {
      const v = findVoice('M1', 'supertonic');
      if (!v) throw new Error('M1 not found');
      expect(v.gender).toBe('male');
    });

    it('returns undefined for unknown id', () => {
      expect(findVoice('X1', 'supertonic')).toBeUndefined();
    });
  });

  describe('voice helpers', () => {
    it('voiceKey produces engine:id format', () => {
      const v = SUPERTONIC_VOICES[0];
      if (!v) throw new Error('no voices');
      expect(voiceKey(v)).toBe('supertonic:M1');
    });

    it('sourceUrl builds the HuggingFace resolve URL', () => {
      const v = findVoice('F3', 'supertonic');
      if (!v) throw new Error('F3 not found');
      expect(sourceUrl(v.source)).toBe(
        'https://huggingface.co/Supertone/supertonic-3/resolve/main/voice_styles/F3.json',
      );
    });

    it('sourceUrl works for ONNX assets', () => {
      const asset = SUPERTONIC_ENGINE_ASSETS.assets[0];
      if (!asset) throw new Error('no assets');
      const url = sourceUrl(asset.source);
      expect(url).toContain('resolve/main/onnx/');
      expect(url).toMatch(/\.onnx$/);
    });
  });
});
