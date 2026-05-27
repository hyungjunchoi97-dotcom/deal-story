import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import EcmRightsIssueClient from "@/app/market-101/ecm-rights-issue/EcmRightsIssueClient";

export const metadata: Metadata = {
  title: "Rights Issue Execution A-Z — From TERP to Final Filing | Market 101 | Deal Story",
  alternates: {
    canonical: "/en/market-101/ecm-rights-issue",
    languages: { ko: "/market-101/ecm-rights-issue", en: "/en/market-101/ecm-rights-issue", "x-default": "/market-101/ecm-rights-issue" },
  },
};

export default function PageEn() {
  const concept = getMarket101ConceptBySlug("ecm-rights-issue");
  if (!concept) notFound();
  return <EcmRightsIssueClient concept={concept} lang="en" />;
}
