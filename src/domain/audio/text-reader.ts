// Domain port: anything that can speak text.
// Implementations live in infra (speechSynthesis, Piper, cloud TTS).

export interface BoundaryEvent {
  charIndex: number;
  charLength: number;
}

export interface SpeakOptions {
  rate?: number;
  pitch?: number;
  voiceUri?: string;
  /** Fired for each word boundary (charIndex/charLength within the text). */
  onBoundary?: (event: BoundaryEvent) => void;
  /** If set, speak text.substring(charOffset) and offset boundaries to absolute. */
  resumeFromChar?: number;
}

export interface TextReader {
  speak(text: string, options?: SpeakOptions): Promise<void>;
  pause(): void;
  resume(): void;
  stop(): void;
}

export interface AvailableTextReader extends TextReader {
  isAvailable(): Promise<boolean>;
}
