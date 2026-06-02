import type { Metadata } from "next";
import MaFund01Client from "./MaFund01Client";

export const metadata: Metadata = {
  title: "Fund Ch.1 — LP는 누구이고 왜 PE·VC에 돈을 맡기는가 | Deal Story",
  description:
    "7가지 LP 타입(Pension·Endowment·SWF·FoF·Insurance·Family Office·HNW), Illiquidity premium 이론, Yale Model vs CalPERS · NPS Asset allocation 비교, 글로벌 Top LP 카탈로그.",
  keywords: ["Fund", "LP", "Limited Partner", "Pension", "Endowment", "Sovereign Wealth Fund", "Yale Endowment Model", "Illiquidity Premium", "NPS"],
  alternates: {
    canonical: "/deal-101/fund-ch01-lp-overview",
    languages: {
      ko: "/deal-101/fund-ch01-lp-overview",
      en: "/en/deal-101/fund-ch01-lp-overview",
      "x-default": "/deal-101/fund-ch01-lp-overview",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    title: "Fund Ch.1 — LP는 누구이고 왜 PE·VC에 돈을 맡기는가",
    description: "7 LP 타입 · Illiquidity premium · Asset allocation · 글로벌 Top LP와 NPS",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() {
  return <MaFund01Client lang="ko" />;
}
