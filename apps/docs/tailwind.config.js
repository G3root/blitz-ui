const { preset } = require('@blitz-ui/core');

module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{jsx,tsx}',
    './node_modules/@blitz-ui/react/src/**/*.{jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  presets: [preset]
};
