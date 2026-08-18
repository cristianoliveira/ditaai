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

function isPlausibleSelector(raw: string): boolean {
  // CSS selectors never start with a digit; anything else is a plausible legacy value.
  // Truly invalid selectors degrade safely downstream (filterParagraphs guards).
  return !/^[0-9]/.test(raw);
}

function isAccessibilityLocator(value: unknown): value is AccessibilityLocator {
  if (typeof value !== 'object' || value === null) return false;
  const locator = value as Record<string, unknown>;
  return (
    typeof locator['firstStaticPrefix'] === 'string' && Number.isFinite(locator['staticCount'])
  );
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
    if (typeof parsed !== 'object' || parsed === null) return null;
    return parseScopeObject(parsed as Record<string, unknown>);
  }

  // legacy bare selector (JSON scalars from malformed writes are rejected)
  if (!isPlausibleSelector(raw)) return null;
  return { source: 'dom', selector: raw };
}

function parseScopeObject(scope: Record<string, unknown>): ReadScope | null {
  const keys = Object.keys(scope);

  if (scope['source'] === 'dom') {
    const selector = scope['selector'];
    if (keys.length !== 2 || typeof selector !== 'string' || selector.trim() === '') {
      return null;
    }
    return { source: 'dom', selector };
  }

  if (scope['source'] === 'accessibility') {
    const anchorSelector = scope['anchorSelector'];
    if (keys.length !== 3 || typeof anchorSelector !== 'string') return null;
    if (anchorSelector.trim() === '') return null;
    const locator = scope['locator'];
    if (!isAccessibilityLocator(locator)) return null;
    // unknown extra fields (e.g. a smuggled session-only id) invalidate the scope
    if (Object.keys(locator).length !== 2) return null;
    return {
      source: 'accessibility',
      anchorSelector,
      locator: { ...locator },
    };
  }

  return null;
}

/** Serialize a scope for storage. JSON always — the legacy format is write-only history. */
export function serializeScope(scope: ReadScope): string {
  return JSON.stringify(scope);
}
