import { describe, expect, it } from 'vitest';
import {
  DEFAULT_AUDIO_BUFFER_SECONDS,
  audioBufferDurationMs,
  clampAudioBufferSeconds,
} from './buffer';

describe('audio buffer', () => {
  it('estimates spoken duration from text length and playback rate', () => {
    expect(audioBufferDurationMs('x'.repeat(150), 1)).toBe(10_000);
    expect(audioBufferDurationMs('x'.repeat(150), 2)).toBe(5_000);
  });

  it('uses the configurable default for missing or invalid values', () => {
    expect(clampAudioBufferSeconds(undefined)).toBe(DEFAULT_AUDIO_BUFFER_SECONDS);
    expect(clampAudioBufferSeconds(-1)).toBe(DEFAULT_AUDIO_BUFFER_SECONDS);
    expect(clampAudioBufferSeconds(6)).toBe(DEFAULT_AUDIO_BUFFER_SECONDS);
  });

  it.each([0, 5, 10, 15])('accepts %s seconds', (seconds) => {
    expect(clampAudioBufferSeconds(seconds)).toBe(seconds);
  });
});
