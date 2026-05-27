import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import DcmLiabilityManagementClient from "@/app/market-101/dcm-liability-management/DcmLiabilityManagementClient";

export const metadata: Metadata = {
  title: "DCM Ch.9 — Liability Management: Tender Offer, Exchange Offer & Call Options | Market 101 | Deal Story",
  description:
    "Complete LME practitioner guide: cash tender offer, exchange offer, make-whole call, par call, consent solicitation. Avoiding maturity walls to cutting funding costs. KEXIM USD 500mn case study.",
  alternates: {
    canonical: "/en/market-101/dcm-liability-management",
    languages: {
      ko: "/market-101/dcm-liability-management",
      en: "/en/market-101/dcm-liability-management",
      "x-default": "/market-101/dcm-liability-management",
    },
  },
};

export default function DcmLiabilityManagementPageEn() {
  const concept = getMarket101ConceptBySlug("dcm-liability-management");
  if (!concept) notFound();
  return <DcmLiabilityManagementClient concept={concept} lang="en" />;
}
