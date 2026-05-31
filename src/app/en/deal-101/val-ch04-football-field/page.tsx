import type { Metadata } from "next";
import MaVal04Client from "@/app/deal-101/val-ch04-football-field/MaVal04Client";

export const metadata: Metadata = {
  title: "Valuation Ch.4 — Football field synthesis and valuation by context | Deal Story",
  description:
    "Putting four or five methods on one page, the overlap zone and the narrative, how the lead method changes across IPO / M&A / LBO / restructuring, and the four-step range narrowing.",
  keywords: ["Valuation", "Football Field", "Overlap Zone", "Sell-side", "Buy-side", "Range Narrowing", "Context"],
  alternates: {
    canonical: "/en/deal-101/val-ch04-football-field",
    languages: {
      ko: "/deal-101/val-ch04-football-field",
      en: "/en/deal-101/val-ch04-football-field",
      "x-default": "/deal-101/val-ch04-football-field",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    title: "Valuation Ch.4 — Football field synthesis and valuation by context",
    description: "Overlap zone, sell-side vs buy-side anchors, context emphasis, four-step range narrowing",
    images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() {
  return <MaVal04Client lang="en" />;
}
