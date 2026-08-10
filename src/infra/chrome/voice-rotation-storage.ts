export const VOICE_ROTATION_KEY = 'rotateVoices';

export class ChromeVoiceRotationStorage {
  async load(): Promise<boolean> {
    const stored = await chrome.storage.local.get(VOICE_ROTATION_KEY);
    return stored[VOICE_ROTATION_KEY] === true;
  }

  async save(enabled: boolean): Promise<void> {
    await chrome.storage.local.set({ [VOICE_ROTATION_KEY]: enabled });
  }
}
