import { afterEach, describe, expect, it, vi } from 'vitest';
import { ChromeVoiceSelectionStorage } from './voice-selection-storage';

describe('ChromeVoiceSelectionStorage', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('loads the selected voice', async () => {
    vi.stubGlobal('chrome', {
      storage: { local: { get: vi.fn().mockResolvedValue({ selectedVoiceId: 'F3' }) } },
    });

    await expect(new ChromeVoiceSelectionStorage().load()).resolves.toBe('F3');
  });

  it('returns null for a missing or invalid selection', async () => {
    vi.stubGlobal('chrome', {
      storage: { local: { get: vi.fn().mockResolvedValue({ selectedVoiceId: 3 }) } },
    });

    await expect(new ChromeVoiceSelectionStorage().load()).resolves.toBeNull();
  });

  it('saves the selected voice', async () => {
    const set = vi.fn().mockResolvedValue(undefined);
    vi.stubGlobal('chrome', {
      storage: { local: { set } },
    });

    await new ChromeVoiceSelectionStorage().save('M4');

    expect(set).toHaveBeenCalledWith({ selectedVoiceId: 'M4' });
  });
});
