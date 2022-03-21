import { cssVar } from "../../utils";

const withPrefix = cssVar("colors-");

export const darkColors = {
  accents: {
    1: withPrefix("gray-900"),
    2: withPrefix("gray-800"),
    3: withPrefix("gray-700"),
    4: withPrefix("gray-600"),
    5: withPrefix("gray-500"),
    6: withPrefix("gray-400"),
    7: withPrefix("gray-300"),
    8: withPrefix("gray-200"),
    9: withPrefix("gray-100"),
  },
  text: withPrefix("white"),

  blue900: "#001835",
  purple900: "#1c0631",
  green900: "#033116",
  yellow900: "#3d2705",
  red900: "#3c0216",

  primaryLight: withPrefix("blue-900"),
  primaryShadow: withPrefix("blue-600"),

  secondaryLight: withPrefix("purple-900"),
  secondaryShadow: withPrefix("purple-600"),

  successLight: withPrefix("green-900"),
  successShadow: withPrefix("green-600"),

  warningLight: withPrefix("yellow-900"),
  warningShadow: withPrefix("yellow-600"),

  errorLight: withPrefix("red-900"),
  errorShadow: withPrefix("red-600"),

  background: withPrefix("black"),
  foreground: withPrefix("white"),
  codeLight: "#16272e",
  code: "#6cc0e1",
  border: withPrefix("gray-700"),
};
