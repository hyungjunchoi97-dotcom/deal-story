import type { Metadata } from "next";
import MaVc01Client from "./MaVc01Client";

export const metadata: Metadata = {
  title: "VC Ch.1 — VC 산업 구조 + Seed→Growth 단계 + 심사역 일과 | Deal Story",
  description: "Pre-seed부터 Series D+까지 6단계 valuation/ARR threshold · 심사역의 주 50시간 시간 배분 · 🇺🇸 Top 10 (a16z·Sequoia·Benchmark·Accel·Founders Fund·USV·Greylock·Lightspeed·Tiger·Insight) · 🇰🇷 Top 8 (알토스·한투파·KB·카카오벤처스·IMM·본엔젤스·미래에셋·SBI) · KR vs US 7 차이.",
  keywords: ["VC", "Venture Capital", "Sequoia", "a16z", "Benchmark", "알토스벤처스", "한국투자파트너스", "심사역", "Associate", "Seed", "Series A"],
  alternates: { canonical: "/deal-101/vc-ch01-industry-stages", languages: { ko: "/deal-101/vc-ch01-industry-stages", en: "/en/deal-101/vc-ch01-industry-stages", "x-default": "/deal-101/vc-ch01-industry-stages" } },
  openGraph: { type: "article", siteName: "Deal Story", locale: "ko_KR", alternateLocale: ["en_US"], title: "VC Ch.1 — VC 산업 + 단계 + 심사역", description: "단계별 정의 · 심사역 일과 · US Top 10 + 🇰🇷 Top 8 도감", images: [{ url: "/api/og", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() { return <MaVc01Client lang="ko" />; }
