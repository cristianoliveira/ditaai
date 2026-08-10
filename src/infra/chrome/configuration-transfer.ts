import {
  type ConfigurationSettings,
  createConfigurationBackup,
  parseConfigurationBackup,
} from '../../domain/configuration-backup';

/** Keys that are portable between DitaAi installations. Voice model files stay local. */
export const CONFIGURATION_STORAGE_KEYS = [
  'shortcuts',
  'pronunciations',
  'domainSelectors',
  'selectedVoiceId',
  'highlightWords',
  'playbackRate',
  'playbackVolume',
  'pronunciationsEnabled',
] as const;

export class ChromeConfigurationTransfer {
  async export(): Promise<string> {
    const stored = await chrome.storage.local.get([...CONFIGURATION_STORAGE_KEYS]);
    const settings = Object.fromEntries(
      CONFIGURATION_STORAGE_KEYS.filter((key) => key in stored).map((key) => [key, stored[key]]),
    ) as ConfigurationSettings;
    return JSON.stringify(createConfigurationBackup(settings), null, 2);
  }

  async import(text: string): Promise<void> {
    const settings = parseConfigurationBackup(text);
    await chrome.storage.local.remove([...CONFIGURATION_STORAGE_KEYS]);
    if (Object.keys(settings).length > 0) await chrome.storage.local.set(settings);
  }
}
