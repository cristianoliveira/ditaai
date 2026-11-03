import { describe, expect, it, vi } from 'vitest';
import { KokoroReader } from './kokoro-reader';
import type { KokoroSynthesizer } from './kokoro-runtime';

function setup() {
  let ended: (() => void) | undefined;
  const source = {
    buffer: null as AudioBuffer | null,
    connect: vi.fn(),
    disconnect: vi.fn(),
    addEventListener: vi.fn((_event: string, callback: () => void) => {
      ended = callback;
    }),
    start: vi.fn(() => ended?.()),
    stop: vi.fn(() => ended?.()),
  };
  const audio = { duration: 1, copyToChannel: vi.fn() };
  const context = {
    state: 'running',
    destination: {},
    createBuffer: vi.fn(() => audio),
    createBufferSource: vi.fn(() => source),
    createGain: vi.fn(() => ({ gain: { value: 1 }, connect: vi.fn() })),
  };
  const generate = vi.fn(async (_text: string, _options: unknown) => ({
    audio: new Float32Array(24_000).fill(0.1),
    sampling_rate: 24_000,
  }));
  const tts = { generate } as unknown as KokoroSynthesizer;
  const reader = new KokoroReader(tts, 'af_heart', () => context as unknown as AudioContext);
  return { reader, generate, source, context, audio };
}

describe('KokoroReader', () => {
  it('prepares and reuses synthesized audio with weighted boundaries', async () => {
    const { reader, generate, source, context, audio } = setup();
    const schedule = vi.fn();
    reader.onBoundarySchedule = schedule;

    await reader.prepare('Hello, Kokoro.', { rate: 1.25, volume: 0.5 });
    await reader.speak('Hello, Kokoro.', { rate: 1.25, volume: 0.5 });

    expect(generate).toHaveBeenCalledOnce();
    expect(generate).toHaveBeenLastCalledWith('Hello, Kokoro.', {
      voice: 'af_heart',
      speed: 1.25,
    });
    expect(context.createBuffer).toHaveBeenCalledWith(1, 24_000, 24_000);
    expect(audio.copyToChannel).toHaveBeenCalledOnce();
    expect(source.start).toHaveBeenCalledOnce();
    expect(schedule).toHaveBeenCalledWith(
      expect.objectContaining({
        durationMs: 1_000,
        sampleCount: 24_000,
        boundaries: expect.arrayContaining([
          expect.objectContaining({ charIndex: 0, charLength: 6 }),
        ]),
      }),
    );
  });

  it('applies seek offsets and emits no audio for a superseded synthesis', async () => {
    const { reader, generate, source } = setup();
    let finishFirst!: () => void;
    generate.mockImplementationOnce(
      () =>
        new Promise((resolve) => {
          finishFirst = () =>
            resolve({
              audio: new Float32Array(24_000).fill(0.1),
              sampling_rate: 24_000,
            });
        }),
    );

    const firstSpeak = reader.speak('Old page audio.');
    await vi.waitFor(() => expect(generate).toHaveBeenCalledOnce());
    reader.stop();
    const seekSpeak = reader.speak('New page audio.', { resumeFromChar: 4 });
    finishFirst();

    await Promise.all([firstSpeak, seekSpeak]);

    expect(generate).toHaveBeenNthCalledWith(1, 'Old page audio.', {
      voice: 'af_heart',
      speed: 1,
    });
    expect(generate).toHaveBeenNthCalledWith(2, 'page audio.', {
      voice: 'af_heart',
      speed: 1,
    });
    expect(source.start).toHaveBeenCalledOnce();
  });

  it('rejects silent audio rather than reporting successful playback', async () => {
    const { reader, generate, source } = setup();
    generate.mockResolvedValue({
      audio: new Float32Array(24_000),
      sampling_rate: 24_000,
    });

    await expect(reader.speak('A silent sentence.')).rejects.toThrow(
      'Kokoro produced silent audio',
    );
    expect(source.start).not.toHaveBeenCalled();
  });
});
