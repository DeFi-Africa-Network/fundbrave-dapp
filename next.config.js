/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    APP_NAME: process.env.APP_NAME,
    ALCHEMY_ID: process.env.ALCHEMY_ID,
    WEB3_PROJECT_ID: process.env.WEB3_PROJECT_ID,
    CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
