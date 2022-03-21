import { cssVar } from "../../utils";

const withPrefix = cssVar("colors-");

export const lightColors = {
  accents: {
    1: withPrefix("gray-100"),
    2: withPrefix("gray-200"),
    3: withPrefix("gray-300"),
    4: withPrefix("gray-400"),
    5: withPrefix("gray-500"),
    6: withPrefix("gray-600"),
    7: withPrefix("gray-700"),
    8: withPrefix("gray-800"),
    9: withPrefix("gray-900"),
  },
  text: withPrefix("gray-800"),
  background: withPrefix("white"),
  foreground: withPrefix("black"),
  codeLight: withPrefix("pink-100"),
  code: withPrefix("pink-600"),
  border: withPrefix("gray-200"),
  selection: withPrefix("blue-200"),
};
