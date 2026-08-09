import { expect, test } from '@playwright/test';
import { launchExtensionContext, testHarnessUrl } from '../../helpers/extension';
import { type FixtureServer, startFixtureServer } from '../../helpers/fixture-server';

/**
 * Exercises the content script's full playback + highlighting pipeline:
 * widget button clicks → sequencer → reader → boundary events → DOM highlight.
 *
 * Uses a FakeBoundaryReader (activated via data-dita-test-reader="fake")
 * so word boundaries fire deterministically without real speech synthesis.
 */
test.describe('widget playback and highlighting', () => {
  let server: FixtureServer;

  test.beforeAll(async () => {
    server = await startFixtureServer();
  });
  test.afterAll(async () => {
    await server.close();
  });

  test('highlights words and toggles button state during play/pause/resume/stop', async () => {
    const harness = await launchExtensionContext();
    try {
      const { context, extensionId, errors } = harness;

      // Enable test mode BEFORE the content script loads. The data attr is
      // visible to the content script's isolated world because the DOM is shared.
      await context.addInitScript(`
        document.documentElement.setAttribute('data-dita-test-reader', 'fake');
      `);

      const page = await context.newPage();
      await page.goto(`${server.base}/article.html`);

      // Inject the widget via runtime message.
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

      // Widget mounts in the page (Shadow DOM pierced by Playwright CSS).
      await expect(page.locator('.dita-widget')).toBeVisible({ timeout: 5_000 });

      const playBtn = page.locator('.dita-btn-play');
      const stopBtn = page.locator('.dita-btn').filter({ hasText: '■' });
      const mark = page.locator('mark.dita-word-highlight');

      // Idle: play button shows ▶, no highlights.
      await expect(playBtn).toHaveText('▶');
      await expect(mark).toHaveCount(0);

      // Click play → button becomes ⏸, highlights start appearing.
      await playBtn.click();
      await expect(playBtn).toHaveText('⏸');
      await expect(mark).toHaveCount(1, { timeout: 2_000 });

      // Click pause → button shows ▶. Highlight persists (not cleared on pause).
      await playBtn.click();
      await expect(playBtn).toHaveText('▶');

      // Click resume (playBtn again) → button shows ⏸, highlights continue.
      await playBtn.click();
      await expect(playBtn).toHaveText('⏸');
      await expect(mark).toHaveCount(1, { timeout: 2_000 });

      // Click stop → button returns to ▶, highlights cleared.
      await stopBtn.click();
      await expect(playBtn).toHaveText('▶');
      await expect(mark).toHaveCount(0);

      expect(errors).toEqual([]);
    } finally {
      await harness.close();
    }
  });
});
