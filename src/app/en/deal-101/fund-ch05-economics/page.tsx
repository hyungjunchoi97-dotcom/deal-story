import type { Metadata } from "next";
import MaFund05Client from "@/app/deal-101/fund-ch05-economics/MaFund05Client";

export const metadata: Metadata = {
  title: "Fund Ch.5 — Fund economics: the LP/GP math | Deal Story",
  description:
    "10-year cash flow on a $1B fund with the crossover point, deep dive on American vs European waterfall, how a $300M carry pool splits from founding partner to senior associate, DPI/RVPI/TVPI/IRR metrics, and top vs bottom quartile outcomes (~10× gap).",
  keywords: ["Fund", "Fund Economics", "Carry", "Waterfall", "American Waterfall", "European Waterfall", "DPI", "TVPI", "IRR", "MOIC", "Top Quartile"],
  alternates: {
    canonical: "/en/deal-101/fund-ch05-economics",
    languages: {
      ko: "/deal-101/fund-ch05-economics",
      en: "/en/deal-101/fund-ch05-economics",
      "x-default": "/deal-101/fund-ch05-economics",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    title: "Fund Ch.5 — Fund economics: the LP/GP math",
    description: "10-year cash flow · American vs European · carry split · four metrics · top vs bottom quartile",
    images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() {
  return <MaFund05Client lang="en" />;
}
