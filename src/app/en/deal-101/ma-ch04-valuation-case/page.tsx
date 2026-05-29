import type { Metadata } from "next";
import MaCh04ValuationCaseClient from "@/app/deal-101/ma-ch04-valuation-case/MaCh04ValuationCaseClient";

export const metadata: Metadata = {
  title: "M&A Ch.4 — Valuation: the Assumptions Game (Disney×Pixar + AOL×Time Warner) | Deal Story",
  description:
    "Valuation is about defensible assumptions and narrative, not model precision. Disney×Pixar (2006) — Iger justified $7.4B when DCF capped at $5B. AOL×Time Warner (2000) — what happens when assumptions break: $165B → $3B.",
  keywords: ["Valuation", "DCF", "Trading Comps", "Transaction Comps", "Strategic Premium", "Bob Iger", "Disney Pixar", "AOL Time Warner", "Revenue Projection"],
  alternates: {
    canonical: "/en/deal-101/ma-ch04-valuation-case",
    languages: {
      ko: "/deal-101/ma-ch04-valuation-case",
      en: "/en/deal-101/ma-ch04-valuation-case",
      "x-default": "/deal-101/ma-ch04-valuation-case",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    title: "M&A Ch.4 — Valuation: the Assumptions Game",
    description: "Disney×Pixar narrative valuation + AOL×Time Warner assumption collapse",
    images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() {
  return <MaCh04ValuationCaseClient lang="en" />;
}
