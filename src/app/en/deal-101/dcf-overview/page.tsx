import type { Metadata } from "next";
import DcfOverviewClient from "@/app/deal-101/dcf-overview/DcfOverviewClient";

export const metadata: Metadata = {
  title: "Valuation 101 Ch.0 — What Is DCF? | Deal Story",
  description:
    "The present value of future cash flows — the IB/PE valuation standard. FCF · WACC · Terminal Value, intrinsic vs relative, Microsoft × Activision $68.7B.",
  keywords: [
    "DCF", "Discounted Cash Flow", "Valuation", "FCF", "WACC",
    "Terminal Value", "Microsoft Activision", "Intrinsic Value", "Fairness Opinion",
  ],
  alternates: {
    canonical: "/en/deal-101/dcf-overview",
    languages: {
      ko: "/deal-101/dcf-overview",
      en: "/en/deal-101/dcf-overview",
      "x-default": "/deal-101/dcf-overview",
    },
  },
};

export default function DcfOverviewPageEn() {
  return <DcfOverviewClient lang="en" />;
}
