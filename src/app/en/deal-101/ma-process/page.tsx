/**
 * Deal 101 / M&A Process (EN) — Server Component
 */
import type { Metadata } from "next";
import MaProcessClientEn from "./MaProcessClientEn";

export const metadata: Metadata = {
  title: "The M&A Process, End to End — Deal 101 | Deal Story",
  description:
    "From strategy to closing — the six phases of an M&A deal. Every stakeholder (IB, law firms, Big 4, regulators), every key document (IM, LOI, SPA, DD reports), and the real reasons deals succeed or fail, illustrated with Adobe/Figma, Musk/Twitter, and MBK/Homeplus.",
  keywords: [
    "M&A process", "M&A steps", "merger and acquisition", "LOI", "SPA", "due diligence",
    "financial due diligence", "FDD", "CDD", "LDD", "merger control", "M&A investment bank",
    "sell-side process", "buy-side process", "IM", "teaser", "VDR", "break-up fee", "MAC clause",
    "deal closing", "PMI", "post-merger integration",
  ],
  alternates: {
    canonical: "/en/deal-101/ma-process",
    languages: {
      ko: "/deal-101/ma-process",
      en: "/en/deal-101/ma-process",
      "x-default": "/deal-101/ma-process",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    images: [
      { url: "/api/og?lang=en", width: 1200, height: 630, alt: "The M&A Process, End to End — Deal Story" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og?lang=en"],
  },
};

export default function MaProcessPageEn() {
  return <MaProcessClientEn />;
}
