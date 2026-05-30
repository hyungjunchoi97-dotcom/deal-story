import type { Metadata } from "next";
import MaVal02Client from "./MaVal02Client";

export const metadata: Metadata = {
  title: "Valuation Ch.2 — DCF 실무, 실제로 어떻게 만들어지나 | Deal Story",
  description:
    "WACC 템플릿, Revenue 가정, NWC·CAPEX·D&A 연결, sensitivity와 Bear/Base/Bull. IB 실무 DCF 작업의 한 페이지 구조.",
  keywords: ["Valuation", "DCF", "WACC", "Terminal Value", "Sensitivity", "Bear Base Bull", "NWC", "CAPEX", "FCF"],
  alternates: {
    canonical: "/deal-101/val-ch02-dcf-practice",
    languages: {
      ko: "/deal-101/val-ch02-dcf-practice",
      en: "/en/deal-101/val-ch02-dcf-practice",
      "x-default": "/deal-101/val-ch02-dcf-practice",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    title: "Valuation Ch.2 — DCF 실무, 실제로 어떻게 만들어지나",
    description: "WACC, Revenue 가정, NWC·CAPEX 연결, sensitivity, Bear/Base/Bull — DCF 한 페이지 구조",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() {
  return <MaVal02Client lang="ko" />;
}
