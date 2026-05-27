import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import DcmBondProductsClient from "./DcmBondProductsClient";

export const metadata: Metadata = {
  title: "DCM Ch.3 — 채권 상품 스펙트럼: 선순위에서 CLO까지 | Market 101 | Deal Story",
  description:
    "시니어 무담보채·커버드본드·AT1·하이일드·PIK·CLO까지 DCM 상품 전체 지형도. 각 상품의 구조, 투자자 베이스, 발행 조건, 실전 케이스를 단계별로 정리했습니다.",
  alternates: {
    canonical: "/market-101/dcm-bond-products",
    languages: {
      ko: "/market-101/dcm-bond-products",
      en: "/en/market-101/dcm-bond-products",
      "x-default": "/market-101/dcm-bond-products",
    },
  },
};

export default function DcmBondProductsPage() {
  const concept = getMarket101ConceptBySlug("dcm-bond-products");
  if (!concept) notFound();
  return <DcmBondProductsClient concept={concept} lang="ko" />;
}
