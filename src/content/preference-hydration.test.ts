import { describe, expect, it, vi } from 'vitest';
import { type PreferenceLoader, hydratePreferences } from './preference-hydration';

function makeLog() {
  return { info: vi.fn(), warn: vi.fn() };
}

function loader<T>(
  name: string,
  value: T | Error,
  apply: (value: T) => void = () => {},
  describe?: (value: T) => unknown,
): PreferenceLoader<unknown> {
  return {
    name,
    load: async () => {
      if (value instanceof Error) throw value;
      return value;
    },
    apply: apply as (value: unknown) => void,
    ...(describe ? { describe: describe as (value: unknown) => unknown } : {}),
  };
}

describe('hydratePreferences', () => {
  it('applies a preference whose own read succeeds even when another read fails', async () => {
    // The regression: the read scope rejects, and the stored rate must still
    // reach the player and the widget.
    const applyRate = vi.fn();
    const applyScope = vi.fn();
    const log = makeLog();

    const report = await hydratePreferences(
      [
        loader('rate', 1.25, applyRate),
        loader('read-scope', new Error('storage unavailable'), applyScope),
      ],
      log,
    );

    expect(applyRate).toHaveBeenCalledWith(1.25);
    expect(applyScope).not.toHaveBeenCalled();
    expect(report.hydrated).toEqual(['rate']);
    expect(report.failed).toEqual([{ name: 'read-scope', reason: 'storage unavailable' }]);
  });

  it('never rejects, whatever the loaders do', async () => {
    const log = makeLog();
    const report = await hydratePreferences(
      [loader('a', new Error('boom')), loader('b', new Error('bang'))],
      log,
    );

    expect(report.hydrated).toEqual([]);
    expect(report.failed.map((failure) => failure.name)).toEqual(['a', 'b']);
  });

  it('records a failure when the apply step itself throws', async () => {
    const log = makeLog();
    const report = await hydratePreferences(
      [
        loader('rate', 1.25, () => {
          throw new Error('player refused the value');
        }),
      ],
      log,
    );

    expect(report.failed).toEqual([{ name: 'rate', reason: 'player refused the value' }]);
    expect(report.hydrated).toEqual([]);
  });

  it('reflects each preference immediately after it applies', async () => {
    const order: string[] = [];
    const log = makeLog();

    await hydratePreferences(
      [
        loader('rate', 1.25, () => order.push('apply-rate')),
        loader('volume', 0.4, () => order.push('apply-volume')),
      ],
      log,
      { onApplied: (name) => order.push(`reflect-${name}`) },
    );

    // Loads run in parallel and `await` yields between them, so neither the
    // order nor adjacency is fixed. What matters is that every preference gets
    // its own reflection rather than one at the end of the run.
    const reflections = order.filter((entry) => entry.startsWith('reflect-'));
    expect(reflections).toHaveLength(2);
    expect(order).toHaveLength(4);
    for (const name of ['rate', 'volume']) {
      expect(order.indexOf(`apply-${name}`)).toBeLessThan(order.indexOf(`reflect-${name}`));
    }
  });

  it('logs the value for non-sensitive controls and only the name otherwise', async () => {
    const log = makeLog();

    await hydratePreferences(
      [
        loader(
          'rate',
          1.25,
          () => {},
          (value) => value,
        ),
        loader('read-scope', { source: 'dom' }),
      ],
      log,
    );

    expect(log.info).toHaveBeenCalledWith('[prefs] hydrated', { name: 'rate', value: 1.25 });
    expect(log.info).toHaveBeenCalledWith('[prefs] hydrated', { name: 'read-scope' });
    expect(log.warn).not.toHaveBeenCalled();
  });

  it('logs a failed preference without its value', async () => {
    const log = makeLog();

    await hydratePreferences([loader('rate', new Error('nope'))], log);

    expect(log.warn).toHaveBeenCalledWith('[prefs] not hydrated', {
      name: 'rate',
      reason: 'nope',
    });
  });

  it('always resolves even with no loaders', async () => {
    const report = await hydratePreferences([], makeLog());
    expect(report).toEqual({ hydrated: [], failed: [] });
  });
});
