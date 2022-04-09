import * as React from 'react';
import { textAreaStyle, textAreaStyleProps } from './text-area.style';
import {
  createComponent,
  createElement,
  createHook,
  As,
  Options,
  Props
} from '../utils';
import { useFormControl } from '../form-control/use-form-control';
import { FormControlOptions } from '../form-control';

export const useTextareaInner = createHook<TextareaInnerOptions>(
  ({ invalid, size, variant, ...props }) => {
    props = {
      ...props,
      className: textAreaStyle({
        invalid,
        size,
        variant,
        class: props.className
      })
    };
    return props;
  }
);

const TextareaInner = createComponent<TextareaInnerOptions>((props) => {
  const htmlProps = useTextareaInner(props);
  return createElement('textarea', htmlProps);
});

type TextareaInnerOptions<T extends As = 'textarea'> = Options<T> &
  textAreaStyleProps &
  FormControlOptions;

type TextareaInnerProps<T extends As = 'textarea'> = Props<
  TextareaInnerOptions<T>
>;

export type TextareaProps = Omit<TextareaInnerProps, 'invalid'>;

export const Textarea = createComponent<TextareaProps>(({ rows, ...rest }) => {
  const textareaProps = useFormControl<HTMLTextAreaElement>(rest);
  return (
    <TextareaInner
      rows={rows}
      {...textareaProps}
      invalid={textareaProps['aria-invalid']}
    />
  );
});
