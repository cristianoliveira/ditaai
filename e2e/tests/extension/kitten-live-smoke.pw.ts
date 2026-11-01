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

      // Once installed and selected, inference must use only cached assets and
      // the packaged runtime. The runtime diagnostics distinguish inference and
      // AudioBufferSourceNode.start from the sequencer's optimistic PLAYING state.
      const extensionPage = await harness.context.newPage();
      await extensionPage.goto(testHarnessUrl(harness.extensionId));
      await harness.context.setOffline(true);
      const requester = new ServiceWorkerRequester(extensionPage);
      const diagnostics = () =>
        requester.send('getKittenDiagnostics') as Promise<{
          backend: string;
          sampleCount: number | null;
          inferenceMs: number | null;
          audioStarted: boolean;
          error: string | null;
        }>;
      const inference = requester.send('speakWithInstalledVoice', [
        'Hello there. This is an offline Kitten voice test.',
      ]);
      await expect
        .poll(async () => (await diagnostics()).sampleCount ?? 0, { timeout: 90_000 })
        .toBeGreaterThan(0)
        .catch(async (failure) => {
          throw new Error(
            `${failure}\n${JSON.stringify({
              diagnostics: await diagnostics(),
              inference: await inference.catch((error) => String(error)),
              errors: harness.errors,
            })}`,
          );
        });
      await expect
        .poll(async () => (await diagnostics()).audioStarted, { timeout: 90_000 })
        .toBe(true);
      await expect(inference).resolves.toEqual({ ok: true });
      const evidence = await diagnostics();
      expect(evidence.backend).toBe('onnxruntime-web');
      expect(evidence.inferenceMs).toBeGreaterThan(0);
      expect(evidence.sampleCount).toBeGreaterThan(0);
      expect(evidence.audioStarted).toBe(true);
      console.info('Kitten live inference evidence:', JSON.stringify(evidence));
      expect(harness.errors).toEqual([]);
    } finally {
      await harness.close();
    }
  });
});
