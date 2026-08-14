// @vitest-environment happy-dom
import { afterEach, describe, expect, it, vi } from 'vitest';
import { closeOnPointerLeave } from './close-on-pointer-leave';

describe('closeOnPointerLeave', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('closes the popup when the pointer leaves the window', () => {
    const close = vi.fn();
    closeOnPointerLeave(document, close);

    document.documentElement.dispatchEvent(
      new MouseEvent('mouseout', { relatedTarget: null, bubbles: true }),
    );

    expect(close).toHaveBeenCalledOnce();
  });

  it('keeps the popup open when the pointer moves between elements inside', () => {
    const close = vi.fn();
    closeOnPointerLeave(document, close);

    const inner = document.createElement('button');
    document.body.append(inner);
    document.documentElement.dispatchEvent(
      new MouseEvent('mouseout', { relatedTarget: inner, bubbles: true }),
    );

    expect(close).not.toHaveBeenCalled();
  });

  it('closes only once even if several leave events fire', () => {
    const close = vi.fn();
    closeOnPointerLeave(document, close);

    document.documentElement.dispatchEvent(
      new MouseEvent('mouseout', { relatedTarget: null, bubbles: true }),
    );
    document.documentElement.dispatchEvent(
      new MouseEvent('mouseout', { relatedTarget: null, bubbles: true }),
    );

    expect(close).toHaveBeenCalledOnce();
  });
});
