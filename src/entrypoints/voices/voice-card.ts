import type { Voice } from '../../domain/voices/voice';

export interface VoiceCardState {
  voiceId: string;
  installed: boolean;
  downloading: boolean;
  progress: number;
}

export function renderVoiceCard(
  voice: Voice,
  state: VoiceCardState,
  selected: boolean,
  onDownload: (voiceId: string) => void,
  onSelect: (voiceId: string) => void,
): HTMLDivElement {
  const card = document.createElement('div');
  card.className = selected ? 'voice-card selected' : 'voice-card';

  const name = document.createElement('div');
  name.className = 'name';
  name.textContent = `${voice.gender === 'male' ? '♂' : '♀'} ${voice.name}`;

  const meta = document.createElement('div');
  meta.className = 'meta';
  meta.textContent = `Supertonic · ${voice.language}`;

  const size = document.createElement('div');
  size.className = 'size';
  size.textContent = '~300 KB';

  card.append(name, meta, size);

  if (selected) {
    const button = actionButton('✓ Selected', 'btn btn-selected');
    button.disabled = true;
    card.append(button);
    return card;
  }

  if (state.installed) {
    const button = actionButton('Use voice', 'btn btn-select-voice');
    button.addEventListener('click', () => onSelect(voice.id));
    card.append(button);
    return card;
  }

  if (state.downloading) {
    const button = actionButton(`Downloading ${state.progress}%`, 'btn btn-download loading');
    button.disabled = true;
    card.append(button, progressBar(state.progress));
    return card;
  }

  const button = actionButton('Download', 'btn btn-download');
  button.addEventListener('click', () => onDownload(voice.id));
  card.append(button);
  return card;
}

function actionButton(text: string, className: string): HTMLButtonElement {
  const button = document.createElement('button');
  button.className = className;
  button.textContent = text;
  return button;
}

function progressBar(progress: number): HTMLDivElement {
  const bar = document.createElement('div');
  bar.className = 'progress-bar';
  const fill = document.createElement('div');
  fill.className = 'fill';
  fill.style.width = `${progress}%`;
  bar.append(fill);
  return bar;
}
