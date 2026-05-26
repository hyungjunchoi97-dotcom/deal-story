import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import DcmIssuersClient from "./DcmIssuersClient";

export const metadata: Metadata = {
  title: "DCM Ch.1 — 발행사 스펙트럼: SSA에서 Distressed까지 | Market 101 | Deal Story",
  description:
    "DCM 발행사를 SSA(국가·초국가기구)부터 투기등급 기업·Distressed 차주까지 전 스펙트럼 해부. 신용등급별 발행 조건, 대표 사례, 뱅커가 실제로 보는 포인트를 담았습니다.",
  alternates: {
    canonical: "/market-101/dcm-issuers",
    languages: {
      ko: "/market-101/dcm-issuers",
      en: "/en/market-101/dcm-issuers",
      "x-default": "/market-101/dcm-issuers",
    },
  },
};

export default function DcmIssuersPage() {
  const concept = getMarket101ConceptBySlug("dcm-issuers");
  if (!concept) notFound();
  return <DcmIssuersClient concept={concept} lang="ko" />;
}
