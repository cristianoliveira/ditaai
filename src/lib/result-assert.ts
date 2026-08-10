import type { Result } from './types';

/** Unwraps an ok Result in tests; throws with the error message otherwise. */
export function expectOk<T>(result: Result<T>): T {
  if (!result.ok) throw new Error(`expected ok result, got error: ${result.error.message}`);
  return result.value;
}

/** Unwraps an error Result in tests; throws if the result is ok. */
export function expectErr(result: Result<unknown>): Error {
  if (result.ok) throw new Error('expected error result, got ok');
  return result.error;
}
