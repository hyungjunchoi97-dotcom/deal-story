/**
 * Deal 101 / Stock Deal vs. Asset Deal (EN) — Server Component
 */
import type { Metadata } from "next";
import StockVsAssetClientEn from "./StockVsAssetClientEn";

export const metadata: Metadata = {
  title: "Stock Deal vs. Asset Deal — Buying the Company or Just Its Parts | Deal 101 | Deal Story",
  description:
    "The structural difference between stock and asset purchases, who prefers which and why (it's mostly taxes), and when each structure makes sense.",
  keywords: [
    "stock deal", "asset deal", "stock purchase", "asset purchase",
    "M&A structure", "tax step-up", "section 338 election",
  ],
  alternates: {
    canonical: "/en/deal-101/stock-vs-asset-deal",
    languages: {
      ko: "/deal-101/stock-vs-asset-deal",
      en: "/en/deal-101/stock-vs-asset-deal",
      "x-default": "/deal-101/stock-vs-asset-deal",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    images: [
      { url: "/api/og?lang=en", width: 1200, height: 630, alt: "Stock Deal vs. Asset Deal — Deal Story" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og?lang=en"],
  },
};

export default function StockVsAssetPageEn() {
  return <StockVsAssetClientEn />;
}
