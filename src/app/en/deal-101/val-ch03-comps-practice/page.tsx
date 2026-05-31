import type { Metadata } from "next";
import MaVal03Client from "@/app/deal-101/val-ch03-comps-practice/MaVal03Client";

export const metadata: Metadata = {
  title: "Valuation Ch.3 — Comps in practice (Trading + Transaction) | Deal Story",
  description:
    "Building a peer universe in Capital IQ, the control premium between trading and transaction comps, capital structure adjustments to put EV on equal footing.",
  keywords: ["Valuation", "Comps", "Trading Comps", "Transaction Comps", "Capital IQ", "Peer Universe", "Control Premium", "EV/EBITDA", "NTM"],
  alternates: {
    canonical: "/en/deal-101/val-ch03-comps-practice",
    languages: {
      ko: "/deal-101/val-ch03-comps-practice",
      en: "/en/deal-101/val-ch03-comps-practice",
      "x-default": "/deal-101/val-ch03-comps-practice",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    title: "Valuation Ch.3 — Comps in practice (Trading + Transaction)",
    description: "Peer universe funnel, control premium, capital structure adjustments — the actual workflow",
    images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() {
  return <MaVal03Client lang="en" />;
}
