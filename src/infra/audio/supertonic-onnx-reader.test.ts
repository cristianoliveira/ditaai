import { beforeEach, describe, expect, it, vi } from 'vitest';

const helper = vi.hoisted(() => ({
  infer: vi.fn(),
  loadTextToSpeech: vi.fn(),
  loadVoiceStyle: vi.fn(),
  writeWav: vi.fn(),
}));

vi.mock('./supertonic-helper', () => ({
  loadTextToSpeech: helper.loadTextToSpeech,
  loadVoiceStyle: helper.loadVoiceStyle,
  writeWav: helper.writeWav,
}));

import { SupertonicOnnxReader } from './supertonic-onnx-reader';

function audioContext() {
  let ended: (() => void) | undefined;
  const source = {
    buffer: null,
    playbackRate: { value: 0 },
    connect: vi.fn(),
    disconnect: vi.fn(),
    addEventListener: vi.fn((_name: string, listener: () => void) => {
      ended = listener;
    }),
    start: vi.fn(() => ended?.()),
    stop: vi.fn(),
  };
  const gain = {
    gain: { value: 0 },
    connect: vi.fn(),
  };
  const context = {
    state: 'running',
    currentTime: 0,
    destination: {},
    decodeAudioData: vi.fn().mockResolvedValue({ duration: 1 }),
    createBufferSource: vi.fn(() => source),
    createGain: vi.fn(() => gain),
  };
  return { context, source, gain };
}

describe('SupertonicOnnxReader preparation', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    helper.infer.mockResolvedValue({ wav: [0, 0], duration: [1] });
    helper.loadTextToSpeech.mockResolvedValue({
      tts: { infer: helper.infer, sampleRate: 44_100 },
    });
    helper.loadVoiceStyle.mockResolvedValue({});
    helper.writeWav.mockReturnValue(new ArrayBuffer(8));
  });

  it('plays prepared speech without repeating inference', async () => {
    const audio = audioContext();
    const subject = new SupertonicOnnxReader({
      modelAssets: {},
      voiceStyle: new ArrayBuffer(1),
      audioContextFactory: () => audio.context as unknown as AudioContext,
    });

    const onBoundarySchedule = vi.fn();
    subject.onBoundarySchedule = onBoundarySchedule;

    await subject.prepare('next paragraph', { rate: 1.2 });
    await subject.speak('next paragraph', { rate: 1.2 });

    expect(helper.infer).toHaveBeenCalledOnce();
    expect(audio.source.start).toHaveBeenCalledOnce();
    expect(onBoundarySchedule).toHaveBeenCalledWith({
      durationMs: 1_000,
      boundaries: [
        expect.objectContaining({ charIndex: 0, charLength: 4, startFraction: 0 }),
        expect.objectContaining({ charIndex: 5, charLength: 9 }),
      ],
    });
  });

  it('retries preparation after inference fails', async () => {
    const audio = audioContext();
    helper.infer.mockRejectedValueOnce(new Error('inference failed'));
    const subject = new SupertonicOnnxReader({
      modelAssets: {},
      voiceStyle: new ArrayBuffer(1),
      audioContextFactory: () => audio.context as unknown as AudioContext,
    });

    await expect(subject.prepare('next paragraph')).rejects.toThrow('inference failed');
    await expect(subject.speak('next paragraph')).resolves.toBeUndefined();

    expect(helper.infer).toHaveBeenCalledTimes(2);
  });

  it('applies volume through a gain node', async () => {
    const audio = audioContext();
    const subject = new SupertonicOnnxReader({
      modelAssets: {},
      voiceStyle: new ArrayBuffer(1),
      audioContextFactory: () => audio.context as unknown as AudioContext,
    });

    await subject.speak('next paragraph', { volume: 0.4 });

    expect(audio.context.createGain).toHaveBeenCalledOnce();
    expect(audio.gain.gain.value).toBe(0.4);
    expect(audio.source.connect).toHaveBeenCalledWith(audio.gain);
    expect(audio.gain.connect).toHaveBeenCalledWith(audio.context.destination);
  });
});
