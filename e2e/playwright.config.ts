import process from 'node:process';
import { defineConfig, devices } from '@playwright/test';

/**
 * Dita extension E2E.
 *
 * Loads the REAL built extension into a persistent Chromium context
 * (--load-extension) and drives it through its own surfaces: chrome.runtime
 * messages, chrome.storage, popup pages. The launch logic lives in
 * helpers/extension.ts; this config owns runner settings only.
 */
export default defineConfig({
  testDir: './tests',
  testMatch: '**/*.pw.ts',

  // Extension tests share one browser/context per test — keep serial.
  fullyParallel: false,
  workers: process.env.CI ? 1 : undefined,

  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,

  reporter: 'list',

  use: {
    trace: 'on-first-retry',
  },

  projects: [
    {
      // Extensions only run in Chromium.
      name: 'extension-chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
