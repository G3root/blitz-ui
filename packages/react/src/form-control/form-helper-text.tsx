import * as React from 'react';
import { __DEV__ } from '../utils';
import { useFormControlContext } from './form-control';

type DivProps = Omit<JSX.IntrinsicElements['div'], 'ref'>;

export interface HelpTextProps extends DivProps {}

/**
 * FormHelperText
 *
 * Assistive component that conveys additional guidance
 * about the field, such as how it will be used and what
 * types in values should be provided.
 */
export const FormHelperText = React.forwardRef<HTMLDivElement, HelpTextProps>(
  ({ children, ...props }, ref) => {
    const field = useFormControlContext();

    return (
      <div
        {...field?.getHelpTextProps(props, ref)}
        className="mt-2 text-sm text-neutral-11"
      >
        {children}
      </div>
    );
  }
);

if (__DEV__) {
  FormHelperText.displayName = 'FormHelperText';
}
