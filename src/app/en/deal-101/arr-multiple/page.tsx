/**
 * Deal 101 / ARR Multiple (EN) — Server Component
 */
import type { Metadata } from "next";
import ArrMultipleClientEn from "./ArrMultipleClientEn";

export const metadata: Metadata = {
  title: "ARR Multiple Explained — SaaS M&A Valuation | Deal Story",
  description:
    "The ARR multiple is the core valuation language of SaaS M&A. NRR, Rule of 40, CAC Payback — five key drivers, the bubble-and-correction cycle, and Salesforce×MuleSoft & SAP×Qualtrics case studies.",
  alternates: {
    canonical: "/en/deal-101/arr-multiple",
    languages: {
      ko: "/deal-101/arr-multiple",
      en: "/en/deal-101/arr-multiple",
      "x-default": "/deal-101/arr-multiple",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    images: [{ url: "/api/og?lang=en", width: 1200, height: 630, alt: "ARR Multiple Explained — Deal Story" }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() {
  return <ArrMultipleClientEn />;
}
