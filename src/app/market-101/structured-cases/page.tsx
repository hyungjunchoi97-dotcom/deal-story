import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import StructuredCasesClient from "./StructuredCasesClient";

export const metadata: Metadata = {
  title: "구조화금융 케이스스터디 — 2008 RMBS 붕괴·CLO COVID 스트레스·오피스 CMBS 위기 | Market 101 | Deal Story",
  alternates: {
    canonical: "/market-101/structured-cases",
    languages: {
      ko: "/market-101/structured-cases",
      en: "/en/market-101/structured-cases",
      "x-default": "/market-101/structured-cases",
    },
  },
};

export default function Page() {
  const concept = getMarket101ConceptBySlug("structured-cases");
  if (!concept) notFound();
  return <StructuredCasesClient concept={concept} lang="ko" />;
}
