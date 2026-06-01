import type { Metadata } from "next";
import MaFdd02Client from "@/app/deal-101/fdd-ch02-qoe/MaFdd02Client";

export const metadata: Metadata = {
  title: "FDD Ch.2 — Quality of Earnings (QoE) in practice | Deal Story",
  description:
    "The one-page bridge from Reported to Adjusted EBITDA, how to judge what's truly one-time, run-rate adjustments, and six common seller tricks with the FDD counters.",
  keywords: ["FDD", "QoE", "Quality of Earnings", "Adjusted EBITDA", "EBITDA Bridge", "Add-back", "Run-rate"],
  alternates: {
    canonical: "/en/deal-101/fdd-ch02-qoe",
    languages: {
      ko: "/deal-101/fdd-ch02-qoe",
      en: "/en/deal-101/fdd-ch02-qoe",
      "x-default": "/deal-101/fdd-ch02-qoe",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    title: "FDD Ch.2 — Quality of Earnings (QoE) in practice",
    description: "The EBITDA bridge, one-time judgment, run-rate adjustments, seller tricks × FDD counters",
    images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() {
  return <MaFdd02Client lang="en" />;
}
