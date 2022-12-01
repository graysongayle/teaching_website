/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
}

module.exports = nextConfig;
