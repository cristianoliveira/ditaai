import type { AvailableTextReader, SpeakOptions } from '../../domain/audio/text-reader';
import type { VoiceSelectionStore } from '../../domain/voices/selection';
import { ChromeVoiceSelectionStorage } from './voice-selection-storage';

interface OffscreenResponse {
  ok: boolean;
  available?: boolean;
  error?: string;
  /** Set when the offscreen suffered a fatal, unrecoverable error (WASM trap).
   * Tells the service worker to recreate the document for a fresh runtime. */
  fatal?: boolean;
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
    closeDocument(): Promise<void>;
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

  private async send(
    method: string,
    args: unknown[] = [],
    attempt = 0,
  ): Promise<OffscreenResponse> {
    const startedAt = Date.now();
    console.info(`[dita][installed-voice][service-worker] offscreen.${method}:start`);
    try {
      await this.ensureDocument();
    } catch (error) {
      console.error(`[dita][installed-voice][service-worker] offscreen.${method}:failed`, {
        durationMs: Date.now() - startedAt,
        error,
      });
      throw error;
    }

    let response: OffscreenResponse | undefined;
    try {
      response = await this.chromeApi.runtime.sendMessage({
        dest: 'offscreen',
        method,
        args,
      });
    } catch (error) {
      // The offscreen document itself died (e.g. a WASM trap took the renderer
      // down). Recreate it once so the next attempt runs on a fresh heap.
      if (attempt === 0) {
        console.warn(
          '[dita][installed-voice][service-worker] offscreen channel lost; recreating document',
          { error },
        );
        await this.recreateDocument();
        return this.send(method, args, 1);
      }
      console.error(`[dita][installed-voice][service-worker] offscreen.${method}:failed`, {
        durationMs: Date.now() - startedAt,
        error,
      });
      throw error;
    }

    // A fatal error (memory access out of bounds) corrupts the WASM runtime for
    // the whole document. Only a fresh document resets it — recreate and retry.
    if (response?.fatal && attempt === 0) {
      console.warn(
        '[dita][installed-voice][service-worker] offscreen fatal error; recreating document',
        { error: response.error },
      );
      await this.recreateDocument();
      return this.send(method, args, 1);
    }

    if (!response?.ok) {
      const error = new Error(response?.error ?? 'Offscreen voice unavailable');
      console.error(`[dita][installed-voice][service-worker] offscreen.${method}:failed`, {
        durationMs: Date.now() - startedAt,
        error,
      });
      throw error;
    }
    console.info(`[dita][installed-voice][service-worker] offscreen.${method}:complete`, {
      durationMs: Date.now() - startedAt,
    });
    return response;
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

  /** Closes the offscreen document and creates a fresh one. The onnxruntime-web
   * WASM heap cannot shrink, so after a fatal trap the only reliable reset is a
   * brand-new document (and thus a brand-new WebAssembly instance). Shares the
   * `creation` gate so concurrent fatal sends don't race to close/recreate. */
  private async recreateDocument(): Promise<void> {
    if (this.creation) return this.creation;
    this.creation = (async () => {
      console.info('[dita][installed-voice][service-worker] offscreen.document:recreate');
      try {
        await this.chromeApi.offscreen.closeDocument();
      } catch {
        /* document may already be gone */
      }
      await this.createDocumentIfMissing();
    })().finally(() => {
      this.creation = null;
    });
    return this.creation;
  }
}
