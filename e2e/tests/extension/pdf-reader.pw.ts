import { type BrowserContext, type Page, expect, test } from '@playwright/test';
import { launchExtensionContext, testHarnessUrl } from '../../helpers/extension';
import { type FixtureServer, startFixtureServer } from '../../helpers/fixture-server';

/**
 * PDF dictation acceptance (JTask #3): the real extension must activate from a
 * tab serving `application/pdf` and narrate the PDF in an extension-owned
 * reader with visible word highlighting. Deterministic word timing comes from
 * the viewer's `testReader=fake` mode — extraction still parses the real PDF
 * served by the fixture server. Negative fixtures (image-only, corrupt) must
 * surface a non-speaking error state, never fabricated text. Privacy: no
 * request may leave the fixture host or the extension origin.
 *
 * Contract (Dave, task #1): viewer opens at
 * `chrome-extension://<id>/pdf-reader.html?request=<opaque-id>`; state
 * `#pdf-reader[data-pdf-state=loading|ready|error]`; status
 * `#pdf-status[role=status|alert]`; controls `button[data-action=...]`;
 * page position `output#pdf-page-position` = `Page N of M`; page sections
 * `[data-page-number]`; active word `mark[data-active-word=true]`.
 */

/** Track any request that leaves the fixture host (privacy guard).
 * Extension (chrome-extension://<id>) and chrome:// hosts contain no dot, so
 * only dotted public hosts other than the fixture server are flagged. */
function trackExternalRequests(context: BrowserContext, fixtureHost: string): Set<string> {
  const external = new Set<string>();
  context.on('request', (request) => {
    const { host } = new URL(request.url());
    if (host.includes('.') && host !== fixtureHost) external.add(request.url());
  });
  return external;
}

