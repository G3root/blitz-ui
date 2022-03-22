const {
  lightColors,
  themeColors,
  commonColors,
  darkColors,
} = require("../theme");

module.exports = {
  theme: {
    extend: {
      colors: {
        ...themeColors,
      },
    },
    variables: {
      DEFAULT: {
        colors: {
          ...lightColors,
          ...commonColors,
        },
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
  plugins: [
    require("@mertasan/tailwindcss-variables")({
      darkToRoot: false,
    }),
  ],
};
