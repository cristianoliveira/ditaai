import { logInteraction } from '../../lib/interaction-logger';
import { type Logger, logger } from '../../lib/logger';

export interface PagePlaybackState {
  playing: boolean;
  paused: boolean;
}

export type SendToPage = (method: string) => Promise<unknown>;
export type OpenConfiguration = () => Promise<void>;

/** Small extension-popup player, backed by the active page's sequencer. */
export class PopupPlayer {
  readonly element: HTMLElement;
  private readonly playButton: HTMLButtonElement;
  private readonly status: HTMLElement;
  private state: PagePlaybackState = { playing: false, paused: false };

  constructor(
    private readonly send: SendToPage,
    private readonly openConfiguration: OpenConfiguration = async () => {},
    private readonly interactionLogger: Logger = logger,
  ) {
    this.element = document.createElement('main');
    this.element.className = 'player';
    this.element.innerHTML = `
      <p class="eyebrow">DITAAI</p>
      <p class="status" aria-live="polite">Ready to listen</p>
      <div class="controls">
        <button class="primary" data-action="play" type="button">Play</button>
        <button class="secondary" data-action="stop" type="button">Stop</button>
      </div>
      <button class="configuration" data-action="configuration" type="button">Configuration</button>`;
    const playButton = this.element.querySelector<HTMLButtonElement>('[data-action="play"]');
    const status = this.element.querySelector<HTMLElement>('.status');
    const stopButton = this.element.querySelector<HTMLButtonElement>('[data-action="stop"]');
    const configurationButton = this.element.querySelector<HTMLButtonElement>(
      '[data-action="configuration"]',
    );
    if (!playButton || !status || !stopButton || !configurationButton) {
      throw new Error('Popup player markup is incomplete');
    }

    this.playButton = playButton;
    this.status = status;
    this.playButton.addEventListener('click', () => void this.toggle());
    stopButton.addEventListener('click', () => void this.stop());
    configurationButton.addEventListener('click', () => {
      logInteraction(this.interactionLogger, 'popup', 'open-configuration');
      void this.openConfiguration();
    });
  }

  mount(): HTMLElement {
    return this.element;
  }

  async refresh(): Promise<void> {
    await this.request('getPlaybackState');
  }

  /**
   * Open the on-page player bar so the popup and the floating widget coexist.
   * Best-effort: on pages without a content script the popup falls back to the
   * existing "cannot be read" state via request()'s error handling.
   */
  async openPlayerBar(): Promise<void> {
    await this.request('openWidget');
  }

  private async toggle(): Promise<void> {
    if (this.state.playing) {
      logInteraction(this.interactionLogger, 'popup', 'pause');
      await this.request('pausePlayback');
      return;
    }
    if (this.state.paused) {
      logInteraction(this.interactionLogger, 'popup', 'resume');
      await this.request('resumePlayback');
      return;
    }

    logInteraction(this.interactionLogger, 'popup', 'play');
    await this.request('openWidget');
    await this.request('togglePlay');
  }

  private async stop(): Promise<void> {
    logInteraction(this.interactionLogger, 'popup', 'stop');
    await this.request('stopPlayback');
  }

  private async request(method: string): Promise<void> {
    try {
      const result = await this.send(method);
      if (isPagePlaybackState(result)) this.reflect(result);
    } catch (error) {
      this.interactionLogger.warn('interaction:request-failed', {
        surface: 'popup',
        method,
        error,
      });
      this.status.textContent = 'This page cannot be read';
      this.playButton.disabled = true;
    }
  }

  private reflect(state: PagePlaybackState): void {
    this.state = state;
    if (state.playing) {
      this.playButton.textContent = 'Pause';
      this.status.textContent = 'Reading this page';
      return;
    }
    if (state.paused) {
      this.playButton.textContent = 'Resume';
      this.status.textContent = 'Paused';
      return;
    }
    this.playButton.textContent = 'Play';
    this.status.textContent = 'Ready to listen';
  }
}

function isPagePlaybackState(value: unknown): value is PagePlaybackState {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof (value as PagePlaybackState).playing === 'boolean' &&
    typeof (value as PagePlaybackState).paused === 'boolean'
  );
}
