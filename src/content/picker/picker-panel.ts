// PickerPanel — floating panel shown during element-picker mode.
// Shadow-DOM isolated. Shows the selector, match count, action buttons,
// and a list of alternative CSS selectors (candidates).

export interface PickerPanelOptions {
  selector: string;
  matchCount: number;
  candidates: string[];
  onPick(): void;
  onPreview(): void;
  onConfirm(selector: string): void;
  onCancel(): void;
  onSelectCandidate?(selector: string): void;
}

const STYLES = `
  :host { all: initial; }
  * { box-sizing: border-box; margin: 0; padding: 0; }

  .picker-panel {
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2147483646;
    width: 360px;
    max-width: 90vw;
    background: #1a1a2e;
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.4);
    font-family: -apple-system, system-ui, sans-serif;
    color: #e0e0e0;
    font-size: 13px;
    overflow: hidden;
    animation: dita-picker-in 0.2s ease;
  }

  @keyframes dita-picker-in {
    from { opacity: 0; transform: translateX(-50%) translateY(12px); }
    to { opacity: 1; transform: translateX(-50%) translateY(0); }
  }

  .panel-header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;
    background: #2a2a4a;
  }

  .selector-input {
    flex: 1;
    padding: 6px 8px;
    background: #12121e;
    border: 1px solid #4a4a6a;
    border-radius: 6px;
    color: #fff;
    font-size: 13px;
    font-family: monospace;
    outline: none;
    transition: border-color 0.15s;
  }
  .selector-input:focus { border-color: #6c5ce7; }

  .match-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 24px;
    height: 24px;
    padding: 0 6px;
    border-radius: 12px;
    background: #6c5ce7;
    color: #fff;
    font-size: 11px;
    font-weight: 700;
  }
  .match-badge.zero { background: #e74c3c; }

  .panel-body {
    padding: 8px 12px;
  }

  .candidates-label {
    font-size: 11px;
    color: #8b8ba7;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 6px;
  }

  .candidate-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px 8px;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.1s;
    font-family: monospace;
    font-size: 12px;
  }
  .candidate-item:hover { background: #2a2a4a; }
  .candidate-item.active {
    background: rgba(108, 92, 231, 0.2);
    border: 1px solid rgba(108, 92, 231, 0.4);
  }

  .panel-actions {
    display: flex;
    gap: 6px;
    padding: 8px 12px 12px;
  }

  .action-btn {
    flex: 1;
    padding: 8px 0;
    border: none;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.15s;
  }
  .action-pick { background: #3a3a5a; color: #e0e0e0; }
  .action-pick:hover { background: #4a4a6a; }

  .action-preview { background: #3a3a5a; color: #e0e0e0; }
  .action-preview:hover { background: #4a4a6a; }
  .action-preview.active { background: rgba(108, 92, 231, 0.3); color: #fff; }

  .action-confirm { background: #6c5ce7; color: #fff; }
  .action-confirm:hover { background: #7d6ff0; }

  .action-cancel { background: transparent; color: #8b8ba7; flex: 0 0 auto; padding: 8px 12px; }
  .action-cancel:hover { color: #fff; }
`;

export class PickerPanel {
  private host: HTMLDivElement;
  private shadow: ShadowRoot;
  private input: HTMLInputElement;
  private badge: HTMLSpanElement;
  private candidateContainer: HTMLDivElement;
  private selector: string;
  private candidates: string[];

  constructor(private options: PickerPanelOptions) {
    this.selector = options.selector;
    this.candidates = options.candidates;

    this.host = document.createElement('div');
    this.host.id = 'dita-picker-host';
    this.shadow = this.host.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.textContent = STYLES;

    const panel = document.createElement('div');
    panel.className = 'picker-panel';

    // Header: selector input + match count
    const header = document.createElement('div');
    header.className = 'panel-header';

    this.input = document.createElement('input');
    this.input.className = 'selector-input';
    this.input.value = options.selector;
    this.input.addEventListener('input', () => {
      this.selector = this.input.value;
      // Candidates list becomes manual; the user is editing
    });

    this.badge = document.createElement('span');
    this.badge.className = 'match-badge';
    this.badge.setAttribute('data-badge', '');
    this.updateMatchCount(options.matchCount);

    header.append(this.input, this.badge);

    // Body: candidate selectors
    const body = document.createElement('div');
    body.className = 'panel-body';

    const candidatesLabel = document.createElement('div');
    candidatesLabel.className = 'candidates-label';
    candidatesLabel.textContent = 'Selectors';

    this.candidateContainer = document.createElement('div');
    this.renderCandidates();

    body.append(candidatesLabel, this.candidateContainer);

    // Actions: Pick | Preview | Confirm | Cancel
    const actions = document.createElement('div');
    actions.className = 'panel-actions';

    const pickBtn = this.createButton('Pick', 'action-pick', 'pick', () => this.options.onPick());
    const previewBtn = this.createButton('Preview', 'action-preview', 'preview', () =>
      this.options.onPreview(),
    );
    const confirmBtn = this.createButton('Confirm', 'action-confirm', 'confirm', () =>
      this.options.onConfirm(this.selector),
    );
    const cancelBtn = this.createButton('Cancel', 'action-cancel', 'cancel', () =>
      this.options.onCancel(),
    );

    actions.append(pickBtn, previewBtn, confirmBtn, cancelBtn);
    panel.append(header, body, actions);
    this.shadow.append(style, panel);
  }

  mount(): void {
    document.body.appendChild(this.host);
  }

  unmount(): void {
    this.host.remove();
  }

  update(selector: string, matchCount: number, candidates: string[]): void {
    this.selector = selector;
    this.input.value = selector;
    this.candidates = candidates;
    this.updateMatchCount(matchCount);
    this.renderCandidates();
  }

  getSelector(): string {
    return this.selector;
  }

  private updateMatchCount(count: number): void {
    this.badge.textContent = String(count);
    this.badge.className = count === 0 ? 'match-badge zero' : 'match-badge';
  }

  private renderCandidates(): void {
    this.candidateContainer.innerHTML = '';
    for (const candidate of this.candidates) {
      const item = document.createElement('div');
      item.className = candidate === this.selector ? 'candidate-item active' : 'candidate-item';
      item.setAttribute('data-candidate', candidate);
      if (candidate === this.selector) {
        item.setAttribute('data-active', '');
      }
      item.textContent = candidate;
      item.addEventListener('click', () => {
        this.selector = candidate;
        this.input.value = candidate;
        this.options.onSelectCandidate?.(candidate);
        this.renderCandidates();
      });
      this.candidateContainer.appendChild(item);
    }
  }

  private createButton(
    text: string,
    className: string,
    action: string,
    handler: () => void,
  ): HTMLButtonElement {
    const btn = document.createElement('button');
    btn.textContent = text;
    btn.className = `action-btn ${className}`;
    btn.setAttribute('data-action', action);
    btn.addEventListener('click', handler);
    return btn;
  }
}
