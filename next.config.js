/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    appDir: true,
  },
  // Next.jsのルートディレクトリをsrcに設定
  basePath: '',
};

module.exports = nextConfig;
