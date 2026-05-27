import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import StructuredCmbsClient from "./StructuredCmbsClient";

export const metadata: Metadata = {
  title: "CMBS 완전 해설 — 상업용 부동산 모기지가 채권이 되는 과정 & 오피스 CMBS 위기 | Market 101 | Deal Story",
  alternates: {
    canonical: "/market-101/structured-cmbs",
    languages: {
      ko: "/market-101/structured-cmbs",
      en: "/en/market-101/structured-cmbs",
      "x-default": "/market-101/structured-cmbs",
    },
  },
};

export default function Page() {
  const concept = getMarket101ConceptBySlug("structured-cmbs");
  if (!concept) notFound();
  return <StructuredCmbsClient concept={concept} lang="ko" />;
}
