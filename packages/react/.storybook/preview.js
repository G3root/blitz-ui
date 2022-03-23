import './styles.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
  // darkMode: {
  //   dark: { ...themes.dark, appBg: "#1c1c1c", appContentBg: "#151718" },
  //   light: { ...themes.normal, appBg: "#f9fafb", appContentBg: "#ffffff" },
  //   stylePreview: true,
  // },
};
