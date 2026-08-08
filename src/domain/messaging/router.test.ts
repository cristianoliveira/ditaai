import { describe, expect, it, vi } from 'vitest';
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
  const router = createMessageRouter(ctrl, { fetchTabText: fetcher, resolveActiveTab: resolver });
  return { ctrl, fetcher, resolver, router };
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

  it('returns error for unknown method', () => {
    const { router } = makeRouter();

    const result = router(msg('unknownMethod'));
    expect(result).toEqual({ ok: false, error: 'Unknown method: unknownMethod' });
  });
});
