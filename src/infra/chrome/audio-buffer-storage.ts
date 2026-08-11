import { clampAudioBufferSeconds } from '../../domain/audio/buffer';

export const AUDIO_BUFFER_SECONDS_KEY = 'audioBufferSeconds';

export class ChromeAudioBufferStorage {
  async load(): Promise<number> {
    const stored = await chrome.storage.local.get(AUDIO_BUFFER_SECONDS_KEY);
    return clampAudioBufferSeconds(stored[AUDIO_BUFFER_SECONDS_KEY]);
  }

  async save(seconds: number): Promise<void> {
    await chrome.storage.local.set({
      [AUDIO_BUFFER_SECONDS_KEY]: clampAudioBufferSeconds(seconds),
    });
  }
}
