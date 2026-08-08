import type { VoiceDescriptor } from '../../lib/types';

// Domain: voice registry — knows about voices but not how they render audio.
// Providers are wired in at composition root (entrypoint).

export interface VoiceEntry {
  descriptor: VoiceDescriptor;
  providerKey: string; // maps to a TtsProvider key
}

export class VoiceRegistry {
  private voices: VoiceEntry[] = [];

  register(entry: VoiceEntry): void {
    this.voices.push(entry);
  }

  list(): readonly VoiceEntry[] {
    return this.voices;
  }

  findByVoiceUri(uri: string): VoiceEntry | undefined {
    return this.voices.find((v) => v.descriptor.voiceURI === uri);
  }
}
