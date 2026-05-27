import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import StructuredOverviewClient from "./StructuredOverviewClient";

export const metadata: Metadata = {
  title: "구조화금융 개요 — 증권화 기계 해부: SPV·워터폴·트랑쉐 | Market 101 | Deal Story",
  alternates: {
    canonical: "/market-101/structured-overview",
    languages: {
      ko: "/market-101/structured-overview",
      en: "/en/market-101/structured-overview",
      "x-default": "/market-101/structured-overview",
    },
  },
};

export default function Page() {
  const concept = getMarket101ConceptBySlug("structured-overview");
  if (!concept) notFound();
  return <StructuredOverviewClient concept={concept} lang="ko" />;
}
