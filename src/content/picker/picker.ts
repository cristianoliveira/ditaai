// Picker orchestrator — manages the element-selection pick mode lifecycle.
//
// Flow:
//  enter()
//    → overlay mounts (dim + interactive hover mode)
//    → hover preview box shows current selector + match count
//    → mousemove highlights element under cursor
//    → click locks selection, shows PickerPanel
//  Panel buttons:
//    → Pick: back to hover mode
//    → Preview: temporary hide highlights
//    → Confirm: resolve with selector
//    → Cancel / Escape: resolve with null
//  On resolve: overlay + panel are cleaned up.

import { buildCandidates } from '../../domain/selection/selection';
import { PickerPanel } from './picker-panel';

const OVERLAY_ID = 'dita-picker-overlay';
const HIGHLIGHT_CLASS = 'dita-picker-hover';
const MATCH_HIGHLIGHT_CLASS = 'dita-picker-match';
const OVERLAY_CLASS = 'dita-picker-overlay';
const OVERLAY_INTERACTIVE = 'dita-picker-overlay--interactive';
const HOVER_PREVIEW_CLASS = 'dita-picker-hover-preview';

const OVERLAY_STYLES = `
  .${OVERLAY_CLASS} {
    position: fixed;
    inset: 0;
    z-index: 2147483645;
    background: rgba(0, 0, 0, 0.45);
    cursor: crosshair;
  }
  .${OVERLAY_CLASS}.${OVERLAY_INTERACTIVE} {
    pointer-events: auto;
  }
  .${OVERLAY_CLASS}:not(.${OVERLAY_INTERACTIVE}) {
    pointer-events: none;
  }

  .${HIGHLIGHT_CLASS} {
    outline: 2px solid rgba(108, 92, 231, 0.8);
    background: rgba(108, 92, 231, 0.15);
    transition: outline 0.1s, background 0.1s;
  }

  .${MATCH_HIGHLIGHT_CLASS} {
    outline: 2px solid rgba(108, 92, 231, 0.5);
    background: rgba(108, 92, 231, 0.1);
  }

  .${HOVER_PREVIEW_CLASS} {
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2147483647;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    pointer-events: none;
    background: #1a1a2e;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.4);
    font-family: -apple-system, system-ui, sans-serif;
    font-size: 13px;
    color: #e0e0e0;
  }
  .${HOVER_PREVIEW_CLASS} .hover-selector {
    padding: 4px 8px;
    background: #12121e;
    border: 1px solid #4a4a6a;
    border-radius: 4px;
    color: #fff;
    font-size: 12px;
    font-family: monospace;
    width: 180px;
    outline: none;
    pointer-events: auto;
    transition: border-color 0.15s;
  }
  .${HOVER_PREVIEW_CLASS} .hover-selector:focus {
    border-color: #6c5ce7;
  }
  .${HOVER_PREVIEW_CLASS} .hover-count {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 22px;
    height: 22px;
    padding: 0 6px;
    border-radius: 11px;
    background: #6c5ce7;
    color: #fff;
    font-size: 11px;
    font-weight: 700;
  }
  .${HOVER_PREVIEW_CLASS} .hover-count.zero {
    background: #e74c3c;
  }
  .dita-picker-dismiss {
    position: fixed;
    top: 16px;
    right: 16px;
    z-index: 2147483647;
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 50%;
    background: rgba(26, 26, 46, 0.9);
    color: #8b8ba7;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 12px rgba(0,0,0,0.3);
    transition: background 0.15s, color 0.15s;
  }
  .dita-picker-dismiss:hover {
    background: #2a2a4a;
    color: #fff;
  }

  .${HOVER_PREVIEW_CLASS} .hover-hint {
    font-size: 10px;
    color: #8b8ba7;
    white-space: nowrap;
  }
  .${HOVER_PREVIEW_CLASS} .hover-candidates {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin-top: 4px;
    padding-top: 4px;
    border-top: 1px solid #2a2a4a;
  }
  .${HOVER_PREVIEW_CLASS} .hover-candidate {
    padding: 2px 6px;
    background: #2a2a4a;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: 11px;
    font-family: monospace;
    color: #bbb;
    cursor: pointer;
    pointer-events: auto;
    transition: background 0.1s, border-color 0.1s;
  }
  .${HOVER_PREVIEW_CLASS} .hover-candidate:hover {
    background: #3a3a5a;
    border-color: #6c5ce7;
    color: #fff;
  }
  .${HOVER_PREVIEW_CLASS} .hover-candidate.active {
    background: rgba(108, 92, 231, 0.25);
    border-color: #6c5ce7;
    color: #fff;
  }
`;

