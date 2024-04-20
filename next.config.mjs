/** @type {import('next').NextConfig} */

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // TODO: remove when implement aws s3
      {
        protocol: 'https',
        hostname: 'i.gr-assets.com',
      },
    ],
  }
};

export default nextConfig;
