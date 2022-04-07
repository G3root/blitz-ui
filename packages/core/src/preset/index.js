const { themeColors } = require('../theme');

module.exports = {
  theme: {
    colors: {
      ...themeColors
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
