import { describe, expect, it } from 'vitest';
import { PlaybackController } from './playback-controller';

describe('PlaybackController', () => {
  it('starts in STOPPED state', () => {
    const ctrl = new PlaybackController();
    expect(ctrl.getState().state).toBe('STOPPED');
  });

  it('transitions to PLAYING on play', () => {
    const ctrl = new PlaybackController();
    ctrl.play(42);
    expect(ctrl.getState()).toEqual({ state: 'PLAYING', tabId: 42 });
  });

  it('transitions PLAYING → PAUSED on pause', () => {
    const ctrl = new PlaybackController();
    ctrl.play();
    ctrl.pause();
    expect(ctrl.getState().state).toBe('PAUSED');
  });

  it('transitions PAUSED → PLAYING on resume', () => {
    const ctrl = new PlaybackController();
    ctrl.play();
    ctrl.pause();
    ctrl.resume();
    expect(ctrl.getState().state).toBe('PLAYING');
  });

  it('transitions to STOPPED on stop, clearing tabId', () => {
    const ctrl = new PlaybackController();
    ctrl.play(7);
    ctrl.stop();
    expect(ctrl.getState()).toEqual({ state: 'STOPPED', tabId: undefined });
  });

  it('ignores pause when not playing', () => {
    const ctrl = new PlaybackController();
    ctrl.pause();
    expect(ctrl.getState().state).toBe('STOPPED');
  });

  it('ignores resume when not paused', () => {
    const ctrl = new PlaybackController();
    ctrl.play();
    ctrl.resume();
    expect(ctrl.getState().state).toBe('PLAYING');
  });
});
