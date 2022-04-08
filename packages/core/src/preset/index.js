const { themeColors } = require('../theme');

module.exports = {
  theme: {
    colors: {
      ...themeColors,
      black: 'black',
      white: 'white'
    },
    animation: {
      spin: 'spin 500ms linear infinite'
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms')({
      strategy: 'class'
    })
  ]
};
