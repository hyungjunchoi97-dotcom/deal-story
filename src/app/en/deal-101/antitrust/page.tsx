/**
 * Deal 101 / Antitrust & Merger Control (EN) — Server Component
 */
import type { Metadata } from "next";
import AntitrustClientEn from "./AntitrustClientEn";

export const metadata: Metadata = {
  title: "Antitrust & Merger Control — When Regulators Get a Vote | Deal 101 | Deal Story",
  description:
    "How competition authorities review M&A: KFTC, EU, DOJ, MOFCOM. Market definition, HHI, remedies, and three case studies: Adobe/Figma (blocked), Microsoft/Activision (conditional), Qualcomm/NXP (China alone killed it).",
  keywords: [
    "antitrust",
    "merger control",
    "competition law",
    "EU merger regulation",
    "HSR Act",
    "HHI",
    "market definition",
    "MOFCOM",
    "CFIUS",
  ],
  alternates: {
    canonical: "/en/deal-101/antitrust",
    languages: {
      ko: "/deal-101/antitrust",
      en: "/en/deal-101/antitrust",
      "x-default": "/deal-101/antitrust",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    images: [
      { url: "/api/og", width: 1200, height: 630, alt: "Antitrust & Merger Control — Deal Story" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og"],
  },
};

export default function AntitrustPageEn() {
  return <AntitrustClientEn />;
}
