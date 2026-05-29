/**
 * Ch.1 — Origination & Pitching (EN)
 */
import type { Metadata } from "next";
import MaCh01OriginationClient from "@/app/deal-101/ma-ch01-origination/MaCh01OriginationClient";

export const metadata: Metadata = {
  title: "M&A Ch.1 — Origination & Pitching | Deal Story",
  description:
    "How GS/MS/JPM M&A teams win mandates. Coverage matrix (Industry × Geography), pipeline funnel (Tapping → Mandate), the 36-page pitch book anatomy, bake-off decision criteria, and sell-side vs buy-side origination.",
  keywords: [
    "M&A origination", "Pitch book", "Bake-off", "Beauty contest", "Engagement letter",
    "Coverage model", "Tapping list", "BB MM Boutique", "Sector head MD",
  ],
  alternates: {
    canonical: "/en/deal-101/ma-ch01-origination",
    languages: {
      ko: "/deal-101/ma-ch01-origination",
      en: "/en/deal-101/ma-ch01-origination",
      "x-default": "/deal-101/ma-ch01-origination",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    title: "M&A Ch.1 — Origination & Pitching",
    description: "Coverage matrix · pipeline funnel · 36-page pitch book · bake-off decision matrix",
    images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() {
  return <MaCh01OriginationClient lang="en" />;
}
