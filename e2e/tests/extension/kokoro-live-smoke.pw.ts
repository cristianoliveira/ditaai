import { expect, test } from '@playwright/test';
import { KOKORO_VOICES } from '../../../src/domain/voices/catalog';
import { launchExtensionContext } from '../../helpers/extension';
import { type FixtureServer, startFixtureServer } from '../../helpers/fixture-server';

interface ExtensionPageGlobals {
  caches: {
    open(name: string): Promise<{ keys(): Promise<unknown[]> }>;
  };
  chrome: {
    offscreen: { closeDocument(): Promise<void> };
    storage: {
      local: { get(key: string): Promise<Record<string, unknown>> };
    };
    tabs: {
      query(query: Record<string, unknown>): Promise<Array<{ id?: number; url?: string }>>;
      sendMessage(tabId: number, message: unknown): Promise<unknown>;
    };
  };
}

test.describe('Kokoro live model smoke', () => {
  let server: FixtureServer;

  test.beforeAll(async () => {
    server = await startFixtureServer();
  });
  test.afterAll(async () => {
    await server.close();
  });

  test.skip(process.env.DITA_LIVE_KOKORO_SMOKE !== '1', 'requires explicit live model download');
  test.setTimeout(300_000);

  test('installs, persists selection, and reads multiple paragraphs offline without fallback', async () => {
    const harness = await launchExtensionContext();
    try {
      const voices = await harness.context.newPage();
      await voices.goto(`chrome-extension://${harness.extensionId}/voices.html`);
      const kokoro = KOKORO_VOICES[0];
      if (!kokoro) throw new Error('Kokoro catalog is empty');
      const card = voices.locator('.voice-card').filter({ hasText: kokoro.name });
      await expect(card.getByRole('button', { name: 'Download' })).toBeVisible();
      await card.getByRole('button', { name: 'Download' }).click();
      await expect(card.getByRole('button', { name: '✓ Selected' })).toBeVisible({
        timeout: 240_000,
      });
      const british = KOKORO_VOICES[2];
      if (!british) throw new Error('Kokoro British preset is missing');
      const britishCard = voices.locator('.voice-card').filter({ hasText: british.name });
      await britishCard.getByRole('button', { name: 'Download' }).click();
      await expect(britishCard.getByRole('button', { name: 'Use voice' })).toBeVisible({
        timeout: 60_000,
      });
      await britishCard.getByRole('button', { name: 'Use voice' }).click();
      await expect(britishCard.getByRole('button', { name: '✓ Selected' })).toBeVisible();

      const installedAssets = await voices.evaluate(async () => {
        const browser = globalThis as unknown as ExtensionPageGlobals;
        const cache = await browser.caches.open('kokoro-tts-v1');
        return (await cache.keys()).length;
      });
      expect(installedAssets).toBe(6);
      await expect(
        voices.evaluate(async () => {
          const browser = globalThis as unknown as ExtensionPageGlobals;
          const result = await browser.chrome.storage.local.get('selectedVoiceId');
          return result.selectedVoiceId;
        }),
      ).resolves.toBe(british.id);

      const article = await harness.context.newPage();
      const installedLogs: string[] = [];
      const fallbackLogs: string[] = [];
      const failureLogs: string[] = [];
      article.on('console', (message) => {
        const line = message.text();
        if (line.includes('installed voice failed')) failureLogs.push(line);
        if (!line.includes('[installed-voice] speak ')) return;
        if (line.includes('"engine":"installed"')) installedLogs.push(line);
        if (line.includes('"engine":"fallback"')) fallbackLogs.push(line);
      });
      const remoteRequests: string[] = [];
      harness.context.on('request', (request) => {
        if (new URL(request.url()).hostname === 'huggingface.co') {
          remoteRequests.push(request.url());
        }
      });
      const fixtureUrl = `${server.base}/kokoro-multi-paragraph.html`;
      await article.goto(fixtureUrl);

      const extensionPage = await harness.context.newPage();
      await extensionPage.goto(`chrome-extension://${harness.extensionId}/voices.html`);
      await extensionPage.evaluate(async (url) => {
        const browser = globalThis as unknown as ExtensionPageGlobals;
        const tabs = await browser.chrome.tabs.query({});
        const tab = tabs.find((candidate) => candidate.url === url);
        if (!tab?.id) throw new Error('Kokoro fixture tab was not found');
        await browser.chrome.tabs.sendMessage(tab.id, {
          dest: 'contentScript',
          method: 'toggleWidget',
          args: [],
        });
      }, fixtureUrl);

      const playButton = article.locator('.dita-btn-play');
      await expect(playButton).toHaveAttribute('aria-label', 'Play page audio');
      await article.bringToFront();
      await harness.context.setOffline(true);

      await playButton.click();
      await expect(playButton).toHaveAttribute('aria-label', 'Pause page audio');
      await expect.poll(() => installedLogs.length, { timeout: 120_000 }).toBe(2);
      await expect(playButton).toHaveAttribute('aria-label', 'Play page audio', {
        timeout: 120_000,
      });
      expect(fallbackLogs, failureLogs.join('\n')).toEqual([]);

      // Switch to an American preset, then recreate the offscreen runtime offline.
      const americanCard = extensionPage.locator('.voice-card').filter({ hasText: kokoro.name });
      await americanCard.getByRole('button', { name: 'Use voice' }).click();
      await expect(americanCard.getByRole('button', { name: '✓ Selected' })).toBeVisible();
      await expect(
        extensionPage.evaluate(async () => {
          const browser = globalThis as unknown as ExtensionPageGlobals;
          const result = await browser.chrome.storage.local.get('selectedVoiceId');
          return result.selectedVoiceId;
        }),
      ).resolves.toBe(kokoro.id);
      await extensionPage.evaluate(async () => {
        const browser = globalThis as unknown as ExtensionPageGlobals;
        await browser.chrome.offscreen.closeDocument();
      });
      await playButton.click();
      await expect.poll(() => installedLogs.length, { timeout: 120_000 }).toBe(3);
      await article.getByRole('button', { name: 'Next paragraph' }).click();
      await expect.poll(() => installedLogs.length, { timeout: 120_000 }).toBe(4);
      await article.getByRole('button', { name: 'Stop page audio' }).click();
      await expect(playButton).toHaveAttribute('aria-label', 'Play page audio');
      await article.waitForTimeout(1_000);
      expect(fallbackLogs).toEqual([]);
      expect(remoteRequests).toEqual([]);
      expect(harness.errors).toEqual([]);
    } finally {
      await harness.close();
    }
  });
});
