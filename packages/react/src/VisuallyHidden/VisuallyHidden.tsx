import * as React from 'react';
import { cx } from '../utils';

export type VisuallyHiddenProps = JSX.IntrinsicElements['span'];

export function VisuallyHidden({
  children,
  className,
  ...rest
}: VisuallyHiddenProps) {
  return (
    <span className={cx('sr-only', className)} {...rest}>
      {children}
    </span>
  );
}
