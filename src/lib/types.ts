// Shared types for the extension

export interface PiperSynthesizeRequest {
  text: string;
  rate?: number;
}

export interface PiperSynthesizeResponse {
  audio: ArrayBuffer;
  durationMs: number;
}

export interface VoiceDescriptor {
  name: string;
  voiceURI: string;
  lang: string;
  localService: boolean;
  default: boolean;
}

export type Result<T, E = Error> = { ok: true; value: T } | { ok: false; error: E };

export function ok<T>(value: T): Result<T, never> {
  return { ok: true, value };
}

export function err<E>(error: E): Result<never, E> {
  return { ok: false, error };
}
