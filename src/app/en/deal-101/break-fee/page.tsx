/**
 * Deal 101 / Break-up Fee (EN) — Server Component
 */
import type { Metadata } from "next";
import BreakFeeClientEn from "./BreakFeeClientEn";

export const metadata: Metadata = {
  title: "Break-up Fee — The Price of Walking Away from a Deal | Deal 101 | Deal Story",
  description:
    "Buyer vs. reverse break-up fees, typical size (2–5% of deal value), and what happened in Adobe/Figma ($1B fee) and Musk/Twitter (specific performance won).",
  keywords: [
    "break-up fee",
    "termination fee",
    "reverse break fee",
    "M&A contract",
    "deal termination",
    "specific performance",
  ],
  alternates: {
    canonical: "/en/deal-101/break-fee",
    languages: {
      ko: "/deal-101/break-fee",
      en: "/en/deal-101/break-fee",
      "x-default": "/deal-101/break-fee",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    images: [
      { url: "/api/og?lang=en", width: 1200, height: 630, alt: "Break-up Fee — The Price of Walking Away — Deal Story" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og?lang=en"],
  },
};

export default function BreakFeePageEn() {
  return <BreakFeeClientEn />;
}
