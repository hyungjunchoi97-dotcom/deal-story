import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import EcmIpoIssuersClient from "@/app/market-101/ecm-ipo-issuers/EcmIpoIssuersClient";

export const metadata: Metadata = {
  title: "ECM Ch.1 — Issuers: Who IPOs and Why | Market 101 | Deal Story",
  description:
    "VC-backed startups, PE exits, SOE privatizations, conglomerate spin-offs, mature growth companies — five issuer types with completely different IPO motivations. Three timing factors, the 18-month checklist, and the Coupang, Krafton, LG Energy Solution cases.",
  alternates: {
    canonical: "/en/market-101/ecm-ipo-issuers",
    languages: {
      ko: "/market-101/ecm-ipo-issuers",
      en: "/en/market-101/ecm-ipo-issuers",
      "x-default": "/market-101/ecm-ipo-issuers",
    },
  },
};

export default function EcmIpoIssuersPageEn() {
  const concept = getMarket101ConceptBySlug("ecm-ipo-issuers");
  if (!concept) notFound();
  return <EcmIpoIssuersClient concept={concept} lang="en" />;
}
