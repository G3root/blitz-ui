import {
  lightColors,
  darkColors,
  commonColors,
  semanticDarkColors,
  semanticLightColors
} from '../src/theme/colors/';
import fs from 'fs/promises';
import path from 'path';
const fsExtra = require('fs-extra');

const SEMANTIC_LIGHT_VAR = 'semantic';
const SEMANTIC_DARK_VAR = 'semanticDark';

async function generateCss(fileName: string, content: string) {
  await fs.writeFile(
    path.join(__dirname, '..', 'dist', 'styles', `${fileName}.css`),
    content,
    'utf-8'
  );
}

async function generateLightCSS() {
  const keys = Object.keys(lightColors) as Array<keyof typeof lightColors>;

  for (const color of keys) {
    let cssVars = '';
    const currentColor = lightColors[color];
    const currentColorValues = Object.values(currentColor);
    currentColorValues.map(
      (value, index) => (cssVars += `--${color}-${index + 1}:${value};\n`)
    );
    const varTemplate = ':root {' + '\n' + cssVars + '}';
    await generateCss(color, varTemplate);
  }
}

async function generateCommonCSS() {
  const keys = Object.keys(commonColors) as Array<keyof typeof commonColors>;

  for (const color of keys) {
    let cssVars = '';
    const currentColor = commonColors[color];
    const currentColorValues = Object.values(currentColor);
    currentColorValues.map(
      (value, index) => (cssVars += `--${color}-${index + 1}:${value};\n`)
    );
    const varTemplate = ':root {' + '\n' + cssVars + '}';
    await generateCss(color, varTemplate);
  }
}

async function generateSemanticCSS() {
  const keys = Object.keys(semanticLightColors);
  let cssVars = '';
  for (const color of keys) {
    const currentColor = semanticLightColors[color];
    cssVars += `--${color}:${currentColor};\n`;
  }
  const lightVarTemplate = ':root {' + '\n' + cssVars + '}';
  await generateCss(SEMANTIC_LIGHT_VAR, lightVarTemplate);

  cssVars = '';

  for (const color of keys) {
    const currentColor = semanticDarkColors[color];
    cssVars += `--${color}:${currentColor};\n`;
  }

  const darkVarTemplate = '.dark {' + '\n' + cssVars + '}';
  await generateCss(SEMANTIC_DARK_VAR, darkVarTemplate);
}

async function generateDarkCSS() {
  const keys = Object.keys(darkColors) as Array<keyof typeof darkColors>;

  for (const color of keys) {
    let cssVars = '';
    const currentColor = darkColors[color];
    const currentColorValues = Object.values(currentColor);
    currentColorValues.map(
      (value, index) => (cssVars += `--${color}-${index + 1}:${value};\n`)
    );
    const varTemplate = '.dark {' + '\n' + cssVars + '}';
    await generateCss(color + 'Dark', varTemplate);
  }
}

async function generateBaseCSS() {
  let cssVars = '';
  const commonColorkeys = Object.keys(commonColors) as Array<
    keyof typeof commonColors
  >;
  const lightColorKeys = Object.keys(lightColors) as Array<
    keyof typeof lightColors
  >;

  commonColorkeys.map((val) => (cssVars += `@import './${val}.css';\n`));
  lightColorKeys.map(
    (val) =>
      (cssVars += `@import './${val}.css';\n@import './${val}Dark.css';\n`)
  );
  cssVars += `@import './${SEMANTIC_LIGHT_VAR}.css';\n@import './${SEMANTIC_DARK_VAR}.css';\n`;
  await generateCss('base', cssVars);
}

(async () => {
  await fsExtra.emptyDir(path.join(__dirname, '..', 'dist', 'styles'));

  await Promise.allSettled([
    await generateLightCSS(),
    await generateLightCSS(),
    await generateDarkCSS(),
    await generateCommonCSS(),
    await generateBaseCSS(),
    await generateSemanticCSS()
  ]);
})();
