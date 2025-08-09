/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/bharad-portfolio',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'avatars.githubusercontent.com'],
    formats: ['image/avif', 'image/webp'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Keep config minimal; rely on Next/SWC defaults for minification and chunking
};

module.exports = nextConfig;
