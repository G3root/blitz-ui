import * as React from 'react';
import type { GetComponentProps } from '../utils/types';
import { styled } from 'react-cva';
import { __DEV__ } from '../utils';

type SpinnerBase = GetComponentProps<typeof SpinnerBase>;

const SpinnerBase = styled('svg')('animate-spin motion-reduce:hidden h-5 w-5', {
  variants: {
    color: {
      primary: 'text-primary-11',
      info: 'text-info-11',
      success: 'text-success-11',
      warning: 'text-warning-11',
      danger: 'text-danger-11',
      neutral: 'text-neutral-11',
      white: 'text-whiteAlpha-11',
      black: 'text-blackAlpha-11',
      hiContrast: 'text-hiContrast',
      loContrast: 'text-loContrast'
    },
    size: {
      xs: 'h-3 w-3',
      sm: 'h-4 w-4',
      md: 'h-6 w-6',
      lg: 'h-8 w-8',
      xl: 'h-12 w-12'
    }
  },
  defaultVariants: {
    color: 'hiContrast',
    size: 'md'
  }
});

export interface SpinnerProps extends SpinnerBase {
  label?: string;
}

export const Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(
  ({ label, ...props }, ref) => {
    return (
      <SpinnerBase
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden
        {...props}
        ref={ref}
      >
        <circle
          className="opacity-25"
          cx={12}
          cy={12}
          r={10}
          stroke="currentColor"
          strokeWidth={4}
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
        {label ? <span className="sr-only">{label}</span> : null}
      </SpinnerBase>
    );
  }
);

if (__DEV__) {
  Spinner.displayName = 'Spinner';
}
