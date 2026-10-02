/**
 * Semantic "could this page be narrated?" signal, computed with the same
 * paragraph extraction the page player itself uses. Deliberately NOT inferred
 * from playback state: an idle-but-readable article and a blank page both sit
 * at playing=false/paused=false, and only this content-derived flag tells
 * them apart (the popup's rescue-CTA gate depends on the distinction).
 */
import { extractParagraphs } from './paragraph-extractor';

export function hasReadableContent(root: ParentNode = document): boolean {
  return extractParagraphs(root).length > 0;
}
