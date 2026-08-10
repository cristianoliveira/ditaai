// Routes installed-voice word boundaries from the offscreen TTS back to the
// content script that asked to speak.
//
// Boundary delivery must NOT depend on PlaybackController.tabId: playback can
// be started from the in-page widget, which never registers a tab with the
// background router. Instead we remember the tab that sent speakWithInstalledVoice
// (available as sender.tab.id in the service worker) and route boundaries there.

/** Sends a boundary event to a content tab. Implemented with chrome.tabs.sendMessage. */
export type BoundaryForwarder = (tabId: number, event: unknown) => void;

export class InstalledVoiceBoundaryRelay {
  private origin: number | null = null;

  constructor(
    private readonly forward: BoundaryForwarder,
    private readonly forwardSchedule: BoundaryForwarder = forward,
  ) {}

  /** The tab that initiated the current installed-voice speak, or null. */
  get originTabId(): number | null {
    return this.origin;
  }

  /** Record the tab that initiated an installed-voice speak. */
  rememberOrigin(tabId: number | null | undefined): void {
    if (typeof tabId === 'number') this.origin = tabId;
  }

  /** Forget the origin — used when the speaking tab is closed or refreshed. */
  clear(): void {
    this.origin = null;
  }

  /** Deliver a boundary event from offscreen to the originating content tab. */
  deliver(event: unknown): void {
    if (this.origin === null) return;
    this.forward(this.origin, event);
  }

  /** Deliver a complete boundary schedule for content-side timing. */
  deliverSchedule(schedule: unknown): void {
    if (this.origin === null) return;
    this.forwardSchedule(this.origin, schedule);
  }
}
