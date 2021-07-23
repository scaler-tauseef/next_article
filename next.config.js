module.exports = {
  reactStrictMode: true,
  // Proxy requests to third party API
  async rewrites() {
    return [
      {
        source: '/users',
        destination: 'http://localhost:8080/api/v1/users',
      },
    ]
  },
}
