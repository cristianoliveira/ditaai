// @vitest-environment happy-dom
import { afterEach, describe, expect, it, vi } from 'vitest';
import type { AccessibilityTreePort } from '../../domain/accessibility/types';
import { Picker } from './picker';

function overlay(): HTMLDivElement {
  const el = document.querySelector('#dita-picker-overlay');
  if (!el) throw new Error('overlay not in DOM');
  return el as HTMLDivElement;
}

function panelHost(): HTMLDivElement {
  const el = document.querySelector('#dita-picker-host');
  if (!el) throw new Error('panel host not in DOM');
  return el as HTMLDivElement;
}

function panelShadow(): ShadowRoot {
  const h = panelHost();
  if (!h.shadowRoot) throw new Error('shadow root not found');
  return h.shadowRoot;
}

describe('Picker', () => {
  afterEach(() => {
    document.body.innerHTML = '';
    document.body.style.pointerEvents = '';
    vi.restoreAllMocks();
  });

  function setupPage(): { article: HTMLElement; nav: HTMLElement } {
    document.body.innerHTML = `
      <nav><p>menu</p></nav>
      <article>
        <h1 class="title">Heading</h1>
        <p>First paragraph.</p>
        <p class="target">Target paragraph.</p>
        <p>Last paragraph.</p>
      </article>`;
    const article = document.querySelector('article');
    const nav = document.querySelector('nav');
    if (!article || !nav) throw new Error('setup failed');
    return { article, nav };
  }

  it('enters pick mode and mounts overlay', () => {
    const picker = new Picker();
    void picker.enter();

    expect(document.querySelector('#dita-picker-overlay')).not.toBeNull();
    picker.exit();
  });

  it('exit cleans up overlay and panel', () => {
    const picker = new Picker();
    void picker.enter();

    picker.exit();

    expect(document.querySelector('#dita-picker-overlay')).toBeNull();
    expect(document.querySelector('#dita-picker-host')).toBeNull();
  });

  it('returns the selector when confirmed', async () => {
    setupPage();
    const target = document.querySelector('.target');
    if (!target) throw new Error('setup failed');
    vi.spyOn(document, 'elementFromPoint').mockReturnValue(target);

    const picker = new Picker();
    const promise = picker.enter();

    overlay().dispatchEvent(new MouseEvent('click', { clientX: 100, clientY: 100 }));

    await vi.waitFor(() => {
      return document.querySelector('#dita-picker-host') !== null;
    });

    const confirmBtn = panelShadow().querySelector('[data-action="confirm"]') as HTMLButtonElement;
    confirmBtn.click();

    const result = await promise;
    expect(result).toBeTypeOf('string');
    expect(result?.length).toBeGreaterThan(0);
  });

  it('confirms a narratable accessibility scope', async () => {
    setupPage();
    const target = document.querySelector('.target') as Element;
    vi.spyOn(document, 'elementFromPoint').mockReturnValue(target);
    const port: AccessibilityTreePort = {
      open: vi.fn().mockResolvedValue({
        nodes: [
          {
            id: 'paragraph',
            role: 'paragraph',
            childIds: ['text'],
            properties: [],
            bounds: [],
          },
          {
            id: 'text',
            role: 'StaticText',
            staticText: 'Target paragraph.',
            parentId: 'paragraph',
            childIds: [],
            properties: [],
            bounds: [],
          },
        ],
      }),
      refresh: vi.fn(),
      hitTest: vi.fn().mockResolvedValue({
        id: 'paragraph',
        role: 'paragraph',
        childIds: ['text'],
        properties: [],
        bounds: [],
      }),
      bounds: vi.fn().mockResolvedValue([]),
      close: vi.fn().mockResolvedValue(undefined),
    };

    const picker = new Picker(port);
    const promise = picker.enterScope();
    const source = document.querySelector('[data-source="accessibility"]') as HTMLInputElement;
    source.click();
    await vi.waitFor(() => expect(port.open).toHaveBeenCalled());
    overlay().dispatchEvent(new MouseEvent('mousemove', { clientX: 100, clientY: 100 }));
    await vi.waitFor(() => expect(port.bounds).toHaveBeenCalledWith('paragraph'));
    overlay().dispatchEvent(new MouseEvent('click', { clientX: 100, clientY: 100 }));
    await vi.waitFor(() => expect(document.querySelector('#dita-picker-host')).not.toBeNull());

    const confirm = panelShadow().querySelector('[data-action="confirm"]') as HTMLButtonElement;
    confirm.click();
    await expect(promise).resolves.toMatchObject({
      source: 'accessibility',
      locator: { firstStaticPrefix: 'Target paragraph.', staticCount: 1 },
    });
  });

  it('returns null when cancelled', async () => {
    setupPage();
    const target = document.querySelector('.target');
    if (!target) throw new Error('setup failed');
    vi.spyOn(document, 'elementFromPoint').mockReturnValue(target);

    const picker = new Picker();
    const promise = picker.enter();

    overlay().dispatchEvent(new MouseEvent('click', { clientX: 100, clientY: 100 }));

    await vi.waitFor(() => {
      return document.querySelector('#dita-picker-host') !== null;
    });

    const cancelBtn = panelShadow().querySelector('[data-action="cancel"]') as HTMLButtonElement;
    cancelBtn.click();

    const result = await promise;
    expect(result).toBeNull();
  });

  it('Escape key cancels pick mode before any selection', async () => {
    setupPage();
    const picker = new Picker();
    const promise = picker.enter();

    overlay().dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));

    const result = await promise;
    expect(result).toBeNull();
  });

  it('adds highlight class to hovered element', async () => {
    setupPage();
    const target = document.querySelector('.target');
    if (!target) throw new Error('setup failed');
    vi.spyOn(document, 'elementFromPoint').mockReturnValue(target);

    const picker = new Picker();
    void picker.enter();

    overlay().dispatchEvent(new MouseEvent('mousemove', { clientX: 100, clientY: 100 }));

    await vi
      .waitFor(() => target.classList.contains('dita-picker-hover'), { timeout: 100 })
      .catch(() => {
        // timeout is fine; check directly
      });

    expect(target.classList.contains('dita-picker-hover')).toBe(true);

    picker.exit();
  });

  it('hovers the exact element under the cursor, not its readable ancestor', () => {
    document.body.innerHTML = `
      <article>
        <p class="target">Hello <span class="word">world</span></p>
      </article>`;
    const word = document.querySelector('.word') as Element;
    const target = document.querySelector('.target') as Element;
    vi.spyOn(document, 'elementFromPoint').mockReturnValue(word);

    const picker = new Picker();
    void picker.enter();

    overlay().dispatchEvent(new MouseEvent('mousemove', { clientX: 1, clientY: 1 }));

    // precision-first: low-level element is targeted, not the readable <p>
    expect(word.classList.contains('dita-picker-hover')).toBe(true);
    expect(target.classList.contains('dita-picker-hover')).toBe(false);

    picker.exit();
  });

  it('click on panel Pick button re-enters hover mode', async () => {
    setupPage();
    const target = document.querySelector('.target');
    if (!target) throw new Error('setup failed');
    vi.spyOn(document, 'elementFromPoint').mockReturnValue(target);

    const picker = new Picker();
    void picker.enter();

    const ovl = overlay();
    ovl.dispatchEvent(new MouseEvent('click', { clientX: 100, clientY: 100 }));

    await vi.waitFor(() => {
      return document.querySelector('#dita-picker-host') !== null;
    });

    expect(ovl.classList.contains('dita-picker-overlay')).toBe(true);

    const pickBtn = panelShadow().querySelector('[data-action="pick"]') as HTMLButtonElement;
    pickBtn.click();

    expect(ovl.classList.contains('dita-picker-overlay--interactive')).toBe(true);

    picker.exit();
  });

  describe('keyboard tree navigation', () => {
    function setupNestedPage(): void {
      document.body.innerHTML = `
        <nav><p>menu</p></nav>
        <article>
          <p class="a">A</p>
          <p class="b">B</p>
          <p class="c">C</p>
          <div class="outer">
            <div class="inner">
              <p class="target">Target paragraph.</p>
            </div>
          </div>
        </article>`;
    }

    function hover(el: Element): void {
      vi.spyOn(document, 'elementFromPoint').mockReturnValue(el);
      overlay().dispatchEvent(new MouseEvent('mousemove', { clientX: 1, clientY: 1 }));
    }

    function pressKey(key: string): KeyboardEvent {
      const ev = new KeyboardEvent('keydown', { key, cancelable: true });
      document.dispatchEvent(ev);
      return ev;
    }

    function hoveredEl(): Element | null {
      return document.querySelector('.dita-picker-hover');
    }

    it('ArrowUp moves highlight to the parent element', () => {
      setupNestedPage();
      const target = document.querySelector('.target') as Element;
      const picker = new Picker();
      void picker.enter();

      hover(target);
      pressKey('ArrowUp');

      expect(hoveredEl()).toBe(document.querySelector('.inner'));
      picker.exit();
    });

    it('ArrowDown drills into the first child element', () => {
      setupNestedPage();
      const target = document.querySelector('.target') as Element;
      const picker = new Picker();
      void picker.enter();

      hover(target); // p.target
      pressKey('ArrowUp'); // .inner
      pressKey('ArrowUp'); // .outer
      pressKey('ArrowDown'); // .outer -> .inner

      expect(hoveredEl()).toBe(document.querySelector('.inner'));
      picker.exit();
    });

    it('ArrowDown on a leaf element keeps the current highlight', () => {
      setupNestedPage();
      const target = document.querySelector('.target') as Element;
      const picker = new Picker();
      void picker.enter();

      hover(target); // p has no element children
      pressKey('ArrowDown');

      expect(hoveredEl()).toBe(target);
      picker.exit();
    });

    it('ArrowRight moves to the next sibling', () => {
      setupNestedPage();
      const b = document.querySelector('.b') as Element;
      const picker = new Picker();
      void picker.enter();

      hover(b);
      pressKey('ArrowRight');

      expect(hoveredEl()).toBe(document.querySelector('.c'));
      picker.exit();
    });

    it('ArrowLeft moves to the previous sibling', () => {
      setupNestedPage();
      const b = document.querySelector('.b') as Element;
      const picker = new Picker();
      void picker.enter();

      hover(b);
      pressKey('ArrowLeft');

      expect(hoveredEl()).toBe(document.querySelector('.a'));
      picker.exit();
    });

    it('[ and ] aliases walk parent and child like arrows', () => {
      setupNestedPage();
      const target = document.querySelector('.target') as Element;
      const picker = new Picker();
      void picker.enter();

      hover(target);
      pressKey('[');
      expect(hoveredEl()).toBe(document.querySelector('.inner'));

      pressKey(']');
      expect(hoveredEl()).toBe(target);
      picker.exit();
    });

    it('navigation is ignored while editing the selector input', () => {
      setupNestedPage();
      const target = document.querySelector('.target') as Element;
      const picker = new Picker();
      void picker.enter();

      hover(target);
      const input = document.querySelector('.hover-selector') as HTMLInputElement;
      input.focus();

      pressKey('ArrowUp');

      expect(hoveredEl()).toBe(target);
      picker.exit();
    });

    it('navigation updates the hover selector preview for the new element', () => {
      setupNestedPage();
      const target = document.querySelector('.target') as Element;
      const picker = new Picker();
      void picker.enter();

      hover(target);
      pressKey('ArrowUp'); // -> .inner

      const chips = [...document.querySelectorAll('.hover-candidate')] as HTMLElement[];
      const texts = chips.map((c) => c.textContent);
      expect(texts).toContain('div.inner');
      picker.exit();
    });

    it('navigation keys prevent default to avoid scrolling the page', () => {
      setupNestedPage();
      const target = document.querySelector('.target') as Element;
      const picker = new Picker();
      void picker.enter();

      hover(target);
      const ev = pressKey('ArrowUp');

      expect(ev.defaultPrevented).toBe(true);
      picker.exit();
    });

    it('does not escape above body when walking parents', () => {
      setupNestedPage();
      const target = document.querySelector('.target') as Element;
      const picker = new Picker();
      void picker.enter();

      hover(target);
      pressKey('ArrowUp'); // .inner
      pressKey('ArrowUp'); // .outer
      pressKey('ArrowUp'); // article
      pressKey('ArrowUp'); // body
      expect(hoveredEl()).toBe(document.body);

      pressKey('ArrowUp'); // html is blocked
      expect(hoveredEl()).toBe(document.body);
      picker.exit();
    });

    it('locks the keyboard-navigated element on click, not the element under the cursor', () => {
      setupNestedPage();
      const target = document.querySelector('.target') as Element;
      const inner = document.querySelector('.inner') as Element;
      const picker = new Picker();
      void picker.enter();

      hover(target);
      pressKey('ArrowUp'); // navigate up to .inner

      // click: elementFromPoint still resolves to target (cursor never moved)
      overlay().dispatchEvent(new MouseEvent('click', { clientX: 1, clientY: 1 }));

      expect(inner.classList.contains('dita-picker-hover')).toBe(true);
      expect(target.classList.contains('dita-picker-hover')).toBe(false);
      picker.exit();
    });
  });
});
