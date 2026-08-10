import { clampSynthesisQuality } from '../../domain/audio/quality';

export const SYNTHESIS_QUALITY_KEY = 'synthesisQuality';

export class ChromeSynthesisQualityStorage {
  async load(): Promise<number> {
    const stored = await chrome.storage.local.get(SYNTHESIS_QUALITY_KEY);
    return clampSynthesisQuality(stored[SYNTHESIS_QUALITY_KEY]);
  }

  async save(steps: number): Promise<void> {
    await chrome.storage.local.set({ [SYNTHESIS_QUALITY_KEY]: clampSynthesisQuality(steps) });
  }
}
