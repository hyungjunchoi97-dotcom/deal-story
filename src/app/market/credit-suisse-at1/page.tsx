import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import CreditSuisseAT1Client from "./CreditSuisseAT1Client";

export const metadata: Metadata = {
  title: "크레디트 스위스 AT1 전액상각 (2023) — Market Story | Deal Story",
  description:
    "CHF 160억 AT1이 0이 됐다. 주주는 살았고 채권자가 먼저 죽은 자본구조 역전 사건. 계약서를 읽어야 하는 이유.",
  alternates: {
    canonical: "/market/credit-suisse-at1",
    languages: {
      ko: "/market/credit-suisse-at1",
      en: "/en/market/credit-suisse-at1",
      "x-default": "/market/credit-suisse-at1",
    },
  },
};

export default function CreditSuisseAT1Page() {
  const deal = getMarketDealBySlug("credit-suisse-at1");
  if (!deal) notFound();
  return <CreditSuisseAT1Client deal={deal} lang="ko" />;
}
