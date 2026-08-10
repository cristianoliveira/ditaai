import { describe, expect, it, vi } from 'vitest';
import { SegmentSequencer } from './sequencer';
import type { SpeakOptions, TextReader } from './text-reader';

function makeFakeReader(): TextReader & { calls: string[] } {
  const calls: string[] = [];
  return {
    calls,
    speak: vi.fn((text: string) => {
      calls.push(text);
      return Promise.resolve();
    }),
    pause: vi.fn(),
    resume: vi.fn(),
    stop: vi.fn(),
  };
}

/** Reader where speak resolves after a delay, so we can pause mid-segment. */
function makeDelayedReader(): TextReader & { calls: string[]; resolveSpeak: () => void } {
  const calls: string[] = [];
  let resolveFn: (() => void) | null = null;
  return {
    calls,
    resolveSpeak: () => resolveFn?.(),
    speak: vi.fn((text: string) => {
      calls.push(text);
      return new Promise<void>((resolve) => {
        resolveFn = resolve;
      });
    }),
    pause: vi.fn(),
    resume: vi.fn(),
    stop: vi.fn(() => resolveFn?.()),
  };
}

describe('SegmentSequencer', () => {
  it('speaks all segments in order', async () => {
    const reader = makeFakeReader();
    const seq = new SegmentSequencer(reader);
    seq.load(['Hello', 'world', 'foo']);

    await seq.play();

    expect(reader.speak).toHaveBeenCalledTimes(3);
    expect(reader.calls).toEqual(['Hello', 'world', 'foo']);
    expect(seq.getState().playing).toBe(false);
  });

  it('prepares next segment while current segment is playing', async () => {
    const events: string[] = [];
    const pending: Array<() => void> = [];
    const reader: TextReader = {
      prepare: vi.fn(async (text: string) => {
        events.push(`prepare:${text}`);
      }),
      speak: vi.fn((text: string) => {
        events.push(`speak:${text}`);
        return new Promise<void>((resolve) => pending.push(resolve));
      }),
      pause: vi.fn(),
      resume: vi.fn(),
      stop: vi.fn(),
    };
    const seq = new SegmentSequencer(reader);
    seq.load(['first', 'second']);

    const playback = seq.play({ rate: 1.2 });

    await vi.waitFor(() =>
      expect(events).toEqual(['prepare:first', 'speak:first', 'prepare:second']),
    );
    expect(reader.prepare).toHaveBeenCalledWith('second', expect.objectContaining({ rate: 1.2 }));
    expect(reader.speak).toHaveBeenCalledTimes(1);

    pending.shift()?.();
    await vi.waitFor(() => expect(reader.speak).toHaveBeenCalledTimes(2));
    pending.shift()?.();
    await playback;
  });

  it('continues playback when preparation fails', async () => {
    const reader = makeFakeReader();
    reader.prepare = vi.fn().mockRejectedValue(new Error('preparation failed'));
    const seq = new SegmentSequencer(reader);
    seq.load(['first', 'second']);

    await seq.play();

    expect(reader.calls).toEqual(['first', 'second']);
  });

  it('tracks current index', async () => {
    const reader = makeFakeReader();
    const seq = new SegmentSequencer(reader);
    seq.load(['one', 'two', 'three']);

    expect(seq.getState()).toEqual({ current: 0, total: 3, playing: false });

    await seq.play();

    expect(seq.getState().current).toBe(3);
  });

  it('stop halts playback', async () => {
    const reader = makeDelayedReader();
    const seq = new SegmentSequencer(reader);
    seq.load(['a', 'b', 'c', 'd']);

    const promise = seq.play();
    seq.stop();
    reader.resolveSpeak(); // resolve any pending speak
    await promise;

    expect(reader.stop).toHaveBeenCalled();
    expect(seq.getState().playing).toBe(false);
    expect(seq.getState().current).toBe(0);
  });

  it('pause then resume re-speaks the current segment', async () => {
    const reader = makeDelayedReader();
    const seq = new SegmentSequencer(reader);
    seq.load(['first', 'second', 'third']);

    const promise = seq.play();

    // let segment 0 ("first") start
    await vi.waitFor(() => expect(reader.calls).toEqual(['first']));

    // pause — cancels current, resolves speak via reader.stop()
    seq.pause();
    expect(reader.stop).toHaveBeenCalled();
    expect(seq.getState().playing).toBe(false);

    // reader.stop() resolves the pending speak
    reader.resolveSpeak();

    // wait a tick so the loop hits the pause gate
    await Promise.resolve();

    // resume — should re-speak "first" (index still 0)
    seq.resume();

    // wait for re-speak of "first", then resolve it
    await vi.waitFor(() => expect(reader.calls).toEqual(['first', 'first']));
    reader.resolveSpeak();

    // resolve segment 1
    await vi.waitFor(() => expect(reader.calls).toEqual(['first', 'first', 'second']));
    reader.resolveSpeak();

    // resolve segment 2
    await vi.waitFor(() => expect(reader.calls).toEqual(['first', 'first', 'second', 'third']));
    reader.resolveSpeak();

    await promise;

    expect(reader.calls).toEqual(['first', 'first', 'second', 'third']);
  });

  it('stop while paused unblocks the resume promise', async () => {
    const reader = makeDelayedReader();
    const seq = new SegmentSequencer(reader);
    seq.load(['a', 'b']);

    const promise = seq.play();
    await vi.waitFor(() => expect(reader.calls).toEqual(['a']));

    seq.pause();
    reader.resolveSpeak();
    await Promise.resolve();

    // stop while paused
    seq.stop();
    await promise;

    expect(seq.getState().current).toBe(0);
    expect(seq.getState().playing).toBe(false);
  });

  it('pause and resume delegate noop when already in that state', () => {
    const reader = makeFakeReader();
    const seq = new SegmentSequencer(reader);

    seq.pause(); // not playing — noop
    expect(reader.stop).not.toHaveBeenCalled();
  });

  it('resume continues from the last boundary word position', async () => {
    const spokenOptions: SpeakOptions[] = [];
    let resolveFn: (() => void) | null = null;
    const resolve = () => {
      resolveFn?.();
    };
    const boundaryReader: TextReader = {
      speak: vi.fn((_text: string, options?: SpeakOptions) => {
        spokenOptions.push(options ?? {});
        // simulate two boundary events at char 0-5 and 6-11
        options?.onBoundary?.({ charIndex: 0, charLength: 5 });
        options?.onBoundary?.({ charIndex: 6, charLength: 5 });
        return new Promise<void>((resolve) => {
          resolveFn = resolve;
        });
      }),
      pause: vi.fn(),
      resume: vi.fn(),
      stop: vi.fn(() => resolve()),
    };

    const seq = new SegmentSequencer(boundaryReader);
    seq.load(['hello world foo']);

    const promise = seq.play();
    await vi.waitFor(() => expect(spokenOptions).toHaveLength(1));

    // pause after boundaries fired (lastCharIndex = 6 + 5 = 11)
    seq.pause();
    resolve();
    await Promise.resolve();

    // resume — should re-speak with resumeFromChar = 11
    seq.resume();
    await vi.waitFor(() => expect(spokenOptions).toHaveLength(2));
    expect(spokenOptions[1]?.resumeFromChar).toBe(11);

    // clean up
    resolve();
    seq.stop();
    await promise;
  });

  describe('seek', () => {
    it('jumps forward to a later segment and continues from there', async () => {
      const reader = makeDelayedReader();
      const seq = new SegmentSequencer(reader);
      const changes: number[] = [];
      seq.load(['a', 'b', 'c', 'd', 'e']);
      seq.onSegmentChange = (i) => changes.push(i);

      const promise = seq.play();
      await vi.waitFor(() => expect(reader.calls).toEqual(['a']));

      seq.seek(3); // jump to 'd' — reader.stop() resolves 'a'
      await vi.waitFor(() => expect(reader.calls).toEqual(['a', 'd']));

      reader.resolveSpeak(); // finish 'd'
      await vi.waitFor(() => expect(reader.calls).toEqual(['a', 'd', 'e']));
      reader.resolveSpeak(); // finish 'e'
      await promise;

      expect(reader.calls).toEqual(['a', 'd', 'e']); // skipped b, c
      expect(changes).toContain(3);
    });

    it('jumps backward to an earlier segment', async () => {
      const reader = makeDelayedReader();
      const seq = new SegmentSequencer(reader);
      seq.load(['a', 'b', 'c', 'd']);

      const promise = seq.play();
      await vi.waitFor(() => expect(reader.calls).toEqual(['a']));
      reader.resolveSpeak();
      await vi.waitFor(() => expect(reader.calls).toEqual(['a', 'b']));
      reader.resolveSpeak();
      await vi.waitFor(() => expect(reader.calls).toEqual(['a', 'b', 'c']));

      seq.seek(0); // back to 'a' while speaking 'c'
      await vi.waitFor(() => expect(reader.calls).toEqual(['a', 'b', 'c', 'a']));

      seq.stop();
      reader.resolveSpeak();
      await promise;

      expect(reader.calls).toEqual(['a', 'b', 'c', 'a']);
    });

    it('clamps the target to bounds', async () => {
      const reader = makeDelayedReader();
      const seq = new SegmentSequencer(reader);
      seq.load(['a', 'b', 'c']);

      const promise = seq.play();
      await vi.waitFor(() => expect(reader.calls).toEqual(['a']));

      seq.seek(99); // clamps to last
      await vi.waitFor(() => expect(reader.calls).toEqual(['a', 'c']));

      reader.resolveSpeak();
      await promise;
    });

    it('is a no-op when idle', () => {
      const reader = makeFakeReader();
      const seq = new SegmentSequencer(reader);
      seq.load(['a', 'b', 'c']);

      seq.seek(2);

      expect(reader.stop).not.toHaveBeenCalled();
      expect(seq.getState().current).toBe(0);
    });

    it('while paused moves the highlight and stays paused', async () => {
      const reader = makeDelayedReader();
      const seq = new SegmentSequencer(reader);
      const changes: number[] = [];
      seq.load(['a', 'b', 'c', 'd']);
      seq.onSegmentChange = (i) => changes.push(i);

      const promise = seq.play();
      await vi.waitFor(() => expect(reader.calls).toEqual(['a']));
      seq.pause();
      reader.resolveSpeak();
      await Promise.resolve();
      expect(seq.getState().playing).toBe(false);

      changes.length = 0;
      seq.seek(2); // paused → move highlight, stay paused
      expect(changes).toEqual([2]);
      expect(seq.getState().playing).toBe(false);

      seq.resume(); // resumes from target
      await vi.waitFor(() => expect(reader.calls).toEqual(['a', 'c']));
      reader.resolveSpeak();
      await vi.waitFor(() => expect(reader.calls).toEqual(['a', 'c', 'd']));
      reader.resolveSpeak();
      await promise;
    });
  });

  it('empty segments does nothing', async () => {
    const reader = makeFakeReader();
    const seq = new SegmentSequencer(reader);
    seq.load([]);

    await seq.play();

    expect(reader.speak).not.toHaveBeenCalled();
  });

  it('applies setRate to the next segment while playing', async () => {
    const rates: (number | undefined)[] = [];
    let resolveFn: (() => void) | null = null;
    const reader: TextReader & { resolveSpeak: () => void } = {
      resolveSpeak: () => resolveFn?.(),
      speak: vi.fn((_text: string, options?: SpeakOptions) => {
        rates.push(options?.rate);
        return new Promise<void>((resolve) => {
          resolveFn = resolve;
        });
      }),
      pause: vi.fn(),
      resume: vi.fn(),
      stop: vi.fn(() => resolveFn?.()),
    };

    const seq = new SegmentSequencer(reader);
    seq.load(['one', 'two']);

    const promise = seq.play({ rate: 1 });
    await vi.waitFor(() => expect(rates).toEqual([1]));

    seq.setRate(1.5);
    reader.resolveSpeak(); // finish 'one'; the loop rebuilds speakOptions with the new rate

    await vi.waitFor(() => expect(rates).toEqual([1, 1.5]));

    reader.resolveSpeak(); // finish 'two'
    await promise;
  });
});
