/**
 * Deal 101 / Competitive Moat (EN) — Server Component
 */
import type { Metadata } from "next";
import CompetitiveMoatClientEn from "./CompetitiveMoatClientEn";

export const metadata: Metadata = {
  title: "Competitive Moat — The Factor That Determines M&A Valuation Multiples | Deal Story",
  description:
    "Buffett's moat concept, five moat types (network effects, switching costs, cost advantage, intangible assets, efficient scale), how moat strength maps to EV/EBITDA multiples, and case studies on Danaher and LVMH.",
  keywords: [
    "competitive moat",
    "economic moat",
    "network effects",
    "switching costs",
    "intangible assets",
    "Danaher",
    "LVMH",
    "EV/EBITDA",
    "Warren Buffett",
  ],
  alternates: {
    canonical: "/en/deal-101/competitive-moat",
    languages: {
      ko: "/deal-101/competitive-moat",
      en: "/en/deal-101/competitive-moat",
      "x-default": "/deal-101/competitive-moat",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    images: [{ url: "/api/og?lang=en", width: 1200, height: 630, alt: "Deal Story" }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() {
  return <CompetitiveMoatClientEn />;
}
