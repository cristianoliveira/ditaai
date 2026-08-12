// Pronunciation popover — floating Shadow-DOM panel for fixing how a word is
// spoken. Triggered from the page (context menu / selection). Style-isolated so
// page CSS can't break it. Mirrors the widget/picker-panel pattern.

import { theme } from './theme';

export interface PronunciationPopoverOptions {
  /** The word to pronounce differently (pre-fills the word field). */
  word: string;
  /** Existing spoken form, if editing an already-saved substitution. */
  spoken?: string;
  onPreview(word: string, spoken: string): void;
  onSave(word: string, spoken: string): void;
  onCancel(): void;
}

const STYLES = `
  :host { all: initial; }
  * { box-sizing: border-box; margin: 0; padding: 0; }

  .dita-pronunciation {
    position: fixed;
    bottom: 84px; /* clear the 52px widget pill (24 + 52 + gap) */
    left: 50%;
    transform: translateX(-50%);
    z-index: 2147483647;
    width: 340px;
    max-width: 90vw;
    padding: 14px;
    background: #1a1a2e;
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.4);
    font-family: -apple-system, system-ui, sans-serif;
    color: #e0e0e0;
    font-size: 13px;
    animation: dita-popover-in 0.2s ease;
  }

  @keyframes dita-popover-in {
    from { opacity: 0; transform: translateX(-50%) translateY(12px); }
    to { opacity: 1; transform: translateX(-50%) translateY(0); }
  }

  .dita-title {
    font-size: 12px;
    font-weight: 600;
    color: #8b8ba7;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    margin-bottom: 10px;
  }

  .dita-row { margin-bottom: 10px; }
  .dita-row label {
    display: block;
    font-size: 11px;
    color: #8b8ba7;
    margin-bottom: 4px;
  }
  .dita-input {
    width: 100%;
    padding: 7px 9px;
    background: #12121e;
    border: 1px solid #4a4a6a;
    border-radius: 6px;
    color: #fff;
    font-size: 13px;
    font-family: inherit;
  }
  .dita-input:focus { outline: none; border-color: ${theme.accent}; }

  .dita-actions {
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    margin-top: 12px;
  }
  .dita-btn {
    padding: 7px 14px;
    border: none;
    border-radius: 6px;
    font-size: 13px;
    font-family: inherit;
    cursor: pointer;
  }
  .dita-btn-secondary { background: transparent; color: #8b8ba7; }
  .dita-btn-secondary:hover { background: #2a2a4a; color: #fff; }
  .dita-btn-preview { background: #2a2a4a; color: #fff; }
  .dita-btn-preview:hover { background: #3a3a5a; }
  .dita-btn-save { background: ${theme.accent}; color: #fff; }
  .dita-btn-save:hover { background: ${theme.accentHover}; }
  .dita-btn-save:disabled { opacity: 0.4; cursor: not-allowed; }
`;

export class PronunciationPopover {
  private host: HTMLDivElement;
  private shadow: ShadowRoot;
  private wordInput: HTMLInputElement;
  private spokenInput: HTMLInputElement;
  private saveBtn: HTMLButtonElement;
  private readonly options: PronunciationPopoverOptions;

  constructor(options: PronunciationPopoverOptions) {
    this.options = options;
    this.host = document.createElement('div');
    this.host.id = 'dita-pronunciation-host';
    this.shadow = this.host.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.textContent = STYLES;

    const panel = document.createElement('div');
    panel.className = 'dita-pronunciation';

    const title = document.createElement('div');
    title.className = 'dita-title';
    title.textContent = 'Pronounce as';

    const wordField = this.makeField('word', 'Word', options.word);
    this.wordInput = wordField.input;
    const spokenField = this.makeField('spoken', 'Say it as', options.spoken ?? '');
    this.spokenInput = spokenField.input;
    this.spokenInput.addEventListener('input', () => this.updateSaveEnabled());

    const actions = document.createElement('div');
    actions.className = 'dita-actions';

    const cancelBtn = this.makeButton('Cancel', 'dita-btn-secondary', 'cancel');
    cancelBtn.addEventListener('click', () => this.options.onCancel());

    const previewBtn = this.makeButton('Preview', 'dita-btn-preview', 'preview');
    previewBtn.addEventListener('click', () =>
      this.options.onPreview(this.wordInput.value, this.spokenInput.value),
    );

    this.saveBtn = this.makeButton('Save', 'dita-btn-save', 'save');
    this.saveBtn.addEventListener('click', () =>
      this.options.onSave(this.wordInput.value, this.spokenInput.value),
    );

    actions.append(cancelBtn, previewBtn, this.saveBtn);
    panel.append(title, wordField.row, spokenField.row, actions);
    this.shadow.append(style, panel);

    this.updateSaveEnabled();
  }

  private makeField(
    name: string,
    label: string,
    value: string,
  ): { row: HTMLDivElement; input: HTMLInputElement } {
    const row = document.createElement('div');
    row.className = 'dita-row';
    const labelEl = document.createElement('label');
    labelEl.textContent = label;
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'dita-input';
    // biome-ignore lint/complexity/useLiteralKeys: TS index signature requires bracket notation
    input.dataset['field'] = name;
    input.value = value;
    row.append(labelEl, input);
    return { row, input };
  }

  private makeButton(label: string, className: string, action: string): HTMLButtonElement {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `dita-btn ${className}`;
    btn.textContent = label;
    // biome-ignore lint/complexity/useLiteralKeys: TS index signature requires bracket notation
    btn.dataset['action'] = action;
    return btn;
  }

  private updateSaveEnabled(): void {
    this.saveBtn.disabled = this.spokenInput.value.trim().length === 0;
  }

  mount(): void {
    if (!this.host.isConnected) document.body.appendChild(this.host);
  }

  unmount(): void {
    this.host.remove();
  }

  isMounted(): boolean {
    return this.host.isConnected;
  }
}
