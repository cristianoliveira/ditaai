import { expect, test } from '@playwright/test';
import { KITTEN_VOICES } from '../../../src/domain/voices/catalog';
import { sourceUrl } from '../../../src/domain/voices/voice';
import { launchExtensionContext, testHarnessUrl } from '../../helpers/extension';
import { type FixtureServer, startFixtureServer } from '../../helpers/fixture-server';
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
  let server: FixtureServer;

  test.beforeAll(async () => {
    server = await startFixtureServer();
  });
  test.afterAll(async () => {
    await server.close();
  });

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

      const article = await harness.context.newPage();
      const installedVoiceLogs: string[] = [];
      const fallbackLogs: string[] = [];
      article.on('console', (message) => {
        const line = message.text();
        if (!line.includes('[installed-voice] speak ')) return;
        if (line.includes('"engine":"installed"')) installedVoiceLogs.push(line);
        if (line.includes('"engine":"fallback"')) fallbackLogs.push(line);
      });
      await article.goto(`${server.base}/kitten-multi-paragraph.html`);

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

      const bellaCard = voices.locator('.voice-card').filter({ hasText: 'Kitten Bella' });
      await bellaCard.getByRole('button', { name: 'Use voice' }).click();
      await expect(bellaCard.getByRole('button', { name: '✓ Selected' })).toBeVisible();
      await extensionPage.evaluate(async (fixtureUrl) => {
        const tabs = await chrome.tabs.query({});
        const tab = tabs.find((candidate) => candidate.url === fixtureUrl);
        if (!tab?.id) throw new Error('Kitten fixture tab was not found');
        await chrome.tabs.sendMessage(tab.id, {
          dest: 'contentScript',
          method: 'toggleWidget',
          args: [],
        });
      }, `${server.base}/kitten-multi-paragraph.html`);
      const playButton = article.locator('.dita-btn-play');
      await expect(playButton).toHaveAttribute('aria-label', 'Play page audio');
      await article.bringToFront();
      await playButton.click();
      await expect(playButton).toHaveAttribute('aria-label', 'Pause page audio');
      await expect.poll(() => installedVoiceLogs.length, { timeout: 90_000 }).toBe(2);
      expect(fallbackLogs).toEqual([]);
      await expect(playButton).toHaveAttribute('aria-label', 'Play page audio', {
        timeout: 90_000,
      });
      expect(harness.errors).toEqual([]);
    } finally {
      await harness.close();
    }
  });
});
