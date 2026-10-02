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

  it('signals unreadable pages so the popup can offer the PDF rescue action', async () => {
    const send = vi.fn().mockRejectedValue(new Error('Receiving end does not exist.'));
    const onUnreadable = vi.fn();
    const player = new PopupPlayer(send, undefined, loggerSpy(), onUnreadable);
    document.body.append(player.mount());

    await player.refresh();

    expect(onUnreadable).toHaveBeenCalledTimes(1);
  });

  it('treats a silent PDF-viewer page (no state in response) as unreadable', async () => {
    // Chrome's native PDF viewer hosts a content script whose router declines;
    // sendMessage then RESOLVES with undefined instead of rejecting.
    const send = vi.fn().mockResolvedValue(undefined);
    const onUnreadable = vi.fn();
    const player = new PopupPlayer(send, undefined, loggerSpy(), onUnreadable);
    document.body.append(player.mount());

    await player.refresh();

    expect(onUnreadable).toHaveBeenCalledTimes(1);
  });

  it('keeps blank pages out of the rescue path (product UX: page-first)', async () => {
    // Blank HTML answers a valid idle state with readable:false; the CTA
    // stays hidden — only unusable messaging (native PDF viewer, no content
    // script) may offer the PDF rescue action.
    const send = vi.fn().mockResolvedValue({ playing: false, paused: false, readable: false });
    const onUnreadable = vi.fn();
    const player = new PopupPlayer(send, undefined, loggerSpy(), onUnreadable);
    document.body.append(player.mount());

    await player.refresh();

    expect(onUnreadable).not.toHaveBeenCalled();
  });

  it('keeps an idle-but-readable page out of the rescue path', async () => {
    // A readable article that simply is not playing must never offer the CTA.
    const send = vi.fn().mockResolvedValue({ playing: false, paused: false, readable: true });
    const onUnreadable = vi.fn();
    const player = new PopupPlayer(send, undefined, loggerSpy(), onUnreadable);
    document.body.append(player.mount());

    await player.refresh();

    expect(onUnreadable).not.toHaveBeenCalled();
  });

  it('does not signal unreadable for readable pages', async () => {
    const send = vi.fn().mockResolvedValue({ playing: false, paused: false });
    const onUnreadable = vi.fn();
    const player = new PopupPlayer(send, undefined, loggerSpy(), onUnreadable);
    document.body.append(player.mount());

    await player.refresh();

    expect(onUnreadable).not.toHaveBeenCalled();
  });
});
