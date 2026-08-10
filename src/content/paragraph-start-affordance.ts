// Hover affordance for "start reading from here".
//
// While enabled (widget visible), hovering a readable paragraph highlights it
// and shows a small play button on its left side. Clicking the button asks the
// host to begin reading from that paragraph. The affordance knows nothing about
// chunks, indices, or playback — it only reports which element the user picked.

import { theme } from './theme';

export interface ParagraphStartAffordanceDeps {
  /** True for paragraph elements Dita can read. */
  isReadable: (element: Element) => boolean;
  /** Invoked when the user clicks start on a paragraph. */
  onStartFrom: (element: Element) => void;
}

const HOST_ID = 'dita-start-host';
const STYLE_ID = 'dita-start-style';
const CANDIDATE_CLASS = 'dita-start-candidate';
const BUTTON_SIZE = 28;
const GAP = 6;

const SHADOW_STYLE = `
  :host { all: initial; display: block; background: transparent; }
  .dita-start-btn {
    position: absolute;
    top: 0;
    left: 0;
    width: ${BUTTON_SIZE}px;
    height: ${BUTTON_SIZE}px;
    border: none;
    border-radius: 50%;
    background: ${theme.accent};
    color: #fff;
    font-size: 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    z-index: 2147483647;
  }
  .dita-start-btn[hidden] { display: none; }
`;

const PAGE_STYLE = `
  .${CANDIDATE_CLASS} {
    background: ${theme.accentTint(0.12)};
    border-radius: 3px;
  }
`;

function injectPageStyle(): void {
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = PAGE_STYLE;
  document.head.appendChild(style);
}

export class ParagraphStartAffordance {
  private host: HTMLDivElement | null = null;
  private button: HTMLButtonElement | null = null;
  private current: Element | null = null;

  constructor(private readonly deps: ParagraphStartAffordanceDeps) {}

  enable(): void {
    if (this.host) return;
    injectPageStyle();

    this.host = document.createElement('div');
    this.host.id = HOST_ID;

    const shadow = this.host.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    style.textContent = SHADOW_STYLE;

    this.button = document.createElement('button');
    this.button.className = 'dita-start-btn';
    this.button.textContent = '▶';
    this.button.hidden = true;
    this.button.setAttribute('aria-label', 'Start reading from this paragraph');
    this.button.addEventListener('click', () => this.onClick());

    shadow.append(style, this.button);
    document.body.appendChild(this.host);

    document.addEventListener('mouseover', this.onOver);
    window.addEventListener('scroll', this.onScroll, true);
  }

  disable(): void {
    document.removeEventListener('mouseover', this.onOver);
    window.removeEventListener('scroll', this.onScroll, true);
    this.clearCandidate();
    this.host?.remove();
    this.host = null;
    this.button = null;
    this.current = null;
  }

  private onOver = (event: MouseEvent): void => {
    // Moving onto the button itself (retargets to the shadow host) must not
    // change anything, or the button would vanish before the click lands.
    if (event.target === this.host) return;

    const el = this.readableAncestor(event.target);
    if (!el) {
      this.clearCandidate();
      this.current = null;
      this.hide();
      return;
    }
    if (this.current !== el) {
      this.clearCandidate();
      this.current = el;
      el.classList.add(CANDIDATE_CLASS);
    }
    this.position(el);
    this.show();
  };

  private onScroll = (): void => {
    // Keep the button glued to its paragraph while the page scrolls. Fixed
    // positioning is viewport-relative, so it must be recomputed on scroll.
    if (this.current) this.position(this.current);
  };

  private onClick(): void {
    if (this.current) this.deps.onStartFrom(this.current);
    this.clearCandidate();
    this.hide();
  }

  private readableAncestor(target: EventTarget | null): Element | null {
    if (!(target instanceof Element)) return null;
    let el: Element | null = target;
    while (el) {
      if (this.deps.isReadable(el)) return el;
      el = el.parentElement;
    }
    return null;
  }

  /** Place the button on the paragraph's left edge, vertically centered. The
   * host spans from the button to the paragraph's left edge so the pointer
   * never crosses an empty gap (which would hide the button before the click).
   * Fixed positioning + viewport coords so positioned ancestors (e.g. a
   * reader-mode container) can't shift it onto the text. */
  private position(el: Element): void {
    if (!this.host) return;
    const rect = el.getBoundingClientRect();
    const hostWidth = BUTTON_SIZE + GAP;
    this.host.style.position = 'fixed';
    this.host.style.left = `${Math.max(4, rect.left - hostWidth)}px`;
    this.host.style.top = `${rect.top + rect.height / 2 - BUTTON_SIZE / 2}px`;
    this.host.style.width = `${hostWidth}px`;
    this.host.style.height = `${BUTTON_SIZE}px`;
  }

  private clearCandidate(): void {
    if (this.current) this.current.classList.remove(CANDIDATE_CLASS);
  }

  private show(): void {
    if (this.button) this.button.hidden = false;
  }

  private hide(): void {
    if (this.button) this.button.hidden = true;
  }
}
