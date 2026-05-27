/**
 * Deal 101 / Vertical Integration (EN) — Server Component
 */
import type { Metadata } from "next";
import VerticalIntegrationClientEn from "./VerticalIntegrationClientEn";

export const metadata: Metadata = {
  title: "Vertical Integration — The M&A Strategy for Owning the Supply Chain | Deal Story",
  description:
    "Forward vs backward integration, five strategic rationales (cost reduction, supply security, quality control, data advantage, competitive foreclosure), five risks, and Amazon/Apple case studies.",
  keywords: [
    "vertical integration",
    "forward integration",
    "backward integration",
    "supply chain M&A",
    "Amazon Whole Foods",
    "Apple chip design",
    "M&A strategy",
    "competitive moat",
  ],
  alternates: {
    canonical: "/en/deal-101/vertical-integration",
    languages: {
      ko: "/deal-101/vertical-integration",
      en: "/en/deal-101/vertical-integration",
      "x-default": "/deal-101/vertical-integration",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    images: [
      { url: "/api/og?lang=en", width: 1200, height: 630, alt: "Deal Story" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og?lang=en"],
  },
};

export default function Page() {
  return <VerticalIntegrationClientEn />;
}
