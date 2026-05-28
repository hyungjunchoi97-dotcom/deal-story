import type { Metadata } from "next";
import HcaLboClient from "./HcaLboClient";

export const metadata: Metadata = {
  title: "HCA 2006 LBO — CLO 투자자가 본 메가딜 | Deal Story",
  description:
    "$33B KKR+Bain+Merrill 컨소시엄의 HCA 인수 — 7층 자본구조, TLB $12B의 CLO 분산, 2008 위기 생존, 2011 IPO까지. LevFin 실무자 관점의 풀 케이스 스터디.",
  alternates: {
    canonical: "/deals/hca-lbo",
    languages: {
      ko: "/deals/hca-lbo",
      en: "/en/deals/hca-lbo",
      "x-default": "/deals/hca-lbo",
    },
  },
  openGraph: {
    title: "HCA 2006 LBO — CLO 투자자가 본 메가딜",
    description:
      "$33B KKR+Bain+Merrill의 HCA 인수 — 7-트랜치 자본구조, TLB $12B의 CLO 분산, 2008 위기 생존, 2011 IPO. LevFin 풀 케이스.",
    url: "/deals/hca-lbo",
    type: "article",
  },
};

export default function Page() {
  return <HcaLboClient lang="ko" />;
}
