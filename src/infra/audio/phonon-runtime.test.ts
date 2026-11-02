import { describe, expect, it } from 'vitest';
import { phononLoadOptions } from './phonon-runtime';

describe('Phonon runtime configuration', () => {
  it('loads the pinned q8 English model and bundled default voice on CPU', () => {
    const options = phononLoadOptions();

    expect(options).toMatchObject({
      lang: 'en',
      quant: 'q8',
      device: 'cpu',
      threads: 1,
      cache: true,
      model: {
        weights: {
          q8: 'https://huggingface.co/gradium/phonon-31m-en/resolve/8c64b55ec301728e2d1695bfea87a08a267d0c2d/model.q8.gguf',
        },
        tokenizer:
          'https://huggingface.co/gradium/phonon-31m-en/resolve/8c64b55ec301728e2d1695bfea87a08a267d0c2d/tokenizer.json',
        config:
          'https://huggingface.co/gradium/phonon-31m-en/resolve/8c64b55ec301728e2d1695bfea87a08a267d0c2d/config.json',
        voices: {
          default:
            'https://huggingface.co/gradium/phonon-31m-en/resolve/8c64b55ec301728e2d1695bfea87a08a267d0c2d/default-voice.safetensors',
        },
        defaultVoice: 'default',
      },
    });
  });
});
