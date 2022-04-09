import * as React from 'react';
import { createContext } from '../react-utils';

import {
  createComponent,
  createElement,
  createHook,
  As,
  Options,
  Props
} from '../utils';
import { tagInnerStyleProps, tagInnerStyle } from './tag.style';

type tagSize = TagProps['size'];
type color = TagProps['color'];
type variant = TagProps['variant'];

const [TagSizeProvider, useTagSizeContext] = createContext<{
  size: tagSize;
  color: color;
  variant: variant;
}>({
  name: 'TagSizeContext',
  errorMessage:
    'useTagSizeContext: `context` is undefined. Seems you forgot to wrap component within <Tag />'
});

const useTagInner = createHook<TagInnerOptions>(
  ({ color, size, variant, ...props }) => {
    props = {
      ...props,
      className: tagInnerStyle({
        color,
        size,
        variant,
        class: props.className
      })
    };
    return props;
  }
);

const TagInner = createComponent<TagInnerOptions>((props) => {
  const htmlProps = useTagInner(props);
  return createElement('span', htmlProps);
});

type TagInnerOptions<T extends As = 'span'> = Options<T> & tagInnerStyleProps;

type TagInnerProps<T extends As = 'span'> = Props<TagInnerOptions<T>>;

export type TagProps = TagInnerProps;

export const Tag = createComponent<TagProps>(
  ({ size, color, variant, ...rest }) => {
    return (
      <TagSizeProvider value={{ size, color, variant }}>
        <TagInner size={size} color={color} variant={variant} {...rest} />
      </TagSizeProvider>
    );
  }
);

export { useTagSizeContext };
