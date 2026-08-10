// Pronunciation manager — floating Shadow-DOM panel for curating the dictionary.
// Reached from the widget dictionary button. Lists entries with add / delete /
// preview and a master on/off toggle. Mirrors the picker-panel / popover pattern.

import { theme } from './theme';

export interface PronunciationManagerEntry {
  word: string;
  spoken: string;
}

export interface PronunciationManagerOptions {
  entries: PronunciationManagerEntry[];
  enabled: boolean;
  onAdd(word: string, spoken: string): void;
  onDelete(word: string): void;
  onPreview(spoken: string): void;
  onToggleEnabled(enabled: boolean): void;
  onClose(): void;
}

const STYLES = `
  :host { all: initial; }
  * { box-sizing: border-box; margin: 0; padding: 0; }

  .dita-manager {
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2147483647;
    width: 380px;
    max-width: 90vw;
    max-height: 60vh;
    display: flex;
    flex-direction: column;
    background: #1a1a2e;
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.4);
    font-family: -apple-system, system-ui, sans-serif;
    color: #e0e0e0;
    font-size: 13px;
    overflow: hidden;
    animation: dita-manager-in 0.2s ease;
  }

  @keyframes dita-manager-in {
    from { opacity: 0; transform: translateX(-50%) translateY(12px); }
    to { opacity: 1; transform: translateX(-50%) translateY(0); }
  }

  .dita-header {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 14px;
    background: #2a2a4a;
  }
  .dita-title { font-size: 13px; font-weight: 700; color: #fff; flex: 1; }
  .dita-master { display: flex; align-items: center; gap: 6px; font-size: 11px; color: #8b8ba7; }
  .dita-master input { accent-color: ${theme.accent}; cursor: pointer; }
  .dita-close {
    width: 26px; height: 26px;
    border: none; border-radius: 50%;
    background: transparent; color: #8b8ba7; font-size: 13px; cursor: pointer;
  }
  .dita-close:hover { background: #3a3a5a; color: #fff; }

  .dita-add {
    display: flex;
    gap: 6px;
    padding: 10px 14px;
    background: #1f1f36;
    border-bottom: 1px solid #2a2a4a;
  }
  .dita-input {
    flex: 1;
    min-width: 0;
    padding: 6px 8px;
    background: #12121e;
    border: 1px solid #4a4a6a;
    border-radius: 6px;
    color: #fff;
    font-size: 12px;
    font-family: inherit;
  }
  .dita-input:focus { outline: none; border-color: ${theme.accent}; }
  .dita-add-btn {
    padding: 6px 12px;
    border: none;
    border-radius: 6px;
    background: ${theme.accent};
    color: #fff;
    font-size: 12px;
    font-family: inherit;
    cursor: pointer;
  }
  .dita-add-btn:hover { background: ${theme.accentHover}; }
  .dita-add-btn:disabled { opacity: 0.4; cursor: not-allowed; }

  .dita-list { overflow-y: auto; padding: 6px 0; }

  .dita-entry {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 7px 14px;
  }
  .dita-entry:hover { background: #1f1f36; }
  .dita-entry .dita-word { font-weight: 600; color: #fff; }
  .dita-entry .dita-arrow { color: #5a5a7a; }
  .dita-entry .dita-spoken { color: #b0b0cc; flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .dita-entry button {
    width: 26px; height: 26px;
    border: none; border-radius: 50%;
    background: transparent; color: #8b8ba7; font-size: 11px; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
  }
  .dita-entry button:hover { background: #3a3a5a; color: #fff; }

  .dita-empty {
    padding: 24px 14px;
    text-align: center;
    color: #5a5a7a;
    font-size: 12px;
  }
`;

export class PronunciationManager {
  private host: HTMLDivElement;
  private shadow: ShadowRoot;
  private newWordInput!: HTMLInputElement;
  private newSpokenInput!: HTMLInputElement;
  private addBtn!: HTMLButtonElement;
  private listEl: HTMLElement;
  private toggleEl!: HTMLInputElement;
  private readonly options: PronunciationManagerOptions;
  private entries: PronunciationManagerEntry[];
  private enabled: boolean;

  constructor(options: PronunciationManagerOptions) {
    this.options = options;
    this.entries = options.entries;
    this.enabled = options.enabled;
    this.host = document.createElement('div');
    this.host.id = 'dita-manager-host';
    this.shadow = this.host.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.textContent = STYLES;

    const panel = document.createElement('div');
    panel.className = 'dita-manager';

    const header = this.buildHeader();
    const addRow = this.buildAddRow();
    this.listEl = this.buildList();
    panel.append(header, addRow, this.listEl);
    this.shadow.append(style, panel);

    this.updateAddEnabled();
  }

