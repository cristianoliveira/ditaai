import { describe, expect, it, vi } from 'vitest';
import {
  chromiumLaunchArguments,
  loadedExtensionVersion,
  openRequestedPage,
  reloadLoadedExtension,
  runSyntheticAudioProbe,
} from './observe-browser.mjs';

describe('reloadLoadedExtension', () => {
  it('requests extension reload and resolves with the replacement worker', async () => {
    let resolveWorker: ((worker: unknown) => void) | undefined;
    const replacement = new Promise((resolve) => {
      resolveWorker = resolve;
    });
    const waitForEvent = vi.fn(() => replacement);
    const evaluate = vi.fn(async (callback) => {
      callback();
    });
    const serviceWorker = { evaluate };
    const context = { waitForEvent };
    const nextWorker = { url: 'chrome-extension://id/background.js' };
    const result = reloadLoadedExtension(context, serviceWorker);
    resolveWorker?.(nextWorker);

    await expect(result).resolves.toBe(nextWorker);
    expect(waitForEvent).toHaveBeenCalledWith('serviceworker', { timeout: 15_000 });
    expect(evaluate).toHaveBeenCalledOnce();
  });
});

describe('runSyntheticAudioProbe', () => {
  it('prepares only a fixed synthetic sentence at bounded quality', async () => {
    const evaluate = vi.fn().mockResolvedValue({ ok: true });
    const goto = vi.fn();
    const close = vi.fn();
    const page = { evaluate, goto, close };
    const context = { newPage: vi.fn().mockResolvedValue(page) };

    await expect(runSyntheticAudioProbe(context, 'extension-id')).resolves.toEqual({ ok: true });
    expect(context.newPage).toHaveBeenCalledOnce();
    expect(goto).toHaveBeenCalledWith('chrome-extension://extension-id/popup.html');
    expect(evaluate.mock.calls[0]?.[0]).toBeTypeOf('function');
    expect(close).toHaveBeenCalledOnce();
  });
});

describe('loadedExtensionVersion', () => {
  it('reads the version of the service worker that Chromium actually loaded', async () => {
    const evaluate = vi.fn().mockResolvedValue('0.3.0-build-123');

    await expect(loadedExtensionVersion({ evaluate })).resolves.toBe('0.3.0-build-123');
    expect(evaluate).toHaveBeenCalledOnce();
  });
});

describe('chromiumLaunchArguments', () => {
  it('loads Dita and restores tabs from the persistent profile', () => {
    expect(chromiumLaunchArguments('/tmp/dita-extension')).toEqual([
      '--disable-extensions-except=/tmp/dita-extension',
      '--load-extension=/tmp/dita-extension',
      '--restore-last-session',
    ]);
  });
});

describe('openRequestedPage', () => {
  it('keeps restored pages unchanged when no startup URL was requested', async () => {
    const newPage = vi.fn();

    await openRequestedPage({ newPage }, undefined);

    expect(newPage).not.toHaveBeenCalled();
  });

  it('opens an explicitly requested URL without replacing restored pages', async () => {
    const goto = vi.fn();
    const newPage = vi.fn().mockResolvedValue({ goto });

    await openRequestedPage({ newPage }, 'https://example.com/article');

    expect(newPage).toHaveBeenCalledOnce();
    expect(goto).toHaveBeenCalledWith('https://example.com/article');
  });
});
