import * as React from 'react';
import { __DEV__ } from '../utils';
import { useFormControlContext } from './form-control';

type LabelProps = JSX.IntrinsicElements['label'];

export interface FormLabelProps extends LabelProps {
  /**
   * @type React.ReactElement
   */
  requiredIndicator?: React.ReactElement;
  /**
   * @type React.ReactNode
   */
  optionalIndicator?: React.ReactNode;
}

/**
 * Used to enhance the usability of form controls.
 *
 * It is used to inform users as to what information
 * is requested for a form field.
 *
 * ♿️ Accessibility: Every form field should have a form label.
 */
export const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  (props, ref) => {
    const {
      children,
      requiredIndicator = <RequiredIndicator />,
      optionalIndicator = null,
      ...rest
    } = props;

    const field = useFormControlContext();
    const ownProps = field?.getLabelProps(rest, ref) ?? { ref, ...rest };

    return (
      <label
        {...ownProps}
        className="inline-block mb-1 text-neutral-12 font-medium text-sm"
      >
        {children}
        {field?.isRequired ? requiredIndicator : optionalIndicator}
      </label>
    );
  }
);

if (__DEV__) {
  FormLabel.displayName = 'FormLabel';
}

type SpanProps = Omit<JSX.IntrinsicElements['span'], 'ref'>;

export interface RequiredIndicatorProps extends SpanProps {}

/**
 * Used to show a "required" text or an asterisks (*) to indicate that
 * a field is required.
 */
export const RequiredIndicator = React.forwardRef<
  HTMLSpanElement,
  RequiredIndicatorProps
>((props, ref) => {
  const field = useFormControlContext();

  if (!field?.isRequired) return null;

  return (
    <span
      {...field?.getRequiredIndicatorProps(props, ref)}
      className="ml-1 text-danger-9 "
    />
  );
});

if (__DEV__) {
  RequiredIndicator.displayName = 'RequiredIndicator';
}
