import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import LboOverviewClient from "./LboOverviewClient";

export const metadata: Metadata = {
  title: "LBO의 본질 — 레버리지로 기업을 사는 수학 | Market 101 | Deal Story",
  description:
    "LBO(레버리지드 바이아웃) 완전 입문: 레버리지 수익 증폭 메커니즘, 7가지 LBO 타겟 기준, GP/LP 경제학·Carry Waterfall, Blackstone/Hilton·TXU 케이스스터디를 통해 PE 바이아웃의 본질을 해부합니다.",
  keywords: [
    "LBO", "레버리지드바이아웃", "PE 바이아웃", "사모펀드", "GP LP",
    "Carried Interest", "Carry Waterfall", "Blackstone Hilton", "TXU",
    "IRR MOIC", "바이아웃 펀드", "LBO 타겟 기준", "레버리지 수익률",
  ],
  openGraph: {
    title: "LBO의 본질 — 레버리지로 기업을 사는 수학 | Deal Story",
    description: "레버리지 수익 증폭, 7가지 타겟 기준, GP/LP 경제학 — PE 바이아웃 완전 입문.",
    type: "article",
    locale: "ko_KR",
  },
  alternates: {
    canonical: "/market-101/lbo-overview",
    languages: {
      ko: "/market-101/lbo-overview",
      en: "/en/market-101/lbo-overview",
      "x-default": "/market-101/lbo-overview",
    },
  },
};

export default function LboOverviewPage() {
  const concept = getMarket101ConceptBySlug("lbo-overview");
  if (!concept) notFound();
  return <LboOverviewClient concept={concept} lang="ko" />;
}
