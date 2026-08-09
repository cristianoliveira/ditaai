import type { AvailableTextReader, SpeakOptions, TextReader } from '../../domain/audio/text-reader';

/** Prefers an installed extension voice and reliably falls back to browser speech. */
export class InstalledVoiceReader implements TextReader {
  private activeReader: TextReader;

  constructor(
    private readonly installedReader: AvailableTextReader,
    private readonly fallbackReader: TextReader,
  ) {
    this.activeReader = fallbackReader;
  }

  async speak(text: string, options?: SpeakOptions): Promise<void> {
    try {
      if (await this.installedReader.isAvailable()) {
        this.activeReader = this.installedReader;
        await this.installedReader.speak(text, options);
        return;
      }
    } catch (error) {
      console.warn('[dita] installed voice failed, falling back to browser speech:', error);
    }

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
    this.activeReader.stop();
  }
}
