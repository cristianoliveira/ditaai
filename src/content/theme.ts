// Dita theme — single source of truth for the accent color.
//
// Every content UI surface (highlighter, widget, picker, start affordance) and
// the voices page reads its colors from here, so a recolor is a one-line edit.
//
// Palette: amber. Chosen for highlight contrast on ARBITRARY web pages, not for
// taste: high luminance keeps the spoken word visible on dark backgrounds, the
// hue is complementary to the blue/gray chrome most pages use (so it pops where
// luminance alone wouldn't), and amber is the universal read-aloud "marker"
// affordance. See theme.test.ts for the contrast contract.

/** Solid accent for bars, buttons and badges on the dark UI surfaces. */
const ACCENT_HEX = '#f59e0b'; // amber-500, rgb(245, 158, 11)
const ACCENT_HOVER_HEX = '#fbbf24'; // amber-400

const ACCENT_R = 245;
const ACCENT_G = 158;
const ACCENT_B = 11;

/** Brighter amber for the on-page highlight fill — max luminance so it glows on
 * dark pages. Distinct from the UI accent on purpose: the highlight must
 * survive on any background, the UI sits on a known dark surface. */
const FILL_R = 255;
const FILL_G = 193;
const FILL_B = 7;

/** Darker amber for the solid edge ring — guarantees a visible edge on any
 * background regardless of how the fill blends. */
const EDGE_R = 180;
const EDGE_G = 120;
const EDGE_B = 0;

export interface Theme {
  /** Solid accent hex (bars, buttons, badges, left bars). */
  accent: string;
  /** Lighter hover variant for buttons. */
  accentHover: string;
  /** RGBA tint of the accent at a given alpha (focus borders, hover backgrounds). */
  accentTint(alpha: number): string;
  /** On-page highlight tokens (word + paragraph + start point). */
  highlight: {
    /** Active-word fill — high-luminance amber, adapts by blending. */
    fill: string;
    /** Solid box-shadow ring — guarantees an edge on any background. */
    edge: string;
    /** Forced text color on the active word → AAA contrast on the fill. */
    text: string;
    /** Active-paragraph orientation tint (subtle). */
    paragraph: string;
    /** Solid left accent bar (paragraph + start point). */
    bar: string;
  };
}

export const theme: Theme = {
  accent: ACCENT_HEX,
  accentHover: ACCENT_HOVER_HEX,
  accentTint: (alpha: number) => `rgba(${ACCENT_R}, ${ACCENT_G}, ${ACCENT_B}, ${alpha})`,
  highlight: {
    fill: `rgba(${FILL_R}, ${FILL_G}, ${FILL_B}, 0.55)`,
    edge: `0 0 0 2px rgba(${EDGE_R}, ${EDGE_G}, ${EDGE_B}, 0.6)`,
    text: '#1a1300',
    paragraph: `rgba(${FILL_R}, ${FILL_G}, ${FILL_B}, 0.1)`,
    bar: ACCENT_HEX,
  },
};
