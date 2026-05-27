import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import StructuredCdoClient from "./StructuredCdoClient";

export const metadata: Metadata = {
  title: "CDO & 합성CDO — 2008 금융위기를 만든 구조화금융의 폭탄 | Market 101 | Deal Story",
  alternates: {
    canonical: "/market-101/structured-cdo",
    languages: {
      ko: "/market-101/structured-cdo",
      en: "/en/market-101/structured-cdo",
      "x-default": "/market-101/structured-cdo",
    },
  },
};

export default function Page() {
  const concept = getMarket101ConceptBySlug("structured-cdo");
  if (!concept) notFound();
  return <StructuredCdoClient concept={concept} lang="ko" />;
}
