import * as React from 'react';
import { cx, __DEV__ } from '../utils';

export type VisuallyHiddenProps = JSX.IntrinsicElements['span'];

export const VisuallyHidden = React.forwardRef<
  HTMLSpanElement,
  VisuallyHiddenProps
>(({ children, className, ...rest }, ref) => {
  return (
    <span className={cx('sr-only', className)} {...rest} ref={ref}>
      {children}
    </span>
  );
});

if (__DEV__) {
  VisuallyHidden.displayName = 'VisuallyHidden';
}
