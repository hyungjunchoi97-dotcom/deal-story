/**
 * Deal 101 / Acquisition Premium (EN) — Server Component
 */
import type { Metadata } from "next";
import AcquisitionPremiumClientEn from "./AcquisitionPremiumClientEn";

export const metadata: Metadata = {
  title: "Acquisition Premium — Why Buyers Pay More Than Market Price | Deal 101 | Deal Story",
  description:
    "The three sources of acquisition premiums (synergy, control, strategic scarcity), the Winner's Curse, and case studies from Microsoft/Activision, Twitter, and Adobe/Figma.",
  keywords: [
    "acquisition premium",
    "control premium",
    "M&A premium",
    "winner's curse",
    "takeover premium",
  ],
  alternates: {
    canonical: "/en/deal-101/acquisition-premium",
    languages: {
      ko: "/deal-101/acquisition-premium",
      en: "/en/deal-101/acquisition-premium",
      "x-default": "/deal-101/acquisition-premium",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    images: [
      { url: "/api/og", width: 1200, height: 630, alt: "Acquisition Premium — Deal Story" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og"],
  },
};

export default function AcquisitionPremiumPageEn() {
  return <AcquisitionPremiumClientEn />;
}
