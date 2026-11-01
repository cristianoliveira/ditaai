import { expect, test } from '@playwright/test';
import { launchExtensionContext, testHarnessUrl } from '../../helpers/extension';
import { type FixtureServer, startFixtureServer } from '../../helpers/fixture-server';
import { ServiceWorkerRequester } from '../../requesters/service-worker';

/**
 * Opt-in real-model smoke. Downloads the pinned model through the user-facing
 * installer, then disables the network before offscreen synthesis.
 */
test.describe('Kitten live model smoke', () => {
  test.skip(process.env.DITA_LIVE_KITTEN_SMOKE !== '1', 'requires explicit live model download');
  test.setTimeout(240_000);

  let server: FixtureServer;
  test.beforeAll(async () => {
    server = await startFixtureServer();
  });
  test.afterAll(async () => {
    await server.close();
  });

  test('downloads, persists selection, and synthesizes offline in the extension', async () => {
    const harness = await launchExtensionContext();
    try {
      const voices = await harness.context.newPage();
      await voices.goto(`chrome-extension://${harness.extensionId}/voices.html`);
      const kittenCard = voices.locator('.voice-card').filter({ hasText: 'Kitten Bella' });
      await expect(kittenCard).toBeVisible();
      await kittenCard.getByRole('button', { name: 'Download' }).click();
      await expect(kittenCard.getByRole('button', { name: '✓ Selected' })).toBeVisible({
        timeout: 180_000,
      });

      const storedVoiceId = await voices.evaluate(async () => {
        const result = await chrome.storage.local.get('selectedVoiceId');
        return result.selectedVoiceId;
      });
      expect(storedVoiceId).toBe('kitten-bella');

      // Keep a page loaded before disabling network; playback must use only the
      // installed model, packaged runtime, and bundled phonemizer.
      const article = await harness.context.newPage();
      await article.addInitScript(() => {
        const page = globalThis as unknown as Record<string, unknown>;
        page.speechSynthesis = {
          speak: () => {
            page.__kittenFallbackUsed = true;
            throw new Error('The browser speech fallback must not be used in this smoke test');
          },
          pause: () => undefined,
          resume: () => undefined,
          cancel: () => undefined,
        };
      });
      await article.goto(`${server.base}/article.html`);
      await harness.context.setOffline(true);

      const extensionPage = await harness.context.newPage();
      await extensionPage.goto(testHarnessUrl(harness.extensionId));
      const serviceWorker = new ServiceWorkerRequester(extensionPage);
      await article.bringToFront();
      await expect(serviceWorker.playTab()).resolves.toEqual({ ok: true });
      await expect
        .poll(async () => (await serviceWorker.getPlaybackState()).state, {
          timeout: 90_000,
        })
        .toBe('PLAYING');

      await serviceWorker.stop();
      await expect.poll(async () => (await serviceWorker.getPlaybackState()).state).toBe('STOPPED');
      const usedFallback = await article.evaluate(() =>
        Boolean((globalThis as unknown as Record<string, unknown>).__kittenFallbackUsed),
      );
      expect(usedFallback).toBe(false);
      expect(harness.errors).toEqual([]);
    } finally {
      await harness.close();
    }
  });
});
