// speechSynthesis adapter — implements the TextReader domain port.
// Uses the browser's built-in TTS. No external server needed.

import type { SpeakOptions, TextReader } from '../../domain/audio/text-reader';

export class SpeechSynthesisReader implements TextReader {
  constructor(private synth: SpeechSynthesis = window.speechSynthesis) {}

  speak(text: string, options?: SpeakOptions): Promise<void> {
    return new Promise((resolve) => {
      const offset = options?.resumeFromChar ?? 0;
      const speakText = offset > 0 ? text.slice(offset) : text;
      const utterance = new SpeechSynthesisUtterance(speakText);
      if (options?.rate) utterance.rate = options.rate;
      if (options?.pitch) utterance.pitch = options.pitch;
      if (options?.volume != null) utterance.volume = options.volume;

      // Native boundary events give precise word-level charIndex/charLength.
      // Offset back to absolute position when resuming mid-segment.
      utterance.onboundary = (e: SpeechSynthesisEvent) => {
        if (e.name === 'word') {
          options?.onBoundary?.({ charIndex: e.charIndex + offset, charLength: e.charLength });
        }
      };

      utterance.onend = () => resolve();
      utterance.onerror = () => resolve();

      this.synth.speak(utterance);
    });
  }

  pause(): void {
    this.synth.pause();
  }

  resume(): void {
    this.synth.resume();
  }

  stop(): void {
    this.synth.cancel();
  }
}
