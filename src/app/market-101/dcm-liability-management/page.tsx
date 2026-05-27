import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import DcmLiabilityManagementClient from "./DcmLiabilityManagementClient";

export const metadata: Metadata = {
  title: "DCM Ch.9 — 부채관리 실전: 텐더 오퍼·익스체인지 오퍼·콜 옵션 | Market 101 | Deal Story",
  description:
    "LME 실전 완전 가이드: 캐시 텐더 오퍼, 익스체인지 오퍼, Make-Whole Call, Par Call, Consent Solicitation. 만기 절벽 회피부터 금리 절감까지. KEXIM USD 500mn 케이스 스터디.",
  alternates: {
    canonical: "/market-101/dcm-liability-management",
    languages: {
      ko: "/market-101/dcm-liability-management",
      en: "/en/market-101/dcm-liability-management",
      "x-default": "/market-101/dcm-liability-management",
    },
  },
};

export default function DcmLiabilityManagementPage() {
  const concept = getMarket101ConceptBySlug("dcm-liability-management");
  if (!concept) notFound();
  return <DcmLiabilityManagementClient concept={concept} lang="ko" />;
}
