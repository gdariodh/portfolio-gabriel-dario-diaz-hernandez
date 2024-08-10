/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.prismic.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
  eslint: {
    dirs: [
      'pages',
      'components',
      'utils',
      'services',
      'constants',
      'models',
      'hooks',
      'store',
      'contexts',
    ],
  },
};

export default nextConfig;
