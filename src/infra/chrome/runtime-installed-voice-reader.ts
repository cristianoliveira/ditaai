import type { AvailableTextReader, SpeakOptions } from '../../domain/audio/text-reader';

interface RuntimeResponse {
  ok: boolean;
  available?: boolean;
  error?: string;
}

export class RuntimeInstalledVoiceReader implements AvailableTextReader {
  async isAvailable(): Promise<boolean> {
    try {
      const response = await this.send('isInstalledVoiceAvailable', [], false);
      return response.available === true;
    } catch {
      return false;
    }
  }

  async prepare(text: string, options?: SpeakOptions): Promise<void> {
    await this.send('prepareInstalledVoice', [text, this.serializableOptions(options)], false);
  }

  async speak(text: string, options?: SpeakOptions): Promise<void> {
    await this.send('speakWithInstalledVoice', [text, this.serializableOptions(options)]);
  }

  private serializableOptions(options?: SpeakOptions): SpeakOptions | undefined {
    if (!options) return undefined;
    return { rate: options.rate, pitch: options.pitch, resumeFromChar: options.resumeFromChar };
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

  private async send(method: string, args: unknown[] = [], trace = true): Promise<RuntimeResponse> {
    const startedAt = Date.now();
    if (trace) console.info(`[dita][installed-voice][content] ${method}:start`);
    try {
      const response = (await chrome.runtime.sendMessage({
        dest: 'serviceWorker',
        method,
        args,
      })) as RuntimeResponse | undefined;
      if (!response?.ok) throw new Error(response?.error ?? 'Installed voice unavailable');
      if (trace) {
        console.info(`[dita][installed-voice][content] ${method}:complete`, {
          durationMs: Date.now() - startedAt,
        });
      }
      return response;
    } catch (error) {
      if (trace) {
        console.error(`[dita][installed-voice][content] ${method}:failed`, {
          durationMs: Date.now() - startedAt,
          error,
        });
      }
      throw error;
    }
  }
}
