import type {
  AvailableTextReader,
  BoundaryEvent,
  BoundarySchedule,
  SpeakOptions,
  TextReader,
} from '../../domain/audio/text-reader';
import { logger } from '../../lib/logger';
import { isFatalOnnxError } from './onnx-errors';

/** Prefers an installed extension voice and reliably falls back to browser speech. */
export class InstalledVoiceReader implements TextReader {
  private activeReader: TextReader;
  private boundaryCallback?: (event: BoundaryEvent) => void;
  private readonly preparedInstalledSpeech = new Set<string>();
  private readonly boundaryTimers = new Set<ReturnType<typeof setTimeout>>();
  /** Latched true after a fatal ONNX/WASM error: the runtime is unrecoverable
   * for this content-script lifetime, so stop probing it every segment. */
  private poisoned = false;

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
    if (this.poisoned) return; // installed runtime is dead for this session
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

    if (!this.poisoned) {
      try {
        const prepared = this.preparedInstalledSpeech.delete(this.preparationKey(text, options));
        if (prepared || (await this.installedReader.isAvailable())) {
          this.activeReader = this.installedReader;
          logger.info(
            `[installed-voice] speak ${JSON.stringify({
              engine: 'installed',
              prepared,
              rate: options?.rate ?? null,
              volume: options?.volume ?? null,
              resumeFromChar: options?.resumeFromChar ?? 0,
              chars: text.length,
            })}`,
          );
          // Strip onBoundary — it can't cross chrome.runtime.sendMessage.
          // The installed reader will use the boundary listener above instead.
          await this.installedReader.speak(text, this.serializableOptions(options));
          this.boundaryCallback = undefined;
          return;
        }
      } catch (error) {
        // A fatal WASM trap corrupts the ONNX runtime for the whole offscreen
        // document. The service worker already attempted a document recreation
        // + retry before this throw surfaced, so a fatal error here means the
        // installed voice is genuinely unusable: latch and stop probing it.
        if (isFatalOnnxError(error)) {
          this.poisoned = true;
          logger.warn(
            'installed voice suffered a fatal error; using browser speech for the rest of this page:',
            error,
          );
        } else {
          logger.warn('installed voice failed, falling back to browser speech:', error);
        }
      }
    }

    this.boundaryCallback = undefined;
    this.activeReader = this.fallbackReader;
    logger.info(
      `[installed-voice] speak ${JSON.stringify({
        engine: 'fallback',
        poisoned: this.poisoned,
        rate: options?.rate ?? null,
        volume: options?.volume ?? null,
        resumeFromChar: options?.resumeFromChar ?? 0,
        chars: text.length,
      })}`,
    );
    await this.fallbackReader.speak(text, options);
  }

  private scheduleBoundaries(schedule: BoundarySchedule): void {
    this.clearBoundarySchedule();
    logger.info('[installed-voice][content] boundary-schedule', {
      audioDurationMs: schedule.durationMs,
      sampleCount: schedule.sampleCount,
      durationSum: schedule.durationSum,
      boundaries: schedule.boundaries.length,
    });
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
