import { PAUSE_ICON, PLAY_ICON, STOP_ICON, createIconButton } from '../../content/icons';
import { theme } from '../../content/theme';
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
    this.element.setAttribute('role', 'region');
    this.element.setAttribute('aria-label', 'DitaAi playback controls');
    // Same color source as the on-page player bar: transport buttons must not
    // drift from the shared theme when it is recolored.
    this.element.style.setProperty('--dita-accent', theme.accent);
    this.element.style.setProperty('--dita-accent-hover', theme.accentHover);
    this.element.style.setProperty('--dita-stop', theme.stop);
    this.element.style.setProperty('--dita-stop-hover', theme.stopHover);

    const eyebrow = document.createElement('p');
    eyebrow.className = 'eyebrow';
    eyebrow.textContent = 'DITAAI';

    this.status = document.createElement('p');
    this.status.className = 'status';
    this.status.textContent = 'Ready to listen';
    this.status.setAttribute('aria-live', 'polite');

    const controls = document.createElement('div');
    controls.className = 'controls';

    this.playButton = createIconButton({
      icon: PLAY_ICON,
      label: 'Play page audio',
      className: 'icon-btn icon-play',
      onClick: () => void this.toggle(),
    });
    this.playButton.setAttribute('data-action', 'play');

    const stopButton = createIconButton({
      icon: STOP_ICON,
      label: 'Stop page audio',
      className: 'icon-btn icon-stop',
      onClick: () => void this.stop(),
    });
    stopButton.setAttribute('data-action', 'stop');

    const configurationButton = document.createElement('button');
    configurationButton.className = 'configuration';
    configurationButton.type = 'button';
    configurationButton.setAttribute('data-action', 'configuration');
    configurationButton.textContent = 'Configuration';
    configurationButton.addEventListener('click', () => {
      logInteraction(this.interactionLogger, 'popup', 'open-configuration');
      void this.openConfiguration();
    });

    controls.append(this.playButton, stopButton);
    this.element.append(eyebrow, this.status, controls, configurationButton);
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
      this.playButton.innerHTML = PAUSE_ICON;
      this.playButton.setAttribute('aria-label', 'Pause page audio');
      this.status.textContent = 'Reading this page';
      return;
    }
    if (state.paused) {
      this.playButton.innerHTML = PLAY_ICON;
      this.playButton.setAttribute('aria-label', 'Resume page audio');
      this.status.textContent = 'Paused';
      return;
    }
    this.playButton.innerHTML = PLAY_ICON;
    this.playButton.setAttribute('aria-label', 'Play page audio');
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
