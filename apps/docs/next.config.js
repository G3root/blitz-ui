const { withContentlayer } = require('next-contentlayer');
const path = require('path');
/** @type {import('next').NextConfig} */
module.exports = withContentlayer({
  reactStrictMode: true,
  webpack: (config, options) => {
    if (options.isServer) {
      config.externals = ['react', ...config.externals];
    }

    config.resolve.alias['react'] = path.resolve(
      __dirname,
      '.',
      'node_modules',
      'react'
    );
    config.resolve.alias['react-dom'] = path.resolve(
      __dirname,
      '.',
      'node_modules',
      'react-dom'
    );

    return config;
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/docs/getting-started',
        permanent: false
      },
      {
        source: '/docs',
        destination: '/docs/getting-started',
        permanent: false
      }
    ];
  }
});
