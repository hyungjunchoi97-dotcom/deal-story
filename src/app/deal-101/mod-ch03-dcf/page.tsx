import type { Metadata } from "next";
import MaMod03Client from "./MaMod03Client";

export const metadata: Metadata = {
  title: "Modelling Ch.3 — DCF Model in Excel | Deal Story",
  description:
    "Valuation Ch.2의 DCF를 Excel sheet로. WACC sheet 한 페이지, FCF cell-by-cell build, Terminal Value 두 가지 방식 (Gordon vs Exit Multiple), Sensitivity Data Table.",
  keywords: ["Modelling", "DCF Model", "WACC", "FCF", "Terminal Value", "Gordon Growth", "Exit Multiple", "Sensitivity", "Data Table"],
  alternates: {
    canonical: "/deal-101/mod-ch03-dcf",
    languages: {
      ko: "/deal-101/mod-ch03-dcf",
      en: "/en/deal-101/mod-ch03-dcf",
      "x-default": "/deal-101/mod-ch03-dcf",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    title: "Modelling Ch.3 — DCF Model in Excel",
    description: "WACC sheet · FCF cell-by-cell · TV 두 방식 · Sensitivity Data Table",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() {
  return <MaMod03Client lang="ko" />;
}
