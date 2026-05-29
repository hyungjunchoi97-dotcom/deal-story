import type { Metadata } from "next";
import MaCh01OverviewClient from "@/app/deal-101/ma-ch01-overview/MaCh01OverviewClient";

export const metadata: Metadata = {
  title: "M&A Ch.1 — The Lifecycle (6-month journey) | Deal Story",
  description:
    "M&A is more linear than it looks. The 9-stage sell-side timeline (Teaser → Mandate → FDD/Valuation/IM → IOI → SPA → Closing), 5 parallel workstreams, and the 4 places where it actually gets hard.",
  keywords: ["M&A process", "M&A timeline", "Sell-side", "Buy-side", "Teaser", "CIM", "IOI", "SPA", "FDD", "Closing"],
  alternates: {
    canonical: "/en/deal-101/ma-ch01-overview",
    languages: {
      ko: "/deal-101/ma-ch01-overview",
      en: "/en/deal-101/ma-ch01-overview",
      "x-default": "/deal-101/ma-ch01-overview",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    title: "M&A Ch.1 — The Lifecycle (6-month journey)",
    description: "The 9-stage sell-side timeline + 5 parallel workstreams + the 4 places where it actually gets hard",
    images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() {
  return <MaCh01OverviewClient lang="en" />;
}
