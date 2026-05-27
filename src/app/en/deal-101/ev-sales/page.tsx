/**
 * Deal 101 / EV/Sales Multiple (EN) — Server Component
 */
import type { Metadata } from "next";
import EvSalesClientEn from "./EvSalesClientEn";

export const metadata: Metadata = {
  title: "EV/Sales Multiple Explained — Deal 101 | Deal Story",
  description:
    "How do you price a company with no profit? The EV/Sales multiple is the only common valuation language in high-growth M&A. Formula, five key drivers, sector benchmarks, and Salesforce×Slack & Adobe×Figma case studies.",
  alternates: {
    canonical: "/en/deal-101/ev-sales",
    languages: {
      ko: "/deal-101/ev-sales",
      en: "/en/deal-101/ev-sales",
      "x-default": "/deal-101/ev-sales",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    images: [{ url: "/api/og?lang=en", width: 1200, height: 630, alt: "EV/Sales Multiple Explained — Deal Story" }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() {
  return <EvSalesClientEn />;
}
