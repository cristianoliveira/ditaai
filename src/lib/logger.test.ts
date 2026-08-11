import { describe, expect, it, vi } from 'vitest';
import { type LogEntry, createLogger } from './logger';

function fixedClock(iso: string) {
  return { now: () => new Date(iso) };
}

function capturingSink() {
  const entries: LogEntry[] = [];
  return {
    entries,
    log: (entry: LogEntry) => entries.push(entry),
  };
}

describe('createLogger', () => {
  it('emits an info entry with ISO timestamp from the injected clock', () => {
    const clock = fixedClock('2026-08-10T20:38:55.068Z');
    const sink = capturingSink();
    const logger = createLogger(clock, sink);

    logger.info('background ready');

    expect(sink.entries).toHaveLength(1);
    expect(sink.entries[0]).toEqual({
      level: 'info',
      timestamp: '2026-08-10T20:38:55.068Z',
      namespace: 'dita',
      message: 'background ready',
    });
  });

  it('maps each level to the matching method', () => {
    const clock = fixedClock('2026-08-10T20:38:55.068Z');
    const sink = capturingSink();
    const logger = createLogger(clock, sink);

    logger.debug('d');
    logger.info('i');
    logger.warn('w');
    logger.error('e');

    expect(sink.entries.map((e) => e.level)).toEqual(['debug', 'info', 'warn', 'error']);
  });

  it('passes details through unchanged', () => {
    const clock = fixedClock('2026-08-10T20:38:55.068Z');
    const sink = capturingSink();
    const logger = createLogger(clock, sink);
    const details = { speechId: 'abc', ms: 12 };

    logger.info('playback:start', details);

    expect(sink.entries[0]?.details).toEqual(details);
  });

  it('omits details when none provided', () => {
    const sink = capturingSink();
    const logger = createLogger(fixedClock('2026-08-10T20:38:55.068Z'), sink);

    logger.info('no details here');

    expect(sink.entries[0]?.details).toBeUndefined();
  });

  it('uses a custom namespace when provided', () => {
    const sink = capturingSink();
    const logger = createLogger(fixedClock('2026-08-10T20:38:55.068Z'), sink, 'supertonic');

    logger.info('inference:start');

    expect(sink.entries[0]?.namespace).toBe('supertonic');
  });

  it('reads the clock on every call (live, not captured once)', () => {
    let iso = '2026-08-10T20:38:55.000Z';
    const clock = { now: () => new Date(iso) };
    const sink = capturingSink();
    const logger = createLogger(clock, sink);

    logger.info('first');
    iso = '2026-08-10T20:38:56.000Z';
    logger.info('second');

    expect(sink.entries.map((e) => e.timestamp)).toEqual([
      '2026-08-10T20:38:55.000Z',
      '2026-08-10T20:38:56.000Z',
    ]);
  });
});

describe('console sink', () => {
  it('forwards formatted line + details to the matching console method', async () => {
    const { consoleSink } = await import('./logger');
    const infoSpy = vi.spyOn(console, 'info').mockImplementation(() => {});

    consoleSink.log({
      level: 'info',
      timestamp: '2026-08-10T20:38:55.068Z',
      namespace: 'dita',
      message: 'background ready',
      details: { a: 1 },
    });

    expect(infoSpy).toHaveBeenCalledWith('[2026-08-10T20:38:55.068Z] [dita] background ready', {
      a: 1,
    });
    infoSpy.mockRestore();
  });

  it('forwards warn and error to their console methods', async () => {
    const { consoleSink } = await import('./logger');
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    consoleSink.log({
      level: 'warn',
      timestamp: '2026-08-10T20:38:55.068Z',
      namespace: 'dita',
      message: 'oh no',
    });
    consoleSink.log({
      level: 'error',
      timestamp: '2026-08-10T20:38:55.068Z',
      namespace: 'dita',
      message: 'boom',
    });

    expect(warnSpy).toHaveBeenCalledWith('[2026-08-10T20:38:55.068Z] [dita] oh no', undefined);
    expect(errorSpy).toHaveBeenCalledWith('[2026-08-10T20:38:55.068Z] [dita] boom', undefined);
    warnSpy.mockRestore();
    errorSpy.mockRestore();
  });
});
