// chrome.storage.local adapter for DomainScopeStore.
// Persists confirmed read scopes keyed by hostname so users don't
// need to re-pick elements on every visit to the same domain.
//
// Storage boundary owns migration (TASK-0001 step 4): legacy bare selector
// strings migrate to `{ source: 'dom', selector }` on read; saves always
// write the serialized discriminated scope.

import type { ReadScope } from '../../domain/selection/read-scope';
import { parseStoredScope, serializeScope } from '../../domain/selection/read-scope';
import type { DomainScopeStore } from '../../domain/selection/selection';

const KEY = 'domainSelectors';

async function readMap(): Promise<Record<string, string>> {
  const stored = await chrome.storage.local.get(KEY);
  return (stored[KEY] as Record<string, string>) ?? {};
}

export class ChromeDomainSelectorStorage implements DomainScopeStore {
  async load(hostname: string): Promise<ReadScope | null> {
    const map = await readMap();
    return parseStoredScope(map[hostname]);
  }

  async save(hostname: string, scope: ReadScope): Promise<void> {
    const map = await readMap();
    map[hostname] = serializeScope(scope);
    await chrome.storage.local.set({ [KEY]: map });
  }

  async clear(hostname: string): Promise<void> {
    const map = await readMap();
    delete map[hostname];
    await chrome.storage.local.set({ [KEY]: map });
  }
}
