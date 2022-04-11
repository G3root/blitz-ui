const { preset } = require('@blitz-ui/core');

module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{jsx,tsx}',
    './node_modules/@blitz-ui/react/src/**/*.{jsx,tsx}',
    './node_modules/nextra-theme-docs/**/*.{jsx,tsx,css}'
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
