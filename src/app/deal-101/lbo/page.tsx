/**
 * Deal 101 / LBO (차입인수) 완전 정리 (KO) — Server Component
 */
import type { Metadata } from "next";
import LboClient from "./LboClient";

export const metadata: Metadata = {
  title: "LBO (차입인수) 완전 정리 — Deal 101 | Deal Story",
  description:
    "레버리지 바이아웃의 수익 구조, 적합 타겟 조건, KKR×RJR Nabisco·Blackstone×Hilton·MBK×홈플러스 케이스 스터디.",
  keywords: ["LBO", "차입인수", "레버리지 바이아웃", "PE", "사모펀드", "인수금융", "MBO", "KKR", "Blackstone"],
  alternates: {
    canonical: "/deal-101/lbo",
    languages: {
      ko: "/deal-101/lbo",
      en: "/en/deal-101/lbo",
      "x-default": "/deal-101/lbo",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    images: [{ url: "/api/og", width: 1200, height: 630, alt: "LBO 완전 정리" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og"],
  },
};

export default function LboPage() {
  return <LboClient />;
}
