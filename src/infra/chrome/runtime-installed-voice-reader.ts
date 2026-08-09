import type { AvailableTextReader, SpeakOptions } from '../../domain/audio/text-reader';

interface RuntimeResponse {
  ok: boolean;
  available?: boolean;
  error?: string;
}

export class RuntimeInstalledVoiceReader implements AvailableTextReader {
  async isAvailable(): Promise<boolean> {
    const response = await this.send('isInstalledVoiceAvailable');
    return response.available === true;
  }

  async speak(text: string, options?: SpeakOptions): Promise<void> {
    const serializableOptions = options
      ? {
          rate: options.rate,
          pitch: options.pitch,
          resumeFromChar: options.resumeFromChar,
        }
      : undefined;
    await this.send('speakWithInstalledVoice', [text, serializableOptions]);
  }

  pause(): void {
    void this.send('pauseInstalledVoice');
  }

  resume(): void {
    void this.send('resumeInstalledVoice');
  }

  stop(): void {
    void this.send('stopInstalledVoice');
  }

  private async send(method: string, args: unknown[] = []): Promise<RuntimeResponse> {
    const startedAt = Date.now();
    console.info(`[dita][installed-voice][content] ${method}:start`);
    try {
      const response = (await chrome.runtime.sendMessage({
        dest: 'serviceWorker',
        method,
        args,
      })) as RuntimeResponse | undefined;
      if (!response?.ok) throw new Error(response?.error ?? 'Installed voice unavailable');
      console.info(`[dita][installed-voice][content] ${method}:complete`, {
        durationMs: Date.now() - startedAt,
      });
      return response;
    } catch (error) {
      console.error(`[dita][installed-voice][content] ${method}:failed`, {
        durationMs: Date.now() - startedAt,
        error,
      });
      throw error;
    }
  }
}
