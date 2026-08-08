// speechSynthesis adapter — implements the TextReader domain port.
// Uses the browser's built-in TTS. No external server needed.

import type { SpeakOptions, TextReader } from '../../domain/audio/text-reader';

export class SpeechSynthesisReader implements TextReader {
  constructor(private synth: SpeechSynthesis = window.speechSynthesis) {}

  speak(text: string, options?: SpeakOptions): Promise<void> {
    return new Promise((resolve) => {
      const utterance = new SpeechSynthesisUtterance(text);
      if (options?.rate) utterance.rate = options.rate;
      if (options?.pitch) utterance.pitch = options.pitch;

      // Native boundary events give precise word-level charIndex/charLength.
      utterance.onboundary = (e: SpeechSynthesisEvent) => {
        if (e.name === 'word') {
          options?.onBoundary?.({ charIndex: e.charIndex, charLength: e.charLength });
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
