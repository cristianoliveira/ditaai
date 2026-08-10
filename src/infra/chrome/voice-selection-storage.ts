import type { VoiceSelectionStore } from '../../domain/voices/selection';

export const SELECTED_VOICE_KEY = 'selectedVoiceId';

export class ChromeVoiceSelectionStorage implements VoiceSelectionStore {
  async load(): Promise<string | null> {
    const stored = await chrome.storage.local.get(SELECTED_VOICE_KEY);
    const voiceId = stored[SELECTED_VOICE_KEY];
    return typeof voiceId === 'string' && voiceId.length > 0 ? voiceId : null;
  }

  async save(voiceId: string): Promise<void> {
    await chrome.storage.local.set({ [SELECTED_VOICE_KEY]: voiceId });
  }
}
