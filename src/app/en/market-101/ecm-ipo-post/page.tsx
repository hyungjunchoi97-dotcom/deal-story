import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import EcmIpoPostClient from "@/app/market-101/ecm-ipo-post/EcmIpoPostClient";

export const metadata: Metadata = {
  title: "ECM Ch.6 — Post-IPO: Lock-up, Overhang, and Why the Real Story Starts After Listing | Market 101 | Deal Story",
  description:
    "Lock-up overhang: D+90 (anchor release), D+180 (PE + founder — maximum supply bomb), D+365 (stock options). LG Energy Solution (success), WeWork withdrawal→bankruptcy, Kakao Bank -70%, Rivian -80%, DiDi app deleted 48 hours after listing — five failure types dissected.",
  alternates: {
    canonical: "/en/market-101/ecm-ipo-post",
    languages: {
      ko: "/market-101/ecm-ipo-post",
      en: "/en/market-101/ecm-ipo-post",
      "x-default": "/market-101/ecm-ipo-post",
    },
  },
};

export default function EcmIpoPostPageEn() {
  const concept = getMarket101ConceptBySlug("ecm-ipo-post");
  if (!concept) notFound();
  return <EcmIpoPostClient concept={concept} lang="en" />;
}
