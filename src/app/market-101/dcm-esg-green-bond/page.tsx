import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import DcmEsgGreenBondClient from "./DcmEsgGreenBondClient";

export const metadata: Metadata = {
  title: "DCM Ch.10 — ESG·녹색채권 실무: GBP·Greenium·SLB vs 그린본드 | Market 101 | Deal Story",
  description:
    "그린본드 원칙(GBP) 4기둥, 5가지 ESG 채권 유형 비교(그린·소셜·서스테이너빌리티·SLB·트랜지션), Greenium 실증 데이터, SPO 제공자, 그린워싱 식별법. 한국 기획재정부 USD 500mn 그린 소버린 케이스.",
  alternates: {
    canonical: "/market-101/dcm-esg-green-bond",
    languages: {
      ko: "/market-101/dcm-esg-green-bond",
      en: "/en/market-101/dcm-esg-green-bond",
      "x-default": "/market-101/dcm-esg-green-bond",
    },
  },
};

export default function DcmEsgGreenBondPage() {
  const concept = getMarket101ConceptBySlug("dcm-esg-green-bond");
  if (!concept) notFound();
  return <DcmEsgGreenBondClient concept={concept} lang="ko" />;
}
