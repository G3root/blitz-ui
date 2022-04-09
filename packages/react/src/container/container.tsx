import {
  createComponent,
  createElement,
  createHook,
  As,
  Options,
  Props
} from '../utils';

import { ContainerStyle, ContainerStyleProps } from './container.style';

const useContainer = createHook<ContainerOptions>(
  ({ isCentered, ...props }) => {
    props = {
      ...props,
      className: ContainerStyle({ isCentered, class: props.className })
    };
    return props;
  }
);

export const Container = createComponent<ContainerOptions>((props) => {
  const htmlProps = useContainer(props);
  return createElement('div', htmlProps);
});

type ContainerOptions<T extends As = 'div'> = Options<T> & ContainerStyleProps;

export type ContainerProps<T extends As = 'div'> = Props<ContainerOptions<T>>;
