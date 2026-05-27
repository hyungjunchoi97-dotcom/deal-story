import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import StructuredAbsClient from "./StructuredAbsClient";

export const metadata: Metadata = {
  title: "ABS (자산담보부증권) 완전 해설 — 자동차 할부·카드·학자금이 채권이 되는 과정 | Market 101 | Deal Story",
  alternates: {
    canonical: "/market-101/structured-abs",
    languages: {
      ko: "/market-101/structured-abs",
      en: "/en/market-101/structured-abs",
      "x-default": "/market-101/structured-abs",
    },
  },
};

export default function Page() {
  const concept = getMarket101ConceptBySlug("structured-abs");
  if (!concept) notFound();
  return <StructuredAbsClient concept={concept} lang="ko" />;
}
