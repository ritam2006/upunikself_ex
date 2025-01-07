module.exports = {
  reactStrictMode: true,
  webpack(config) {
    return config;
  },
  images: {
    domains: ['books.google.com']
  }
};