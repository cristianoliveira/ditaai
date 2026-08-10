/** Minimal view of a spoken chunk for word-location purposes. */
export interface ChunkLike {
  text: string;
  element: Element;
}

/** Find the first chunk belonging to `element` whose text contains `word`.
 *
 * Returns the chunk index (global, across all chunks) and the char offset of
 * the word within that chunk's text, so playback can resume from a selected
 * word rather than the start of its paragraph. Returns null when the word is
 * not found in any chunk of the element. */
export function locateWord(
  chunks: ChunkLike[],
  word: string,
  element: Element,
): { index: number; char: number } | null {
  const needle = word.trim();
  if (!needle) return null;
  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    if (!chunk || chunk.element !== element) continue;
    const at = chunk.text.indexOf(needle);
    if (at >= 0) return { index: i, char: at };
  }
  return null;
}
