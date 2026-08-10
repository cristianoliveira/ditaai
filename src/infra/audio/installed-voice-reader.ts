import type {
  AvailableTextReader,
  BoundaryEvent,
  BoundarySchedule,
  SpeakOptions,
  TextReader,
} from '../../domain/audio/text-reader';

/** Prefers an installed extension voice and reliably falls back to browser speech. */
export class InstalledVoiceReader implements TextReader {
  private activeReader: TextReader;
  private boundaryCallback?: (event: BoundaryEvent) => void;
  private readonly preparedInstalledSpeech = new Set<string>();
  private readonly boundaryTimers = new Set<ReturnType<typeof setTimeout>>();

  constructor(
    private readonly installedReader: AvailableTextReader,
    private readonly fallbackReader: TextReader,
  ) {
    this.activeReader = fallbackReader;

    // Listen for boundary events forwarded from the offscreen reader.
    // onBoundary callbacks can't cross chrome.runtime.sendMessage, so the
    // offscreen doc relays them as separate messages.
    chrome.runtime.onMessage.addListener((msg) => {
      if (msg?.dest !== 'contentScript') return;
      if (msg.method === 'installedVoiceBoundary') {
        const event = msg.args?.[0] as BoundaryEvent | undefined;
        if (event) this.boundaryCallback?.(event);
      }
      if (msg.method === 'installedVoiceBoundarySchedule') {
        const schedule = msg.args?.[0] as BoundarySchedule | undefined;
        if (schedule) this.scheduleBoundaries(schedule);
      }
    });
  }

  async prepare(text: string, options?: SpeakOptions): Promise<void> {
    if (!this.installedReader.prepare) return;

    try {
      if (!(await this.installedReader.isAvailable())) return;
      await this.installedReader.prepare(text, this.serializableOptions(options));
    } catch {
      return; // Lookahead is optional; speak() rechecks availability and falls back if needed.
    }

    this.preparedInstalledSpeech.add(this.preparationKey(text, options));
    while (this.preparedInstalledSpeech.size > 2) {
      const oldestKey = this.preparedInstalledSpeech.values().next().value;
      if (oldestKey === undefined) break;
      this.preparedInstalledSpeech.delete(oldestKey);
    }
  }

  async speak(text: string, options?: SpeakOptions): Promise<void> {
    this.clearBoundarySchedule();
    this.boundaryCallback = options?.onBoundary;

    try {
      const prepared = this.preparedInstalledSpeech.delete(this.preparationKey(text, options));
      if (prepared || (await this.installedReader.isAvailable())) {
        this.activeReader = this.installedReader;
        // Strip onBoundary — it can't cross chrome.runtime.sendMessage.
        // The installed reader will use the boundary listener above instead.
        await this.installedReader.speak(text, this.serializableOptions(options));
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

  private scheduleBoundaries(schedule: BoundarySchedule): void {
    this.clearBoundarySchedule();
    for (const boundary of schedule.boundaries) {
      const timer = setTimeout(() => {
        this.boundaryTimers.delete(timer);
        this.boundaryCallback?.({
          charIndex: boundary.charIndex,
          charLength: boundary.charLength,
        });
      }, schedule.durationMs * boundary.startFraction);
      this.boundaryTimers.add(timer);
    }
  }

  private clearBoundarySchedule(): void {
    for (const timer of this.boundaryTimers) clearTimeout(timer);
    this.boundaryTimers.clear();
  }

  private preparationKey(text: string, options?: SpeakOptions): string {
    return JSON.stringify([
      text,
      options?.rate ?? null,
      options?.pitch ?? null,
      options?.volume ?? null,
      options?.resumeFromChar ?? 0,
    ]);
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

  pause(): void {
    this.activeReader.pause();
  }

  resume(): void {
    this.activeReader.resume();
  }

  stop(): void {
    this.clearBoundarySchedule();
    this.boundaryCallback = undefined;
    this.activeReader.stop();
  }
}
