import { expect, test } from '@playwright/test';
import { PHONON_VOICES } from '../../../src/domain/voices/catalog';
import { launchExtensionContext } from '../../helpers/extension';
import { type FixtureServer, startFixtureServer } from '../../helpers/fixture-server';

interface ExtensionPageGlobals {
  caches: {
    open(name: string): Promise<{ keys(): Promise<unknown[]> }>;
  };
  chrome: {
    storage: {
      local: { get(key: string): Promise<Record<string, unknown>> };
    };
    tabs: {
      query(query: Record<string, unknown>): Promise<Array<{ id?: number; url?: string }>>;
      sendMessage(tabId: number, message: unknown): Promise<unknown>;
    };
  };
}

/**
 * Opt-in real-model smoke. Installs Phonon in a fresh profile, then verifies
 * multi-paragraph widget playback offline, including seek and stop cancellation.
 */
test.describe('Phonon live model smoke', () => {
  let server: FixtureServer;

  test.beforeAll(async () => {
    server = await startFixtureServer();
  });
  test.afterAll(async () => {
    await server.close();
  });

  test.skip(process.env.DITA_LIVE_PHONON_SMOKE !== '1', 'requires explicit live model download');
  test.setTimeout(300_000);

  test('installs and reads multiple paragraphs offline without browser fallback', async () => {
    const harness = await launchExtensionContext();
    try {
      const voices = await harness.context.newPage();
      await voices.goto(`chrome-extension://${harness.extensionId}/voices.html`);
      const phonon = PHONON_VOICES[0];
      if (!phonon) throw new Error('Phonon catalog is empty');
      const phononCard = voices.locator('.voice-card').filter({ hasText: phonon.name });
      await expect(phononCard.getByRole('button', { name: 'Download' })).toBeVisible();
      await phononCard.getByRole('button', { name: 'Download' }).click();
      await expect(phononCard.getByRole('button', { name: '✓ Selected' })).toBeVisible({
        timeout: 240_000,
      });

      const installedAssets = await voices.evaluate(async () => {
        const browser = globalThis as unknown as ExtensionPageGlobals;
        const cache = await browser.caches.open('phonon-tts-v1');
        return (await cache.keys()).length;
      });
      expect(installedAssets).toBe(4);
      await expect(
        voices.evaluate(async () => {
          const browser = globalThis as unknown as ExtensionPageGlobals;
          const result = await browser.chrome.storage.local.get('selectedVoiceId');
          return result.selectedVoiceId;
        }),
      ).resolves.toBe(phonon.id);

      const article = await harness.context.newPage();
      const installedLogs: string[] = [];
      const fallbackLogs: string[] = [];
      article.on('console', (message) => {
        const line = message.text();
        if (!line.includes('[installed-voice] speak ')) return;
        if (line.includes('"engine":"installed"')) installedLogs.push(line);
        if (line.includes('"engine":"fallback"')) fallbackLogs.push(line);
      });
      const fixtureUrl = `${server.base}/phonon-multi-paragraph.html`;
      await article.goto(fixtureUrl);

      const extensionPage = await harness.context.newPage();
      await extensionPage.goto(`chrome-extension://${harness.extensionId}/voices.html`);
      await extensionPage.evaluate(async (url) => {
        const browser = globalThis as unknown as ExtensionPageGlobals;
        const tabs = await browser.chrome.tabs.query({});
        const tab = tabs.find((candidate) => candidate.url === url);
        if (!tab?.id) throw new Error('Phonon fixture tab was not found');
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

      // Complete both paragraphs first, proving the parenthetical text survives
      // extraction and the page widget uses Phonon for every segment.
      await playButton.click();
      await expect(playButton).toHaveAttribute('aria-label', 'Pause page audio');
      await expect.poll(() => installedLogs.length, { timeout: 120_000 }).toBe(2);
      await expect(playButton).toHaveAttribute('aria-label', 'Play page audio', {
        timeout: 120_000,
      });
      expect(installedLogs).toHaveLength(2);
      expect(fallbackLogs).toEqual([]);

      // Restart, then seek while the first segment is being synthesized. The
      // superseded request must not trigger browser speech when its abort lands.
      await playButton.click();
      await expect.poll(() => installedLogs.length, { timeout: 30_000 }).toBe(3);
      await article.getByRole('button', { name: 'Next paragraph' }).click();
      await expect.poll(() => installedLogs.length, { timeout: 120_000 }).toBe(4);
      await expect(playButton).toHaveAttribute('aria-label', 'Play page audio', {
        timeout: 120_000,
      });
      expect(fallbackLogs).toEqual([]);

      // Start once more and stop during the next installed-voice request.
      await playButton.click();
      await expect.poll(() => installedLogs.length, { timeout: 30_000 }).toBe(5);
      await article.getByRole('button', { name: 'Stop page audio' }).click();
      await expect(playButton).toHaveAttribute('aria-label', 'Play page audio');
      await article.waitForTimeout(1_000);
      expect(fallbackLogs).toEqual([]);
      expect(harness.errors).toEqual([]);
    } finally {
      await harness.close();
    }
  });
});
