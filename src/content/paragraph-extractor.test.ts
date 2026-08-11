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

  it('falls back to leaf content containers when a page has no semantic text blocks', () => {
    document.body.innerHTML = `
      <main>
        <div class="story"><span>Page text inside a generic app container.</span></div>
      </main>`;

    const segments = extractParagraphs(document);

    expect(segments.map((s) => s.text)).toEqual(['Page text inside a generic app container.']);
    expect(segments[0]?.element).toBe(document.querySelector('.story'));
  });

  it('does not narrate controls when using generic container fallback', () => {
    document.body.innerHTML = `
      <div><button>Buy now</button></div>
      <div><span>Story content.</span></div>`;

    expect(extractParagraphs(document).map((s) => s.text)).toEqual(['Story content.']);
  });

  it('returns the live DOM element for each segment', () => {
    document.body.innerHTML = '<p>Hello</p>';
    const segments = extractParagraphs(document);
    expect(segments[0]?.element).toBe(document.querySelector('p'));
  });

  // ── Accessible names (image alts + aria-labels) ─────────────────────

  it('narrates standalone images with alt as segments in document order', () => {
    document.body.innerHTML = `
      <p>First paragraph.</p>
      <img alt="Quarterly revenue chart">
      <p>Second paragraph.</p>`;
    const segments = extractParagraphs(document);
    expect(segments.map((s) => s.tag)).toEqual(['p', 'img', 'p']);
    expect(segments.map((s) => s.text)).toEqual([
      'First paragraph.',
      'Image: Quarterly revenue chart',
      'Second paragraph.',
    ]);
  });

  it('skips decorative images (empty or missing alt)', () => {
    document.body.innerHTML = `
      <p>Real content.</p>
      <img alt="">
      <img>
      <img alt="   ">`;
    expect(extractParagraphs(document).map((s) => s.text)).toEqual(['Real content.']);
  });

  it('narrates an image inside a paragraph without losing the paragraph text', () => {
    document.body.innerHTML = '<p>See <img alt="the chart"> below.</p>';
    const segments = extractParagraphs(document);
    // raw textContent keeps the double space; collapseWhitespace normalizes it later
    expect(segments.map((s) => s.text)).toEqual(['See  below.', 'Image: the chart']);
  });

  it('skips images inside boilerplate and aria-hidden subtrees', () => {
    document.body.innerHTML = `
      <nav><img alt="Logo"></nav>
      <div aria-hidden="true"><img alt="Hidden chart"></div>
      <main><img alt="Visible chart"></main>`;
    expect(extractParagraphs(document).map((s) => s.text)).toEqual(['Image: Visible chart']);
  });

  it('narrates aria-label as the accessible name when the element has no visible text', () => {
    document.body.innerHTML = `
      <p>Story.</p>
      <div aria-label="Quarterly revenue chart"><svg></svg></div>`;
    const segments = extractParagraphs(document);
    expect(segments.map((s) => s.text)).toEqual(['Story.', 'Quarterly revenue chart']);
    expect(segments[1]?.tag).toBe('div');
  });

  it('does not duplicate visible text when aria-label is also present', () => {
    document.body.innerHTML = '<p aria-label="Ignored label">Visible text.</p>';
    expect(extractParagraphs(document).map((s) => s.text)).toEqual(['Visible text.']);
  });

  it('does not narrate form controls even when they carry aria-label', () => {
    document.body.innerHTML = `
      <button aria-label="Close">×</button>
      <input aria-label="Search">
      <p>Story.</p>`;
    expect(extractParagraphs(document).map((s) => s.text)).toEqual(['Story.']);
  });

  it('interleaves paragraphs and accessible names in document order', () => {
    document.body.innerHTML = `
      <img alt="Hero">
      <p>Intro.</p>
      <div aria-label="Key insight"><svg></svg></div>
      <p>Outro.</p>`;
    expect(extractParagraphs(document).map((s) => s.text)).toEqual([
      'Image: Hero',
      'Intro.',
      'Key insight',
      'Outro.',
    ]);
  });

  it('includes accessible names when falling back to generic containers', () => {
    document.body.innerHTML = `
      <main>
        <div class="story"><span>Page text.</span></div>
        <img alt="Chart">
      </main>`;
    expect(extractParagraphs(document).map((s) => s.text)).toEqual(['Page text.', 'Image: Chart']);
  });
});
