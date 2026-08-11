// Stops playback when the speaking tab is closed.
//
// Installed-voice audio plays in the offscreen document, which outlives the
// tab. When the content script that started playback is torn down, nothing
// else tells the offscreen doc to stop — so audio keeps playing.
//
// Unload (refresh / navigating away) is signaled by the content script's
// `pagehide` handler, NOT by chrome.tabs.onUpdated here. `pagehide` fires only
// on a real document unload, so same-document / SPA navigations (e.g. a
// third-party widget thrashing the History API every few hundred ms) do NOT cut
// playback. Listening to onUpdated 'loading' or onReplaced at this level can't
// tell those churn events apart from a real unload, so it would race playback
// through every segment on such pages. The service worker keeps onRemoved as a
// backstop for tab close (covers a content crash that never fires pagehide).

import { type SpeakingTabs, isSpeakingTab } from '../../domain/playback/speaking-tab';

export interface TabLifecycleEvents {
  onRemoved: { addListener(cb: (tabId: number, removeInfo?: unknown) => void): void };
  onUpdated: {
    addListener(cb: (tabId: number, changeInfo: { status?: string }, tab?: unknown) => void): void;
  };
  onReplaced: { addListener(cb: (addedTabId: number, removedTabId: number) => void): void };
}

/** Reads the current speaking-tab ids at event time (state may change between events). */
export type SpeakingTabsProvider = () => SpeakingTabs;

/** Invoked with the tab id that was closed while speaking. */
export type StopPlayback = (tabId: number) => void;

export function watchSpeakingTabLifecycle(
  events: TabLifecycleEvents,
  speaking: SpeakingTabsProvider,
  onStop: StopPlayback,
): void {
  const maybeStop = (tabId: number): void => {
    if (isSpeakingTab(tabId, speaking())) onStop(tabId);
  };

  // Tab close backstop. Refresh / navigation unload is handled by the content
  // script's pagehide handler (see comment above).
  events.onRemoved.addListener((tabId) => maybeStop(tabId));
}
