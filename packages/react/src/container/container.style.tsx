import { cva, VariantProps } from '../utils';

export const ContainerStyle = cva('container', {
  variants: {
    isCentered: {
      true: 'mx-auto',
      false: ''
    }
  },

  defaultVariants: {
    isCentered: false
  }
});

export type ContainerStyleProps = VariantProps<typeof ContainerStyle>;
