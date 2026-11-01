import { phonemize } from 'phonemizer';

const SYMBOLS = [
  '$',
  ';:,.!?¡¿—…"«»"" ',
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  "ɑɐɒæɓʙβɔɕçɗɖðʤəɘɚɛɜɝɞɟʄɡɠɢʛɦɧħɥʜɨɪʝɭɬɫɮʟɱɯɰŋɳɲɴøɵɸθœɶʘɹɺɾɻʀʁɽʂʃʈʧʉʊʋⱱʌɣɤʍχʎʏʑʐʒʔʡʕʢǀǁǂǃˈˌːˑʼʴʰʱʲʷˠˤ˞↓↑→↗↘'̩ᵻ",
].join('');

const TOKEN_BY_SYMBOL = new Map([...SYMBOLS].map((symbol, index) => [symbol, index]));

export type Phonemize = (text: string, language?: string) => Promise<string[]>;

/** Converts English text to the exact symbol IDs expected by Kitten Nano v0.8. */
export async function textToKittenTokenIds(
  text: string,
  phonemizer: Phonemize = phonemize,
): Promise<number[]> {
  const cleanText = text.trim();
  if (!cleanText) return [];

  const phonemeGroups = await phonemizer(cleanText, 'en-us');
  const tokens = [...phonemeGroups.join(' ')].map((symbol) => {
    const token = TOKEN_BY_SYMBOL.get(symbol);
    if (token === undefined) {
      throw new Error(`Unsupported Kitten phoneme symbol: ${JSON.stringify(symbol)}`);
    }
    return token;
  });

  // Kitten's Python TextCleaner adds these start/end marker IDs.
  return [0, ...tokens, 10, 0];
}
