import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import EcmDualClassClient from "./EcmDualClassClient";

export const metadata: Metadata = {
  title: "차등의결권 구조 — Alphabet·Meta·한국 특례 완전해설 | Market 101 | Deal Story",
  alternates: {
    canonical: "/market-101/ecm-dual-class",
    languages: { ko: "/market-101/ecm-dual-class", en: "/en/market-101/ecm-dual-class", "x-default": "/market-101/ecm-dual-class" },
  },
};

export default function Page() {
  const concept = getMarket101ConceptBySlug("ecm-dual-class");
  if (!concept) notFound();
  return <EcmDualClassClient concept={concept} lang="ko" />;
}
