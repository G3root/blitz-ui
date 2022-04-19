import { cva, VariantProps } from '../utils';

export const ButtonInnerStyle = cva(
  'flex items-center font-medium text-center disabled:cursor-not-allowed ',
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
      shape: {
        square: 'rounded-lg',
        pill: 'rounded-full'
      },
      size: {
        xs: 'py-2 px-3 text-xs',
        sm: 'py-2 px-3 text-sm',
        md: 'px-5 py-2.5 text-sm',
        lg: 'py-3 px-5 text-base',
        xl: 'px-6 py-3.5 text-base '
      },
      variant: {
        solid: '',
        flat: '',
        ghost:
          'motion-reduce:transition-none motion-reduce:hover:transform-none transition duration-200',
        outline:
          'motion-reduce:transition-none motion-reduce:hover:transform-none transition duration-200',
        link: 'hover:underline disabled:hover:no-underline'
      },
      iconButton: {
        true: ''
      }
    },
    compoundVariants: [
      //default variant
      {
        variant: 'solid',
        color: 'primary',
        class: [
          'bg-primary-9',
          'hover:bg-primary-10',
          'text-white',
          'disabled:hover:bg-primary-9'
        ]
      },
      {
        variant: 'solid',
        color: 'info',
        class: [
          'bg-info-9',
          'hover:bg-info-10',
          'text-white',
          'disabled:hover:bg-info-9'
        ]
      },
      {
        variant: 'solid',
        color: 'success',
        class: [
          'bg-success-9',
          'hover:bg-success-10',
          'text-white',
          'disabled:hover:bg-success-9'
        ]
      },
      {
        variant: 'solid',
        color: 'warning',
        class: [
          'bg-warning-9',
          'hover:bg-warning-10',
          'text-black',
          'disabled:hover:bg-warning-9'
        ]
      },
      {
        variant: 'solid',
        color: 'danger',
        class: [
          'bg-danger-9',
          'hover:bg-danger-10',
          'text-white',
          'disabled:hover:bg-danger-9'
        ]
      },
      {
        variant: 'solid',
        color: 'neutral',
        class: [
          'bg-neutral-9',
          'hover:bg-neutral-10',
          'text-white',
          'disabled:hover:bg-neutral-9'
        ]
      },

      //flat variant
      {
        variant: 'flat',
        color: 'primary',
        class: [
          'bg-primary-3',
          'text-primary-11',
          'hover:bg-primary-4',
          'disabled:bg-primary-3'
        ]
      },
      {
        variant: 'flat',
        color: 'info',
        class: [
          'bg-info-3',
          'text-info-11',
          'hover:bg-info-4',
          'disabled:bg-info-3'
        ]
      },
      {
        variant: 'flat',
        color: 'success',
        class: [
          'bg-success-3',
          'text-success-11',
          'hover:bg-success-4',
          'disabled:bg-success-3'
        ]
      },
      {
        variant: 'flat',
        color: 'warning',
        class: [
          'bg-warning-3',
          'text-warning-11',
          'hover:bg-warning-4',
          'disabled:bg-warning-3'
        ]
      },
      {
        variant: 'flat',
        color: 'danger',
        class: [
          'bg-danger-3',
          'text-danger-11',
          'hover:bg-danger-4',
          'disabled:bg-danger-3'
        ]
      },
      {
        variant: 'flat',
        color: 'neutral',
        class: [
          'bg-neutral-3',
          'text-neutral-11',
          'hover:bg-neutral-4',
          'disabled:bg-neutral-3'
        ]
      },
      // outline variant
      {
        variant: 'outline',
        color: 'primary',
        class: [
          'text-primary-11',
          'hover:bg-primary-4',
          'hover:border-primary-8',
          'border',
          'border-primary-7',
          'disabled:hover:bg-transparent',
          'disabled:hover:border-primary-7'
        ]
      },
      {
        variant: 'outline',
        color: 'info',
        class: [
          'text-info-11',
          'hover:bg-info-4',
          'hover:border-info-8',
          'border',
          'border-info-7',
          'disabled:hover:bg-transparent',
          'disabled:hover:border-info-7'
        ]
      },
      {
        variant: 'outline',
        color: 'success',
        class: [
          'text-success-11',
          'hover:bg-success-4',
          'hover:border-success-8',
          'border',
          'border-success-7',
          'disabled:hover:bg-transparent',
          'disabled:hover:border-success-7'
        ]
      },
      {
        variant: 'outline',
        color: 'warning',
        class: [
          'text-warning-11',
          'hover:bg-warning-4',
          'hover:border-warning-8',
          'border',
          'border-warning-7',
          'disabled:hover:bg-transparent',
          'disabled:hover:border-warning-7'
        ]
      },
      {
        variant: 'outline',
        color: 'danger',
        class: [
          'text-danger-11',
          'hover:bg-danger-4',
          'hover:border-danger-8',
          'border',
          'border-danger-7',
          'disabled:hover:bg-transparent',
          'disabled:hover:border-danger-7'
        ]
      },
      {
        variant: 'outline',
        color: 'neutral',
        class: [
          'text-neutral-11',
          'hover:bg-neutral-4',
          'hover:border-neutral-8',
          'border',
          'border-neutral-7',
          'disabled:hover:bg-transparent',
          'disabled:hover:border-neutral-7'
        ]
      },

      //link variant
      {
        variant: 'link',
        color: 'primary',
        class: 'text-primary-11'
      },
      {
        variant: 'link',
        color: 'info',
        class: 'text-info-11'
      },
      {
        variant: 'link',
        color: 'success',
        class: 'text-success-11'
      },
      {
        variant: 'link',
        color: 'warning',
        class: 'text-warning-11'
      },
      {
        variant: 'link',
        color: 'danger',
        class: 'text-danger-11'
      },
      {
        variant: 'link',
        color: 'neutral',
        class: 'text-neutral-11'
      },
      //Ghost variant
      {
        variant: 'ghost',
        color: 'primary',
        class: [
          'text-primary-11',
          'hover:bg-primary-4',
          'disabled:hover:bg-transparent'
        ]
      },
      {
        variant: 'ghost',
        color: 'info',
        class: [
          'text-info-11',
          'hover:bg-info-4',
          'disabled:hover:bg-transparent'
        ]
      },
      {
        variant: 'ghost',
        color: 'success',
        class: [
          'text-success-11',
          'hover:bg-success-4',
          'disabled:hover:bg-transparent'
        ]
      },
      {
        variant: 'ghost',
        color: 'warning',
        class: [
          'text-warning-11',
          'hover:bg-warning-4',
          'disabled:hover:bg-transparent'
        ]
      },
      {
        variant: 'ghost',
        color: 'danger',
        class: [
          'text-danger-11',
          'hover:bg-danger-4',
          'disabled:hover:bg-transparent'
        ]
      },
      {
        variant: 'ghost',
        color: 'neutral',
        class: [
          'text-neutral-11',
          'hover:bg-neutral-4',
          'disabled:hover:bg-transparent'
        ]
      },
      // rounded button size
      {
        iconButton: true,
        size: 'xs',
        class: '!p-1.5'
      },
      {
        iconButton: true,
        size: 'sm',
        class: '!p-2'
      },
      {
        iconButton: true,
        size: 'md',
        class: '!p-3'
      },
      {
        iconButton: true,
        size: 'lg',
        class: '!p-4'
      },
      {
        iconButton: true,
        size: 'xl',
        class: '!p-5'
      }
    ],
    defaultVariants: {
      color: 'primary',
      shape: 'square',
      size: 'md',
      variant: 'solid'
    }
  }
);

export type ButtonInnerStyleProps = VariantProps<typeof ButtonInnerStyle>;
