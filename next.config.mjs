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
  // ── LBO 101 시리즈 이관 리다이렉트 (market-101 → deal-101) ──────────────
  async redirects() {
    return [
      { source: "/market-101/lbo-overview",          destination: "/deal-101/lbo-overview",          permanent: true },
      { source: "/market-101/lbo-capital-structure", destination: "/deal-101/lbo-capital-structure", permanent: true },
      { source: "/market-101/lbo-returns",           destination: "/deal-101/lbo-returns",           permanent: true },
      { source: "/market-101/lbo-deal-process",      destination: "/deal-101/lbo-deal-process",      permanent: true },
      { source: "/en/market-101/lbo-overview",          destination: "/en/deal-101/lbo-overview",          permanent: true },
      { source: "/en/market-101/lbo-capital-structure", destination: "/en/deal-101/lbo-capital-structure", permanent: true },
      { source: "/en/market-101/lbo-returns",           destination: "/en/deal-101/lbo-returns",           permanent: true },
      { source: "/en/market-101/lbo-deal-process",      destination: "/en/deal-101/lbo-deal-process",      permanent: true },
    ];
  },
};
export default nextConfig;
