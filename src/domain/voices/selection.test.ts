import { describe, expect, it } from 'vitest';
import { resolveSelectedVoiceId } from './selection';

describe('resolveSelectedVoiceId', () => {
  it('keeps the selected voice when it is installed', () => {
    expect(resolveSelectedVoiceId('F2', ['M1', 'F2'])).toBe('F2');
  });

  it('falls back deterministically to the first installed catalog voice', () => {
    expect(resolveSelectedVoiceId('F2', ['M1', 'M2'])).toBe('M1');
  });

  it('returns null when no voice is installed', () => {
    expect(resolveSelectedVoiceId('M1', [])).toBeNull();
  });
});
