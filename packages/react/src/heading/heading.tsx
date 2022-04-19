import {
  createComponent,
  createElement,
  createHook,
  As,
  Options,
  Props
} from '../utils';
import { HeadingStyle, HeadingStyleProps } from './heading.style';

const useHeading = createHook<HeadingOptions>(({ size, ...props }) => {
  props = {
    ...props,
    className: HeadingStyle({
      size,

      class: props.className
    })
  };
  return props;
});

export const Heading = createComponent<HeadingOptions>((props) => {
  const htmlProps = useHeading(props);
  return createElement('h2', htmlProps);
});

type HeadingOptions<T extends As = 'h2'> = Options<T> & HeadingStyleProps;

export type HeadingProps<T extends As = 'h2'> = Props<HeadingOptions<T>>;
