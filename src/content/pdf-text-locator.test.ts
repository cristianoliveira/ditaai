// @vitest-environment happy-dom
import { describe, expect, it } from 'vitest';
import { domLayer, locateWord } from './pdf-text-locator';

describe('locateWord', () => {
  it('locates words inside a single span', () => {
    const result = locateWord(['Orchid opens ', 'the story.'], 'Orchid opens the story.', 13, 3);

    expect(result).toEqual({ span: 1, start: 0, length: 3 });
  });

  it('consumes separators between spans without shifting offsets', () => {
    const result = locateWord(['Orchid', 'opens', 'the story.'], 'Orchid opens the story.', 7, 5);

    expect(result).toEqual({ span: 1, start: 0, length: 5 });
  });

  it('aligns across whitespace-only spans and newline splits', () => {
    const result = locateWord(
      ['Orchid opens', '\n', 'the', ' ', 'story.'],
      'Orchid opens the story.',
      17,
      6,
    );

    expect(result).toEqual({ span: 4, start: 0, length: 6 });
  });

  it('matches a word whose span text ends with carried whitespace', () => {
    const result = locateWord(['Orchid opens \n'], 'Orchid opens the story.', 0, 6);

    expect(result).toEqual({ span: 0, start: 0, length: 6 });
  });

  it('refuses a word split across a span boundary instead of guessing', () => {
    const result = locateWord(['Orchid ope', 'ns the story.'], 'Orchid opens the story.', 7, 5);

    expect(result).toBeNull();
  });

  it('returns null for empty, out-of-range, or misaligned layers', () => {
    expect(locateWord([], 'text', 0, 2)).toBeNull();
    expect(locateWord(['text'], 'text', -1, 2)).toBeNull();
    expect(locateWord(['text'], 'text', 4, 1)).toBeNull();
    expect(locateWord(['totally different'], 'text', 0, 4)).toBeNull();
    expect(locateWord(['text'], 'text', 0, 0)).toBeNull();
  });
});

describe('domLayer', () => {
  function layerWith(...texts: string[]): HTMLElement {
    const layer = document.createElement('div');
    for (const text of texts) {
      const span = document.createElement('span');
      span.textContent = text;
      // Set inline width so both geometry styles work in tests.
      span.style.width = `${text.length * 10}px`;
      span.style.height = '12px';
      layer.append(span);
    }
    document.body.append(layer);
    return layer;
  }

  it('reads spans in DOM order', () => {
    const layer = layerWith('Orchid opens ', 'the story.');

    expect(domLayer(layer).spans()).toEqual(['Orchid opens ', 'the story.']);
  });

  it('overlays the requested word without mutating span text', () => {
    const layer = layerWith('Orchid opens ', 'the story.');
    const port = domLayer(layer);

    port.markWord(1, 0, 3);

    const mark = layer.querySelector('mark[data-active-word="true"]');
    expect(mark).not.toBeNull();
    expect(mark?.textContent).toBe('the');
    expect(mark?.className).toContain('dita-word-highlight');
    // Overlay positioning does not reflow the layer span.
    expect(layer.querySelectorAll('span')[1]?.textContent).toBe('the story.');
  });

  it('clears overlays without touching layer text', () => {
    const layer = layerWith('Orchid opens the story.');
    const port = domLayer(layer);
    port.markWord(0, 0, 6);
    expect(layer.querySelector('mark')).not.toBeNull();

    port.clearMarks();

    expect(layer.querySelector('mark')).toBeNull();
    expect(layer.querySelector('span')?.textContent).toBe('Orchid opens the story.');
  });
});
