import { type BrowserContext, type Page, expect, test } from '@playwright/test';
import { launchExtensionContext, testHarnessUrl } from '../../helpers/extension';
import { type FixtureServer, startFixtureServer } from '../../helpers/fixture-server';
import { ServiceWorkerRequester } from '../../requesters/service-worker';

/**
 * Extensionless PDF URL acceptance (continuation deliverable 6): a valid
 * `application/pdf` served from `/download?id=…` — no `.pdf` in the path —
 * must be dictatable through the popup's explicit "Read this link as PDF…"
 * action, while same-shape HTML must never be silently handed to the reader.
 *
 * Privacy: no request may leave the fixture host, and the source URL (with
 * its query) must never appear in the reader URL.
 */

/** Track any request that leaves the fixture host (privacy guard). */
function trackExternalRequests(context: BrowserContext, fixtureHost: string): Set<string> {
  const external = new Set<string>();
  context.on('request', (request) => {
    const { host } = new URL(request.url());
    if (host.includes('.') && host !== fixtureHost) external.add(request.url());
  });
  return external;
}

/** Enable the viewer's deterministic fake reader via the shared
 * `data-dita-test-reader` attribute (safe on every page: the native PDF tab
 * has no accessible documentElement and extension pages ignore it). */
async function enableFakeReader(context: BrowserContext): Promise<void> {
  await context.addInitScript(() => {
    const doc = (
      globalThis as unknown as {
        document: {
          documentElement: { setAttribute(name: string, value: string): void } | null;
        };
      }
    ).document;
    doc.documentElement?.setAttribute('data-dita-test-reader', 'fake');
  });
}

