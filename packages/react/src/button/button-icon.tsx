import * as React from 'react';

export interface IButtonIconProps {
  children: React.ReactNode;
}

export function ButtonIcon({
  children,
  ...rest
}: IButtonIconProps & JSX.IntrinsicElements['span']) {
  const _children = React.isValidElement(children)
    ? React.cloneElement(children, {
        'aria-hidden': true,
        focusable: false
      })
    : children;

  return <span {...rest}>{_children}</span>;
}
