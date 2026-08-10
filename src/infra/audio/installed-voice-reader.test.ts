import { afterEach, describe, expect, it, vi } from 'vitest';
import type {
  AvailableTextReader,
  BoundaryEvent,
  TextReader,
} from '../../domain/audio/text-reader';
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
  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  it('prepares installed voice when it is available', async () => {
    vi.stubGlobal('chrome', { runtime: { onMessage: { addListener: vi.fn() } } });
    const installed = installedReader(true);
    installed.prepare = vi.fn().mockResolvedValue(undefined);
    const fallback = reader();
    const subject = new InstalledVoiceReader(installed, fallback);

    await subject.prepare('next paragraph', { rate: 1.2, onBoundary: vi.fn() });

    expect(installed.prepare).toHaveBeenCalledWith('next paragraph', { rate: 1.2 });
  });

  it('ignores optional preparation failure and rechecks availability before playback', async () => {
    vi.stubGlobal('chrome', { runtime: { onMessage: { addListener: vi.fn() } } });
    const installed = installedReader(true);
    installed.prepare = vi.fn().mockRejectedValue(new Error('Preparation unavailable'));
    const fallback = reader();
    const subject = new InstalledVoiceReader(installed, fallback);

    await expect(subject.prepare('next paragraph')).resolves.toBeUndefined();
    await subject.speak('next paragraph');

    expect(installed.isAvailable).toHaveBeenCalledTimes(2);
    expect(installed.speak).toHaveBeenCalledWith('next paragraph', undefined);
    expect(fallback.speak).not.toHaveBeenCalled();
  });

  it('plays prepared installed speech without rechecking availability', async () => {
    vi.stubGlobal('chrome', { runtime: { onMessage: { addListener: vi.fn() } } });
    const installed = installedReader(true);
    installed.prepare = vi.fn().mockResolvedValue(undefined);
    const fallback = reader();
    const subject = new InstalledVoiceReader(installed, fallback);

    await subject.prepare('next paragraph', { rate: 1.2 });
    await subject.speak('next paragraph', { rate: 1.2 });

    expect(installed.isAvailable).toHaveBeenCalledOnce();
    expect(installed.speak).toHaveBeenCalledWith('next paragraph', { rate: 1.2 });
    expect(fallback.speak).not.toHaveBeenCalled();
  });

  it('skips preparation when installed voice is unavailable', async () => {
    vi.stubGlobal('chrome', { runtime: { onMessage: { addListener: vi.fn() } } });
    const installed = installedReader(false);
    installed.prepare = vi.fn().mockResolvedValue(undefined);
    const subject = new InstalledVoiceReader(installed, reader());

    await subject.prepare('next paragraph');

    expect(installed.prepare).not.toHaveBeenCalled();
  });

  it('uses installed voice when it is available', async () => {
    vi.stubGlobal('chrome', { runtime: { onMessage: { addListener: vi.fn() } } });
    const installed = installedReader(true);
    const fallback = reader();
    const subject = new InstalledVoiceReader(installed, fallback);

    await subject.speak('hello');

    expect(installed.speak).toHaveBeenCalledWith('hello', undefined);
    expect(fallback.speak).not.toHaveBeenCalled();
  });

  it('uses browser voice when no installed voice is available', async () => {
    vi.stubGlobal('chrome', { runtime: { onMessage: { addListener: vi.fn() } } });
    const installed = installedReader(false);
    const fallback = reader();
    const subject = new InstalledVoiceReader(installed, fallback);

    await subject.speak('hello');

    expect(fallback.speak).toHaveBeenCalledWith('hello', undefined);
    expect(installed.speak).not.toHaveBeenCalled();
  });

  it('falls back to browser voice when installed voice fails', async () => {
    vi.stubGlobal('chrome', { runtime: { onMessage: { addListener: vi.fn() } } });
    const installed = installedReader(true);
    vi.mocked(installed.speak).mockRejectedValue(new Error('ONNX failed'));
    const fallback = reader();
    const subject = new InstalledVoiceReader(installed, fallback);

    await subject.speak('hello');

    expect(fallback.speak).toHaveBeenCalledWith('hello', undefined);
  });

  it('strips onBoundary from options passed to installed reader', async () => {
    vi.stubGlobal('chrome', { runtime: { onMessage: { addListener: vi.fn() } } });
    const installed = installedReader(true);
    const fallback = reader();
    const onBoundary = vi.fn();
    const subject = new InstalledVoiceReader(installed, fallback);

    await subject.speak('hello', { rate: 1.2, onBoundary });

    expect(installed.speak).toHaveBeenCalledWith('hello', { rate: 1.2 });
  });

  it('forwards boundary events to the stored onBoundary callback', async () => {
    let listener: ((msg: unknown) => void) | undefined;
    vi.stubGlobal('chrome', {
      runtime: {
        onMessage: {
          addListener: vi.fn((fn: (msg: unknown) => void) => {
            listener = fn;
          }),
        },
      },
    });
    const installed = installedReader(true);
    const fallback = reader();
    const onBoundary = vi.fn();
    const subject = new InstalledVoiceReader(installed, fallback);

    const speakPromise = subject.speak('hello world', { onBoundary });

    const event: BoundaryEvent = { charIndex: 6, charLength: 5 };
    listener?.({ dest: 'contentScript', method: 'installedVoiceBoundary', args: [event] });

    expect(onBoundary).toHaveBeenCalledWith(event);

    await speakPromise;
  });

  it('schedules prepared word boundaries outside the offscreen inference loop', async () => {
    vi.useFakeTimers();
    let listener: ((msg: unknown) => void) | undefined;
    vi.stubGlobal('chrome', {
      runtime: {
        onMessage: {
          addListener: vi.fn((fn: (msg: unknown) => void) => {
            listener = fn;
          }),
        },
      },
    });
    const installed = installedReader(true);
    let resolveSpeak!: () => void;
    vi.mocked(installed.speak).mockReturnValue(
      new Promise<void>((resolve) => {
        resolveSpeak = resolve;
      }),
    );
    const onBoundary = vi.fn();
    const subject = new InstalledVoiceReader(installed, reader());
    const speaking = subject.speak('hello world', { onBoundary });
    await vi.waitFor(() => expect(installed.speak).toHaveBeenCalled());

    listener?.({
      dest: 'contentScript',
      method: 'installedVoiceBoundarySchedule',
      args: [
        {
          durationMs: 1_000,
          boundaries: [
            { charIndex: 0, charLength: 5, startFraction: 0 },
            { charIndex: 6, charLength: 5, startFraction: 0.5 },
          ],
        },
      ],
    });
    await vi.advanceTimersByTimeAsync(0);
    expect(onBoundary).toHaveBeenCalledWith({ charIndex: 0, charLength: 5 });

    await vi.advanceTimersByTimeAsync(500);
    expect(onBoundary).toHaveBeenLastCalledWith({ charIndex: 6, charLength: 5 });

    resolveSpeak();
    await speaking;
  });

  it('clears boundary callback on stop', async () => {
    let listener: ((msg: unknown) => void) | undefined;
    vi.stubGlobal('chrome', {
      runtime: {
        onMessage: {
          addListener: vi.fn((fn: (msg: unknown) => void) => {
            listener = fn;
          }),
        },
      },
    });
    const installed = installedReader(true);
    // Make speak hang so we can test stop mid-speech
    let resolveSpeak!: () => void;
    vi.mocked(installed.speak).mockReturnValue(
      new Promise<void>((r) => {
        resolveSpeak = r;
      }),
    );
    const fallback = reader();
    const onBoundary = vi.fn();
    const subject = new InstalledVoiceReader(installed, fallback);

    const speakPromise = subject.speak('hello', { onBoundary });

    // Wait for speak to set activeReader and call installed.speak
    await vi.waitFor(() => expect(installed.speak).toHaveBeenCalled());

    subject.stop();

    const event: BoundaryEvent = { charIndex: 0, charLength: 5 };
    listener?.({ dest: 'contentScript', method: 'installedVoiceBoundary', args: [event] });

    expect(onBoundary).not.toHaveBeenCalled();
    expect(installed.stop).toHaveBeenCalled();

    resolveSpeak();
    await speakPromise;
  });
});
