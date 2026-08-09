// @vitest-environment happy-dom
import { afterEach, describe, expect, it } from 'vitest';
import type { ParagraphSegment } from '../../content/paragraph-extractor';
import { buildCandidates, filterParagraphs } from './selection';

describe('buildCandidates', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('generates tag-only selector as first candidate', () => {
    document.body.innerHTML = '<p>hello</p>';
    const p = document.querySelector('p');
    if (!p) throw new Error('p not found');
    const candidates = buildCandidates(p);

    expect(candidates[0]).toBe('p');
  });

  it('generates tag.class when element has classes', () => {
    document.body.innerHTML = '<p class="intro highlight">hello</p>';
    const p = document.querySelector('p');
    if (!p) throw new Error('p not found');
    const candidates = buildCandidates(p);

    expect(candidates).toContain('p.intro');
    expect(candidates).toContain('p.highlight');
  });

  it('generates parent > child selectors', () => {
    document.body.innerHTML = `
      <div><p><span class="name">target</span></p></div>
      <main><span>other</span></main>`;
    const span = document.querySelector('.name');
    if (!span) throw new Error('span not found');
    const candidates = buildCandidates(span);

    expect(candidates).toContain('span.name');
    expect(candidates).toContain('p > span.name');
    expect(candidates).toContain('div > p > span.name');
  });

  it('stops walking up at 3 levels', () => {
    document.body.innerHTML = `
      <div><div><div><div><div><p class="deep">x</p></div></div></div></div></div>`;
    const p = document.querySelector('.deep');
    if (!p) throw new Error('p not found');
    const candidates = buildCandidates(p);

    const pathCandidates = candidates.filter((c) => c.includes('>'));
    for (const c of pathCandidates) {
      const depth = c.split('>').length;
      expect(depth).toBeLessThanOrEqual(4); // element + up to 3 ancestors
    }
  });

  it('includes tag.class even when multiple elements share the class', () => {
    document.body.innerHTML = `
      <div class="item">a</div><div class="item">b</div><div class="item">c</div>`;
    const div = document.querySelector('.item');
    if (!div) throw new Error('div not found');
    const candidates = buildCandidates(div);

    // div.item is included even though it matches 3 elements;
    // the match count in the UI lets the user decide.
    expect(candidates).toContain('div.item');
  });

  it('generates at least 2 candidates and at most 10', () => {
    document.body.innerHTML = '<p>hello</p>';
    const p = document.querySelector('p');
    if (!p) throw new Error('p not found');
    const candidates = buildCandidates(p);

    expect(candidates.length).toBeGreaterThanOrEqual(2);
    expect(candidates.length).toBeLessThanOrEqual(10);
  });

  it('sorts candidates from broadest to most specific', () => {
    document.body.innerHTML = `
      <p class="a">1</p>
      <p class="a b">2</p>
    `;
    const p = document.querySelector('.a.b');
    if (!p) throw new Error('p not found');
    const candidates = buildCandidates(p);

    const pIndex = candidates.indexOf('p');
    const pAIndex = candidates.indexOf('p.a');
    const pBIndex = candidates.indexOf('p.b');
    const pAbIndex = candidates.indexOf('p.a.b');

    // p (most matches) should come before p.a.b (fewest matches)
    expect(pIndex).toBeLessThan(pAbIndex);
    expect(pAIndex).toBeLessThan(pAbIndex);
    expect(pBIndex).toBeLessThan(pAbIndex);
  });

  it('includes combined class selector when element has multiple classes', () => {
    document.body.innerHTML = '<p class="intro highlight">hello</p>';
    const p = document.querySelector('p');
    if (!p) throw new Error('p not found');
    const candidates = buildCandidates(p);

    expect(candidates).toContain('p.intro');
    expect(candidates).toContain('p.highlight');
    expect(candidates).toContain('p.intro.highlight');
  });

  it('includes ID-based selector when element has an id', () => {
    document.body.innerHTML = '<p id="post-42">hello</p>';
    const p = document.querySelector('#post-42');
    if (!p) throw new Error('p not found');
    const candidates = buildCandidates(p);

    expect(candidates).toContain('#post-42');
  });

  it('each candidate matches the target element', () => {
    document.body.innerHTML = `
      <article><div class="box"><p class="text">target</p></div>
      <p class="text">not target</p></article>`;
    const p = document.querySelector('.box p');
    if (!p) throw new Error('p not found');
    const candidates = buildCandidates(p);

    for (const candidate of candidates) {
      expect(p.matches(candidate), `"${candidate}" should match target`).toBe(true);
    }
  });

  it('each candidate matches the target element', () => {
    document.body.innerHTML = `
      <article><div class="box"><p class="text">target</p></div>
      <p class="text">not target</p></article>`;
    const p = document.querySelector('.box p');
    if (!p) throw new Error('p not found');
    const candidates = buildCandidates(p);

    for (const candidate of candidates) {
      expect(p.matches(candidate), `"${candidate}" should match target`).toBe(true);
    }
  });
});

describe('filterParagraphs', () => {
  it('keeps only paragraphs whose element matches the CSS selector', () => {
    const el1 = document.createElement('p');
    el1.className = 'keep';
    const el2 = document.createElement('p');
    el2.className = 'drop';

    const paragraphs: ParagraphSegment[] = [
      { text: 'keep this', tag: 'p', element: el1 },
      { text: 'drop this', tag: 'p', element: el2 },
      { text: 'also keep', tag: 'p', element: el1 }, // same element, different chunk
    ];

    const result = filterParagraphs(paragraphs, '.keep');

    expect(result).toHaveLength(2);
    expect(result[0]?.text).toBe('keep this');
    expect(result[1]?.text).toBe('also keep');
  });

  it('returns empty array when no element matches', () => {
    const el = document.createElement('p');
    const paragraphs: ParagraphSegment[] = [{ text: 'nope', tag: 'p', element: el }];

    const result = filterParagraphs(paragraphs, '.nonexistent');

    expect(result).toHaveLength(0);
  });

  it('returns all paragraphs for a universal selector', () => {
    const el1 = document.createElement('p');
    const el2 = document.createElement('article');
    const paragraphs: ParagraphSegment[] = [
      { text: 'a', tag: 'p', element: el1 },
      { text: 'b', tag: 'article', element: el2 },
    ];

    const result = filterParagraphs(paragraphs, '*');

    expect(result).toHaveLength(2);
  });

  it('handles empty paragraphs array', () => {
    const result = filterParagraphs([], '.anything');
    expect(result).toHaveLength(0);
  });

  it('handles invalid CSS selector gracefully', () => {
    const el = document.createElement('p');
    const paragraphs: ParagraphSegment[] = [{ text: 'x', tag: 'p', element: el }];

    expect(() => filterParagraphs(paragraphs, '[invalid')).toThrow();
  });
});
