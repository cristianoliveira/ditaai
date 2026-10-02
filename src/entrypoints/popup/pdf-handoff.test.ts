// @vitest-environment happy-dom
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { attemptPdfHandoff, canAttemptPdfHandoff, openPdfReader } from './pdf-handoff';

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

describe('canAttemptPdfHandoff', () => {
  it('offers the explicit PDF action for extensionless HTTP(S) pages', () => {
    expect(canAttemptPdfHandoff('https://example.test/download?id=123')).toBe(true);
    expect(canAttemptPdfHandoff('http://localhost/report')).toBe(true);
    expect(canAttemptPdfHandoff('https://example.test/report.pdf')).toBe(true);
  });

  it('never offers the action for unsupported or credential-bearing URLs', () => {
    expect(canAttemptPdfHandoff('ftp://example.test/report.pdf')).toBe(false);
    expect(canAttemptPdfHandoff('file:///tmp/report.pdf')).toBe(false);
    expect(canAttemptPdfHandoff('chrome://version')).toBe(false);
    expect(canAttemptPdfHandoff('https://user:pw@example.test/x')).toBe(false);
    expect(canAttemptPdfHandoff(undefined)).toBe(false);
    expect(canAttemptPdfHandoff('not a url')).toBe(false);
  });
});

describe('attemptPdfHandoff', () => {
  const save = vi.fn();
  const open = vi.fn().mockResolvedValue(undefined);
  const getURL = vi.fn((path: string) => `chrome-extension://test-id${path}`);

  beforeEach(() => {
    save.mockReset().mockResolvedValue('req-2');
    open.mockClear();
    vi.stubGlobal('chrome', { runtime: { getURL } });
  });

  it('hands an extensionless URL to the reader on explicit user action', async () => {
    const handled = await attemptPdfHandoff('https://example.test/download?id=123', open, {
      save,
    });

    expect(handled).toBe(true);
    expect(save).toHaveBeenCalledWith('https://example.test/download?id=123');
    expect(open).toHaveBeenCalledWith('chrome-extension://test-id/pdf-reader.html?request=req-2');
  });

  it('refuses unsupported URLs without storing or opening anything', async () => {
    expect(await attemptPdfHandoff('file:///tmp/data', open, { save })).toBe(false);
    expect(await attemptPdfHandoff(undefined, open, { save })).toBe(false);
    expect(save).not.toHaveBeenCalled();
    expect(open).not.toHaveBeenCalled();
  });
});
