import type {
  AccessibilityPickerNode,
  AccessibilitySnapshot,
  AccessibilityTreePort,
  Rect,
} from '../../domain/accessibility/types';

interface RuntimeResponse<T> {
  ok?: boolean;
  error?: string;
  value?: T;
}

/** Content-side port for the background-only Chrome debugger adapter. */
export class RuntimeAccessibilityTree implements AccessibilityTreePort {
  private async request<T>(method: string, args: unknown[] = []): Promise<T> {
    const response = (await chrome.runtime.sendMessage({
      dest: 'background',
      method,
      args,
    })) as RuntimeResponse<T> | undefined;

    if (!response?.ok) {
      throw new Error(response?.error ?? `Accessibility request failed: ${method}`);
    }
    return response.value as T;
  }

  open(): Promise<AccessibilitySnapshot> {
    return this.request('accessibilityOpen');
  }

  refresh(): Promise<AccessibilitySnapshot> {
    return this.request('accessibilityRefresh');
  }

  hitTest(point: { x: number; y: number }): Promise<AccessibilityPickerNode | null> {
    return this.request('accessibilityHitTest', [point]);
  }

  bounds(nodeId: string): Promise<readonly Rect[]> {
    return this.request('accessibilityBounds', [nodeId]);
  }

  async close(): Promise<void> {
    await this.request('accessibilityClose');
  }
}
