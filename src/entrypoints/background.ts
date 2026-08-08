import { VoiceRegistry } from '../domain/tts/voice-registry';
// Service worker entry point.
// Composition root: wires domain + infra together.
import { patchSendMessageCallback } from '../infra/chrome/messaging';
import { PiperClient } from '../infra/piper/client';

export default defineBackground(() => {
  // Guard: swallow noisy "Receiving end does not exist" errors
  patchSendMessageCallback();

  // Wire TTS providers
  const _piper = new PiperClient({ baseUrl: 'http://127.0.0.1:17493' });
  const registry = new VoiceRegistry();

  registry.register({
    descriptor: {
      name: 'Amy (Piper Local)',
      voiceURI: 'piper:amy',
      lang: 'en-US',
      localService: true,
      default: false,
    },
    providerKey: 'piper',
  });

  console.log('[dita] background ready, voices:', registry.list().length);
});
