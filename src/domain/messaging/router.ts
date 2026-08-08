// Routes runtime messages to handlers. Pure domain — no Chrome API.
// The background entrypoint wires this to chrome.runtime.onMessage.

import type { PlaybackController } from '../playback/playback-controller';

export interface RuntimeMessage {
  dest: 'serviceWorker' | 'contentScript';
  method: string;
  args: unknown[];
}

export type MessageHandler = (msg: RuntimeMessage) => unknown | Promise<unknown>;

export function createMessageRouter(controller: PlaybackController): MessageHandler {
  const handlers: Record<string, (args: unknown[]) => unknown> = {
    playTab: ([tabId]) => {
      controller.play(tabId as number | undefined);
      return { ok: true };
    },
    playText: ([text, options]) => {
      void text;
      void options;
      controller.play();
      return { ok: true };
    },
    pause: () => {
      controller.pause();
      return { ok: true };
    },
    resume: () => {
      controller.resume();
      return { ok: true };
    },
    stop: () => {
      controller.stop();
      return { ok: true };
    },
    getPlaybackState: () => controller.getState(),
  };

  return (msg) => {
    const handler = handlers[msg.method];
    if (!handler) {
      return { ok: false, error: `Unknown method: ${msg.method}` };
    }
    return handler(msg.args);
  };
}
