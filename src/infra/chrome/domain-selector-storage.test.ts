// @vitest-environment happy-dom
import { afterEach, describe, expect, it, vi } from 'vitest';
import { ChromeDomainSelectorStorage } from './domain-selector-storage';

describe('ChromeDomainSelectorStorage', () => {
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
  }

  it('loads a saved selector by hostname', async () => {
    stubStorage({ 'example.com': 'div.content' });

    const store = new ChromeDomainSelectorStorage();
    const result = await store.load('example.com');
    expect(result).toBe('div.content');
  });

  it('returns null for unknown hostname', async () => {
    stubStorage();

    const store = new ChromeDomainSelectorStorage();
    const result = await store.load('unknown.com');
    expect(result).toBeNull();
  });

  it('clears a hostname entry', async () => {
    stubStorage({ 'example.com': 'p' });

    const store = new ChromeDomainSelectorStorage();
    await store.clear('example.com');
    const result = await store.load('example.com');
    expect(result).toBeNull();
  });

  it('isolates hostnames — saving one does not affect another', async () => {
    stubStorage();

    const store = new ChromeDomainSelectorStorage();
    await store.save('a.com', '.main');
    await store.save('b.com', '.sidebar');

    expect(await store.load('a.com')).toBe('.main');
    expect(await store.load('b.com')).toBe('.sidebar');
  });

  it('overwrites an existing selector for the same hostname', async () => {
    stubStorage({ 'example.com': 'old' });

    const store = new ChromeDomainSelectorStorage();
    await store.save('example.com', 'new');

    expect(await store.load('example.com')).toBe('new');
  });
});
