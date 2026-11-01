import { describe, expect, it, vi } from 'vitest';
import type { AvailableTextReader } from '../audio/text-reader';
import { PlaybackController } from '../playback/playback-controller';
import {
  type ActiveTabResolver,
  type RuntimeMessage,
  type TabTextFetcher,
  createMessageRouter,
} from './router';

function msg(method: string, args: unknown[] = []): RuntimeMessage {
  return { dest: 'serviceWorker', method, args };
}

function makeRouter(texts: string[] = ['hello world']) {
  const ctrl = new PlaybackController();
  const fetcher: TabTextFetcher = vi.fn().mockResolvedValue(texts);
  const resolver: ActiveTabResolver = vi.fn().mockResolvedValue(99);
  const installedReader: AvailableTextReader = {
    isAvailable: vi.fn().mockResolvedValue(true),
    prepare: vi.fn().mockResolvedValue(undefined),
    speak: vi.fn().mockResolvedValue(undefined),
    pause: vi.fn(),
    resume: vi.fn(),
    stop: vi.fn(),
  };
  const router = createMessageRouter(ctrl, {
    fetchTabText: fetcher,
    resolveActiveTab: resolver,
    installedReader,
  });
  return { ctrl, fetcher, resolver, installedReader, router };
}

describe('createMessageRouter', () => {
  it('handles playTab: resolves active tab, fetches text, plays', async () => {
    const { ctrl, fetcher, resolver, router } = makeRouter(['page text']);

    const result = await router(msg('playTab'));
    expect(result).toEqual({ ok: true });
    expect(resolver).toHaveBeenCalled();
    expect(fetcher).toHaveBeenCalledWith(99);
    expect(ctrl.getState()).toEqual({ state: 'PLAYING', tabId: 99 });
  });

  it('uses explicit tabId when provided', async () => {
    const { ctrl, fetcher, resolver, router } = makeRouter(['page text']);

    await router(msg('playTab', [42]));
    expect(resolver).not.toHaveBeenCalled();
    expect(fetcher).toHaveBeenCalledWith(42);
    expect(ctrl.getState().tabId).toBe(42);
  });

  it('rejects playTab when no text found', async () => {
    const { ctrl, router } = makeRouter([]);

    const result = await router(msg('playTab', [42]));
    expect(result).toEqual({ ok: false, error: 'No readable text found' });
    expect(ctrl.getState().state).toBe('STOPPED');
  });

  it('handles playText', () => {
    const { ctrl, router } = makeRouter();

    router(msg('playText', ['hello world']));
    expect(ctrl.getState().state).toBe('PLAYING');
  });

  it('handles pause and resume', () => {
    const { ctrl, router } = makeRouter();

    router(msg('playText', ['hello']));
    router(msg('pause'));
    expect(ctrl.getState().state).toBe('PAUSED');
    router(msg('resume'));
    expect(ctrl.getState().state).toBe('PLAYING');
  });

  it('handles stop', () => {
    const { ctrl, router } = makeRouter();

    router(msg('playText', ['hello']));
    router(msg('stop'));
    expect(ctrl.getState().state).toBe('STOPPED');
  });

  it('returns playback state via getPlaybackState', () => {
    const { ctrl, router } = makeRouter();

    ctrl.play(7);
    const state = router(msg('getPlaybackState'));
    expect(state).toEqual({ state: 'PLAYING', tabId: 7 });
  });

  it('routes installed voice playback', async () => {
    const { installedReader, router } = makeRouter();

    await expect(router(msg('isInstalledVoiceAvailable'))).resolves.toEqual({
      ok: true,
      available: true,
    });
    await expect(router(msg('prepareInstalledVoice', ['hello', { rate: 1.2 }]))).resolves.toEqual({
      ok: true,
    });
    await expect(router(msg('speakWithInstalledVoice', ['hello', { rate: 1.2 }]))).resolves.toEqual(
      {
        ok: true,
      },
    );
    expect(installedReader.prepare).toHaveBeenCalledWith('hello', { rate: 1.2 });
    expect(installedReader.speak).toHaveBeenCalledWith('hello', { rate: 1.2 });
  });

  it('returns error for unknown method', () => {
    const { router } = makeRouter();

    const result = router(msg('unknownMethod'));
    expect(result).toEqual({ ok: false, error: 'Unknown method: unknownMethod' });
  });
});
