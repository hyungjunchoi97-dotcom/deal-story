/**
 * Deal 101 / MAC Clause (EN) — Server Component
 */
import type { Metadata } from "next";
import MacClauseClientEn from "./MacClauseClientEn";

export const metadata: Metadata = {
  title: "MAC Clause — The Escape Hatch That Rarely Opens | Deal 101 | Deal Story",
  description:
    "What qualifies as a Material Adverse Change, why courts set an extremely high bar, and two contrasting cases: Musk/Twitter (MAC failed) vs. Akorn/Fresenius (MAC succeeded).",
  keywords: [
    "MAC clause",
    "material adverse change",
    "MAE",
    "SPA termination",
    "deal walkaway",
    "Delaware court",
    "Akorn Fresenius",
  ],
  alternates: {
    canonical: "/en/deal-101/mac-clause",
    languages: {
      ko: "/deal-101/mac-clause",
      en: "/en/deal-101/mac-clause",
      "x-default": "/deal-101/mac-clause",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    images: [
      { url: "/api/og?lang=en", width: 1200, height: 630, alt: "MAC Clause — The Escape Hatch That Rarely Opens — Deal Story" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og?lang=en"],
  },
};

export default function MacClausePageEn() {
  return <MacClauseClientEn />;
}
