// Playback state machine: STOPPED → PLAYING → PAUSED → STOPPED.
// Pure domain logic — no side effects, no Chrome APIs.

export type PlaybackState = 'STOPPED' | 'PLAYING' | 'PAUSED';

export class PlaybackController {
  private state: PlaybackState = 'STOPPED';
  private currentTabId: number | undefined;

  getState(): { state: PlaybackState; tabId?: number } {
    return { state: this.state, tabId: this.currentTabId };
  }

  play(tabId?: number): void {
    this.state = 'PLAYING';
    this.currentTabId = tabId;
  }

  pause(): void {
    if (this.state === 'PLAYING') {
      this.state = 'PAUSED';
    }
  }

  resume(): void {
    if (this.state === 'PAUSED') {
      this.state = 'PLAYING';
    }
  }

  stop(): void {
    this.state = 'STOPPED';
    this.currentTabId = undefined;
  }
}
