import { describe, expect, it } from 'vitest';
import { theme } from './theme';

// Single source of truth for Dita's accent color. These tests pin the palette
// choice (amber) and — more importantly — the contrast MECHANISM the highlight
// relies on to stay visible on arbitrary web pages: a bright fill + a solid
// edge ring + forced dark text. Changing the hue is fine; silently dropping
// any of those three layers is what these tests guard against.

describe('theme accent', () => {
  it('uses a solid amber accent for bars, buttons and badges on the dark UI', () => {
    expect(theme.accent).toBe('#f59e0b');
    expect(theme.accentHover).toBe('#fbbf24');
  });

  it('builds accent tints as rgba from the accent RGB at any alpha', () => {
    expect(theme.accentTint(0.35)).toBe('rgba(245, 158, 11, 0.35)');
    expect(theme.accentTint(0.1)).toBe('rgba(245, 158, 11, 0.1)');
  });
});

describe('theme highlight (on-page, arbitrary backgrounds)', () => {
  it('uses a high-luminance amber fill so it glows on dark pages', () => {
    // #ffc107 = rgb(255, 193, 7) — brighter than the UI accent on purpose.
    expect(theme.highlight.fill).toBe('rgba(255, 193, 7, 0.55)');
  });

  it('adds a solid darker edge ring so a visible edge exists on any background', () => {
    // The box-shadow ring is the layer that survives where fill luminance fails.
    expect(theme.highlight.edge).toContain('2px');
    expect(theme.highlight.edge).toMatch(/rgba\(180, 120, 0/);
  });

  it('forces dark text on the active word for AAA contrast on the amber fill', () => {
    expect(theme.highlight.text).toBe('#1a1300');
  });

  it('uses a subtle amber tint + solid bar for the active paragraph', () => {
    expect(theme.highlight.paragraph).toBe('rgba(255, 193, 7, 0.1)');
    expect(theme.highlight.bar).toBe('#f59e0b');
  });
});
