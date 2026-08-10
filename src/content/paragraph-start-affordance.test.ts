// @vitest-environment happy-dom
import { afterEach, describe, expect, it, vi } from 'vitest';
import { ParagraphStartAffordance } from './paragraph-start-affordance';

function startButton(): HTMLButtonElement | null {
  const root = document.querySelector('#dita-start-host')?.shadowRoot ?? null;
  return root?.querySelector<HTMLButtonElement>('.dita-start-btn') ?? null;
}

describe('ParagraphStartAffordance', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('shows the start button when hovering a readable paragraph', () => {
    const para = document.createElement('p');
    para.textContent = 'hello world';
    document.body.appendChild(para);

    const aff = new ParagraphStartAffordance({
      isReadable: (el) => el === para,
      onStartFrom: () => {},
    });
    aff.enable();

    para.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));

    const btn = startButton();
    expect(btn).not.toBeNull();
    expect(btn?.hidden).toBe(false);
  });

  it('finds the readable ancestor when hovering a child element', () => {
    const para = document.createElement('p');
    const span = document.createElement('span');
    span.textContent = 'nested';
    para.appendChild(span);
    document.body.appendChild(para);

    const aff = new ParagraphStartAffordance({
      isReadable: (el) => el === para,
      onStartFrom: () => {},
    });
    aff.enable();

    span.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));

    expect(startButton()?.hidden).toBe(false);
  });

  it('does not show the button for non-readable elements', () => {
    const para = document.createElement('p');
    document.body.appendChild(para);
    const other = document.createElement('div');
    document.body.appendChild(other);

    const aff = new ParagraphStartAffordance({
      isReadable: (el) => el === para,
      onStartFrom: () => {},
    });
    aff.enable();

    other.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));

    expect(startButton()?.hidden).toBe(true);
  });

  it('hides the button when leaving the readable paragraph', () => {
    const para = document.createElement('p');
    const other = document.createElement('div');
    document.body.append(para, other);

    const aff = new ParagraphStartAffordance({
      isReadable: (el) => el === para,
      onStartFrom: () => {},
    });
    aff.enable();

    para.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
    expect(startButton()?.hidden).toBe(false);

    other.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
    expect(startButton()?.hidden).toBe(true);
  });

  it('keeps the page selection when pressing the start button', () => {
    const para = document.createElement('p');
    document.body.appendChild(para);
    const aff = new ParagraphStartAffordance({
      isReadable: (el) => el === para,
      onStartFrom: () => {},
    });
    aff.enable();
    para.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));

    const press = new MouseEvent('mousedown', { bubbles: true, cancelable: true });
    startButton()?.dispatchEvent(press);

    expect(press.defaultPrevented).toBe(true);
  });

  it('clicking the button fires onStartFrom with the paragraph', () => {
    const para = document.createElement('p');
    para.textContent = 'read me';
    document.body.appendChild(para);

    const onStartFrom = vi.fn();
    const aff = new ParagraphStartAffordance({ isReadable: (el) => el === para, onStartFrom });
    aff.enable();

    para.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
    startButton()?.click();

    expect(onStartFrom).toHaveBeenCalledWith(para);
    expect(startButton()?.hidden).toBe(true);
  });

  it('does not fire when moving onto the button itself', () => {
    const para = document.createElement('p');
    document.body.appendChild(para);

    const onStartFrom = vi.fn();
    const aff = new ParagraphStartAffordance({ isReadable: (el) => el === para, onStartFrom });
    aff.enable();

    para.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
    const host = document.querySelector('#dita-start-host');
    // moving onto the button retargets to the host — must stay shown, no callback
    host?.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));

    expect(startButton()?.hidden).toBe(false);
    expect(onStartFrom).not.toHaveBeenCalled();
  });

  it('disable removes the button and stops reacting', () => {
    const para = document.createElement('p');
    document.body.appendChild(para);

    const aff = new ParagraphStartAffordance({
      isReadable: (el) => el === para,
      onStartFrom: () => {},
    });
    aff.enable();
    aff.disable();

    para.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));

    expect(startButton()).toBeNull();
  });

  it('highlights the hovered paragraph and clears it on leave', () => {
    const para = document.createElement('p');
    const other = document.createElement('div');
    document.body.append(para, other);

    const aff = new ParagraphStartAffordance({
      isReadable: (el) => el === para,
      onStartFrom: () => {},
    });
    aff.enable();

    para.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
    expect(para.classList.contains('dita-start-candidate')).toBe(true);

    other.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
    expect(para.classList.contains('dita-start-candidate')).toBe(false);
  });

  it('clears the highlight after clicking start', () => {
    const para = document.createElement('p');
    document.body.appendChild(para);

    const aff = new ParagraphStartAffordance({
      isReadable: (el) => el === para,
      onStartFrom: () => {},
    });
    aff.enable();

    para.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
    startButton()?.click();

    expect(para.classList.contains('dita-start-candidate')).toBe(false);
  });
});
