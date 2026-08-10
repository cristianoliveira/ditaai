// Stops playback when the speaking tab is closed or navigates (refresh).
//
// Installed-voice audio plays in the offscreen document, which outlives the
// tab. When the content script that started playback is torn down (tab close
// or refresh), nothing else tells the offscreen doc to stop — so audio keeps
// playing. The service worker is the only context that both survives and
// observes tab lifecycle events, so the wiring lives behind this adapter.
//
// Refresh/navigation is detected via changeInfo.status === 'loading', i.e. a
// real document unload. In-page SPA navigations (History API) do not fire
// 'loading', so playback is not interrupted while the content remains.

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

/** Invoked with the tab id that was closed/refreshed while speaking. */
export type StopPlayback = (tabId: number) => void;

export function watchSpeakingTabLifecycle(
  events: TabLifecycleEvents,
  speaking: SpeakingTabsProvider,
  onStop: StopPlayback,
): void {
  const maybeStop = (tabId: number): void => {
    if (isSpeakingTab(tabId, speaking())) onStop(tabId);
  };

  events.onRemoved.addListener((tabId) => maybeStop(tabId));
  events.onUpdated.addListener((tabId, changeInfo) => {
    if (changeInfo?.status === 'loading') maybeStop(tabId);
  });
  events.onReplaced.addListener((_addedTabId, removedTabId) => maybeStop(removedTabId));
}
