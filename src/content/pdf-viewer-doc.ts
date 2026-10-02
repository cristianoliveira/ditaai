/**
 * Detect Chrome's native PDF viewer document.
 *
 * Primary signal (Kelly's acceptance finding): the viewer document reports
 * `contentType === 'application/pdf'` — DOM-independent, works headless and
 * headed, even when the viewer body is completely empty (no embed, no iframe).
 *
 * Secondary signal for plugin-shaped hosts: an ordinary document whose body
 * carries only a plugin embed (and no readable text — `<embed>` is void and
 * never contributes text). An ordinary article that merely embeds a PDF
 * preview stays readable and is never declined.
 *
 * The messaging router uses this to decline honestly, which drives the
 * popup's existing "This page cannot be read" path and its explicit
 * "Read as PDF…" rescue action.
 */
export function isPdfViewerDocument(doc: Document): boolean {
  if (doc.contentType === 'application/pdf') return true;
  if (!doc.body) return false;
  if (!doc.querySelector('embed[type^="application/pdf"]')) return false;
  return (doc.body.textContent?.trim().length ?? 0) === 0;
}
