import { describe, expect, it } from 'vitest';
import {
  DEFAULT_SYNTHESIS_QUALITY,
  SYNTHESIS_QUALITY_OPTIONS,
  clampSynthesisQuality,
  isSynthesisQuality,
} from './quality';

describe('SYNTHESIS_QUALITY_OPTIONS', () => {
  it('offers a monotonic set of denoising steps with labels', () => {
    const steps = SYNTHESIS_QUALITY_OPTIONS.map((option) => option.steps);
    expect(steps).toEqual([4, 8, 12, 16]);
    for (const option of SYNTHESIS_QUALITY_OPTIONS) {
      expect(option.label.length).toBeGreaterThan(0);
    }
  });

  it('includes the default quality', () => {
    expect(isSynthesisQuality(DEFAULT_SYNTHESIS_QUALITY)).toBe(true);
  });
});

describe('isSynthesisQuality', () => {
  it('accepts any documented step count', () => {
    expect(isSynthesisQuality(4)).toBe(true);
    expect(isSynthesisQuality(16)).toBe(true);
  });

  it('rejects out-of-range, fractional, and non-number values', () => {
    expect(isSynthesisQuality(2)).toBe(false);
    expect(isSynthesisQuality(7)).toBe(false);
    expect(isSynthesisQuality(20)).toBe(false);
    expect(isSynthesisQuality(8.5)).toBe(false);
    expect(isSynthesisQuality('8')).toBe(false);
    expect(isSynthesisQuality(undefined)).toBe(false);
  });
});

describe('clampSynthesisQuality', () => {
  it('returns the value when valid', () => {
    expect(clampSynthesisQuality(12)).toBe(12);
  });

  it('falls back to the default for invalid or missing values', () => {
    expect(clampSynthesisQuality(5)).toBe(DEFAULT_SYNTHESIS_QUALITY);
    expect(clampSynthesisQuality('fast')).toBe(DEFAULT_SYNTHESIS_QUALITY);
    expect(clampSynthesisQuality(undefined)).toBe(DEFAULT_SYNTHESIS_QUALITY);
  });
});
