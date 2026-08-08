// Service worker entry point.
// Composition root: wires domain + infra together.

import { createMessageRouter } from '../domain/messaging/router';
import { PlaybackController } from '../domain/playback/playback-controller';
import { patchSendMessageCallback } from '../infra/chrome/messaging';
import { attachRuntimeListener } from '../infra/chrome/runtime';

export default defineBackground(() => {
  // Guard: swallow noisy "Receiving end does not exist" errors
  patchSendMessageCallback();

  const controller = new PlaybackController();
  const router = createMessageRouter(controller);
  attachRuntimeListener(router);

  console.log('[dita] background ready');
});
