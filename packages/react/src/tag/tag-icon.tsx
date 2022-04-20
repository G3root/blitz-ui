import * as React from 'react';

import { Icon, IconProps } from '../icon';
import { createComponent, cx } from '../utils';

export interface TagIconLeftProps extends IconProps {}

export const TagIconLeft = createComponent<TagIconLeftProps>(
  ({ className, ...rest }) => {
    const _className = cx(className, 'inline-block h-4 w-4 mr-2');
    return <Icon className={_className} {...rest} />;
  }
);

export interface TagIconRightProps extends IconProps {}

export const TagIconRight = createComponent<TagIconRightProps>(
  ({ className, ...rest }) => {
    const _className = cx(className, 'inline-block h-4 w-4 ml-2');
    return <Icon className={_className} {...rest} />;
  }
);
