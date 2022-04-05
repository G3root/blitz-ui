import * as React from 'react';

export type GetComponentProps<T> = T extends
  | React.ComponentType<infer P>
  | React.Component<infer P>
  ? P
  : never;

export type Booleanish = boolean | 'true' | 'false';

export type Merge<T, P> = P & Omit<T, keyof P>;

export type FunctionArguments<T extends Function> = T extends (
  ...args: infer R
) => any
  ? R
  : never;
