import { describe, expect, it } from 'vitest';
import { type Substitutions, applySubstitutions, sanitizeSubstitutions } from './substitutions';

describe('applySubstitutions', () => {
  it('returns text unchanged when there are no substitutions', () => {
    expect(applySubstitutions('I use ZSH daily', {})).toBe('I use ZSH daily');
  });

  it('replaces a standalone whole word', () => {
    const dict: Substitutions = { ZSH: 'Z shell' };
    expect(applySubstitutions('I use ZSH daily', dict)).toBe('I use Z shell daily');
  });

  it('matches case-insensitively (zsh, ZSH, Zsh)', () => {
    const dict: Substitutions = { ZSH: 'Z shell' };
    expect(applySubstitutions('config in zsh file', dict)).toBe('config in Z shell file');
    expect(applySubstitutions('config in ZSH file', dict)).toBe('config in Z shell file');
    expect(applySubstitutions('config in Zsh file', dict)).toBe('config in Z shell file');
  });

  it('does not replace substrings inside larger words (whole-word boundary)', () => {
    const dict: Substitutions = { ZSH: 'Z shell' };
    expect(applySubstitutions('the ZSHELL config', dict)).toBe('the ZSHELL config');
  });

  it('replaces words adjacent to punctuation', () => {
    const dict: Substitutions = { ZSH: 'Z shell' };
    expect(applySubstitutions('(ZSH), said it.', dict)).toBe('(Z shell), said it.');
  });

  it('applies multiple distinct substitutions', () => {
    const dict: Substitutions = { ZSH: 'Z shell', SQL: 'sequel' };
    expect(applySubstitutions('ZSH and SQL', dict)).toBe('Z shell and sequel');
  });

  it('is deterministic when one key is a prefix of another (longest wins)', () => {
    const dict: Substitutions = { SQL: 'sequel', SQLite: 'sequel light' };
    expect(applySubstitutions('use SQLite and SQL', dict)).toBe('use sequel light and sequel');
  });

  it('escapes special regex chars in keys (e.g. C++)', () => {
    const dict: Substitutions = { 'C++': 'C plus plus' };
    expect(applySubstitutions('written in C++ today', dict)).toBe('written in C plus plus today');
  });

  it('leaves unmatched text untouched', () => {
    const dict: Substitutions = { ZSH: 'Z shell' };
    expect(applySubstitutions('no matches here', dict)).toBe('no matches here');
  });

  it('preserves surrounding spacing after a multi-word replacement', () => {
    const dict: Substitutions = { nginx: 'engine x' };
    expect(applySubstitutions('reverse proxy nginx serves it', dict)).toBe(
      'reverse proxy engine x serves it',
    );
  });
});

describe('sanitizeSubstitutions', () => {
  it('returns an empty dict for non-object input', () => {
    expect(sanitizeSubstitutions(null)).toEqual({});
    expect(sanitizeSubstitutions(undefined)).toEqual({});
    expect(sanitizeSubstitutions('nope')).toEqual({});
    expect(sanitizeSubstitutions(42)).toEqual({});
  });

  it('keeps string-to-string entries', () => {
    expect(sanitizeSubstitutions({ ZSH: 'Z shell' })).toEqual({ ZSH: 'Z shell' });
  });

  it('drops entries whose value is not a string', () => {
    expect(sanitizeSubstitutions({ ZSH: 'Z shell', bad: 123, off: null })).toEqual({
      ZSH: 'Z shell',
    });
  });

  it('drops empty-string keys (useless for matching)', () => {
    expect(sanitizeSubstitutions({ '': 'x', ZSH: 'Z shell' })).toEqual({ ZSH: 'Z shell' });
  });

  it('preserves symbol-laden keys like C++', () => {
    expect(sanitizeSubstitutions({ 'C++': 'C plus plus' })).toEqual({ 'C++': 'C plus plus' });
  });
});
