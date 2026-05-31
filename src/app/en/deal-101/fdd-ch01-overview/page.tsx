import type { Metadata } from "next";
import MaFdd01Client from "@/app/deal-101/fdd-ch01-overview/MaFdd01Client";

export const metadata: Metadata = {
  title: "FDD Ch.1 — How FDD findings land in the SPA price | Deal Story",
  description:
    "Buy-side vs sell-side (VDD) FDD, the Big 4 Transaction Services standard deliverables, how each finding maps into a specific SPA clause, and what 60 days of work actually looks like.",
  keywords: ["FDD", "Financial Due Diligence", "QoE", "Vendor Due Diligence", "VDD", "Big 4 Transaction Services", "SPA"],
  alternates: {
    canonical: "/en/deal-101/fdd-ch01-overview",
    languages: {
      ko: "/deal-101/fdd-ch01-overview",
      en: "/en/deal-101/fdd-ch01-overview",
      "x-default": "/deal-101/fdd-ch01-overview",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    title: "FDD Ch.1 — How FDD findings land in the SPA price",
    description: "Buy-side vs VDD, Big 4 TS deliverables, SPA mapping, 60-day workflow",
    images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() {
  return <MaFdd01Client lang="en" />;
}
