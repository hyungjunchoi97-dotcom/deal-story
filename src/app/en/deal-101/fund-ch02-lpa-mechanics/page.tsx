import type { Metadata } from "next";
import MaFund02Client from "@/app/deal-101/fund-ch02-lpa-mechanics/MaFund02Client";

export const metadata: Metadata = {
  title: "Fund Ch.2 — LPA key terms and the mechanics of commitment | Deal Story",
  description:
    "The 19 terms actually negotiated inside a 100-page LPA, the capital-call J-curve, how the management fee structure shifts (2% → 1.5% → 1.0%), distribution waterfall (preferred → catch-up → 80/20), and the side letters only large LPs get.",
  keywords: ["Fund", "LPA", "Limited Partnership Agreement", "Capital Call", "Management Fee", "Carried Interest", "Hurdle Rate", "Distribution Waterfall", "Side Letter"],
  alternates: {
    canonical: "/en/deal-101/fund-ch02-lpa-mechanics",
    languages: {
      ko: "/deal-101/fund-ch02-lpa-mechanics",
      en: "/en/deal-101/fund-ch02-lpa-mechanics",
      "x-default": "/deal-101/fund-ch02-lpa-mechanics",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    title: "Fund Ch.2 — LPA key terms and the mechanics of commitment",
    description: "19 key terms · J-curve · management fee structure · waterfall · side letters",
    images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() {
  return <MaFund02Client lang="en" />;
}
