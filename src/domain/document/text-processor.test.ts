import { describe, expect, it } from 'vitest';
import { type TextSegment, collapseWhitespace, prepareSegments } from './text-processor';

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
});

describe('collapseWhitespace', () => {
  it('replaces newlines and tabs with single spaces', () => {
    expect(collapseWhitespace('hello\tworld\nfoo')).toBe('hello world foo');
  });

  it('collapses multiple spaces', () => {
    expect(collapseWhitespace('hello     world')).toBe('hello world');
  });
});
