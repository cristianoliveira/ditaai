import { describe, expect, it, vi } from 'vitest';
import {
  chromiumLaunchArguments,
  loadedExtensionVersion,
  openRequestedPage,
  runSyntheticAudioProbe,
} from './observe-browser.mjs';

describe('runSyntheticAudioProbe', () => {
  it('prepares only a fixed synthetic sentence at bounded quality', async () => {
    const evaluate = vi.fn().mockResolvedValue({ ok: true });

    await expect(runSyntheticAudioProbe({ evaluate })).resolves.toEqual({ ok: true });
    expect(evaluate).toHaveBeenCalledOnce();
    expect(evaluate.mock.calls[0]?.[0]).toBeTypeOf('function');
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
