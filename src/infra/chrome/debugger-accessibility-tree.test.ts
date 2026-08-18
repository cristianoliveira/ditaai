import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  AccessibilityConflictError,
  AccessibilityUnavailableError,
} from '../../domain/accessibility/types';
import { ChromeDebuggerAccessibilityTree } from './debugger-accessibility-tree';

/**
 * CDP-shaped fixtures from the spike (.tmp/spikes/a11y-cdp/results.json):
 * ignored wrappers, StaticText, InlineTextBox internals, typed properties.
 */

function axNodes() {
  return [
    {
      nodeId: '2',
      role: { type: 'role', value: 'RootWebArea' },
      name: { type: 'computedString', value: 'Page' },
      childIds: ['3'],
      backendDOMNodeId: 2,
    },
    { nodeId: '3', ignored: true, parentId: '2', childIds: ['26'], backendDOMNodeId: 3 },
    {
      nodeId: '26',
      role: { type: 'role', value: 'paragraph' },
      parentId: '3',
      childIds: ['45', '-1000000008'],
      backendDOMNodeId: 26,
    },
    {
      nodeId: '45',
      role: { type: 'role', value: 'StaticText' },
      name: { type: 'computedString', value: 'The landscape ' },
      parentId: '26',
      childIds: ['-1000000009'],
      backendDOMNodeId: 45,
      properties: [{ name: 'level', value: { type: 'integer', value: 1 } }],
    },
    {
      nodeId: '-1000000009',
      role: { type: 'role', value: 'InlineTextBox' },
      name: { type: 'computedString', value: 'The landscape ' },
      parentId: '45',
      childIds: [],
    },
  ];
}

interface DebuggerHarness {
  attach: ReturnType<typeof vi.fn>;
  detach: ReturnType<typeof vi.fn>;
  sendCommand: ReturnType<typeof vi.fn>;
  onDetach: { addListener: ReturnType<typeof vi.fn>; removeListener: ReturnType<typeof vi.fn> };
}

function stubDebugger(
  overrides?: Partial<Record<'attach' | 'sendCommand' | 'detach', ReturnType<typeof vi.fn>>>,
) {
  const harness: DebuggerHarness = {
    attach: overrides?.attach ?? vi.fn((_t: unknown, _v: string, cb: () => void) => cb()),
    detach: overrides?.detach ?? vi.fn((_t: unknown, cb: () => void) => cb()),
    sendCommand:
      overrides?.sendCommand ??
      vi.fn((_target: unknown, method: string, _params: unknown, cb: (result: unknown) => void) => {
        switch (method) {
          case 'DOM.getDocument':
            return cb({ root: { nodeId: 1 } });
          case 'Accessibility.getFullAXTree':
            return cb({ nodes: axNodes() });
          case 'DOM.getNodeForLocation':
            return cb({ nodeId: 42 });
          case 'DOM.describeNode':
            return cb({ node: { backendNodeId: 45, nodeName: '#text' } });
          case 'DOM.pushNodesByBackendIdsToFrontend':
            return cb({ nodeIds: [77] });
          case 'DOM.getContentQuads':
            return cb({
              // CDP quad: [x1,y1, x2,y2, x3,y3, x4,y4] = TL,TR,BR,BL clockwise
              quads: [
                [10, 20, 60, 20, 60, 38, 10, 38],
                [10, 38, 40, 38, 40, 56, 10, 56],
              ],
            });
          default:
            return cb({});
        }
      }),
    onDetach: {
      addListener: vi.fn(),
      removeListener: vi.fn(),
    },
  };
  vi.stubGlobal('chrome', { debugger: harness, runtime: {} });
  return harness;
}

