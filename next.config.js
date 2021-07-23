module.exports = {
  reactStrictMode: true,
  // Proxy requests to third party API
  async rewrites() {
    return [
      {
        source: '/users',
        destination: `${process.env.HOST}/api/v1/users`,
      },
    ]
  },
}
