import type {
  AvailableTextReader,
  BoundaryEvent,
  SpeakOptions,
  TextReader,
} from '../../domain/audio/text-reader';

/** Prefers an installed extension voice and reliably falls back to browser speech. */
export class InstalledVoiceReader implements TextReader {
  private activeReader: TextReader;
  private boundaryCallback?: (event: BoundaryEvent) => void;

  constructor(
    private readonly installedReader: AvailableTextReader,
    private readonly fallbackReader: TextReader,
  ) {
    this.activeReader = fallbackReader;

    // Listen for boundary events forwarded from the offscreen reader.
    // onBoundary callbacks can't cross chrome.runtime.sendMessage, so the
    // offscreen doc relays them as separate messages.
    chrome.runtime.onMessage.addListener((msg) => {
      if (msg?.dest === 'contentScript' && msg.method === 'installedVoiceBoundary') {
        const event = msg.args?.[0] as BoundaryEvent | undefined;
        if (event) this.boundaryCallback?.(event);
      }
    });
  }

  async speak(text: string, options?: SpeakOptions): Promise<void> {
    this.boundaryCallback = options?.onBoundary;

    try {
      if (await this.installedReader.isAvailable()) {
        this.activeReader = this.installedReader;
        // Strip onBoundary — it can't cross chrome.runtime.sendMessage.
        // The installed reader will use the boundary listener above instead.
        const serializable: SpeakOptions | undefined = options
          ? { rate: options.rate, pitch: options.pitch, resumeFromChar: options.resumeFromChar }
          : undefined;
        await this.installedReader.speak(text, serializable);
        this.boundaryCallback = undefined;
        return;
      }
    } catch (error) {
      console.warn('[dita] installed voice failed, falling back to browser speech:', error);
    }

    this.boundaryCallback = undefined;
    this.activeReader = this.fallbackReader;
    await this.fallbackReader.speak(text, options);
  }

  pause(): void {
    this.activeReader.pause();
  }

  resume(): void {
    this.activeReader.resume();
  }

  stop(): void {
    this.boundaryCallback = undefined;
    this.activeReader.stop();
  }
}
