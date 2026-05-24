/**
 * Deal 101 / Reverse Morris Trust (EN) — Server Component
 */
import type { Metadata } from "next";
import ReverseMorrisTrustClientEn from "./ReverseMorrisTrustClientEn";

export const metadata: Metadata = {
  title: "Reverse Morris Trust — Divesting a Business Unit Tax-Free | Deal Story",
  description:
    "The advanced deal structure that combines a spin-off with a merger to avoid billions in capital gains tax. Step-by-step mechanics, the 50% ownership test, and case studies: AT&T×WarnerMedia and Abbott×AbbVie.",
  keywords: [
    "Reverse Morris Trust",
    "RMT",
    "tax-free divestiture",
    "spin-off merger",
    "Section 355",
    "Section 368",
    "AT&T WarnerMedia",
    "Abbott AbbVie",
    "IRS PLR",
    "50% ownership test",
  ],
  alternates: {
    canonical: "/en/deal-101/reverse-morris-trust",
    languages: {
      ko: "/deal-101/reverse-morris-trust",
      en: "/en/deal-101/reverse-morris-trust",
      "x-default": "/deal-101/reverse-morris-trust",
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
  return <ReverseMorrisTrustClientEn />;
}
