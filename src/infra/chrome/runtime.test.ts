import { afterEach, describe, expect, it, vi } from 'vitest';
import { attachRuntimeListener } from './runtime';

describe('attachRuntimeListener', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('routes service worker messages', () => {
    let listener:
      | ((message: unknown, sender: unknown, respond: (value: unknown) => void) => boolean)
      | undefined;
    vi.stubGlobal('chrome', {
      runtime: {
        onMessage: {
          addListener: vi.fn((value) => {
            listener = value;
          }),
        },
      },
    });
    const router = vi.fn().mockReturnValue({ ok: true });
    const respond = vi.fn();
    attachRuntimeListener(router);

    const keepOpen = listener?.(
      { dest: 'serviceWorker', method: 'playText', args: [] },
      {},
      respond,
    );

    expect(router).toHaveBeenCalledOnce();
    expect(respond).toHaveBeenCalledWith({ ok: true });
    expect(keepOpen).toBe(false);
  });

  it('ignores messages addressed to offscreen document', () => {
    let listener:
      | ((message: unknown, sender: unknown, respond: (value: unknown) => void) => boolean)
      | undefined;
    vi.stubGlobal('chrome', {
      runtime: {
        onMessage: {
          addListener: vi.fn((value) => {
            listener = value;
          }),
        },
      },
    });
    const router = vi.fn();
    attachRuntimeListener(router);

    const keepOpen = listener?.({ dest: 'offscreen', method: 'speak', args: [] }, {}, vi.fn());

    expect(router).not.toHaveBeenCalled();
    expect(keepOpen).toBe(false);
  });
});
