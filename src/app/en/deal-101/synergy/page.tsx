/**
 * Deal 101 / Synergy (EN) — Server Component
 */
import type { Metadata } from "next";
import SynergyClientEn from "./SynergyClientEn";

export const metadata: Metadata = {
  title: "Synergy — The Logic Behind Every M&A Premium | Deal 101 | Deal Story",
  description:
    "Cost vs revenue synergy, why 70% of deals fail to deliver, and three case studies: Disney×Pixar (success), AOL×Time Warner (failure), Daimler×Chrysler (culture clash).",
  keywords: [
    "synergy",
    "M&A synergy",
    "cost synergy",
    "revenue synergy",
    "post-merger synergy",
    "AOL Time Warner",
    "Disney Pixar",
    "Daimler Chrysler",
  ],
  alternates: {
    canonical: "/en/deal-101/synergy",
    languages: {
      ko: "/deal-101/synergy",
      en: "/en/deal-101/synergy",
      "x-default": "/deal-101/synergy",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    images: [
      { url: "/api/og?lang=en", width: 1200, height: 630, alt: "Synergy — The Logic Behind Every M&A Premium | Deal Story" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og?lang=en"],
  },
};

export default function SynergyPageEn() {
  return <SynergyClientEn />;
}
