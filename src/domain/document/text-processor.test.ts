import { describe, expect, it } from 'vitest';
import {
  MAX_TEXT_SEGMENT_LENGTH,
  type TextSegment,
  collapseWhitespace,
  prepareSegments,
  splitText,
} from './text-processor';

describe('prepareSegments', () => {
  it('keeps non-empty segments', () => {
    const segments: TextSegment[] = [
      { text: 'Hello world', tag: 'p' },
      { text: 'Second paragraph', tag: 'p' },
    ];
    expect(prepareSegments(segments)).toEqual(['Hello world', 'Second paragraph']);
  });

  it('collapses whitespace within segments', () => {
    const segments: TextSegment[] = [{ text: '  Hello\n\n  world  ', tag: 'p' }];
    expect(prepareSegments(segments)).toEqual(['Hello world']);
  });

  it('drops empty segments', () => {
    const segments: TextSegment[] = [
      { text: 'Valid', tag: 'p' },
      { text: '', tag: 'p' },
      { text: '   ', tag: 'p' },
      { text: 'Also valid', tag: 'h1' },
    ];
    expect(prepareSegments(segments)).toEqual(['Valid', 'Also valid']);
  });

  it('splits text longer than Supertonic input limit', () => {
    const text = 'a'.repeat(MAX_TEXT_SEGMENT_LENGTH + 1);

    expect(prepareSegments([{ text, tag: 'p' }])).toEqual([
      'a'.repeat(MAX_TEXT_SEGMENT_LENGTH),
      'a',
    ]);
  });
});

describe('splitText', () => {
  it('prefers sentence boundaries', () => {
    expect(splitText('First sentence. Second sentence continues.', 20)).toEqual([
      'First sentence.',
      'Second sentence',
      'continues.',
    ]);
  });

  it('never returns a chunk over requested length', () => {
    const chunks = splitText('one two three four five six seven', 10);

    expect(chunks.every((chunk) => chunk.length <= 10)).toBe(true);
    expect(chunks.join(' ')).toBe('one two three four five six seven');
  });

  it('splits paragraphs longer than the model-accurate range (regression: fast speech)', () => {
    // The Supertonic duration predictor under-predicts total audio duration for
    // long utterances, producing uniformly fast (~1.8x) speech. Observed in the
    // wild: segments up to ~430 chars stay accurate (~15 chars/s); a 783-char
    // segment compressed to ~26 chars/s. Keep every chunk well inside the
    // accurate range so this can't recur for a single long paragraph.
    const longParagraph = 'Sentence with several words. '.repeat(27).trim();
    expect(longParagraph.length).toBeGreaterThan(430);
    expect(longParagraph.length).toBeLessThan(900);

    const chunks = splitText(longParagraph);

    expect(chunks.length).toBeGreaterThan(1);
    expect(chunks.every((chunk) => chunk.length <= MAX_TEXT_SEGMENT_LENGTH)).toBe(true);
    expect(chunks.join(' ')).toBe(longParagraph);
  });
});

describe('collapseWhitespace', () => {
  it('replaces newlines and tabs with single spaces', () => {
    expect(collapseWhitespace('hello\tworld\nfoo')).toBe('hello world foo');
  });

  it('collapses multiple spaces', () => {
    expect(collapseWhitespace('hello     world')).toBe('hello world');
  });
});
