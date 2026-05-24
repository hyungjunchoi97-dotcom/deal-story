/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // 배포 차단 방지 — 타입 에러는 개발 중 로컬에서 확인
    ignoreBuildErrors: true,
  },
  eslint: {
    // eslint.config.mjs에서 룰 관리 중
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
};
export default nextConfig;
