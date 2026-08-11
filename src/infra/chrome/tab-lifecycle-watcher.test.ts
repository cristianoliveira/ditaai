import { describe, expect, it, vi } from 'vitest';
import { type TabLifecycleEvents, watchSpeakingTabLifecycle } from './tab-lifecycle-watcher';

type RemovedCb = (tabId: number) => void;
type UpdatedCb = (tabId: number, changeInfo: { status?: string }) => void;
type ReplacedCb = (addedTabId: number, removedTabId: number) => void;

interface FakeEvents extends TabLifecycleEvents {
  fireRemoved(tabId: number): void;
  fireUpdated(tabId: number, changeInfo: { status?: string }): void;
  fireReplaced(addedTabId: number, removedTabId: number): void;
}

function makeEvents(): FakeEvents {
  const removed = new Set<RemovedCb>();
  const updated = new Set<UpdatedCb>();
  const replaced = new Set<ReplacedCb>();
  return {
    onRemoved: { addListener: (cb) => removed.add(cb as RemovedCb) },
    onUpdated: { addListener: (cb) => updated.add(cb as UpdatedCb) },
    onReplaced: { addListener: (cb) => replaced.add(cb as ReplacedCb) },
    fireRemoved: (tabId) => {
      for (const cb of removed) cb(tabId);
    },
    fireUpdated: (tabId, changeInfo) => {
      for (const cb of updated) cb(tabId, changeInfo);
    },
    fireReplaced: (added, removedId) => {
      for (const cb of replaced) cb(added, removedId);
    },
  };
}

describe('watchSpeakingTabLifecycle', () => {
  it('stops when the speaking tab is removed', () => {
    const events = makeEvents();
    const onStop = vi.fn();
    watchSpeakingTabLifecycle(events, () => ({ controllerTabId: 7, originTabId: null }), onStop);

    events.fireRemoved(7);

    expect(onStop).toHaveBeenCalledWith(7);
  });

  it('does not stop when a non-speaking tab is removed', () => {
    const events = makeEvents();
    const onStop = vi.fn();
    watchSpeakingTabLifecycle(events, () => ({ controllerTabId: 7, originTabId: null }), onStop);

    events.fireRemoved(99);

    expect(onStop).not.toHaveBeenCalled();
  });

  it('does not stop on refresh (onUpdated loading) — content pagehide owns unload', () => {
    const events = makeEvents();
    const onStop = vi.fn();
    watchSpeakingTabLifecycle(
      events,
      () => ({ controllerTabId: undefined, originTabId: 9 }),
      onStop,
    );

    events.fireUpdated(9, { status: 'loading' });

    // chrome.tabs.onUpdated 'loading' fires for same-document/prerender churn
    // too, so it can't be trusted to mean "content gone". Real unload is
    // signaled by the content script's pagehide handler instead.
    expect(onStop).not.toHaveBeenCalled();
  });

  it('does not stop on onUpdated status complete', () => {
    const events = makeEvents();
    const onStop = vi.fn();
    watchSpeakingTabLifecycle(events, () => ({ controllerTabId: 9, originTabId: null }), onStop);

    events.fireUpdated(9, { status: 'complete' });

    expect(onStop).not.toHaveBeenCalled();
  });

  it('does not interrupt in-page navigation without a document unload', () => {
    const events = makeEvents();
    const onStop = vi.fn();
    watchSpeakingTabLifecycle(events, () => ({ controllerTabId: 9, originTabId: null }), onStop);

    // SPA-style url change with no loading status
    events.fireUpdated(9, { status: undefined });

    expect(onStop).not.toHaveBeenCalled();
  });

  it('does not stop on tab replacement (content survives via pagehide)', () => {
    const events = makeEvents();
    const onStop = vi.fn();
    watchSpeakingTabLifecycle(events, () => ({ controllerTabId: 7, originTabId: null }), onStop);

    events.fireReplaced(123, 7);

    expect(onStop).not.toHaveBeenCalled();
  });

  it('re-evaluates the speaking tab at event time', () => {
    const events = makeEvents();
    let current = { controllerTabId: undefined as number | undefined, originTabId: null };
    const onStop = vi.fn();
    watchSpeakingTabLifecycle(events, () => current, onStop);

    events.fireRemoved(7); // not speaking yet
    expect(onStop).not.toHaveBeenCalled();

    current = { controllerTabId: 7, originTabId: null };
    events.fireRemoved(7);
    expect(onStop).toHaveBeenCalledWith(7);
  });
});
