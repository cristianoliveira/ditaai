// Lightweight typed event emitter — no framework dependency

type EventHandler<T> = (data: T) => void;

export class TypedEmitter<EventMap extends Record<string, unknown>> {
  private listeners = new Map<keyof EventMap, Set<EventHandler<unknown>>>();

  on<K extends keyof EventMap>(event: K, handler: EventHandler<EventMap[K]>): void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event)?.add(handler as EventHandler<unknown>);
  }

  off<K extends keyof EventMap>(event: K, handler: EventHandler<EventMap[K]>): void {
    this.listeners.get(event)?.delete(handler as EventHandler<unknown>);
  }

  emit<K extends keyof EventMap>(event: K, data: EventMap[K]): void {
    const handlers = this.listeners.get(event);
    if (handlers) {
      for (const fn of handlers) {
        fn(data);
      }
    }
  }

  removeAllListeners(): void {
    this.listeners.clear();
  }
}
