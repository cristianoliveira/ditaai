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

import {
  FAST_SPEECH_CHARS_PER_SEC,
  SupertonicOnnxReader,
  speechRate,
} from './supertonic-onnx-reader';

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

  it('serializes preparation because the ONNX session cannot infer concurrently', async () => {
    const audio = audioContext();
    let finishFirstInference: (() => void) | undefined;
    let inferenceActive = false;
    let overlapped = false;
    helper.infer
      .mockImplementationOnce(
        () =>
          new Promise((resolve) => {
            inferenceActive = true;
            finishFirstInference = () => {
              inferenceActive = false;
              resolve({ wav: [0, 0], duration: [1] });
            };
          }),
      )
      .mockImplementationOnce(async () => {
        overlapped = inferenceActive;
        return { wav: [0, 0], duration: [1] };
      });
    const subject = new SupertonicOnnxReader({
      modelAssets: {},
      voiceStyle: new ArrayBuffer(1),
      audioContextFactory: () => audio.context as unknown as AudioContext,
    });

    const first = subject.prepare('lookahead paragraph');
    await vi.waitFor(() => expect(helper.infer).toHaveBeenCalledOnce());
    const second = subject.prepare('jump target paragraph');

    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(overlapped).toBe(false);

    finishFirstInference?.();
    await Promise.all([first, second]);
    expect(helper.infer).toHaveBeenCalledTimes(2);
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

  it('passes per-utterance quality and language to inference', async () => {
    const audio = audioContext();
    const subject = new SupertonicOnnxReader({
      modelAssets: {},
      voiceStyle: new ArrayBuffer(1),
      audioContextFactory: () => audio.context as unknown as AudioContext,
    });

    await subject.speak('next paragraph', { quality: 16, language: 'pt' });

    expect(helper.infer).toHaveBeenCalledWith(
      ['next paragraph'],
      ['pt'],
      expect.anything(),
      16,
      1.05,
    );
  });

  it('falls back to constructor quality and language defaults', async () => {
    const audio = audioContext();
    const subject = new SupertonicOnnxReader({
      modelAssets: {},
      voiceStyle: new ArrayBuffer(1),
      audioContextFactory: () => audio.context as unknown as AudioContext,
    });

    await subject.speak('next paragraph');

    expect(helper.infer).toHaveBeenCalledWith(
      ['next paragraph'],
      ['en'],
      expect.anything(),
      8,
      1.05,
    );
  });

  it('re-infers when quality or language changes between utterances', async () => {
    const audio = audioContext();
    const subject = new SupertonicOnnxReader({
      modelAssets: {},
      voiceStyle: new ArrayBuffer(1),
      audioContextFactory: () => audio.context as unknown as AudioContext,
    });

    await subject.speak('next paragraph', { quality: 8, language: 'en' });
    await subject.speak('next paragraph', { quality: 16, language: 'en' });
    await subject.speak('next paragraph', { quality: 16, language: 'ja' });

    expect(helper.infer).toHaveBeenCalledTimes(3);
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

describe('speechRate', () => {
  it('reports chars per second from spoken chars and playback duration', () => {
    expect(speechRate(150, 10_000)).toEqual({ charsPerSec: 15, anomalous: false });
  });

  it('flags anomalously fast playback (duration predictor under-prediction)', () => {
    // Regression guard: a 783-char segment in ~30s is the observed fast-speech
    // signature (~26 chars/s). Normal speech stays around 15 chars/s.
    const rate = speechRate(783, 30_000);
    expect(rate.charsPerSec).toBeCloseTo(26.1, 1);
    expect(rate.anomalous).toBe(true);
    expect(FAST_SPEECH_CHARS_PER_SEC).toBeLessThan(rate.charsPerSec);
  });

  it('does not flag when there was no playback duration', () => {
    expect(speechRate(150, 0)).toEqual({ charsPerSec: 0, anomalous: false });
  });
});
