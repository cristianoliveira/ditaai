import { describe, expect, it, vi } from 'vitest';
import { ChromePlaybackRateStore, clampRate } from './playback-rate-storage';

describe('clampRate', () => {
  it('keeps rates inside the shared playback range', () => {
    expect(clampRate(0.1)).toBe(0.5);
    expect(clampRate(1.5)).toBe(1.5);
    expect(clampRate(9)).toBe(2);
  });
});

describe('ChromePlaybackRateStore', () => {
  it('loads the stored rate and defaults to 1', async () => {
    const stored = new ChromePlaybackRateStore({
      get: vi.fn().mockResolvedValue({ playbackRate: 1.5 }),
      set: vi.fn(),
    });
    const defaulted = new ChromePlaybackRateStore({
      get: vi.fn().mockResolvedValue({}),
      set: vi.fn(),
    });

    await expect(stored.load()).resolves.toBe(1.5);
    await expect(defaulted.load()).resolves.toBe(1);
  });

  it('falls back to 1 when storage is unavailable', async () => {
    const store = new ChromePlaybackRateStore({
      get: vi.fn().mockRejectedValue(new Error('storage gone')),
      set: vi.fn(),
    });

    await expect(store.load()).resolves.toBe(1);
  });

  it('saves clamped rates under the shared key', async () => {
    const set = vi.fn().mockResolvedValue(undefined);
    const store = new ChromePlaybackRateStore({
      get: vi.fn().mockResolvedValue({}),
      set,
    });

    await store.save(9);

    expect(set).toHaveBeenCalledWith({ playbackRate: 2 });
  });
});
