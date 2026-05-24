/**
 * Deal 101 / IPO vs M&A 엑싯 (KO) — Server Component
 */
import type { Metadata } from "next";
import IpoVsMaExitClient from "./IpoVsMaExitClient";

export const metadata: Metadata = {
  title: "IPO vs M&A 엑싯 — 투자자와 창업자의 회수 전략 | Deal 101 | Deal Story",
  description:
    "IPO와 M&A 매각의 장단점, PE 펀드 엑싯 옵션, Figma·Arm Holdings 케이스 스터디.",
  keywords: [
    "IPO", "M&A 엑싯", "기업공개", "PE 엑싯", "투자 회수", "세컨더리 바이아웃", "Figma IPO", "Arm IPO",
  ],
  alternates: {
    canonical: "/deal-101/ipo-vs-ma-exit",
    languages: {
      ko: "/deal-101/ipo-vs-ma-exit",
      en: "/en/deal-101/ipo-vs-ma-exit",
      "x-default": "/deal-101/ipo-vs-ma-exit",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    images: [
      { url: "/api/og", width: 1200, height: 630, alt: "IPO vs M&A 엑싯 — Deal Story" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og"],
  },
};

export default function IpoVsMaExitPage() {
  return <IpoVsMaExitClient />;
}
