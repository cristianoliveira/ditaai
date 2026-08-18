// Deterministic in-memory AccessibilityTreePort for picker unit tests.
//
// Behaves like the real adapter at the port boundary: same snapshot shape,
// same hit-test semantics (bounds containment), same conflict/detach paths.

import { AccessibilityConflictError } from './types';
import type {
  AccessibilityPickerNode,
  AccessibilitySnapshot,
  AccessibilityTreePort,
  Rect,
} from './types';

export interface FakeAccessibilityTreeOptions {
  /** Simulate "another debugger owns the tab" on open(). */
  conflict?: boolean;
}

export class FakeAccessibilityTree implements AccessibilityTreePort {
  readonly calls: string[] = [];
  private closed = false;

  constructor(
    private nodes: AccessibilityPickerNode[],
    private readonly options: FakeAccessibilityTreeOptions = {},
  ) {}

  async open(): Promise<AccessibilitySnapshot> {
    this.calls.push('open');
    if (this.options.conflict) {
      // conflict is terminal: adapter must detach, surface typed error
      this.calls.push('close');
      throw new AccessibilityConflictError();
    }
    return { nodes: this.nodes };
  }

  async refresh(): Promise<AccessibilitySnapshot> {
    this.calls.push('refresh');
    return { nodes: this.nodes };
  }

  async hitTest(point: { x: number; y: number }): Promise<AccessibilityPickerNode | null> {
    this.calls.push('hitTest');
    const containing = this.nodes.filter((node) =>
      node.bounds.some(
        (rect: Rect) =>
          point.x >= rect.x &&
          point.x <= rect.x + rect.width &&
          point.y >= rect.y &&
          point.y <= rect.y + rect.height,
      ),
    );
    if (containing.length === 0) return null;
    // most specific = smallest total bounds area (deepest node wins, like CDP)
    const area = (node: AccessibilityPickerNode) =>
      node.bounds.reduce((sum, rect) => sum + rect.width * rect.height, 0);
    return containing.reduce((a, b) => (area(a) <= area(b) ? a : b));
  }

  async bounds(nodeId: string): Promise<readonly Rect[]> {
    this.calls.push('bounds');
    return this.nodes.find((node) => node.id === nodeId)?.bounds ?? [];
  }

  async close(): Promise<void> {
    if (this.closed) return;
    this.closed = true;
    this.calls.push('close');
  }
}
