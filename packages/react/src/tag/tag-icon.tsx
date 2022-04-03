import * as React from 'react';

import { Icon, IconProps } from '../icon';
import { cx, __DEV__ } from '../utils';

export interface TagIconLeftProps extends IconProps {}

export const TagIconLeft = React.forwardRef<SVGSVGElement, TagIconLeftProps>(
  ({ className, ...rest }, ref) => {
    const _className = cx(className, '!align-top mr-2');
    return <Icon className={_className} {...rest} ref={ref} />;
  }
);

if (__DEV__) {
  TagIconLeft.displayName = 'TagIconLeft';
}

export interface TagIconRightProps extends IconProps {}

export const TagIconRight = React.forwardRef<SVGSVGElement, TagIconRightProps>(
  ({ className, ...rest }, ref) => {
    const _className = cx(className, '!align-top ml-2');
    return <Icon className={_className} {...rest} ref={ref} />;
  }
);

if (__DEV__) {
  TagIconRight.displayName = 'TagIconRight';
}
