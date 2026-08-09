import { describe, expect, it } from 'vitest';
import { computeWordTimings } from './word-timing';

/** Index helper: returns the element or throws, so tests stay free of non-null assertions. */
function at<T>(values: T[], index: number): T {
  const value = values[index];
  if (value === undefined) throw new Error(`missing element at index ${index}`);
  return value;
}

describe('computeWordTimings', () => {
  it('returns one entry per word with absolute charIndex, length, and a start fraction', () => {
    const words = computeWordTimings('hello world', 0);
    expect(words).toHaveLength(2);
    expect(at(words, 0)).toMatchObject({ charIndex: 0, charLength: 5 });
    expect(at(words, 1)).toMatchObject({ charIndex: 6, charLength: 5 });
    expect(at(words, 0).startFraction).toBeGreaterThanOrEqual(0);
    expect(at(words, 0).startFraction).toBeLessThan(at(words, 1).startFraction);
    expect(at(words, 1).startFraction).toBeLessThanOrEqual(1);
  });

  it('applies offset to charIndex but keeps fractions relative to the spoken text', () => {
    const shifted = computeWordTimings('hello world', 10);
    const base = computeWordTimings('hello world', 0);
    expect(at(shifted, 0).charIndex).toBe(10);
    expect(at(shifted, 1).charIndex).toBe(16);
    expect(at(shifted, 0).startFraction).toBeCloseTo(at(base, 0).startFraction);
    expect(at(shifted, 1).startFraction).toBeCloseTo(at(base, 1).startFraction);
  });

  it('weights sentence punctuation with a pause (period gap > 2x a plain inter-word gap)', () => {
    // Symmetric words so only the period differs between the two gaps.
    const words = computeWordTimings('cat dog. cat dog', 0);
    const plainGap = at(words, 1).startFraction - at(words, 0).startFraction; // cat -> dog
    const periodGap = at(words, 2).startFraction - at(words, 1).startFraction; // dog. -> cat
    expect(periodGap).toBeGreaterThan(2 * plainGap);
  });

  it('produces monotonically non-decreasing start fractions', () => {
    const words = computeWordTimings('one two three four five.', 0);
    for (let i = 1; i < words.length; i++) {
      expect(at(words, i).startFraction).toBeGreaterThanOrEqual(at(words, i - 1).startFraction);
    }
  });

  it('reduces to flat proportional timing when there is no punctuation', () => {
    const words = computeWordTimings('aaa bb c', 0);
    const total = 'aaa bb c'.length;
    expect(at(words, 0).startFraction).toBeCloseTo(0 / total);
    expect(at(words, 1).startFraction).toBeCloseTo(4 / total);
    expect(at(words, 2).startFraction).toBeCloseTo(7 / total);
  });
});
