import fs from 'node:fs/promises';
import path from 'node:path';

/** @typedef {'debug' | 'info' | 'warn' | 'error'} EventLevel */

/**
 * @typedef {object} ObservabilityEventInput
 * @property {EventLevel} level
 * @property {string} kind
 * @property {string} source
 * @property {string} message
 * @property {string=} url
 * @property {Record<string, unknown>=} details
 */

/**
 * @param {string} type
 * @returns {EventLevel}
 */
export function consoleLevel(type) {
  if (type === 'error' || type === 'assert') return 'error';
  if (type === 'warning' || type === 'warn') return 'warn';
  if (type === 'debug') return 'debug';
  return 'info';
}

/**
 * Capture browser-context activity without coupling storage to Playwright.
 * The context and writer are structural ports, which keeps this deterministic in tests.
 *
 * @param {object} context Playwright BrowserContext-compatible object
 * @param {{ write: (event: ObservabilityEventInput) => Promise<unknown> }} writer
 */
export function attachBrowserObservability(context, writer) {
  const emit = createEmitter(writer);
  const attachPage = createPageAttacher(emit);
  const attachWorker = createWorkerAttacher(emit);

  context.on('console', (message) => emit(consoleEvent(message)));
  context.on('weberror', (webError) => emit(browserErrorEvent(webError)));
  context.on('requestfailed', (request) => emit(requestFailedEvent(request)));
  context.on('response', (response) => {
    const event = responseErrorEvent(response);
    if (event) emit(event);
  });
  context.on('page', attachPage);
  context.on('backgroundpage', attachPage);
  context.on('serviceworker', attachWorker);

  for (const page of [...context.pages(), ...context.backgroundPages()]) attachPage(page);
  for (const worker of context.serviceWorkers()) attachWorker(worker);
}

function createEmitter(writer) {
  /** @param {ObservabilityEventInput} event */
  return (event) => {
    writer.write(event).catch((error) => {
      console.error('[dita-observe] failed to persist browser event', error);
    });
  };
}

function createPageAttacher(emit) {
  const attachedPages = new WeakSet();
  return (page) => {
    if (attachedPages.has(page)) return;
    attachedPages.add(page);
    emit(pageEvent('page.open', 'Page opened', page.url()));
    page.on('close', () => emit(pageEvent('page.close', 'Page closed', page.url())));
    page.on('framenavigated', (frame) => {
      if (frame !== page.mainFrame()) return;
      emit(pageEvent('page.navigate', 'Page navigated', frame.url()));
    });
  };
}

function createWorkerAttacher(emit) {
  const attachedWorkers = new WeakSet();
  return (worker) => {
    if (attachedWorkers.has(worker)) return;
    attachedWorkers.add(worker);
    emit(workerEvent('worker.start', 'info', 'Worker started', worker.url()));
    worker.on('close', () => {
      emit(workerEvent('worker.close', 'warn', 'Worker closed', worker.url()));
    });
  };
}

function pageEvent(kind, message, url) {
  return { level: 'info', kind, source: sourceForUrl(url), url, message };
}

function workerEvent(kind, level, message, url) {
  return { level, kind, source: sourceForUrl(url), url, message };
}

function consoleEvent(message) {
  const pageUrl = message.page?.()?.url?.();
  const location = message.location?.() ?? {};
  const url = pageUrl || location.url;
  return {
    level: consoleLevel(message.type()),
    kind: 'console',
    source: pageUrl ? sourceForUrl(pageUrl) : sourceForUrl(location.url),
    ...(url ? { url } : {}),
    message: message.text(),
    details: { consoleType: message.type(), location },
  };
}

function browserErrorEvent(webError) {
  const pageUrl = webError.page?.()?.url?.();
  const error = webError.error();
  return {
    level: 'error',
    kind: 'browser.error',
    source: pageUrl ? sourceForUrl(pageUrl) : 'browser',
    ...(pageUrl ? { url: pageUrl } : {}),
    message: error.message,
    details: { stack: error.stack ?? error.message },
  };
}

function requestFailedEvent(request) {
  return {
    level: 'error',
    kind: 'request.failed',
    source: 'network',
    url: request.url(),
    message: request.failure()?.errorText ?? 'Request failed',
    details: { method: request.method(), resourceType: request.resourceType() },
  };
}

function responseErrorEvent(response) {
  if (response.status() < 400) return null;
  return {
    level: response.status() >= 500 ? 'error' : 'warn',
    kind: 'response.error',
    source: 'network',
    url: response.url(),
    message: `HTTP ${response.status()} ${response.statusText()}`.trim(),
    details: {
      method: response.request().method(),
      resourceType: response.request().resourceType(),
    },
  };
}

function sourceForUrl(url = '') {
  if (!url) return 'browser';
  if (!url.startsWith('chrome-extension://')) return 'page';
  if (url.includes('offscreen')) return 'offscreen';
  if (url.includes('background')) return 'service-worker';
  return 'extension-page';
}

/**
 * @param {{ directory: string, sessionId: string, now?: () => string }} options
 */
export async function createEventWriter(options) {
  const now = options.now ?? (() => new Date().toISOString());
  const eventsPath = path.join(options.directory, 'events.jsonl');
  let sequence = 0;
  let pending = Promise.resolve();

  await fs.mkdir(options.directory, { recursive: true });
  await fs.writeFile(eventsPath, '');

  return {
    eventsPath,

    /**
     * @param {ObservabilityEventInput} input
     */
    write(input) {
      const event = {
        timestamp: now(),
        sessionId: options.sessionId,
        sequence: ++sequence,
        ...input,
      };
      pending = pending.then(() => fs.appendFile(eventsPath, `${JSON.stringify(event)}\n`));
      return pending.then(() => event);
    },

    flush() {
      return pending;
    },
  };
}

/**
 * @param {string} eventsPath
 * @param {{ limit?: number, levels?: EventLevel[] }=} options
 */
export async function readRecentEvents(eventsPath, options = {}) {
  const limit = options.limit ?? 50;
  const contents = await fs.readFile(eventsPath, 'utf8');
  const events = contents
    .split('\n')
    .filter(Boolean)
    .map((line) => JSON.parse(line));
  const filtered = options.levels
    ? events.filter((event) => options.levels?.includes(event.level))
    : events;
  return filtered.slice(-limit);
}
