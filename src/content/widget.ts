// Floating playback widget — injected into the page via Shadow DOM.
// Style-isolated so page CSS can't break it.

import type { JumpDirection } from '../domain/playback/jump';

export type WidgetState = 'idle' | 'playing' | 'paused';

export interface WidgetCallbacks {
  onPlay(): void;
  onPause(): void;
  onResume(): void;
  onStop(): void;
  onClose(): void;
  onJump?(direction: JumpDirection): void;
  onSettings?(): void;
  onToggleHighlight?(enabled: boolean): void;
  onSelect?(): void;
  onChangeRate?(rate: number): void;
}

const STYLES = `
  :host { all: initial; }
  * { box-sizing: border-box; margin: 0; padding: 0; }

  .dita-widget {
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2147483647;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    background: #1a1a2e;
    border-radius: 999px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
    font-family: -apple-system, system-ui, sans-serif;
    color: #fff;
    animation: dita-fade-in 0.2s ease;
  }

  @keyframes dita-fade-in {
    from { opacity: 0; transform: translateX(-50%) translateY(8px); }
    to { opacity: 1; transform: translateX(-50%) translateY(0); }
  }

  .dita-label {
    font-size: 13px;
    font-weight: 600;
    color: #8b8ba7;
    padding: 0 4px;
  }

  .dita-btn {
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 50%;
    background: #4a4a6a;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.15s;
  }
  .dita-btn:hover { background: #5a5a7a; }

  .dita-btn-play { background: #6c5ce7; }
  .dita-btn-play:hover { background: #7d6ff0; }

  .dita-btn-jump {
    width: 32px; height: 32px;
    font-size: 14px;
    background: transparent;
    color: #8b8ba7;
  }
  .dita-btn-jump:hover { background: #2a2a4a; color: #fff; }

  .dita-btn-close {
    width: 28px; height: 28px;
    background: transparent;
    font-size: 14px;
    color: #8b8ba7;
  }
  .dita-btn-close:hover { background: #2a2a4a; color: #fff; }

  .dita-btn-select {
    width: 28px; height: 28px;
    background: transparent;
    font-size: 12px;
    color: #8b8ba7;
  }
  .dita-btn-select:hover { background: #2a2a4a; color: #fff; }

  .dita-btn-settings {
    width: 28px; height: 28px;
    background: transparent;
    font-size: 14px;
    color: #8b8ba7;
  }
  .dita-btn-settings:hover { background: #2a2a4a; color: #fff; }

  .dita-btn-highlight {
    width: 28px; height: 28px;
    background: transparent;
    font-size: 12px;
    font-weight: 700;
    color: #8b8ba7;
  }
  .dita-btn-highlight:hover { background: #2a2a4a; color: #fff; }
  .dita-btn-highlight[aria-pressed='true'] {
    color: #fff;
    background: rgba(108, 92, 231, 0.45);
  }

  .dita-progress {
    font-size: 11px;
    color: #8b8ba7;
    min-width: 32px;
    text-align: center;
  }

  .dita-rate {
    width: 70px;
    accent-color: #6c5ce7;
    cursor: pointer;
  }
  .dita-rate-label {
    font-size: 11px;
    color: #8b8ba7;
    min-width: 28px;
    text-align: center;
  }
`;

export class DitaWidget {
  private host: HTMLDivElement;
  private shadow: ShadowRoot;
  private playBtn: HTMLButtonElement;
  private highlightBtn: HTMLButtonElement;
  private rateInput: HTMLInputElement;
  private rateLabel: HTMLSpanElement;
  private progressEl: HTMLSpanElement;
  private state: WidgetState = 'idle';
  private highlightEnabled = true;

