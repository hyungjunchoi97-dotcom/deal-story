import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import Cdo2008Client from "./Cdo2008Client";

export const metadata: Metadata = {
  title: "2008년 CDO 붕괴 — BBB-가 AAA가 된 수학의 실패 | Market 101 | Deal Story",
  description:
    "서브프라임 모기지 수백 개를 묶으면 AAA 채권이 된다는 수학적 가정이 어떻게 금융위기를 만들었는가. 트랜칭의 마법, 신용평가사의 실패, CDO 붕괴의 메커니즘을 해부합니다.",
  alternates: {
    canonical: "/market-101/structured-cdo-2008",
    languages: {
      ko: "/market-101/structured-cdo-2008",
      en: "/en/market-101/structured-cdo-2008",
      "x-default": "/market-101/structured-cdo-2008",
    },
  },
};

export default function Cdo2008Page() {
  const concept = getMarket101ConceptBySlug("structured-cdo-2008");
  if (!concept) notFound();
  return <Cdo2008Client concept={concept} lang="ko" />;
}
