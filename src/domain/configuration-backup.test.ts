import { describe, expect, it } from 'vitest';
import {
  BACKUP_FORMAT,
  createConfigurationBackup,
  parseConfigurationBackup,
} from './configuration-backup';

describe('configuration backup', () => {
  it('exports every supported setting in a versioned portable format', () => {
    expect(
      createConfigurationBackup({
        shortcuts: { togglePlay: 'Alt+P' },
        pronunciations: { Dita: 'dee ta' },
        domainSelectors: { 'example.com': 'main' },
        selectedVoiceId: 'F1',
        highlightWords: false,
        playbackRate: 1.5,
        playbackVolume: 0.4,
        pronunciationsEnabled: false,
      }),
    ).toEqual({
      format: BACKUP_FORMAT,
      version: 1,
      settings: {
        shortcuts: { togglePlay: 'Alt+P' },
        pronunciations: { Dita: 'dee ta' },
        domainSelectors: { 'example.com': 'main' },
        selectedVoiceId: 'F1',
        highlightWords: false,
        playbackRate: 1.5,
        playbackVolume: 0.4,
        pronunciationsEnabled: false,
      },
    });
  });

  it('accepts a valid backup and discards unsafe or malformed setting values', () => {
    expect(
      parseConfigurationBackup(
        JSON.stringify({
          format: BACKUP_FORMAT,
          version: 1,
          settings: {
            shortcuts: { togglePlay: 'alt+p', unknown: 'Alt+Q' },
            pronunciations: { Dita: 'dee ta', bad: 3 },
            domainSelectors: { 'example.com': 'main', bad: 3 },
            selectedVoiceId: '',
            highlightWords: 'false',
            playbackRate: 7,
            playbackVolume: -1,
            pronunciationsEnabled: false,
          },
        }),
      ),
    ).toEqual({
      shortcuts: { togglePlay: 'Alt+P' },
      pronunciations: { Dita: 'dee ta' },
      domainSelectors: { 'example.com': 'main' },
      pronunciationsEnabled: false,
    });
  });

  it.each([
    '{}',
    '{ bad json',
    JSON.stringify({ format: BACKUP_FORMAT, version: 2, settings: {} }),
    JSON.stringify({ format: 'other', version: 1, settings: {} }),
    JSON.stringify({ format: BACKUP_FORMAT, version: 1 }),
  ])('rejects an unsupported backup: %s', (input) => {
    expect(() => parseConfigurationBackup(input)).toThrow('Invalid DitaAi configuration backup');
  });
});
