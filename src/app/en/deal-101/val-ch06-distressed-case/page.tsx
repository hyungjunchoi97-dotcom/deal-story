import type { Metadata } from "next";
import MaVal06Client from "@/app/deal-101/val-ch06-distressed-case/MaVal06Client";

export const metadata: Metadata = {
  title: "Valuation Ch.6 — Distressed Case: Caesars Chapter 11 | Deal Story",
  description:
    "$11B going-concern vs $7B liquidation. Why each creditor class brings a different valuation, what the examiner report changed, and how recoveries landed in court.",
  keywords: ["Valuation", "Distressed", "Caesars", "Chapter 11", "Going Concern", "Liquidation", "Apollo TPG", "Examiner Report"],
  alternates: {
    canonical: "/en/deal-101/val-ch06-distressed-case",
    languages: {
      ko: "/deal-101/val-ch06-distressed-case",
      en: "/en/deal-101/val-ch06-distressed-case",
      "x-default": "/deal-101/val-ch06-distressed-case",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    title: "Valuation Ch.6 — Distressed Case: Caesars Chapter 11",
    description: "$11B going-concern vs $7B liquidation — how each creditor class's valuation drives the negotiation",
    images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() {
  return <MaVal06Client lang="en" />;
}
