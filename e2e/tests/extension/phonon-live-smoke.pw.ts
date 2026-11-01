import { expect, test } from '@playwright/test';
import { PHONON_VOICES } from '../../../src/domain/voices/catalog';
import { launchExtensionContext, testHarnessUrl } from '../../helpers/extension';
import { ServiceWorkerRequester } from '../../requesters/service-worker';

interface ExtensionPageGlobals {
  caches: {
    open(name: string): Promise<{ keys(): Promise<unknown[]> }>;
  };
  chrome: {
    storage: {
      local: { get(key: string): Promise<Record<string, unknown>> };
    };
  };
}

/**
 * Opt-in real-model smoke. Installs the Phonon model through the UI, then
 * disables networking before checking local inference and playback.
 */
test.describe('Phonon live model smoke', () => {
  test.skip(process.env.DITA_LIVE_PHONON_SMOKE !== '1', 'requires explicit live model download');
  test.setTimeout(300_000);

  test('installs the voice and synthesizes offline in the extension', async () => {
    const harness = await launchExtensionContext();
    try {
      const voices = await harness.context.newPage();
      await voices.goto(`chrome-extension://${harness.extensionId}/voices.html`);
      const phonon = PHONON_VOICES[0];
      if (!phonon) throw new Error('Phonon catalog is empty');
      const phononCard = voices.locator('.voice-card').filter({ hasText: phonon.name });
      const downloadButton = phononCard.getByRole('button', { name: 'Download' });
      await expect(downloadButton).toBeVisible();
      await downloadButton.click();
      await expect(phononCard.getByRole('button', { name: '✓ Selected' })).toBeVisible({
        timeout: 240_000,
      });

      const installed = await voices.evaluate(async () => {
        const browser = globalThis as unknown as ExtensionPageGlobals;
        const cache = await browser.caches.open('phonon-tts-v1');
        return (await cache.keys()).length;
      });
      expect(installed).toBe(4);
      await expect(
        voices.evaluate(async () => {
          const browser = globalThis as unknown as ExtensionPageGlobals;
          const result = await browser.chrome.storage.local.get('selectedVoiceId');
          return result.selectedVoiceId;
        }),
      ).resolves.toBe(phonon.id);

      const extensionPage = await harness.context.newPage();
      await extensionPage.goto(testHarnessUrl(harness.extensionId));
      await harness.context.setOffline(true);
      const requester = new ServiceWorkerRequester(extensionPage);
      await expect(
        requester.send('speakWithInstalledVoice', [
          'Hello there. This Phonon playback test runs offline.',
        ]),
      ).resolves.toEqual({ ok: true });
      expect(harness.errors).toEqual([]);
    } finally {
      await harness.close();
    }
  });
});
