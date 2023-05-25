/** @type {import('next').NextConfig} */
module.exports = {
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
