#!/usr/bin/env node

import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { chromium } from '@playwright/test';
import { findChromiumExecutable } from './chromium-executable.mjs';
import { attachBrowserObservability, createEventWriter } from './observability.mjs';
import {
  chromiumLaunchArguments,
  loadedExtensionVersion,
  openRequestedPage,
  reloadLoadedExtension,
  requestLoadedBuild,
  runSyntheticAudioProbe,
} from './observe-browser.mjs';

const HELP = `Dita local observability browser

Usage:
  pnpm observe

Environment:
  DITA_OBSERVE_URL                         Optional URL opened beside restored tabs
  DITA_OBSERVABILITY_DIR                   Output root (default: .tmp/observability)
  PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH      Explicit Chromium executable

Output:
  .tmp/observability/current/events.jsonl  Live structured browser events
  .tmp/observability/current/session.json  Current session metadata
  .tmp/observability/sessions/             Previous sessions
  .tmp/observability/profile/              Persistent browser profile
`;

if (process.argv.includes('--help') || process.argv.includes('-h')) {
  console.log(HELP);
  process.exit(0);
}

const projectRoot = process.cwd();
const extensionDirectory = path.resolve(projectRoot, 'dist/chrome-mv3');
const observabilityRoot = path.resolve(
  projectRoot,
  process.env.DITA_OBSERVABILITY_DIR ?? '.tmp/observability',
);
const currentDirectory = path.join(observabilityRoot, 'current');
const profileDirectory = path.join(observabilityRoot, 'profile');
const sessionId = `${new Date().toISOString().replaceAll(/[:.]/g, '-')}-${crypto.randomUUID().slice(0, 8)}`;
const startedAt = new Date().toISOString();

await assertExtensionBuilt(extensionDirectory);
await rotateCurrentSession(observabilityRoot, currentDirectory);

const writer = await createEventWriter({ directory: currentDirectory, sessionId });
await writeSession({ status: 'starting' });
await writer.write({
  level: 'info',
  kind: 'session.start',
  source: 'observer',
  message: 'Dita observability session started',
  details: { extensionDirectory, profileDirectory, pid: process.pid },
});

const executablePath = await findChromiumExecutable({
  explicitPath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH,
  browsersPath: process.env.PLAYWRIGHT_BROWSERS_PATH,
});
const context = await chromium.launchPersistentContext(profileDirectory, {
  headless: false,
  ...(executablePath ? { executablePath } : { channel: 'chromium' }),
  viewport: null,
  args: chromiumLaunchArguments(extensionDirectory),
});
attachBrowserObservability(context, writer);

let serviceWorker = await waitForServiceWorker(context);
const extensionId = serviceWorker.url().match(/^chrome-extension:\/\/([^/]+)\//)?.[1];
let diagnosticBuild;
if (process.env.DITA_OBSERVE_RELOAD_EXTENSION === '1') {
  await reloadLoadedExtension(serviceWorker);
  const handshake = await requestLoadedBuild(context, extensionId);
  if (!handshake?.ok || typeof handshake.buildVersion !== 'string') {
    await context.close();
    throw new Error('Reloaded extension did not answer the build diagnostic');
  }
  diagnosticBuild = handshake.buildVersion;
  serviceWorker =
    context
      .serviceWorkers()
      .find((worker) => worker.url().startsWith(`chrome-extension://${extensionId}/`)) ??
    (await waitForServiceWorker(context));
}
const expectedManifest = JSON.parse(
  await fs.readFile(path.join(extensionDirectory, 'manifest.json'), 'utf8'),
);
const expectedBuild = expectedManifest.version_name ?? expectedManifest.version;
const loadedBuild = await loadedExtensionVersion(serviceWorker);
if (loadedBuild !== expectedBuild || (diagnosticBuild && diagnosticBuild !== expectedBuild)) {
  await writer.write({
    level: 'error',
    kind: 'extension.build-mismatch',
    source: 'observer',
    message: 'Loaded extension build does not match dist',
    details: { expectedBuild, loadedBuild, diagnosticBuild },
  });
  await writeSession({ status: 'error', extensionId });
  await writer.flush();
  await context.close();
  throw new Error(
    `Loaded extension build mismatch: expected ${expectedBuild}, got ${loadedBuild}; diagnostic=${diagnosticBuild ?? 'not-run'}`,
  );
}
await writeSession({ status: 'ready', extensionId });
await writer.write({
  level: 'info',
  kind: 'session.ready',
  source: 'observer',
  url: serviceWorker.url(),
  message: 'Dita extension and browser are ready',
  details: { extensionId, loadedBuild, diagnosticBuild },
});

if (process.env.DITA_OBSERVE_SYNTHETIC_AUDIO_PROBE === '1') {
  try {
    const result = await runSyntheticAudioProbe(context, extensionId);
    await writer.write({
      level: result.ok ? 'info' : 'error',
      kind: 'synthetic.audio-probe.complete',
      source: 'observer',
      message: 'Synthetic audio preparation probe completed',
      details: result,
    });
  } catch (error) {
    await writer.write({
      level: 'error',
      kind: 'synthetic.audio-probe.failed',
      source: 'observer',
      message: 'Synthetic audio preparation probe failed',
      details: { errorName: error instanceof Error ? error.name : 'UnknownError' },
    });
  }
}

await openRequestedPage(context, process.env.DITA_OBSERVE_URL);

console.log(`
Dita observability is ready.

Test in the opened Chromium window.
Live events: ${writer.eventsPath}
Current errors: just observe-errors
Persistent profile: ${profileDirectory}

Close Chromium or press Ctrl-C to stop.
`);

let stopping = false;
const stop = async (reason) => {
  if (stopping) return;
  stopping = true;
  await writer.write({
    level: 'info',
    kind: 'session.stop',
    source: 'observer',
    message: `Dita observability session stopped: ${reason}`,
  });
  await writeSession({ status: 'stopped', extensionId, stoppedAt: new Date().toISOString() });
  await writer.flush();
  if (reason !== 'browser closed') await context.close();
};

process.on('SIGINT', () => void stop('SIGINT'));
process.on('SIGTERM', () => void stop('SIGTERM'));

await new Promise((resolve) => context.once('close', resolve));
await stop('browser closed');
await writer.flush();

async function assertExtensionBuilt(directory) {
  try {
    await fs.access(path.join(directory, 'manifest.json'));
  } catch {
    throw new Error(`Extension is not built. Run "just build" first. Expected: ${directory}`);
  }
}

async function waitForServiceWorker(browserContext) {
  const existing = browserContext.serviceWorkers()[0];
  if (existing) return existing;
  return browserContext.waitForEvent('serviceworker', { timeout: 15_000 });
}

async function rotateCurrentSession(root, current) {
  try {
    const metadata = JSON.parse(await fs.readFile(path.join(current, 'session.json'), 'utf8'));
    const archiveDirectory = path.join(root, 'sessions');
    await fs.mkdir(archiveDirectory, { recursive: true });
    await fs.rename(current, path.join(archiveDirectory, metadata.sessionId));
  } catch {
    await fs.rm(current, { recursive: true, force: true });
  }
  await fs.mkdir(current, { recursive: true });
}

async function writeSession(extra) {
  await fs.writeFile(
    path.join(currentDirectory, 'session.json'),
    `${JSON.stringify(
      {
        sessionId,
        startedAt,
        pid: process.pid,
        extensionDirectory,
        profileDirectory,
        eventsPath: writer.eventsPath,
        ...extra,
      },
      null,
      2,
    )}\n`,
  );
}
