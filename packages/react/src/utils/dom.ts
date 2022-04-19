import { Booleanish } from './types';

export const cx = (...classNames: any[]) =>
  classNames.filter(Boolean).join(' ');

export const dataAttr = (condition: boolean | undefined) =>
  (condition ? '' : undefined) as Booleanish;

export const ariaAttr = (condition: boolean | undefined) =>
  condition ? true : undefined;

/**
 * It's `true` if it is running in a browser environment or `false` if it is not
 * (SSR).
 * @example
 * const title = canUseDOM ? document.title : "";
 */
export const canUseDOM = checkIsBrowser();

// Check if we can use the DOM. Useful for SSR purposes
function checkIsBrowser() {
  return typeof window !== 'undefined' && !!window.document?.createElement;
}
