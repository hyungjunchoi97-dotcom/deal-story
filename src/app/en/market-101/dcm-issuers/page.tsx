import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import DcmIssuersClient from "@/app/market-101/dcm-issuers/DcmIssuersClient";

export const metadata: Metadata = {
  title: "DCM Ch.1 — Issuer Spectrum: From SSA to Distressed | Market 101 | Deal Story",
  description:
    "Full dissection of DCM issuers from SSA (sovereigns, supranationals, agencies) to speculative-grade and distressed borrowers — credit criteria, deal terms, and what bankers actually check.",
  alternates: {
    canonical: "/en/market-101/dcm-issuers",
    languages: {
      ko: "/market-101/dcm-issuers",
      en: "/en/market-101/dcm-issuers",
      "x-default": "/market-101/dcm-issuers",
    },
  },
};

export default function DcmIssuersPageEn() {
  const concept = getMarket101ConceptBySlug("dcm-issuers");
  if (!concept) notFound();
  return <DcmIssuersClient concept={concept} lang="en" />;
}
