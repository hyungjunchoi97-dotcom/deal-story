/**
 * Deal 101 / LBO (Leveraged Buyout) Explained (EN) — Server Component
 */
import type { Metadata } from "next";
import LboClientEn from "./LboClientEn";

export const metadata: Metadata = {
  title: "LBO (Leveraged Buyout) Explained — Deal 101 | Deal Story",
  description:
    "How private equity uses leverage to amplify returns. The mechanics, target criteria, and three case studies: KKR×RJR Nabisco, Blackstone×Hilton, MBK×Homeplus.",
  keywords: ["LBO", "leveraged buyout", "private equity", "acquisition finance", "PE", "KKR", "Blackstone", "MBO"],
  alternates: {
    canonical: "/en/deal-101/lbo",
    languages: {
      ko: "/deal-101/lbo",
      en: "/en/deal-101/lbo",
      "x-default": "/deal-101/lbo",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    images: [{ url: "/api/og?lang=en", width: 1200, height: 630, alt: "LBO Explained" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og?lang=en"],
  },
};

export default function LboPageEn() {
  return <LboClientEn />;
}
