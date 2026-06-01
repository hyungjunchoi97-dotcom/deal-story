import type { Metadata } from "next";
import MaFdd02Client from "./MaFdd02Client";

export const metadata: Metadata = {
  title: "FDD Ch.2 — Quality of Earnings (QoE) 실무 | Deal Story",
  description:
    "Reported EBITDA에서 Adjusted EBITDA로 가는 한 페이지 bridge, 1회성 add-back의 판단 기준, run-rate 조정, 매도인이 자주 쓰는 6가지 trick과 FDD의 counter.",
  keywords: ["FDD", "QoE", "Quality of Earnings", "Adjusted EBITDA", "EBITDA Bridge", "Add-back", "Run-rate"],
  alternates: {
    canonical: "/deal-101/fdd-ch02-qoe",
    languages: {
      ko: "/deal-101/fdd-ch02-qoe",
      en: "/en/deal-101/fdd-ch02-qoe",
      "x-default": "/deal-101/fdd-ch02-qoe",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    title: "FDD Ch.2 — Quality of Earnings (QoE) 실무",
    description: "EBITDA bridge, 1회성 판단 기준, run-rate 조정, 매도인 trick × FDD counter",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() {
  return <MaFdd02Client lang="ko" />;
}
