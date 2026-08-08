import { describe, expect, it, vi } from 'vitest';
import type { BoundaryEvent } from '../../domain/audio/text-reader';
import { SupertonicReader } from './supertonic-reader';

function silentWav(): ArrayBuffer {
  const samples = 4410;
  const dataSize = samples * 2;
  const buf = new ArrayBuffer(44 + dataSize);
  const dv = new DataView(buf);
  const w = (o: number, s: string) => {
    for (let i = 0; i < s.length; i++) dv.setUint8(o + i, s.charCodeAt(i));
  };
  w(0, 'RIFF');
  dv.setUint32(4, 36 + dataSize, true);
  w(8, 'WAVE');
  w(12, 'fmt ');
  dv.setUint32(16, 16, true);
  dv.setUint16(20, 1, true);
  dv.setUint16(22, 1, true);
  dv.setUint32(24, 44100, true);
  dv.setUint32(28, 88200, true);
  dv.setUint16(32, 2, true);
  dv.setUint16(34, 16, true);
  w(36, 'data');
  dv.setUint32(40, dataSize, true);
  return buf;
}

interface MockSource {
  buffer: AudioBuffer | null;
  playbackRate: { value: number };
  connect: ReturnType<typeof vi.fn>;
  start: ReturnType<typeof vi.fn>;
  stop: ReturnType<typeof vi.fn>;
  disconnect: ReturnType<typeof vi.fn>;
  addEventListener: ReturnType<typeof vi.fn>;
  endedHandler?: (e: Event) => void;
}

function makeSource(): MockSource {
  const s: MockSource = {
    buffer: null,
    playbackRate: { value: 1 },
    connect: vi.fn(),
    start: vi.fn(),
    stop: vi.fn(),
    disconnect: vi.fn(),
    addEventListener: vi.fn((_t: string, h: (e: Event) => void) => {
      s.endedHandler = h;
    }),
  };
  return s;
}

function makeCtx(source: MockSource) {
  return {
    state: 'running',
    currentTime: 0,
    sampleRate: 44100,
    decodeAudioData: vi.fn().mockResolvedValue({ duration: 0.1, length: 4410 }),
    createBufferSource: vi.fn().mockReturnValue(source),
    destination: {},
    suspend: vi.fn().mockResolvedValue(undefined),
    resume: vi.fn().mockResolvedValue(undefined),
  };
}

describe('SupertonicReader', () => {
  it('posts correct body to /v1/tts', async () => {
    const source = makeSource();
    const ctx = makeCtx(source);
    const fetchMock = vi.fn().mockResolvedValue(new Response(silentWav(), { status: 200 }));
    vi.stubGlobal('fetch', fetchMock);

    const reader = new SupertonicReader({
      audioContextFactory: () => ctx as unknown as AudioContext,
    });

    const promise = reader.speak('hello world');
    // Let decode + setup complete
    await new Promise((r) => setTimeout(r, 30));
    expect(fetchMock).toHaveBeenCalledTimes(1);

    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe('http://127.0.0.1:7788/v1/tts');
    const body = JSON.parse(init.body as string);
    expect(body.text).toBe('hello world');
    expect(body.voice).toBe('M1');
    expect(body.lang).toBe('en');

    source.endedHandler?.(new Event('ended'));
    await promise;
  });

  it('handles server errors', async () => {
    vi.stubGlobal(
      'fetch',
      vi
        .fn()
        .mockResolvedValue(
          new Response(JSON.stringify({ error: { message: 'unknown_voice' } }), { status: 400 }),
        ),
    );

    const reader = new SupertonicReader();
    await expect(reader.speak('test')).rejects.toThrow('unknown_voice');
  });

  it('stop aborts inflight fetch', async () => {
    const abortSpy = vi.fn();
    vi.stubGlobal(
      'fetch',
      vi.fn().mockImplementation((_url: string, init?: RequestInit) => {
        const signal = init?.signal as AbortSignal | undefined;
        signal?.addEventListener('abort', abortSpy);
        return new Promise(() => {});
      }),
    );

    const reader = new SupertonicReader();
    reader.speak('test').catch(() => {});
    await new Promise((r) => setTimeout(r, 10));

    reader.stop();
    expect(abortSpy).toHaveBeenCalled();
  });

  it('skips empty text', async () => {
    const reader = new SupertonicReader();
    await expect(reader.speak('   ')).resolves.toBeUndefined();
  });

  it('slices text for resumeFromChar', async () => {
    const source = makeSource();
    const ctx = makeCtx(source);
    const fetchMock = vi.fn().mockResolvedValue(new Response(silentWav(), { status: 200 }));
    vi.stubGlobal('fetch', fetchMock);

    const reader = new SupertonicReader({
      audioContextFactory: () => ctx as unknown as AudioContext,
    });

    reader.speak('hello world', { resumeFromChar: 6 }).catch(() => {});
    await new Promise((r) => setTimeout(r, 30));

    expect(fetchMock).toHaveBeenCalledTimes(1);
    const body = JSON.parse((fetchMock.mock.calls[0]?.[1] as RequestInit)?.body as string);
    expect(body.text).toBe('world');
  });

  it('fires boundary events', async () => {
    const source = makeSource();
    const ctx = makeCtx(source);
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response(silentWav(), { status: 200 })));

    const reader = new SupertonicReader({
      audioContextFactory: () => ctx as unknown as AudioContext,
    });

    const boundaries: BoundaryEvent[] = [];
    const promise = reader.speak('hello world', {
      onBoundary: (e) => boundaries.push(e),
    });

    await new Promise((r) => setTimeout(r, 30));
    source.endedHandler?.(new Event('ended'));
    await promise;

    expect(boundaries).toEqual([
      { charIndex: 0, charLength: 5 },
      { charIndex: 6, charLength: 5 },
    ]);
  });

  it('offsets boundaries when resumeFromChar is set', async () => {
    const source = makeSource();
    const ctx = makeCtx(source);
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response(silentWav(), { status: 200 })));

    const reader = new SupertonicReader({
      audioContextFactory: () => ctx as unknown as AudioContext,
    });

    const boundaries: BoundaryEvent[] = [];
    const promise = reader.speak('hello world', {
      resumeFromChar: 6,
      onBoundary: (e) => boundaries.push(e),
    });

    await new Promise((r) => setTimeout(r, 30));
    source.endedHandler?.(new Event('ended'));
    await promise;

    expect(boundaries).toEqual([{ charIndex: 6, charLength: 5 }]);
  });
});
