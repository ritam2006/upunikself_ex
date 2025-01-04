module.exports = {
  reactStrictMode: true,
  swcMinify: true,  // Optional but recommended for minification
  webpack(config) {
    // Custom webpack modifications if needed
    return config;
  }
};