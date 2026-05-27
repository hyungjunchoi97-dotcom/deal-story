import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import StructuredCloClient from "./StructuredCloClient";

export const metadata: Metadata = {
  title: "CLO 완전 해설 — 레버리지론이 채권이 되는 과정 & 2024년 CLO 붐 | Market 101 | Deal Story",
  alternates: {
    canonical: "/market-101/structured-clo",
    languages: {
      ko: "/market-101/structured-clo",
      en: "/en/market-101/structured-clo",
      "x-default": "/market-101/structured-clo",
    },
  },
};

export default function Page() {
  const concept = getMarket101ConceptBySlug("structured-clo");
  if (!concept) notFound();
  return <StructuredCloClient concept={concept} lang="ko" />;
}
