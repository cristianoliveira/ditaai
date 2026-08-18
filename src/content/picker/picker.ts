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

import {
  buildTreeIndex,
  candidateChain,
  isNarratable,
  orderedStaticText,
} from '../../domain/accessibility/tree';
import type {
  AccessibilityPickerNode,
  AccessibilitySnapshot,
  AccessibilityTreePort,
} from '../../domain/accessibility/types';
import type { ReadScope } from '../../domain/selection/read-scope';
import { buildCandidates } from '../../domain/selection/selection';
import { logger } from '../../lib/logger';
import { PickerPanel } from '../../ui/picker-panel';
import { theme } from '../../ui/theme';

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
    outline: 2px solid ${theme.accentTint(0.8)};
    background: ${theme.accentTint(0.15)};
    transition: outline 0.1s, background 0.1s;
  }

  .${MATCH_HIGHLIGHT_CLASS} {
    outline: 2px solid ${theme.accentTint(0.5)};
    background: ${theme.accentTint(0.1)};
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
    border-color: ${theme.accent};
  }
  .${HOVER_PREVIEW_CLASS} .hover-count {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 22px;
    height: 22px;
    padding: 0 6px;
    border-radius: 11px;
    background: ${theme.accent};
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

  .${HOVER_PREVIEW_CLASS} .hover-source-toggle {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: #c7c7dc;
    font-size: 11px;
    white-space: nowrap;
    pointer-events: auto;
  }
  .${HOVER_PREVIEW_CLASS} .hover-source-toggle input { accent-color: ${theme.accent}; }

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
    border-color: ${theme.accent};
    color: #fff;
  }
  .${HOVER_PREVIEW_CLASS} .hover-candidate.active {
    background: ${theme.accentTint(0.25)};
    border-color: ${theme.accent};
    color: #fff;
  }

  .dita-picker-ax-bound {
    position: fixed;
    z-index: 2147483646;
    pointer-events: none;
    outline: 2px solid ${theme.accent};
    background: ${theme.accentTint(0.12)};
  }
