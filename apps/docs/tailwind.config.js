const { preset } = require("@blitz-ui/core");
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/**/*.{jsx,tsx}",
    "./node_modules/@blitz-ui/react/**/*.{jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#000",
        white: "#fff",
        gray: colors.gray,
        slate: colors.slate,
        neutral: colors.neutral,
        red: colors.red,
        orange: colors.orange,
        yellow: colors.yellow,
        prime: colors.blue,
        dark: "#111",
      },
    },
  },
  presets: [preset],
};
