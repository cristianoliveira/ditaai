/** Generated audio retained before playback starts and while narration continues. */
export interface AudioBufferOption {
  seconds: number;
  label: string;
}

export const AUDIO_BUFFER_OPTIONS: readonly AudioBufferOption[] = [
  { seconds: 0, label: 'Immediate start' },
  { seconds: 5, label: '5 seconds' },
  { seconds: 10, label: '10 seconds' },
  { seconds: 15, label: '15 seconds' },
] as const;

export const DEFAULT_AUDIO_BUFFER_SECONDS = 5;
const NARRATION_CHARS_PER_SECOND = 15;
const VALID_BUFFER_SECONDS = AUDIO_BUFFER_OPTIONS.map((option) => option.seconds);

export function isAudioBufferSeconds(value: unknown): value is number {
  return typeof value === 'number' && VALID_BUFFER_SECONDS.includes(value);
}

export function clampAudioBufferSeconds(value: unknown): number {
  return isAudioBufferSeconds(value) ? value : DEFAULT_AUDIO_BUFFER_SECONDS;
}

/** Deterministic estimate used to fill the buffer before exact audio duration is known. */
export function audioBufferDurationMs(text: string, rate = 1): number {
  const safeRate = Number.isFinite(rate) && rate > 0 ? rate : 1;
  return (text.length / NARRATION_CHARS_PER_SECOND / safeRate) * 1_000;
}
