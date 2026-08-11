// Shared icon buttons for every Dita playback surface (content widget + popup).
//
// Inline SVGs are deterministic and flex-centerable, unlike text glyphs whose
// ink sits off-center in the em box and shifts per font/platform. Buttons are
// icon-only; the accessible name always comes from aria-label, never from the
// SVG (which is aria-hidden).

export const PLAY_ICON =
  '<svg viewBox="0 0 24 24" data-icon="play" aria-hidden="true"><polygon points="5 3 19 12 5 21"/></svg>';
export const PAUSE_ICON =
  '<svg viewBox="0 0 24 24" data-icon="pause" aria-hidden="true"><rect x="5" y="4" width="4" height="16" rx="1"/><rect x="15" y="4" width="4" height="16" rx="1"/></svg>';
export const STOP_ICON =
  '<svg viewBox="0 0 24 24" data-icon="stop" aria-hidden="true"><rect x="5" y="5" width="14" height="14" rx="2"/></svg>';

export interface IconButtonOptions {
  /** SVG markup to render inside the button. */
  icon: string;
  /** Accessible name (aria-label). */
  label: string;
  /** CSS class(es) applied to the button; colors come from styles/theme. */
  className: string;
  onClick(): void;
  /** Starts disabled (e.g. before a page is readable). */
  disabled?: boolean;
}

/** Build an icon-only button with a deterministic, flex-centered SVG icon. */
export function createIconButton(options: IconButtonOptions): HTMLButtonElement {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = options.className;
  button.innerHTML = options.icon;
  button.setAttribute('aria-label', options.label);
  button.addEventListener('click', options.onClick);
  if (options.disabled) button.disabled = true;
  return button;
}
