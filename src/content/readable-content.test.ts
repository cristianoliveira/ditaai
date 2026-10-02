// @vitest-environment happy-dom
import { describe, expect, it } from 'vitest';
import { hasReadableContent } from './readable-content';

function docWith(bodyHtml: string): Document {
  const doc = document.implementation.createHTMLDocument();
  doc.body.innerHTML = bodyHtml;
  return doc;
}

describe('hasReadableContent', () => {
  it('recognises an ordinary article as readable', () => {
    expect(
      hasReadableContent(docWith('<article><p>Orchids bloom in the spring.</p></article>')),
    ).toBe(true);
  });

  it('recognises a blank page as having no readable content', () => {
    expect(hasReadableContent(docWith('<body></body>'))).toBe(false);
  });

  it('does not count a bare PDF embed as readable content', () => {
    expect(hasReadableContent(docWith('<embed type="application/pdf">'))).toBe(false);
  });

  it('treats whitespace-only pages as unreadable', () => {
    expect(hasReadableContent(docWith('<div>   </div>'))).toBe(false);
  });
});
