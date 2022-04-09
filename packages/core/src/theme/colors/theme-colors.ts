import { commonColors, lightColors, semanticLightColors } from './color-tokens';
import { cssVar } from '../../utils';

const mergedColors = {
  ...commonColors,
  ...lightColors,
  ...semanticLightColors
};

const mergedColorsKeys = Object.keys(mergedColors) as Array<
  keyof typeof mergedColors
>;

export const themeColors: typeof mergedColors = mergedColorsKeys.reduce(
  (prev: any, curr) => {
    const value = mergedColors[curr];
    if (typeof value === 'string') {
      prev[curr] = cssVar(curr);
      return prev;
    } else {
      const rangeKeys = Object.keys(value) as unknown as Array<
        keyof typeof value
      >;

      const rangeValues = rangeKeys.reduce<{ [key: number]: string }>(
        (range, currentRange) => {
          range[currentRange] = cssVar(curr + '-' + String(currentRange));
          return range;
        },
        {}
      );
      prev[curr] = rangeValues;
      return prev;
    }
  },
  {}
);
