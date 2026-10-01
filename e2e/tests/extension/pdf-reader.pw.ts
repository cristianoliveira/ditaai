import { type BrowserContext, type Page, expect, test } from '@playwright/test';
import { SUPERTONIC_ENGINE_ASSETS, SUPERTONIC_VOICES } from '../../../src/domain/voices/catalog';
import { sourceUrl } from '../../../src/domain/voices/voice';
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
   * Enable the viewer's deterministic fake reader via the same
   * `data-dita-test-reader` attribute the content-script contract uses
   * (least brittle with the action-generated viewer URL — no rewriting).
   * Safe to set on every page in this context: the PDF tab is the native
   * viewer (no content script) and the harness is an extension page.
   */
  async function enableFakeReader(context: BrowserContext): Promise<void> {
    await context.addInitScript(() => {
      const document = (
        globalThis as unknown as {
          document: {
            documentElement: { setAttribute(name: string, value: string): void } | null;
          };
        }
      ).document;
      // The native PDF viewer tab has no accessible documentElement — skip it.
      document.documentElement?.setAttribute('data-dita-test-reader', 'fake');
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

  test('renders the visual PDF page with highlight on the page text, not a transcript', async () => {
    const harness = await launchExtensionContext();
    try {
      const { context, extensionId, errors } = harness;
      await enableFakeReader(context);

      const reader = await openReaderFromAction(context, extensionId, 'two-page-text.pdf');
      await expect(reader.locator('#pdf-reader')).toHaveAttribute('data-pdf-state', 'ready', {
        timeout: 20_000,
      });

      // Product requirement: the original PDF page layout must be rendered
      // (one visual page per data-page-number section), and the spoken-word
      // highlight must live on that page's text layer — a text-only
      // transcript does not satisfy the user's opt-in.
      for (const pageNumber of ['1', '2']) {
        const page = reader.locator(`[data-page-number="${pageNumber}"]`);
        await expect(page.locator('canvas')).toBeVisible();
      }
      const canvasWidth = await reader
        .locator('[data-page-number="1"] canvas')
        .evaluate((element) => (element as unknown as { width: number }).width);
      expect(canvasWidth).toBeGreaterThan(0);
      await expect(reader.locator('[data-page-number="1"] .textLayer span').first()).toBeVisible();

      await recordActiveWords(reader);
      await reader.locator('button[data-action="play"]').click();
      await expect
        .poll(async () => reader.locator('.textLayer mark[data-active-word="true"]').count(), {
          timeout: 10_000,
        })
        .toBeGreaterThan(0);
      const activeMark = reader.locator('.textLayer mark[data-active-word="true"]').first();
      // The highlighted word must live in the PDF.js text layer over the
      // rendered page — not in a standalone transcript block.
      await expect(activeMark).toBeVisible();
      const markBox = await activeMark.boundingBox();
      const pageBox = await reader.locator('[data-page-number="1"]').boundingBox();
      expect(markBox).not.toBeNull();
      expect(pageBox).not.toBeNull();
      if (markBox && pageBox) {
        expect(markBox.x).toBeGreaterThanOrEqual(pageBox.x);
        expect(markBox.y).toBeGreaterThanOrEqual(pageBox.y);
        expect(markBox.x + markBox.width).toBeLessThanOrEqual(pageBox.x + pageBox.width);
        expect(markBox.y + markBox.height).toBeLessThanOrEqual(pageBox.y + pageBox.height);
      }

      await reader.locator('button[data-action="stop"]').click();
      expect(errors).toEqual([]);
    } finally {
      await harness.close();
    }
  });

  test('bounds canvas painting to the pages around the current one', async () => {
    const harness = await launchExtensionContext();
    try {
      const { context, extensionId, errors } = harness;
      await enableFakeReader(context);

      const reader = await openReaderFromAction(context, extensionId, 'five-page-text.pdf');
      await expect(reader.locator('#pdf-reader')).toHaveAttribute('data-pdf-state', 'ready', {
        timeout: 20_000,
      });
      const canvas = reader.locator('canvas.pdf-page-canvas');

      // Initially on page 1: only the ±1 window (pages 1–2) is painted.
      await expect(canvas).toHaveCount(2, { timeout: 20_000 });
      await expect(reader.locator('[data-page-number="5"] canvas')).toHaveCount(0);

      // Pause to freeze state, then walk to page 5: the window follows and the
      // early canvases are released — memory stays bounded on any page count.
      await reader.locator('button[data-action="play"]').click();
      await expect
        .poll(async () => reader.locator('mark[data-active-word="true"]').count(), {
          timeout: 10_000,
        })
        .toBeGreaterThan(0);
      await reader.locator('button[data-action="pause"]').click();
      for (let i = 0; i < 4; i++) {
        await reader.locator('button[data-action="next"]').click();
      }
      await expect(reader.locator('[data-page-number="5"] canvas')).toBeVisible({
        timeout: 20_000,
      });
      await expect(reader.locator('[data-page-number="1"] canvas')).toHaveCount(0);
      await expect(canvas).toHaveCount(2);

      await reader.locator('button[data-action="stop"]').click();
      expect(errors).toEqual([]);
    } finally {
      await harness.close();
    }
  });

  test('covers the whole spoken word on the rendered page (geometry)', async () => {
    const harness = await launchExtensionContext();
    try {
      const { context, extensionId, errors } = harness;
      await enableFakeReader(context);

      const reader = await openReaderFromAction(context, extensionId, 'two-page-text.pdf');
      await expect(reader.locator('#pdf-reader')).toHaveAttribute('data-pdf-state', 'ready', {
        timeout: 20_000,
      });

      // Page-side geometry sampler: on every highlight mutation, measure the
      // active element's rect against each candidate word's Range rect inside
      // the text layer — synchronously, so 50ms word windows cannot race.
      await reader.evaluate(() => {
        interface Rect {
          x: number;
          y: number;
          width: number;
          height: number;
        }
        interface El {
          textContent: string | null;
          getAttribute(name: string): string | null;
          closest(selector: string): El | null;
          querySelector(selector: string): El | null;
          getBoundingClientRect(): Rect;
        }
        interface RangeLike {
          setStart(node: unknown, offset: number): void;
          setEnd(node: unknown, offset: number): void;
          getBoundingClientRect(): Rect;
        }
        const scope = globalThis as unknown as {
          ditaGeometry?: Array<{ page: string; word: string; covX: number; covY: number }>;
          document: {
            querySelector(selector: string): El | null;
            createRange(): RangeLike;
            createTreeWalker(
              root: unknown,
              whatToShow: number,
            ): {
              nextNode(): unknown;
            };
          };
          MutationObserver: new (
            cb: () => void,
          ) => {
            observe(target: unknown, options: unknown): void;
          };
        };
        scope.ditaGeometry = [];

        const overlapFraction = (a: Rect, b: Rect): { x: number; y: number } => {
          const overlapX = Math.min(a.x + a.width, b.x + b.width) - Math.max(a.x, b.x);
          const overlapY = Math.min(a.y + a.height, b.y + b.height) - Math.max(a.y, b.y);
          return {
            x: b.width > 0 ? Math.max(0, overlapX) / b.width : 0,
            y: b.height > 0 ? Math.max(0, overlapY) / b.height : 0,
          };
        };

        const sample = () => {
          const active = scope.document.querySelector('[data-active-word="true"]');
          if (!active) return;
          const pageSection = active.closest('[data-page-number]');
          const page = pageSection?.getAttribute('data-page-number') ?? '';
          const markRect = active.getBoundingClientRect();
          const layer = pageSection?.querySelector('.textLayer');
          if (!layer) return;

          // Candidate words: every whitespace-separated run in the layer's
          // text nodes, measured with a Range (non-mutating, like a user
          // selecting the word).
          const walker = scope.document.createTreeWalker(layer, 4 /* Node.SHOW_TEXT */);
          let best: { word: string; covX: number; covY: number } | null = null;
          for (let node = walker.nextNode(); node; node = walker.nextNode()) {
            const text = (node as { data?: string }).data ?? '';
            for (const match of text.matchAll(/\S+/g)) {
              const start = match.index ?? 0;
              const range = scope.document.createRange();
              range.setStart(node, start);
              range.setEnd(node, start + match[0].length);
              const markWordRect = range.getBoundingClientRect();
              const fraction = overlapFraction(markRect, markWordRect);
              if (!best || fraction.x > best.covX) {
                best = { word: match[0], covX: fraction.x, covY: fraction.y };
              }
            }
          }
          if (!best) return;
          const samples = scope.ditaGeometry ?? [];
          const last = samples[samples.length - 1];
          if (last?.word === best.word && last.page === page) return;
          samples.push({ page, word: best.word, covX: best.covX, covY: best.covY });
        };

        const pages = scope.document.querySelector('#pdf-pages');
        if (!pages) return;
        new scope.MutationObserver(sample).observe(pages, {
          childList: true,
          subtree: true,
          characterData: true,
          attributes: true,
          attributeFilter: ['data-active-word'],
        });
      });

      await reader.locator('button[data-action="play"]').click();

      // Every spoken word on both pages must be covered by the highlight.
      // Wait for natural end (status 'Finished') so the full sequence lands.
      await expect(reader.locator('#pdf-status')).toHaveText('Finished', { timeout: 30_000 });
      const samples = await reader.evaluate(() => {
        const scope = globalThis as unknown as {
          ditaGeometry?: Array<{ page: string; word: string; covX: number; covY: number }>;
        };
        return scope.ditaGeometry ?? [];
      });

      // Whole-word coverage on both pages, in narration order.
      expect(samples.map((s) => s.word)).toEqual([
        'Orchid',
        'opens',
        'the',
        'story.',
        'Cedar',
        'closes',
        'the',
        'story.',
      ]);
      expect(samples.map((s) => s.page)).toEqual(['1', '1', '1', '1', '2', '2', '2', '2']);
      for (const sample of samples) {
        expect(
          `page ${sample.page} word "${sample.word}" covX=${sample.covX.toFixed(2)} covY=${sample.covY.toFixed(2)}`,
          `highlight must cover the whole spoken word: page ${sample.page} "${sample.word}" (covX=${sample.covX.toFixed(2)}, covY=${sample.covY.toFixed(2)})`,
        ).toBeTruthy();
        expect(sample.covX).toBeGreaterThanOrEqual(0.8);
        expect(sample.covY).toBeGreaterThanOrEqual(0.7);
      }

      // End of narration: the highlight clears.
      await expect(reader.locator('[data-active-word="true"]')).toHaveCount(0, {
        timeout: 10_000,
      });
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

  test('previous/next jump pages while paused and start at the target when idle', async () => {
    const harness = await launchExtensionContext();
    try {
      const { context, extensionId, errors } = harness;
      await enableFakeReader(context);

      const reader = await openReaderFromAction(context, extensionId, 'two-page-text.pdf');
      await expect(reader.locator('#pdf-reader')).toHaveAttribute('data-pdf-state', 'ready', {
        timeout: 20_000,
      });
      const position = reader.locator('#pdf-page-position');

      await recordActiveWords(reader);
      await reader.locator('button[data-action="play"]').click();
      await expect
        .poll(async () => (await observedWords(reader)).length, { timeout: 10_000 })
        .toBeGreaterThan(0);

      // Paused: jumps move the position without narrating (deterministic — the
      // DOM and sequencer state are frozen).
      await reader.locator('button[data-action="pause"]').click();
      await expect(reader.locator('#pdf-status')).toHaveText('Paused');
      await reader.locator('button[data-action="next"]').click();
      await expect(position).toHaveText('Page 2 of 2');
      await expect(reader.locator('#pdf-status')).toHaveText('Paused');
      await reader.locator('button[data-action="previous"]').click();
      await expect(position).toHaveText('Page 1 of 2');

      // Resume after jumping: narration continues from the targeted page.
      await reader.locator('button[data-action="next"]').click();
      await expect(position).toHaveText('Page 2 of 2');
      const wordsBeforeResume = (await observedWords(reader)).length;
      await reader.locator('button[data-action="play"]').click();
      await expect
        .poll(
          async () => {
            const words = await observedWords(reader);
            return words.slice(wordsBeforeResume).some((w) => w.page === '2');
          },
          { timeout: 10_000 },
        )
        .toBe(true);

      // Idle after stop: next starts playback directly at page 2.
      await reader.locator('button[data-action="stop"]').click();
      await expect(reader.locator('#pdf-status')).toHaveText('Ready to listen');
      const wordsBeforeIdleJump = (await observedWords(reader)).length;
      await reader.locator('button[data-action="next"]').click();
      await expect(position).toHaveText('Page 2 of 2');
      // Started at the target: only page-2 words are spoken — a restart would
      // resurface page-1 words here.
      await expect
        .poll(
          async () => {
            const words = await observedWords(reader);
            return words.slice(wordsBeforeIdleJump);
          },
          { timeout: 10_000 },
        )
        .toEqual(expect.arrayContaining([expect.objectContaining({ page: '2' })]));
      const idleJumpWords = (await observedWords(reader)).slice(wordsBeforeIdleJump);
      expect(idleJumpWords.every((entry) => entry.page === '2')).toBe(true);
      expect(idleJumpWords.length).toBeGreaterThan(0);

      await reader.locator('button[data-action="stop"]').click();
      expect(errors).toEqual([]);
    } finally {
      await harness.close();
    }
  });

  test('rate slider hydrates from storage and persists committed changes', async () => {
    const harness = await launchExtensionContext();
    try {
      const { context, extensionId, errors } = harness;
      await enableFakeReader(context);

      // Seed the shared rate preference before the reader hydrates it.
      const ext = await context.newPage();
      await ext.goto(testHarnessUrl(extensionId));
      await ext.evaluate(async () => {
        await chrome.storage.local.set({ playbackRate: 1.5 });
      });
      await ext.close();

      const reader = await openReaderFromAction(context, extensionId, 'two-page-text.pdf');
      await expect(reader.locator('#pdf-reader')).toHaveAttribute('data-pdf-state', 'ready', {
        timeout: 20_000,
      });

      const slider = reader.locator('#pdf-rate[data-role="rate"]');
      await expect(slider).toHaveValue('1.5');

      // Range inputs don't accept fill(); set the value and dispatch the same
      // input/change events a real drag produces.
      await slider.evaluate((element, value) => {
        const input = element as unknown as {
          value: string;
          dispatchEvent(event: unknown): boolean;
        };
        const EventCtor = (
          globalThis as unknown as {
            Event: new (type: string, init?: { bubbles?: boolean }) => unknown;
          }
        ).Event;
        input.value = value;
        input.dispatchEvent(new EventCtor('input', { bubbles: true }));
        input.dispatchEvent(new EventCtor('change', { bubbles: true }));
      }, '0.8');
      await expect
        .poll(
          async () =>
            await reader.evaluate(async () => {
              const stored = await chrome.storage.local.get('playbackRate');
              return stored.playbackRate;
            }),
          { timeout: 5_000 },
        )
        .toBe(0.8);

      expect(errors).toEqual([]);
    } finally {
      await harness.close();
    }
  });

  test('narrates with the installed-voice path selected (seeded cache, native fallback)', async () => {
    const harness = await launchExtensionContext();
    try {
      const { context, extensionId, errors } = harness;

      // Seed the installed-voice cache so the reader selects the installed
      // path; synthesis with placeholder assets fails and the reader falls
      // back to browser speech, whose native boundaries drive the highlight.
      const ext = await context.newPage();
      await ext.goto(testHarnessUrl(extensionId));
      await ext.evaluate(async (cacheUrls) => {
        const browser = globalThis as unknown as {
          caches: {
            open(name: string): Promise<{ put(url: string, response: Response): Promise<void> }>;
          };
        };
        const cache = await browser.caches.open('dita-voices');
        await Promise.all(cacheUrls.map((url) => cache.put(url, new Response('cached'))));
      }, voiceCacheUrls());
      await ext.close();

      // No testReader=fake: the production reader stack runs.
      const reader = await openReaderFromAction(context, extensionId, 'two-page-text.pdf');
      await expect(reader.locator('#pdf-reader')).toHaveAttribute('data-pdf-state', 'ready', {
        timeout: 20_000,
      });

      await recordActiveWords(reader);
      await reader.locator('button[data-action="play"]').click();
      await expect
        .poll(async () => (await observedWords(reader)).at(0), { timeout: 30_000 })
        .toEqual({ page: '1', word: 'Orchid' });
      await expect
        .poll(
          async () => {
            const words = await observedWords(reader);
            return words.some((w) => w.page === '2' && w.word === 'Cedar');
          },
          { timeout: 30_000 },
        )
        .toBe(true);
      await expect(reader.locator('#pdf-page-position')).toHaveText('Page 2 of 2', {
        timeout: 10_000,
      });

      await reader.locator('button[data-action="stop"]').click();
      // The designed installed→fallback transition logs an error; anything
      // else must fail the test.
      const unexpected = errors.filter((line) => !line.includes('installed-voice'));
      expect(unexpected).toEqual([]);
    } finally {
      await harness.close();
    }
  });

  test('background relays installed-voice boundaries to the extension reader tab', async () => {
    const harness = await launchExtensionContext();
    try {
      const { context, extensionId, errors } = harness;

      const reader = await openReaderFromAction(context, extensionId, 'two-page-text.pdf');
      await expect(reader.locator('#pdf-reader')).toHaveAttribute('data-pdf-state', 'ready', {
        timeout: 20_000,
      });

      // Probe listener in the reader page: records every runtime message the
      // tab receives (the page-side InstalledVoiceReader hook relies on this
      // transport).
      await reader.evaluate(() => {
        const scope = globalThis as unknown as {
          ditaRelayProbe?: string[];
          chrome: {
            runtime: {
              onMessage: {
                addListener(fn: (msg: { method?: string } | undefined) => void): void;
              };
              sendMessage(msg: unknown): Promise<unknown>;
            };
          };
        };
        scope.ditaRelayProbe = [];
        scope.chrome.runtime.onMessage.addListener((msg) => {
          if (msg?.method) scope.ditaRelayProbe?.push(msg.method);
        });
      });

      // The reader tab identifies itself as the speak origin (exactly what
      // RuntimeInstalledVoiceReader sends; the SW remembers sender.tab.id).
      await reader.evaluate(async () => {
        const scope = globalThis as unknown as {
          chrome: {
            runtime: {
              sendMessage(msg: unknown): Promise<unknown>;
            };
          };
        };
        await scope.chrome.runtime.sendMessage({
          dest: 'serviceWorker',
          method: 'speakWithInstalledVoice',
          args: ['relay probe', undefined, 'probe-visit'],
        });
      });

      // Mimic the offscreen document reporting a word boundary; the SW must
      // route it back to the reader tab via tabs.sendMessage.
      const ext = await context.newPage();
      await ext.goto(testHarnessUrl(extensionId));
      await ext.evaluate(async () => {
        const browser = globalThis as unknown as {
          chrome: {
            runtime: {
              sendMessage(msg: unknown): Promise<unknown>;
            };
          };
        };
        await browser.chrome.runtime.sendMessage({
          dest: 'serviceWorker',
          method: 'installedVoiceBoundary',
          args: [{ charIndex: 0, charLength: 5 }],
        });
      });
      await ext.close();

      await expect
        .poll(
          async () => {
            return reader.evaluate(() => {
              const scope = globalThis as unknown as { ditaRelayProbe?: string[] };
              return scope.ditaRelayProbe ?? [];
            });
          },
          { timeout: 10_000 },
        )
        .toContain('installedVoiceBoundary');

      expect(errors).toEqual([]);
    } finally {
      await harness.close();
    }
  });
});

/** Engine + first-voice cache entries that mark the installed voice available. */
function voiceCacheUrls(): string[] {
  const voice = SUPERTONIC_VOICES[0];
  if (!voice) throw new Error('voice catalog is empty');
  return [
    ...SUPERTONIC_ENGINE_ASSETS.assets.map((asset) => sourceUrl(asset.source)),
    sourceUrl(voice.source),
  ];
}
