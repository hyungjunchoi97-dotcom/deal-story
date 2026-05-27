import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import StructuredWaterfallClient from "./StructuredWaterfallClient";

export const metadata: Metadata = {
  title: "트랑쉐 & 워터폴 — 구조화금융 신용 리스크 배분의 원리 | Market 101 | Deal Story",
  alternates: {
    canonical: "/market-101/structured-waterfall",
    languages: {
      ko: "/market-101/structured-waterfall",
      en: "/en/market-101/structured-waterfall",
      "x-default": "/market-101/structured-waterfall",
    },
  },
};

export default function Page() {
  const concept = getMarket101ConceptBySlug("structured-waterfall");
  if (!concept) notFound();
  return <StructuredWaterfallClient concept={concept} lang="ko" />;
}
