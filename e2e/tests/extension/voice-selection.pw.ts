import { expect, test } from '@playwright/test';
import { SUPERTONIC_VOICES } from '../../../src/domain/voices/catalog';
import { sourceUrl } from '../../../src/domain/voices/voice';
import { launchExtensionContext, testHarnessUrl } from '../../helpers/extension';
import { SettingsRequester } from '../../requesters/settings';

interface CacheGlobals {
  caches: {
    open(name: string): Promise<{
      put(url: string, response: Response): Promise<void>;
    }>;
  };
}

test.describe('narration voice setting', () => {
  test('shows and persists the selected installed voice', async () => {
    const harness = await launchExtensionContext();
    try {
      const settingsPage = await harness.context.newPage();
      await settingsPage.goto(testHarnessUrl(harness.extensionId));
      const settings = new SettingsRequester(settingsPage);
      const firstVoice = SUPERTONIC_VOICES[0];
      const secondVoice = SUPERTONIC_VOICES[1];
      if (!firstVoice || !secondVoice) throw new Error('voice catalog needs two voices');

      await settingsPage.evaluate(
        async (voiceUrls) => {
          const browser = globalThis as unknown as CacheGlobals;
          const cache = await browser.caches.open('dita-voices');
          await Promise.all(voiceUrls.map((url) => cache.put(url, new Response('cached'))));
        },
        [sourceUrl(firstVoice.source), sourceUrl(secondVoice.source)],
      );
      await settings.set({ selectedVoiceId: secondVoice.id });

      const voicesPage = await harness.context.newPage();
      await voicesPage.goto(`chrome-extension://${harness.extensionId}/voices.html`);

      const selectedCard = voicesPage.locator('.voice-card', { hasText: secondVoice.name });
      await expect(selectedCard.getByRole('button')).toHaveText('✓ Selected');

      const firstCard = voicesPage.locator('.voice-card', { hasText: firstVoice.name });
      await firstCard.getByRole('button', { name: 'Use voice' }).click();

      await expect.poll(() => settings.get<string>('selectedVoiceId')).toBe(firstVoice.id);
      await expect(firstCard.getByRole('button')).toHaveText('✓ Selected');
      expect(harness.errors).toEqual([]);
    } finally {
      await harness.close();
    }
  });
});
