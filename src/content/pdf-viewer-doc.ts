/**
 * Detect Chrome's native PDF viewer document. Chrome hosts it as an ordinary
 * top-level HTML document containing a plugin embed, so content scripts
 * inject and messaging succeeds — but there is no readable article text.
 * The messaging router uses this to decline honestly, which drives the
 * popup's existing "This page cannot be read" path and its explicit
 * "Read as PDF…" rescue action.
 */
export function isPdfViewerDocument(doc: Document): boolean {
  return doc.querySelector('embed[type^="application/pdf"]') !== null;
}
