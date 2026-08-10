import { afterEach, describe, expect, it, vi } from 'vitest';
import { SpeechSynthesisReader } from './speech-synthesis-reader';

function stubUtterance(): { instances: { volume: number; rate: number; pitch: number }[] } {
  const state = { instances: [] as { volume: number; rate: number; pitch: number }[] };
  vi.stubGlobal(
    'SpeechSynthesisUtterance',
    class {
      volume = 1;
      rate = 1;
      pitch = 1;
      onboundary: unknown;
      onend: unknown;
      onerror: unknown;
      constructor(public text: string) {
        state.instances.push(this);
      }
    },
  );
  return state;
}

function synth(): SpeechSynthesis {
  return {
    speak: vi.fn(),
    pause: vi.fn(),
    resume: vi.fn(),
    cancel: vi.fn(),
  } as unknown as SpeechSynthesis;
}

function firstUtterance(state: { instances: { volume: number; rate: number; pitch: number }[] }) {
  const utterance = state.instances[0];
  if (!utterance) throw new Error('no utterance created');
  return utterance;
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('SpeechSynthesisReader', () => {
  it('sets utterance volume from options', async () => {
    const state = stubUtterance();
    const reader = new SpeechSynthesisReader(synth());

    const promise = reader.speak('hello', { volume: 0.4 });
    const utterance = firstUtterance(state);
    // @ts-expect-error stub uses unknown for handler fields
    utterance.onend();
    await promise;

    expect(utterance.volume).toBe(0.4);
  });

  it('supports zero volume (mute) instead of defaulting', async () => {
    const state = stubUtterance();
    const reader = new SpeechSynthesisReader(synth());

    const promise = reader.speak('hello', { volume: 0 });
    const utterance = firstUtterance(state);
    // @ts-expect-error stub uses unknown for handler fields
    utterance.onend();
    await promise;

    expect(utterance.volume).toBe(0);
  });

  it('defaults to full volume when no option is given', async () => {
    const state = stubUtterance();
    const reader = new SpeechSynthesisReader(synth());

    const promise = reader.speak('hello');
    const utterance = firstUtterance(state);
    // @ts-expect-error stub uses unknown for handler fields
    utterance.onend();
    await promise;

    expect(utterance.volume).toBe(1);
  });
});
