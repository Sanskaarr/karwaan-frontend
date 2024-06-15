/** @type {import('next').NextConfig} */
const nextConfig = {
 env:{key:"rzp_live_GhSm1REwnSWmDG"},
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.example.com',
        port: '',
        pathname: '/account123/**',
      },
    ],
  }
}

module.exports = nextConfig
