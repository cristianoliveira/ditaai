// @vitest-environment happy-dom
import { afterEach, describe, expect, it } from 'vitest';
import { PronunciationManager, type PronunciationManagerEntry } from './pronunciation-manager';

function host(): HTMLDivElement {
  const el = document.querySelector('#dita-manager-host');
  if (!el) throw new Error('manager host not in DOM');
  return el as HTMLDivElement;
}

function shadow(): ShadowRoot {
  if (!host().shadowRoot) throw new Error('shadow root not found');
  return host().shadowRoot as ShadowRoot;
}

function setField(name: 'new-word' | 'new-spoken', value: string): void {
  const input = shadow().querySelector<HTMLInputElement>(`[data-field="${name}"]`);
  if (!input) throw new Error(`field ${name} not found`);
  input.value = value;
  input.dispatchEvent(new Event('input', { bubbles: true }));
}

function clickEntryAction(word: string, action: 'preview' | 'delete'): void {
  const row = shadow().querySelector(`[data-entry="${word}"]`);
  const btn = row?.querySelector<HTMLButtonElement>(`[data-action="${action}"]`);
  if (!btn) throw new Error(`${action} for ${word} not found`);
  btn.click();
}

describe('PronunciationManager', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  const baseEntries: PronunciationManagerEntry[] = [
    { word: 'ZSH', spoken: 'Z shell' },
    { word: 'SQL', spoken: 'sequel' },
  ];

  function make(
    overrides: Partial<{
      entries: PronunciationManagerEntry[];
      enabled: boolean;
      onAdd: (w: string, s: string) => void;
      onDelete: (w: string) => void;
      onPreview: (s: string) => void;
      onToggleEnabled: (e: boolean) => void;
      onClose: () => void;
    }> = {},
  ) {
    return new PronunciationManager({
      entries: baseEntries,
      enabled: true,
      onAdd: () => {},
      onDelete: () => {},
      onPreview: () => {},
      onToggleEnabled: () => {},
      onClose: () => {},
      ...overrides,
    });
  }

  it('mounts a shadow-DOM panel on document.body', () => {
    make().mount();
    expect(document.body.querySelector('#dita-manager-host')).not.toBeNull();
  });

  it('renders each entry as word -> spoken', () => {
    make().mount();
    const rows = shadow().querySelectorAll('[data-entry]');
    expect(rows.length).toBe(2);
    expect(shadow().querySelector('[data-entry="ZSH"]')?.textContent).toContain('Z shell');
  });

  it('shows an empty state when there are no entries', () => {
    make({ entries: [] }).mount();
    expect(shadow().querySelector('[data-empty]')).not.toBeNull();
    expect(shadow().querySelectorAll('[data-entry]').length).toBe(0);
  });

  it('fires onAdd with word and spoken when Add is clicked', () => {
    let added: { word: string; spoken: string } | null = null;
    make({
      onAdd: (word, spoken) => {
        added = { word, spoken };
      },
    }).mount();
    setField('new-word', 'nginx');
    setField('new-spoken', 'engine x');
    const addBtn = shadow().querySelector('[data-action="add"]') as HTMLButtonElement;
    addBtn.click();
    expect(added).toEqual({ word: 'nginx', spoken: 'engine x' });
  });

  it('disables Add while either field is empty', () => {
    make().mount();
    const add = shadow().querySelector<HTMLButtonElement>('[data-action="add"]');
    expect(add?.disabled).toBe(true);
    setField('new-word', 'nginx');
    expect(add?.disabled).toBe(true);
    setField('new-spoken', 'engine x');
    expect(add?.disabled).toBe(false);
  });

  it('fires onDelete with the word for the entry', () => {
    let deleted = '';
    make({
      onDelete: (word) => {
        deleted = word;
      },
    }).mount();
    clickEntryAction('SQL', 'delete');
    expect(deleted).toBe('SQL');
  });

  it('fires onPreview with the spoken form for the entry', () => {
    let previewed = '';
    make({
      onPreview: (spoken) => {
        previewed = spoken;
      },
    }).mount();
    clickEntryAction('ZSH', 'preview');
    expect(previewed).toBe('Z shell');
  });

  it('reflects the enabled state and fires onToggleEnabled with the next value', () => {
    let toggled: boolean | null = null;
    make({
      enabled: true,
      onToggleEnabled: (e) => {
        toggled = e;
      },
    }).mount();
    const toggle = shadow().querySelector('[data-toggle="enabled"]') as HTMLInputElement;
    expect(toggle.checked).toBe(true);
    toggle.checked = false;
    toggle.dispatchEvent(new Event('change', { bubbles: true }));
    expect(toggled).toBe(false);
  });

  it('labels icon-only controls for assistive technology', () => {
    make().mount();

    expect(shadow().querySelector('[data-action="close"]')?.getAttribute('aria-label')).toBe(
      'Close pronunciation manager',
    );
    expect(
      shadow()
        .querySelector('[data-entry="ZSH"] [data-action="preview"]')
        ?.getAttribute('aria-label'),
    ).toBe('Preview pronunciation for ZSH');
    expect(
      shadow()
        .querySelector('[data-entry="ZSH"] [data-action="delete"]')
        ?.getAttribute('aria-label'),
    ).toBe('Delete pronunciation for ZSH');
  });

  it('fires onClose when Close is clicked', () => {
    let closed = false;
    make({
      onClose: () => {
        closed = true;
      },
    }).mount();
    const closeBtn = shadow().querySelector('[data-action="close"]') as HTMLButtonElement;
    closeBtn.click();
    expect(closed).toBe(true);
  });

  it('unmount removes the host from the DOM', () => {
    const manager = make();
    manager.mount();
    expect(document.body.querySelector('#dita-manager-host')).not.toBeNull();
    manager.unmount();
    expect(document.body.querySelector('#dita-manager-host')).toBeNull();
  });

  it('update() re-renders the list and toggle without remounting', () => {
    const manager = make();
    manager.mount();
    manager.update([{ word: 'nginx', spoken: 'engine x' }], false);
    expect(shadow().querySelectorAll('[data-entry]').length).toBe(1);
    expect(shadow().querySelector('[data-entry="nginx"]')).not.toBeNull();
    const toggle = shadow().querySelector('[data-toggle="enabled"]') as HTMLInputElement;
    expect(toggle.checked).toBe(false);
  });

  it('filters the list by the search query (word or spoken)', () => {
    make().mount();
    const search = shadow().querySelector('[data-field="search"]') as HTMLInputElement;
    search.value = 'seq';
    search.dispatchEvent(new Event('input', { bubbles: true }));
    expect(shadow().querySelectorAll('[data-entry]').length).toBe(1);
    expect(shadow().querySelector('[data-entry="SQL"]')).not.toBeNull();
  });

  it('shows a no-matches state when the search matches nothing', () => {
    make().mount();
    const search = shadow().querySelector('[data-field="search"]') as HTMLInputElement;
    search.value = 'nope';
    search.dispatchEvent(new Event('input', { bubbles: true }));
    expect(shadow().querySelectorAll('[data-entry]').length).toBe(0);
    expect(shadow().querySelector('[data-empty]')?.textContent).toContain('No matches');
  });
});
