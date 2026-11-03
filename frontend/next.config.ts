import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },

  allowedDevOrigins: [
    "https://0a16-2409-40d1-112e-5a2-a04a-8989-e714-b3a0.ngrok-free.app"
  ],
};

export default nextConfig;