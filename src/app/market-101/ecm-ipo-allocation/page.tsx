import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import EcmIpoAllocationClient from "./EcmIpoAllocationClient";

export const metadata: Metadata = {
  title: "IPO 배분 전략 — 코너스톤·그린슈·클로백 완전해설 | Market 101 | Deal Story",
  alternates: {
    canonical: "/market-101/ecm-ipo-allocation",
    languages: { ko: "/market-101/ecm-ipo-allocation", en: "/en/market-101/ecm-ipo-allocation", "x-default": "/market-101/ecm-ipo-allocation" },
  },
};

export default function Page() {
  const concept = getMarket101ConceptBySlug("ecm-ipo-allocation");
  if (!concept) notFound();
  return <EcmIpoAllocationClient concept={concept} lang="ko" />;
}
