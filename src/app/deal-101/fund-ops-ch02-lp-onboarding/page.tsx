import type { Metadata } from "next";
import MaFundOps02Client from "./MaFundOps02Client";

export const metadata: Metadata = {
  title: "Fund Ops Ch.2 — LP Onboarding & Capital Call: 돈이 들어오기까지의 실무 | Deal Story",
  description:
    "LP onboarding 12-16주 6단계 · KYC/AML 7-layer (UBO·PEP·OFAC·adverse media·source of funds·FATCA·entity mapping) · Subscription docs 9종 · Side letter MFN 8조항 · Capital call 10영업일 timeline · BEC fraud 3대 사례 (Norton Rose · Tiger Global · 2024 EU PE).",
  keywords: ["Fund Ops", "LP Onboarding", "KYC", "AML", "Capital Call", "Side Letter", "MFN", "BEC", "Wire Fraud", "Subscription Agreement"],
  alternates: {
    canonical: "/deal-101/fund-ops-ch02-lp-onboarding",
    languages: { ko: "/deal-101/fund-ops-ch02-lp-onboarding", en: "/en/deal-101/fund-ops-ch02-lp-onboarding", "x-default": "/deal-101/fund-ops-ch02-lp-onboarding" },
  },
  openGraph: { type: "article", siteName: "Deal Story", locale: "ko_KR", alternateLocale: ["en_US"], title: "Fund Ops Ch.2 — LP Onboarding & Capital Call", description: "6단계 onboarding · KYC 7-layer · Sub docs 9종 · Side letter MFN · Capital call 10일 · BEC fraud 3건", images: [{ url: "/api/og", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() { return <MaFundOps02Client lang="ko" />; }
