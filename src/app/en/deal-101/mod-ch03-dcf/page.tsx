import type { Metadata } from "next";
import MaMod03Client from "@/app/deal-101/mod-ch03-dcf/MaMod03Client";

export const metadata: Metadata = {
  title: "Modelling Ch.3 — DCF Model in Excel | Deal Story",
  description:
    "Valuation Ch.2's DCF turned into Excel sheets. WACC on one page, FCF built cell by cell, terminal value via Gordon vs exit multiple, sensitivity built with Data Tables.",
  keywords: ["Modelling", "DCF Model", "WACC", "FCF", "Terminal Value", "Gordon Growth", "Exit Multiple", "Sensitivity", "Data Table"],
  alternates: {
    canonical: "/en/deal-101/mod-ch03-dcf",
    languages: {
      ko: "/deal-101/mod-ch03-dcf",
      en: "/en/deal-101/mod-ch03-dcf",
      "x-default": "/deal-101/mod-ch03-dcf",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    title: "Modelling Ch.3 — DCF Model in Excel",
    description: "WACC sheet, FCF cell by cell, two TV methods, sensitivity via Data Table",
    images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() {
  return <MaMod03Client lang="en" />;
}
