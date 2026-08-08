import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import process from 'node:process';
import { type BrowserContext, chromium } from '@playwright/test';

/** Options accepted by chromium.launchPersistentContext (launch + context). */
type LaunchContextOptions = NonNullable<Parameters<typeof chromium.launchPersistentContext>[1]>;

/**
 * The built extension output directory (wxt build target).
 * Must exist before launching — run `just build` first.
 */
const EXTENSION_BUILD_DIR = path.resolve(process.cwd(), 'dist', 'chrome-mv3');

/** Inert extension page for runtime/storage access from tests. */
export const testHarnessUrl = (extensionId: string) =>
  `chrome-extension://${extensionId}/harness.html`;

export interface ExtensionHarness {
  context: BrowserContext;
  extensionId: string;
  /** Collected uncaught page/worker errors — assert empty at test end. */
  errors: string[];
  close(): Promise<void>;
}

/**
 * Launch a persistent Chromium context with the Dita extension loaded.
 *
 * - launches chromium.launchPersistentContext with --load-extension and a
 *   fresh per-run user-data directory,
 * - captures service-worker console errors and page errors so the suite can
 *   fail on uncaught exceptions,
 * - resolves the extension id from the service-worker URL (never hardcoded),
 * - cleans up the temp profile on close().
 */
export async function launchExtensionContext(
  options: LaunchContextOptions = {},
): Promise<ExtensionHarness> {
  try {
    await fs.access(EXTENSION_BUILD_DIR);
  } catch {
    throw new Error(
      `Extension not built. Run "just build" first.\nExpected: ${EXTENSION_BUILD_DIR}`,
    );
  }

  const userDataDir = await fs.mkdtemp(path.join(os.tmpdir(), 'dita-e2e-profile-'));
  const errors: string[] = [];
  const { args: extraArgs = [], ...contextOptions } = options;

  const context = await chromium.launchPersistentContext(userDataDir, {
    headless: true,
    // Full Chromium (new headless) — required for extensions.
    channel: 'chromium',
    args: [
      `--disable-extensions-except=${EXTENSION_BUILD_DIR}`,
      `--load-extension=${EXTENSION_BUILD_DIR}`,
      ...extraArgs,
    ],
    ...contextOptions,
  });

  context.on('page', (page) => {
    page.on('pageerror', (err) => errors.push(`pageerror ${page.url()}: ${err.message}`));
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(`console ${page.url()}: ${msg.text()}`);
    });
  });

  // Wait for the service worker to register.
  while (context.serviceWorkers().length < 1) {
    await context.waitForEvent('serviceworker', { timeout: 15_000 });
  }

  const sw = context.serviceWorkers()[0];
  if (!sw) throw new Error('cannot find dita service worker');

  const extensionId = sw.url().match(/^chrome-extension:\/\/([^/]+)\//)?.[1];
  if (!extensionId) throw new Error(`cannot determine extension id from ${sw.url()}`);

  return {
    context,
    extensionId,
    errors,
    close: async () => {
      await context.close();
      await fs.rm(userDataDir, { recursive: true, force: true });
    },
  };
}
