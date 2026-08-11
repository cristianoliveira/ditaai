import { describe, expect, it, vi } from 'vitest';
import { chromiumLaunchArguments, openRequestedPage } from './observe-browser.mjs';

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
