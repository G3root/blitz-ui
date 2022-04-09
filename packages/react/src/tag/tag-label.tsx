import {
  createComponent,
  createElement,
  createHook,
  As,
  Options,
  Props,
  cx
} from '../utils';

const useTagLabel = createHook<TagLabelOptions>((props) => {
  props = {
    ...props,
    className: cx('line-clamp-1', props.className)
  };
  return props;
});

export const TagLabel = createComponent<TagLabelOptions>((props) => {
  const htmlProps = useTagLabel(props);
  return createElement('span', htmlProps);
});

type TagLabelOptions<T extends As = 'span'> = Options<T>;

export type TagLabelProps<T extends As = 'span'> = Props<TagLabelOptions<T>>;
