import type { Metadata } from "next";
import MaCh04ValuationClient from "@/app/deal-101/ma-ch04-valuation/MaCh04ValuationClient";

export const metadata: Metadata = {
  title: "M&A Ch.4 — Valuation Football Field | Deal Story",
  description: "DCF, Trading Comps, Transaction Comps, LBO — combining 4 methods into a single consensus zone. DCF 7-step flow + interactive WACC/growth sensitivity, LBO reverse-math.",
  keywords: ["Football field", "DCF", "WACC", "Terminal value", "Trading comps", "Transaction comps", "LBO reverse-math", "Valuation"],
  alternates: { canonical: "/en/deal-101/ma-ch04-valuation", languages: { ko: "/deal-101/ma-ch04-valuation", en: "/en/deal-101/ma-ch04-valuation", "x-default": "/deal-101/ma-ch04-valuation" } },
  openGraph: { type: "article", siteName: "Deal Story", locale: "en_US", alternateLocale: ["ko_KR"], title: "M&A Ch.4 — Valuation Football Field", images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() { return <MaCh04ValuationClient lang="en" />; }
