import {
  createComponent,
  createElement,
  createHook,
  As,
  Options,
  Props,
  cx
} from '../utils';

export const useCenter = createHook<CenterOptions>((props) => {
  props = {
    ...props,
    className: cx('flex items-center justify-center', props.className)
  };
  return props;
});

export const Center = createComponent<CenterOptions>((props) => {
  const htmlProps = useCenter(props);
  return createElement('div', htmlProps);
});

export type CenterOptions<T extends As = 'div'> = Options<T>;

export type CenterProps<T extends As = 'div'> = Props<CenterOptions<T>>;
