// Pure pronunciation substitution — no DOM dependency.
// Replaces standalone occurrences of configured words with a spoken-friendly
// form before text reaches TTS. Whole-token, case-insensitive: matches "ZSH",
// "zsh" or "Zsh" but never "ZSHELL". Lookarounds (not \b) keep symbol-laden
// keys like "C++" working, since \b sees no boundary after a non-word char.

export type Substitutions = Record<string, string>;

/** Port: supplies the pronunciation substitution dictionary (global in v1). */
export interface SubstitutionSource {
  load(): Promise<Substitutions>;
}

/** Coerce untrusted stored data into a valid Substitutions map. Drops
 * non-string values and empty keys so malformed storage (console edits,
 * stale sync) can never reach the matcher. */
export function sanitizeSubstitutions(raw: unknown): Substitutions {
  if (!raw || typeof raw !== 'object') return {};
  const out: Substitutions = {};
  for (const [key, value] of Object.entries(raw as Record<string, unknown>)) {
    if (key.length > 0 && typeof value === 'string') out[key] = value;
  }
  return out;
}

/** Replace standalone configured words with their spoken form. Deterministic:
 * when one key is a prefix of another (e.g. SQL / SQLite), the longest match
 * wins. Empty or no substitutions returns the text untouched. */
export function applySubstitutions(text: string, substitutions: Substitutions = {}): string {
  const keys = Object.keys(substitutions).filter((key) => key.length > 0);
  if (keys.length === 0) return text;

  const lookup: Record<string, string> = {};
  for (const [key, value] of Object.entries(substitutions)) lookup[key.toLowerCase()] = value;

  const alternation = keys
    .slice()
    .sort((a, b) => b.length - a.length)
    .map(escapeRegExp)
    .join('|');
  const pattern = new RegExp(`(?<!\\w)(?:${alternation})(?!\\w)`, 'gi');

  return text.replace(pattern, (match) => lookup[match.toLowerCase()] ?? match);
}

function escapeRegExp(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
