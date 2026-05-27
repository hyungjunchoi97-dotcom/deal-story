import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import EcmPitchbookClient from "./EcmPitchbookClient";

export const metadata: Metadata = {
  title: "ECM 피치북 해부학 — Equity Story부터 수수료 제안까지 | Market 101 | Deal Story",
  alternates: {
    canonical: "/market-101/ecm-pitchbook",
    languages: { ko: "/market-101/ecm-pitchbook", en: "/en/market-101/ecm-pitchbook", "x-default": "/market-101/ecm-pitchbook" },
  },
};

export default function Page() {
  const concept = getMarket101ConceptBySlug("ecm-pitchbook");
  if (!concept) notFound();
  return <EcmPitchbookClient concept={concept} lang="ko" />;
}
