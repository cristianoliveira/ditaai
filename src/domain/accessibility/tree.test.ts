import { describe, expect, it } from 'vitest';
import { buildTreeIndex, candidateChain, isNarratable, navigate, orderedStaticText } from './tree';
import type { AccessibilityPickerNode } from './types';

/** Screenshot-shaped helper: article > wrapper(ignored) > paragraphs with StaticText. */
function fixtureNodes(): AccessibilityPickerNode[] {
  const n = (
    partial: Partial<AccessibilityPickerNode> & { id: string },
  ): AccessibilityPickerNode => ({
    role: 'Ignored',
    properties: [],
    childIds: [],
    bounds: [{ x: 0, y: 0, width: 10, height: 10 }],
    ...partial,
  });
  return [
    n({ id: 'root', role: 'RootWebArea', name: 'Page' }),
    n({ id: 'main', role: 'main', parentId: 'root' }),
    n({ id: 'article', role: 'article', name: '', parentId: 'main' }),
    n({ id: 'wrap', parentId: 'article' }),
    n({ id: 'p1', role: 'paragraph', parentId: 'wrap' }),
    n({ id: 'p1a', role: 'StaticText', staticText: 'The landscape in the south ', parentId: 'p1' }),
    n({ id: 'p1em', role: 'emphasis', parentId: 'p1' }),
    n({ id: 'p1emT', role: 'StaticText', staticText: 'is unforgiving', parentId: 'p1em' }),
    n({ id: 'p1b', role: 'StaticText', staticText: ', they are solitary men', parentId: 'p1' }),
    n({ id: 'p2', role: 'paragraph', parentId: 'wrap' }),
    n({ id: 'p2a', role: 'StaticText', staticText: 'In 2018', parentId: 'p2' }),
    n({ id: 'figure', role: 'figure', parentId: 'wrap' }),
    n({ id: 'img', role: 'image', name: 'Gaucho on a ridge', parentId: 'figure' }),
    n({ id: 'button', role: 'button', name: 'Search', parentId: 'main' }),
    // whitespace-only static text must not count as narratable
    n({ id: 'ws', role: 'StaticText', staticText: '  \n', parentId: 'button' }),
  ];
}

describe('buildTreeIndex', () => {
  it('registers every node by id with derived children', () => {
    const index = buildTreeIndex(fixtureNodes());
    expect(index.get('p1')?.childIds).toEqual(['p1a', 'p1em', 'p1b']);
  });

  it('tolerates dangling parent references', () => {
    const base = fixtureNodes();
    const main = base.find((node) => node.id === 'main');
    if (!main) throw new Error('main missing');
    const index = buildTreeIndex([...base, { ...main, parentId: 'nope' }]);
    expect(index.get('main')?.parentId).toBe('nope');
    expect(index.get('nope')).toBeUndefined();
  });
});

describe('orderedStaticText', () => {
  it('collects static text depth-first in child order', () => {
    const index = buildTreeIndex(fixtureNodes());
    expect(orderedStaticText(index, 'p1')).toEqual([
      'The landscape in the south ',
      'is unforgiving',
      ', they are solitary men',
    ]);
  });

  it('walks an ignored wrapper subtree like the screenshot pick', () => {
    const index = buildTreeIndex(fixtureNodes());
    expect(orderedStaticText(index, 'wrap')).toHaveLength(4);
  });

  it('skips whitespace-only static text', () => {
    const index = buildTreeIndex(fixtureNodes());
    expect(orderedStaticText(index, 'button')).toEqual([]);
  });

  it('caps traversal for large subtrees', () => {
    const big: AccessibilityPickerNode[] = [];
    big.push({ id: 'root', role: 'RootWebArea', properties: [], childIds: [], bounds: [] });
    for (let i = 0; i < 5_000; i++) {
      big.push({
        id: `t${i}`,
        role: 'StaticText',
        staticText: `t${i}`,
        properties: [],
        childIds: [],
        bounds: [],
        parentId: 'root',
      });
    }
    const index = buildTreeIndex(big);
    const out = orderedStaticText(index, 'root', { maxNodes: 1000 });
    expect(out.length).toBeLessThanOrEqual(1000);
  });

  it('returns empty for unknown node', () => {
    const index = buildTreeIndex(fixtureNodes());
    expect(orderedStaticText(index, 'ghost')).toEqual([]);
  });
});

describe('navigate', () => {
  it('up returns the accessibility parent', () => {
    const index = buildTreeIndex(fixtureNodes());
    expect(navigate(index, 'p1', 'up')).toBe('wrap');
  });

  it('up from root returns null', () => {
    const index = buildTreeIndex(fixtureNodes());
    expect(navigate(index, 'root', 'up')).toBeNull();
  });

  it('down returns the first child', () => {
    const index = buildTreeIndex(fixtureNodes());
    expect(navigate(index, 'p1', 'down')).toBe('p1a');
  });

  it('down without children returns null', () => {
    const index = buildTreeIndex(fixtureNodes());
    expect(navigate(index, 'p1a', 'down')).toBeNull();
  });

  it('left/right move between siblings', () => {
    const index = buildTreeIndex(fixtureNodes());
    expect(navigate(index, 'p1em', 'right')).toBe('p1b');
    expect(navigate(index, 'p1b', 'left')).toBe('p1em');
  });

  it('left/right beyond ends return null', () => {
    const index = buildTreeIndex(fixtureNodes());
    expect(navigate(index, 'p1a', 'left')).toBeNull();
    expect(navigate(index, 'p1b', 'right')).toBeNull();
  });
});

describe('isNarratable', () => {
  it('true when subtree has non-empty static text', () => {
    const index = buildTreeIndex(fixtureNodes());
    expect(isNarratable(index, 'wrap')).toBe(true);
  });

  it('false for controls and image-only subtrees', () => {
    const index = buildTreeIndex(fixtureNodes());
    expect(isNarratable(index, 'button')).toBe(false);
    expect(isNarratable(index, 'figure')).toBe(false);
  });

  it('false for unknown node', () => {
    const index = buildTreeIndex(fixtureNodes());
    expect(isNarratable(index, 'ghost')).toBe(false);
  });
});

describe('candidateChain', () => {
  it('lists ancestors from closest to root, then first children', () => {
    const index = buildTreeIndex(fixtureNodes());
    const chain = candidateChain(index, 'p1');
    expect(chain.map((n) => n.id)).toEqual([
      'wrap',
      'article',
      'main',
      'root',
      'p1a',
      'p1em',
      'p1b',
    ]);
  });
});
