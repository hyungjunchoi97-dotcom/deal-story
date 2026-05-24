/**
 * Deal 101 / IPO vs. M&A Exit (EN) — Server Component
 */
import type { Metadata } from "next";
import IpoVsMaExitClientEn from "./IpoVsMaExitClientEn";

export const metadata: Metadata = {
  title: "IPO vs. M&A Exit — How Investors and Founders Cash Out | Deal 101 | Deal Story",
  description:
    "The trade-offs between going public and selling to a strategic buyer, PE fund exit options, and case studies from Figma and Arm Holdings.",
  keywords: [
    "IPO", "M&A exit", "PE exit", "secondary buyout", "trade sale", "Figma IPO", "Arm Holdings IPO",
  ],
  alternates: {
    canonical: "/en/deal-101/ipo-vs-ma-exit",
    languages: {
      ko: "/deal-101/ipo-vs-ma-exit",
      en: "/en/deal-101/ipo-vs-ma-exit",
      "x-default": "/deal-101/ipo-vs-ma-exit",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    images: [
      { url: "/api/og?lang=en", width: 1200, height: 630, alt: "IPO vs. M&A Exit — Deal Story" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og?lang=en"],
  },
};

export default function IpoVsMaExitPageEn() {
  return <IpoVsMaExitClientEn />;
}
