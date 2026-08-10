// @vitest-environment happy-dom
import { describe, expect, it } from 'vitest';
import { nearestReadable } from './nearest-readable';

function para(id: string): HTMLParagraphElement {
  const p = document.createElement('p');
  p.id = id;
  p.textContent = `paragraph ${id}`;
  return p;
}

describe('nearestReadable', () => {
  it('returns the target itself when it is readable', () => {
    const a = para('a');
    document.body.append(a);

    expect(nearestReadable(a, [a])).toBe(a);
  });

  it('returns the nearest readable ancestor when the target is nested inside it', () => {
    const article = para('article');
    const span = document.createElement('span');
    span.textContent = 'nested';
    article.append(span);
    document.body.append(article);

    expect(nearestReadable(span, [article])).toBe(article);
  });

  it('returns null when no ancestor is readable', () => {
    const a = para('a');
    const b = para('b');
    document.body.append(a, b);

    // 'a' is not readable, and neither is any of its ancestors
    expect(nearestReadable(a, [b])).toBeNull();
  });

  it('does not match a readable sibling', () => {
    const a = para('a');
    const b = para('b');
    document.body.append(a, b);

    // b is readable but is a sibling of a, not an ancestor
    expect(nearestReadable(a, [b])).toBeNull();
  });

  it('prefers the closest readable ancestor over a more distant one', () => {
    const outer = para('outer');
    const inner = para('inner');
    const leaf = document.createElement('span');
    inner.append(leaf);
    outer.append(inner);
    document.body.append(outer);

    expect(nearestReadable(leaf, [outer, inner])).toBe(inner);
  });
});
