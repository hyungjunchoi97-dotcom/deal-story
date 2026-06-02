import type { Metadata } from "next";
import MaFund03Client from "./MaFund03Client";

export const metadata: Metadata = {
  title: "Fund Ch.3 — Fund 종류와 구조: Buyout · VC · Credit · 한국 PEF | Deal Story",
  description:
    "8가지 전략 (PE Buyout · Growth · VC · Mezz · Distressed · Credit · RE · Infra), Closed-end vs Open-end vs Evergreen, 공모 (BDC · Listed PE) vs 사모, 한국 PEF·신기술조합·모태펀드·KDB 정책자금.",
  keywords: ["Fund", "PE Strategy", "Buyout", "Venture Capital", "Private Credit", "BDC", "PEF", "신기술조합", "모태펀드", "KVIC"],
  alternates: {
    canonical: "/deal-101/fund-ch03-fund-types",
    languages: {
      ko: "/deal-101/fund-ch03-fund-types",
      en: "/en/deal-101/fund-ch03-fund-types",
      "x-default": "/deal-101/fund-ch03-fund-types",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    title: "Fund Ch.3 — Fund 종류와 구조: Buyout · VC · Credit · 한국 PEF",
    description: "8 strategies · 3 structures · BDC/Listed PE · 한국 unique 4 구조",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() {
  return <MaFund03Client lang="ko" />;
}
