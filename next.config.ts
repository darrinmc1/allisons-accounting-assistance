import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/buy", destination: "/pricing", permanent: false },
      { source: "/buy/:path*", destination: "/pricing", permanent: false },
      { source: "/checkout", destination: "/pricing", permanent: false },
      { source: "/checkout/:path*", destination: "/pricing", permanent: false },
      { source: "/upgrade", destination: "/pricing", permanent: false },
      { source: "/upgrade/:path*", destination: "/pricing", permanent: false },
      { source: "/plans", destination: "/pricing", permanent: false },
      { source: "/plans/:path*", destination: "/pricing", permanent: false },
    ]
  },
}

export default nextConfig
