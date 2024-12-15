/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: 'standalone',
  experimental: {
    appDir: true, // appルーターを有効化
  },
  // srcディレクトリをベースディレクトリとして指定
  distDir: 'src/.next',
};

module.exports = nextConfig;
