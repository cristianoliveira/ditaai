import { describe, expect, it } from 'vitest';
import {
  DEFAULT_LANGUAGE,
  SUPPORTED_LANGUAGES,
  isSupportedLanguage,
  languageLabel,
} from './languages';

describe('SUPPORTED_LANGUAGES', () => {
  it('matches the supertonic-3 documented set', () => {
    const codes = SUPPORTED_LANGUAGES.map((entry) => entry.code);
    expect(codes).toEqual([
      'en',
      'ko',
      'ja',
      'ar',
      'bg',
      'cs',
      'da',
      'de',
      'el',
      'es',
      'et',
      'fi',
      'fr',
      'hi',
      'hr',
      'hu',
      'id',
      'it',
      'lt',
      'lv',
      'nl',
      'pl',
      'pt',
      'ro',
      'ru',
      'sk',
      'sl',
      'sv',
      'tr',
      'uk',
      'vi',
    ]);
  });

  it('keeps codes unique and labels non-empty', () => {
    expect(new Set(SUPPORTED_LANGUAGES.map((entry) => entry.code)).size).toBe(
      SUPPORTED_LANGUAGES.length,
    );
    for (const entry of SUPPORTED_LANGUAGES) {
      expect(entry.label.length).toBeGreaterThan(0);
    }
  });

  it('includes the default language', () => {
    expect(isSupportedLanguage(DEFAULT_LANGUAGE)).toBe(true);
  });
});

describe('isSupportedLanguage', () => {
  it('accepts a supported code', () => {
    expect(isSupportedLanguage('pt')).toBe(true);
  });

  it('rejects unknown, empty, and non-string values', () => {
    expect(isSupportedLanguage('xx')).toBe(false);
    expect(isSupportedLanguage('')).toBe(false);
    expect(isSupportedLanguage(undefined)).toBe(false);
    expect(isSupportedLanguage(42)).toBe(false);
  });

  it('is case-sensitive', () => {
    expect(isSupportedLanguage('EN')).toBe(false);
  });
});

describe('languageLabel', () => {
  it('returns the English label for a supported code', () => {
    expect(languageLabel('ja')).toBe('Japanese');
  });

  it('falls back to the code when unknown', () => {
    expect(languageLabel('xx')).toBe('xx');
  });
});
