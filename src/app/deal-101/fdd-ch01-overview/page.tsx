import type { Metadata } from "next";
import MaFdd01Client from "./MaFdd01Client";

export const metadata: Metadata = {
  title: "FDD Ch.1 — FDD가 SPA 가격에 어떻게 박히는가 | Deal Story",
  description:
    "Buy-side vs Sell-side(VDD) FDD 차이, Big 4 Transaction Services 표준 deliverable, FDD finding이 SPA의 어느 조항으로 흘러가는지, 60일 작업 흐름.",
  keywords: ["FDD", "Financial Due Diligence", "QoE", "Vendor Due Diligence", "VDD", "Big 4 Transaction Services", "SPA"],
  alternates: {
    canonical: "/deal-101/fdd-ch01-overview",
    languages: {
      ko: "/deal-101/fdd-ch01-overview",
      en: "/en/deal-101/fdd-ch01-overview",
      "x-default": "/deal-101/fdd-ch01-overview",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    title: "FDD Ch.1 — FDD가 SPA 가격에 어떻게 박히는가",
    description: "Buy-side vs VDD, Big 4 TS 표준 deliverable, SPA 매핑, 60일 작업 흐름",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() {
  return <MaFdd01Client lang="ko" />;
}
