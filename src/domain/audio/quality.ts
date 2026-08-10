/**
 * Synthesis quality = number of denoising steps run by the Supertonic
 * vector estimator. More steps sound cleaner but take longer.
 */

export interface SynthesisQualityOption {
  steps: number;
  label: string;
}

export const SYNTHESIS_QUALITY_OPTIONS: readonly SynthesisQualityOption[] = [
  { steps: 4, label: 'Fast' },
  { steps: 8, label: 'Balanced (default)' },
  { steps: 12, label: 'Higher quality' },
  { steps: 16, label: 'Best quality' },
] as const;

export const DEFAULT_SYNTHESIS_QUALITY = 8;

const VALID_STEPS = SYNTHESIS_QUALITY_OPTIONS.map((option) => option.steps);

export function isSynthesisQuality(value: unknown): value is number {
  return typeof value === 'number' && VALID_STEPS.includes(value);
}

export function clampSynthesisQuality(value: unknown): number {
  return isSynthesisQuality(value) ? value : DEFAULT_SYNTHESIS_QUALITY;
}
