import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import EcmIpoBookbuildingClient from "./EcmIpoBookbuildingClient";

export const metadata: Metadata = {
  title: "ECM Ch.5 — 북빌딩·프라이싱: 수요 곡선과 그린슈의 메커니즘 | Market 101 | Deal Story",
  description:
    "IPO 북빌딩은 가격 미확정 상태에서 수요를 모은다. 수요 곡선 '어디서 자르느냐' = 뱅커의 기술. 그린슈 3단계: 과배정→안정화→옵션 행사. 15–20% 첫날 팝이 이상적인 이유, 30% 팝이 오히려 실패인 이유, 한국 의무보유 확약 메커니즘.",
  alternates: {
    canonical: "/market-101/ecm-ipo-bookbuilding",
    languages: {
      ko: "/market-101/ecm-ipo-bookbuilding",
      en: "/en/market-101/ecm-ipo-bookbuilding",
      "x-default": "/market-101/ecm-ipo-bookbuilding",
    },
  },
};

export default function EcmIpoBookbuildingPage() {
  const concept = getMarket101ConceptBySlug("ecm-ipo-bookbuilding");
  if (!concept) notFound();
  return <EcmIpoBookbuildingClient concept={concept} lang="ko" />;
}
