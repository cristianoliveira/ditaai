// @vitest-environment happy-dom
import { afterEach, describe, expect, it, vi } from 'vitest';
import { SUPERTONIC_VOICES } from '../../domain/voices/catalog';
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
