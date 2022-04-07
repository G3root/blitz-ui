import { commonColors, lightColors } from './color-tokens';
import { cssVar } from '../../utils';

const mergedColors = { ...commonColors, ...lightColors };

const mergedColorsKeys = Object.keys(mergedColors) as Array<
  keyof typeof mergedColors
>;

export const themeColors: typeof mergedColors = mergedColorsKeys.reduce(
  (prev: any, curr) => {
    const value = mergedColors[curr];
    if (typeof value === 'string') {
      prev[curr] = cssVar(curr.toLowerCase());
      return prev;
    } else {
      const rangeKeys = Object.keys(value) as unknown as Array<
        keyof typeof value
      >;

      const rangeValues = rangeKeys.reduce<{ [key: number]: string }>(
        (range, currentRange) => {
          range[currentRange] = cssVar(
            curr.toLowerCase() + '-' + String(currentRange)
          );
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
