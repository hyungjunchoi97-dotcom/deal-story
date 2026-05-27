import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import EcmIpoInvestorsClient from "@/app/market-101/ecm-ipo-investors/EcmIpoInvestorsClient";

export const metadata: Metadata = {
  title: "ECM Ch.2 — Investors: The Anchor–QIB–Retail Three-Layer Structure | Market 101 | Deal Story",
  description:
    "Anchors who commit before listing (Temasek, GIC, NPS), QIBs submitting book-building orders (asset managers, hedge funds), retail receiving 30% of the float — three layers with different roles, lock-ups, and allocation strategies. Four order types, High Quality Book criteria, NIC negotiation.",
  alternates: {
    canonical: "/en/market-101/ecm-ipo-investors",
    languages: {
      ko: "/market-101/ecm-ipo-investors",
      en: "/en/market-101/ecm-ipo-investors",
      "x-default": "/market-101/ecm-ipo-investors",
    },
  },
};

export default function EcmIpoInvestorsPageEn() {
  const concept = getMarket101ConceptBySlug("ecm-ipo-investors");
  if (!concept) notFound();
  return <EcmIpoInvestorsClient concept={concept} lang="en" />;
}
