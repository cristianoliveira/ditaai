import { isSupportedLanguage } from './audio/languages';
import { isSynthesisQuality } from './audio/quality';
import { type Substitutions, sanitizeSubstitutions } from './document/substitutions';
import { type ShortcutMap, mergeShortcuts } from './shortcuts/shortcuts';

export const BACKUP_FORMAT = 'ditaai-configuration';
export const BACKUP_VERSION = 1;

export interface ConfigurationSettings {
  shortcuts?: Partial<ShortcutMap>;
  pronunciations?: Substitutions;
  domainSelectors?: Record<string, string>;
  selectedVoiceId?: string;
  rotateVoices?: boolean;
  highlightWords?: boolean;
  playbackRate?: number;
  playbackVolume?: number;
  pronunciationsEnabled?: boolean;
  synthesisQuality?: number;
  narrationLanguage?: string;
}

export interface ConfigurationBackup {
  format: typeof BACKUP_FORMAT;
  version: typeof BACKUP_VERSION;
  settings: ConfigurationSettings;
}

export function createConfigurationBackup(settings: ConfigurationSettings): ConfigurationBackup {
  return { format: BACKUP_FORMAT, version: BACKUP_VERSION, settings };
}

export function parseConfigurationBackup(text: string): ConfigurationSettings {
  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    throw invalidBackup();
  }

  if (!isRecord(parsed)) throw invalidBackup();

  const backup = parsed as UnknownBackup;
  if (
    backup.format !== BACKUP_FORMAT ||
    backup.version !== BACKUP_VERSION ||
    !isRecord(backup.settings)
  ) {
    throw invalidBackup();
  }

  const settings = backup.settings as UnknownConfigurationSettings;
  const result: ConfigurationSettings = {};
  if (isRecord(settings.shortcuts)) {
    const shortcuts = mergeShortcuts(settings.shortcuts);
    const supplied = Object.keys(settings.shortcuts).filter((key) => key in shortcuts);
    if (supplied.length > 0) {
      result.shortcuts = Object.fromEntries(
        supplied.map((key) => [key, shortcuts[key as keyof ShortcutMap]]),
      );
    }
  }
  if (isRecord(settings.pronunciations))
    result.pronunciations = sanitizeSubstitutions(settings.pronunciations);
  if (isRecord(settings.domainSelectors))
    result.domainSelectors = sanitizeStringMap(settings.domainSelectors);
  if (typeof settings.selectedVoiceId === 'string' && settings.selectedVoiceId.length > 0) {
    result.selectedVoiceId = settings.selectedVoiceId;
  }
  if (typeof settings.rotateVoices === 'boolean') result.rotateVoices = settings.rotateVoices;
  if (typeof settings.highlightWords === 'boolean') result.highlightWords = settings.highlightWords;
  if (isInRange(settings.playbackRate, 0.5, 2)) result.playbackRate = settings.playbackRate;
  if (isInRange(settings.playbackVolume, 0, 1)) result.playbackVolume = settings.playbackVolume;
  if (typeof settings.pronunciationsEnabled === 'boolean') {
    result.pronunciationsEnabled = settings.pronunciationsEnabled;
  }
  if (isSynthesisQuality(settings.synthesisQuality)) {
    result.synthesisQuality = settings.synthesisQuality;
  }
  if (isSupportedLanguage(settings.narrationLanguage)) {
    result.narrationLanguage = settings.narrationLanguage;
  }
  return result;
}

interface UnknownBackup {
  format?: unknown;
  version?: unknown;
  settings?: unknown;
}

interface UnknownConfigurationSettings {
  shortcuts?: unknown;
  pronunciations?: unknown;
  domainSelectors?: unknown;
  selectedVoiceId?: unknown;
  rotateVoices?: unknown;
  highlightWords?: unknown;
  playbackRate?: unknown;
  playbackVolume?: unknown;
  pronunciationsEnabled?: unknown;
  synthesisQuality?: unknown;
  narrationLanguage?: unknown;
}

function invalidBackup(): Error {
  return new Error('Invalid DitaAi configuration backup');
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function sanitizeStringMap(value: Record<string, unknown>): Record<string, string> {
  return Object.fromEntries(
    Object.entries(value).filter(([, entry]) => typeof entry === 'string'),
  ) as Record<string, string>;
}

function isInRange(value: unknown, min: number, max: number): value is number {
  return typeof value === 'number' && Number.isFinite(value) && value >= min && value <= max;
}
