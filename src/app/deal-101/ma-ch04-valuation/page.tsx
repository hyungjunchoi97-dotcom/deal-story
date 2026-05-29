import type { Metadata } from "next";
import MaCh04ValuationClient from "./MaCh04ValuationClient";

export const metadata: Metadata = {
  title: "M&A Ch.4 — Valuation Football Field | Deal Story",
  description: "DCF · Trading Comps · Transaction Comps · LBO 4종 통합. Football field로 consensus zone 도출, DCF 7-step flow + WACC/growth 인터랙티브 sensitivity, LBO reverse-math.",
  keywords: ["Football field", "DCF", "WACC", "Terminal value", "Trading comps", "Transaction comps", "LBO reverse-math", "Valuation"],
  alternates: { canonical: "/deal-101/ma-ch04-valuation", languages: { ko: "/deal-101/ma-ch04-valuation", en: "/en/deal-101/ma-ch04-valuation", "x-default": "/deal-101/ma-ch04-valuation" } },
  openGraph: { type: "article", siteName: "Deal Story", locale: "ko_KR", alternateLocale: ["en_US"], title: "M&A Ch.4 — Valuation Football Field", images: [{ url: "/api/og", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() { return <MaCh04ValuationClient lang="ko" />; }
