module.exports = {
  reactStrictMode: true,
  webpack(config) {
    return config;
  },
  images: {
    domains: ['books.google.com']
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
};