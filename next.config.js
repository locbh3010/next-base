const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.NODE_ENV === 'production',
});

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  poweredByHeader: false,

  transpilePackages: ['lodash', '@mui/material', '@mui/styles'],
});

module.exports = nextConfig;
