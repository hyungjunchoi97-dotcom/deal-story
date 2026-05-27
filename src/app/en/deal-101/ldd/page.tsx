/**
 * Deal 101 / LDD (Legal Due Diligence) (EN) — Server Component
 */
import type { Metadata } from "next";
import LddClientEn from "./LddClientEn";

export const metadata: Metadata = {
  title: "LDD (Legal Due Diligence) — Finding the Hidden Legal Time Bombs | Deal 101 | Deal Story",
  description:
    "Contracts, IP ownership, litigation, regulatory licenses, and employment risk. Case studies: Verizon×Yahoo ($350M price cut after breach discovered) and Microsoft×LinkedIn (GDPR structure redesign).",
  keywords: [
    "LDD",
    "legal due diligence",
    "change of control",
    "IP risk",
    "litigation",
    "regulatory risk",
    "contract review",
  ],
  alternates: {
    canonical: "/en/deal-101/ldd",
    languages: {
      ko: "/deal-101/ldd",
      en: "/en/deal-101/ldd",
      "x-default": "/deal-101/ldd",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    images: [
      { url: "/api/og?lang=en", width: 1200, height: 630, alt: "LDD (Legal Due Diligence) — Deal Story" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og?lang=en"],
  },
};

export default function LddPageEn() {
  return <LddClientEn />;
}
