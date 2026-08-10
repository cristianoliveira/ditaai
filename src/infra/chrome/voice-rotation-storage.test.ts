import { afterEach, describe, expect, it, vi } from 'vitest';
import { ChromeVoiceRotationStorage, VOICE_ROTATION_KEY } from './voice-rotation-storage';

describe('ChromeVoiceRotationStorage', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('defaults rotation to disabled', async () => {
    vi.stubGlobal('chrome', { storage: { local: { get: vi.fn().mockResolvedValue({}) } } });

    await expect(new ChromeVoiceRotationStorage().load()).resolves.toBe(false);
  });

  it('loads and saves the rotation preference', async () => {
    const set = vi.fn().mockResolvedValue(undefined);
    vi.stubGlobal('chrome', {
      storage: { local: { get: vi.fn().mockResolvedValue({ [VOICE_ROTATION_KEY]: true }), set } },
    });
    const store = new ChromeVoiceRotationStorage();

    await expect(store.load()).resolves.toBe(true);
    await store.save(true);

    expect(set).toHaveBeenCalledWith({ [VOICE_ROTATION_KEY]: true });
  });
});
