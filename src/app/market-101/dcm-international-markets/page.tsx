import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import DcmInternationalMarketsClient from "./DcmInternationalMarketsClient";

export const metadata: Metadata = {
  title: "DCM Ch.4 — 국제채 지형도: Yankee·Eurobond·Samurai·Formosa·Arirang | Market 101 | Deal Story",
  description:
    "Yankee본드(USD 미국내 발행)부터 유로본드·사무라이·포르모사·아리랑까지 국제채 시장 전 지형도. 통화·규제·투자자베이스 차이와 뱅커가 어떤 시장을 골라 발행하는지 해부합니다.",
  alternates: {
    canonical: "/market-101/dcm-international-markets",
    languages: {
      ko: "/market-101/dcm-international-markets",
      en: "/en/market-101/dcm-international-markets",
      "x-default": "/market-101/dcm-international-markets",
    },
  },
};

export default function DcmInternationalMarketsPage() {
  const concept = getMarket101ConceptBySlug("dcm-international-markets");
  if (!concept) notFound();
  return <DcmInternationalMarketsClient concept={concept} lang="ko" />;
}
