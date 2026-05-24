/**
 * Deal 101 / Subscription Economy (EN) — Server Component
 */
import type { Metadata } from "next";
import SubscriptionEconomyClientEn from "./SubscriptionEconomyClientEn";

export const metadata: Metadata = {
  title: "Subscription Economy — How Recurring Revenue Rewrites M&A Valuation | Deal Story",
  description:
    "Four subscription model types (SaaS, content, e-commerce, product subscription), how ARR, NRR, and LTV/CAC drive enterprise value, and Adobe/Microsoft 365 case studies.",
  keywords: [
    "subscription economy",
    "SaaS valuation",
    "ARR",
    "NRR",
    "recurring revenue",
    "Adobe Creative Cloud",
    "Microsoft 365",
    "subscription M&A",
  ],
  alternates: {
    canonical: "/en/deal-101/subscription-economy",
    languages: {
      ko: "/deal-101/subscription-economy",
      en: "/en/deal-101/subscription-economy",
      "x-default": "/deal-101/subscription-economy",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    images: [
      { url: "/api/og?lang=en", width: 1200, height: 630, alt: "Deal Story" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og?lang=en"],
  },
};

export default function Page() {
  return <SubscriptionEconomyClientEn />;
}
