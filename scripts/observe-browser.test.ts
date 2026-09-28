import { describe, expect, it, vi } from 'vitest';
import {
  chromiumLaunchArguments,
  loadedExtensionVersion,
  openRequestedPage,
  reloadLoadedExtension,
  requestLoadedBuild,
  runSyntheticAudioProbe,
} from './observe-browser.mjs';

describe('reloadLoadedExtension', () => {
  it('requests extension reload without requiring worker startup before a message', async () => {
    const evaluate = vi.fn(async (callback) => {
      callback();
    });

    await expect(reloadLoadedExtension({ evaluate })).resolves.toBeUndefined();
    expect(evaluate).toHaveBeenCalledOnce();
  });
});

describe('requestLoadedBuild', () => {
  it('queries the new worker through an extension page context', async () => {
    const evaluate = vi.fn().mockResolvedValue({ ok: true, buildVersion: 'build-123' });
    const page = { evaluate, waitForLoadState: vi.fn(), close: vi.fn() };
    const context = { waitForEvent: vi.fn().mockResolvedValue(page) };
    const serviceWorker = { evaluate: vi.fn().mockResolvedValue(undefined) };

    await expect(requestLoadedBuild(context, serviceWorker)).resolves.toEqual({
      ok: true,
      buildVersion: 'build-123',
    });
    expect(serviceWorker.evaluate).toHaveBeenCalledOnce();
    expect(page.close).toHaveBeenCalledOnce();
  });
});

describe('runSyntheticAudioProbe', () => {
  it('prepares only a fixed synthetic sentence at bounded quality', async () => {
    const evaluate = vi.fn().mockResolvedValue({ ok: true });
    const close = vi.fn();
    const page = { evaluate, waitForLoadState: vi.fn(), close };
    const context = { waitForEvent: vi.fn().mockResolvedValue(page) };
    const serviceWorker = { evaluate: vi.fn().mockResolvedValue(undefined) };

    await expect(runSyntheticAudioProbe(context, serviceWorker)).resolves.toEqual({
      ok: true,
    });
    expect(context.waitForEvent).toHaveBeenCalledWith('page', { timeout: 15_000 });
    expect(serviceWorker.evaluate).toHaveBeenCalledOnce();
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
