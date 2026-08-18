// @vitest-environment happy-dom
import { afterEach, describe, expect, it, vi } from 'vitest';
import { ChromeDomainSelectorStorage } from './domain-selector-storage';

describe('ChromeDomainSelectorStorage (DomainScopeStore)', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  function stubStorage(initial: Record<string, string> = {}) {
    const data = { domainSelectors: { ...initial } };
    vi.stubGlobal('chrome', {
      storage: {
        local: {
          get: vi.fn((_keys: string | string[]) => Promise.resolve(data)),
          set: vi.fn((items: Record<string, unknown>) => {
            Object.assign(data, items);
            return Promise.resolve();
          }),
        },
      },
    });
    return data;
  }

  it('migrates a legacy bare selector string to a DOM scope on load', async () => {
    stubStorage({ 'example.com': 'div.content' });

    const store = new ChromeDomainSelectorStorage();
    expect(await store.load('example.com')).toEqual({
      source: 'dom',
      selector: 'div.content',
    });
  });

  it('round-trips a DOM scope', async () => {
    stubStorage();
    const store = new ChromeDomainSelectorStorage();

    await store.save('example.com', { source: 'dom', selector: 'main .prose' });
    expect(await store.load('example.com')).toEqual({ source: 'dom', selector: 'main .prose' });
  });

  it('round-trips an accessibility scope', async () => {
    stubStorage();
    const store = new ChromeDomainSelectorStorage();
    const scope = {
      source: 'accessibility',
      anchorSelector: '#story .prose-wrap',
      locator: { firstStaticPrefix: 'The landscape', staticCount: 14 },
    } as const;

    await store.save('example.com', scope);
    const stored = stubStoragePeekRaw('example.com');
    // persisted payload never carries session-only AX ids
    expect(stored).not.toMatch(/nodeId|backendDOM/i);
    expect(await store.load('example.com')).toEqual(scope);
  });

  it('returns null for malformed stored values', async () => {
    stubStorage({ 'bad.example': '{"source":"dom",' });

    const store = new ChromeDomainSelectorStorage();
    expect(await store.load('bad.example')).toBeNull();
  });

  it('returns null for unknown hostname', async () => {
    stubStorage({ 'example.com': 'p' });

    const store = new ChromeDomainSelectorStorage();
    expect(await store.load('unknown.com')).toBeNull();
  });

  it('clears a hostname entry', async () => {
    stubStorage({ 'example.com': 'p' });

    const store = new ChromeDomainSelectorStorage();
    await store.clear('example.com');
    expect(await store.load('example.com')).toBeNull();
  });

  it('isolates hostnames — saving one does not affect another', async () => {
    stubStorage();

    const store = new ChromeDomainSelectorStorage();
    await store.save('a.com', { source: 'dom', selector: '.main' });
    await store.save('b.com', { source: 'dom', selector: '.side' });

    expect(await store.load('a.com')).toEqual({ source: 'dom', selector: '.main' });
    expect(await store.load('b.com')).toEqual({ source: 'dom', selector: '.side' });
  });

  it('keeps values opaque for backup/export: stored map round-trips through raw storage', async () => {
    const data = stubStorage({ 'legacy.com': 'article' });

    const store = new ChromeDomainSelectorStorage();
    await store.save('new.example', { source: 'dom', selector: 'p' });

    // export copies the whole map verbatim; both formats coexist and parse
    const exported = { ...data.domainSelectors };
    expect(exported['legacy.com']).toBe('article');
    expect(JSON.parse(exported['new.example'] as string)).toEqual({
      source: 'dom',
      selector: 'p',
    });
  });

  function stubStoragePeekRaw(hostname: string): string {
    // reads whatever the last save wrote, straight from the stubbed map
    const calls = (chrome.storage.local.set as ReturnType<typeof vi.fn>).mock.calls;
    for (let i = calls.length - 1; i >= 0; i--) {
      const items = calls[i]?.[0] as { domainSelectors?: Record<string, string> } | undefined;
      const map = items?.domainSelectors;
      if (map && hostname in map) return map[hostname] as string;
    }
    return '';
  }
});
