import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import LevFinProcessClient from "./LevFinProcessClient";

export const metadata: Metadata = {
  title: "LevFin Ch.4 — 딜 프로세스: 만기에서 클로징까지 6-8주 실무 타임라인 완전 해부 | Market 101 | Deal Story",
  description:
    "LBO 파이낸싱 실전 6단계: Pre-mandate→Commitment Papers→Rating Agency→CIM→Book Build→Closing — Fee Letter·Market Flex 구조, 북빌드 10AM 업데이트, 배분 정치학, 수수료 구조, Hung Deal(Twitter $13bn) 사례.",
  alternates: {
    canonical: "/market-101/levfin-process",
    languages: {
      ko: "/market-101/levfin-process",
      en: "/en/market-101/levfin-process",
      "x-default": "/market-101/levfin-process",
    },
  },
};

export default function LevFinProcessPage() {
  const concept = getMarket101ConceptBySlug("levfin-process");
  if (!concept) notFound();
  return <LevFinProcessClient concept={concept} lang="ko" />;
}
