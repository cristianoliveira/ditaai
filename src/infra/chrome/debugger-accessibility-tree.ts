// Chrome debugger (CDP) adapter for the accessibility picker.
//
// Background-only: chrome.debugger is not available in content scripts.
// Owns the full CDP shape — nothing CDP-typed leaves this file. Content and
// domain see only the normalized types from domain/accessibility.
//
// Spike findings encoded here (.tmp/spikes/a11y-cdp + task0001 report):
// - DOM.getDocument must precede node lookups
// - getPartialAXTree never returns descendants; full tree is the source
// - InlineTextBox children (negative ids) are layout internals — dropped
// - ContentQuads works for StaticText text nodes; one quad per line
// - backendDOMNodeIds and AX node ids are session-only

import {
  AccessibilityConflictError,
  AccessibilityUnavailableError,
} from '../../domain/accessibility/types';
import type {
  AccessibilityPickerNode,
  AccessibilitySnapshot,
  AccessibilityTreePort,
  Rect,
} from '../../domain/accessibility/types';
import { logger } from '../../lib/logger';

const DEBUGGER_PROTOCOL_VERSION = '1.3';

/** Curated computed properties; CDP emits far more noise than users need. */
const CURATED_PROPERTIES = new Set([
  'level',
  'focusable',
  'required',
  'invalid',
  'checked',
  'selected',
  'expanded',
  'collapsed',
  'busy',
  'url',
  'description',
]);

interface DebuggerTarget {
  tabId: number;
}

/** Promise wrapper over the callback + chrome.runtime.lastError convention. */
function callDebugger<T>(
  invoke: (report: (error: Error | null, result: T) => void) => void,
): Promise<T> {
  return new Promise((resolve, reject) => {
    invoke((error, result) => {
      const runtime = chrome.runtime as typeof chrome.runtime & { lastError?: { message: string } };
      if (runtime.lastError) {
        const message = runtime.lastError.message;
        delete runtime.lastError;
        reject(new Error(message));
        return;
      }
      if (error) {
        reject(error);
        return;
      }
      resolve(result);
    });
  });
}

interface CdpAXNode {
  nodeId: string;
  parentId?: string;
  childIds?: string[];
  backendDOMNodeId?: number;
  ignored?: boolean;
  role?: { value?: string };
  name?: { value?: string };
  value?: { value?: string };
  properties?: Array<{ name: string; value?: { value?: unknown } }>;
}

interface CdpQuad {
  // [x1,y1, x2,y2, x3,y3, x4,y4] clockwise from top-left
  [index: number]: number;
}

function flattenPropertyValue(raw: unknown): string | undefined {
  if (raw === undefined || raw === null) return undefined;
  if (typeof raw === 'object' && 'value' in (raw as Record<string, unknown>)) {
    return flattenPropertyValue((raw as { value: unknown }).value);
  }
  return String(raw);
}

function isInternalNode(node: CdpAXNode): boolean {
  if (node.role?.value === 'InlineTextBox') return true;
  return Number(node.nodeId) < 0;
}

/** Normalize one CDP AX node; returns null for layout internals. */
function normalizeNode(node: CdpAXNode): AccessibilityPickerNode | null {
  if (isInternalNode(node)) return null;

  const role = node.ignored ? 'Ignored' : (node.role?.value ?? 'unknown');
  const name = node.name?.value;

  const properties = (node.properties ?? [])
    .filter((property) => CURATED_PROPERTIES.has(property.name))
    .map((property) => ({
      name: property.name,
      value: flattenPropertyValue(property.value) ?? '',
    }));

  return {
    id: node.nodeId,
    backendDOMNodeId: node.backendDOMNodeId,
    role,
    name: name === '' ? undefined : name,
    value: node.value?.value,
    staticText: role === 'StaticText' ? name : undefined,
    properties,
    parentId: node.parentId,
    childIds: node.childIds ?? [],
    bounds: [],
  };
}

/** Snapshot normalization: drop internals, strip them from children, derive childIds from parentId. */
function normalizeTree(nodes: CdpAXNode[]): AccessibilityPickerNode[] {
  const normalized = new Map<string, AccessibilityPickerNode>();
  for (const raw of nodes) {
    const node = normalizeNode(raw);
    if (node) normalized.set(node.id, node);
  }

  for (const raw of nodes) {
    const node = normalized.get(raw.nodeId);
    if (!node?.parentId) continue;
    const parent = normalized.get(node.parentId);
    if (!parent) continue;
    if (!parent.childIds.includes(node.id)) {
      normalized.set(parent.id, { ...parent, childIds: [...parent.childIds, node.id] });
    }
  }

  return [...normalized.values()].map((node) => ({
    ...node,
    childIds: node.childIds.filter((childId) => normalized.has(childId)),
  }));
}

export class ChromeDebuggerAccessibilityTree implements AccessibilityTreePort {
  private attached = false;
  private detachListener?: (source: unknown, reason: string) => void;
  private byBackendNodeId = new Map<number, AccessibilityPickerNode>();
  private byNodeId = new Map<string, AccessibilityPickerNode>();

