import type { Metadata } from "next";
import MaMod05Client from "@/app/deal-101/mod-ch05-operating/MaMod05Client";

export const metadata: Metadata = {
  title: "Modelling Ch.5 — Operating Model: Driver-based Forecasting | Deal Story",
  description:
    "Top-down vs bottom-up, industry drivers (SaaS, retail, manufacturing, hospitality, services), SaaS cohort analysis and NRR curves, and toggling Bear/Base/Bull via Scenario Manager.",
  keywords: ["Modelling", "Operating Model", "Driver-based Forecasting", "SaaS Cohort", "NRR", "Scenario Manager", "Bottom-up"],
  alternates: {
    canonical: "/en/deal-101/mod-ch05-operating",
    languages: {
      ko: "/deal-101/mod-ch05-operating",
      en: "/en/deal-101/mod-ch05-operating",
      "x-default": "/deal-101/mod-ch05-operating",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    title: "Modelling Ch.5 — Operating Model: Driver-based Forecasting",
    description: "Top-down vs bottom-up, industry drivers, SaaS cohort, Scenario Manager",
    images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() {
  return <MaMod05Client lang="en" />;
}
