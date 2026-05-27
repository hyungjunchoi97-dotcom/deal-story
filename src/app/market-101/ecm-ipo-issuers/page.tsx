import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import EcmIpoIssuersClient from "./EcmIpoIssuersClient";

export const metadata: Metadata = {
  title: "ECM Ch.1 — 발행사: 누가, 왜 IPO를 하는가 | Market 101 | Deal Story",
  description:
    "VC 백 스타트업·PE 엑싯·SOE 민영화·계열사 분리상장·성숙 성장기업 — 5가지 발행사 유형의 IPO 동기와 차이. IPO 타이밍 3요소, 18개월 체크리스트, Coupang·크래프톤·LG에너지솔루션 케이스.",
  alternates: {
    canonical: "/market-101/ecm-ipo-issuers",
    languages: {
      ko: "/market-101/ecm-ipo-issuers",
      en: "/en/market-101/ecm-ipo-issuers",
      "x-default": "/market-101/ecm-ipo-issuers",
    },
  },
};

export default function EcmIpoIssuersPage() {
  const concept = getMarket101ConceptBySlug("ecm-ipo-issuers");
  if (!concept) notFound();
  return <EcmIpoIssuersClient concept={concept} lang="ko" />;
}