export class Picker {
  private overlay: HTMLDivElement | null = null;
  private dismissBtn: HTMLButtonElement | null = null;
  private hoverPreview: HTMLDivElement | null = null;
  private hoverInput: HTMLInputElement | null = null;
  private hoverCount: HTMLSpanElement | null = null;
  private hoverCandidates: HTMLDivElement | null = null;
  private panel: PickerPanel | null = null;
  private hoveredElement: Element | null = null;
  private selectedElement: Element | null = null;
  private selectedSelector: string | null = null;
  private candidates: string[] = [];
  private previewActive = false;
  private styleEl: HTMLStyleElement | null = null;

  enter(initialSelector?: string): Promise<string | null> {
    console.info('[dita] picker entered');
    this.injectStyles();
    this.createOverlay();
    this.overlay?.classList.add(OVERLAY_INTERACTIVE);

    // Pre-populate with an existing selector
    if (initialSelector) {
      this.selectedSelector = initialSelector;
      if (this.hoverInput) {
        this.hoverInput.value = initialSelector;
        this.hoverInput.setAttribute('data-last-hover', initialSelector);
      }
      const count = this.getMatchCount(initialSelector);
      if (this.hoverCount) {
        this.hoverCount.textContent = String(count);
        this.hoverCount.className = count === 0 ? 'hover-count zero' : 'hover-count';
      }
      this.highlightMatches(initialSelector);
    }

    return new Promise((resolve) => {
      const cleanup = (selector: string | null) => {
        this.clearAllHighlights();
        this.removeOverlay();
        this.removePanel();
        this.removeStyles();
        resolve(selector);
      };

      this.overlay?.addEventListener('mousemove', this.onOverlayMouseMove);
      this.overlay?.addEventListener('click', this.onOverlayClick);

      document.addEventListener('keydown', this.onKeyDown, true);

      this.resolveCleanup = cleanup;
    });
  }

  exit(): void {
    this.resolveCleanup?.(null);
  }

  private resolveCleanup: ((selector: string | null) => void) | null = null;

  // ---- overlay management ----

  private injectStyles(): void {
    this.styleEl = document.createElement('style');
    this.styleEl.textContent = OVERLAY_STYLES;
    document.head.appendChild(this.styleEl);
  }

  private removeStyles(): void {
    this.styleEl?.remove();
    this.styleEl = null;
  }

  private createOverlay(): void {
    this.overlay = document.createElement('div');
    this.overlay.id = OVERLAY_ID;
    this.overlay.className = OVERLAY_CLASS;

    // Hover preview box — shows selector + count while hovering
    this.hoverPreview = document.createElement('div');
    this.hoverPreview.className = HOVER_PREVIEW_CLASS;

    this.hoverInput = document.createElement('input');
    this.hoverInput.className = 'hover-selector';
    this.hoverInput.placeholder = 'hover over content…';
    this.hoverInput.addEventListener('input', () => {
      if (this.hoverInput && this.hoverCount) {
        const sel = this.hoverInput.value;
        const count = this.getMatchCount(sel);
        this.hoverCount.textContent = String(count);
        this.hoverCount.className = count === 0 ? 'hover-count zero' : 'hover-count';
        this.highlightMatches(sel);
      }
    });
    this.hoverInput.addEventListener('keydown', (e) => {
      e.stopPropagation();
    });
    this.hoverInput.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    this.hoverCount = document.createElement('span');
    this.hoverCount.className = 'hover-count';
    this.hoverCount.textContent = '0';

    const hint = document.createElement('span');
    hint.className = 'hover-hint';
    hint.textContent = 'click to select';

    this.hoverCandidates = document.createElement('div');
    this.hoverCandidates.className = 'hover-candidates';

    // Dismiss button (top-right corner)
    this.dismissBtn = document.createElement('button');
    this.dismissBtn.className = 'dita-picker-dismiss';
    this.dismissBtn.textContent = '✕';
    this.dismissBtn.addEventListener('click', () => {
      this.resolveCleanup?.(null);
    });
    document.body.appendChild(this.dismissBtn);

    this.hoverPreview.append(this.hoverInput, this.hoverCount, hint, this.hoverCandidates);
    document.body.appendChild(this.hoverPreview);
    document.body.appendChild(this.overlay);
  }

