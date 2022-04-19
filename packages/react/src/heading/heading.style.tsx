import { cva, VariantProps } from '../utils';

export const HeadingStyle = cva('font-semibold text-hiContrast', {
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
    }
  },
  defaultVariants: {
    size: 'xl'
  }
});

export type HeadingStyleProps = VariantProps<typeof HeadingStyle>;
