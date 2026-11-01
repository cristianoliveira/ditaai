import { describe, expect, it, vi } from 'vitest';
import { textToKittenTokenIds } from './kitten-phonemizer';

describe('textToKittenTokenIds', () => {
  it('phonemizes English and adds the model start/end markers', async () => {
    const phonemizer = vi.fn().mockResolvedValue(['həlˈoʊ wɜːld']);

    const tokens = await textToKittenTokenIds('Hello world', phonemizer);

    expect(phonemizer).toHaveBeenCalledWith('Hello world', 'en-us');
    expect(tokens[0]).toBe(0);
    expect(tokens.at(-2)).toBe(10);
    expect(tokens.at(-1)).toBe(0);
    expect(tokens.length).toBeGreaterThan(2);
  });

  it('preserves punctuation and separates IPA symbols like the reference tokenizer', async () => {
    const phonemizer = vi.fn().mockResolvedValue(['ab']);

    const tokens = await textToKittenTokenIds('A, B', phonemizer);

    expect(phonemizer).toHaveBeenNthCalledWith(1, 'A', 'en-us');
    expect(phonemizer).toHaveBeenNthCalledWith(2, 'B', 'en-us');
    // Two two-symbol phoneme groups, punctuation, separators, and markers.
    expect(tokens).toHaveLength(12);
  });

  it('tokenizes numbers and currency with the bundled English phonemizer', async () => {
    const tokens = await textToKittenTokenIds('42 costs $19.99.');

    expect(tokens[0]).toBe(0);
    expect(tokens.at(-2)).toBe(10);
    expect(tokens.at(-1)).toBe(0);
    expect(tokens.length).toBeGreaterThan(10);
  });

  it('returns no tokens for whitespace without calling the phonemizer', async () => {
    const phonemizer = vi.fn();

    await expect(textToKittenTokenIds('  \n', phonemizer)).resolves.toEqual([]);
    expect(phonemizer).not.toHaveBeenCalled();
  });

  it('fails visibly when phonemizer output contains an unsupported token', async () => {
    await expect(textToKittenTokenIds('test', vi.fn().mockResolvedValue(['☃']))).rejects.toThrow(
      'Unsupported Kitten phoneme symbol',
    );
  });
});
