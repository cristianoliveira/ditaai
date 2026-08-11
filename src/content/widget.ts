// Floating playback widget — injected into the page via Shadow DOM.
// Style-isolated so page CSS can't break it.

import type { SequencerState } from '../domain/audio/sequencer';
import type { JumpDirection } from '../domain/playback/jump';
import { theme } from './theme';

export type WidgetState = 'idle' | 'playing' | 'paused';

export interface ParagraphOption {
  /** Stable identifier reported back via onJumpToParagraph. Paragraph index. */
  value: number;
  /** Human-readable label shown in the dropdown. */
  label: string;
}

export interface WidgetCallbacks {
  onPlay(): void;
  onPause(): void;
  onResume(): void;
  onStop(): void;
  onClose(): void;
  onJump?(direction: JumpDirection): void;
  onJumpToParagraph?(paragraphIndex: number): void;
  onSettings?(): void;
  onToggleHighlight?(enabled: boolean): void;
  onSelect?(): void;
  onClearSelection?(): void;
  onDictionary?(): void;
  onChangeRate?(rate: number): void;
  onChangeVolume?(volume: number): void;
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
  .dita-btn:focus-visible,
  .dita-rate:focus-visible,
  .dita-volume:focus-visible {
    outline: 3px solid #fff;
    outline-offset: 3px;
  }
  .dita-btn svg { display: block; width: 16px; height: 16px; fill: currentColor; }

  .dita-btn-play { background: ${theme.accent}; }
  .dita-btn-play:hover { background: ${theme.accentHover}; }

  .dita-btn-stop { background: ${theme.stop}; }
  .dita-btn-stop:hover { background: ${theme.stopHover}; }

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

  .dita-selection-chip {
    display: flex;
    align-items: center;
    gap: 4px;
    max-width: 180px;
    padding: 3px 4px 3px 10px;
    border-radius: 999px;
    background: ${theme.accent};
    color: #fff;
    font-size: 12px;
  }
  .dita-selection-chip[hidden] { display: none; }
  .dita-selection-chip-label {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: ui-monospace, SFMono-Regular, monospace;
  }
  .dita-selection-chip-remove {
    flex: 0 0 auto;
    width: 18px; height: 18px;
    border: none;
    border-radius: 50%;
    background: rgba(0,0,0,0.25);
    color: #fff;
    font-size: 10px;
    line-height: 1;
    cursor: pointer;
  }
  .dita-selection-chip-remove:hover { background: rgba(0,0,0,0.45); }

  .dita-btn-dict {
    width: 28px; height: 28px;
    background: transparent;
    font-size: 13px;
    color: #8b8ba7;
  }
  .dita-btn-dict:hover { background: #2a2a4a; color: #fff; }

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
    background: ${theme.accentTint(0.45)};
  }

  .dita-paragraphs[hidden] { display: none; }
  .dita-paragraphs {
    display: flex;
    align-items: center;
    gap: 2px;
    color: #8b8ba7;
    font-size: 11px;
  }
  .dita-paragraph-pos { min-width: 30px; text-align: center; }

