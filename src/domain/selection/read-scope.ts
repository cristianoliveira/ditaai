// Discriminated read scope: what a confirmed picker session persists per hostname.
//
// Legacy values are bare selector strings — parseStoredScope migrates them to
// DOM scopes at the storage boundary so the runtime has ONE representation.
// AX node ids are session-only and must never be persisted (TASK-0001).

/** Stable evidence locating an accessibility subtree under a DOM anchor. */
export interface AccessibilityLocator {
  /** Bounded prefix of the first StaticText under the anchor. */
  firstStaticPrefix: string;
  /** StaticText count under the anchor — guards against partial re-resolution. */
  staticCount: number;
}

export type ReadScope =
  | { source: 'dom'; selector: string }
  | { source: 'accessibility'; anchorSelector: string; locator: AccessibilityLocator };

/** Declared-property view over parsed JSON — avoids index-signature access. */
interface StoredShape {
  source?: unknown;
  selector?: unknown;
  anchorSelector?: unknown;
  locator?: unknown;
  firstStaticPrefix?: unknown;
  staticCount?: unknown;
}

function asShape(value: unknown): StoredShape | null {
  return typeof value === 'object' && value !== null ? (value as StoredShape) : null;
}

function isPlausibleSelector(raw: string): boolean {
  // CSS selectors never start with a digit; anything else is a plausible legacy value.
  // Truly invalid selectors degrade safely downstream (filterParagraphs guards).
  return !/^[0-9]/.test(raw);
}

/** Parse a persisted scope: new JSON format, legacy selector string, or reject. */
export function parseStoredScope(raw: string | undefined | null): ReadScope | null {
  if (typeof raw !== 'string' || raw.trim() === '') return null;

  if (raw.startsWith('{') || raw.startsWith('[')) {
    let parsed: unknown;
    try {
      parsed = JSON.parse(raw);
    } catch {
      return null;
    }
    const scope = asShape(parsed);
    if (!scope) return null; // arrays, scalars, null
    return parseScopeObject(scope, Object.keys(scope));
  }

  // legacy bare selector (JSON scalars from malformed writes are rejected)
  if (!isPlausibleSelector(raw)) return null;
  return { source: 'dom', selector: raw };
}

function parseScopeObject(scope: StoredShape, keys: string[]): ReadScope | null {
  const { source } = scope;

  if (source === 'dom') {
    const { selector } = scope;
    if (keys.length !== 2 || typeof selector !== 'string' || selector.trim() === '') {
      return null;
    }
    return { source: 'dom', selector };
  }

  if (source === 'accessibility') {
    const { anchorSelector, locator } = scope;
    if (keys.length !== 3 || typeof anchorSelector !== 'string') return null;
    if (anchorSelector.trim() === '') return null;

    const locatorShape = asShape(locator);
    if (!locatorShape) return null;
    const { firstStaticPrefix, staticCount } = locatorShape;
    if (typeof firstStaticPrefix !== 'string') return null;
    if (!Number.isFinite(staticCount)) return null;
    // unknown extra fields (e.g. a smuggled session-only id) invalidate the scope
    if (Object.keys(locatorShape).length !== 2) return null;

    return {
      source: 'accessibility',
      anchorSelector,
      locator: { firstStaticPrefix, staticCount: staticCount as number },
    };
  }

  return null;
}

/** Serialize a scope for storage. JSON always — the legacy format is write-only history. */
export function serializeScope(scope: ReadScope): string {
  return JSON.stringify(scope);
}
