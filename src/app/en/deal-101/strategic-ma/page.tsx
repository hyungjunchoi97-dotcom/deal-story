/**
 * Deal 101 / Strategic M&A (EN) — Server Component
 */
import type { Metadata } from "next";
import { StrategicMaClientEn } from "./StrategicMaClientEn";

export const metadata: Metadata = {
  title: "Strategic M&A — Buying Market Position, Not Just Returns | Deal 101 | Deal Story",
  description:
    "Strategic buyer vs PE financial buyer, six strategic M&A rationales (horizontal, vertical, tech acquisition, acqui-hire, market entry, defensive), and Meta×Instagram, Microsoft×LinkedIn case studies.",
  keywords: [
    "strategic M&A",
    "strategic buyer",
    "horizontal integration",
    "vertical integration",
    "acqui-hire",
    "synergy",
    "Meta Instagram acquisition",
    "Microsoft LinkedIn acquisition",
    "M&A strategy",
    "defensive M&A",
  ],
  alternates: {
    canonical: "/en/deal-101/strategic-ma",
    languages: {
      ko: "/deal-101/strategic-ma",
      en: "/en/deal-101/strategic-ma",
      "x-default": "/deal-101/strategic-ma",
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
  return <StrategicMaClientEn />;
}
