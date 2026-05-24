/**
 * Deal 101 / Adjusted EBITDA (EN) — Server Component
 * Computes relatedDeals at build time, passes to Client Component
 */
import type { Metadata } from "next";
import { ALL_DEALS_EN } from "@/data/deals/en";
import AdjustedEbitdaClientEn from "./AdjustedEbitdaClientEn";

export const metadata: Metadata = {
  title: "Adjusted EBITDA Explained — Deal 101 | Deal Story",
  description:
    "EV = Multiple × EBITDA. A small EBITDA adjustment, multiplied by the deal multiple, creates massive swings in price. From the one-time test to stakeholder conflicts to WeWork and Valeant — everything you need to understand Adjusted EBITDA.",
  alternates: {
    canonical: "/en/deal-101/adjusted-ebitda",
    languages: {
      ko: "/deal-101/adjusted-ebitda",
      en: "/en/deal-101/adjusted-ebitda",
      "x-default": "/deal-101/adjusted-ebitda",
    },
  },
};

const CONCEPT_SLUG = "/deal-101/adjusted-ebitda";

export default function AdjustedEbitdaPageEn() {
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

  return <AdjustedEbitdaClientEn relatedDeals={relatedDeals} />;
}
