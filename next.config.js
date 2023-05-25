/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
    remotePatterns: [
      {
        hostname: "drive.google.com",
      },
    ],
  },
  assetPrefix: './',
}

module.exports = nextConfig;