  private removeOverlay(): void {
    document.removeEventListener('keydown', this.onKeyDown, true);
    this.overlay?.removeEventListener('mousemove', this.onOverlayMouseMove);
    this.overlay?.removeEventListener('click', this.onOverlayClick);
    this.overlay?.remove();
    this.overlay = null;
    this.dismissBtn?.remove();
    this.dismissBtn = null;
    this.hoverPreview?.remove();
    this.hoverPreview = null;
    this.hoverInput = null;
    this.hoverCount = null;
    this.hoverCandidates = null;
  }

  // ---- hover ----

  private onOverlayMouseMove = (e: MouseEvent): void => {
    const el = this.elementBeneath(e.clientX, e.clientY);
    if (
      !el ||
      el === this.overlay ||
      el.id === 'dita-picker-host' ||
      el.id === 'dita-widget-host'
    ) {
      return;
    }

    if (el === this.hoveredElement) return;

    this.clearHoverHighlight();

    this.hoveredElement = this.findReadableAncestor(el);
    if (this.hoveredElement) {
      this.hoveredElement.classList.add(HIGHLIGHT_CLASS);

      // Update hover preview box
      const selectorCandidates = buildCandidates(this.hoveredElement);
      const selector = selectorCandidates[0] ?? this.hoveredElement.tagName.toLowerCase();
      if (this.hoverInput) {
        this.hoverInput.value = selector;
        this.hoverInput.setAttribute('data-last-hover', selector);
      }
      const count = selectorCandidates.length > 0 ? this.getMatchCount(selector) : 0;
      if (this.hoverCount) {
        this.hoverCount.textContent = String(count);
        this.hoverCount.className = count === 0 ? 'hover-count zero' : 'hover-count';
      }
      this.renderHoverCandidates(selectorCandidates, selector);
    }
  };

  private clearHoverHighlight(): void {
    if (this.hoveredElement) {
      this.hoveredElement.classList.remove(HIGHLIGHT_CLASS);
      this.hoveredElement = null;
    }
  }

  // ---- click = lock selection ----

  private onKeyDown = (e: KeyboardEvent): void => {
    if (e.key === 'Escape') {
      e.preventDefault();
      this.resolveCleanup?.(null);
    }
  };

  private onOverlayClick = (e: MouseEvent): void => {
    this.clearHoverHighlight();

    // Use the selector from the hover input (user may have edited it)
    const customSelector = this.hoverInput?.value || '';
    const el = this.elementBeneath(e.clientX, e.clientY);
    if (!el || el === this.overlay) return;

    // If user edited the selector, use that; otherwise use the clicked element
    if (customSelector && customSelector !== this.hoverInput?.getAttribute('data-last-hover')) {
      this.selectedSelector = customSelector;
      this.candidates = [customSelector];
    } else {
      this.selectedElement = this.findReadableAncestor(el);
      if (!this.selectedElement) return;
      this.candidates = buildCandidates(this.selectedElement);
      this.selectedSelector = this.candidates[0] ?? this.selectedElement.tagName.toLowerCase();
    }

    const selector = this.selectedSelector ?? '';
    if (!selector) return;

    // Permanently highlight the target element if we have one
    this.selectedElement?.classList.add(HIGHLIGHT_CLASS);

    // Highlight all matching elements
    this.highlightMatches(selector);

    // Hide hover preview
    if (this.hoverPreview) {
      this.hoverPreview.style.display = 'none';
    }

    // Hide overlay interaction
    if (this.overlay) {
      this.overlay.classList.remove(OVERLAY_INTERACTIVE);
      this.overlay.style.pointerEvents = 'none';
    }

    this.showPanel(selector);
  };

