/**
 * 딜 101 / EV/EBITDA 멀티플 — Server Component
 * relatedDeals를 빌드 타임 계산 후 Client로 전달
 */
import type { Metadata } from "next";
import { ALL_DEALS } from "@/data/deals";
import EvEbitdaClient from "./EvEbitdaClient";

export const metadata: Metadata = {
  title: "EV/EBITDA 멀티플 완전 정리 — 딜 101 | Deal Story",
  description:
    "M&A 밸류에이션의 핵심 지표 EV/EBITDA. 왜 P/E는 M&A에서 쓸 수 없는지, 분자 EV와 분모 EBITDA의 숨겨진 함정까지 — 실무 수준의 깊이로 정리했습니다.",
  alternates: {
    canonical: "/deal-101/ev-ebitda",
    languages: {
      ko: "/deal-101/ev-ebitda",
      en: "/en/deal-101/ev-ebitda",
      "x-default": "/deal-101/ev-ebitda",
    },
  },
};

const CONCEPT_SLUG = "/deal-101/ev-ebitda";

export default function EvEbitdaPage() {
  const relatedDeals = ALL_DEALS
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

  return <EvEbitdaClient relatedDeals={relatedDeals} />;
}
