import { describe, expect, it, vi } from 'vitest';
import { SegmentSequencer } from './sequencer';
import type { TextReader } from './text-reader';

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

  it('tracks current index', async () => {
    const reader = makeFakeReader();
    const seq = new SegmentSequencer(reader);
    seq.load(['one', 'two', 'three']);

    expect(seq.getState()).toEqual({ current: 0, total: 3, playing: false });

    await seq.play();

    expect(seq.getState().current).toBe(3);
  });

  it('stop halts playback', async () => {
    const reader = makeFakeReader();
    const spoken: string[] = [];
    reader.speak = vi.fn(() => {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          spoken.push('spoken');
          resolve();
        }, 50);
      });
    });

    const seq = new SegmentSequencer(reader);
    seq.load(['a', 'b', 'c', 'd']);

    const promise = seq.play();
    seq.stop();
    await promise;

    expect(reader.stop).toHaveBeenCalled();
    expect(seq.getState().playing).toBe(false);
    expect(seq.getState().current).toBe(0);
  });

  it('pause and resume delegate to reader', () => {
    const reader = makeFakeReader();
    const seq = new SegmentSequencer(reader);

    seq.pause();
    expect(reader.pause).toHaveBeenCalled();
    expect(seq.getState().playing).toBe(false);

    seq.resume();
    expect(reader.resume).toHaveBeenCalled();
    expect(seq.getState().playing).toBe(true);
  });

  it('empty segments does nothing', async () => {
    const reader = makeFakeReader();
    const seq = new SegmentSequencer(reader);
    seq.load([]);

    await seq.play();

    expect(reader.speak).not.toHaveBeenCalled();
  });
});
