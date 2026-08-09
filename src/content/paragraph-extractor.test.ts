// @vitest-environment happy-dom
import { afterEach, describe, expect, it } from 'vitest';
import { extractParagraphs } from './paragraph-extractor';

describe('extractParagraphs', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('keeps leaf paragraphs and drops the containing article (no duplication)', () => {
    document.body.innerHTML = `
      <article>
        <p>First paragraph.</p>
        <p>Second paragraph.</p>
      </article>`;
    const segments = extractParagraphs(document);
    expect(segments.map((s) => s.tag)).toEqual(['p', 'p']);
    expect(segments.map((s) => s.text)).toEqual(['First paragraph.', 'Second paragraph.']);
  });

  it('keeps list items as individual leaf blocks, drops the list', () => {
    document.body.innerHTML = '<ul><li>One</li><li>Two</li></ul>';
    const segments = extractParagraphs(document);
    expect(segments.map((s) => s.text)).toEqual(['One', 'Two']);
    expect(segments.map((s) => s.tag)).toEqual(['li', 'li']);
  });

  it('excludes blocks inside nav/footer/header/aside boilerplate', () => {
    document.body.innerHTML = `
      <nav><p>Menu item</p></nav>
      <footer><p>Copyright</p></footer>
      <main><p>Real content</p></main>`;
    const segments = extractParagraphs(document);
    expect(segments.map((s) => s.text)).toEqual(['Real content']);
  });

  it('keeps an article as a single leaf when it has no nested readable block', () => {
    document.body.innerHTML = '<article>Bare text, no paragraphs inside.</article>';
    const segments = extractParagraphs(document);
    expect(segments).toHaveLength(1);
    expect(segments[0]?.tag).toBe('article');
  });

  it('drops whitespace-only blocks so indices stay aligned with the cleaned chunks', () => {
    document.body.innerHTML = '<p>   </p>\n<p></p>\n<p>Real</p>';
    const segments = extractParagraphs(document);
    expect(segments.map((s) => s.text)).toEqual(['Real']);
  });

  it('returns the live DOM element for each segment', () => {
    document.body.innerHTML = '<p>Hello</p>';
    const segments = extractParagraphs(document);
    expect(segments[0]?.element).toBe(document.querySelector('p'));
  });
});
