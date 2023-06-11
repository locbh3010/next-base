const WindiCSSWebpackPlugin = require('windicss-webpack-plugin');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.NODE_ENV === 'production',
});

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  poweredByHeader: false,

  webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin());
    return config;
  },

  transpilePackages: ['lodash'],
});

module.exports = nextConfig;