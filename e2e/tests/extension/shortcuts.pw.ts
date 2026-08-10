import { expect, test } from '@playwright/test';
import { launchExtensionContext } from '../../helpers/extension';
import { type FixtureServer, startFixtureServer } from '../../helpers/fixture-server';

/**
 * Keyboard shortcuts control narration without the widget: Alt+Shift+P
 * toggles play/pause, Alt+Shift+W mounts the widget. Uses the fake reader
 * fixture so word boundaries fire deterministically.
 */
test.describe('keyboard shortcuts', () => {
  let server: FixtureServer;

  test.beforeAll(async () => {
    server = await startFixtureServer();
  });
  test.afterAll(async () => {
    await server.close();
  });

  test('Alt+Shift+P starts playback and pauses it; Alt+Shift+W shows the widget', async () => {
    const harness = await launchExtensionContext();
    try {
      const { context, errors } = harness;

      const page = await context.newPage();
      await page.goto(`${server.base}/fake-tts-article.html`);

      const mark = page.locator('mark.dita-word-highlight');

      // Idle: no highlights.
      await expect(mark).toHaveCount(0);

      // Alt+Shift+P → playback starts (fake reader highlights words).
      await page.keyboard.press('Alt+Shift+P');
      await expect(mark).toHaveCount(1, { timeout: 2_000 });

      // Alt+Shift+P again → pause: no new words get highlighted.
      await page.keyboard.press('Alt+Shift+P');
      const frozen = await mark.count();
      await page.waitForTimeout(300);
      expect(await mark.count()).toBe(frozen);

      // Alt+Shift+W → widget mounts.
      await page.keyboard.press('Alt+Shift+W');
      await expect(page.locator('.dita-widget')).toBeVisible({ timeout: 5_000 });

      expect(errors).toEqual([]);
    } finally {
      await harness.close();
    }
  });

  test('matches shortcuts when Option changes the reported key (macOS shape)', async () => {
    const harness = await launchExtensionContext();
    try {
      const { context, errors } = harness;

      const page = await context.newPage();
      await page.goto(`${server.base}/fake-tts-article.html`);

      const mark = page.locator('mark.dita-word-highlight');
      await expect(mark).toHaveCount(0);

      // On macOS, Option+Shift+P reports key="π" with code="KeyP".
      // (E2E tsconfig has no DOM lib, so the page-side types are structural.)
      await page.evaluate(() => {
        const win = globalThis as unknown as {
          document: { dispatchEvent(event: unknown): void };
          KeyboardEvent: new (type: string, init: Record<string, unknown>) => unknown;
        };
        const event = new win.KeyboardEvent('keydown', {
          bubbles: true,
          key: 'π',
          code: 'KeyP',
          altKey: true,
          shiftKey: true,
        });
        win.document.dispatchEvent(event);
      });

      await expect(mark).toHaveCount(1, { timeout: 2_000 });
      expect(errors).toEqual([]);
    } finally {
      await harness.close();
    }
  });

  test('widget opened mid-playback reflects the real player state', async () => {
    const harness = await launchExtensionContext();
    try {
      const { context, errors } = harness;

      const page = await context.newPage();
      await page.goto(`${server.base}/fake-tts-article.html`);

      const mark = page.locator('mark.dita-word-highlight');
      const playBtn = page.locator('.dita-btn-play');

      // Start playback via shortcut while the widget is closed.
      await page.keyboard.press('Alt+Shift+P');
      await expect(mark).toHaveCount(1, { timeout: 2_000 });

      // Opening the widget now must show the real state (playing), not idle.
      await page.keyboard.press('Alt+Shift+W');
      await expect(page.locator('.dita-widget')).toBeVisible({ timeout: 5_000 });
      await expect(playBtn).toHaveAttribute('aria-label', 'Pause page audio');

      // Shortcut pause/resume keep the widget and the audio in sync.
      await page.keyboard.press('Alt+Shift+P');
      await expect(playBtn).toHaveAttribute('aria-label', 'Resume page audio');
      await page.keyboard.press('Alt+Shift+P');
      await expect(playBtn).toHaveAttribute('aria-label', 'Pause page audio');

      expect(errors).toEqual([]);
    } finally {
      await harness.close();
    }
  });
});
