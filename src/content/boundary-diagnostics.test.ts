import { describe, expect, it } from 'vitest';
import { describeBoundary } from './boundary-diagnostics';

// Diagnostic payload that makes audio/highlight sync observable per word.
// The TTS reports a charIndex into the SPOKEN (whitespace-collapsed) string;
// pairing it with the resolved word lets us compare what was said vs. what
// offset the highlighter received.

describe('describeBoundary', () => {
  const segment = 'The quick brown fox';

  it('resolves the spoken word from a normal boundary event', () => {
    const result = describeBoundary(segment, 0, { charIndex: 4, charLength: 5 });
    expect(result).toEqual({ segmentIndex: 0, charIndex: 4, charLength: 5, word: 'quick' });
  });

  it('resolves the word when charLength is 0 (some Chrome builds omit it)', () => {
    const result = describeBoundary(segment, 1, { charIndex: 10, charLength: 0 });
    expect(result.word).toBe('brown');
  });

  it('returns an empty word for an out-of-range charIndex instead of throwing', () => {
    const result = describeBoundary(segment, 2, { charIndex: 999, charLength: 3 });
    expect(result.word).toBe('');
  });

  it('preserves the raw boundary fields for log correlation', () => {
    const result = describeBoundary(segment, 3, { charIndex: 16, charLength: 3 });
    expect(result).toMatchObject({ segmentIndex: 3, charIndex: 16, charLength: 3, word: 'fox' });
  });
});
