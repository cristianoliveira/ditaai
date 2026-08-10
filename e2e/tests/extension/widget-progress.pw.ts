import { expect, test } from '@playwright/test';
import { launchExtensionContext, testHarnessUrl } from '../../helpers/extension';
import { type FixtureServer, startFixtureServer } from '../../helpers/fixture-server';

/**
 * The widget's "current/total" parts counter (e.g. "1/2").
 *
 * fake-tts-article.html has two readable leaf blocks (<h1> + <p>), so the
 * sequencer advances across two segments — enough to observe the counter move.
 */
test.describe('widget parts counter', () => {
  let server: FixtureServer;

  test.beforeAll(async () => {
    server = await startFixtureServer();
  });
  test.afterAll(async () => {
    await server.close();
  });

  test('shows and advances the counter when opened before playback', async () => {
    const harness = await launchExtensionContext();
    try {
      const { context, extensionId, errors } = harness;

      const page = await context.newPage();
      await page.goto(`${server.base}/fake-tts-article.html`);

      // Inject the widget while idle (before any dictation).
      const ext = await context.newPage();
      await ext.goto(testHarnessUrl(extensionId));
      await ext.evaluate(async () => {
        const tabs = await chrome.tabs.query({});
        const tab = tabs.find((t) => t.url?.includes('fake-tts-article.html'));
        if (!tab?.id) throw new Error('no article tab found');
        await chrome.tabs.sendMessage(tab.id, {
          dest: 'contentScript',
          method: 'toggleWidget',
          args: [],
        });
      });

      await expect(page.locator('.dita-widget')).toBeVisible({ timeout: 5_000 });
      const progress = page.locator('.dita-progress');

      // Opened before playback: no parts counter yet.
      await expect(progress).toHaveText('');

      // Start playback via the widget — the first segment must surface "1/2".
      await page.locator('.dita-btn-play').click();
      await expect(progress).toHaveText('1/2', { timeout: 2_000 });

      // As the sequencer moves to the second paragraph, the counter advances.
      await expect.poll(async () => await progress.textContent(), { timeout: 5_000 }).toBe('2/2');

      expect(errors).toEqual([]);
    } finally {
      await harness.close();
    }
  });
});
