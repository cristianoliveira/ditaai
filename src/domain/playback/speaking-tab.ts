// Pure domain rule: which tab counts as "the speaking tab".
//
// Playback can be started two ways, each tracked by a different id:
//   - controller-driven (playTab/playText from the background router) →
//     PlaybackController.currentTabId
//   - widget-driven installed voice (content → offscreen) → never registers
//     with the controller; tracked only as the boundary relay origin.
//
// Tab-lifecycle stop must fire for either, so the rule is "matches either id".

export interface SpeakingTabs {
  /** Tab registered with the background PlaybackController, if any. */
  controllerTabId?: number;
  /** Tab that started the current installed-voice speak, or null. */
  originTabId: number | null;
}

/** True when tabId is either the controller's tab or the installed-voice origin. */
export function isSpeakingTab(tabId: number, tabs: SpeakingTabs): boolean {
  return tabId === tabs.controllerTabId || tabId === tabs.originTabId;
}
