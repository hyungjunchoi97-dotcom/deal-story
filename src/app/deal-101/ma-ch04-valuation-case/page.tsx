import type { Metadata } from "next";
import MaCh04ValuationCaseClient from "./MaCh04ValuationCaseClient";

export const metadata: Metadata = {
  title: "M&A Ch.4 — Valuation 가정의 게임 (Disney×Pixar + AOL×Time Warner) | Deal Story",
  description:
    "Valuation은 model의 정밀도가 아니라 가정과 narrative의 art. Disney×Pixar (2006) — Iger가 DCF $5B을 $7.4B narrative로 정당화. AOL×Time Warner (2000) — 가정이 깨졌을 때 $165B → $3B. DCF 4 가정·Comps 5 driver.",
  keywords: ["Valuation", "DCF", "Trading Comps", "Transaction Comps", "Strategic Premium", "Bob Iger", "Disney Pixar", "AOL Time Warner", "Revenue Projection"],
  alternates: {
    canonical: "/deal-101/ma-ch04-valuation-case",
    languages: {
      ko: "/deal-101/ma-ch04-valuation-case",
      en: "/en/deal-101/ma-ch04-valuation-case",
      "x-default": "/deal-101/ma-ch04-valuation-case",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    title: "M&A Ch.4 — Valuation 가정의 게임",
    description: "Disney×Pixar narrative valuation + AOL×Time Warner 가정 붕괴",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() {
  return <MaCh04ValuationCaseClient lang="ko" />;
}
