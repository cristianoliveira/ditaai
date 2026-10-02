/**
 * Detect Chrome's native PDF viewer document. Chrome hosts it as an ordinary
 * top-level HTML document whose body contains only a plugin embed, so content
 * scripts inject and messaging succeeds — but there is no readable text.
 *
 * `<embed>` is a void element: it never contributes text content. So the
 * document qualifies only when a PDF embed exists AND the body carries no
 * readable text of its own. An ordinary article that merely EMBEDS a PDF
 * preview stays readable and is never declined.
 *
 * The messaging router uses this to decline honestly, which drives the
 * popup's existing "This page cannot be read" path and its explicit
 * "Read as PDF…" rescue action.
 */
export function isPdfViewerDocument(doc: Document): boolean {
  if (!doc.body) return false;
  if (!doc.querySelector('embed[type^="application/pdf"]')) return false;
  return (doc.body.textContent?.trim().length ?? 0) === 0;
}
