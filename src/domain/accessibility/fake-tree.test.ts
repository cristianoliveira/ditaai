import { describe, expect, it } from 'vitest';
import { FakeAccessibilityTree } from './fake-tree';
import { buildTreeIndex, candidateChain, navigate, orderedStaticText } from './tree';
import { AccessibilityConflictError } from './types';

const nodes = [
  {
    id: 'root',
    role: 'RootWebArea',
    name: 'Page',
    properties: [],
    childIds: [],
    bounds: [],
  },
  {
    id: 'p1',
    role: 'paragraph',
    parentId: 'root',
    properties: [],
    childIds: [],
    bounds: [{ x: 10, y: 20, width: 100, height: 40 }],
  },
  {
    id: 't1',
    role: 'StaticText',
    staticText: 'Hello accessibility',
    parentId: 'p1',
    properties: [],
    childIds: [],
    bounds: [
      { x: 10, y: 20, width: 50, height: 18 },
      { x: 10, y: 38, width: 30, height: 18 },
    ],
  },
];

describe('FakeAccessibilityTree', () => {
  it('open returns the snapshot', async () => {
    const fake = new FakeAccessibilityTree(nodes);
    const snapshot = await fake.open();
    expect(snapshot.nodes.map((n) => n.id)).toEqual(['root', 'p1', 't1']);
    expect(fake.calls).toContain('open');
  });

  it('hitTest resolves the node whose bounds contain the point', async () => {
    const fake = new FakeAccessibilityTree(nodes);
    await fake.open();
    expect((await fake.hitTest({ x: 30, y: 39 }))?.id).toBe('t1'); // deepest node wins, like CDP
    expect((await fake.hitTest({ x: 11, y: 21 }))?.id).toBe('t1'); // deepest node wins, like CDP
    expect((await fake.hitTest({ x: 80, y: 50 }))?.id).toBe('p1');
    expect(await fake.hitTest({ x: 999, y: 999 })).toBeNull();
  });

  it('bounds returns multi-rectangle text bounds', async () => {
    const fake = new FakeAccessibilityTree(nodes);
    await fake.open();
    expect(await fake.bounds('t1')).toHaveLength(2);
  });

  it('refresh returns the same or updated snapshot', async () => {
    const fake = new FakeAccessibilityTree(nodes);
    await fake.open();
    const fresh = await fake.refresh();
    expect(fresh.nodes).toHaveLength(3);
  });

  it('close is idempotent and records the call', async () => {
    const fake = new FakeAccessibilityTree(nodes);
    await fake.open();
    await fake.close();
    await fake.close();
    expect(fake.calls.filter((c) => c === 'close')).toHaveLength(1);
  });

  it('throws AccessibilityConflictError when configured', async () => {
    const fake = new FakeAccessibilityTree(nodes, { conflict: true });
    await expect(fake.open()).rejects.toBeInstanceOf(AccessibilityConflictError);
    expect(fake.calls).toContain('close'); // terminal path must release
  });

  it('port results compose with tree ops (navigation + text)', async () => {
    const fake = new FakeAccessibilityTree(nodes);
    const snapshot = await fake.open();
    const index = buildTreeIndex(snapshot.nodes);
    expect(navigate(index, 't1', 'up')).toBe('p1');
    expect(orderedStaticText(index, 'p1')).toEqual(['Hello accessibility']);
    expect(candidateChain(index, 't1').map((n) => n.id)).toEqual(['p1', 'root']);
  });
});
