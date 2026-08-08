import { describe, expect, it } from 'vitest';
import { PlaybackController } from '../playback/playback-controller';
import { type RuntimeMessage, createMessageRouter } from './router';

function msg(method: string, args: unknown[] = []): RuntimeMessage {
  return { dest: 'serviceWorker', method, args };
}

describe('createMessageRouter', () => {
  it('handles playTab and tracks tabId', () => {
    const ctrl = new PlaybackController();
    const router = createMessageRouter(ctrl);

    router(msg('playTab', [42]));
    expect(ctrl.getState()).toEqual({ state: 'PLAYING', tabId: 42 });
  });

  it('handles playText', () => {
    const ctrl = new PlaybackController();
    const router = createMessageRouter(ctrl);

    router(msg('playText', ['hello world']));
    expect(ctrl.getState().state).toBe('PLAYING');
  });

  it('handles pause and resume', () => {
    const ctrl = new PlaybackController();
    const router = createMessageRouter(ctrl);

    router(msg('playText', ['hello']));
    router(msg('pause'));
    expect(ctrl.getState().state).toBe('PAUSED');
    router(msg('resume'));
    expect(ctrl.getState().state).toBe('PLAYING');
  });

  it('handles stop', () => {
    const ctrl = new PlaybackController();
    const router = createMessageRouter(ctrl);

    router(msg('playText', ['hello']));
    router(msg('stop'));
    expect(ctrl.getState().state).toBe('STOPPED');
  });

  it('returns playback state via getPlaybackState', () => {
    const ctrl = new PlaybackController();
    const router = createMessageRouter(ctrl);

    router(msg('playText', ['hello']));
    const state = router(msg('getPlaybackState'));
    expect(state).toEqual({ state: 'PLAYING', tabId: undefined });
  });

  it('returns error for unknown method', () => {
    const ctrl = new PlaybackController();
    const router = createMessageRouter(ctrl);

    const result = router(msg('unknownMethod'));
    expect(result).toEqual({ ok: false, error: 'Unknown method: unknownMethod' });
  });
});
