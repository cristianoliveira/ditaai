import { describe, expect, it } from 'vitest';
import type { ReadScope } from './read-scope';
import { parseStoredScope, serializeScope } from './read-scope';

describe('parseStoredScope', () => {
  it('parses a stored DOM scope', () => {
    const raw = serializeScope({ source: 'dom', selector: 'article > .prose' });
    expect(parseStoredScope(raw)).toEqual({ source: 'dom', selector: 'article > .prose' });
  });

  it('parses a stored accessibility scope without AX node ids', () => {
    const scope = {
      source: 'accessibility',
      anchorSelector: '#story .prose-wrap',
      locator: { firstStaticPrefix: 'The landscape in the south', staticCount: 14 },
    } as const;
    const parsed = parseStoredScope(serializeScope(scope));
    expect(parsed).toEqual(scope);
    expect(JSON.stringify(parsed)).not.toMatch(/nodeId|backendDOM/i);
  });

  it('migrates a legacy bare selector string to a DOM scope', () => {
    expect(parseStoredScope('main .content')).toEqual({ source: 'dom', selector: 'main .content' });
  });

  it('returns null for empty and whitespace-only legacy values', () => {
    expect(parseStoredScope('')).toBeNull();
    expect(parseStoredScope('   ')).toBeNull();
  });

  it('returns null for malformed JSON', () => {
    expect(parseStoredScope('{"source": "dom",')).toBeNull();
  });

  it('returns null for JSON that is not a scope object', () => {
    expect(parseStoredScope('42')).toBeNull();
    expect(parseStoredScope('["dom", "p"]')).toBeNull();
    expect(parseStoredScope('{"source": "galaxy"}')).toBeNull();
  });

  it('returns null for a dom scope with empty selector', () => {
    expect(parseStoredScope('{"source":"dom","selector":""}')).toBeNull();
  });

  it('returns null for an accessibility scope missing locator fields', () => {
    expect(parseStoredScope('{"source":"accessibility","anchorSelector":"#a"}')).toBeNull();
    expect(
      parseStoredScope('{"source":"accessibility","anchorSelector":"#a","locator":{}}'),
    ).toBeNull();
  });

  it('rejects scopes carrying session-only AX ids', () => {
    const poisoned =
      '{"source":"accessibility","anchorSelector":"#a","locator":{"firstStaticPrefix":"x","staticCount":1,"nodeId":"42"}}';
    expect(parseStoredScope(poisoned)).toBeNull();
  });
});

describe('serializeScope', () => {
  it('round-trips every scope variant', () => {
    const scopes: ReadScope[] = [
      { source: 'dom', selector: 'p' },
      {
        source: 'accessibility',
        anchorSelector: '#a',
        locator: { firstStaticPrefix: 'x', staticCount: 1 },
      },
    ];
    for (const scope of scopes) {
      expect(parseStoredScope(serializeScope(scope))).toEqual(scope);
    }
  });
});
