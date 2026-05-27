import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import EcmFollowonClient from "@/app/market-101/ecm-followon/EcmFollowonClient";

export const metadata: Metadata = {
  title: "ECM Ch.7 — Follow-on Offerings: ABB, Block Trades, and Rights Issues | Market 101 | Deal Story",
  description:
    "Post-listing capital raising: ABB (overnight, 3–5% discount), block trade (hours, 2–3%), rights issue (3–6 weeks, 30–40%), ATM (ongoing) — the speed-price-dilution trade-off. PE exit patterns, Samsung C&T block trade, global follow-on market structure.",
  alternates: {
    canonical: "/en/market-101/ecm-followon",
    languages: {
      ko: "/market-101/ecm-followon",
      en: "/en/market-101/ecm-followon",
      "x-default": "/market-101/ecm-followon",
    },
  },
};

export default function EcmFollowonPageEn() {
  const concept = getMarket101ConceptBySlug("ecm-followon");
  if (!concept) notFound();
  return <EcmFollowonClient concept={concept} lang="en" />;
}
