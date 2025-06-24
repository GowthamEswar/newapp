const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    domains: ["images.unsplash.com"],
    formats: ["image/webp", "image/avif"]
  },
  output: "standalone",
  runtime: "edge"
};
module.exports = nextConfig;
