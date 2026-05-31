import type { Metadata } from "next";
import MaVal03Client from "./MaVal03Client";

export const metadata: Metadata = {
  title: "Valuation Ch.3 — Comps 실무 (Trading + Transaction) | Deal Story",
  description:
    "Capital IQ로 peer universe를 만드는 funnel, Trading vs Transaction의 control premium 차이, capital structure 조정으로 EV 통일하기. Comps 작업의 실제 흐름.",
  keywords: ["Valuation", "Comps", "Trading Comps", "Transaction Comps", "Capital IQ", "Peer Universe", "Control Premium", "EV/EBITDA", "NTM"],
  alternates: {
    canonical: "/deal-101/val-ch03-comps-practice",
    languages: {
      ko: "/deal-101/val-ch03-comps-practice",
      en: "/en/deal-101/val-ch03-comps-practice",
      "x-default": "/deal-101/val-ch03-comps-practice",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    title: "Valuation Ch.3 — Comps 실무 (Trading + Transaction)",
    description: "Peer universe funnel, control premium, capital structure 조정 — Comps 작업의 실제 흐름",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() {
  return <MaVal03Client lang="ko" />;
}
