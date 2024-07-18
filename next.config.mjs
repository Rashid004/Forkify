/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "forkify-api.herokuapp.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
