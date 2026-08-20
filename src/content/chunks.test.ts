// @vitest-environment happy-dom
import { afterEach, describe, expect, it } from 'vitest';
import { buildChunks, paragraphBreakpoints, paragraphOptions } from './chunks';

describe('buildChunks', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('keeps cleaned text aligned with its source element', () => {
    document.body.innerHTML = '<p>  First\n paragraph. </p><p>   </p>';
    const paragraph = document.querySelector('p');

    expect(buildChunks(document)).toEqual([
      { text: 'First paragraph.', element: paragraph, base: 0 },
    ]);
  });

  it('applies pronunciation substitutions and simplifies links', () => {
    document.body.innerHTML = '<p>ZSH: https://www.example.com.</p>';

    expect(buildChunks(document, { ZSH: 'zee shell' })).toMatchObject([
      { text: 'zee shell: link to site example.com.' },
    ]);
  });

  it('preserves offsets in the cleaned source text after splitting', () => {
    const longPrefix = 'a'.repeat(300);
    document.body.innerHTML = `<p>${longPrefix} tail</p>`;

    expect(buildChunks(document).map(({ text, base }) => ({ text, base }))).toEqual([
      { text: longPrefix, base: 0 },
      { text: 'tail', base: 301 },
    ]);
  });
});

describe('paragraph chunk metadata', () => {
  const first = document.createElement('p');
  const second = document.createElement('p');
  const chunks = [
    { text: 'First part', element: first, base: 0 },
    { text: 'Second part', element: first, base: 11 },
    { text: 'Final paragraph', element: second, base: 0 },
  ];

  it('uses the first chunk of each source paragraph as a breakpoint', () => {
    expect(paragraphBreakpoints(chunks)).toEqual([0, 2]);
  });

  it('labels each paragraph from its first chunk preview', () => {
    expect(paragraphOptions(chunks, [0, 2])).toEqual([
      { value: 0, label: '¶ 1 — First part' },
      { value: 1, label: '¶ 2 — Final paragraph' },
    ]);
  });
});
