import { expect, test } from '@playwright/test';
import { KITTEN_VOICES } from '../../../src/domain/voices/catalog';
import { sourceUrl } from '../../../src/domain/voices/voice';
import { launchExtensionContext, testHarnessUrl } from '../../helpers/extension';
import { ServiceWorkerRequester } from '../../requesters/service-worker';

interface CachePageGlobals {
  caches: {
    open(name: string): Promise<{
      put(url: string, response: Response): Promise<void>;
    }>;
  };
}

/**
 * Opt-in real-model smoke. Downloads the pinned model through the user-facing
 * installer, then disables the network before offscreen synthesis.
 */
test.describe('Kitten live model smoke', () => {
  test.skip(process.env.DITA_LIVE_KITTEN_SMOKE !== '1', 'requires explicit live model download');
  test.setTimeout(240_000);

  test('downloads, persists selection, and synthesizes offline in the extension', async () => {
    const harness = await launchExtensionContext();
    try {
      const voices = await harness.context.newPage();
      await voices.goto(testHarnessUrl(harness.extensionId));
      const kitten = KITTEN_VOICES[0];
      if (!kitten) throw new Error('Kitten catalog is empty');
      await voices.evaluate(async (modelUrl) => {
        const browser = globalThis as unknown as CachePageGlobals;
        const cache = await browser.caches.open('dita-voices');
        await cache.put(modelUrl, new Response('partial model'));
      }, sourceUrl(kitten.source));
      await voices.goto(`chrome-extension://${harness.extensionId}/voices.html`);
      const kittenCard = voices.locator('.voice-card').filter({ hasText: 'Kitten Bella' });
      await expect(kittenCard.getByRole('button', { name: 'Download' })).toBeVisible();
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

      // Exercise the installed reader with networking disabled. Its promise
      // resolves only after the synthesized AudioBufferSourceNode ends.
      const extensionPage = await harness.context.newPage();
      await extensionPage.goto(testHarnessUrl(harness.extensionId));
      await harness.context.setOffline(true);
      const requester = new ServiceWorkerRequester(extensionPage);
      await expect(
        requester.send('speakWithInstalledVoice', [
          'Hello there. This is an offline Kitten Bella voice test.',
        ]),
      ).resolves.toEqual({ ok: true });

      const jasper = KITTEN_VOICES.find((voice) => voice.id === 'kitten-jasper');
      if (!jasper) throw new Error('Kitten Jasper is missing from the catalog');
      await voices.goto(`chrome-extension://${harness.extensionId}/voices.html`);
      const jasperCard = voices.locator('.voice-card').filter({ hasText: jasper.name });
      await jasperCard.getByRole('button', { name: 'Use voice' }).click();
      await expect(jasperCard.getByRole('button', { name: '✓ Selected' })).toBeVisible();
      await expect
        .poll(() =>
          voices.evaluate(async () => {
            const result = await chrome.storage.local.get('selectedVoiceId');
            return result.selectedVoiceId;
          }),
        )
        .toBe('kitten-jasper');
      await expect(
        requester.send('speakWithInstalledVoice', [
          'Hello there. This is an offline Kitten Jasper voice test.',
        ]),
      ).resolves.toEqual({ ok: true });
      expect(harness.errors).toEqual([]);
    } finally {
      await harness.close();
    }
  });
});
