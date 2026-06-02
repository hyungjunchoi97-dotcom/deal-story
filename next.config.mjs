/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Google OAuth 프로필 이미지 (avatar_url)
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      // Supabase Storage
      { protocol: "https", hostname: "lueabdipttdgqxhtreqk.supabase.co" },
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
