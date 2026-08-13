import { describe, expect, it } from 'vitest';
import { simplifyLinks } from './links';

describe('simplifyLinks', () => {
  it('leaves text without URLs unchanged', () => {
    expect(simplifyLinks('Read more about it')).toBe('Read more about it');
  });

  it('replaces a pure https URL with "link to site <domain>"', () => {
    expect(simplifyLinks('https://example.com')).toBe('link to site example.com');
  });

  it('replaces a pure http URL', () => {
    expect(simplifyLinks('http://example.com')).toBe('link to site example.com');
  });

  it('drops path, query and fragment, keeping only the domain', () => {
    expect(simplifyLinks('https://example.com/posts/42?ref=mail#top')).toBe(
      'link to site example.com',
    );
  });

  it('replaces a bare www URL without a scheme', () => {
    expect(simplifyLinks('www.example.com/path')).toBe('link to site example.com');
  });

  it('strips a leading www subdomain from the spoken domain', () => {
    expect(simplifyLinks('https://www.example.com')).toBe('link to site example.com');
  });

  it('keeps non-www subdomains', () => {
    expect(simplifyLinks('https://docs.example.com')).toBe('link to site docs.example.com');
  });

  it('replaces an inline URL inside prose', () => {
    expect(simplifyLinks('Check https://example.com for details')).toBe(
      'Check link to site example.com for details',
    );
  });

  it('replaces multiple URLs in one segment', () => {
    expect(simplifyLinks('https://a.com and https://b.com')).toBe(
      'link to site a.com and link to site b.com',
    );
  });

  it('preserves trailing sentence punctuation', () => {
    expect(simplifyLinks('See https://example.com.')).toBe('See link to site example.com.');
  });

  it('preserves a trailing closing parenthesis', () => {
    expect(simplifyLinks('(see https://example.com)')).toBe('(see link to site example.com)');
  });

  it('is case-insensitive for the scheme (URL API lowercases host)', () => {
    expect(simplifyLinks('HTTPS://Example.COM/Path')).toBe('link to site example.com');
  });

  it('leaves descriptive anchor text untouched (no URL to mangle)', () => {
    expect(simplifyLinks('Read more')).toBe('Read more');
  });
});
