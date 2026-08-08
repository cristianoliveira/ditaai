import { expect, test } from '@playwright/test';
import { launchExtensionContext, testHarnessUrl } from '../../helpers/extension';
import { type FixtureServer, startFixtureServer } from '../../helpers/fixture-server';
import { ServiceWorkerRequester } from '../../requesters/service-worker';

/**
 * playTab drives content-script injection: the background asks the active
 * tab for readable text, the content script responds, then playback starts.
 */
test.describe('play tab via content-script injection', () => {
  let server: FixtureServer;

  test.beforeAll(async () => {
    server = await startFixtureServer();
  });
  test.afterAll(async () => {
    await server.close();
  });

  test('reads a fixture page and plays it', async () => {
    const harness = await launchExtensionContext();
    try {
      const { context, extensionId, errors } = harness;

      // load the article fixture in a real tab
      const tab = await context.newPage();
      await tab.goto(`${server.base}/article.html`);

      // extension page for runtime access
      const ext = await context.newPage();
      await ext.goto(testHarnessUrl(extensionId));
      await tab.bringToFront();

      const sw = new ServiceWorkerRequester(ext);
      const result = await sw.playTab();
      expect(result).toEqual({ ok: true });

      await expect
        .poll(async () => (await sw.getPlaybackState()).state, { timeout: 5_000 })
        .toBe('PLAYING');

      await sw.stop();
      await expect.poll(async () => (await sw.getPlaybackState()).state).toBe('STOPPED');

      expect(errors).toEqual([]);
    } finally {
      await harness.close();
    }
  });
});
