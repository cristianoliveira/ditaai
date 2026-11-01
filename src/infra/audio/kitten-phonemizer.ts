import { phonemize } from 'phonemizer';

const SYMBOLS = [
  '$',
  ';:,.!?¡¿—…"«»"" ',
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  "ɑɐɒæɓʙβɔɕçɗɖðʤəɘɚɛɜɝɞɟʄɡɠɢʛɦɧħɥʜɨɪʝɭɬɫɮʟɱɯɰŋɳɲɴøɵɸθœɶʘɹɺɾɻʀʁɽʂʃʈʧʉʊʋⱱʌɣɤʍχʎʏʑʐʒʔʡʕʢǀǁǂǃˈˌːˑʼʴʰʱʲʷˠˤ˞↓↑→↗↘'̩ᵻ",
].join('');
const TOKEN_BY_SYMBOL = new Map([...SYMBOLS].map((symbol, index) => [symbol, index]));
const PUNCTUATION = /(\s*[;:,.!?¡¿—…"«»""()[\]{}]+\s*)+/g;
const TOKEN_GROUPS = /[\p{L}\p{N}_]+|[^\p{L}\p{N}_\s]/gu;
const TERMINAL_PUNCTUATION = /[.!?,;:]$/;

export type Phonemize = (text: string, language?: string) => Promise<string[]>;

function splitPunctuation(text: string): Array<{ punctuation: boolean; text: string }> {
  const sections: Array<{ punctuation: boolean; text: string }> = [];
  let cursor = 0;
  for (const match of text.matchAll(PUNCTUATION)) {
    const index = match.index ?? 0;
    if (cursor < index) sections.push({ punctuation: false, text: text.slice(cursor, index) });
    sections.push({ punctuation: true, text: match[0] });
    cursor = index + match[0].length;
  }
  if (cursor < text.length) sections.push({ punctuation: false, text: text.slice(cursor) });
  return sections;
}

/** Converts English text to the exact symbol IDs expected by Kitten Nano v0.8. */
export async function textToKittenTokenIds(
  text: string,
  phonemizer: Phonemize = phonemize,
): Promise<number[]> {
  const cleanText = text.trim();
  if (!cleanText) return [];

  const normalizedText = TERMINAL_PUNCTUATION.test(cleanText) ? cleanText : `${cleanText}.`;
  const sections = splitPunctuation(normalizedText);
  const phonemeParts = await Promise.all(
    sections.map(async ({ punctuation, text: part }) => {
      if (punctuation) return part;
      return (await phonemizer(part, 'en-us')).join(' ');
    }),
  );
  const tokenGroups = phonemeParts.join('').match(TOKEN_GROUPS) ?? [];
  const symbols = [...tokenGroups.join(' ')];
  const tokens = symbols.map((symbol) => {
    const token = TOKEN_BY_SYMBOL.get(symbol);
    if (token === undefined) {
      throw new Error(`Unsupported Kitten phoneme symbol: ${JSON.stringify(symbol)}`);
    }
    return token;
  });

  // Kitten's cleaner separates each Unicode phoneme token and adds markers.
  return [0, ...tokens, 10, 0];
}
