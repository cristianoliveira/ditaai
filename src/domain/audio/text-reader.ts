// Domain port: anything that can speak text.
// Implementations live in infra (speechSynthesis, Piper, cloud TTS).

export interface SpeakOptions {
  rate?: number;
  pitch?: number;
  voiceUri?: string;
}

export interface TextReader {
  speak(text: string, options?: SpeakOptions): Promise<void>;
  pause(): void;
  resume(): void;
  stop(): void;
}
