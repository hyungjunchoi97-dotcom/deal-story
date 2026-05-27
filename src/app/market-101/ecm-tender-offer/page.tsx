import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import EcmTenderOfferClient from "./EcmTenderOfferClient";

export const metadata: Metadata = {
  title: "공개매수 실무 — Musk-Twitter·SM엔터 케이스 완전해설 | Market 101 | Deal Story",
  alternates: {
    canonical: "/market-101/ecm-tender-offer",
    languages: { ko: "/market-101/ecm-tender-offer", en: "/en/market-101/ecm-tender-offer", "x-default": "/market-101/ecm-tender-offer" },
  },
};

export default function Page() {
  const concept = getMarket101ConceptBySlug("ecm-tender-offer");
  if (!concept) notFound();
  return <EcmTenderOfferClient concept={concept} lang="ko" />;
}
