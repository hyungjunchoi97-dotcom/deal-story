import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import EcmRightsIssueClient from "./EcmRightsIssueClient";

export const metadata: Metadata = {
  title: "유상증자 실무 A-Z — TERP부터 DART 제출까지 | Market 101 | Deal Story",
  alternates: {
    canonical: "/market-101/ecm-rights-issue",
    languages: { ko: "/market-101/ecm-rights-issue", en: "/en/market-101/ecm-rights-issue", "x-default": "/market-101/ecm-rights-issue" },
  },
};

export default function Page() {
  const concept = getMarket101ConceptBySlug("ecm-rights-issue");
  if (!concept) notFound();
  return <EcmRightsIssueClient concept={concept} lang="ko" />;
}
