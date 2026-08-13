// Pure URL-to-spoken transform — no DOM dependency.
// Bare URLs in extracted text are dictated character-by-character by TTS
// ("h-t-t-p-s colon slash slash ..."), which is useless. Replace any bare URL
// with a short spoken form naming only the site: "link to site example.com".
// Descriptive anchor text (e.g. "Read more") contains no URL and is untouched.

/** Spoken prefix so a terse domain is understood as a link rather than prose. */
const LINK_SPOKEN_PREFIX = 'link to site';

/** A bare URL token: an http(s) scheme or a leading "www." up to the next
 * whitespace/quote. Greedy on purpose — trailing punctuation is trimmed after. */
const URL_PATTERN = /(?:https?:\/\/|www\.)[^\s"'<>]+/gi;

/** Replace bare URLs in text with "link to site <domain>". Deterministic and
 * side-effect free. When a URL can't be parsed it is left untouched so we
 * never make dictation worse than the raw text. */
export function simplifyLinks(text: string): string {
  return text.replace(URL_PATTERN, (match) => {
    const { url, trailing } = stripTrailingPunctuation(match);
    const domain = extractDomain(url);
    return domain ? `${LINK_SPOKEN_PREFIX} ${domain}${trailing}` : match;
  });
}

/** Pull sentence/bracket punctuation off the tail so it survives the rewrite.
 * Such chars are never part of a hostname, so they are safe to trim and re-add. */
function stripTrailingPunctuation(raw: string): { url: string; trailing: string } {
  const trailing = raw.match(/[.,;:!?)\]]+$/)?.[0] ?? '';
  return { url: raw.slice(0, raw.length - trailing.length), trailing };
}

/** Extract the hostname from a bare URL, dropping a leading "www.". Returns
 * null when the value can't be parsed as a URL so the caller can keep it as-is. */
function extractDomain(raw: string): string | null {
  const withScheme = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  try {
    const hostname = new URL(withScheme).hostname;
    return hostname ? hostname.replace(/^www\./i, '') : null;
  } catch {
    return null;
  }
}
