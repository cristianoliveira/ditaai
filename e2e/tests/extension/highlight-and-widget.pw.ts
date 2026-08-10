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

  test('highlights words and exposes the current play/pause/resume action', async () => {
    const harness = await launchExtensionContext();
    try {
      const { context, extensionId, errors } = harness;

      // The fixture declares fake-reader mode before any content script runs.
      const page = await context.newPage();
      await page.goto(`${server.base}/fake-tts-article.html`);

      // Inject the widget via runtime message.
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

      // Widget mounts in the page (Shadow DOM pierced by Playwright CSS).
      await expect(page.locator('.dita-widget')).toBeVisible({ timeout: 5_000 });

      const playBtn = page.locator('.dita-btn-play');
      const stopBtn = page.getByRole('button', { name: 'Stop page audio' });
      const mark = page.locator('mark.dita-word-highlight');

      // Idle: play action is available, no highlights.
      await expect(playBtn).toHaveAttribute('aria-label', 'Play page audio');
      await expect(mark).toHaveCount(0);

      // Click play → pause action becomes available, highlights start appearing.
      await playBtn.click();
      await expect(playBtn).toHaveAttribute('aria-label', 'Pause page audio');
      await expect(mark).toHaveCount(1, { timeout: 2_000 });

      // Click pause → resume action becomes available. Highlight persists.
      await playBtn.click();
      await expect(playBtn).toHaveAttribute('aria-label', 'Resume page audio');

      // Click resume → pause action returns, highlights continue.
      await playBtn.click();
      await expect(playBtn).toHaveAttribute('aria-label', 'Pause page audio');
      await expect(mark).toHaveCount(1, { timeout: 2_000 });

      // Click stop → play action returns, highlights clear.
      await stopBtn.click();
      await expect(playBtn).toHaveAttribute('aria-label', 'Play page audio');
      await expect(mark).toHaveCount(0);

      expect(errors).toEqual([]);
    } finally {
      await harness.close();
    }
  });
});
