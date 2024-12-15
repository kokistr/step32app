/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    appDir: true,  // `app` ディレクトリを使用する場合に必要
  },
};

module.exports = nextConfig;
