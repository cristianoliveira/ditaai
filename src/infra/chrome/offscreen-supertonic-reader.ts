import type { AvailableTextReader, SpeakOptions } from '../../domain/audio/text-reader';
import type { VoiceSelectionStore } from '../../domain/voices/selection';
import { logger } from '../../lib/logger';
import { ChromeLanguageStorage } from './language-storage';
import { ChromeSynthesisQualityStorage } from './synthesis-quality-storage';
import { ChromeVoiceRotationStorage } from './voice-rotation-storage';
import { ChromeVoiceSelectionStorage } from './voice-selection-storage';

interface VoiceRotationStore {
  load(): Promise<boolean>;
}

interface SynthesisQualityStore {
  load(): Promise<number>;
}

interface NarrationLanguageStore {
  load(): Promise<string>;
}

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
  private pageVisitId = 'unknown-page-visit';

  constructor(
    private readonly chromeApi: OffscreenChromeApi = chrome,
    private readonly selectionStore: VoiceSelectionStore = new ChromeVoiceSelectionStorage(),
    private readonly rotationStore: VoiceRotationStore = new ChromeVoiceRotationStorage(),
    private readonly qualityStore: SynthesisQualityStore = new ChromeSynthesisQualityStorage(),
    private readonly languageStore: NarrationLanguageStore = new ChromeLanguageStorage(),
  ) {}

  setPageVisitId(pageVisitId: string): void {
    this.pageVisitId = pageVisitId;
  }

  async isAvailable(): Promise<boolean> {
    const response = await this.sendWithSelectedVoice('isAvailable');
    return response.available === true;
  }

  async prepare(text: string, options?: SpeakOptions): Promise<void> {
    await this.sendWithSelectedVoice('prepare', [text, await this.serializableOptions(options)]);
  }

  async speak(text: string, options?: SpeakOptions): Promise<void> {
    await this.sendWithSelectedVoice('speak', [text, await this.serializableOptions(options)]);
  }

  private async serializableOptions(options?: SpeakOptions): Promise<SpeakOptions | undefined> {
    // Persisted settings are injected here so every call path (keyboard
    // shortcut, widget, popup) narrates with the configured quality/language.
    const [quality, language] = await Promise.all([
      this.qualityStore.load(),
      this.languageStore.load(),
    ]);
    return {
      rate: options?.rate,
      pitch: options?.pitch,
      volume: options?.volume,
      quality: options?.quality ?? quality,
      language: options?.language ?? language,
      resumeFromChar: options?.resumeFromChar,
    };
  }

  private async sendWithSelectedVoice(
    method: string,
    args: unknown[] = [],
  ): Promise<OffscreenResponse> {
    const [selectedVoiceId, rotateVoices] = await Promise.all([
      this.selectionStore.load(),
      this.rotationStore.load(),
    ]);
    logger.info('[voice-selection][service-worker] forward', {
      method,
      pageVisitId: this.pageVisitId,
      selectedVoiceId,
      rotateVoices,
    });
    return this.send(method, [
      selectedVoiceId,
      ...args,
      { pageVisitId: this.pageVisitId, rotateVoices },
    ]);
  }

  pause(): void {
    void this.send('pause');
  }

  resume(): void {
    void this.send('resume');
  }

  stop(): void {
    void this.send('stop', [{ pageVisitId: this.pageVisitId }]);
  }

  private async send(
    method: string,
    args: unknown[] = [],
    attempt = 0,
  ): Promise<OffscreenResponse> {
    const startedAt = Date.now();
    logger.info(`[installed-voice][service-worker] offscreen.${method}:start`);
    try {
      await this.ensureDocument();
    } catch (error) {
      logger.error(`[installed-voice][service-worker] offscreen.${method}:failed`, {
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
        logger.warn(
          '[installed-voice][service-worker] offscreen channel lost; recreating document',
          { error },
        );
        await this.recreateDocument();
        return this.send(method, args, 1);
      }
      logger.error(`[installed-voice][service-worker] offscreen.${method}:failed`, {
        durationMs: Date.now() - startedAt,
        error,
      });
      throw error;
    }

    // A fatal error (memory access out of bounds) corrupts the WASM runtime for
    // the whole document. Only a fresh document resets it — recreate and retry.
    if (response?.fatal && attempt === 0) {
      logger.warn('[installed-voice][service-worker] offscreen fatal error; recreating document', {
        error: response.error,
      });
      await this.recreateDocument();
      return this.send(method, args, 1);
    }

    if (!response?.ok) {
      const error = new Error(response?.error ?? 'Offscreen voice unavailable');
      logger.error(`[installed-voice][service-worker] offscreen.${method}:failed`, {
        durationMs: Date.now() - startedAt,
        error,
      });
      throw error;
    }
    logger.info(`[installed-voice][service-worker] offscreen.${method}:complete`, {
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
      logger.info('[installed-voice][service-worker] offscreen.document:reuse');
      return;
    }

    logger.info('[installed-voice][service-worker] offscreen.document:create');
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
      logger.info('[installed-voice][service-worker] offscreen.document:recreate');
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
