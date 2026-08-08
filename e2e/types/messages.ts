// Shared E2E contracts — mirror src/domain/messaging.ts.
// When the extension message shape changes, update both together.

export type MessageDest = "serviceWorker" | "contentScript";

export interface RuntimeMessage {
  dest: MessageDest;
  method: string;
  args: unknown[];
}

export type PlaybackState = "STOPPED" | "PLAYING" | "PAUSED";

export interface PlaybackStateInfo {
  state: PlaybackState;
  tabId?: number;
}
