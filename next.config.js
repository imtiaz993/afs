const path = require("path");
const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin();
const redirects = require("./utils/redirects");

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return redirects;
  },
  eslint: {
    ignoreDuringBuilds: true,
},
};

module.exports = withNextIntl({
  ...nextConfig,
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname),
      "@/components": path.resolve(__dirname, "components"),
      "@/public": path.resolve(__dirname, "public"),
    };
    return config;
  },
});
