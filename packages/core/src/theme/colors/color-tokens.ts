import { cssVar } from '../../utils';

const withPrefix = cssVar('colors-');

import {
  blackA,
  whiteA,
  blue,
  slate,
  green,
  red,
  amber,
  purple,
  blueDark,
  slateDark,
  greenDark,
  redDark,
  amberDark,
  purpleDark
} from '@radix-ui/colors';

export type ColorTokens = {
  [key: number]: string;
};

/* -------------------------------------------------------------------------------------------------
 * Common to light and dark palette
 * -----------------------------------------------------------------------------------------------*/

const blackAlphaValues = Object.values(blackA);
export const blackAlpha = blackAlphaValues.reduce<ColorTokens>(
  (prev, curr, index) => {
    prev[index + 1] = curr;
    return prev;
  },
  {}
);

const whiteAlphaValues = Object.values(whiteA);
export const whiteAlpha = whiteAlphaValues.reduce<ColorTokens>(
  (prev, curr, index) => {
    prev[index + 1] = curr;
    return prev;
  },
  {}
);

export const commonColors = {
  blackAlpha,
  whiteAlpha
};

/* -------------------------------------------------------------------------------------------------
 * Light palette
 * -----------------------------------------------------------------------------------------------*/

const primaryValues = Object.values(blue);
const primary = primaryValues.reduce<ColorTokens>((prev, curr, index) => {
  prev[index + 1] = curr;
  return prev;
}, {});

const neutralValues = Object.values(slate);
const neutral = neutralValues.reduce<ColorTokens>((prev, curr, index) => {
  prev[index + 1] = curr;
  return prev;
}, {});

const successValues = Object.values(green);
const success = successValues.reduce<ColorTokens>((prev, curr, index) => {
  prev[index + 1] = curr;
  return prev;
}, {});

const infoValues = Object.values(purple);
const info = infoValues.reduce<ColorTokens>((prev, curr, index) => {
  prev[index + 1] = curr;
  return prev;
}, {});

const warningValues = Object.values(amber);
const warning = warningValues.reduce<ColorTokens>((prev, curr, index) => {
  prev[index + 1] = curr;
  return prev;
}, {});

const dangerValues = Object.values(red);
const danger = dangerValues.reduce<ColorTokens>((prev, curr, index) => {
  prev[index + 1] = curr;
  return prev;
}, {});

const semanticColors = {
  loContrast: 'white',
  hiContrast: withPrefix('neutral-12')
};

export const lightColors = {
  primary,
  neutral,
  success,
  info,
  warning,
  danger,
  ...semanticColors
};

/* -------------------------------------------------------------------------------------------------
 * Dark palette
 * -----------------------------------------------------------------------------------------------*/

const primaryDarkValues = Object.values(blueDark);
const primaryDark = primaryDarkValues.reduce<ColorTokens>(
  (prev, curr, index) => {
    prev[index + 1] = curr;
    return prev;
  },
  {}
);

const neutralDarkValues = Object.values(slateDark);
const neutralDark = neutralDarkValues.reduce<ColorTokens>(
  (prev, curr, index) => {
    prev[index + 1] = curr;
    return prev;
  },
  {}
);

const successDarkValues = Object.values(greenDark);
const successDark = successDarkValues.reduce<ColorTokens>(
  (prev, curr, index) => {
    prev[index + 1] = curr;
    return prev;
  },
  {}
);

const infoDarkValues = Object.values(purpleDark);
const infoDark = infoDarkValues.reduce<ColorTokens>((prev, curr, index) => {
  prev[index + 1] = curr;
  return prev;
}, {});

const warningDarkValues = Object.values(amberDark);
const warningDark = warningDarkValues.reduce<ColorTokens>(
  (prev, curr, index) => {
    prev[index + 1] = curr;
    return prev;
  },
  {}
);

const dangerDarkValues = Object.values(redDark);
const dangerDark = dangerDarkValues.reduce<ColorTokens>((prev, curr, index) => {
  prev[index + 1] = curr;
  return prev;
}, {});

const semanticDarkColors = {
  loContrast: withPrefix('neutral-1'),
  hiContrast: withPrefix('neutral-12')
};

export const darkColors: typeof lightColors = {
  primary: primaryDark,
  neutral: neutralDark,
  success: successDark,
  info: infoDark,
  warning: warningDark,
  danger: dangerDark,
  ...semanticDarkColors
};
