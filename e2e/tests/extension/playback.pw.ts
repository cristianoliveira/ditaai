import { expect, test } from '@playwright/test';
import { launchExtensionContext, testHarnessUrl } from '../../helpers/extension';
import { ServiceWorkerRequester } from '../../requesters/service-worker';

/**
 * Full play → pause → resume → stop cycle through the real service worker,
 * driven via chrome.runtime.sendMessage.
 */
test.describe('playback control', () => {
  test('plays text, then pauses, resumes, and stops', async () => {
    const harness = await launchExtensionContext();
    try {
      const { context, extensionId, errors } = harness;

      // open an active tab so playTab/activeTab resolves
      const tab = await context.newPage();
      await tab.goto('about:blank');

      const ext = await context.newPage();
      await ext.goto(testHarnessUrl(extensionId));
      await tab.bringToFront();

      const sw = new ServiceWorkerRequester(ext);

      await sw.playText('Hello world. This is the second sentence.');
      await expect
        .poll(async () => (await sw.getPlaybackState()).state, { timeout: 5_000 })
        .toBe('PLAYING');

      await sw.pause();
      await expect.poll(async () => (await sw.getPlaybackState()).state).toBe('PAUSED');

      await sw.resume();
      await expect.poll(async () => (await sw.getPlaybackState()).state).toBe('PLAYING');

      await sw.stop();
      await expect.poll(async () => (await sw.getPlaybackState()).state).toBe('STOPPED');

      expect(errors).toEqual([]);
    } finally {
      await harness.close();
    }
  });
});
