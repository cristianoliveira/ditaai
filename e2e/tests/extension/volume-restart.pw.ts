import { expect, test } from '@playwright/test';
import { launchExtensionContext, testHarnessUrl } from '../../helpers/extension';
import { type FixtureServer, startFixtureServer } from '../../helpers/fixture-server';

/**
 * Changing the volume (or rate) slider while playing must re-speak the current
 * segment from the last spoken word so the new value is heard immediately.
 *
 * Proven end-to-end with the fake reader: a restart re-fires onSegmentChange
 * for the *same* segment index, so "[dita] segment {index:N}" appears twice.
 * Without the restart it would appear once and playback would simply advance.
 */
test.describe('live volume restart', () => {
  let server: FixtureServer;

  test.beforeAll(async () => {
    server = await startFixtureServer();
  });
  test.afterAll(async () => {
    await server.close();
  });

  test('changing the volume slider while playing restarts the current segment', async () => {
    const harness = await launchExtensionContext();
    try {
      const { context, extensionId, errors } = harness;

      const page = await context.newPage();
      // Capture the content-script segment logs — the restart signature.
      const segmentLogs: string[] = [];
      page.on('console', (msg) => {
        const text = msg.text();
        if (text.includes('[dita] segment')) segmentLogs.push(text);
      });
      await page.goto(`${server.base}/fake-tts-article.html`);

      // Mount the widget via runtime message from an extension page.
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

      // Play → segment 0 (short h1) then segment 1 (long paragraph, ~1.2s of
      // fake speech, leaving room to change volume mid-segment).
      await page.locator('.dita-btn-play').click();
      await expect
        .poll(() => segmentLogs.filter((l) => l.includes('"index":1,')).length, { timeout: 4_000 })
        .toBeGreaterThan(0);

      const beforeRestart = segmentLogs.filter((l) => l.includes('"index":1,')).length;

      // Move the volume slider via the keyboard — each ArrowDown decrements
      // the range input and fires a native 'input' event → onChangeVolume →
      // debounced setVolume → sequencer restarts the current segment. Keyboard
      // input avoids DOM-lib types (absent from the e2e tsconfig).
      const volume = page.locator('.dita-volume');
      for (let i = 0; i < 5; i++) await volume.press('ArrowDown');

      // Restart re-fires onSegmentChange for the same index → logged again.
      await expect
        .poll(() => segmentLogs.filter((l) => l.includes('"index":1,')).length, {
          timeout: 3_000,
          message: 'segment 1 to be re-announced after the volume restart',
        })
        .toBeGreaterThan(beforeRestart);

      expect(errors).toEqual([]);
    } finally {
      await harness.close();
    }
  });
});
