export const __DEV__ = process.env.NODE_ENV !== 'production';

// Function assertions
export function isFunction<T extends Function = Function>(
  value: any
): value is T {
  return typeof value === 'function';
}
