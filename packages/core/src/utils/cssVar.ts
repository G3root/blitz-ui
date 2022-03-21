export const cssVar = (prefix?: string) => (value: string) =>
  `var(--${prefix ? prefix + value : value})`;
