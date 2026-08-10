// @vitest-environment happy-dom
import { describe, expect, it } from 'vitest';
import { type ChunkLike, locateWord } from './word-locator';

function chunk(text: string, element: Element): ChunkLike {
  return { text, element };
}

describe('locateWord', () => {
  it('returns the chunk index and char offset of the word within the element', () => {
    const a = document.createElement('p');
    const chunks = [chunk('Hello world', a)];
    expect(locateWord(chunks, 'world', a)).toEqual({ index: 0, char: 6 });
  });

  it('skips chunks that belong to other elements', () => {
    const a = document.createElement('p');
    const b = document.createElement('p');
    const chunks = [chunk('world here', a), chunk('world there', b)];
    // 'world' appears in both, but only the chunk for element b counts
    expect(locateWord(chunks, 'world', b)).toEqual({ index: 1, char: 0 });
  });

  it('finds the word in a later chunk of the same element', () => {
    const a = document.createElement('p');
    const chunks = [chunk('first part of paragraph', a), chunk('then the keyword appears', a)];
    expect(locateWord(chunks, 'keyword', a)).toEqual({ index: 1, char: 9 });
  });

  it('returns null when the word is not present in the element', () => {
    const a = document.createElement('p');
    const chunks = [chunk('Hello world', a)];
    expect(locateWord(chunks, 'missing', a)).toBeNull();
  });

  it('trims surrounding whitespace from the word before searching', () => {
    const a = document.createElement('p');
    const chunks = [chunk('Hello world', a)];
    expect(locateWord(chunks, '  world  ', a)).toEqual({ index: 0, char: 6 });
  });

  it('returns null for an empty word', () => {
    const a = document.createElement('p');
    const chunks = [chunk('Hello world', a)];
    expect(locateWord(chunks, '   ', a)).toBeNull();
  });
});