  private getMatchCount(selector: string): number {
    try {
      return document.querySelectorAll(selector).length;
    } catch {
      return 0;
    }
  }

  // ---- match highlighting ----

  private highlightMatches(selector: string): void {
    this.clearMatchHighlights();
    try {
      const matches = document.querySelectorAll(selector);
      for (const el of matches) {
        el.classList.add(MATCH_HIGHLIGHT_CLASS);
      }
    } catch {
      // invalid selector — ignore
    }
  }

  private clearMatchHighlights(): void {
    const matches = document.querySelectorAll(`.${MATCH_HIGHLIGHT_CLASS}`);
    for (const el of matches) {
      el.classList.remove(MATCH_HIGHLIGHT_CLASS);
    }
  }

  private clearAllHighlights(): void {
    this.clearHoverHighlight();
    this.clearMatchHighlights();
    if (this.selectedElement) {
      this.selectedElement.classList.remove(HIGHLIGHT_CLASS);
      this.selectedElement = null;
    }
  }

  // ---- panel ----

  private showPanel(selector: string): void {
    if (this.panel) {
      this.panel.update(selector, this.getMatchCount(selector), this.candidates);
      return;
    }

    this.panel = new PickerPanel({
      selector,
      matchCount: this.getMatchCount(selector),
      candidates: this.candidates,
      onPick: () => {
        this.panel?.unmount();
        this.panel = null;
        this.clearAllHighlights();
        this.selectedSelector = null;
        this.selectedElement = null;
        this.candidates = [];
        if (this.hoverPreview) {
          this.hoverPreview.style.display = '';
        }
        if (this.overlay) {
          this.overlay.classList.add(OVERLAY_INTERACTIVE);
          this.overlay.style.pointerEvents = 'auto';
        }
      },
      onPreview: () => {
        this.previewActive = !this.previewActive;
        if (this.previewActive) {
          this.clearAllHighlights();
        } else {
          this.highlightMatches(this.selectedSelector ?? '');
          this.selectedElement?.classList.add(HIGHLIGHT_CLASS);
        }
      },
      onConfirm: (sel) => {
        this.clearAllHighlights();
        this.resolveCleanup?.(sel);
      },
      onCancel: () => {
        this.clearAllHighlights();
        this.resolveCleanup?.(null);
      },
      onSelectCandidate: (sel) => {
        this.selectedSelector = sel;
        this.highlightMatches(sel);
        if (this.panel) {
          this.panel.update(sel, this.getMatchCount(sel), this.candidates);
        }
      },
    });

    this.panel.mount();
  }

  private removePanel(): void {
    this.panel?.unmount();
    this.panel = null;
  }

  // ---- helpers ----

  private elementBeneath(x: number, y: number): Element | null {
    if (!this.overlay) return null;
    this.overlay.style.pointerEvents = 'none';
    const el = document.elementFromPoint(x, y);
    this.overlay.style.pointerEvents = 'auto';
    return el;
  }

  private renderHoverCandidates(candidates: string[], activeSelector: string): void {
    if (!this.hoverCandidates) return;
    this.hoverCandidates.innerHTML = '';
    for (const candidate of candidates) {
      const chip = document.createElement('span');
      chip.className = candidate === activeSelector ? 'hover-candidate active' : 'hover-candidate';
      chip.textContent = candidate;
      chip.addEventListener('click', (e) => {
        e.stopPropagation();
        if (this.hoverInput) {
          this.hoverInput.value = candidate;
          this.hoverInput.setAttribute('data-last-hover', candidate);
        }
        if (this.hoverCount) {
          const count = this.getMatchCount(candidate);
          this.hoverCount.textContent = String(count);
          this.hoverCount.className = count === 0 ? 'hover-count zero' : 'hover-count';
        }
        this.highlightMatches(candidate);
        this.renderHoverCandidates(candidates, candidate);
      });
      this.hoverCandidates.appendChild(chip);
    }
  }

  private findReadableAncestor(el: Element): Element {
    const readable = el.closest('article, p, h1, h2, h3, h4, h5, h6, li, blockquote');
    return readable ?? el;
  }
}
