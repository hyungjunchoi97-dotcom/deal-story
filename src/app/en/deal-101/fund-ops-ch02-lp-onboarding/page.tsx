import type { Metadata } from "next";
import MaFundOps02Client from "@/app/deal-101/fund-ops-ch02-lp-onboarding/MaFundOps02Client";

export const metadata: Metadata = {
  title: "Fund Ops Ch.2 — LP onboarding and capital calls: the mechanics of money coming in | Deal Story",
  description:
    "12-16 weeks of LP onboarding in six steps · seven-layer KYC/CDD (UBO, PEP, OFAC, adverse media, source of funds, FATCA, entity mapping) · nine subscription documents · eight side-letter MFN provisions · ten-business-day capital call timeline · three real BEC fraud cases (Norton Rose, Tiger Global, 2024 EU PE).",
  keywords: ["Fund Ops", "LP Onboarding", "KYC", "AML", "Capital Call", "Side Letter", "MFN", "BEC", "Wire Fraud", "Subscription Agreement"],
  alternates: {
    canonical: "/en/deal-101/fund-ops-ch02-lp-onboarding",
    languages: { ko: "/deal-101/fund-ops-ch02-lp-onboarding", en: "/en/deal-101/fund-ops-ch02-lp-onboarding", "x-default": "/deal-101/fund-ops-ch02-lp-onboarding" },
  },
  openGraph: { type: "article", siteName: "Deal Story", locale: "en_US", alternateLocale: ["ko_KR"], title: "Fund Ops Ch.2 — LP onboarding and capital calls", description: "Six-step onboarding · seven-layer KYC · nine sub docs · MFN matrix · ten-day capital call · three BEC cases", images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() { return <MaFundOps02Client lang="en" />; }
