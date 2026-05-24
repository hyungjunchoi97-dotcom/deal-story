/**
 * Deal 101 / EV/EBITDA Multiple (EN) — Server Component
 * Computes relatedDeals at build time, passes to Client Component
 */
import type { Metadata } from "next";
import { ALL_DEALS_EN } from "@/data/deals/en";
import EvEbitdaClientEn from "./EvEbitdaClientEn";

export const metadata: Metadata = {
  title: "EV/EBITDA Multiple Explained — Deal 101 | Deal Story",
  description:
    "The go-to valuation metric in M&A. From the formula and industry benchmarks to real deal applications — everything you need to understand EV/EBITDA in one page.",
  alternates: {
    canonical: "/en/deal-101/ev-ebitda",
    languages: {
      ko: "/deal-101/ev-ebitda",
      en: "/en/deal-101/ev-ebitda",
      "x-default": "/deal-101/ev-ebitda",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    images: [
      { url: "/api/og?lang=en", width: 1200, height: 630, alt: "EV/EBITDA Multiple Explained — Deal Story" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og?lang=en"],
  },
};

const CONCEPT_SLUG = "/deal-101/ev-ebitda";

export default function EvEbitdaPageEn() {
  const relatedDeals = ALL_DEALS_EN
    .filter((deal) => deal.concepts?.some((c) => c.href === CONCEPT_SLUG))
    .map((deal) => ({
      slug: deal.slug,
      title: deal.title,
      category: deal.category,
      acquirer: deal.acquirer,
      target: deal.target,
      dealValueDisplay: deal.dealSummary.dealValueDisplay,
      conceptDescription:
        deal.concepts.find((c) => c.href === CONCEPT_SLUG)?.description ?? "",
    }));

  return <EvEbitdaClientEn relatedDeals={relatedDeals} />;
}
