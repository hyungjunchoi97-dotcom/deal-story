/**
 * Deal 101 / SaaS Valuation (EN) — Server Component
 */
import type { Metadata } from "next";
import { SaasValuationClientEn } from "./SaasValuationClientEn";

export const metadata: Metadata = {
  title: "SaaS Valuation Explained — ARR, NRR & Rule of 40 | Deal Story",
  description:
    "Why EBITDA multiples don't work for SaaS. A complete guide to ARR multiples, NRR, Rule of 40, CAC Payback, and how deals like GitHub and Zendesk were priced.",
  keywords: [
    "SaaS valuation",
    "ARR multiple",
    "NRR",
    "Rule of 40",
    "CAC Payback",
    "SaaS M&A",
    "NTM Revenue",
  ],
  alternates: {
    canonical: "/en/deal-101/saas-valuation",
    languages: {
      ko: "/deal-101/saas-valuation",
      en: "/en/deal-101/saas-valuation",
      "x-default": "/deal-101/saas-valuation",
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
  return <SaasValuationClientEn />;
}
