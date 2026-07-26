/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/portfolic',
  assetPrefix: '/portfolic/',
};

module.exports = nextConfig;