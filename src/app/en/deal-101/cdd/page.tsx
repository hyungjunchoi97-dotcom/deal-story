/**
 * Deal 101 / CDD (Commercial Due Diligence) (EN) — Server Component
 */
import type { Metadata } from "next";
import CddClientEn from "./CddClientEn";

export const metadata: Metadata = {
  title: "CDD (Commercial Due Diligence) — Is the Business Actually Sustainable? | Deal 101 | Deal Story",
  description:
    "Market sizing, competitive dynamics, customer analysis, and revenue quality. Case studies: MBK×Homeplus (missed e-commerce disruption), HP×Autonomy, WeWork.",
  keywords: [
    "CDD",
    "commercial due diligence",
    "market analysis",
    "customer analysis",
    "competitive landscape",
    "revenue quality",
  ],
  alternates: {
    canonical: "/en/deal-101/cdd",
    languages: {
      ko: "/deal-101/cdd",
      en: "/en/deal-101/cdd",
      "x-default": "/deal-101/cdd",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    images: [
      { url: "/api/og?lang=en", width: 1200, height: 630, alt: "CDD (Commercial Due Diligence) — Deal Story" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og?lang=en"],
  },
};

export default function CddPageEn() {
  return <CddClientEn />;
}
