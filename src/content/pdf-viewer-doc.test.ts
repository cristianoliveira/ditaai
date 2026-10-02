// @vitest-environment happy-dom
import { describe, expect, it } from 'vitest';
import { isPdfViewerDocument } from './pdf-viewer-doc';

describe('isPdfViewerDocument', () => {
  it('recognises Chrome native PDF viewer documents by their plugin embed', () => {
    const doc = document.implementation.createHTMLDocument();
    const embed = doc.createElement('embed');
    embed.setAttribute('type', 'application/pdf');
    doc.body.append(embed);
    expect(isPdfViewerDocument(doc)).toBe(true);
  });

  it('recognises ordinary readable HTML as not a PDF viewer document', () => {
    const doc = document.implementation.createHTMLDocument();
    const article = doc.createElement('article');
    article.textContent = 'Ordinary readable text.';
    doc.body.append(article);
    expect(isPdfViewerDocument(doc)).toBe(false);
  });

  it('treats an empty document as not a PDF viewer document', () => {
    const doc = document.implementation.createHTMLDocument();
    expect(isPdfViewerDocument(doc)).toBe(false);
  });
});
