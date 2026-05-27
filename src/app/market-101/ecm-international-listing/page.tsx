import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import EcmInternationalListingClient from "./EcmInternationalListingClient";

export const metadata: Metadata = {
  title: "ECM Ch.9 — 국제 상장: ADR·GDR·해외 직상장 | Market 101 | Deal Story",
  description:
    "한국 기업의 NYSE 상장, 외국 기업의 KRX 상장 구조 — ADR·GDR·이중상장·해외 직상장 메커니즘. 쿠팡이 왜 국내 대신 뉴욕을 택했나, 144A/Reg S 구조, 예탁증서 작동 방식, 해외 상장 비용·편익 분석.",
  alternates: {
    canonical: "/market-101/ecm-international-listing",
    languages: {
      ko: "/market-101/ecm-international-listing",
      en: "/en/market-101/ecm-international-listing",
      "x-default": "/market-101/ecm-international-listing",
    },
  },
};

export default function EcmInternationalListingPage() {
  const concept = getMarket101ConceptBySlug("ecm-international-listing");
  if (!concept) notFound();
  return <EcmInternationalListingClient concept={concept} lang="ko" />;
}
