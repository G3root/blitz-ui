const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './src/theme.config.js'
});

module.exports = withNextra({
  reactStrictMode: true
});
