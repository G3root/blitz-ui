import { darkColors, lightColors, commonColors, themeColors } from ".";

export const themePreset = {
  colors: {
    ...themeColors,
  },
  variables: {
    DEFAULT: {
      colors: {
        ...commonColors,
        ...lightColors,
      },
    },
    darkVariables: {
      DEFAULT: {
        colors: {
          ...darkColors,
        },
      },
    },
  },
};
