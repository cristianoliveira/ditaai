import type { BoundaryEvent, SpeakOptions, TextReader } from '../domain/audio/text-reader';

/**
 * Fake TextReader for E2E tests. Fires synthetic word-boundary events
 * at deterministic intervals so tests can verify highlighting + button state.
 *
 * Activated when the page has `data-dita-test-reader="fake"` on <html>,
 * set via `page.addInitScript` before the content script loads.
 */
export class FakeBoundaryReader implements TextReader {
  private timer: ReturnType<typeof setInterval> | null = null;
  private resolveSpeak: (() => void) | null = null;

  async speak(text: string, options?: SpeakOptions): Promise<void> {
    const offset = options?.resumeFromChar ?? 0;
    const speakText = offset > 0 ? text.slice(offset) : text;
    const words = speakText.match(/\S+/g) ?? [];
    if (words.length === 0) return;

    const intervalMs = 50;
    let idx = 0;

    return new Promise<void>((resolve) => {
      this.resolveSpeak = resolve;
      this.timer = setInterval(() => {
        if (idx >= words.length) {
          this.clearTimer();
          this.resolveSpeak?.();
          this.resolveSpeak = null;
          return;
        }

        const word = words[idx];
        if (!word) {
          idx++;
          return;
        }

        let charPos = speakText.indexOf(word);
        if (idx > 0) {
          const prev = words[idx - 1];
          if (prev) {
            const prevIdx = speakText.indexOf(prev);
            charPos = speakText.indexOf(word, prevIdx + prev.length);
          }
        }

        options?.onBoundary?.({
          charIndex: Math.max(0, charPos) + offset,
          charLength: word.length,
        } as BoundaryEvent);

        idx++;
      }, intervalMs);
    });
  }

  pause(): void {
    /* no-op — sequencer handles pause by calling stop() */
  }

  resume(): void {
    /* no-op — sequencer re-speaks on resume */
  }

  stop(): void {
    this.clearTimer();
    this.resolveSpeak?.();
    this.resolveSpeak = null;
  }

  private clearTimer(): void {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
}
