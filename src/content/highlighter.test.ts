// @vitest-environment happy-dom
import { afterEach, describe, expect, it } from 'vitest';
import {
  clearHighlight,
  clearParagraph,
  clearStartPoint,
  highlightParagraph,
  highlightWord,
  markStartPoint,
} from './highlighter';

describe('highlightWord', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('marks the word at the given collapsed offset in plain text', () => {
    const p = html('<p>hello world</p>');
    highlightWord(p, 6, 5);
    expect(marked(p)).toBe('world');
  });

  it('maps a collapsed offset onto raw DOM text that has extra whitespace (desync regression)', () => {
    // Build the text node explicitly so the raw DOM keeps "Hello\n\nworld"
    // regardless of how an HTML parser would normalise whitespace.
    const p = document.createElement('p');
    p.appendChild(document.createTextNode('Hello\n\nworld'));
    document.body.appendChild(p);

    // collapsed = "Hello world"; offset 6 -> "world".
    // The old walker measured raw length, so offset 6 landed on a newline.
    highlightWord(p, 6, 5);
    expect(marked(p)).toBe('world');
  });

  it('marks a word spanning an inline child without throwing', () => {
    const p = html('<p>hello<b>world</b></p>');
    highlightWord(p, 0, 10);
    expect(allMarked(p)).toBe('helloworld');
    expect(p.querySelectorAll('mark').length).toBe(2);
  });

  it('still marks the word when charLength is 0', () => {
    const p = html('<p>hello world</p>');
    highlightWord(p, 6, 0);
    expect(marked(p)).toBe('world');
  });

  it('does nothing and does not throw for an out-of-range charIndex', () => {
    const p = html('<p>hello world</p>');
    expect(() => highlightWord(p, 999, 3)).not.toThrow();
    expect(p.querySelectorAll('mark').length).toBe(0);
  });

  it('clearHighlight removes marks and restores the original text', () => {
    const p = html('<p>hello world</p>');
    highlightWord(p, 0, 5);
    clearHighlight(p);
    expect(p.querySelectorAll('mark').length).toBe(0);
    expect(p.textContent).toBe('hello world');
  });
});

describe('highlightParagraph', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('marks the element with the paragraph class', () => {
    const p = html('<p>hi</p>');
    highlightParagraph(p);
    expect(p.classList.contains('dita-sentence-highlight')).toBe(true);
  });

  it('clearParagraph removes the paragraph class', () => {
    const p = html('<p>hi</p>');
    highlightParagraph(p);
    clearParagraph(p);
    expect(p.classList.contains('dita-sentence-highlight')).toBe(false);
  });
});

describe('start-point marker', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('markStartPoint adds the start-point class', () => {
    const p = html('<p>hi</p>');
    markStartPoint(p);
    expect(p.classList.contains('dita-start-point')).toBe(true);
  });

  it('clearStartPoint removes the start-point class', () => {
    const p = html('<p>hi</p>');
    markStartPoint(p);
    clearStartPoint(p);
    expect(p.classList.contains('dita-start-point')).toBe(false);
  });
});

function html(source: string): Element {
  document.body.innerHTML = source;
  return document.body.firstElementChild as Element;
}

function marked(el: Element): string {
  return el.querySelector('mark')?.textContent ?? '';
}

function allMarked(el: Element): string {
  return [...el.querySelectorAll('mark')].map((m) => m.textContent ?? '').join('');
}
