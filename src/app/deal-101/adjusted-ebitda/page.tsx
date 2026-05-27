/**
 * Deal 101 / Adjusted EBITDA (KO) — Server Component
 * Computes relatedDeals at build time, passes to Client Component
 */
import type { Metadata } from "next";
import { ALL_DEALS } from "@/data/deals";
import AdjustedEbitdaClient from "./AdjustedEbitdaClient";

export const metadata: Metadata = {
  title: "Adjusted EBITDA — 조정의 전쟁 | Deal 101 | Deal Story",
  description:
    "EV = Multiple × EBITDA — EBITDA를 조금만 조정해도 매각가에 곱셈으로 증폭된다. 1회성 판정 기준, 이해관계자 충돌, WeWork·Valeant·홈플러스 케이스 스터디까지.",
  alternates: {
    canonical: "/deal-101/adjusted-ebitda",
    languages: {
      ko: "/deal-101/adjusted-ebitda",
      en: "/en/deal-101/adjusted-ebitda",
      "x-default": "/deal-101/adjusted-ebitda",
    },
  },
};

const CONCEPT_SLUG = "/deal-101/adjusted-ebitda";

export default function AdjustedEbitdaPage() {
  const relatedDeals = ALL_DEALS
    .filter((deal) => deal.concepts?.some((c) => c.href === CONCEPT_SLUG))
    .map((deal) => ({
      slug: deal.slug,
      title: deal.title,
      category: deal.category,
      acquirer: deal.acquirer.label,
      target: deal.target.label,
      dealValueDisplay: deal.dealSummary.dealValueDisplay,
      conceptDescription:
        deal.concepts.find((c) => c.href === CONCEPT_SLUG)?.description ?? "",
    }));

  return <AdjustedEbitdaClient relatedDeals={relatedDeals} />;
}