describe('ChromeDebuggerAccessibilityTree', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it('open attaches, fetches full tree, returns normalized snapshot', async () => {
    const harness = stubDebugger();
    const tree = new ChromeDebuggerAccessibilityTree(7);

    const snapshot = await tree.open();

    expect(harness.attach).toHaveBeenCalledWith({ tabId: 7 }, '1.3', expect.any(Function));
    const nodes = snapshot.nodes;
    expect(nodes.map((n) => n.role)).toEqual(['RootWebArea', 'Ignored', 'paragraph', 'StaticText']);
    // InlineTextBox internals dropped everywhere
    expect(nodes.some((n) => n.id === '-1000000009')).toBe(false);
    expect(nodes.find((n) => n.id === '26')?.childIds).toEqual(['45']);
    // StaticText text lands in staticText
    expect(nodes.find((n) => n.id === '45')?.staticText).toBe('The landscape ');
    // typed CDP property values flattened to strings
    expect(nodes.find((n) => n.id === '45')?.properties).toEqual([{ name: 'level', value: '1' }]);
    // childIds derived from parentId (spike: defensive)
    expect(nodes.find((n) => n.id === '3')?.childIds).toEqual(['26']);
  });

  it('throws AccessibilityConflictError when another debugger owns the tab', async () => {
    const attach = vi.fn((_t: unknown, _v: string, cb: () => void) => {
      (chrome.runtime as unknown as { lastError?: { message: string } }).lastError = {
        message: 'Another debugger is already attached to the tab with id: 7.',
      };
      cb();
    });
    const harness = stubDebugger({ attach });

    const tree = new ChromeDebuggerAccessibilityTree(7);
    await expect(tree.open()).rejects.toBeInstanceOf(AccessibilityConflictError);
    // failed attach = no session: adapter must not detach what it never owned
    expect(harness.detach).not.toHaveBeenCalled();
  });

  it('throws AccessibilityUnavailableError without chrome.debugger', async () => {
    vi.stubGlobal('chrome', {});
    const tree = new ChromeDebuggerAccessibilityTree(7);
    await expect(tree.open()).rejects.toBeInstanceOf(AccessibilityUnavailableError);
  });

  it('hitTest resolves the normalized node for the point (deepest DOM hit -> backend correlation)', async () => {
    stubDebugger();
    const tree = new ChromeDebuggerAccessibilityTree(7);
    await tree.open();

    const hit = await tree.hitTest({ x: 15, y: 25 });
    expect(hit?.id).toBe('45');
    expect(hit?.backendDOMNodeId).toBe(45);
  });

  it('hitTest returns null when backend node has no AX node', async () => {
    stubDebugger({
      sendCommand: vi.fn((_t: unknown, method: string, _p: unknown, cb: (r: unknown) => void) =>
        cb(
          method === 'DOM.getDocument'
            ? { root: { nodeId: 1 } }
            : method === 'Accessibility.getFullAXTree'
              ? { nodes: axNodes() }
              : method === 'DOM.getNodeForLocation'
                ? { nodeId: 42 }
                : method === 'DOM.describeNode'
                  ? { node: { backendNodeId: 999 } }
                  : {},
        ),
      ),
    });
    const tree = new ChromeDebuggerAccessibilityTree(7);
    await tree.open();
    expect(await tree.hitTest({ x: 1, y: 1 })).toBeNull();
  });

  it('bounds returns one rect per quad for multi-line text', async () => {
    stubDebugger();
    const tree = new ChromeDebuggerAccessibilityTree(7);
    await tree.open();

    const rects = await tree.bounds('45');
    expect(rects).toEqual([
      { x: 10, y: 20, width: 50, height: 18 },
      { x: 10, y: 38, width: 30, height: 18 },
    ]);
    expect(await tree.bounds('unknown')).toEqual([]);
  });

  it('close detaches exactly once and is idempotent', async () => {
    const harness = stubDebugger();
    const tree = new ChromeDebuggerAccessibilityTree(7);
    await tree.open();

    await tree.close();
    await tree.close();
    expect(harness.detach).toHaveBeenCalledTimes(1);
  });

  it('external detach clears session so close does not double-detach', async () => {
    const harness = stubDebugger();
    const tree = new ChromeDebuggerAccessibilityTree(7);
    await tree.open();

    const listener = harness.onDetach.addListener.mock.calls[0]?.[0] as (
      source: unknown,
      reason: string,
    ) => void;
    listener({ tabId: 7 }, 'canceled_by_user');

    await tree.close();
    expect(harness.detach).not.toHaveBeenCalled();
    expect(harness.onDetach.removeListener).toHaveBeenCalled();
  });

  it('open failure mid-protocol detaches (no leaked debugger session)', async () => {
    const harness = stubDebugger({
      sendCommand: vi.fn((_t: unknown, method: string, _p: unknown, cb: (r: unknown) => void) => {
        if (method === 'DOM.getDocument') {
          (chrome.runtime as unknown as { lastError?: { message: string } }).lastError = {
            message: 'boom',
          };
          return cb(undefined);
        }
        return cb({});
      }),
    });
    const tree = new ChromeDebuggerAccessibilityTree(7);
    await expect(tree.open()).rejects.toThrow('boom');
    expect(harness.detach).toHaveBeenCalledTimes(1);
  });

  it('refresh re-fetches the tree', async () => {
    const harness = stubDebugger();
    const tree = new ChromeDebuggerAccessibilityTree(7);
    await tree.open();

    await tree.refresh();

    const fullTreeCalls = harness.sendCommand.mock.calls.filter(
      (c) => c[1] === 'Accessibility.getFullAXTree',
    );
    expect(fullTreeCalls).toHaveLength(2);
  });

  it('hitTest before open rejects', async () => {
    stubDebugger();
    const tree = new ChromeDebuggerAccessibilityTree(7);
    await expect(tree.hitTest({ x: 1, y: 1 })).rejects.toThrow(/open/i);
  });
});
