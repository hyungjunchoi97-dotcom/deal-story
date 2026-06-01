import type { Metadata } from "next";
import MaMod05Client from "./MaMod05Client";

export const metadata: Metadata = {
  title: "Modelling Ch.5 — Operating Model: Driver-based Forecasting | Deal Story",
  description:
    "Top-down vs bottom-up, 산업별 driver (SaaS · Retail · Manufacturing · Hospitality · Services), SaaS cohort analysis로 NRR retention curve, Scenario Manager로 Bear/Base/Bull toggle.",
  keywords: ["Modelling", "Operating Model", "Driver-based Forecasting", "SaaS Cohort", "NRR", "Scenario Manager", "Bottom-up"],
  alternates: {
    canonical: "/deal-101/mod-ch05-operating",
    languages: {
      ko: "/deal-101/mod-ch05-operating",
      en: "/en/deal-101/mod-ch05-operating",
      "x-default": "/deal-101/mod-ch05-operating",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    title: "Modelling Ch.5 — Operating Model: Driver-based Forecasting",
    description: "Top-down vs bottom-up · 산업별 driver · SaaS cohort · Scenario Manager",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() {
  return <MaMod05Client lang="ko" />;
}