  constructor(private readonly tabId: number) {}

  private get target(): DebuggerTarget {
    return { tabId: this.tabId };
  }

  private ensureDebuggerApi(): void {
    if (typeof chrome === 'undefined' || !chrome.debugger) {
      throw new AccessibilityUnavailableError();
    }
  }

  private send<T>(method: string, params?: Record<string, unknown>): Promise<T> {
    return callDebugger<T>((report) => {
      chrome.debugger.sendCommand(this.target, method, params ?? {}, (result?: object) =>
        report(null, result as T),
      );
    });
  }

  async open(): Promise<AccessibilitySnapshot> {
    this.ensureDebuggerApi();

    await callDebugger<void>((report) => {
      chrome.debugger.attach(this.target, DEBUGGER_PROTOCOL_VERSION, () => report(null, undefined));
    }).catch((error: Error) => {
      if (/already attached/i.test(error.message)) {
        throw new AccessibilityConflictError(error.message);
      }
      throw error;
    });
    this.attached = true;
    this.listenForExternalDetach();

    try {
      return await this.fetchSnapshot();
    } catch (error) {
      // never leak an attached debugger on a failed handshake
      await this.close();
      throw error;
    }
  }

  async refresh(): Promise<AccessibilitySnapshot> {
    this.requireOpen('refresh');
    return this.fetchSnapshot();
  }

  async hitTest(point: { x: number; y: number }): Promise<AccessibilityPickerNode | null> {
    this.requireOpen('hitTest');
    const hit = await this.send<{ nodeId?: number }>('DOM.getNodeForLocation', {
      x: point.x,
      y: point.y,
      includeUserAgentShadowDOM: true,
      // picker overlay uses pointer-events: pass through it
      ignorePointerEventsNone: true,
    });
    if (hit.nodeId === undefined) return null;

    const described = await this.send<{ node?: { backendNodeId?: number } }>('DOM.describeNode', {
      nodeId: hit.nodeId,
    });
    const backendNodeId = described.node?.backendNodeId;
    if (backendNodeId === undefined) return null;
    return this.byBackendNodeId.get(backendNodeId) ?? null;
  }

  async bounds(nodeId: string): Promise<readonly Rect[]> {
    this.requireOpen('bounds');
    const node = this.byNodeId.get(nodeId);
    if (!node?.backendDOMNodeId) return [];

    const pushed = await this.send<{ nodeIds?: number[] }>('DOM.pushNodesByBackendIdsToFrontend', {
      backendNodeIds: [node.backendDOMNodeId],
    });
    const frontendId = pushed.nodeIds?.[0];
    if (frontendId === undefined) return [];

    const quads = await this.send<{ quads?: CdpQuad[] }>('DOM.getContentQuads', {
      nodeId: frontendId,
    });
    return (quads.quads ?? [])
      .map((quad) => ({
        x: quad[0] ?? 0,
        y: quad[1] ?? 0,
        x2: quad[2] ?? 0,
        y3: quad[5] ?? 0,
      }))
      .map(({ x, y, x2, y3 }) => ({ x, y, width: x2 - x, height: y3 - y }));
  }

  async close(): Promise<void> {
    if (this.detachListener) {
      chrome.debugger.onDetach.removeListener(this.detachListener);
      this.detachListener = undefined;
    }
    if (!this.attached) return;
    this.attached = false;
    this.byBackendNodeId.clear();
    this.byNodeId.clear();

    await callDebugger<void>((report) => {
      chrome.debugger.detach(this.target, () => report(null, undefined));
    }).catch((error: Error) => {
      // detaching something already gone must not break cleanup paths
      logger.warn(`debugger detach failed: ${error.message}`);
    });
  }

  private requireOpen(operation: string): void {
    if (!this.attached) {
      throw new Error(`Accessibility tree not open — call open() before ${operation}()`);
    }
  }

  private listenForExternalDetach(): void {
    this.detachListener = (source: unknown, reason: string) => {
      const target = source as DebuggerTarget | undefined;
      if (target?.tabId !== this.tabId) return;
      this.attached = false;
      this.byBackendNodeId.clear();
      this.byNodeId.clear();
      logger.info(`debugger detached externally (${reason})`);
    };
    chrome.debugger.onDetach.addListener(this.detachListener);
  }

  private async fetchSnapshot(): Promise<AccessibilitySnapshot> {
    await this.send('DOM.getDocument', {});
    const tree = await this.send<{ nodes: CdpAXNode[] }>('Accessibility.getFullAXTree', {});
    const nodes = normalizeTree(tree.nodes ?? []);
    this.byBackendNodeId = new Map();
    this.byNodeId = new Map();
    for (const node of nodes) {
      this.byNodeId.set(node.id, node);
      if (node.backendDOMNodeId !== undefined) {
        this.byBackendNodeId.set(node.backendDOMNodeId, node);
      }
    }
    return { nodes };
  }
}
