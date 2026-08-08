/** Voice types shared across TTS engines. */

export type VoiceGender = 'male' | 'female' | 'neutral';
export type VoiceEngine = 'supertonic' | 'piper' | 'speechsynthesis';

/** Where a voice file lives on the network. */
export interface VoiceSource {
  type: 'huggingface';
  repo: string;
  path: string;
  revision: string;
}

/** A single installable voice. */
export interface Voice {
  id: string;
  name: string;
  gender: VoiceGender;
  engine: VoiceEngine;
  language: string;
  source: VoiceSource;
}

/** Shared engine runtime assets (model files). */
export interface EngineAsset {
  name: string;
  source: VoiceSource;
}

export interface EngineAssets {
  engine: VoiceEngine;
  assets: EngineAsset[];
}

/** A voice that has been downloaded and is available locally. */
export interface InstalledVoice {
  voice: Voice;
  installedAt: number;
  sizeBytes: number;
}

export function voiceKey(voice: Voice): string {
  return `${voice.engine}:${voice.id}`;
}

export function sourceUrl(source: VoiceSource): string {
  return `https://huggingface.co/${source.repo}/resolve/${source.revision}/${source.path}`;
}
