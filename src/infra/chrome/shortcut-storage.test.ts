import { afterEach, describe, expect, it, vi } from 'vitest';
import { DEFAULT_SHORTCUTS } from '../../domain/shortcuts/shortcuts';
import { ChromeShortcutStorage, SHORTCUTS_KEY } from './shortcut-storage';

describe('ChromeShortcutStorage', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('loads a stored keymap merged over defaults', async () => {
    vi.stubGlobal('chrome', {
      storage: {
        local: { get: vi.fn().mockResolvedValue({ [SHORTCUTS_KEY]: { togglePlay: 'alt+p' } }) },
      },
    });

    const map = await new ChromeShortcutStorage().load();
    expect(map.togglePlay).toBe('Alt+P');
    expect(map.stop).toBe(DEFAULT_SHORTCUTS.stop);
  });

  it('returns defaults when nothing is stored', async () => {
    vi.stubGlobal('chrome', {
      storage: { local: { get: vi.fn().mockResolvedValue({}) } },
    });

    await expect(new ChromeShortcutStorage().load()).resolves.toEqual(DEFAULT_SHORTCUTS);
  });

  it('drops stale or invalid stored combos', async () => {
    vi.stubGlobal('chrome', {
      storage: {
        local: {
          get: vi.fn().mockResolvedValue({
            [SHORTCUTS_KEY]: { stop: 'not a combo', volumeUp: 'alt+shift+up' },
          }),
        },
      },
    });

    const map = await new ChromeShortcutStorage().load();
    expect(map.stop).toBe(DEFAULT_SHORTCUTS.stop);
    expect(map.volumeUp).toBe('Alt+Shift+ArrowUp');
  });

  it('saves the keymap', async () => {
    const set = vi.fn().mockResolvedValue(undefined);
    vi.stubGlobal('chrome', {
      storage: { local: { set } },
    });

    await new ChromeShortcutStorage().save({ ...DEFAULT_SHORTCUTS, togglePlay: 'Alt+P' });

    expect(set).toHaveBeenCalledWith({
      [SHORTCUTS_KEY]: { ...DEFAULT_SHORTCUTS, togglePlay: 'Alt+P' },
    });
  });
});
