import { describe, expect, it, vi } from 'vitest';
import { TypedEmitter } from './events';

type TestEvents = {
  tick: number;
  done: string;
};

describe('TypedEmitter', () => {
  it('calls handler on emit', () => {
    const emitter = new TypedEmitter<TestEvents>();
    const fn = vi.fn();
    emitter.on('tick', fn);
    emitter.emit('tick', 1);
    expect(fn).toHaveBeenCalledWith(1);
  });

  it('does not call removed handler', () => {
    const emitter = new TypedEmitter<TestEvents>();
    const fn = vi.fn();
    emitter.on('tick', fn);
    emitter.off('tick', fn);
    emitter.emit('tick', 1);
    expect(fn).not.toHaveBeenCalled();
  });

  it('removeAllListeners clears all', () => {
    const emitter = new TypedEmitter<TestEvents>();
    const fn = vi.fn();
    emitter.on('tick', fn);
    emitter.removeAllListeners();
    emitter.emit('tick', 1);
    expect(fn).not.toHaveBeenCalled();
  });
});
