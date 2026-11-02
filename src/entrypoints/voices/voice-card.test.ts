// @vitest-environment happy-dom
import { afterEach, describe, expect, it, vi } from 'vitest';
import { KITTEN_VOICES, PHONON_VOICES, SUPERTONIC_VOICES } from '../../domain/voices/catalog';
import { renderVoiceCard } from './voice-card';

const voice = SUPERTONIC_VOICES[0];
if (!voice) throw new Error('Expected a catalog voice');

describe('renderVoiceCard', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('lets the user select an installed voice', () => {
    const onSelect = vi.fn();
    const card = renderVoiceCard(
      voice,
      { voiceId: voice.id, installed: true, downloading: false, progress: 100 },
      false,
      vi.fn(),
      onSelect,
    );

    const button = card.querySelector<HTMLButtonElement>('button');
    expect(button?.textContent).toBe('Use voice');
    button?.click();
    expect(onSelect).toHaveBeenCalledWith(voice.id);
  });

  it('shows which installed voice is selected', () => {
    const card = renderVoiceCard(
      voice,
      { voiceId: voice.id, installed: true, downloading: false, progress: 100 },
      true,
      vi.fn(),
      vi.fn(),
    );

    expect(card.classList.contains('selected')).toBe(true);
    expect(card.querySelector<HTMLButtonElement>('button')?.textContent).toBe('✓ Selected');
    expect(card.querySelector<HTMLButtonElement>('button')?.disabled).toBe(true);
  });

  it('labels the Kitten engine and model size', () => {
    const kitten = KITTEN_VOICES[0];
    if (!kitten) throw new Error('Expected a Kitten voice');
    const card = renderVoiceCard(
      kitten,
      { voiceId: kitten.id, installed: false, downloading: false, progress: 0 },
      false,
      vi.fn(),
      vi.fn(),
    );

    expect(card.querySelector('.meta')?.textContent).toBe('Kitten · en');
    expect(card.querySelector('.size')?.textContent).toBe('~60 MB model');
  });

  it('labels the Phonon model without implying a binary voice gender', () => {
    const phonon = PHONON_VOICES[0];
    if (!phonon) throw new Error('Expected the Phonon default voice');
    const card = renderVoiceCard(
      phonon,
      { voiceId: phonon.id, installed: false, downloading: false, progress: 0 },
      false,
      vi.fn(),
      vi.fn(),
    );

    expect(card.querySelector('.name')?.textContent).toBe(phonon.name);
    expect(card.querySelector('.meta')?.textContent).toBe('Phonon · en');
    expect(card.querySelector('.size')?.textContent).toBe('~62 MiB model');
  });

  it('only offers download for a voice that is not installed', () => {
    const onDownload = vi.fn();
    const card = renderVoiceCard(
      voice,
      { voiceId: voice.id, installed: false, downloading: false, progress: 0 },
      false,
      onDownload,
      vi.fn(),
    );

    const button = card.querySelector<HTMLButtonElement>('button');
    expect(button?.textContent).toBe('Download');
    button?.click();
    expect(onDownload).toHaveBeenCalledWith(voice.id);
  });
});
