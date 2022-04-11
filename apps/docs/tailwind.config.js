const { preset } = require('@blitz-ui/core');

module.exports = {
  darkMode: 'class',
  content: [
    './node_modules/@blitz-ui/react/src/**/*.tsx',
    './nextra-theme-docs/**/*.js',
    './nextra-theme-docs/**/*.tsx',
    './nextra-theme-docs/**/*.css',
    './src/components/**/*.js',
    './src/components/**/*.tsx',
    './src/pages/**/*.md',
    './src/pages/**/*.mdx',
    './src/theme.config.js',
    './styles.css'
  ],
  theme: {
    fontFamily: {
      sans: [`"Inter"`, 'sans-serif'],
      mono: [
        'Menlo',
        'Monaco',
        'Lucida Console',
        'Liberation Mono',
        'DejaVu Sans Mono',
        'Bitstream Vera Sans Mono',
        'Courier New',
        'monospace'
      ]
    }
  },
  presets: [preset]
};
