import { expect, test } from '@playwright/test';
import { launchExtensionContext, testHarnessUrl } from '../../helpers/extension';
import { type FixtureServer, startFixtureServer } from '../../helpers/fixture-server';

/**
 * Reload/navigation durability for the persisted content preferences.
 *
 * The regression: the widget renders rate/volume/highlight/selection from
 * constructor options, so a widget mounted before hydration kept defaults as
 * final state — and the rate slider had no setter at all. These tests open the
 * widget **immediately** after a reload, because a delayed open hides the race.
 *
 * Read scope keeps its hostname-wide semantics on purpose: the same scope must
 * apply to every page on the fixture host.
 */
test.describe('persisted content preferences across reload', () => {
  let server: FixtureServer;

  test.beforeAll(async () => {
    server = await startFixtureServer();
  });
  test.afterAll(async () => {
    await server.close();
  });

  /** Open the widget from an extension page via the runtime message route.
   * `urlPart` must be unambiguous: '/article.html' does not match the
   * 'fake-tts-article.html' tab, but 'article.html' does. */
  async function openWidget(
    context: Awaited<ReturnType<typeof launchExtensionContext>>['context'],
    extensionId: string,
    urlPart: string,
  ): Promise<void> {
    const ext = await context.newPage();
    await ext.goto(testHarnessUrl(extensionId));
    await ext.evaluate(async (part) => {
      const tabs = await chrome.tabs.query({});
      const tab = tabs.find((t) => t.url?.includes(part));
      if (!tab?.id) throw new Error(`no tab matching ${part}`);
      await chrome.tabs.sendMessage(tab.id, {
        dest: 'contentScript',
        method: 'toggleWidget',
        args: [],
      });
    }, urlPart);
  }

  test('restores the exact rate in the slider and label after an immediate reopen', async () => {
    const harness = await launchExtensionContext();
    try {
      const { context, extensionId, errors } = harness;

      const page = await context.newPage();
      await page.goto(`${server.base}/fake-tts-article.html`);
      await openWidget(context, extensionId, '/fake-tts-article.html');

      await expect(page.locator('.dita-widget')).toBeVisible({ timeout: 5_000 });
      const rate = page.locator('.dita-rate');
      await expect(rate).toHaveValue('1');

      // Set 1.25 and commit it (input gives live feedback, change persists).
      await rate.fill('1.25');
      await rate.dispatchEvent('input');
      await rate.dispatchEvent('change');
      await expect(page.locator('.dita-rate-label')).toHaveText('1.25×');

      // The committed value reached storage before the reload.
      const ext = await context.newPage();
      await ext.goto(testHarnessUrl(extensionId));
      await expect
        .poll(async () =>
          ext.evaluate(async () => (await chrome.storage.local.get('playbackRate')).playbackRate),
        )
        .toBe(1.25);

      await page.reload({ waitUntil: 'domcontentloaded' });
      // Immediately: no waiting for the widget to settle.
      await openWidget(context, extensionId, '/fake-tts-article.html');

      await expect(page.locator('.dita-widget')).toBeVisible({ timeout: 5_000 });
      await expect(page.locator('.dita-rate')).toHaveValue('1.25');
      await expect(page.locator('.dita-rate-label')).toHaveText('1.25×');

      expect(errors).toEqual([]);
    } finally {
      await harness.close();
    }
  });

  test('restores a saved read scope visibly and applies it on another same-host page', async () => {
    const harness = await launchExtensionContext();
    try {
      const { context, extensionId, errors } = harness;

      // Seed the confirmed scope the way the picker confirmation persists it,
      // then prove hydration restores it into the UI and the readable region.
      const ext = await context.newPage();
      await ext.goto(testHarnessUrl(extensionId));
      await ext.evaluate(async (host) => {
        await chrome.storage.local.set({
          domainSelectors: { [host]: JSON.stringify({ source: 'dom', selector: 'p' }) },
        });
      }, new URL(server.base).hostname);

      const page = await context.newPage();
      await page.goto(`${server.base}/fake-tts-article.html`);
      await openWidget(context, extensionId, '/fake-tts-article.html');

      // The restored scope is visible immediately, which it never was before.
      await expect(page.locator('.dita-selection-chip')).toBeVisible({ timeout: 5_000 });
      await expect(page.locator('.dita-selection-chip-label')).toHaveText('p');

      // And playback obeys it: only the scoped <p> is read, never the <h1>.
      await page.locator('.dita-btn-play').click();
      const scopedMark = page.locator('article > p mark.dita-word-highlight');
      await expect(scopedMark.first()).toBeVisible({ timeout: 5_000 });
      expect(await page.locator('article > h1 mark.dita-word-highlight').count()).toBe(0);
      await page.locator('.dita-btn-stop').click();

      // Hostname-wide semantics: the same scope applies to another page on this
      // host without the user re-picking anything.
      const other = await context.newPage();
      await other.goto(`${server.base}/article.html`);
      await openWidget(context, extensionId, '/article.html');
      await expect(other.locator('.dita-selection-chip')).toBeVisible({ timeout: 5_000 });
      await expect(other.locator('.dita-selection-chip-label')).toHaveText('p');

      expect(errors).toEqual([]);
    } finally {
      await harness.close();
    }
  });
});
