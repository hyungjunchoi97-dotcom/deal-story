import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import LboReturnsClient from "./LboReturnsClient";

export const metadata: Metadata = {
  title: "LBO 리턴 분석 — MOIC·IRR·가치창출 드라이버 | Market 101 | Deal Story",
  description:
    "MOIC vs IRR 충돌 시나리오, 가치창출 3대 드라이버(EBITDA 성장·Multiple Expansion·Deleveraging), Vintage Year 효과, Hilton·RJR·ADT 실제 수익 사례 분석. PE 바이아웃 리턴 분석의 핵심 수학.",
  keywords: [
    "MOIC IRR", "LBO 리턴", "Multiple Expansion", "Deleveraging", "PE 수익",
    "Vintage Year", "가치창출 드라이버", "Dividend Recap", "PE 바이아웃 수익률",
  ],
  alternates: {
    canonical: "/market-101/lbo-returns",
    languages: {
      ko: "/market-101/lbo-returns",
      en: "/en/market-101/lbo-returns",
      "x-default": "/market-101/lbo-returns",
    },
  },
};

export default function LboReturnsPage() {
  const concept = getMarket101ConceptBySlug("lbo-returns");
  if (!concept) notFound();
  return <LboReturnsClient concept={concept} lang="ko" />;
}
