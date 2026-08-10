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

/** Reader whose first prepare hangs until released — lets us pause during the
 * preparation gap, before the utterance starts. Later prepares resolve at once. */
function makePrepareDelayedReader(): TextReader & {
  calls: string[];
  resolvePrepare: () => void;
  resolveSpeak: () => void;
} {
  const calls: string[] = [];
  let resolvePrepareFn: (() => void) | null = null;
  let resolveSpeakFn: (() => void) | null = null;
  let prepareCalls = 0;
  return {
    calls,
    resolvePrepare: () => resolvePrepareFn?.(),
    resolveSpeak: () => resolveSpeakFn?.(),
    prepare: vi.fn(() => {
      prepareCalls++;
      if (prepareCalls > 1) return Promise.resolve();
      return new Promise<void>((resolve) => {
        resolvePrepareFn = resolve;
      });
    }),
    speak: vi.fn((text: string) => {
      calls.push(text);
      return new Promise<void>((resolve) => {
        resolveSpeakFn = resolve;
      });
    }),
    pause: vi.fn(),
    resume: vi.fn(),
    stop: vi.fn(() => resolveSpeakFn?.()),
  };
}

/** Reader that fires two word boundaries (chars 0-5 and 6-10) then hangs until
 * resolved. Used to verify restart-from-last-boundary behaviour. */
function makeBoundaryReader(capture: SpeakOptions[]): TextReader & { resolveSpeak: () => void } {
  let resolveFn: (() => void) | null = null;
  return {
    resolveSpeak: () => resolveFn?.(),
    speak: vi.fn((_text: string, options?: SpeakOptions) => {
      capture.push(options ?? {});
      options?.onBoundary?.({ charIndex: 0, charLength: 5 });
      options?.onBoundary?.({ charIndex: 6, charLength: 5 });
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

    expect(seq.getState()).toEqual({ current: 0, total: 3, playing: false, paused: false });

    await seq.play();

    expect(seq.getState().current).toBe(3);
  });

  it('reports paused state after pause() and clears it on resume', async () => {
    const reader = makeDelayedReader();
    const seq = new SegmentSequencer(reader);
    seq.load(['a', 'b']);

    const promise = seq.play();
    await vi.waitFor(() => expect(reader.calls).toEqual(['a']));

    seq.pause();
    reader.resolveSpeak(); // cancelled speak resolves
    await Promise.resolve();

    expect(seq.getState().paused).toBe(true);
    expect(seq.getState().playing).toBe(false);

    seq.resume();
    await vi.waitFor(() => expect(reader.calls).toEqual(['a', 'a'])); // re-speak
    reader.resolveSpeak();
    await vi.waitFor(() => expect(reader.calls).toEqual(['a', 'a', 'b']));
    reader.resolveSpeak();

    await promise;

    expect(seq.getState().paused).toBe(false);
  });

  it('does not speak a segment when pause lands during preparation', async () => {
    const reader = makePrepareDelayedReader();
    const seq = new SegmentSequencer(reader);
    seq.load(['one', 'two']);

    const promise = seq.play();
    await vi.waitFor(() => expect(reader.prepare).toHaveBeenCalled());

    // Pause while the first segment is still being prepared: the reader has
    // nothing to cancel yet, and the loop must not start speaking afterwards.
    seq.pause();
    reader.resolvePrepare();
    await Promise.resolve();

    expect(reader.speak).not.toHaveBeenCalled();
    expect(seq.getState().paused).toBe(true);

    // Resume → the segment is finally spoken.
    seq.resume();
    await vi.waitFor(() => expect(reader.calls).toEqual(['one']));
    reader.resolveSpeak();
    await vi.waitFor(() => expect(reader.calls).toEqual(['one', 'two']));
    reader.resolveSpeak();

    await promise;
    expect(reader.calls).toEqual(['one', 'two']);
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

  it('load with startIndex begins playback from that segment', async () => {
    const reader = makeFakeReader();
    const seq = new SegmentSequencer(reader);
    seq.load(['a', 'b', 'c', 'd'], 2);

    await seq.play();

    expect(reader.calls).toEqual(['c', 'd']);
  });

  it('load clamps startIndex to the last segment', async () => {
    const reader = makeFakeReader();
    const seq = new SegmentSequencer(reader);
    seq.load(['a', 'b'], 99);

    await seq.play();

    expect(reader.calls).toEqual(['b']);
  });

  it('empty segments does nothing', async () => {
    const reader = makeFakeReader();
    const seq = new SegmentSequencer(reader);
    seq.load([]);

    await seq.play();

    expect(reader.speak).not.toHaveBeenCalled();
  });

  it('restarts the current segment from the last boundary on setVolume while playing', async () => {
    const spoken: SpeakOptions[] = [];
    const reader = makeBoundaryReader(spoken);
    const seq = new SegmentSequencer(reader);
    seq.load(['hello world foo', 'second']);

    const promise = seq.play({ volume: 1 });
    await vi.waitFor(() => expect(spoken).toHaveLength(1));
    expect(spoken[0]?.volume).toBe(1); // boundaries fired → lastCharIndex = 6 + 5 = 11

    seq.setVolume(0.5); // reader.stop() resolves the speak → loop restarts the segment

    await vi.waitFor(() => expect(spoken).toHaveLength(2));
    expect(spoken[1]?.volume).toBe(0.5);
    expect(spoken[1]?.resumeFromChar).toBe(11); // resumes from the last spoken word

    seq.stop();
    await promise;
  });

  it('restarts the current segment from the last boundary on setRate while playing', async () => {
    const spoken: SpeakOptions[] = [];
    const reader = makeBoundaryReader(spoken);
    const seq = new SegmentSequencer(reader);
    seq.load(['hello world foo', 'second']);

    const promise = seq.play({ rate: 1 });
    await vi.waitFor(() => expect(spoken).toHaveLength(1));
    expect(spoken[0]?.rate).toBe(1);

    seq.setRate(1.5);

    await vi.waitFor(() => expect(spoken).toHaveLength(2));
    expect(spoken[1]?.rate).toBe(1.5);
    expect(spoken[1]?.resumeFromChar).toBe(11);

    seq.stop();
    await promise;
  });

  it('keeps the new value for later segments after a restart', async () => {
    const spoken: SpeakOptions[] = [];
    const reader = makeBoundaryReader(spoken);
    const seq = new SegmentSequencer(reader);
    seq.load(['first seg', 'second seg']);

    const promise = seq.play({ volume: 1 });
    await vi.waitFor(() => expect(spoken).toHaveLength(1));

    seq.setVolume(0.5); // restart segment 0
    await vi.waitFor(() => expect(spoken).toHaveLength(2));

    reader.resolveSpeak(); // finish the restarted segment 0 → advance to segment 1
    await vi.waitFor(() => expect(spoken).toHaveLength(3));
    expect(spoken[2]?.volume).toBe(0.5); // segment 1 inherits the restarted volume
    expect(spoken[2]?.resumeFromChar).toBe(0);

    seq.stop();
    await promise;
  });

  it('does not restart when setVolume or setRate is called while idle', () => {
    const reader = makeFakeReader();
    const seq = new SegmentSequencer(reader);
    seq.load(['one', 'two']);

    seq.setVolume(0.5);
    seq.setRate(1.5);

    expect(reader.stop).not.toHaveBeenCalled();
  });
});
