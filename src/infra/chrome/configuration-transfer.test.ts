import { afterEach, describe, expect, it, vi } from 'vitest';
import { BACKUP_FORMAT } from '../../domain/configuration-backup';
import { CONFIGURATION_STORAGE_KEYS, ChromeConfigurationTransfer } from './configuration-transfer';

describe('ChromeConfigurationTransfer', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('exports only supported configuration keys', async () => {
    const get = vi.fn().mockResolvedValue({
      shortcuts: { togglePlay: 'Alt+P' },
      pronunciations: { Dita: 'dee ta' },
      unrelated: 'keep private',
    });
    vi.stubGlobal('chrome', { storage: { local: { get } } });

    const backup = JSON.parse(await new ChromeConfigurationTransfer().export());

    expect(get).toHaveBeenCalledWith(CONFIGURATION_STORAGE_KEYS);
    expect(backup).toEqual({
      format: BACKUP_FORMAT,
      version: 1,
      settings: { shortcuts: { togglePlay: 'Alt+P' }, pronunciations: { Dita: 'dee ta' } },
    });
  });

  it('replaces supported settings without touching unrelated extension data', async () => {
    const remove = vi.fn().mockResolvedValue(undefined);
    const set = vi.fn().mockResolvedValue(undefined);
    vi.stubGlobal('chrome', { storage: { local: { remove, set } } });

    await new ChromeConfigurationTransfer().import(
      JSON.stringify({
        format: BACKUP_FORMAT,
        version: 1,
        settings: { shortcuts: { togglePlay: 'alt+p' }, playbackRate: 1.25 },
      }),
    );

    expect(remove).toHaveBeenCalledWith(CONFIGURATION_STORAGE_KEYS);
    expect(set).toHaveBeenCalledWith({
      shortcuts: { togglePlay: 'Alt+P' },
      playbackRate: 1.25,
    });
  });
});