`;

export class Picker {
  private overlay: HTMLDivElement | null = null;
  private dismissBtn: HTMLButtonElement | null = null;
  private hoverPreview: HTMLDivElement | null = null;
  private hoverInput: HTMLInputElement | null = null;
  private hoverCount: HTMLSpanElement | null = null;
  private hoverCandidates: HTMLDivElement | null = null;
  private sourceCheckbox: HTMLInputElement | null = null;
  private panel: PickerPanel | null = null;
  private hoveredElement: Element | null = null;
  private selectedElement: Element | null = null;
  private selectedSelector: string | null = null;
  private candidates: string[] = [];
  private previewActive = false;
  private styleEl: HTMLStyleElement | null = null;
  private readonly accessibilityPort?: AccessibilityTreePort;
  private accessibilityMode = false;
  private accessibilitySnapshot: AccessibilitySnapshot | null = null;
  private accessibilityIndex: ReadonlyMap<string, AccessibilityPickerNode> = new Map();
  private accessibilityNode: AccessibilityPickerNode | null = null;
  private accessibilityRequest = 0;

  constructor(accessibilityPort?: AccessibilityTreePort) {
    this.accessibilityPort = accessibilityPort;
  }

  enter(initialSelector?: string): Promise<string | null> {
    return this.enterScope(initialSelector).then((result) =>
      typeof result === 'string' ? result : null,
    );
  }

  enterScope(initialSelector?: string): Promise<string | ReadScope | null> {
    logger.info('picker entered');
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
      const cleanup = (selector: string | ReadScope | null) => {
        this.clearAllHighlights();
        this.accessibilityRequest += 1;
        void this.accessibilityPort?.close();
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

  private resolveCleanup: ((selector: string | ReadScope | null) => void) | null = null;

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
    hint.textContent = 'arrows walk · click to select';

    this.hoverCandidates = document.createElement('div');
    this.hoverCandidates.className = 'hover-candidates';

    const sourceLabel = document.createElement('label');
    sourceLabel.className = 'hover-source-toggle';
    this.sourceCheckbox = document.createElement('input');
    this.sourceCheckbox.type = 'checkbox';
    this.sourceCheckbox.setAttribute('data-source', 'accessibility');
    this.sourceCheckbox.addEventListener('click', (event) => event.stopPropagation());
    this.sourceCheckbox.addEventListener('change', () => {
      void this.setAccessibilityMode(this.sourceCheckbox?.checked === true).catch((error) => {
        if (this.sourceCheckbox) this.sourceCheckbox.checked = false;
        if (this.hoverInput) {
          this.hoverInput.value = `Accessibility unavailable: ${String(error)}`;
          this.hoverInput.title = String(error);
        }
        logger.warn(`accessibility picker unavailable: ${String(error)}`);
      });
    });
    const sourceText = document.createElement('span');
    sourceText.textContent = 'Use accessibility tree';
    sourceLabel.append(this.sourceCheckbox, sourceText);

    // Dismiss button (top-right corner)
    this.dismissBtn = document.createElement('button');
    this.dismissBtn.className = 'dita-picker-dismiss';
    this.dismissBtn.textContent = '✕';
    this.dismissBtn.addEventListener('click', () => {
      this.resolveCleanup?.(null);
    });
    document.body.appendChild(this.dismissBtn);

    this.hoverPreview.append(
      this.hoverInput,
      this.hoverCount,
      sourceLabel,
      hint,
      this.hoverCandidates,
    );
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
    this.sourceCheckbox = null;
  }

  // ---- hover ----

  private onOverlayMouseMove = (e: MouseEvent): void => {
    if (this.accessibilityMode) {
      void this.setAccessibilityPoint(e.clientX, e.clientY);
      return;
    }
    const el = this.elementBeneath(e.clientX, e.clientY);
    if (!el || this.isPickerElement(el)) return;
    if (el === this.hoveredElement) return;
    // Precision-first: target the exact element under the cursor (low level).
    // Arrow keys widen up to ancestors; no readable-ancestor snapping.
    this.setHoveredElement(el);
  };

  // Shared by mouse hover and keyboard navigation: highlight `el` and
  // refresh the hover preview (selector, count, candidate chips).
  private setHoveredElement(el: Element): void {
    this.clearHoverHighlight();
    this.hoveredElement = el;
    el.classList.add(HIGHLIGHT_CLASS);
    this.updateHoverPreview(el);
  }

  private navigateAccessibility(direction: 'up' | 'down' | 'left' | 'right'): string | null {
    if (!this.accessibilityNode) return null;
    const node = this.accessibilityIndex.get(this.accessibilityNode.id);
    if (!node) return null;
    const parent = node.parentId ? this.accessibilityIndex.get(node.parentId) : undefined;
    if (direction === 'up') return node.parentId ?? null;
    if (direction === 'down') return node.childIds[0] ?? null;
    if (!parent) return null;
    const index = parent.childIds.indexOf(node.id);
    return direction === 'left'
      ? (parent.childIds[index - 1] ?? null)
      : (parent.childIds[index + 1] ?? null);
  }

  private async setAccessibilityNode(nodeId: string): Promise<void> {
    const node = this.accessibilityIndex.get(nodeId);
    if (!node) return;
    this.accessibilityNode = node;
    this.clearHoverHighlight();
    this.renderAccessibilityPreview(node);
    this.renderAccessibilityBounds(await this.accessibilityPort?.bounds(node.id));
  }

  private async setAccessibilityPoint(x: number, y: number): Promise<void> {
    const request = ++this.accessibilityRequest;
    const node = await this.accessibilityPort?.hitTest({ x, y });
    if (!this.accessibilityMode || request !== this.accessibilityRequest || !node) return;
    this.accessibilityNode = node;
    this.clearHoverHighlight();
    this.renderAccessibilityPreview(node);
    this.renderAccessibilityBounds(await this.accessibilityPort?.bounds(node.id));
  }

  private renderAccessibilityPreview(node: AccessibilityPickerNode): void {
    if (this.hoverInput) {
      const name = node.staticText ?? node.name ?? '';
      const properties =
        node.properties.length > 0
          ? ` [${node.properties.map((property) => `${property.name}=${property.value}`).join(', ')}]`
          : '';
      const value = node.value ? ` = ${node.value}` : '';
      this.hoverInput.value = `${node.role}${name ? `: ${name.slice(0, 80)}` : ''}${value}${properties}`;
      this.hoverInput.readOnly = true;
    }
    if (this.hoverCount) {
      this.hoverCount.textContent = node.role === 'StaticText' ? 'text' : node.role;
      this.hoverCount.className = 'hover-count';
    }
    const candidates = candidateChain(this.accessibilityIndex, node.id).map(
      (candidate) => `${candidate.role}${candidate.name ? `: ${candidate.name.slice(0, 40)}` : ''}`,
    );
    this.renderHoverCandidates(candidates, '');
  }

  private renderAccessibilityBounds(
    bounds: readonly { x: number; y: number; width: number; height: number }[] | undefined,
  ): void {
    this.clearAccessibilityBounds();
    for (const rect of bounds ?? []) {
      const overlay = document.createElement('div');
      overlay.className = 'dita-picker-ax-bound';
      Object.assign(overlay.style, {
        left: `${rect.x}px`,
        top: `${rect.y}px`,
        width: `${rect.width}px`,
        height: `${rect.height}px`,
      });
      document.body.appendChild(overlay);
    }
  }

  private clearAccessibilityBounds(): void {
    for (const el of document.querySelectorAll('.dita-picker-ax-bound')) el.remove();
  }

  private async setAccessibilityMode(enabled: boolean): Promise<void> {
    if (!this.accessibilityPort) return;
    this.accessibilityMode = enabled;
    this.accessibilityRequest += 1;
    this.clearHoverHighlight();
    this.clearAccessibilityBounds();
    if (!enabled) {
      this.accessibilityNode = null;
      this.accessibilitySnapshot = null;
      this.accessibilityIndex = new Map();
      this.hoverInput?.removeAttribute('readonly');
      return;
    }
    const snapshot = await this.accessibilityPort.open();
    this.accessibilitySnapshot = snapshot;
    this.accessibilityIndex = buildTreeIndex(snapshot.nodes);
  }

  private updateHoverPreview(el: Element): void {
    const selectorCandidates = buildCandidates(el);
    const selector = selectorCandidates[0] ?? el.tagName.toLowerCase();
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
      return;
    }
    if (!this.isNavigationKey(e.key)) return;
    // let the user type/edit the selector without walking the tree
    if (document.activeElement === this.hoverInput) return;
    if (!this.isHoverMode()) return;
    e.preventDefault();
    if (this.accessibilityMode) {
      const direction =
        e.key === 'ArrowUp' || e.key === '['
          ? 'up'
          : e.key === 'ArrowDown' || e.key === ']'
            ? 'down'
            : e.key === 'ArrowLeft'
              ? 'left'
              : 'right';
      const nextId = this.accessibilityNode ? this.navigateAccessibility(direction) : null;
      if (nextId) void this.setAccessibilityNode(nextId);
      return;
    }
    const next = this.navigateTree(e.key);
    if (next) this.setHoveredElement(next);
  };

  private onOverlayClick = (e: MouseEvent): void => {
    // Capture the live hovered element (mouse or keyboard nav) before clearing.
    const hovered = this.hoveredElement;
    this.clearHoverHighlight();

    if (this.accessibilityMode && this.accessibilityNode) {
      this.selectedElement = hovered ?? this.elementBeneath(e.clientX, e.clientY);
      if (this.hoverPreview) this.hoverPreview.style.display = 'none';
      if (this.overlay) {
        this.overlay.classList.remove(OVERLAY_INTERACTIVE);
        this.overlay.style.pointerEvents = 'none';
      }
      this.showAccessibilityPanel(this.accessibilityNode);
      return;
    }

    // Use the selector from the hover input (user may have edited it)
    const customSelector = this.hoverInput?.value || '';
    const el = this.elementBeneath(e.clientX, e.clientY);
    if (!el || el === this.overlay) return;

    // If user edited the selector, use that; otherwise use the clicked element
    if (customSelector && customSelector !== this.hoverInput?.getAttribute('data-last-hover')) {
      this.selectedSelector = customSelector;
      this.candidates = [customSelector];
    } else {
      // Prefer the live hovered element (keyboard nav) so clicking locks what
      // is shown; otherwise target the exact element under the cursor.
      const target = hovered ?? el;
      if (!target) return;
      this.selectedElement = target;
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
    this.clearAccessibilityBounds();
    this.clearMatchHighlights();
    if (this.selectedElement) {
      this.selectedElement.classList.remove(HIGHLIGHT_CLASS);
      this.selectedElement = null;
    }
  }

  // ---- panel ----

  private showAccessibilityPanel(node: AccessibilityPickerNode): void {
    const text = orderedStaticText(this.accessibilityIndex, node.id).join(' ').trim();
    const label = `${node.role}${node.name ? `: ${node.name}` : ''}`;
    this.candidates = candidateChain(this.accessibilityIndex, node.id).map(
      (candidate) => `${candidate.role}${candidate.name ? `: ${candidate.name.slice(0, 40)}` : ''}`,
    );
    this.showPanel(label, true, isNarratable(this.accessibilityIndex, node.id), text);
  }

  private showPanel(
    selector: string,
    accessibilityMode = false,
    accessibilityConfirmEnabled = true,
    previewText?: string,
  ): void {
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
      onConfirmAccessibility: () => {
        const scope = this.buildAccessibilityScope();
        if (!scope) return;
        this.clearAllHighlights();
        this.resolveCleanup?.(scope);
      },
      onCancel: () => {
        this.clearAllHighlights();
        this.resolveCleanup?.(null);
      },
      accessibilityMode,
      accessibilityConfirmEnabled,
      previewText,
      onToggleAccessibility: (enabled) => {
        void this.setAccessibilityMode(enabled).catch((error) => {
          if (this.hoverInput) {
            this.hoverInput.value = `Accessibility unavailable: ${String(error)}`;
            this.hoverInput.title = String(error);
          }
          logger.warn(`accessibility picker unavailable: ${String(error)}`);
        });
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

  private buildAccessibilityScope(): ReadScope | null {
    const node = this.accessibilityNode;
    const anchor = this.selectedElement;
    if (!node || !anchor) return null;
    const text = orderedStaticText(this.accessibilityIndex, node.id)
      .join(' ')
      .replace(/\s+/g, ' ')
      .trim();
    if (!text) return null;
    const candidates = buildCandidates(anchor);
    const anchorSelector = candidates.at(-1) ?? anchor.tagName.toLowerCase();
    return {
      source: 'accessibility',
      anchorSelector,
      locator: {
        firstStaticPrefix: text.slice(0, 120),
        staticCount: orderedStaticText(this.accessibilityIndex, node.id).length,
      },
    };
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
      this.hoverCandidates.appendChild(this.createHoverChip(candidate, activeSelector, candidates));
    }
  }

  private createHoverChip(
    candidate: string,
    activeSelector: string,
    candidates: string[],
  ): HTMLSpanElement {
    const chip = document.createElement('span');
    chip.className = candidate === activeSelector ? 'hover-candidate active' : 'hover-candidate';
    chip.textContent = candidate;
    chip.addEventListener('click', (e) => this.selectHoverCandidate(e, candidate, candidates));
    return chip;
  }

  private selectHoverCandidate(e: Event, candidate: string, candidates: string[]): void {
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
  }

  // ---- keyboard tree walk (widen up / drill down / siblings during hover) ----

  private isHoverMode(): boolean {
    return !!this.overlay?.classList.contains(OVERLAY_INTERACTIVE) && !this.panel;
  }

  private isNavigationKey(key: string): boolean {
    return (
      key === 'ArrowUp' ||
      key === 'ArrowDown' ||
      key === 'ArrowLeft' ||
      key === 'ArrowRight' ||
      key === '[' ||
      key === ']'
    );
  }

  private navigateTree(key: string): Element | null {
    const current = this.hoveredElement;
    if (!current) return null;
    let next: Element | null = null;
    switch (key) {
      case 'ArrowUp':
      case '[':
        next = current.parentElement;
        break;
      case 'ArrowDown':
      case ']':
        next = current.firstElementChild;
        break;
      case 'ArrowLeft':
        next = current.previousElementSibling;
        break;
      case 'ArrowRight':
        next = current.nextElementSibling;
        break;
      default:
        return null;
    }
    if (!next || this.isPickerElement(next)) return null;
    // never navigate above body — selecting html/page is never useful here
    if (next.tagName.toLowerCase() === 'html') return null;
    return next;
  }

  private isPickerElement(el: Element): boolean {
    return (
      el === this.overlay ||
      el === this.hoverPreview ||
      el.id === 'dita-picker-host' ||
      el.id === 'dita-widget-host' ||
      el.classList.contains(OVERLAY_CLASS) ||
      el.classList.contains('dita-picker-dismiss')
    );
  }
}
