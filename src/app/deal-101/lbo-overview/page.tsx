import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import LboOverviewClient from "./LboOverviewClient";

export const metadata: Metadata = {
  title: "LBO의 본질 — 레버리지로 기업을 사는 수학 | 딜 101 | Deal Story",
  description:
    "LBO를 세 단어로: 빌려서 사고, 가치를 만들고, 팔아라. 인수 대금의 60–70%를 차입금으로 충당해 자기자본 수익률을 증폭시키는 구조, 7가지 LBO 타겟 기준, GP/LP Carry Waterfall, Blackstone/Hilton·TXU 케이스스터디.",
  keywords: [
    "LBO", "레버리지드바이아웃", "PE 바이아웃", "사모펀드", "GP LP", "Carried Interest",
    "Carry Waterfall", "IRR MOIC", "Blackstone Hilton", "TXU", "레버리지 수익률",
  ],
  alternates: {
    canonical: "/deal-101/lbo-overview",
    languages: {
      ko: "/deal-101/lbo-overview",
      en: "/en/deal-101/lbo-overview",
      "x-default": "/deal-101/lbo-overview",
    },
  },
};

export default function LboOverviewPage() {
  const concept = getMarket101ConceptBySlug("lbo-overview");
  if (!concept) notFound();
  return <LboOverviewClient concept={concept} lang="ko" />;
}
