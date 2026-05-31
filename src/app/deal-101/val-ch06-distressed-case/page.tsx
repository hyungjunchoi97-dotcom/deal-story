import type { Metadata } from "next";
import MaVal06Client from "./MaVal06Client";

export const metadata: Metadata = {
  title: "Valuation Ch.6 — Distressed 케이스: Caesars Chapter 11 | Deal Story",
  description:
    "Going-concern $11B vs Liquidation $7B. 채권자 등급별로 다른 valuation, examiner 보고서, 최종 회수율 — 파산 법정에서 가치가 어떻게 결정되는지.",
  keywords: ["Valuation", "Distressed", "Caesars", "Chapter 11", "Going Concern", "Liquidation", "Apollo TPG", "Examiner Report"],
  alternates: {
    canonical: "/deal-101/val-ch06-distressed-case",
    languages: {
      ko: "/deal-101/val-ch06-distressed-case",
      en: "/en/deal-101/val-ch06-distressed-case",
      "x-default": "/deal-101/val-ch06-distressed-case",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    title: "Valuation Ch.6 — Distressed 케이스: Caesars Chapter 11",
    description: "Going-concern $11B vs Liquidation $7B — 채권자 등급별로 다른 valuation이 만들어내는 협상",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() {
  return <MaVal06Client lang="ko" />;
}