test.describe('PDF dictation', () => {
  let server: FixtureServer;

  test.beforeAll(async () => {
    server = await startFixtureServer();
  });
  test.afterAll(async () => {
    await server.close();
  });

  /**
   * Enable the viewer's deterministic fake reader (contract: `testReader=fake`
   * only pins voice/timing; PDF parsing still runs on the real fixture).
   * Runs before the viewer's scripts, so the one-use request token in the URL
   * is re-used on the redirected load and never consumed twice.
   */
  async function enableFakeReader(context: BrowserContext): Promise<void> {
    await context.addInitScript(() => {
      // Structural cast: the e2e tsconfig has no DOM lib, but this callback is
      // serialized and runs inside the viewer page.
      const nav = globalThis as unknown as {
        location: { pathname: string; search: string; replace(url: string): void };
      };
      if (!nav.location.pathname.endsWith('/pdf-reader.html')) return;
      const search = new URLSearchParams(nav.location.search);
      if (search.get('testReader') === 'fake') return;
      search.set('testReader', 'fake');
      nav.location.replace(`${nav.location.pathname}?${search.toString()}`);
    });
  }

  /**
   * Trigger the real extension action on the given fixture tab and wait for
   * the extension-owned PDF reader page to open.
   */
  async function openReaderFromAction(
    context: BrowserContext,
    extensionId: string,
    fixtureName: string,
  ): Promise<Page> {
    const tab = await context.newPage();
    await tab.goto(`${server.base}/${fixtureName}`);
    await tab.bringToFront();

    const ext = await context.newPage();
    await ext.goto(testHarnessUrl(extensionId));
    // The popup resolves its target via tabs.query({active, currentWindow});
    // bring the PDF tab back to front after opening the harness page.
    await tab.bringToFront();
    // Registered after the harness page exists, so only genuinely new pages
    // (the reader tab) resolve this promise.
    const readerPromise = context.waitForEvent('page', { timeout: 15_000 });
    await ext.evaluate(async () => {
      await chrome.action.openPopup();
    });
    await ext.close();

    const reader = await readerPromise;
    await expect.poll(async () => reader.url(), { timeout: 15_000 }).toMatch(/pdf-reader\.html/);
    return reader;
  }

  /**
   * Record every spoken word as the viewer highlights it. Word marks live
   * ~50ms under the fake reader, so point-in-time locators race; a page-side
   * recorder is deterministic. (No DOM lib in the e2e tsconfig — structural
   * casts only; this callback is serialized into the reader page.)
   */
  async function recordActiveWords(reader: Page): Promise<void> {
    await reader.evaluate(() => {
      interface RecordedMark {
        textContent: string | null;
        closest(selector: string): { getAttribute(name: string): string | null } | null;
      }
      const scope = globalThis as unknown as {
        ditaActiveWords?: Array<{ page: string; word: string }>;
        MutationObserver: new (
          cb: () => void,
        ) => {
          observe(target: unknown, options: unknown): void;
        };
        document: {
          querySelector(selector: string): { textContent: string | null } | null;
          querySelectorAll(selector: string): { length: number; [index: number]: RecordedMark };
        };
      };
      scope.ditaActiveWords = [];
      const record = () => {
        const marks = scope.document.querySelectorAll('mark[data-active-word="true"]');
        // The spoken word is the LAST active mark in document order (an earlier
        // stale mark may linger until the cross-page clearing defect is fixed).
        const mark = marks.length > 0 ? marks[marks.length - 1] : undefined;
        if (!mark?.textContent) return;
        const page = mark.closest('[data-page-number]')?.getAttribute('data-page-number') ?? '';
        const words = scope.ditaActiveWords ?? [];
        const last = words[words.length - 1];
        if (last?.word === mark.textContent && last.page === page) return;
        words.push({ page, word: mark.textContent });
      };
      const pages = scope.document.querySelector('#pdf-pages');
      if (!pages) return;
      new scope.MutationObserver(record).observe(pages, {
        childList: true,
        subtree: true,
        characterData: true,
      });
    });
  }

  async function observedWords(reader: Page): Promise<Array<{ page: string; word: string }>> {
    return reader.evaluate(() => {
      const scope = globalThis as unknown as {
        ditaActiveWords?: Array<{ page: string; word: string }>;
      };
      return scope.ditaActiveWords ?? [];
    });
  }

  test('narrates a two-page text PDF with word highlighting and page position', async () => {
    const harness = await launchExtensionContext();
    try {
      const { context, extensionId, errors } = harness;
      const external = trackExternalRequests(context, new URL(server.base).host);
      await enableFakeReader(context);

      const reader = await openReaderFromAction(context, extensionId, 'two-page-text.pdf');

      await expect(reader.locator('#pdf-reader')).toHaveAttribute('data-pdf-state', 'ready', {
        timeout: 20_000,
      });
      await expect(reader.locator('[data-page-number="1"]')).toBeVisible();
      await expect(reader.locator('[data-page-number="2"]')).toBeVisible();

      await recordActiveWords(reader);
      await reader.locator('button[data-action="play"]').click();

      // Narration order: page-1 words first, then page-2 words.
      await expect
        .poll(async () => (await observedWords(reader)).at(0), { timeout: 10_000 })
        .toEqual({ page: '1', word: 'Orchid' });
      await expect
        .poll(
          async () => {
            const words = await observedWords(reader);
            const first = words.findIndex((w) => w.word === 'Orchid');
            const cedar = words.findIndex((w) => w.word === 'Cedar');
            return first >= 0 && cedar > first;
          },
          { timeout: 20_000 },
        )
        .toBe(true);
      await expect
        .poll(async () => {
          const words = await observedWords(reader);
          return words.find((w) => w.word === 'Cedar')?.page;
        })
        .toBe('2');

      // Position readout advances across the page boundary and settles at 2/2.
      await expect(reader.locator('#pdf-page-position')).toHaveText('Page 2 of 2', {
        timeout: 10_000,
      });

      await reader.locator('button[data-action="stop"]').click();
      await expect(reader.locator('mark[data-active-word="true"]')).toHaveCount(0);

      expect(external.size, `unexpected external requests: ${[...external].join(', ')}`).toBe(0);
      expect(errors).toEqual([]);
    } finally {
      await harness.close();
    }
  });

  test('pausing then resuming continues narration instead of restarting', async () => {
    const harness = await launchExtensionContext();
    try {
      const { context, extensionId, errors } = harness;
      await enableFakeReader(context);

      const reader = await openReaderFromAction(context, extensionId, 'two-page-text.pdf');
      await expect(reader.locator('#pdf-reader')).toHaveAttribute('data-pdf-state', 'ready', {
        timeout: 20_000,
      });

      await recordActiveWords(reader);
      await reader.locator('button[data-action="play"]').click();
      // Wait until narration is inside page 1, then pause.
      await expect
        .poll(async () => (await observedWords(reader)).length, { timeout: 10_000 })
        .toBeGreaterThan(0);
      await reader.locator('button[data-action="pause"]').click();
      await expect(reader.locator('#pdf-status')).toHaveText('Paused');
      const wordsAtPause = (await observedWords(reader)).slice();

      // The user-facing resume path: pressing Play while paused must continue,
      // not restart from the first word — the first word stays unique.
      await reader.locator('button[data-action="play"]').click();
      await expect
        .poll(async () => (await observedWords(reader)).length, { timeout: 10_000 })
        .toBeGreaterThan(wordsAtPause.length);
      const words = await observedWords(reader);
      expect(words.slice(0, wordsAtPause.length)).toEqual(wordsAtPause);
      const firstWords = words.filter((w) => w.word === 'Orchid');
      expect(firstWords).toHaveLength(1);

      await reader.locator('button[data-action="stop"]').click();
      expect(errors).toEqual([]);
    } finally {
      await harness.close();
    }
  });

  test('keeps exactly one active word while narrating across pages', async () => {
    const harness = await launchExtensionContext();
    try {
      const { context, extensionId, errors } = harness;
      await enableFakeReader(context);

      const reader = await openReaderFromAction(context, extensionId, 'two-page-text.pdf');
      await expect(reader.locator('#pdf-reader')).toHaveAttribute('data-pdf-state', 'ready', {
        timeout: 20_000,
      });

      await recordActiveWords(reader);
      await reader.locator('button[data-action="play"]').click();
      // Reach page 2, then pause: the DOM freezes, so the active-word count is
      // observable without racing 50ms boundaries.
      await expect
        .poll(async () => (await observedWords(reader)).some((w) => w.page === '2'), {
          timeout: 20_000,
        })
        .toBe(true);
      await reader.locator('button[data-action="pause"]').click();
      await expect(reader.locator('#pdf-status')).toHaveText('Paused');

      // data-active-word marks exactly the spoken word: page 1's last word must
      // not stay marked while page 2 narrates.
      await expect(reader.locator('mark[data-active-word="true"]')).toHaveCount(1);

      await reader.locator('button[data-action="stop"]').click();
      expect(errors).toEqual([]);
    } finally {
      await harness.close();
    }
  });

  test('image-only PDF shows a non-speaking error state', async () => {
    const harness = await launchExtensionContext();
    try {
      const { context, extensionId, errors } = harness;
      const external = trackExternalRequests(context, new URL(server.base).host);

      const reader = await openReaderFromAction(context, extensionId, 'image-only.pdf');

      await expect(reader.locator('#pdf-reader')).toHaveAttribute('data-pdf-state', 'error', {
        timeout: 20_000,
      });
      const status = reader.locator('#pdf-status');
      await expect(status).toBeVisible();
      await expect(status).toHaveAttribute('role', 'alert');
      // Non-speaking state: pressing play must not fabricate narration.
      await reader.locator('button[data-action="play"]').click();
      await expect(reader.locator('mark')).toHaveCount(0);
      await expect(reader.locator('#pdf-reader')).toHaveAttribute('data-pdf-state', 'error');
      await expect(reader.locator('output#pdf-page-position')).toHaveText('');
      expect(external.size).toBe(0);
      expect(errors).toEqual([]);
    } finally {
      await harness.close();
    }
  });

  test('corrupt PDF shows a non-speaking error state', async () => {
    const harness = await launchExtensionContext();
    try {
      const { context, extensionId, errors } = harness;
      const external = trackExternalRequests(context, new URL(server.base).host);

      const reader = await openReaderFromAction(context, extensionId, 'corrupt.pdf');

      await expect(reader.locator('#pdf-reader')).toHaveAttribute('data-pdf-state', 'error', {
        timeout: 20_000,
      });
      const status = reader.locator('#pdf-status');
      await expect(status).toBeVisible();
      await expect(status).toHaveAttribute('role', 'alert');
      await reader.locator('button[data-action="play"]').click();
      await expect(reader.locator('mark')).toHaveCount(0);
      await expect(reader.locator('#pdf-reader')).toHaveAttribute('data-pdf-state', 'error');
      await expect(reader.locator('output#pdf-page-position')).toHaveText('');
      expect(external.size).toBe(0);
      expect(errors).toEqual([]);
    } finally {
      await harness.close();
    }
  });
});
