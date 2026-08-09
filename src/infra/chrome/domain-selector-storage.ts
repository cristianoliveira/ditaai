// chrome.storage.local adapter for DomainSelectorStore.
// Persists selected CSS selectors keyed by hostname so users don't
// need to re-pick elements on every visit to the same domain.

import type { DomainSelectorStore } from '../../domain/selection/selection';

const KEY = 'domainSelectors';

export class ChromeDomainSelectorStorage implements DomainSelectorStore {
  async load(hostname: string): Promise<string | null> {
    const stored = await chrome.storage.local.get(KEY);
    const map: Record<string, string> = stored[KEY] ?? {};
    return map[hostname] ?? null;
  }

  async save(hostname: string, selector: string): Promise<void> {
    const stored = await chrome.storage.local.get(KEY);
    const map: Record<string, string> = stored[KEY] ?? {};
    map[hostname] = selector;
    await chrome.storage.local.set({ [KEY]: map });
  }

  async clear(hostname: string): Promise<void> {
    const stored = await chrome.storage.local.get(KEY);
    const map: Record<string, string> = stored[KEY] ?? {};
    delete map[hostname];
    await chrome.storage.local.set({ [KEY]: map });
  }
}
