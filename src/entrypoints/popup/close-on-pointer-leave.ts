/**
 * Close the extension popup as soon as the pointer leaves it.
 *
 * The popup window is a separate document: a `mouseout` whose
 * `relatedTarget` is null means the pointer left the window entirely.
 * Closing the popup never touches playback — narration runs on the page's
 * content script, so the audio keeps playing while the popup hides.
 */
export function closeOnPointerLeave(doc: Document, close: () => void): void {
  let closed = false;
  const dismiss = (): void => {
    if (closed) return;
    closed = true;
    close();
  };

  doc.documentElement.addEventListener('mouseout', (event: MouseEvent) => {
    if (event.relatedTarget === null) dismiss();
  });
}
