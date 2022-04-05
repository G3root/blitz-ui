import { Booleanish } from './types';

export const cx = (...classNames: any[]) =>
  classNames.filter(Boolean).join(' ');

export const dataAttr = (condition: boolean | undefined) =>
  (condition ? '' : undefined) as Booleanish;

export const ariaAttr = (condition: boolean | undefined) =>
  condition ? true : undefined;
