/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/raunakg/test-blogposts/main/images/**',
            },
        ],
    },
}

export default nextConfig