  constructor(callbacks: WidgetCallbacks, options?: { highlightEnabled?: boolean; rate?: number }) {
    this.highlightEnabled = options?.highlightEnabled ?? true;
    const initialRate = options?.rate ?? 1;
    this.host = document.createElement('div');
    this.host.id = 'dita-widget-host';
    this.shadow = this.host.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.textContent = STYLES;

    const widget = document.createElement('div');
    widget.className = 'dita-widget';

    const label = document.createElement('span');
    label.className = 'dita-label';
    label.textContent = 'Dita';

    this.progressEl = document.createElement('span');
    this.progressEl.className = 'dita-progress';

    this.playBtn = document.createElement('button');
    this.playBtn.className = 'dita-btn dita-btn-play';
    this.playBtn.textContent = '▶';
    this.playBtn.addEventListener('click', () => {
      if (this.state === 'playing') {
        callbacks.onPause();
      } else if (this.state === 'paused') {
        callbacks.onResume();
      } else {
        callbacks.onPlay();
      }
    });

    const prevBtn = document.createElement('button');
    prevBtn.className = 'dita-btn dita-btn-jump';
    prevBtn.textContent = '⏮';
    prevBtn.setAttribute('aria-label', 'Previous paragraph');
    prevBtn.addEventListener('click', () => callbacks.onJump?.('backward'));

    const nextBtn = document.createElement('button');
    nextBtn.className = 'dita-btn dita-btn-jump';
    nextBtn.textContent = '⏭';
    nextBtn.setAttribute('aria-label', 'Next paragraph');
    nextBtn.addEventListener('click', () => callbacks.onJump?.('forward'));

    const stopBtn = document.createElement('button');
    stopBtn.className = 'dita-btn';
    stopBtn.textContent = '■';
    stopBtn.addEventListener('click', callbacks.onStop);

    const selectBtn = document.createElement('button');
    selectBtn.className = 'dita-btn dita-btn-select';
    selectBtn.textContent = '🔍';
    selectBtn.setAttribute('aria-label', 'Select what to read');
    selectBtn.addEventListener('click', () => callbacks.onSelect?.());

    const closeBtn = document.createElement('button');
    closeBtn.className = 'dita-btn dita-btn-close';
    closeBtn.textContent = '✕';
    closeBtn.addEventListener('click', callbacks.onClose);

    const settingsBtn = document.createElement('button');
    settingsBtn.className = 'dita-btn dita-btn-settings';
    settingsBtn.textContent = '⚙';
    settingsBtn.addEventListener('click', () => callbacks.onSettings?.());

    this.highlightBtn = document.createElement('button');
    this.highlightBtn.className = 'dita-btn dita-btn-highlight';
    this.highlightBtn.textContent = 'Aa';
    this.highlightBtn.setAttribute('role', 'switch');
    this.highlightBtn.setAttribute('aria-label', 'Toggle word highlighting');
    this.applyHighlightVisual();
    this.highlightBtn.addEventListener('click', () => {
      this.highlightEnabled = !this.highlightEnabled;
      this.applyHighlightVisual();
      callbacks.onToggleHighlight?.(this.highlightEnabled);
    });

    this.rateInput = document.createElement('input');
    this.rateInput.type = 'range';
    this.rateInput.min = '0.5';
    this.rateInput.max = '2';
    this.rateInput.step = '0.25';
    this.rateInput.value = String(initialRate);
    this.rateInput.className = 'dita-rate';
    this.rateInput.setAttribute('aria-label', 'Reading speed');
    this.rateInput.addEventListener('input', () => {
      const rate = Number(this.rateInput.value);
      this.rateLabel.textContent = `${rate}×`;
      callbacks.onChangeRate?.(rate);
    });

    this.rateLabel = document.createElement('span');
    this.rateLabel.className = 'dita-rate-label';
    this.rateLabel.textContent = `${initialRate}×`;

    widget.append(
      label,
      prevBtn,
      this.playBtn,
      nextBtn,
      this.progressEl,
      this.rateInput,
      this.rateLabel,
      stopBtn,
      selectBtn,
      this.highlightBtn,
      settingsBtn,
      closeBtn,
    );
    this.shadow.append(style, widget);
  }

  mount(): void {
    if (!this.host.isConnected) {
      document.body.appendChild(this.host);
    }
  }

  unmount(): void {
    this.host.remove();
  }

  isMounted(): boolean {
    return this.host.isConnected;
  }

  setState(state: WidgetState): void {
    this.state = state;
    if (state === 'playing') {
      this.playBtn.textContent = '⏸';
      this.playBtn.className = 'dita-btn dita-btn-play';
    } else if (state === 'paused') {
      this.playBtn.textContent = '▶';
    } else {
      this.playBtn.textContent = '▶';
      this.progressEl.textContent = '';
    }
  }

  setProgress(current: number, total: number): void {
    this.progressEl.textContent = total > 0 ? `${current}/${total}` : '';
  }

  setHighlightEnabled(enabled: boolean): void {
    this.highlightEnabled = enabled;
    this.applyHighlightVisual();
  }

  private applyHighlightVisual(): void {
    this.highlightBtn.setAttribute('aria-pressed', String(this.highlightEnabled));
  }
}
