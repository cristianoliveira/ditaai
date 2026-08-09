import { describe, expect, it, vi } from 'vitest';
import type { AvailableTextReader, TextReader } from '../../domain/audio/text-reader';
import { InstalledVoiceReader } from './installed-voice-reader';

function reader(): TextReader {
  return {
    speak: vi.fn().mockResolvedValue(undefined),
    pause: vi.fn(),
    resume: vi.fn(),
    stop: vi.fn(),
  };
}

function installedReader(available: boolean): AvailableTextReader {
  return { ...reader(), isAvailable: vi.fn().mockResolvedValue(available) };
}

describe('InstalledVoiceReader', () => {
  it('uses installed voice when it is available', async () => {
    const installed = installedReader(true);
    const fallback = reader();
    const subject = new InstalledVoiceReader(installed, fallback);

    await subject.speak('hello');

    expect(installed.speak).toHaveBeenCalledWith('hello', undefined);
    expect(fallback.speak).not.toHaveBeenCalled();
  });

  it('uses browser voice when no installed voice is available', async () => {
    const installed = installedReader(false);
    const fallback = reader();
    const subject = new InstalledVoiceReader(installed, fallback);

    await subject.speak('hello');

    expect(fallback.speak).toHaveBeenCalledWith('hello', undefined);
    expect(installed.speak).not.toHaveBeenCalled();
  });

  it('falls back to browser voice when installed voice fails', async () => {
    const installed = installedReader(true);
    vi.mocked(installed.speak).mockRejectedValue(new Error('ONNX failed'));
    const fallback = reader();
    const subject = new InstalledVoiceReader(installed, fallback);

    await subject.speak('hello');

    expect(fallback.speak).toHaveBeenCalledWith('hello', undefined);
  });
});
