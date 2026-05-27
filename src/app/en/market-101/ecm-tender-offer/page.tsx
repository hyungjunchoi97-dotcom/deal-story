import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import EcmTenderOfferClient from "@/app/market-101/ecm-tender-offer/EcmTenderOfferClient";

export const metadata: Metadata = {
  title: "Tender Offer Practice — Musk-Twitter & SM Entertainment Cases | Market 101 | Deal Story",
  alternates: {
    canonical: "/en/market-101/ecm-tender-offer",
    languages: { ko: "/market-101/ecm-tender-offer", en: "/en/market-101/ecm-tender-offer", "x-default": "/market-101/ecm-tender-offer" },
  },
};

export default function PageEn() {
  const concept = getMarket101ConceptBySlug("ecm-tender-offer");
  if (!concept) notFound();
  return <EcmTenderOfferClient concept={concept} lang="en" />;
}
