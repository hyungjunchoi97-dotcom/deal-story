import type { Metadata } from "next";
import MaVal05Client from "./MaVal05Client";

export const metadata: Metadata = {
  title: "Valuation Ch.5 — IPO 케이스: Facebook IPO (2012) | Deal Story",
  description:
    "Morgan Stanley가 공모가 $38에 도달한 과정, peer universe의 약점, NTM revenue의 mobile blind spot, 첫날 폭락이 valuation 작업의 어디에서 깨졌는지.",
  keywords: ["Valuation", "IPO", "Facebook IPO", "Morgan Stanley", "Trading Comps", "Peer Universe", "NTM Revenue", "Mobile Monetization"],
  alternates: {
    canonical: "/deal-101/val-ch05-ipo-case",
    languages: {
      ko: "/deal-101/val-ch05-ipo-case",
      en: "/en/deal-101/val-ch05-ipo-case",
      "x-default": "/deal-101/val-ch05-ipo-case",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    title: "Valuation Ch.5 — IPO 케이스: Facebook IPO (2012)",
    description: "공모가 $38 산정 과정, peer set의 약점, mobile blind spot — 첫날 폭락의 valuation 분해",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() {
  return <MaVal05Client lang="ko" />;
}
