/** @type {import('next').NextConfig} */
export const images = {
  loader: 'akamai',
  path: '',
  remotePatterns: [
    {
      hostname: "drive.google.com",
    },
  ],
};
export const assetPrefix = './';
