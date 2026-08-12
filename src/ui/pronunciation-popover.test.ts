// @vitest-environment happy-dom
import { afterEach, describe, expect, it } from 'vitest';
import { PronunciationPopover } from './pronunciation-popover';

function host(): HTMLDivElement {
  const el = document.querySelector('#dita-pronunciation-host');
  if (!el) throw new Error('pronunciation host not in DOM');
  return el as HTMLDivElement;
}

function shadow(): ShadowRoot {
  if (!host().shadowRoot) throw new Error('shadow root not found');
  return host().shadowRoot as ShadowRoot;
}

function setField(name: 'word' | 'spoken', value: string): void {
  const input = shadow().querySelector<HTMLInputElement>(`[data-field="${name}"]`);
  if (!input) throw new Error(`field ${name} not found`);
  input.value = value;
  input.dispatchEvent(new Event('input', { bubbles: true }));
}

function click(action: 'preview' | 'save' | 'cancel'): void {
  const btn = shadow().querySelector<HTMLButtonElement>(`[data-action="${action}"]`);
  if (!btn) throw new Error(`action ${action} not found`);
  btn.click();
}

describe('PronunciationPopover', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('mounts a shadow-DOM popover on document.body', () => {
    const popover = new PronunciationPopover({
      word: 'ZSH',
      onPreview: () => {},
      onSave: () => {},
      onCancel: () => {},
    });
    popover.mount();
    expect(document.body.querySelector('#dita-pronunciation-host')).not.toBeNull();
  });

  it('pre-fills the word field', () => {
    new PronunciationPopover({
      word: 'ZSH',
      onPreview: () => {},
      onSave: () => {},
      onCancel: () => {},
    }).mount();
    const input = shadow().querySelector<HTMLInputElement>('[data-field="word"]');
    expect(input?.value).toBe('ZSH');
  });

  it('pre-fills the spoken field when an existing substitution is provided (edit mode)', () => {
    new PronunciationPopover({
      word: 'ZSH',
      spoken: 'Z shell',
      onPreview: () => {},
      onSave: () => {},
      onCancel: () => {},
    }).mount();
    const input = shadow().querySelector<HTMLInputElement>('[data-field="spoken"]');
    expect(input?.value).toBe('Z shell');
  });

  it('leaves the spoken field empty when no existing substitution', () => {
    new PronunciationPopover({
      word: 'ZSH',
      onPreview: () => {},
      onSave: () => {},
      onCancel: () => {},
    }).mount();
    const input = shadow().querySelector<HTMLInputElement>('[data-field="spoken"]');
    expect(input?.value).toBe('');
  });

  it('fires onPreview with the current word and spoken values', () => {
    let previewed: { word: string; spoken: string } | null = null;
    new PronunciationPopover({
      word: 'ZSH',
      onPreview: (word, spoken) => {
        previewed = { word, spoken };
      },
      onSave: () => {},
      onCancel: () => {},
    }).mount();
    setField('spoken', 'Z shell');
    click('preview');
    expect(previewed).toEqual({ word: 'ZSH', spoken: 'Z shell' });
  });

  it('fires onSave with the word and spoken values when Save is clicked', () => {
    let saved: { word: string; spoken: string } | null = null;
    new PronunciationPopover({
      word: 'ZSH',
      onPreview: () => {},
      onSave: (word, spoken) => {
        saved = { word, spoken };
      },
      onCancel: () => {},
    }).mount();
    setField('spoken', 'Z shell');
    click('save');
    expect(saved).toEqual({ word: 'ZSH', spoken: 'Z shell' });
  });

  it('disables Save while the spoken field is empty', () => {
    new PronunciationPopover({
      word: 'ZSH',
      onPreview: () => {},
      onSave: () => {},
      onCancel: () => {},
    }).mount();
    const save = shadow().querySelector<HTMLButtonElement>('[data-action="save"]');
    expect(save?.disabled).toBe(true);
  });

  it('fires onCancel when Cancel is clicked', () => {
    let cancelled = false;
    new PronunciationPopover({
      word: 'ZSH',
      onPreview: () => {},
      onSave: () => {},
      onCancel: () => {
        cancelled = true;
      },
    }).mount();
    click('cancel');
    expect(cancelled).toBe(true);
  });

  it('unmount removes the host from the DOM', () => {
    const popover = new PronunciationPopover({
      word: 'ZSH',
      onPreview: () => {},
      onSave: () => {},
      onCancel: () => {},
    });
    popover.mount();
    expect(document.body.querySelector('#dita-pronunciation-host')).not.toBeNull();
    popover.unmount();
    expect(document.body.querySelector('#dita-pronunciation-host')).toBeNull();
  });
});
