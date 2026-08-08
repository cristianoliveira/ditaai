import { expect, test } from '@playwright/test';
import { launchExtensionContext, testHarnessUrl } from '../../helpers/extension';

/**
 * The extension must start: manifest loads, service worker boots, extension
 * pages serve, and no uncaught errors escape.
 */
test.describe('extension startup', () => {
  test('loads, starts the service worker, and serves extension pages', async () => {
    const harness = await launchExtensionContext();
    try {
      expect(harness.extensionId).toMatch(/^[a-p]{32}$/);

      const page = await harness.context.newPage();
      await page.goto(testHarnessUrl(harness.extensionId));

      // popup page served — chrome.runtime is available on the extension origin
      const manifest = await page.evaluate(() => chrome.runtime.getManifest());
      expect(manifest.version).toBeTruthy();
      expect(manifest.name).toBeTruthy();

      // let async startup work settle before asserting no errors
      await page.waitForTimeout(500);
      expect(harness.errors).toEqual([]);
    } finally {
      await harness.close();
    }
  });
});
