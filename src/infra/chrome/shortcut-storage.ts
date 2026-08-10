import type { ShortcutMap } from '../../domain/shortcuts/shortcuts';
import { mergeShortcuts } from '../../domain/shortcuts/shortcuts';

export const SHORTCUTS_KEY = 'shortcuts';

/** Persists the user-configured shortcut keymap in chrome.storage.local.
 * Loads merge over defaults so partial or stale maps never lose an action. */
export class ChromeShortcutStorage {
  async load(): Promise<ShortcutMap> {
    const stored = await chrome.storage.local.get(SHORTCUTS_KEY);
    return mergeShortcuts(stored[SHORTCUTS_KEY]);
  }

  async save(map: ShortcutMap): Promise<void> {
    await chrome.storage.local.set({ [SHORTCUTS_KEY]: map });
  }
}
