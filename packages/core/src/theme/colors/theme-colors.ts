import { commonColors } from "./common-colors";
import { cssVar } from "../../utils";

const commonColorsKeys = Object.keys(commonColors) as Array<
  keyof typeof commonColors
>;

const withPrefix = cssVar("colors-");

const commonColorsVariables: typeof commonColors = commonColorsKeys.reduce(
  (prev: any, curr) => {
    const value = commonColors[curr];
    if (typeof value === "string") {
      prev[curr] = withPrefix(value);
      return prev;
    } else {
      const rangeKeys = Object.keys(value) as unknown as Array<
        keyof typeof value
      >;

      const rangeValues = rangeKeys.reduce(
        (
          range: {
            [key: number]: string;
          },
          currentRange
        ) => {
          range[currentRange] = withPrefix(`${curr}-${currentRange}`);
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

export const themeColors = {
  ...commonColorsVariables,
  primaryLight: withPrefix("blue-100"),
  primary: withPrefix("blue-500"),
  primaryDark: withPrefix("blue-600"),
  primaryShadow: withPrefix("blue-100"),

  secondaryLight: withPrefix("purple-100"),
  secondary: withPrefix("purple-500"),
  secondaryDark: withPrefix("purple-600"),
  secondaryShadow: withPrefix("purple-100"),

  successLight: withPrefix("green-100"),
  success: withPrefix("green-500"),
  successDark: withPrefix("green-600"),
  successShadow: withPrefix("green-100"),

  warningLight: withPrefix("yellow-100"),
  warning: withPrefix("yellow-500"),
  warningDark: withPrefix("yellow-600"),
  warningShadow: withPrefix("yellow-100"),

  errorLight: withPrefix("red-100"),
  error: withPrefix("red-500"),
  errorDark: withPrefix("red-600"),
  errorShadow: withPrefix("red-100"),
};
