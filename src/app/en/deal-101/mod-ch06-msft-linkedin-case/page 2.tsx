import type { Metadata } from "next";
import MaMod06Client from "@/app/deal-101/mod-ch06-msft-linkedin-case/MaMod06Client";

export const metadata: Metadata = {
  title: "Modelling Ch.6 — Case: Microsoft × LinkedIn ($26.2B, 2016) model walkthrough | Deal Story",
  description:
    "Walking seven sheets of a strategic-acquisition model. LinkedIn 4-segment operating model, 4-year synergy phase-in, accretion/dilution, and the football field justifying the $196 premium.",
  keywords: ["Modelling", "Microsoft LinkedIn", "Strategic Acquisition", "Synergy", "Accretion Dilution", "Football Field", "Pro Forma"],
  alternates: {
    canonical: "/en/deal-101/mod-ch06-msft-linkedin-case",
    languages: {
      ko: "/deal-101/mod-ch06-msft-linkedin-case",
      en: "/en/deal-101/mod-ch06-msft-linkedin-case",
      "x-default": "/deal-101/mod-ch06-msft-linkedin-case",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    title: "Modelling Ch.6 — Case: Microsoft × LinkedIn ($26.2B, 2016)",
    description: "Seven sheets, sheet by sheet · synergy · A/D · justifying the premium",
    images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() {
  return <MaMod06Client lang="en" />;
}
