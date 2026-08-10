// @vitest-environment happy-dom
import { afterEach, describe, expect, it, vi } from 'vitest';
import { PopupPlayer } from './player';

describe('PopupPlayer', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('starts page narration when play is clicked while stopped', async () => {
    const send = vi.fn().mockResolvedValue({ playing: false, paused: false });
    const player = new PopupPlayer(send);
    document.body.append(player.mount());

    await player.refresh();
    player.element.querySelector<HTMLButtonElement>('[data-action="play"]')?.click();
    await vi.waitFor(() => {
      expect(send).toHaveBeenCalledWith('openWidget');
      expect(send).toHaveBeenLastCalledWith('togglePlay');
    });
  });

  it('shows Pause while page narration is playing and sends pause', async () => {
    const send = vi.fn().mockResolvedValue({ playing: true, paused: false });
    const player = new PopupPlayer(send);
    document.body.append(player.mount());

    await player.refresh();
    const play = player.element.querySelector<HTMLButtonElement>('[data-action="play"]');
    expect(play?.textContent).toBe('Pause');
    play?.click();
    await vi.waitFor(() => expect(send).toHaveBeenLastCalledWith('pausePlayback'));
  });

  it('shows Resume while page narration is paused and sends resume', async () => {
    const send = vi.fn().mockResolvedValue({ playing: false, paused: true });
    const player = new PopupPlayer(send);
    document.body.append(player.mount());

    await player.refresh();
    const play = player.element.querySelector<HTMLButtonElement>('[data-action="play"]');
    expect(play?.textContent).toBe('Resume');
    play?.click();
    await vi.waitFor(() => expect(send).toHaveBeenLastCalledWith('resumePlayback'));
  });

  it('stops page narration', async () => {
    const send = vi.fn().mockResolvedValue({ ok: true });
    const player = new PopupPlayer(send);
    document.body.append(player.mount());

    player.element.querySelector<HTMLButtonElement>('[data-action="stop"]')?.click();
    await vi.waitFor(() => expect(send).toHaveBeenCalledWith('stopPlayback'));
  });
});
