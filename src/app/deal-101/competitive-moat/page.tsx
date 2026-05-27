/**
 * Deal 101 / 경쟁 해자 (KO) — Server Component
 */
import type { Metadata } from "next";
import CompetitiveMoatClient from "./CompetitiveMoatClient";

export const metadata: Metadata = {
  title: "경쟁 해자 — M&A 밸류에이션 멀티플을 결정하는 핵심 | Deal Story",
  description:
    "버핏이 말하는 경쟁 해자 개념, 5가지 해자 유형(네트워크 효과·전환 비용·비용 우위·무형자산·효율적 규모), 해자 강도와 EV/EBITDA 배수의 관계, Danaher·LVMH 케이스 스터디.",
  keywords: [
    "경쟁 해자",
    "Competitive Moat",
    "네트워크 효과",
    "전환 비용",
    "무형자산",
    "Danaher",
    "LVMH",
    "EV/EBITDA",
    "워런 버핏",
  ],
  alternates: {
    canonical: "/deal-101/competitive-moat",
    languages: {
      ko: "/deal-101/competitive-moat",
      en: "/en/deal-101/competitive-moat",
      "x-default": "/deal-101/competitive-moat",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    images: [{ url: "/api/og", width: 1200, height: 630, alt: "Deal Story" }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() {
  return <CompetitiveMoatClient />;
}
