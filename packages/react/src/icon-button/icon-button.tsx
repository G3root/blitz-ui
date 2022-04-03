import { Button, ButtonProps, buttonLoadingState } from '../button';

import * as React from 'react';
import { __DEV__ } from '../utils';

type OmittedProps = 'leftIcon' | 'rightIcon' | 'ref' | 'shape';

interface BaseButtonProps extends Omit<ButtonProps, OmittedProps> {}

interface IconButtonBase extends BaseButtonProps {
  /**
   * The icon to be used in the button.
   * @type React.ReactElement
   */
  icon?: React.ReactElement;
  /**
   * If `true`, the button will be perfectly round. Else, it'll be slightly round
   */
  rounded?: boolean;
  /**
   * A11y: A label that describes the button
   */
  'aria-label': string;
}

type IconButtonProps = IconButtonBase & buttonLoadingState;

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    const { icon, children, rounded, 'aria-label': ariaLabel, ...rest } = props;

    /**
     * Passing the icon as prop or children should work
     */
    const element = icon || children;
    const _children = React.isValidElement(element)
      ? React.cloneElement(element, {
          'aria-hidden': true,
          focusable: false
        })
      : null;
    return (
      <Button
        shape={rounded ? 'pill' : 'default'}
        ref={ref}
        aria-label={ariaLabel}
        iconButton
        {...rest}
      >
        {_children}
      </Button>
    );
  }
);

if (__DEV__) {
  IconButton.displayName = 'IconButton';
}
