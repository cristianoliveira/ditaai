import type { Page } from '@playwright/test';

/**
 * Client for chrome.storage.local, invoked from an extension page.
 * Seeds voice selection and settings before playback tests.
 */
export class SettingsRequester {
  constructor(private readonly page: Page) {}

  async set(settings: Record<string, unknown>): Promise<void> {
    await this.page.evaluate((data) => {
      return new Promise<void>((resolve) => {
        chrome.storage.local.set(data, () => resolve());
      });
    }, settings);
  }

  async get<T>(key: string): Promise<T | undefined> {
    return this.page.evaluate((k) => {
      return new Promise<T | undefined>((resolve) => {
        chrome.storage.local.get([k], (result) => resolve(result[k] as T | undefined));
      });
    }, key);
  }
}
