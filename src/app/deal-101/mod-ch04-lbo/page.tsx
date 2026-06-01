import type { Metadata } from "next";
import MaMod04Client from "./MaMod04Client";

export const metadata: Metadata = {
  title: "Modelling Ch.4 — LBO Model: Sources & Uses, Debt Schedule, Returns | Deal Story",
  description:
    "Sources = Uses 원칙, debt schedule with cash sweep, returns waterfall (preferred → catch-up → 80/20), Goal Seek로 \"IRR 20% max bid\" 역산 mechanism.",
  keywords: ["Modelling", "LBO Model", "Sources and Uses", "Debt Schedule", "Cash Sweep", "Returns Waterfall", "IRR", "Goal Seek"],
  alternates: {
    canonical: "/deal-101/mod-ch04-lbo",
    languages: {
      ko: "/deal-101/mod-ch04-lbo",
      en: "/en/deal-101/mod-ch04-lbo",
      "x-default": "/deal-101/mod-ch04-lbo",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    title: "Modelling Ch.4 — LBO Model",
    description: "Sources & Uses · Debt Schedule · Returns Waterfall · IRR Back-solver",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() {
  return <MaMod04Client lang="ko" />;
}
