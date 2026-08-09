import { EventEmitter } from 'node:events';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  attachBrowserObservability,
  consoleLevel,
  createEventWriter,
  readRecentEvents,
} from './observability.mjs';

const tempDirectories: string[] = [];

async function tempDirectory(): Promise<string> {
  const directory = await fs.mkdtemp(path.join(os.tmpdir(), 'dita-observability-'));
  tempDirectories.push(directory);
  return directory;
}

afterEach(async () => {
  await Promise.all(
    tempDirectories
      .splice(0)
      .map((directory) => fs.rm(directory, { recursive: true, force: true })),
  );
});

describe('observability event store', () => {
  it('writes ordered structured events as JSONL', async () => {
    const directory = await tempDirectory();
    const writer = await createEventWriter({
      directory,
      sessionId: 'session-1',
      now: () => '2026-08-09T08:00:00.000Z',
    });

    await Promise.all([
      writer.write({
        level: 'info',
        kind: 'page.open',
        source: 'page',
        url: 'https://example.test',
        message: 'Page opened',
      }),
      writer.write({
        level: 'error',
        kind: 'request.failed',
        source: 'network',
        url: 'https://example.test/model.onnx',
        message: 'net::ERR_FAILED',
      }),
    ]);
    await writer.flush();

    const events = await readRecentEvents(writer.eventsPath, { limit: 10 });

    expect(events).toEqual([
      {
        timestamp: '2026-08-09T08:00:00.000Z',
        sessionId: 'session-1',
        sequence: 1,
        level: 'info',
        kind: 'page.open',
        source: 'page',
        url: 'https://example.test',
        message: 'Page opened',
      },
      {
        timestamp: '2026-08-09T08:00:00.000Z',
        sessionId: 'session-1',
        sequence: 2,
        level: 'error',
        kind: 'request.failed',
        source: 'network',
        url: 'https://example.test/model.onnx',
        message: 'net::ERR_FAILED',
      },
    ]);
  });

  it('reads only requested levels from newest events', async () => {
    const directory = await tempDirectory();
    const writer = await createEventWriter({ directory, sessionId: 'session-2' });

    await writer.write({ level: 'info', kind: 'console', source: 'page', message: 'ready' });
    await writer.write({ level: 'warn', kind: 'console', source: 'page', message: 'slow' });
    await writer.write({ level: 'error', kind: 'page.error', source: 'page', message: 'boom' });

    await expect(
      readRecentEvents(writer.eventsPath, { limit: 1, levels: ['warn', 'error'] }),
    ).resolves.toMatchObject([{ level: 'error', message: 'boom' }]);
  });

  it.each([
    ['error', 'error'],
    ['assert', 'error'],
    ['warning', 'warn'],
    ['warn', 'warn'],
    ['log', 'info'],
    ['debug', 'debug'],
  ] as const)('maps console type %s to %s', (type, expected) => {
    expect(consoleLevel(type)).toBe(expected);
  });
});

describe('browser observability', () => {
  it('captures console messages with page and source locations', async () => {
    const context = Object.assign(new EventEmitter(), {
      pages: () => [],
      backgroundPages: () => [],
      serviceWorkers: () => [],
    });
    const write = vi.fn().mockResolvedValue(undefined);
    attachBrowserObservability(context, { write });

    context.emit('console', {
      type: () => 'warning',
      text: () => 'slow inference',
      page: () => ({ url: () => 'https://article.test' }),
      location: () => ({
        url: 'chrome-extension://dita/content.js',
        lineNumber: 12,
        columnNumber: 3,
      }),
    });
    await vi.waitFor(() => expect(write).toHaveBeenCalledOnce());

    expect(write).toHaveBeenCalledWith({
      level: 'warn',
      kind: 'console',
      source: 'page',
      url: 'https://article.test',
      message: 'slow inference',
      details: {
        consoleType: 'warning',
        location: {
          url: 'chrome-extension://dita/content.js',
          lineNumber: 12,
          columnNumber: 3,
        },
      },
    });
  });

  it('captures failed requests and uncaught browser errors', async () => {
    const context = Object.assign(new EventEmitter(), {
      pages: () => [],
      backgroundPages: () => [],
      serviceWorkers: () => [],
    });
    const write = vi.fn().mockResolvedValue(undefined);
    attachBrowserObservability(context, { write });

    context.emit('requestfailed', {
      url: () => 'https://models.test/voice.onnx',
      method: () => 'GET',
      resourceType: () => 'fetch',
      failure: () => ({ errorText: 'net::ERR_BLOCKED_BY_CLIENT' }),
    });
    context.emit('weberror', {
      page: () => ({ url: () => 'https://article.test' }),
      error: () => new Error('Failed to fetch'),
    });
    await vi.waitFor(() => expect(write).toHaveBeenCalledTimes(2));

    expect(write).toHaveBeenNthCalledWith(1, {
      level: 'error',
      kind: 'request.failed',
      source: 'network',
      url: 'https://models.test/voice.onnx',
      message: 'net::ERR_BLOCKED_BY_CLIENT',
      details: { method: 'GET', resourceType: 'fetch' },
    });
    expect(write).toHaveBeenNthCalledWith(2, {
      level: 'error',
      kind: 'browser.error',
      source: 'page',
      url: 'https://article.test',
      message: 'Failed to fetch',
      details: { stack: expect.stringContaining('Failed to fetch') },
    });
  });
});
