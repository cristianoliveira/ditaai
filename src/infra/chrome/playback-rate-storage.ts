import { logger } from '../../lib/logger';

const RATE_KEY = 'playbackRate';

export function clampRate(rate: number): number {
  return Math.min(2, Math.max(0.5, rate));
}

export interface PlaybackRateStore {
  load(): Promise<number>;
  save(rate: number): Promise<void>;
}

/**
 * One playback-rate preference shared by HTML pages and the PDF reader, so
 * both surfaces narrate at the speed the user last chose.
 */
export class ChromePlaybackRateStore implements PlaybackRateStore {
  constructor(
    private readonly local: Pick<typeof chrome.storage.local, 'get' | 'set'> = chrome.storage.local,
  ) {}

  async load(): Promise<number> {
    try {
      const stored = await this.local.get(RATE_KEY);
      const value = stored[RATE_KEY];
      return typeof value === 'number' ? clampRate(value) : 1;
    } catch (error) {
      logger.warn('[pdf-reader] failed to load playback rate', error);
      return 1;
    }
  }

  async save(rate: number): Promise<void> {
    await this.local.set({ [RATE_KEY]: clampRate(rate) });
  }
}
