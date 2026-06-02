import type { Metadata } from "next";
import MaFund04Client from "@/app/deal-101/fund-ch04-investment-lifecycle/MaFund04Client";

export const metadata: Metadata = {
  title: "Fund Ch.4 — How the capital actually runs: sourcing to exit | Deal Story",
  description:
    "Deal sourcing funnel 50:1 (250→1), IC process and the 10-section memo, six DD workstreams over 12 weeks, 100-day plan + hold + five exit options, PE practitioner hierarchy (Associate → Partner) and comp structure.",
  keywords: ["Fund", "Investment Lifecycle", "Deal Sourcing", "IC Memo", "Due Diligence", "PE Hierarchy", "Carry", "100-Day Plan"],
  alternates: {
    canonical: "/en/deal-101/fund-ch04-investment-lifecycle",
    languages: {
      ko: "/deal-101/fund-ch04-investment-lifecycle",
      en: "/en/deal-101/fund-ch04-investment-lifecycle",
      "x-default": "/deal-101/fund-ch04-investment-lifecycle",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    title: "Fund Ch.4 — How the capital actually runs: sourcing to exit",
    description: "Deal funnel 50:1 · IC process · six DD workstreams · hold/exit · PE practitioner hierarchy",
    images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() {
  return <MaFund04Client lang="en" />;
}
