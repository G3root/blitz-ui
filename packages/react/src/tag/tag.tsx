import * as React from 'react';
import type { GetComponentProps } from '../utils/types';
import { styled } from 'react-cva';
import { createContext } from '../react-utils';

export type TagProps = GetComponentProps<typeof TagInner>;

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

const TagWrapper = ({ size, color, variant, ...rest }: TagProps, ref: any) => {
  return (
    <TagSizeProvider value={{ size, color, variant }}>
      <TagInner
        ref={ref}
        size={size}
        color={color}
        variant={variant}
        {...rest}
      />
    </TagSizeProvider>
  );
};

export const Tag = React.forwardRef(TagWrapper);
export { useTagSizeContext };

const TagInner = styled('span', true)(
  'rounded-l-full rounded-r-full font-medium inline-flex items-center justify-center',
  {
    variants: {
      color: {
        primary: '',
        info: '',
        success: '',
        warning: '',
        danger: '',
        neutral: ''
      },
      size: {
        sm: 'h-5 px-1.5 text-xs',
        md: 'h-7 px-2 text-xs',
        lg: 'h-8 px-3 text-base'
      },
      variant: {
        solid: '',
        subtle: '',
        outline: ''
      }
    },
    compoundVariants: [
      //subtle variant
      {
        variant: 'subtle',
        color: 'primary',
        class: 'bg-primary-3 text-primary-11'
      },
      {
        variant: 'subtle',
        color: 'info',
        class: 'bg-info-3 text-info-11'
      },
      {
        variant: 'subtle',
        color: 'success',
        class: 'bg-success-3 text-success-11'
      },
      {
        variant: 'subtle',
        color: 'warning',
        class: 'bg-warning-3 text-warning-11'
      },
      {
        variant: 'subtle',
        color: 'danger',
        class: 'bg-danger-3 text-danger-11'
      },
      {
        variant: 'subtle',
        color: 'neutral',
        class: 'bg-neutral-3 text-neutral-11'
      },
      //solid variant
      {
        variant: 'solid',
        color: 'primary',
        class: 'bg-primary-9 text-white'
      },
      {
        variant: 'solid',
        color: 'info',
        class: 'bg-info-9 text-white'
      },
      {
        variant: 'solid',
        color: 'success',
        class: 'bg-success-9 text-white'
      },
      {
        variant: 'solid',
        color: 'warning',
        class: 'bg-warning-9 text-black'
      },
      {
        variant: 'solid',
        color: 'danger',
        class: 'bg-danger-9 text-white'
      },
      {
        variant: 'solid',
        color: 'neutral',
        class: 'bg-neutral-9 text-white'
      },
      //outline variant
      {
        variant: 'outline',
        color: 'primary',
        class: 'border border-primary-7 text-primary-11'
      },
      {
        variant: 'outline',
        color: 'info',
        class: 'border border-info-7 text-info-11'
      },
      {
        variant: 'outline',
        color: 'success',
        class: 'border border-success-7 text-success-11'
      },
      {
        variant: 'outline',
        color: 'warning',
        class: 'border border-warning-7 text-warning-11'
      },
      {
        variant: 'outline',
        color: 'danger',
        class: 'border border-danger-7 text-danger-11'
      },
      {
        variant: 'outline',
        color: 'neutral',
        class: 'border border-neutral-7 text-neutral-11'
      }
    ],
    defaultVariants: {
      color: 'neutral',
      variant: 'subtle',
      size: 'md'
    }
  }
);
