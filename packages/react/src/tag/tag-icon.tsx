import * as React from 'react';

import { Icon, IconProps } from '../icon';
import { cx } from '../utils';

export interface TagIconLeftProps extends IconProps {}

function TagIconLeftWrapper(
  { className, ...rest }: TagIconLeftProps,
  ref: any
) {
  const _className = cx(className, '!align-top mr-2');
  return <Icon ref={ref} className={_className} {...rest} />;
}

export const TagIconLeft = React.forwardRef(TagIconLeftWrapper);

export interface TagIconRightProps extends IconProps {}

function TagIconRightWrapper(
  { className, ...rest }: TagIconRightProps,
  ref: any
) {
  const _className = cx(className, '!align-top ml-2');
  return <Icon ref={ref} className={_className} {...rest} />;
}

export const TagIconRight = React.forwardRef(TagIconRightWrapper);
