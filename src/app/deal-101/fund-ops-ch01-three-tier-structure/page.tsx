import type { Metadata } from "next";
import MaFundOps01Client from "./MaFundOps01Client";

export const metadata: Metadata = {
  title: "Fund Ops Ch.1 — Front · Middle · Back Office: 펀드를 굴리는 3개의 시선 | Deal Story",
  description:
    "왜 PE/VC가 Front/Middle/Back Office로 나뉘는지 — Madoff·Abraaj·Lime이 가르쳐 준 비싼 교훈. Q1 2026 기준 mega-cap PE 헤드카운트 25/22/40 분포, Top 10 fund admin ($11.5T AUA), US vs Korea 5-level comp ladder, Big 4 / Fund Admin / IB Ops / Law firm 진입 루트 10가지.",
  keywords: ["Fund Ops", "Front Office", "Middle Office", "Back Office", "Fund Administration", "PE Operations", "Compliance", "Risk", "Valuation", "Treasury", "Apex Group", "SS&C", "Citco", "Alter Domus"],
  alternates: {
    canonical: "/deal-101/fund-ops-ch01-three-tier-structure",
    languages: {
      ko: "/deal-101/fund-ops-ch01-three-tier-structure",
      en: "/en/deal-101/fund-ops-ch01-three-tier-structure",
      "x-default": "/deal-101/fund-ops-ch01-three-tier-structure",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    title: "Fund Ops Ch.1 — Front · Middle · Back Office: 펀드를 굴리는 3개의 시선",
    description: "분리의 3원칙 · Q1 2026 fund admin Top 10 · US/KR comp ladder · 진입 루트와 커리어 경로",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() {
  return <MaFundOps01Client lang="ko" />;
}
