import { describe, expect, it } from 'vitest';
import { isSpeakingTab } from './speaking-tab';

describe('isSpeakingTab', () => {
  it('matches the controller tab', () => {
    expect(isSpeakingTab(7, { controllerTabId: 7, originTabId: null })).toBe(true);
  });

  it('matches the installed-voice origin tab', () => {
    expect(isSpeakingTab(9, { controllerTabId: undefined, originTabId: 9 })).toBe(true);
  });

  it('matches when the same tab is both controller and origin', () => {
    expect(isSpeakingTab(7, { controllerTabId: 7, originTabId: 7 })).toBe(true);
  });

  it('is false for an unrelated tab', () => {
    expect(isSpeakingTab(5, { controllerTabId: 7, originTabId: 9 })).toBe(false);
  });

  it('is false when nothing is speaking', () => {
    expect(isSpeakingTab(7, { controllerTabId: undefined, originTabId: null })).toBe(false);
  });
});
