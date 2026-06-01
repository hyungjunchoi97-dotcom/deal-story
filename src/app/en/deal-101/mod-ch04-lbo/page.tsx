import type { Metadata } from "next";
import MaMod04Client from "@/app/deal-101/mod-ch04-lbo/MaMod04Client";

export const metadata: Metadata = {
  title: "Modelling Ch.4 — LBO Model: Sources & Uses, Debt Schedule, Returns | Deal Story",
  description:
    "Sources = Uses, the debt schedule with cash sweep, the returns waterfall (preferred → catch-up → 80/20), and back-solving the '20% IRR max bid' with Goal Seek.",
  keywords: ["Modelling", "LBO Model", "Sources and Uses", "Debt Schedule", "Cash Sweep", "Returns Waterfall", "IRR", "Goal Seek"],
  alternates: {
    canonical: "/en/deal-101/mod-ch04-lbo",
    languages: {
      ko: "/deal-101/mod-ch04-lbo",
      en: "/en/deal-101/mod-ch04-lbo",
      "x-default": "/deal-101/mod-ch04-lbo",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    title: "Modelling Ch.4 — LBO Model",
    description: "Sources & Uses, debt schedule, returns waterfall, IRR back-solver",
    images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() {
  return <MaMod04Client lang="en" />;
}
