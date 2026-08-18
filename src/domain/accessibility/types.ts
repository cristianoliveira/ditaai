// Browser-neutral accessibility tree types for the picker.
//
// CDP shapes never leave the infra adapter (infra/chrome). Content, domain and
// ui receive only these normalized types. Node ids are session-only and are
// NEVER persisted — persistence uses anchor selector + locator fingerprint.

/** Viewport-space rectangle. */
export interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

/** Normalized accessibility node (see TASK-0001 domain contract). */
export interface AccessibilityPickerNode {
  /** Session-only AX node id. Never persisted. */
  id: string;
  /** Correlates to the backing DOM node for stable anchors. Undefined for text nodes on some engines. */
  backendDOMNodeId?: number;
  /** Normalized role; 'Ignored' for ignored wrappers. */
  role: string;
  /** Accessible name, when present. */
  name?: string;
  /** Accessible value, when present. */
  value?: string;
  /** Present when the node itself is text content (StaticText). */
  staticText?: string;
  /** Curated computed properties (level, focusable, url, ...). */
  properties: ReadonlyArray<{ name: string; value: string }>;
  parentId?: string;
  childIds: readonly string[];
  /** Visual bounds; a multi-line text node yields one rect per line. Empty = unknown. */
  bounds: readonly Rect[];
}

/** Full-tree snapshot. JSON-serializable: crosses chrome.runtime.sendMessage. */
export interface AccessibilitySnapshot {
  nodes: readonly AccessibilityPickerNode[];
}

/**
 * Port: accessibility tree access for the picker.
 *
 * Implementations live in infra (Chrome debugger CDP adapter, background
 * service worker). The fake (fake-tree.ts) serves picker unit tests.
 */
export interface AccessibilityTreePort {
  /** Attach and return the current snapshot. Throws AccessibilityConflictError when another debugger owns the tab. */
  open(): Promise<AccessibilitySnapshot>;
  /** Refresh the snapshot after page changes. */
  refresh(): Promise<AccessibilitySnapshot>;
  /** Normalized node under the viewport point, or null when none. */
  hitTest(point: { x: number; y: number }): Promise<AccessibilityPickerNode | null>;
  /** Multi-rectangle bounds for a node id. */
  bounds(nodeId: string): Promise<readonly Rect[]>;
  /** Detach. Must be idempotent and called on every terminal path. */
  close(): Promise<void>;
}

/** Another debugger (DevTools or extension) owns the tab. */
export class AccessibilityConflictError extends Error {
  constructor(message = 'Another debugger is already attached to this tab') {
    super(message);
    this.name = 'AccessibilityConflictError';
  }
}

/** Accessibility mode is unavailable (unsupported browser, no debugger API). */
export class AccessibilityUnavailableError extends Error {
  constructor(message = 'Accessibility mode is unavailable in this browser') {
    super(message);
    this.name = 'AccessibilityUnavailableError';
  }
}
