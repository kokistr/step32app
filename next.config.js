/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    appDir: true, // Next.js 14以降でappフォルダを利用する場合
  },
  // basePathの設定を追加
  basePath: '/src',
};

module.exports = nextConfig
