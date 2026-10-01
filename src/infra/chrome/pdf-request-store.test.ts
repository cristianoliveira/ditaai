import { beforeEach, describe, expect, it, vi } from 'vitest';
import { PDF_REQUEST_KEY, SessionStoragePdfRequestStore } from './pdf-request-store';

describe('SessionStoragePdfRequestStore', () => {
  const get = vi.fn();
  const set = vi.fn();
  const remove = vi.fn();
  let nextId: number;
  let nextNow: number;

  const store = new SessionStoragePdfRequestStore(
    { get, set, remove } as unknown as typeof chrome.storage.session,
    () => `id-${++nextId}`,
    () => nextNow,
  );

  beforeEach(() => {
    nextId = 0;
    nextNow = 1000;
    get.mockReset();
    set.mockReset();
    remove.mockReset();
  });

  it('saves a TTL-bound request under a random id', async () => {
    const requestId = await store.save('https://example.test/report.pdf');

    expect(requestId).toBe('id-1');
    expect(set).toHaveBeenCalledWith({
      [PDF_REQUEST_KEY]: {
        id: 'id-1',
        url: 'https://example.test/report.pdf',
        expiresAt: 1000 + 5 * 60 * 1000,
      },
    });
  });

  it('consumes a matching request exactly once', async () => {
    get.mockResolvedValue({
      [PDF_REQUEST_KEY]: { id: 'id-1', url: 'https://example.test/a.pdf', expiresAt: 2000 },
    });
    nextNow = 1500;

    await expect(store.consume('id-1')).resolves.toBe('https://example.test/a.pdf');
    expect(remove).toHaveBeenCalledWith(PDF_REQUEST_KEY);
  });

  it('rejects unknown, mismatched, or expired request ids', async () => {
    get.mockResolvedValue({
      [PDF_REQUEST_KEY]: { id: 'id-1', url: 'https://example.test/a.pdf', expiresAt: 1100 },
    });
    nextNow = 1200;

    await expect(store.consume('other')).resolves.toBeNull();
    await expect(store.consume('id-1')).resolves.toBeNull();
    expect(remove).toHaveBeenCalledTimes(2);
  });

  it('only clears its own claim', async () => {
    get.mockResolvedValueOnce({
      [PDF_REQUEST_KEY]: { id: 'id-2', url: 'https://example.test/b.pdf', expiresAt: 2000 },
    });
    await store.clear('id-2');
    expect(remove).toHaveBeenCalledWith(PDF_REQUEST_KEY);

    remove.mockClear();
    get.mockResolvedValueOnce({
      [PDF_REQUEST_KEY]: { id: 'id-2', url: 'https://example.test/b.pdf', expiresAt: 2000 },
    });
    await store.clear('id-1');
    expect(remove).not.toHaveBeenCalled();
  });
});
