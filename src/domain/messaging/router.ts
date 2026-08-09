// Routes runtime messages to handlers. Pure domain — no Chrome API.
// The background entrypoint wires this to chrome.runtime.onMessage and
// provides the tabTextFetcher and activeTabResolver implementations.

import type { AvailableTextReader, SpeakOptions } from '../audio/text-reader';
import type { PlaybackController } from '../playback/playback-controller';

export interface RuntimeMessage {
  dest: 'serviceWorker' | 'contentScript';
  method: string;
  args: unknown[];
}

export type MessageHandler = (msg: RuntimeMessage) => unknown | Promise<unknown>;

/** Port: fetches readable text from a tab's content script. */
export type TabTextFetcher = (tabId: number) => Promise<string[]>;

/** Port: resolves the currently active tab id. */
export type ActiveTabResolver = () => Promise<number>;

export function createMessageRouter(
  controller: PlaybackController,
  deps: {
    fetchTabText: TabTextFetcher;
    resolveActiveTab: ActiveTabResolver;
    installedReader?: AvailableTextReader;
  },
): MessageHandler {
  const handlers: Record<string, (args: unknown[]) => unknown | Promise<unknown>> = {
    playTab: async ([tabId]) => {
      const id = (tabId as number | undefined) ?? (await deps.resolveActiveTab());
      const texts = await deps.fetchTabText(id);
      if (texts.length === 0) {
        return { ok: false, error: 'No readable text found' };
      }
      controller.play(id);
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
    isInstalledVoiceAvailable: async () => ({
      ok: true,
      available: (await deps.installedReader?.isAvailable()) ?? false,
    }),
    speakWithInstalledVoice: async ([text, options]) => {
      if (!deps.installedReader) return { ok: false, error: 'Installed voice unavailable' };
      await deps.installedReader.speak(text as string, options as SpeakOptions | undefined);
      return { ok: true };
    },
    pauseInstalledVoice: () => {
      deps.installedReader?.pause();
      return { ok: true };
    },
    resumeInstalledVoice: () => {
      deps.installedReader?.resume();
      return { ok: true };
    },
    stopInstalledVoice: () => {
      deps.installedReader?.stop();
      return { ok: true };
    },
  };

  return (msg) => {
    const handler = handlers[msg.method];
    if (!handler) {
      return { ok: false, error: `Unknown method: ${msg.method}` };
    }
    return handler(msg.args);
  };
}
