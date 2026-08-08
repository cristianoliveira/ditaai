import { describe, expect, it, vi } from 'vitest';
import { sendMessageToTab } from './messaging';

describe('sendMessageToTab', () => {
  it('returns success on valid response', async () => {
    // chrome.tabs.sendMessage is not available in Node; mock via global
    vi.stubGlobal('chrome', {
      tabs: {
        sendMessage: vi.fn().mockResolvedValue({ ok: true }),
      },
    });

    const result = await sendMessageToTab(1, { type: 'ping' });
    expect(result.success).toBe(true);
    expect(result.response).toEqual({ ok: true });
  });

  it('swallows "Receiving end does not exist"', async () => {
    vi.stubGlobal('chrome', {
      tabs: {
        sendMessage: vi
          .fn()
          .mockRejectedValue(
            new Error('Could not establish connection. Receiving end does not exist.'),
          ),
      },
    });

    const result = await sendMessageToTab(1, { type: 'ping' });
    expect(result.success).toBe(false);
  });

  it('re-throws other errors', async () => {
    vi.stubGlobal('chrome', {
      tabs: {
        sendMessage: vi.fn().mockRejectedValue(new Error('Network error')),
      },
    });

    await expect(sendMessageToTab(1, { type: 'ping' })).rejects.toThrow('Network error');
  });
});
