export const SIMPLIFY_LINKS_KEY = 'simplifyLinks';

/** Stores the "narrate bare URLs as link to site <domain>" preference. Shared
 * by the content script (applies the transform) and the voices settings page
 * (exposes the toggle). Default on: char-by-char URL dictation is useless. */
export class ChromeLinksStorage {
  async load(): Promise<boolean> {
    const stored = await chrome.storage.local.get(SIMPLIFY_LINKS_KEY);
    return stored[SIMPLIFY_LINKS_KEY] !== false;
  }

  async save(enabled: boolean): Promise<void> {
    await chrome.storage.local.set({ [SIMPLIFY_LINKS_KEY]: enabled });
  }
}
