import type { Metadata } from "next";
import MaVal02Client from "@/app/deal-101/val-ch02-dcf-practice/MaVal02Client";

export const metadata: Metadata = {
  title: "Valuation Ch.2 — DCF in practice, how it actually gets built | Deal Story",
  description:
    "WACC templates, revenue assumptions, NWC/CAPEX/D&A linkage, sensitivity, and bear/base/bull. The one-page structure behind a real IB DCF.",
  keywords: ["Valuation", "DCF", "WACC", "Terminal Value", "Sensitivity", "Bear Base Bull", "NWC", "CAPEX", "FCF"],
  alternates: {
    canonical: "/en/deal-101/val-ch02-dcf-practice",
    languages: {
      ko: "/deal-101/val-ch02-dcf-practice",
      en: "/en/deal-101/val-ch02-dcf-practice",
      "x-default": "/deal-101/val-ch02-dcf-practice",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    title: "Valuation Ch.2 — DCF in practice, how it actually gets built",
    description: "WACC, revenue assumptions, NWC/CAPEX linkage, sensitivity, bear/base/bull — the DCF one-pager",
    images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() {
  return <MaVal02Client lang="en" />;
}
