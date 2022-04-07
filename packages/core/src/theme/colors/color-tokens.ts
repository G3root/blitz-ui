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
import { cssVar } from '../../utils';

type ColorTokens = {
  [key: number]: string;
};

/* -------------------------------------------------------------------------------------------------
 * Common to light and dark palette
 * -----------------------------------------------------------------------------------------------*/

const blackAlphaValues = Object.values(blackA);
const blackAlpha = blackAlphaValues.reduce<ColorTokens>((prev, curr, index) => {
  prev[index + 1] = curr;
  return prev;
}, {});

const whiteAlphaValues = Object.values(whiteA);
const whiteAlpha = whiteAlphaValues.reduce<ColorTokens>((prev, curr, index) => {
  prev[index + 1] = curr;
  return prev;
}, {});

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

export const commonColors = {
  blackAlpha,
  whiteAlpha
};

export const lightColors = {
  primary,
  neutral,
  success,
  info,
  warning,
  danger
};

export const darkColors: typeof lightColors = {
  primary: primaryDark,
  neutral: neutralDark,
  success: successDark,
  info: infoDark,
  warning: warningDark,
  danger: dangerDark
};

export const semanticDarkColors = {
  loContrast: cssVar('neutral-1'),
  hiContrast: cssVar('neutral-12')
};

export const semanticLightColors = {
  loContrast: 'white',
  hiContrast: cssVar('neutral-12')
};
