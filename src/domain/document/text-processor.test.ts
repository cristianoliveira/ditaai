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
});

describe('collapseWhitespace', () => {
  it('replaces newlines and tabs with single spaces', () => {
    expect(collapseWhitespace('hello\tworld\nfoo')).toBe('hello world foo');
  });

  it('collapses multiple spaces', () => {
    expect(collapseWhitespace('hello     world')).toBe('hello world');
  });
});
