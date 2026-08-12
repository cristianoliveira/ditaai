// @vitest-environment happy-dom
import { afterEach, describe, expect, it } from 'vitest';
import { PickerPanel } from './picker-panel';

function host(): HTMLDivElement {
  const el = document.querySelector('#dita-picker-host');
  if (!el) throw new Error('picker host not in DOM');
  return el as HTMLDivElement;
}

function shadow(host: HTMLDivElement): ShadowRoot {
  if (!host.shadowRoot) throw new Error('shadow root not found');
  return host.shadowRoot;
}

describe('PickerPanel', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('mounts a shadow-DOM panel on document.body', () => {
    const panel = new PickerPanel({
      selector: 'p',
      matchCount: 5,
      candidates: ['p', 'article > p', '.content p'],
      onPick: () => {},
      onPreview: () => {},
      onConfirm: () => {},
      onCancel: () => {},
    });

    panel.mount();
    expect(document.body.querySelector('#dita-picker-host')).not.toBeNull();
  });

  it('displays the selector text', () => {
    const panel = new PickerPanel({
      selector: 'article p',
      matchCount: 3,
      candidates: ['article p'],
      onPick: () => {},
      onPreview: () => {},
      onConfirm: () => {},
      onCancel: () => {},
    });

    panel.mount();
    const input = shadow(host()).querySelector('input');

    expect(input).not.toBeNull();
    expect((input as HTMLInputElement).value).toBe('article p');
  });

  it('shows match count badge next to the selector', () => {
    const panel = new PickerPanel({
      selector: 'h2',
      matchCount: 7,
      candidates: ['h2'],
      onPick: () => {},
      onPreview: () => {},
      onConfirm: () => {},
      onCancel: () => {},
    });

    panel.mount();
    const badge = shadow(host()).querySelector<HTMLSpanElement>('[data-badge]');

    expect(badge).not.toBeNull();
    expect(badge?.textContent).toContain('7');
  });

  it('unmount removes the host from the DOM', () => {
    const panel = new PickerPanel({
      selector: 'p',
      matchCount: 1,
      candidates: ['p'],
      onPick: () => {},
      onPreview: () => {},
      onConfirm: () => {},
      onCancel: () => {},
    });

    panel.mount();
    expect(document.body.querySelector('#dita-picker-host')).not.toBeNull();

    panel.unmount();
    expect(document.body.querySelector('#dita-picker-host')).toBeNull();
  });

  it('fires onConfirm when Confirm button is clicked', () => {
    let confirmed = false;
    let confirmedSelector = '';
    const panel = new PickerPanel({
      selector: '.article-body',
      matchCount: 1,
      candidates: ['.article-body'],
      onPick: () => {},
      onPreview: () => {},
      onConfirm: (selector) => {
        confirmed = true;
        confirmedSelector = selector;
      },
      onCancel: () => {},
    });

    panel.mount();
    const confirmBtn = shadow(host()).querySelector('[data-action="confirm"]') as HTMLButtonElement;

    confirmBtn.click();

    expect(confirmed).toBe(true);
    expect(confirmedSelector).toBe('.article-body');
  });

  it('fires onCancel when Cancel button is clicked', () => {
    let cancelled = false;
    const panel = new PickerPanel({
      selector: 'p',
      matchCount: 0,
      candidates: ['p'],
      onPick: () => {},
      onPreview: () => {},
      onConfirm: () => {},
      onCancel: () => {
        cancelled = true;
      },
    });

    panel.mount();
    const cancelBtn = shadow(host()).querySelector('[data-action="cancel"]') as HTMLButtonElement;

    cancelBtn.click();

    expect(cancelled).toBe(true);
  });

  it('fires onPick when Pick button is clicked', () => {
    let picked = false;
    const panel = new PickerPanel({
      selector: 'div',
      matchCount: 10,
      candidates: ['div'],
      onPick: () => {
        picked = true;
      },
      onPreview: () => {},
      onConfirm: () => {},
      onCancel: () => {},
    });

    panel.mount();
    const pickBtn = shadow(host()).querySelector('[data-action="pick"]') as HTMLButtonElement;

    pickBtn.click();

    expect(picked).toBe(true);
  });

  it('fires onPreview when Preview button is clicked', () => {
    let previewed = false;
    const panel = new PickerPanel({
      selector: 'h1',
      matchCount: 1,
      candidates: ['h1'],
      onPick: () => {},
      onPreview: () => {
        previewed = true;
      },
      onConfirm: () => {},
      onCancel: () => {},
    });

    panel.mount();
    const previewBtn = shadow(host()).querySelector('[data-action="preview"]') as HTMLButtonElement;

    previewBtn.click();

    expect(previewed).toBe(true);
  });

  it('shows candidate alternatives as clickable items', () => {
    let selectedCandidate: string | null = null;
    const panel = new PickerPanel({
      selector: 'span.name',
      matchCount: 1,
      candidates: ['span', 'span.name', 'p > span.name'],
      onSelectCandidate: (sel) => {
        selectedCandidate = sel;
      },
      onPick: () => {},
      onPreview: () => {},
      onConfirm: () => {},
      onCancel: () => {},
    });

    panel.mount();
    const items = shadow(host()).querySelectorAll('[data-candidate]');
    expect(items.length).toBe(3);

    (items[1] as HTMLElement).click();
    expect(selectedCandidate).toBe('span.name');
  });

  it('highlights the currently selected candidate', () => {
    const panel = new PickerPanel({
      selector: 'span.name',
      matchCount: 1,
      candidates: ['span', 'span.name', 'p > span.name'],
      onPick: () => {},
      onPreview: () => {},
      onConfirm: () => {},
      onCancel: () => {},
    });

    panel.mount();
    const activeItem = shadow(host()).querySelector('[data-candidate][data-active]');

    expect(activeItem).not.toBeNull();
    expect(activeItem?.textContent).toContain('span.name');
  });
});