  .dita-btn-paragraphs {
    width: 24px; height: 24px;
    border: none;
    border-radius: 50%;
    background: transparent;
    color: #8b8ba7;
    font-size: 13px;
    line-height: 1;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .dita-btn-paragraphs:hover { background: #2a2a4a; color: #fff; }
  .dita-btn-paragraphs:focus-visible {
    outline: 3px solid #fff;
    outline-offset: 3px;
  }

  .dita-paragraph-popover[hidden] { display: none; }
  .dita-paragraph-popover {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    min-width: 220px;
    max-width: 360px;
    max-height: 280px;
    overflow-y: auto;
    padding: 6px;
    background: #1a1a2e;
    border: 1px solid #2a2a4a;
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.4);
    z-index: 1;
  }
  .dita-paragraph-item {
    display: block;
    width: 100%;
    padding: 7px 10px;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: #c9c9d6;
    font-family: inherit;
    font-size: 12px;
    text-align: left;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .dita-paragraph-item:hover { background: #2a2a4a; color: #fff; }
  .dita-paragraph-item[aria-current='true'] {
    color: #fff;
    background: ${theme.accentTint(0.45)};
  }

  .dita-rate {
    width: 70px;
    accent-color: ${theme.accent};
    cursor: pointer;
  }
  .dita-rate-label {
    font-size: 11px;
    color: #8b8ba7;
    min-width: 28px;
    text-align: center;
  }

  .dita-volume {
    width: 70px;
    accent-color: ${theme.accent};
    cursor: pointer;
  }
  .dita-volume-label {
    font-size: 11px;
    color: #8b8ba7;
    min-width: 36px;
    text-align: center;
  }
`;

/** Inline SVG icons — deterministic and flex-centerable, unlike the ▶/⏸
 * glyphs whose ink sits off-center in the em box and shifts per font/platform. */
const PLAY_ICON =
  '<svg viewBox="0 0 24 24" data-icon="play" aria-hidden="true"><polygon points="5 3 19 12 5 21"/></svg>';
const PAUSE_ICON =
  '<svg viewBox="0 0 24 24" data-icon="pause" aria-hidden="true"><rect x="5" y="4" width="4" height="16" rx="1"/><rect x="15" y="4" width="4" height="16" rx="1"/></svg>';
const STOP_ICON =
  '<svg viewBox="0 0 24 24" data-icon="stop" aria-hidden="true"><rect x="5" y="5" width="14" height="14" rx="2"/></svg>';

export class DitaWidget {
  private host: HTMLDivElement;
  private shadow: ShadowRoot;
  private playBtn: HTMLButtonElement;
  private selectionChip: HTMLDivElement;
  private selectionLabel: HTMLSpanElement;
  private highlightBtn: HTMLButtonElement;
  private rateInput: HTMLInputElement;
  private rateLabel: HTMLSpanElement;
  private volumeInput: HTMLInputElement;
  private volumeLabel: HTMLSpanElement;
  private paragraphGroup: HTMLDivElement;
  private paragraphPos: HTMLSpanElement;
  private paragraphBtn: HTMLButtonElement;
  private paragraphPopover: HTMLDivElement;
  private paragraphOptions: ParagraphOption[] = [];
  private currentParagraph = 0;
  private state: WidgetState = 'idle';
  private highlightEnabled = true;
  private readonly callbacks: WidgetCallbacks;
  private readonly onDocumentClick = (): void => this.closeParagraphPopover();

  constructor(
    callbacks: WidgetCallbacks,
    options?: {
      highlightEnabled?: boolean;
      rate?: number;
      volume?: number;
      selection?: string | null;
    },
  ) {
    this.callbacks = callbacks;
    this.highlightEnabled = options?.highlightEnabled ?? true;
    const initialSelection = options?.selection ?? null;
    const initialRate = options?.rate ?? 1;
    const initialVolume = options?.volume ?? 1;
    this.host = document.createElement('div');
    this.host.id = 'dita-widget-host';
    this.shadow = this.host.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.textContent = STYLES;

    const widget = document.createElement('div');
    widget.className = 'dita-widget';
    widget.setAttribute('role', 'region');
    widget.setAttribute('aria-label', 'DitaAi playback controls');

    const label = document.createElement('span');
    label.className = 'dita-label';
    label.textContent = 'DitaAi';

    this.playBtn = document.createElement('button');
    this.playBtn.className = 'dita-btn dita-btn-play';
    this.playBtn.innerHTML = PLAY_ICON;
    this.playBtn.setAttribute('aria-label', 'Play page audio');
    this.playBtn.addEventListener('click', () => {
      if (this.state === 'playing') {
        callbacks.onPause();
      } else if (this.state === 'paused') {
        callbacks.onResume();
      } else {
        callbacks.onPlay();
      }
    });

    const stopBtn = document.createElement('button');
    stopBtn.className = 'dita-btn dita-btn-stop';
    stopBtn.innerHTML = STOP_ICON;
    stopBtn.setAttribute('aria-label', 'Stop page audio');
    stopBtn.addEventListener('click', callbacks.onStop);

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

    this.paragraphGroup = document.createElement('div');
    this.paragraphGroup.className = 'dita-paragraphs';
    this.paragraphGroup.hidden = true;

    this.paragraphPos = document.createElement('span');
    this.paragraphPos.className = 'dita-paragraph-pos';

    this.paragraphBtn = document.createElement('button');
    this.paragraphBtn.className = 'dita-btn-paragraphs';
    this.paragraphBtn.type = 'button';
    this.paragraphBtn.textContent = '☰';
    this.paragraphBtn.setAttribute('aria-label', 'Jump to paragraph');
    this.paragraphBtn.setAttribute('aria-expanded', 'false');
    this.paragraphBtn.setAttribute('aria-haspopup', 'listbox');
    this.paragraphBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      this.toggleParagraphPopover();
    });

    this.paragraphGroup.append(this.paragraphPos, this.paragraphBtn);

    this.paragraphPopover = document.createElement('div');
    this.paragraphPopover.className = 'dita-paragraph-popover';
    this.paragraphPopover.hidden = true;
    this.paragraphPopover.setAttribute('role', 'listbox');
    this.paragraphPopover.setAttribute('aria-label', 'Jump to paragraph');
    this.paragraphPopover.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') this.closeParagraphPopover();
    });

    const selectBtn = document.createElement('button');
    selectBtn.className = 'dita-btn dita-btn-select';
    selectBtn.textContent = '🔍';
    selectBtn.setAttribute('aria-label', 'Select what to read');
    selectBtn.addEventListener('click', () => callbacks.onSelect?.());

    this.selectionChip = document.createElement('div');
    this.selectionChip.className = 'dita-selection-chip';
    this.selectionChip.hidden = true;

    this.selectionLabel = document.createElement('span');
    this.selectionLabel.className = 'dita-selection-chip-label';

    const removeBtn = document.createElement('button');
    removeBtn.className = 'dita-selection-chip-remove';
    removeBtn.textContent = '✕';
    removeBtn.setAttribute('aria-label', 'Clear read selection');
    removeBtn.addEventListener('click', () => callbacks.onClearSelection?.());

    this.selectionChip.append(this.selectionLabel, removeBtn);
    if (initialSelection) this.setSelection(initialSelection);

    const dictBtn = document.createElement('button');
    dictBtn.className = 'dita-btn dita-btn-dict';
    dictBtn.textContent = '📖';
    dictBtn.setAttribute('aria-label', 'Manage pronunciations');
    dictBtn.addEventListener('click', () => callbacks.onDictionary?.());

    const closeBtn = document.createElement('button');
    closeBtn.className = 'dita-btn dita-btn-close';
    closeBtn.textContent = '✕';
    closeBtn.setAttribute('aria-label', 'Close DitaAi');
    closeBtn.addEventListener('click', callbacks.onClose);

    const settingsBtn = document.createElement('button');
    settingsBtn.className = 'dita-btn dita-btn-settings';
    settingsBtn.textContent = '⚙';
    settingsBtn.setAttribute('aria-label', 'Choose narration voice');
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

    this.volumeInput = document.createElement('input');
    this.volumeInput.type = 'range';
    this.volumeInput.min = '0';
    this.volumeInput.max = '100';
    this.volumeInput.step = '1';
    this.volumeInput.value = String(Math.round(initialVolume * 100));
    this.volumeInput.className = 'dita-volume';
    this.volumeInput.setAttribute('aria-label', 'Volume');
    this.volumeInput.addEventListener('input', () => {
      const percent = Number(this.volumeInput.value);
      this.volumeLabel.textContent = `${percent}%`;
      callbacks.onChangeVolume?.(percent / 100);
    });

    this.volumeLabel = document.createElement('span');
    this.volumeLabel.className = 'dita-volume-label';
    this.volumeLabel.textContent = `${Math.round(initialVolume * 100)}%`;

    widget.append(
      label,
      prevBtn,
      this.playBtn,
      stopBtn,
      nextBtn,
      this.paragraphGroup,
      this.rateInput,
      this.rateLabel,
      this.volumeInput,
      this.volumeLabel,
      selectBtn,
      this.selectionChip,
      dictBtn,
      this.highlightBtn,
      settingsBtn,
      closeBtn,
      this.paragraphPopover,
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

  /** Give keyboard users a predictable entry point to playback controls. */
  focus(): void {
    this.playBtn.focus({ preventScroll: true });
  }

  setState(state: WidgetState): void {
    this.state = state;
    if (state === 'playing') {
      this.playBtn.innerHTML = PAUSE_ICON;
      this.playBtn.className = 'dita-btn dita-btn-play';
      this.playBtn.setAttribute('aria-label', 'Pause page audio');
    } else if (state === 'paused') {
      this.playBtn.innerHTML = PLAY_ICON;
      this.playBtn.setAttribute('aria-label', 'Resume page audio');
    } else {
      this.playBtn.innerHTML = PLAY_ICON;
      this.playBtn.setAttribute('aria-label', 'Play page audio');
    }
  }

  /** Single source of truth for playback reflection. Maps a sequencer state
   * snapshot to the widget's play/pause/idle icon and aria-label. The paragraph
   * position readout is driven separately by setCurrentParagraph, so this stays
   * focused on transport state — the two must not race (e.g. a stale completion
   * clobbering a live session back to idle). */
  reflect(state: SequencerState): void {
    if (state.playing) {
      this.setState('playing');
    } else if (state.paused) {
      this.setState('paused');
    } else {
      this.setState('idle');
    }
  }

  setHighlightEnabled(enabled: boolean): void {
    this.highlightEnabled = enabled;
    this.applyHighlightVisual();
  }

  /** Mirror an external volume change (e.g. keyboard shortcut) into the slider
   * without re-notifying the caller. Takes 0–1. */
  setVolume(volume: number): void {
    const percent = Math.round(Math.min(1, Math.max(0, volume)) * 100);
    this.volumeInput.value = String(percent);
    this.volumeLabel.textContent = `${percent}%`;
  }

  private applyHighlightVisual(): void {
    this.highlightBtn.setAttribute('aria-pressed', String(this.highlightEnabled));
  }

  /** Show the active read selector as a removable chip, or hide it when null.
   * Removing the chip is the explicit way to clear a saved selection. */
  setSelection(selector: string | null): void {
    if (selector) {
      this.selectionLabel.textContent = selector;
      this.selectionChip.hidden = false;
    } else {
      this.selectionChip.hidden = true;
      this.selectionLabel.textContent = '';
    }
  }

  /** Populate the paragraph list. Pass null (or an empty list) to hide the
   * control. `label` is the full text shown for each entry in the popover;
   * `value` is reported back via onJumpToParagraph. */
  setParagraphs(options: readonly ParagraphOption[] | null): void {
    this.paragraphOptions = options ? [...options] : [];
    this.paragraphPopover.replaceChildren();
    if (this.paragraphOptions.length === 0) {
      this.paragraphGroup.hidden = true;
      this.closeParagraphPopover();
      return;
    }
    for (const opt of this.paragraphOptions) {
      const item = document.createElement('button');
      item.type = 'button';
      item.className = 'dita-paragraph-item';
      item.setAttribute('role', 'option');
      item.setAttribute('data-value', String(opt.value));
      item.textContent = opt.label;
      item.addEventListener('click', (event) => {
        event.stopPropagation();
        this.callbacks.onJumpToParagraph?.(opt.value);
        this.setCurrentParagraph(opt.value);
        this.closeParagraphPopover();
      });
      this.paragraphPopover.append(item);
    }
    this.paragraphGroup.hidden = false;
    this.setCurrentParagraph(this.currentParagraph);
  }

  /** Reflect the paragraph currently being read. Updates the compact readout
   * and the highlighted popover entry without firing onJumpToParagraph. */
  setCurrentParagraph(paragraphIndex: number): void {
    this.currentParagraph = paragraphIndex;
    const total = this.paragraphOptions.length;
    this.paragraphPos.textContent = total > 0 ? `${paragraphIndex + 1}/${total}` : '';
    this.markActiveParagraphItem();
  }

  private toggleParagraphPopover(): void {
    if (this.paragraphPopover.hidden) this.openParagraphPopover();
    else this.closeParagraphPopover();
  }

  private openParagraphPopover(): void {
    this.paragraphPopover.hidden = false;
    this.paragraphBtn.setAttribute('aria-expanded', 'true');
    document.addEventListener('click', this.onDocumentClick);
    this.markActiveParagraphItem();
  }

  private closeParagraphPopover(): void {
    this.paragraphPopover.hidden = true;
    this.paragraphBtn.setAttribute('aria-expanded', 'false');
    document.removeEventListener('click', this.onDocumentClick);
  }

  /** Highlight the current paragraph in the popover and, while open, scroll it
   * into view so the listener keeps their place in a long list. */
  private markActiveParagraphItem(): void {
    const items = this.paragraphPopover.querySelectorAll<HTMLButtonElement>('.dita-paragraph-item');
    let active: HTMLButtonElement | null = null;
    for (const item of items) {
      const isActive = Number(item.getAttribute('data-value')) === this.currentParagraph;
      item.setAttribute('aria-current', String(isActive));
      if (isActive) active = item;
    }
    if (active && !this.paragraphPopover.hidden) active.scrollIntoView({ block: 'nearest' });
  }
}
