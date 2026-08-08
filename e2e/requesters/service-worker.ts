import type { Page } from '@playwright/test';
import type { PlaybackStateInfo, RuntimeMessage } from '../types/messages';

/**
 * Client for the extension's service worker, invoked from any extension page
 * via chrome.runtime.sendMessage.
 *
 * Requires a page hosted on the extension origin so chrome.runtime is available.
 */
export class ServiceWorkerRequester {
  constructor(private readonly page: Page) {}

  async send(method: string, args: unknown[] = []): Promise<unknown> {
    const message: RuntimeMessage = { dest: 'serviceWorker', method, args };
    return this.page.evaluate(
      (msg) =>
        new Promise((resolve, reject) => {
          chrome.runtime.sendMessage(msg, (response) => {
            if (chrome.runtime.lastError) {
              reject(new Error(chrome.runtime.lastError.message));
            } else {
              resolve(response);
            }
          });
        }),
      message,
    );
  }

  playTab(): Promise<unknown> {
    return this.send('playTab');
  }

  playText(text: string, options: Record<string, unknown> = {}): Promise<unknown> {
    return this.send('playText', [text, options]);
  }

  stop(): Promise<unknown> {
    return this.send('stop');
  }

  pause(): Promise<unknown> {
    return this.send('pause');
  }

  resume(): Promise<unknown> {
    return this.send('resume');
  }

  getPlaybackState(): Promise<PlaybackStateInfo> {
    return this.send('getPlaybackState') as Promise<PlaybackStateInfo>;
  }
}
