import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_BACKEND_URL!.startsWith('https') ? 'https' : 'http',
        hostname: new URL(process.env.NEXT_PUBLIC_BACKEND_URL!).hostname,
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
