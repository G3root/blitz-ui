import * as React from 'react';
import { useTagSizeContext } from '.';
import { Icon } from '../icon';
import {
  tagCloseButtonInner,
  tagCloseButtonInnerProps
} from './tag-close-button.style';
import {
  createComponent,
  createElement,
  createHook,
  As,
  Options,
  Props
} from '../utils';

const TagCloseIcon = () => {
  return (
    <Icon
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      className="!align-[inherit] w-[0.90rem] h-[0.90rem]"
      focusable={false}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </Icon>
  );
};

const useTagCloseButtonInner = createHook<TagCloseButtonInnerOptions>(
  ({ color, size, variant, ...props }) => {
    props = {
      ...props,
      className: tagCloseButtonInner({
        color,
        size,
        variant,
        class: props.className
      })
    };
    return props;
  }
);

const TagCloseButtonInner = createComponent<TagCloseButtonInnerOptions>(
  (props) => {
    const htmlProps = useTagCloseButtonInner(props);
    return createElement('button', htmlProps);
  }
);

type TagCloseButtonInnerOptions<T extends As = 'button'> = Options<T> &
  tagCloseButtonInnerProps;

type TagCloseButtonInnerProps<T extends As = 'button'> = Props<
  TagCloseButtonInnerOptions<T>
>;

export type TagCloseButtonProps = TagCloseButtonInnerProps;

export const TagCloseButton = createComponent<TagCloseButtonProps>(
  ({ type, 'aria-label': ariaLabel, children, ...rest }) => {
    const { size, color, variant } = useTagSizeContext();
    return (
      <TagCloseButtonInner
        aria-label={ariaLabel ? ariaLabel : 'close'}
        type={type ? type : 'button'}
        size={size}
        color={color}
        variant={variant}
        {...rest}
      >
        {children === undefined ? <TagCloseIcon /> : <>{children}</>}
      </TagCloseButtonInner>
    );
  }
);
