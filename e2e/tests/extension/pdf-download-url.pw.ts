import { type BrowserContext, type Page, expect, test } from '@playwright/test';
import { launchExtensionContext, testHarnessUrl } from '../../helpers/extension';
import { type FixtureServer, startFixtureServer } from '../../helpers/fixture-server';

/**
 * Extensionless PDF URL acceptance (continuation deliverable 6): a valid
 * `application/pdf` served from `/download?id=…` — no `.pdf` in the path —
 * must be dictatable, while same-shape HTML must never be silently handed to
 * the PDF reader. Dave's deliverable 5 provides the user-facing trigger; the
 * positive case is the failing baseline until it lands.
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

test.describe('extensionless PDF URLs', () => {
  let server: FixtureServer;

  test.beforeAll(async () => {
    server = await startFixtureServer();
  });
  test.afterAll(async () => {
    await server.close();
  });

  /** Open the action popup on the given download-shaped URL and return the
   * first page created afterwards (the reader tab, when handoff works). The
   * wait is registered after the harness page exists, so only genuinely new
   * pages resolve it. */
  async function openActionOn(
    context: BrowserContext,
    extensionId: string,
    pathAndQuery: string,
  ): Promise<Page> {
    const tab = await context.newPage();
    await tab.goto(`${server.base}/${pathAndQuery}`);
    await tab.bringToFront();

    const ext = await context.newPage();
    await ext.goto(testHarnessUrl(extensionId));
    await tab.bringToFront();
    const next = context.waitForEvent('page', { timeout: 15_000 });
    await ext.evaluate(async () => {
      await chrome.action.openPopup();
    });
    await ext.close();
    return next;
  }

  test('narrates an extensionless application/pdf URL', async () => {
    const harness = await launchExtensionContext();
    try {
      const { context, extensionId, errors } = harness;
      const external = trackExternalRequests(context, new URL(server.base).host);
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

      const reader = await openActionOn(context, extensionId, 'download?id=pdf-text');

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

      const next = openActionOn(context, extensionId, 'download?id=html');
      // Let any premature reader-tab attempt surface, then assert none did.
      const stray = await Promise.race([
        next.then((page) => page.url()),
        new Promise<string>((resolve) => setTimeout(() => resolve('none'), 4_000)),
      ]);

      const tab = context.pages().find((page) => page.url().includes('download?id=html'));
      expect(tab, 'HTML fixture tab must exist').toBeTruthy();

      // No PDF reader tab was opened for HTML, whatever the stray page is.
      if (stray !== 'none') expect(stray).not.toMatch(/pdf-reader\.html/);

      // Normal page playback still works on the readable HTML page.
      const ext = await context.newPage();
      await ext.goto(testHarnessUrl(extensionId));
      await tab?.bringToFront();
      const sw = new (await import('../../requesters/service-worker')).ServiceWorkerRequester(ext);
      expect(await sw.playTab()).toEqual({ ok: true });
      await expect
        .poll(async () => (await sw.getPlaybackState()).state, { timeout: 5_000 })
        .toBe('PLAYING');
      await sw.stop();

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

      const next = openActionOn(context, extensionId, 'download?id=blank-html');
      const stray = await Promise.race([
        next.then((page) => page.url()),
        new Promise<string>((resolve) => setTimeout(() => resolve('none'), 4_000)),
      ]);
      if (stray !== 'none') expect(stray).not.toMatch(/pdf-reader\.html/);

      // The blank page has no readable text: playTab must refuse cleanly.
      const ext = await context.newPage();
      await ext.goto(testHarnessUrl(extensionId));
      const sw = new (await import('../../requesters/service-worker')).ServiceWorkerRequester(ext);
      const result = (await sw.playTab()) as { ok: boolean; error?: string };
      expect(result.ok).toBe(false);

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
      // popup handoff) so the reader's own fetch path is exercised without
      // depending on #5's popup trigger.
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
