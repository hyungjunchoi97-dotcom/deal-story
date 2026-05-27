import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import EcmIpoPostClient from "./EcmIpoPostClient";

export const metadata: Metadata = {
  title: "ECM Ch.6 — 포스트-IPO: 락업·오버행·상장 이후가 진짜 시작 | Market 101 | Deal Story",
  description:
    "락업 만료 오버행: D+90일(앵커 해제)·D+180일(PE+창업자, 최대 물량 폭탄)·D+365일(스톡옵션). LG에너지솔루션(성공)·WeWork 철회→파산·카카오뱅크 -70%·Rivian -80%·DiDi 48시간 앱 삭제 — 5가지 실패 유형 해부.",
  alternates: {
    canonical: "/market-101/ecm-ipo-post",
    languages: {
      ko: "/market-101/ecm-ipo-post",
      en: "/en/market-101/ecm-ipo-post",
      "x-default": "/market-101/ecm-ipo-post",
    },
  },
};

export default function EcmIpoPostPage() {
  const concept = getMarket101ConceptBySlug("ecm-ipo-post");
  if (!concept) notFound();
  return <EcmIpoPostClient concept={concept} lang="ko" />;
}
