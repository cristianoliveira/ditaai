// @vitest-environment happy-dom
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { openPdfReader } from './pdf-handoff';

describe('openPdfReader', () => {
  const save = vi.fn();
  const open = vi.fn().mockResolvedValue(undefined);
  const getURL = vi.fn((path: string) => `chrome-extension://test-id${path}`);

  beforeEach(() => {
    save.mockReset().mockResolvedValue('req-1');
    open.mockClear();
    vi.stubGlobal('chrome', { runtime: { getURL } });
  });

  it('opens the reader with a one-use request for a direct PDF URL', async () => {
    const handled = await openPdfReader('https://example.test/report.pdf', open, { save });

    expect(handled).toBe(true);
    expect(save).toHaveBeenCalledWith('https://example.test/report.pdf');
    expect(open).toHaveBeenCalledWith('chrome-extension://test-id/pdf-reader.html?request=req-1');
  });

  it('keeps the normal page flow for non-PDF tabs', async () => {
    expect(await openPdfReader('https://example.test/article', open, { save })).toBe(false);
    expect(await openPdfReader(undefined, open, { save })).toBe(false);
    expect(save).not.toHaveBeenCalled();
    expect(open).not.toHaveBeenCalled();
  });

  it('keeps the normal page flow for unsupported or credential-bearing URLs', async () => {
    expect(await openPdfReader('file:///tmp/report.pdf', open, { save })).toBe(false);
    expect(await openPdfReader('https://user:pw@example.test/x.pdf', open, { save })).toBe(false);
    expect(open).not.toHaveBeenCalled();
  });
});
