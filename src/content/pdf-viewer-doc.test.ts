// @vitest-environment happy-dom
import { describe, expect, it } from 'vitest';
import { isPdfViewerDocument } from './pdf-viewer-doc';

function docWith(bodyHtml: string): Document {
  const doc = document.implementation.createHTMLDocument();
  doc.body.innerHTML = bodyHtml;
  return doc;
}

describe('isPdfViewerDocument', () => {
  function withContentType(mime: string): Document {
    const doc = document.implementation.createHTMLDocument();
    Object.defineProperty(doc, 'contentType', { value: mime });
    return doc;
  }

  it('detects the native viewer by document.contentType even with an empty body', () => {
    const doc = withContentType('application/pdf');
    expect(doc.body?.children.length ?? 0).toBe(0); // Kelly: body is empty
    expect(isPdfViewerDocument(doc)).toBe(true);
  });

  it('ignores contentType on ordinary HTML documents', () => {
    expect(isPdfViewerDocument(withContentType('text/html'))).toBe(false);
  });

  it('recognises the plugin-only viewer structure (sole embed, no text)', () => {
    expect(isPdfViewerDocument(docWith('<embed type="application/pdf">'))).toBe(true);
  });

  it('recognises an embed wrapped in empty containers as the viewer', () => {
    expect(isPdfViewerDocument(docWith('<div><embed type="application/pdf"></div>'))).toBe(true);
  });

  it("does not match an article that merely embeds a PDF (Mary's false positive)", () => {
    const doc = docWith('<article><p>Readable text</p><embed type="application/pdf"></article>');
    expect(isPdfViewerDocument(doc)).toBe(false);
  });

  it('does not match ordinary readable HTML', () => {
    expect(isPdfViewerDocument(docWith('<article><p>Plain text.</p></article>'))).toBe(false);
  });

  it('does not match pages without a PDF embed, even with no text', () => {
    expect(isPdfViewerDocument(docWith('<div></div>'))).toBe(false);
  });

  it('treats a bodyless document as not a viewer document', () => {
    const doc = document.implementation.createHTMLDocument();
    doc.removeChild(doc.documentElement);
    expect(isPdfViewerDocument(doc)).toBe(false);
  });
});
