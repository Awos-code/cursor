/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname),
    };
    return config;
  },
  experimental: {
    legacyBrowsers: false,
    browsersListForSwc: true,
  },
};

module.exports = nextConfig;