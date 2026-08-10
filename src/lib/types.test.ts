import { describe, expect, it } from 'vitest';
import { expectErr, expectOk } from './result-assert';
import { err, ok } from './types';

describe('Result', () => {
  it('wraps an ok value', () => {
    expect(expectOk(ok(42))).toBe(42);
  });

  it('wraps an error', () => {
    expect(expectErr(err(new Error('boom'))).message).toBe('boom');
  });
});
