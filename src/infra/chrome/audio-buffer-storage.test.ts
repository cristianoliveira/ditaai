import { afterEach, describe, expect, it, vi } from 'vitest';
import { DEFAULT_AUDIO_BUFFER_SECONDS } from '../../domain/audio/buffer';
import { AUDIO_BUFFER_SECONDS_KEY, ChromeAudioBufferStorage } from './audio-buffer-storage';

describe('ChromeAudioBufferStorage', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('loads a stored buffer duration', async () => {
    vi.stubGlobal('chrome', {
      storage: { local: { get: vi.fn().mockResolvedValue({ [AUDIO_BUFFER_SECONDS_KEY]: 10 }) } },
    });

    await expect(new ChromeAudioBufferStorage().load()).resolves.toBe(10);
  });

  it('uses the default for missing or invalid values', async () => {
    const get = vi
      .fn()
      .mockResolvedValueOnce({})
      .mockResolvedValueOnce({ [AUDIO_BUFFER_SECONDS_KEY]: 7 });
    vi.stubGlobal('chrome', { storage: { local: { get } } });
    const store = new ChromeAudioBufferStorage();

    await expect(store.load()).resolves.toBe(DEFAULT_AUDIO_BUFFER_SECONDS);
    await expect(store.load()).resolves.toBe(DEFAULT_AUDIO_BUFFER_SECONDS);
  });

  it('persists only supported durations', async () => {
    const set = vi.fn().mockResolvedValue(undefined);
    vi.stubGlobal('chrome', { storage: { local: { set } } });
    const store = new ChromeAudioBufferStorage();

    await store.save(15);
    await store.save(3);

    expect(set).toHaveBeenNthCalledWith(1, { [AUDIO_BUFFER_SECONDS_KEY]: 15 });
    expect(set).toHaveBeenNthCalledWith(2, {
      [AUDIO_BUFFER_SECONDS_KEY]: DEFAULT_AUDIO_BUFFER_SECONDS,
    });
  });
});
