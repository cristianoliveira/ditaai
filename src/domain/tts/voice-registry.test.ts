import { describe, expect, it } from 'vitest';
import type { VoiceDescriptor } from '../../lib/types';
import { VoiceRegistry } from './voice-registry';

const amy: VoiceDescriptor = {
  name: 'Amy (Piper Local)',
  voiceURI: 'piper:amy',
  lang: 'en-US',
  localService: true,
  default: false,
};

describe('VoiceRegistry', () => {
  it('lists registered voices', () => {
    const registry = new VoiceRegistry();
    registry.register({ descriptor: amy, providerKey: 'piper' });
    expect(registry.list()).toHaveLength(1);
  });

  it('finds by voiceUri', () => {
    const registry = new VoiceRegistry();
    registry.register({ descriptor: amy, providerKey: 'piper' });
    const found = registry.findByVoiceUri('piper:amy');
    expect(found?.descriptor.name).toBe('Amy (Piper Local)');
  });

  it('returns undefined for unknown uri', () => {
    const registry = new VoiceRegistry();
    expect(registry.findByVoiceUri('unknown')).toBeUndefined();
  });
});
