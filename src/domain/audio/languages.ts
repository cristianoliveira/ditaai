/**
 * Languages the Supertonic engine can narrate.
 * Source: Supertone/supertonic-3 README "Supported Languages" table.
 * Single source of truth shared by the settings UI and the inference engine.
 */

export interface LanguageEntry {
  code: string;
  label: string;
}

export const SUPPORTED_LANGUAGES: readonly LanguageEntry[] = [
  { code: 'en', label: 'English' },
  { code: 'ko', label: 'Korean' },
  { code: 'ja', label: 'Japanese' },
  { code: 'ar', label: 'Arabic' },
  { code: 'bg', label: 'Bulgarian' },
  { code: 'cs', label: 'Czech' },
  { code: 'da', label: 'Danish' },
  { code: 'de', label: 'German' },
  { code: 'el', label: 'Greek' },
  { code: 'es', label: 'Spanish' },
  { code: 'et', label: 'Estonian' },
  { code: 'fi', label: 'Finnish' },
  { code: 'fr', label: 'French' },
  { code: 'hi', label: 'Hindi' },
  { code: 'hr', label: 'Croatian' },
  { code: 'hu', label: 'Hungarian' },
  { code: 'id', label: 'Indonesian' },
  { code: 'it', label: 'Italian' },
  { code: 'lt', label: 'Lithuanian' },
  { code: 'lv', label: 'Latvian' },
  { code: 'nl', label: 'Dutch' },
  { code: 'pl', label: 'Polish' },
  { code: 'pt', label: 'Portuguese' },
  { code: 'ro', label: 'Romanian' },
  { code: 'ru', label: 'Russian' },
  { code: 'sk', label: 'Slovak' },
  { code: 'sl', label: 'Slovenian' },
  { code: 'sv', label: 'Swedish' },
  { code: 'tr', label: 'Turkish' },
  { code: 'uk', label: 'Ukrainian' },
  { code: 'vi', label: 'Vietnamese' },
] as const;

export const DEFAULT_LANGUAGE = 'en';

export function isSupportedLanguage(value: unknown): value is string {
  return typeof value === 'string' && SUPPORTED_LANGUAGES.some((entry) => entry.code === value);
}

export function languageLabel(code: string): string {
  return SUPPORTED_LANGUAGES.find((entry) => entry.code === code)?.label ?? code;
}
