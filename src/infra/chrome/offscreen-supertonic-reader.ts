import type { AvailableTextReader, SpeakOptions } from '../../domain/audio/text-reader';
import type { VoiceSelectionStore } from '../../domain/voices/selection';
import { ChromeVoiceSelectionStorage } from './voice-selection-storage';

interface OffscreenResponse {
  ok: boolean;
  available?: boolean;
  error?: string;
}

interface OffscreenChromeApi {
  runtime: {
    getURL(path: string): string;
    getContexts(filter: {
      contextTypes: chrome.runtime.ContextType[];
      documentUrls: string[];
    }): Promise<unknown[]>;
    sendMessage(message: unknown): Promise<OffscreenResponse | undefined>;
  };
  offscreen: {
    createDocument(parameters: chrome.offscreen.CreateParameters): Promise<void>;
  };
}

export class OffscreenSupertonicReader implements AvailableTextReader {
  private creation: Promise<void> | null = null;

  constructor(
    private readonly chromeApi: OffscreenChromeApi = chrome,
    private readonly selectionStore: VoiceSelectionStore = new ChromeVoiceSelectionStorage(),
  ) {}

  async isAvailable(): Promise<boolean> {
    const response = await this.sendWithSelectedVoice('isAvailable');
    return response.available === true;
  }

  async prepare(text: string, options?: SpeakOptions): Promise<void> {
    await this.sendWithSelectedVoice('prepare', [text, this.serializableOptions(options)]);
  }

  async speak(text: string, options?: SpeakOptions): Promise<void> {
    await this.sendWithSelectedVoice('speak', [text, this.serializableOptions(options)]);
  }

  private serializableOptions(options?: SpeakOptions): SpeakOptions | undefined {
    if (!options) return undefined;
    return {
      rate: options.rate,
      pitch: options.pitch,
      volume: options.volume,
      resumeFromChar: options.resumeFromChar,
    };
  }

  private async sendWithSelectedVoice(
    method: string,
    args: unknown[] = [],
  ): Promise<OffscreenResponse> {
    const selectedVoiceId = await this.selectionStore.load();
    console.info('[dita][voice-selection][service-worker] forward', {
      method,
      selectedVoiceId,
    });
    return this.send(method, [selectedVoiceId, ...args]);
  }

  pause(): void {
    void this.send('pause');
  }

  resume(): void {
    void this.send('resume');
  }

  stop(): void {
    void this.send('stop');
  }

  private async send(method: string, args: unknown[] = []): Promise<OffscreenResponse> {
    const startedAt = Date.now();
    console.info(`[dita][installed-voice][service-worker] offscreen.${method}:start`);
    try {
      await this.ensureDocument();
      const response = await this.chromeApi.runtime.sendMessage({
        dest: 'offscreen',
        method,
        args,
      });
      if (!response?.ok) throw new Error(response?.error ?? 'Offscreen voice unavailable');
      console.info(`[dita][installed-voice][service-worker] offscreen.${method}:complete`, {
        durationMs: Date.now() - startedAt,
      });
      return response;
    } catch (error) {
      console.error(`[dita][installed-voice][service-worker] offscreen.${method}:failed`, {
        durationMs: Date.now() - startedAt,
        error,
      });
      throw error;
    }
  }

  private async ensureDocument(): Promise<void> {
    if (this.creation) return this.creation;

    this.creation = this.createDocumentIfMissing().finally(() => {
      this.creation = null;
    });
    return this.creation;
  }

  private async createDocumentIfMissing(): Promise<void> {
    const url = this.chromeApi.runtime.getURL('offscreen.html');
    const contexts = await this.chromeApi.runtime.getContexts({
      contextTypes: ['OFFSCREEN_DOCUMENT' as chrome.runtime.ContextType],
      documentUrls: [url],
    });
    if (contexts.length > 0) {
      console.info('[dita][installed-voice][service-worker] offscreen.document:reuse');
      return;
    }

    console.info('[dita][installed-voice][service-worker] offscreen.document:create');
    await this.chromeApi.offscreen.createDocument({
      url: 'offscreen.html',
      reasons: ['AUDIO_PLAYBACK' as chrome.offscreen.Reason],
      justification: 'Play installed text-to-speech voices',
    });
  }
}
