import { afterEach, describe, expect, it, vi } from 'vitest';
import { DEFAULT_LANGUAGE } from '../../domain/audio/languages';
import { ChromeLanguageStorage, LANGUAGE_KEY } from './language-storage';

describe('ChromeLanguageStorage', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('loads the stored language', async () => {
    vi.stubGlobal('chrome', {
      storage: {
        local: { get: vi.fn().mockResolvedValue({ [LANGUAGE_KEY]: 'pt' }) },
      },
    });

    await expect(new ChromeLanguageStorage().load()).resolves.toBe('pt');
  });

  it('returns the default when nothing is stored', async () => {
    vi.stubGlobal('chrome', {
      storage: { local: { get: vi.fn().mockResolvedValue({}) } },
    });

    await expect(new ChromeLanguageStorage().load()).resolves.toBe(DEFAULT_LANGUAGE);
  });

  it('falls back to the default for a stored unsupported language', async () => {
    vi.stubGlobal('chrome', {
      storage: {
        local: { get: vi.fn().mockResolvedValue({ [LANGUAGE_KEY]: 'xx' }) },
      },
    });

    await expect(new ChromeLanguageStorage().load()).resolves.toBe(DEFAULT_LANGUAGE);
  });

  it('persists only supported language codes', async () => {
    const set = vi.fn().mockResolvedValue(undefined);
    vi.stubGlobal('chrome', {
      storage: { local: { get: vi.fn().mockResolvedValue({}), set } },
    });
    const store = new ChromeLanguageStorage();

    await store.save('ja');
    expect(set).toHaveBeenCalledWith({ [LANGUAGE_KEY]: 'ja' });

    await store.save('zz');
    expect(set).toHaveBeenCalledWith({ [LANGUAGE_KEY]: DEFAULT_LANGUAGE });
  });
});
