/** Find the nearest ancestor (inclusive) of `target` that appears in `readable`.
 *
 * Maps a click anywhere inside a paragraph to the readable paragraph element, so
 * a context-menu "listen from here" starts at the paragraph under the cursor
 * rather than at the top of the page. Returns null when no ancestor is readable. */
export function nearestReadable(target: Element, readable: Iterable<Element>): Element | null {
  const set = readable instanceof Set ? readable : new Set(readable);
  let el: Element | null = target;
  while (el) {
    if (set.has(el)) return el;
    el = el.parentElement;
  }
  return null;
}
