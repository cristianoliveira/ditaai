import { describe, expect, it } from 'vitest';
import { overallDownloadPercentage } from './download-progress';

describe('overallDownloadPercentage', () => {
  it('advances while the first model file downloads', () => {
    expect(overallDownloadPercentage(0, 25, 4)).toBe(6);
  });

  it('includes completed model files in the overall percentage', () => {
    expect(overallDownloadPercentage(2, 50, 4)).toBe(63);
  });

  it('clamps invalid transport progress to the visible range', () => {
    expect(overallDownloadPercentage(0, -10, 1)).toBe(0);
    expect(overallDownloadPercentage(0, 120, 1)).toBe(100);
  });
});
