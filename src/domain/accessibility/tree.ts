// Pure accessibility-tree logic: index, ordered StaticText, navigation,
// narratability, candidate chains. No Chrome APIs, no DOM — index data comes
// from AccessibilitySnapshot (real adapter or fake).

import type { AccessibilityPickerNode } from './types';

export type TreeIndex = ReadonlyMap<string, AccessibilityPickerNode>;

const DEFAULT_MAX_NODES = 10_000;

/** Index a snapshot by node id. Children are declared in childIds and additionally derived from parentId links. */
export function buildTreeIndex(nodes: readonly AccessibilityPickerNode[]): TreeIndex {
  const index = new Map<string, AccessibilityPickerNode>();
  for (const node of nodes) index.set(node.id, node);
  // derive childIds from parentId (snapshots may omit childIds; spike finding)
  for (const node of nodes) {
    if (!node.parentId) continue;
    const parent = index.get(node.parentId);
    if (!parent) continue;
    if (parent.childIds.includes(node.id)) continue;
    index.set(parent.id, { ...parent, childIds: [...parent.childIds, node.id] });
  }
  return index;
}

function isNarratableText(text: string | undefined): text is string {
  return typeof text === 'string' && text.trim().length > 0;
}

/** Ordered, deduplicated StaticText under a node (depth-first, child order). */
export function orderedStaticText(
  index: TreeIndex,
  nodeId: string,
  options?: { maxNodes?: number },
): string[] {
  const maxNodes = options?.maxNodes ?? DEFAULT_MAX_NODES;
  const acc: string[] = [];
  const seen = new Set<string>();
  const stack: string[] = [nodeId];
  let visited = 0;

  while (stack.length > 0 && visited < maxNodes) {
    const id = stack.pop();
    if (id === undefined || seen.has(id)) continue;
    seen.add(id);
    visited += 1;

    const node = index.get(id);
    if (!node) continue;
    if (node.role === 'StaticText' && isNarratableText(node.staticText)) {
      acc.push(node.staticText);
    }
    // push reversed so children are visited in order (stack pops last first)
    for (let i = node.childIds.length - 1; i >= 0; i--) {
      const childId = node.childIds[i];
      if (childId !== undefined) stack.push(childId);
    }
  }
  return acc;
}

export type NavigationDirection = 'up' | 'down' | 'left' | 'right';

/** Walk the accessibility tree. Returns the target node id or null at an edge. */
export function navigate(
  index: TreeIndex,
  nodeId: string,
  direction: NavigationDirection,
): string | null {
  const node = index.get(nodeId);
  if (!node) return null;

  if (direction === 'up') return node.parentId ?? null;

  if (direction === 'down') return node.childIds[0] ?? null;

  // left/right: siblings = parent's children
  const parent = node.parentId ? index.get(node.parentId) : undefined;
  if (!parent) return null;
  const pos = parent.childIds.indexOf(nodeId);
  if (pos === -1) return null;

  if (direction === 'left') return pos > 0 ? (parent.childIds[pos - 1] ?? null) : null;
  const next = parent.childIds[pos + 1];
  return next ?? null;
}

/** A subtree is narratable when it contains non-empty static text. */
export function isNarratable(index: TreeIndex, nodeId: string): boolean {
  const seen = new Set<string>();
  const stack: string[] = [nodeId];
  while (stack.length > 0) {
    const id = stack.pop();
    if (id === undefined || seen.has(id)) continue;
    seen.add(id);
    const node = index.get(id);
    if (!node) continue;
    if (node.role === 'StaticText' && isNarratableText(node.staticText)) return true;
    for (const childId of node.childIds) stack.push(childId);
  }
  return false;
}

/** Candidate chain for picker chips: ancestors (closest → root), then first-ring children. */
export function candidateChain(index: TreeIndex, nodeId: string): AccessibilityPickerNode[] {
  const chain: AccessibilityPickerNode[] = [];

  let current = index.get(nodeId);
  while (current?.parentId) {
    const parent = index.get(current.parentId);
    if (!parent) break;
    chain.push(parent);
    current = parent;
  }

  const self = index.get(nodeId);
  if (self) {
    for (const childId of self.childIds) {
      const child = index.get(childId);
      if (child) chain.push(child);
    }
  }
  return chain;
}
