/** @type {import('next').NextConfig} */
const nextConfig = {
 env:{key:"rzp_test_c7zdpCezsUthih"},
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
