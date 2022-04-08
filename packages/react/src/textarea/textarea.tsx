import * as React from 'react';
import type { GetComponentProps } from '../utils/types';
import { styled } from 'react-cva';
import { __DEV__ } from '../utils';
import { useFormControl } from '../form-control/use-form-control';

export type TextareaInnerProps = GetComponentProps<typeof TextareaInner>;

export const TextareaInner = styled('textarea')(
  [
    'w-full text-neutral-12',
    'disabled:cursor-not-allowed',
    'placeholder:text-neutral-9',
    'motion-reduce:transition-none motion-reduce:hover:transform-none transition duration-300'
  ],
  {
    variants: {
      invalid: {
        true: '',
        false: ''
      },
      size: {
        xs: 'text-xs min-h-[1.5rem]',
        sm: 'text-sm min-h-[2rem]',
        md: 'text-base min-h-[2.5rem]',
        lg: 'text-lg min-h-[3rem]'
      },
      variant: {
        unstyled: '',
        outline: 'form-textarea rounded-md focus:ring focus:ring-opacity-50',
        flushed: 'form-textarea border-0 border-b-2 focus:ring-0',
        filled:
          'form-textarea rounded-md border-2 border-transparent focus:bg-transparent focus:border-2 focus:ring-0'
      }
    },
    compoundVariants: [
      {
        variant: 'outline',
        invalid: false,
        class: 'border-neutral-7 focus:ring-primary-5 focus:border-primary-8'
      },
      {
        variant: 'outline',
        invalid: true,
        class: 'border-danger-7 focus:ring-danger-5 focus:border-danger-8'
      },
      {
        variant: 'flushed',
        invalid: false,
        class: 'border-neutral-5 focus:border-primary-8'
      },
      {
        variant: 'flushed',
        invalid: true,
        class: 'border-danger-5 focus:border-danger-8'
      },
      {
        variant: 'filled',
        invalid: false,
        class: 'bg-neutral-3 focus:border-primary-8'
      },
      {
        variant: 'filled',
        invalid: true,
        class: 'bg-danger-3 focus:border-danger-8'
      }
    ],
    defaultVariants: {
      invalid: false,
      size: 'md',
      variant: 'outline'
    }
  }
);

export interface TextareaProps extends TextareaInnerProps {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ rows, ...rest }, ref) => {
    const textareaProps = useFormControl<HTMLTextAreaElement>(rest);
    return (
      <TextareaInner
        ref={ref}
        rows={rows}
        {...textareaProps}
        invalid={textareaProps['aria-invalid']}
      />
    );
  }
);

if (__DEV__) {
  Textarea.displayName = 'Textarea';
}
