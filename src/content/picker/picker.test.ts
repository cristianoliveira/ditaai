// @vitest-environment happy-dom
import { afterEach, describe, expect, it, vi } from 'vitest';
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
});
