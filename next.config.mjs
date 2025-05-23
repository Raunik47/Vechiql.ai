/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsHmrCache: false,
    // default to true
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "altsqcdorgolwggnotyu.supabase.co",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/embed",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "frame-src 'self' https://www.create.xyz/app/d14b9a2c-6789-4b08-b943-1b037b32d5ec",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
