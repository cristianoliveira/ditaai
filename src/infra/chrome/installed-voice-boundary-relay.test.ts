import { describe, expect, it, vi } from 'vitest';
import { InstalledVoiceBoundaryRelay } from './installed-voice-boundary-relay';

describe('InstalledVoiceBoundaryRelay', () => {
  it('forwards a boundary to the tab that started the speak', () => {
    const forward = vi.fn();
    const relay = new InstalledVoiceBoundaryRelay(forward);

    relay.rememberOrigin(42);
    relay.deliver({ charIndex: 6, charLength: 5 });

    expect(forward).toHaveBeenCalledWith(42, { charIndex: 6, charLength: 5 });
  });

  it('drops boundaries until a tab has started speaking (no throw)', () => {
    const forward = vi.fn();
    const relay = new InstalledVoiceBoundaryRelay(forward);

    expect(() => relay.deliver({ charIndex: 0, charLength: 1 })).not.toThrow();
    expect(forward).not.toHaveBeenCalled();
  });

  it('ignores a missing origin so unrelated messages do not reset it', () => {
    const forward = vi.fn();
    const relay = new InstalledVoiceBoundaryRelay(forward);

    relay.rememberOrigin(7);
    relay.rememberOrigin(undefined);
    relay.deliver({ charIndex: 0, charLength: 1 });

    expect(forward).toHaveBeenCalledWith(7, expect.anything());
  });

  it('tracks the most recent speak (last tab wins)', () => {
    const forward = vi.fn();
    const relay = new InstalledVoiceBoundaryRelay(forward);

    relay.rememberOrigin(1);
    relay.rememberOrigin(2);
    relay.deliver({ charIndex: 0, charLength: 1 });

    expect(forward).toHaveBeenCalledWith(2, expect.anything());
  });
});
