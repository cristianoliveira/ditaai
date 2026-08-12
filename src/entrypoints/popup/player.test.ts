// @vitest-environment happy-dom
import { afterEach, describe, expect, it, vi } from 'vitest';
import type { Logger } from '../../lib/logger';
import { theme } from '../../ui/theme';
import { PopupPlayer } from './player';

function loggerSpy(): Logger {
  return {
    debug: vi.fn(),
    info: vi.fn(),
    warn: vi.fn(),
    error: vi.fn(),
  };
}

describe('PopupPlayer', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('starts page narration when play is clicked while stopped', async () => {
    const send = vi.fn().mockResolvedValue({ playing: false, paused: false });
    const interactionLogger = loggerSpy();
    const player = new PopupPlayer(send, undefined, interactionLogger);
    document.body.append(player.mount());

    await player.refresh();
    player.element.querySelector<HTMLButtonElement>('[data-action="play"]')?.click();
    await vi.waitFor(() => {
      expect(send).toHaveBeenCalledWith('openWidget');
      expect(send).toHaveBeenLastCalledWith('togglePlay');
    });
    expect(interactionLogger.info).toHaveBeenCalledWith('interaction:play', {
      surface: 'popup',
    });
  });

  it('shows a pause icon while page narration is playing and sends pause', async () => {
    const send = vi.fn().mockResolvedValue({ playing: true, paused: false });
    const player = new PopupPlayer(send);
    document.body.append(player.mount());

    await player.refresh();
    const play = player.element.querySelector<HTMLButtonElement>('[data-action="play"]');
    expect(play?.querySelector('svg[data-icon="pause"]')).not.toBeNull();
    expect(play?.getAttribute('aria-label')).toBe('Pause page audio');
    play?.click();
    await vi.waitFor(() => expect(send).toHaveBeenLastCalledWith('pausePlayback'));
  });

  it('shows a play icon while page narration is paused and sends resume', async () => {
    const send = vi.fn().mockResolvedValue({ playing: false, paused: true });
    const player = new PopupPlayer(send);
    document.body.append(player.mount());

    await player.refresh();
    const play = player.element.querySelector<HTMLButtonElement>('[data-action="play"]');
    expect(play?.querySelector('svg[data-icon="play"]')).not.toBeNull();
    expect(play?.getAttribute('aria-label')).toBe('Resume page audio');
    play?.click();
    await vi.waitFor(() => expect(send).toHaveBeenLastCalledWith('resumePlayback'));
  });

  it('shows a play icon while idle and ready to listen', async () => {
    const send = vi.fn().mockResolvedValue({ playing: false, paused: false });
    const player = new PopupPlayer(send);
    document.body.append(player.mount());

    await player.refresh();
    const play = player.element.querySelector<HTMLButtonElement>('[data-action="play"]');
    expect(play?.querySelector('svg[data-icon="play"]')).not.toBeNull();
    expect(play?.getAttribute('aria-label')).toBe('Play page audio');
    expect(player.element.querySelector('.status')?.textContent).toBe('Ready to listen');
  });

  it('opens configuration in the voices page', async () => {
    const send = vi.fn();
    const openConfiguration = vi.fn().mockResolvedValue(undefined);
    const player = new PopupPlayer(send, openConfiguration);
    document.body.append(player.mount());

    player.element.querySelector<HTMLButtonElement>('[data-action="configuration"]')?.click();

    await vi.waitFor(() => expect(openConfiguration).toHaveBeenCalledOnce());
  });

  it('stops page narration via a stop icon button', async () => {
    const send = vi.fn().mockResolvedValue({ ok: true });
    const player = new PopupPlayer(send);
    document.body.append(player.mount());

    const stop = player.element.querySelector<HTMLButtonElement>('[data-action="stop"]');
    expect(stop?.querySelector('svg[data-icon="stop"]')).not.toBeNull();
    expect(stop?.getAttribute('aria-label')).toBe('Stop page audio');
    stop?.click();
    await vi.waitFor(() => expect(send).toHaveBeenCalledWith('stopPlayback'));
  });

  it('wires the transport buttons to the shared theme colors', () => {
    const player = new PopupPlayer(vi.fn());
    document.body.append(player.mount());

    expect(player.element.style.getPropertyValue('--dita-accent')).toBe(theme.accent);
    expect(player.element.style.getPropertyValue('--dita-stop')).toBe(theme.stop);
  });

  it('opens the on-page player bar alongside the popup', async () => {
    const send = vi.fn().mockResolvedValue({ ok: true });
    const player = new PopupPlayer(send);
    document.body.append(player.mount());

    await player.openPlayerBar();

    expect(send).toHaveBeenCalledWith('openWidget');
  });

  it('does not throw and logs context when the page cannot receive the open request', async () => {
    const error = new Error('Could not establish connection. Receiving end does not exist.');
    const send = vi.fn().mockRejectedValue(error);
    const interactionLogger = loggerSpy();
    const player = new PopupPlayer(send, undefined, interactionLogger);
    document.body.append(player.mount());

    await expect(player.openPlayerBar()).resolves.toBeUndefined();
    expect(interactionLogger.warn).toHaveBeenCalledWith('interaction:request-failed', {
      surface: 'popup',
      method: 'openWidget',
      error,
    });
  });
});
