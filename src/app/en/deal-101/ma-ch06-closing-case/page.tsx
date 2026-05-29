import type { Metadata } from "next";
import MaCh06ClosingCaseClient from "@/app/deal-101/ma-ch06-closing-case/MaCh06ClosingCaseClient";

export const metadata: Metadata = {
  title: "M&A Ch.6 — Final Negotiation + Closing (Twitter × Musk + Adobe × Figma) | Deal Story",
  description:
    "Signing isn't the end. Four SPA clauses keep moving price. Twitter × Musk (2022) — specific performance defended $44B. Adobe × Figma (2023) — regulators killed the deal with a $1B break fee. The M&A series wrap.",
  keywords: ["SPA", "Specific Performance", "MAC clause", "NWC adjustment", "Break fee", "Twitter Musk", "Adobe Figma", "Regulatory", "EU Commission", "CMA"],
  alternates: {
    canonical: "/en/deal-101/ma-ch06-closing-case",
    languages: {
      ko: "/deal-101/ma-ch06-closing-case",
      en: "/en/deal-101/ma-ch06-closing-case",
      "x-default": "/deal-101/ma-ch06-closing-case",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    title: "M&A Ch.6 — Final Negotiation + Closing",
    description: "Twitter SPA specific performance + Adobe×Figma regulatory defeat",
    images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() {
  return <MaCh06ClosingCaseClient lang="en" />;
}
