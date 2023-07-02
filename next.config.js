/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/ctv/dashboard",
        permanent: false,
      },
    ];
  },
};
