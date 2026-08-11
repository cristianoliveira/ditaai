import { describe, expect, it } from 'vitest';
import { clampSegmentIndex, createParagraphJumper, paragraphIndexForSegment } from './jump';

describe('clampSegmentIndex', () => {
  it('clamps within [0, total-1]', () => {
    expect(clampSegmentIndex(-1, 5)).toBe(0);
    expect(clampSegmentIndex(3, 5)).toBe(3);
    expect(clampSegmentIndex(9, 5)).toBe(4);
  });

  it('returns 0 for empty', () => {
    expect(clampSegmentIndex(3, 0)).toBe(0);
  });
});

describe('createParagraphJumper', () => {
  // breakpoints [0, 4, 9] → paragraphs at segments 0-3, 4-8, 9+
  const jumper = createParagraphJumper([0, 4, 9]);

  it('forward jumps to the next paragraph start', () => {
    expect(jumper.jump(2, 'forward', 12)).toBe(4);
  });

  it('forward from a paragraph start skips to the next', () => {
    expect(jumper.jump(4, 'forward', 12)).toBe(9);
  });

  it('forward stays in place at the last paragraph', () => {
    expect(jumper.jump(10, 'forward', 12)).toBe(10);
    expect(jumper.jump(9, 'forward', 12)).toBe(9);
  });

  it('forward clamps the target to total-1', () => {
    // next breakpoint (4) beyond total (3) → clamp to 2
    expect(jumper.jump(2, 'forward', 3)).toBe(2);
  });

  it('backward from mid-paragraph goes to the current paragraph start', () => {
    expect(jumper.jump(7, 'backward', 12)).toBe(4);
  });

  it('backward from a paragraph start goes to the previous paragraph start', () => {
    expect(jumper.jump(4, 'backward', 12)).toBe(0);
    expect(jumper.jump(9, 'backward', 12)).toBe(4);
  });

  it('backward at the start stays at 0', () => {
    expect(jumper.jump(0, 'backward', 12)).toBe(0);
  });

  it('handles empty breakpoints by staying in place', () => {
    const empty = createParagraphJumper([]);
    expect(empty.jump(5, 'forward', 10)).toBe(5);
    expect(empty.jump(5, 'backward', 10)).toBe(5);
  });

  it('dedupes and sorts breakpoints', () => {
    const messy = createParagraphJumper([4, 0, 4, 9, 0]);
    expect(messy.jump(2, 'forward', 12)).toBe(4);
  });
});

describe('paragraphIndexForSegment', () => {
  // breakpoints [0, 4, 9] → paragraphs at segments 0-3, 4-8, 9+
  const breakpoints = [0, 4, 9];

  it('returns the paragraph whose start is the largest <= segment', () => {
    expect(paragraphIndexForSegment(breakpoints, 0)).toBe(0);
    expect(paragraphIndexForSegment(breakpoints, 3)).toBe(0);
    expect(paragraphIndexForSegment(breakpoints, 4)).toBe(1);
    expect(paragraphIndexForSegment(breakpoints, 8)).toBe(1);
    expect(paragraphIndexForSegment(breakpoints, 9)).toBe(2);
  });

  it('clamps past-the-end segments to the last paragraph', () => {
    expect(paragraphIndexForSegment(breakpoints, 999)).toBe(2);
  });

  it('returns 0 for empty breakpoints', () => {
    expect(paragraphIndexForSegment([], 5)).toBe(0);
  });
});
