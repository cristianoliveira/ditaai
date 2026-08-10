import { DEFAULT_LANGUAGE, isSupportedLanguage } from '../../domain/audio/languages';

export const LANGUAGE_KEY = 'narrationLanguage';

export class ChromeLanguageStorage {
  async load(): Promise<string> {
    const stored = await chrome.storage.local.get(LANGUAGE_KEY);
    const code = stored[LANGUAGE_KEY];
    return isSupportedLanguage(code) ? code : DEFAULT_LANGUAGE;
  }

  async save(code: string): Promise<void> {
    const language = isSupportedLanguage(code) ? code : DEFAULT_LANGUAGE;
    await chrome.storage.local.set({ [LANGUAGE_KEY]: language });
  }
}
