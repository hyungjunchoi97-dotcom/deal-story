import type { Metadata } from "next";
import MaFund01Client from "@/app/deal-101/fund-ch01-lp-overview/MaFund01Client";

export const metadata: Metadata = {
  title: "Fund Ch.1 — Who are LPs, and why do they commit to PE/VC | Deal Story",
  description:
    "Seven LP archetypes (pension, endowment, SWF, FoF, insurance, family office, HNW), the illiquidity premium thesis, allocation models (Yale vs CalPERS vs NPS), and the global top-LP catalog.",
  keywords: ["Fund", "LP", "Limited Partner", "Pension", "Endowment", "Sovereign Wealth Fund", "Yale Endowment Model", "Illiquidity Premium", "NPS"],
  alternates: {
    canonical: "/en/deal-101/fund-ch01-lp-overview",
    languages: {
      ko: "/deal-101/fund-ch01-lp-overview",
      en: "/en/deal-101/fund-ch01-lp-overview",
      "x-default": "/deal-101/fund-ch01-lp-overview",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    title: "Fund Ch.1 — Who are LPs, and why do they commit to PE/VC",
    description: "Seven LP archetypes · illiquidity premium · allocation models · global top LPs and NPS",
    images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() {
  return <MaFund01Client lang="en" />;
}
