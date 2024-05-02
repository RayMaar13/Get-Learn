const path = require("path");

/**
 * @type {import('next-react-svg').NextReactSvgConfig}
 */
const nextReactSvgConfig = {
  include: path.resolve(__dirname, "src/assets/svg"),
};

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    domains: ["localhost"],
  },
  reactStrictMode: true,
  env: {
    API_URL: ["http://localhost:8888/"],
  },
};

const withReactSvg = require("next-react-svg")(nextReactSvgConfig);

module.exports = withReactSvg(nextConfig);
