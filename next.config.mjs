/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
  images: {
    domains: ['localhost', 'images.prismic.io'],
  },
  eslint: {
    dirs: ['pages', 'components', 'lib', 'utils'],
  },
};

export default nextConfig;
