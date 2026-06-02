import type { Metadata } from "next";
import MaFund04Client from "./MaFund04Client";

export const metadata: Metadata = {
  title: "Fund Ch.4 — 자금이 운용되는 과정: Sourcing부터 Exit까지 | Deal Story",
  description:
    "Deal sourcing 50:1 funnel (250→1), IC process와 10-section memo, 6개 DD workstream 12주 Gantt, 100-day plan + hold period + Exit 5 options, PE 실무진 hierarchy (Associate → Partner) 보상 구조.",
  keywords: ["Fund", "Investment Lifecycle", "Deal Sourcing", "IC Memo", "Due Diligence", "PE Hierarchy", "Carry", "100-Day Plan"],
  alternates: {
    canonical: "/deal-101/fund-ch04-investment-lifecycle",
    languages: {
      ko: "/deal-101/fund-ch04-investment-lifecycle",
      en: "/en/deal-101/fund-ch04-investment-lifecycle",
      "x-default": "/deal-101/fund-ch04-investment-lifecycle",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    title: "Fund Ch.4 — 자금이 운용되는 과정: Sourcing부터 Exit까지",
    description: "Deal funnel 50:1 · IC process · DD 6 workstream · Hold/Exit · PE 실무진 hierarchy",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() {
  return <MaFund04Client lang="ko" />;
}
