import { afterEach, describe, expect, it, vi } from 'vitest';
import { DEFAULT_SYNTHESIS_QUALITY } from '../../domain/audio/quality';
import { ChromeSynthesisQualityStorage, SYNTHESIS_QUALITY_KEY } from './synthesis-quality-storage';

describe('ChromeSynthesisQualityStorage', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('loads the stored quality', async () => {
    vi.stubGlobal('chrome', {
      storage: {
        local: { get: vi.fn().mockResolvedValue({ [SYNTHESIS_QUALITY_KEY]: 12 }) },
      },
    });

    await expect(new ChromeSynthesisQualityStorage().load()).resolves.toBe(12);
  });

  it('returns the default when nothing is stored', async () => {
    vi.stubGlobal('chrome', {
      storage: { local: { get: vi.fn().mockResolvedValue({}) } },
    });

    await expect(new ChromeSynthesisQualityStorage().load()).resolves.toBe(
      DEFAULT_SYNTHESIS_QUALITY,
    );
  });

  it('falls back to the default for a stored invalid quality', async () => {
    vi.stubGlobal('chrome', {
      storage: {
        local: { get: vi.fn().mockResolvedValue({ [SYNTHESIS_QUALITY_KEY]: 7 }) },
      },
    });

    await expect(new ChromeSynthesisQualityStorage().load()).resolves.toBe(
      DEFAULT_SYNTHESIS_QUALITY,
    );
  });

  it('persists only valid quality values', async () => {
    const set = vi.fn().mockResolvedValue(undefined);
    vi.stubGlobal('chrome', {
      storage: { local: { get: vi.fn().mockResolvedValue({}), set } },
    });
    const store = new ChromeSynthesisQualityStorage();

    await store.save(16);
    expect(set).toHaveBeenCalledWith({ [SYNTHESIS_QUALITY_KEY]: 16 });

    await store.save(3);
    expect(set).toHaveBeenCalledWith({ [SYNTHESIS_QUALITY_KEY]: DEFAULT_SYNTHESIS_QUALITY });
  });
});
