import { describe, expect, it } from 'vitest';
import {
  ENGINE_ASSETS,
  KITTEN_ENGINE_ASSETS,
  KITTEN_VOICES,
  SUPERTONIC_ENGINE_ASSETS,
  SUPERTONIC_VOICES,
  findVoice,
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
      expect(listVoices()).toHaveLength(11);
    });

    it('filters by engine', () => {
      expect(listVoices('supertonic')).toHaveLength(10);
    });

    it('includes the Kitten voice for the Kitten engine', () => {
      expect(listVoices('kitten')).toEqual(KITTEN_VOICES);
    });

    it('returns empty for unknown engine', () => {
      expect(listVoices('unknown')).toEqual([]);
    });
  });

  describe('KITTEN_VOICES', () => {
    it('exposes one English female voice with a pinned model source', () => {
      expect(KITTEN_VOICES).toHaveLength(1);
      expect(KITTEN_VOICES[0]).toMatchObject({
        id: 'kitten-bella',
        name: 'Kitten Bella',
        gender: 'female',
        engine: 'kitten',
        language: 'en',
        source: {
          repo: 'onnx-community/KittenTTS-Nano-v0.8-ONNX',
          revision: expect.any(String),
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

  describe('findVoice', () => {
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
