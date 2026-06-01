import type { Metadata } from "next";
import MaMod06Client from "./MaMod06Client";

export const metadata: Metadata = {
  title: "Modelling Ch.6 — Case: Microsoft × LinkedIn ($26.2B, 2016) model walkthrough | Deal Story",
  description:
    "Strategic acquisition model의 7개 sheet를 sheet-by-sheet로. LinkedIn 4-segment operating model, Synergy 4-year phase-in, Accretion/Dilution, Football Field로 $196 premium 정당화.",
  keywords: ["Modelling", "Microsoft LinkedIn", "Strategic Acquisition", "Synergy", "Accretion Dilution", "Football Field", "Pro Forma"],
  alternates: {
    canonical: "/deal-101/mod-ch06-msft-linkedin-case",
    languages: {
      ko: "/deal-101/mod-ch06-msft-linkedin-case",
      en: "/en/deal-101/mod-ch06-msft-linkedin-case",
      "x-default": "/deal-101/mod-ch06-msft-linkedin-case",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    title: "Modelling Ch.6 — Case: Microsoft × LinkedIn ($26.2B, 2016)",
    description: "Strategic acquisition model 7 sheets sheet-by-sheet · Synergy · A/D · Premium 정당화",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() {
  return <MaMod06Client lang="ko" />;
}