  /** Re-render the list and toggle in place (no remount, no re-animation). */
  update(entries: PronunciationManagerEntry[], enabled: boolean): void {
    this.entries = entries;
    this.enabled = enabled;
    const fresh = this.buildList();
    this.listEl.replaceWith(fresh);
    this.listEl = fresh;
    this.toggleEl.checked = enabled;
  }

  private buildHeader(): HTMLElement {
    const header = document.createElement('div');
    header.className = 'dita-header';

    const title = document.createElement('div');
    title.className = 'dita-title';
    title.textContent = 'Pronunciations';

    const master = document.createElement('label');
    master.className = 'dita-master';
    const toggle = document.createElement('input');
    toggle.type = 'checkbox';
    // biome-ignore lint/complexity/useLiteralKeys: TS index signature requires bracket notation
    toggle.dataset['toggle'] = 'enabled';
    toggle.checked = this.enabled;
    toggle.addEventListener('change', () => this.options.onToggleEnabled(toggle.checked));
    this.toggleEl = toggle;
    const toggleLabel = document.createElement('span');
    toggleLabel.textContent = 'On';
    master.append(toggle, toggleLabel);

    const closeBtn = document.createElement('button');
    closeBtn.className = 'dita-close';
    closeBtn.textContent = '✕';
    // biome-ignore lint/complexity/useLiteralKeys: TS index signature requires bracket notation
    closeBtn.dataset['action'] = 'close';
    closeBtn.addEventListener('click', () => this.options.onClose());

    header.append(title, master, closeBtn);
    return header;
  }

  private buildAddRow(): HTMLElement {
    const row = document.createElement('div');
    row.className = 'dita-add';

    this.newWordInput = this.makeInput('new-word', 'Word');
    this.newSpokenInput = this.makeInput('new-spoken', 'Say it as');
    this.newWordInput.addEventListener('input', () => this.updateAddEnabled());
    this.newSpokenInput.addEventListener('input', () => this.updateAddEnabled());

    this.addBtn = document.createElement('button');
    this.addBtn.type = 'button';
    this.addBtn.className = 'dita-add-btn';
    this.addBtn.textContent = 'Add';
    // biome-ignore lint/complexity/useLiteralKeys: TS index signature requires bracket notation
    this.addBtn.dataset['action'] = 'add';
    this.addBtn.addEventListener('click', () => {
      this.options.onAdd(this.newWordInput.value.trim(), this.newSpokenInput.value.trim());
      this.newWordInput.value = '';
      this.newSpokenInput.value = '';
      this.updateAddEnabled();
    });

    row.append(this.newWordInput, this.newSpokenInput, this.addBtn);
    return row;
  }

  private makeInput(field: string, placeholder: string): HTMLInputElement {
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'dita-input';
    input.placeholder = placeholder;
    // biome-ignore lint/complexity/useLiteralKeys: TS index signature requires bracket notation
    input.dataset['field'] = field;
    return input;
  }

  private buildList(): HTMLElement {
    const list = document.createElement('div');
    list.className = 'dita-list';

    if (this.entries.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'dita-empty';
      // biome-ignore lint/complexity/useLiteralKeys: TS index signature requires bracket notation
      empty.dataset['empty'] = '';
      empty.textContent = 'No substitutions yet.';
      list.append(empty);
      return list;
    }

    for (const entry of this.entries) {
      list.append(this.buildEntry(entry));
    }
    return list;
  }

  private buildEntry(entry: PronunciationManagerEntry): HTMLElement {
    const row = document.createElement('div');
    row.className = 'dita-entry';
    // biome-ignore lint/complexity/useLiteralKeys: TS index signature requires bracket notation
    row.dataset['entry'] = entry.word;

    const word = document.createElement('span');
    word.className = 'dita-word';
    word.textContent = entry.word;

    const arrow = document.createElement('span');
    arrow.className = 'dita-arrow';
    arrow.textContent = '→';

    const spoken = document.createElement('span');
    spoken.className = 'dita-spoken';
    spoken.textContent = entry.spoken;

    const previewBtn = document.createElement('button');
    previewBtn.type = 'button';
    previewBtn.title = 'Preview';
    previewBtn.textContent = '▶';
    // biome-ignore lint/complexity/useLiteralKeys: TS index signature requires bracket notation
    previewBtn.dataset['action'] = 'preview';
    previewBtn.addEventListener('click', () => this.options.onPreview(entry.spoken));

    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.title = 'Delete';
    deleteBtn.textContent = '🗑';
    // biome-ignore lint/complexity/useLiteralKeys: TS index signature requires bracket notation
    deleteBtn.dataset['action'] = 'delete';
    deleteBtn.addEventListener('click', () => this.options.onDelete(entry.word));

    row.append(word, arrow, spoken, previewBtn, deleteBtn);
    return row;
  }

  private updateAddEnabled(): void {
    this.addBtn.disabled =
      this.newWordInput.value.trim().length === 0 || this.newSpokenInput.value.trim().length === 0;
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
