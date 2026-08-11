// @vitest-environment happy-dom
import { afterEach, describe, expect, it, vi } from 'vitest';
import { createIconButton } from './icons';

describe('createIconButton', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('renders an icon-only button with an accessible label and click handler', () => {
    const onClick = vi.fn();
    const button = createIconButton({
      icon: '<svg data-icon="stop"></svg>',
      label: 'Stop page audio',
      className: 'icon-btn icon-stop',
      onClick,
    });
    document.body.append(button);

    expect(button.querySelector('svg[data-icon="stop"]')).not.toBeNull();
    expect(button.getAttribute('aria-label')).toBe('Stop page audio');
    expect(button.textContent?.trim()).toBe('');

    button.click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('applies className and disables the button when requested', () => {
    const button = createIconButton({
      icon: '<svg></svg>',
      label: 'Play',
      className: 'icon-btn icon-play',
      onClick: () => {},
      disabled: true,
    });

    expect(button.className).toBe('icon-btn icon-play');
    expect(button.disabled).toBe(true);
  });
});
