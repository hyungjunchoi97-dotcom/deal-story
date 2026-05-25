import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import CreditSuisseAT1Client from "@/app/market/credit-suisse-at1/CreditSuisseAT1Client";

export const metadata: Metadata = {
  title: "Credit Suisse AT1 Write-Down (2023) — Market Story | Deal Story",
  description:
    "$17B of AT1 written to zero. Equity survived while bondholders were wiped out. The definitive case study on why you must read the prospectus.",
  alternates: {
    canonical: "/en/market/credit-suisse-at1",
    languages: {
      ko: "/market/credit-suisse-at1",
      en: "/en/market/credit-suisse-at1",
      "x-default": "/market/credit-suisse-at1",
    },
  },
};

export default function CreditSuisseAT1PageEn() {
  const deal = getMarketDealBySlug("credit-suisse-at1");
  if (!deal) notFound();
  return <CreditSuisseAT1Client deal={deal} lang="en" />;
}
