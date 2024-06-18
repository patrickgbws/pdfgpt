/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,  // 禁用构建期间的 ESLint 检查
  },
  // 如果有其他配置项，可以继续添加
};

export default nextConfig;
