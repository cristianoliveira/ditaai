import { expect, test } from '@playwright/test';
import { launchExtensionContext, testHarnessUrl } from '../../helpers/extension';
import { type FixtureServer, startFixtureServer } from '../../helpers/fixture-server';

/**
 * Clicking the extension icon injects the floating widget into the page.
 */
test.describe('widget injection', () => {
  let server: FixtureServer;

  test.beforeAll(async () => {
    server = await startFixtureServer();
  });
  test.afterAll(async () => {
    await server.close();
  });

  test('toggleWidget message injects the widget into the page', async () => {
    const harness = await launchExtensionContext();
    try {
      const { context, extensionId, errors } = harness;

      const page = await context.newPage();
      await page.goto(`${server.base}/article.html`);

      // send toggleWidget from an extension page via chrome.tabs.sendMessage
      const ext = await context.newPage();
      await ext.goto(testHarnessUrl(extensionId));

      await ext.evaluate(async () => {
        const tabs = await chrome.tabs.query({});
        const tab = tabs.find((t) => t.url?.includes('127.0.0.1'));
        if (!tab?.id) throw new Error('no article tab found');
        await chrome.tabs.sendMessage(tab.id, {
          dest: 'contentScript',
          method: 'toggleWidget',
          args: [],
        });
      });

      // Playwright CSS pierces open shadow roots — the widget should be visible
      await expect(page.locator('.dita-widget')).toBeVisible({ timeout: 5_000 });

      expect(errors).toEqual([]);
    } finally {
      await harness.close();
    }
  });
});
