import type { PhononTTS } from 'phonon-tts';
import { describe, expect, it, vi } from 'vitest';
import { PhononReader } from './phonon-reader';

function setup(autoEndPlayback = true) {
  const source = {
    buffer: null as AudioBuffer | null,
    playbackRate: { value: 1 },
    connect: vi.fn(),
    disconnect: vi.fn(),
    addEventListener: vi.fn((_event: string, callback: () => void) => {
      source.onended = callback;
    }),
    start: vi.fn(() => {
      if (autoEndPlayback) source.onended?.();
    }),
    stop: vi.fn(() => source.onended?.()),
    onended: undefined as (() => void) | undefined,
  };
  const audioBuffer = { duration: 1, copyToChannel: vi.fn() };
  const context = {
    state: 'running',
    currentTime: 0,
    destination: {},
    createBuffer: vi.fn(() => audioBuffer),
    createBufferSource: vi.fn(() => source),
    createGain: vi.fn(() => ({ gain: { value: 1 }, connect: vi.fn() })),
    suspend: vi.fn(async () => {
      context.state = 'suspended';
    }),
    resume: vi.fn(async () => {
      context.state = 'running';
    }),
  };
  const streams: Array<{ text: string; options?: { signal?: AbortSignal } }> = [];
  const stream = vi.fn((text: string, options?: { signal?: AbortSignal }) => {
    streams.push({ text, options });
    return {
      sampleRate: 24_000,
      cancel: vi.fn(),
      done: Promise.resolve({ cancelled: false }),
      async *[Symbol.asyncIterator]() {
        yield new Float32Array(24_000).fill(0.1);
      },
    };
  });
  const tts = { sampleRate: 24_000, stream, dispose: vi.fn() } as unknown as PhononTTS;
  const reader = new PhononReader(tts, {
    audioContextFactory: () => context as unknown as AudioContext,
  });
  return { reader, stream, streams, source, context, audioBuffer };
}

describe('PhononReader', () => {
  it('reuses prepared audio and applies rate, volume, and offset boundaries at playback', async () => {
    const { reader, stream, streams, source, context, audioBuffer } = setup();
    const schedule = vi.fn();
    reader.onBoundarySchedule = schedule;

    await reader.prepare('Skip these words. Speak this part.', { resumeFromChar: 18 });
    await reader.speak('Skip these words. Speak this part.', {
      resumeFromChar: 18,
      rate: 1.5,
      volume: 0.4,
    });

    expect(stream).toHaveBeenCalledOnce();
    expect(streams[0]?.text).toBe('Speak this part.');
    expect(streams[0]?.options?.signal).toBeInstanceOf(AbortSignal);
    expect(context.createBuffer).toHaveBeenCalledWith(1, 24_000, 24_000);
    expect(audioBuffer.copyToChannel).toHaveBeenCalledOnce();
    expect(source.playbackRate.value).toBe(1.5);
    expect(source.start).toHaveBeenCalledOnce();
    expect(schedule).toHaveBeenCalledWith(
      expect.objectContaining({
        durationMs: expect.closeTo(667, 0),
        sampleCount: 24_000,
        boundaries: expect.arrayContaining([
          expect.objectContaining({ charIndex: 18, charLength: 5 }),
        ]),
      }),
    );
  });

  it('serializes concurrent inference and cancels active work on stop', async () => {
    const { reader, stream } = setup();
    let release: (() => void) | undefined;
    stream.mockImplementation((_text: string, options?: { signal?: AbortSignal }) => ({
      sampleRate: 24_000,
      cancel: vi.fn(),
      done: Promise.resolve({ cancelled: false }),
      async *[Symbol.asyncIterator]() {
        await new Promise<void>((resolve) => {
          release = resolve;
          options?.signal?.addEventListener('abort', () => resolve(), { once: true });
        });
        if (!options?.signal?.aborted) yield new Float32Array(24_000).fill(0.1);
      },
    }));

    const first = reader.prepare('First paragraph.');
    const second = reader.prepare('Second paragraph.');
    await vi.waitFor(() => expect(stream).toHaveBeenCalledOnce());
    reader.stop();
    release?.();
    await expect(first).rejects.toThrow();
    await expect(second).rejects.toThrow();
    expect(stream).toHaveBeenCalledOnce();
  });

  it('suspends and resumes audio, and stop resolves playback cleanly', async () => {
    const { reader, context, source } = setup(false);
    const speaking = reader.speak('A short line.');
    await vi.waitFor(() => expect(source.start).toHaveBeenCalledOnce());

    reader.pause();
    await vi.waitFor(() => expect(context.suspend).toHaveBeenCalledOnce());
    reader.resume();
    await vi.waitFor(() => expect(context.resume).toHaveBeenCalledOnce());
    reader.stop();

    await expect(speaking).resolves.toBeUndefined();
    expect(source.stop).toHaveBeenCalledOnce();
  });

  it.each([
    ['silent', new Float32Array(24_000)],
    ['non-finite', new Float32Array([0.1, Number.NaN])],
  ])('rejects %s model output instead of playing it', async (_label, waveform) => {
    const { reader, stream, source } = setup();
    stream.mockImplementation(() => ({
      sampleRate: 24_000,
      cancel: vi.fn(),
      done: Promise.resolve({ cancelled: false }),
      async *[Symbol.asyncIterator]() {
        yield waveform;
      },
    }));

    await expect(reader.speak('Hello there.')).rejects.toThrow(/silent|invalid audio/);
    expect(source.start).not.toHaveBeenCalled();
  });
});
