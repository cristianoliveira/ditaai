// chrome.storage.local adapter for SubstitutionSource.
// Persists the user's pronunciation dictionary (global in v1). Raw stored data
// is sanitized at the boundary so malformed entries never reach the matcher.

import {
  type SubstitutionSource,
  type Substitutions,
  sanitizeSubstitutions,
} from '../../domain/document/substitutions';

export const SUBSTITUTIONS_KEY = 'pronunciations';

export class ChromeSubstitutionStorage implements SubstitutionSource {
  async load(): Promise<Substitutions> {
    const stored = await chrome.storage.local.get(SUBSTITUTIONS_KEY);
    return sanitizeSubstitutions(stored[SUBSTITUTIONS_KEY]);
  }
}