test.describe('extensionless PDF URLs', () => {
  let server: FixtureServer;

  test.beforeAll(async () => {
    server = await startFixtureServer();
  });
  test.afterAll(async () => {
    await server.close();
  });

  /**
   * Open the real popup page against the given download-shaped tab and click
   * the "Read this link as PDF…" action. popup.html runs as a background tab
   * (`tabs.create({active:false})`) so its own main() resolves the still-active
   * fixture tab, unhides the gated button, and Playwright clicks it — the
   * real gate, the real consent click, the real handoff.
   */
  async function consentAndOpenReader(
    context: BrowserContext,
    extensionId: string,
    pathAndQuery: string,
  ): Promise<Page> {
    const tab = await context.newPage();
    await tab.goto(`${server.base}/${pathAndQuery}`);

    const next = context.waitForEvent('page', { timeout: 15_000 });
    const ext = await context.newPage();
    await ext.goto(testHarnessUrl(extensionId));
    // The fixture tab must be the ACTIVE tab before the popup loads: its
    // main() resolves the active tab exactly once at startup.
    await tab.bringToFront();
    await ext.evaluate(async () => {
      await chrome.tabs.create({ url: chrome.runtime.getURL('popup.html'), active: false });
    });

    const popup = await context.waitForEvent('page', { timeout: 15_000 });
    // The action must be offered exactly when the page content is unusable.
    // On application/pdf URLs the content script answers from the native
    // viewer with an empty document; whether the popup still offers the
    // action there is part of what this suite pins down.
    await expect(popup.locator('#pdf-attempt')).toBeVisible({ timeout: 10_000 });
    const [reader] = await Promise.all([next, popup.locator('#pdf-attempt').click()]);
    await ext.close();
    await popup.close();
    return reader;
  }

  test('narrates an extensionless application/pdf URL', async () => {
    const harness = await launchExtensionContext();
    try {
      const { context, extensionId, errors } = harness;
      const external = trackExternalRequests(context, new URL(server.base).host);
      await enableFakeReader(context);

      const reader = await consentAndOpenReader(context, extensionId, 'download?id=pdf-text');
      await expect.poll(async () => reader.url(), { timeout: 15_000 }).toMatch(/pdf-reader\.html/);
      // The source URL (path + query) must never leak into the viewer URL.
      expect(reader.url()).not.toContain('download');
      expect(reader.url()).not.toContain('id=');

      await expect(reader.locator('#pdf-reader')).toHaveAttribute('data-pdf-state', 'ready', {
        timeout: 20_000,
      });
      await reader.locator('button[data-action="play"]').click();
      await expect(reader.locator('.textLayer mark[data-active-word="true"]').first()).toBeVisible({
        timeout: 10_000,
      });
      await expect(reader.locator('#pdf-page-position')).toHaveText('Page 1 of 2');

      await reader.locator('button[data-action="stop"]').click();
      expect(external.size, `unexpected external requests: ${[...external].join(', ')}`).toBe(0);
      expect(errors).toEqual([]);
    } finally {
      await harness.close();
    }
  });

  test('does not hand same-shape readable HTML to the PDF reader', async () => {
    const harness = await launchExtensionContext();
    try {
      const { context, extensionId, errors } = harness;
      const external = trackExternalRequests(context, new URL(server.base).host);

      const tab = await context.newPage();
      await tab.goto(`${server.base}/download?id=html`);

      // Open the real popup page against the HTML tab: the gated action is
      // offered, but nothing is handed off without the user's click.
      const ext = await context.newPage();
      await ext.goto(testHarnessUrl(extensionId));
      await tab.bringToFront();
      await ext.evaluate(async () => {
        await chrome.tabs.create({ url: chrome.runtime.getURL('popup.html'), active: false });
      });
      const popup = await context.waitForEvent('page', { timeout: 15_000 });
      // Readable HTML: the action must stay hidden — normal playback already
      // reads the page, and a silent PDF handoff would be a regression.
      await expect(popup.locator('#pdf-attempt')).toBeHidden({ timeout: 10_000 });
      await popup.close();
      const harness2 = await context.newPage();
      await harness2.goto(testHarnessUrl(extensionId));
      await tab.bringToFront();
      const sw = new ServiceWorkerRequester(harness2);
      expect(await sw.playTab()).toEqual({ ok: true });
      await expect
        .poll(async () => (await sw.getPlaybackState()).state, { timeout: 5_000 })
        .toBe('PLAYING');
      await sw.stop();
      await harness2.close();

      expect(context.pages().some((page) => page.url().includes('pdf-reader'))).toBe(false);
      expect(external.size).toBe(0);
      expect(errors).toEqual([]);
    } finally {
      await harness.close();
    }
  });

  test('shows a clear non-speaking state for unreadable HTML, without a reader tab', async () => {
    const harness = await launchExtensionContext();
    try {
      const { context, extensionId, errors } = harness;
      const external = trackExternalRequests(context, new URL(server.base).host);

      const tab = await context.newPage();
      await tab.goto(`${server.base}/download?id=blank-html`);

      const ext = await context.newPage();
      await ext.goto(testHarnessUrl(extensionId));
      await tab.bringToFront();
      const next = context.waitForEvent('page', { timeout: 15_000 });
      await ext.evaluate(async () => {
        await chrome.tabs.create({ url: chrome.runtime.getURL('popup.html'), active: false });
      });
      const popup = await context.waitForEvent('page', { timeout: 15_000 });
      // Unreadable HTML is exactly when the action must be offered; clicking
      // it lets the reader show its own clear not-a-PDF error.
      await expect(popup.locator('#pdf-attempt')).toBeVisible({ timeout: 10_000 });
      const [reader] = await Promise.all([next, popup.locator('#pdf-attempt').click()]);
      await ext.close();
      await popup.close();
      await expect(reader.locator('#pdf-reader')).toHaveAttribute('data-pdf-state', 'error', {
        timeout: 20_000,
      });
      await expect(reader.locator('#pdf-status')).toBeVisible();
      await expect(reader.locator('#pdf-status')).toHaveAttribute('role', 'alert');
      await reader.locator('button[data-action="play"]').click();
      await expect(reader.locator('mark')).toHaveCount(0);

      expect(external.size).toBe(0);
      expect(errors).toEqual([]);
    } finally {
      await harness.close();
    }
  });

  test('extensionless PDF with auth failure shows a clear error state in the reader', async () => {
    const harness = await launchExtensionContext();
    try {
      const { context, extensionId, errors } = harness;
      const external = trackExternalRequests(context, new URL(server.base).host);

      // Seed the real one-use request store directly (same key/shape as the
      // popup handoff) so the reader's own fetch path is exercised against a
      // download-shaped URL.
      const ext = await context.newPage();
      await ext.goto(testHarnessUrl(extensionId));
      const requestId = await ext.evaluate(async (sourceUrl) => {
        const store = globalThis as unknown as {
          crypto: { randomUUID(): string };
          chrome: {
            storage: {
              session: {
                set(items: Record<string, unknown>): Promise<void>;
              };
            };
          };
        };
        const id = store.crypto.randomUUID();
        await store.chrome.storage.session.set({
          pdfViewerRequest: { id, url: sourceUrl, expiresAt: Date.now() + 5 * 60 * 1000 },
        });
        return id;
      }, `${server.base}/download?id=denied`);
      await ext.close();

      const reader = await context.newPage();
      await reader.goto(
        `chrome-extension://${extensionId}/pdf-reader.html?request=${encodeURIComponent(requestId)}`,
      );
      await expect(reader.locator('#pdf-reader')).toHaveAttribute('data-pdf-state', 'error', {
        timeout: 20_000,
      });
      await expect(reader.locator('#pdf-status')).toBeVisible();
      await expect(reader.locator('#pdf-status')).toHaveAttribute('role', 'alert');
      await reader.locator('button[data-action="play"]').click();
      await expect(reader.locator('mark')).toHaveCount(0);

      // The browser logs the 401 as a console error — that IS the scenario.
      const unexpected = errors.filter((line) => !line.includes('401'));
      expect(unexpected).toEqual([]);
      expect(external.size).toBe(0);
    } finally {
      await harness.close();
    }
  });
});
