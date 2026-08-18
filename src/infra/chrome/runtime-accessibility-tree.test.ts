import { afterEach, describe, expect, it, vi } from 'vitest';
import { RuntimeAccessibilityTree } from './runtime-accessibility-tree';

const snapshot = { nodes: [] };

describe('RuntimeAccessibilityTree', () => {
  afterEach(() => vi.restoreAllMocks());

  it('forwards typed accessibility requests to the background', async () => {
    const sendMessage = vi.fn().mockResolvedValue({ ok: true, value: snapshot });
    vi.stubGlobal('chrome', { runtime: { sendMessage } });
    const port = new RuntimeAccessibilityTree();

    await expect(port.open()).resolves.toBe(snapshot);
    await expect(port.refresh()).resolves.toBe(snapshot);
    await expect(port.hitTest({ x: 12, y: 34 })).resolves.toBe(snapshot);
    await expect(port.bounds('node-1')).resolves.toBe(snapshot);
    await expect(port.close()).resolves.toBeUndefined();

    expect(sendMessage).toHaveBeenNthCalledWith(1, {
      dest: 'background',
      method: 'accessibilityOpen',
      args: [],
    });
    expect(sendMessage).toHaveBeenNthCalledWith(3, {
      dest: 'background',
      method: 'accessibilityHitTest',
      args: [{ x: 12, y: 34 }],
    });
    expect(sendMessage).toHaveBeenNthCalledWith(4, {
      dest: 'background',
      method: 'accessibilityBounds',
      args: ['node-1'],
    });
  });

  it('turns background errors into actionable failures', async () => {
    vi.stubGlobal('chrome', {
      runtime: {
        sendMessage: vi.fn().mockResolvedValue({ ok: false, error: 'DevTools owns this tab' }),
      },
    });

    await expect(new RuntimeAccessibilityTree().open()).rejects.toThrow('DevTools owns this tab');
  });
});
