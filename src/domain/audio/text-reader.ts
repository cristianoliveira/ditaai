// Domain port: anything that can speak text.
// Implementations live in infra (Supertonic ONNX via offscreen, browser speechSynthesis, cloud TTS).

export interface BoundaryEvent {
  charIndex: number;
  charLength: number;
}

export interface ScheduledBoundary extends BoundaryEvent {
  startFraction: number;
}

export interface BoundarySchedule {
  durationMs: number;
  boundaries: ScheduledBoundary[];
}

export interface SpeakOptions {
  rate?: number;
  pitch?: number;
  /** 0 (mute) to 1 (full). Applied per segment; the next segment picks it up. */
  volume?: number;
  /** Denoising steps for neural synthesis; more is cleaner but slower. */
  quality?: number;
  /** Narration language code (e.g. 'pt'). Falls back to the reader default. */
  language?: string;
  voiceUri?: string;
  /** Fired for each word boundary (charIndex/charLength within the text). */
  onBoundary?: (event: BoundaryEvent) => void;
  /** If set, speak text.substring(charOffset) and offset boundaries to absolute. */
  resumeFromChar?: number;
}

export interface TextReader {
  /** Prepare speech audio before it is needed. Implementations may treat this as a no-op. */
  prepare?(text: string, options?: SpeakOptions): Promise<void>;
  speak(text: string, options?: SpeakOptions): Promise<void>;
  pause(): void;
  resume(): void;
  stop(): void;
}

export interface AvailableTextReader extends TextReader {
  isAvailable(): Promise<boolean>;
}
