import { describe, expect, it } from 'vitest';
import { resolveRotatingVoiceId, resolveSelectedVoiceId } from './selection';

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

  it('chooses an installed voice using the injected random value when rotation is enabled', () => {
    expect(resolveRotatingVoiceId('F2', ['M1', 'F2', 'M3'], () => 0.5)).toBe('F2');
  });

  it('falls back to the selected voice when rotation is disabled', () => {
    expect(resolveRotatingVoiceId('F2', ['M1', 'F2'], undefined)).toBe('F2');
  });
});
