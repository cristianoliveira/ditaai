import { describe, expect, it, vi } from 'vitest';
import type { KittenAssets } from './kitten-cache';
import { KittenOnnxReader } from './kitten-onnx-reader';

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
  const audio = {
    duration: 1,
    copyToChannel: vi.fn(),
  };
  const context = {
    state: 'running',
    currentTime: 0,
    destination: {},
    createBuffer: vi.fn(() => audio),
    createBufferSource: vi.fn(() => source),
    createGain: vi.fn(() => ({ gain: { value: 1 }, connect: vi.fn() })),
  };
  const run = vi.fn().mockResolvedValue({ audio: { data: new Float32Array(30_000) } });
  const session = {
    run,
    outputNames: ['audio'],
  };
  const assets: KittenAssets = {
    model: new ArrayBuffer(8),
    config: {
      name: 'Kitten TTS Nano',
      model: 'kitten-tts-nano-0.8',
      voices: 'voices.npz',
      voice_aliases: { Bella: 'voice-bella' },
    },
    voices: {
      'voice-bella': { data: new Float32Array([1, 2, 3, 4]), styleCount: 2, styleDim: 2 },
    },
  };
  const reader = new KittenOnnxReader({
    assets,
    voiceAlias: 'Bella',
    phonemize: vi.fn().mockResolvedValue(['hello']),
    audioContextFactory: () => context as unknown as AudioContext,
    sessionFactory: vi.fn().mockResolvedValue(session as never),
  });
  return { reader, run, source, context, audio };
}

describe('KittenOnnxReader', () => {
  it('synthesizes audio, schedules word boundaries, and reuses prepared inference', async () => {
    const { reader, run, source, context, audio } = setup();
    const schedule = vi.fn();
    reader.onBoundarySchedule = schedule;

    await reader.prepare('Hello Kitten.');
    await reader.speak('Hello Kitten.');

    expect(run).toHaveBeenCalledOnce();
    expect(context.createBuffer).toHaveBeenCalledWith(1, 30_000 - 5_000, 24_000);
    expect(audio.copyToChannel).toHaveBeenCalledOnce();
    expect(source.start).toHaveBeenCalledOnce();
    expect(schedule).toHaveBeenCalledWith(
      expect.objectContaining({
        durationMs: 1_000,
        sampleCount: 25_000,
        boundaries: expect.arrayContaining([
          expect.objectContaining({ charIndex: 0, charLength: 5 }),
        ]),
      }),
    );
  });

  it('rejects missing voice data instead of returning silence', async () => {
    const { reader } = setup();
    const subject = new KittenOnnxReader({
      assets: {
        model: new ArrayBuffer(8),
        config: { name: 'Kitten', model: 'nano', voices: '', voice_aliases: { Bella: 'missing' } },
        voices: {},
      },
      voiceAlias: 'Bella',
      phonemize: vi.fn().mockResolvedValue(['hello']),
      sessionFactory: vi.fn().mockResolvedValue({ run: vi.fn(), outputNames: ['audio'] } as never),
    });

    await expect(subject.speak('Hello')).rejects.toThrow('voice embedding is missing');
    expect(reader).toBeDefined();
  });

  it('rejects model output without finite audio', async () => {
    const { reader } = setup();
    const subject = new KittenOnnxReader({
      assets: {
        model: new ArrayBuffer(8),
        config: {
          name: 'Kitten',
          model: 'nano',
          voices: '',
          voice_aliases: { Bella: 'voice-bella' },
        },
        voices: {
          'voice-bella': { data: new Float32Array([1, 2]), styleCount: 1, styleDim: 2 },
        },
      },
      voiceAlias: 'Bella',
      phonemize: vi.fn().mockResolvedValue(['hello']),
      audioContextFactory: () =>
        ({
          createBuffer: vi.fn(() => ({ copyToChannel: vi.fn(), duration: 1 })),
        }) as unknown as AudioContext,
      sessionFactory: vi.fn().mockResolvedValue({
        run: vi.fn().mockResolvedValue({ audio: { data: new Float32Array([Number.NaN]) } }),
        outputNames: ['audio'],
      } as never),
    });

    await expect(subject.speak('Hello')).rejects.toThrow('invalid audio');
    expect(reader).toBeDefined();
  });
});
