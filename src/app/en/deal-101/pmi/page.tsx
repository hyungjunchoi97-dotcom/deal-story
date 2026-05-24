/**
 * Deal 101 / PMI (EN) — Server Component
 */
import type { Metadata } from "next";
import PmiClientEn from "./PmiClientEn";

export const metadata: Metadata = {
  title: "PMI — Where Deals Actually Win or Lose | Deal 101 | Deal Story",
  description:
    "The three integration challenges (org, IT, culture), the 100-day plan, and three case studies: Disney×Pixar (independence preserved), HP×Compaq (IT integration failure), Daimler×Chrysler (culture war).",
  keywords: [
    "PMI", "post-merger integration", "M&A integration", "synergy realization",
    "culture integration", "IT integration", "100-day plan",
  ],
  alternates: {
    canonical: "/en/deal-101/pmi",
    languages: {
      ko: "/deal-101/pmi",
      en: "/en/deal-101/pmi",
      "x-default": "/deal-101/pmi",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    images: [
      { url: "/api/og?lang=en", width: 1200, height: 630, alt: "PMI — Where Deals Actually Win or Lose | Deal Story" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og?lang=en"],
  },
};

export default function PmiPageEn() {
  return <PmiClientEn />;
}
