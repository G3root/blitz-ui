import { cva, VariantProps } from '../utils';

export const HeadingStyle = cva('font-semibold', {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      '7xl': 'text-7xl',
      '8xl': 'text-8xl',
      '9xl': 'text-9xl'
    },
    breakWords: {
      normal: 'break-normal',
      words: 'break-words',
      all: 'break-all',
      none: ''
    },
    color: {
      primary: 'text-primary-11',
      info: 'text-info-11',
      success: 'text-success-11',
      warning: 'text-warning-11',
      danger: 'text-danger-11',
      neutral: 'text-neutral-11',
      loContrast: 'text-loContrast',
      hiContrast: 'text-hiContrast'
    }
  },
  defaultVariants: {
    size: 'xl',
    breakWords: 'none',
    color: 'hiContrast'
  }
});

export type HeadingStyleProps = VariantProps<typeof HeadingStyle>;
