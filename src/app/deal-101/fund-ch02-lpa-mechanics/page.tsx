import type { Metadata } from "next";
import MaFund02Client from "./MaFund02Client";

export const metadata: Metadata = {
  title: "Fund Ch.2 — LPA 핵심 조항과 출자 메커니즘 | Deal Story",
  description:
    "LPA 100페이지 중 실제로 협상되는 19개 조항, Capital Call J-curve, Management Fee 구조 변화 (2%→1.5%→1.0%), Distribution Waterfall (Preferred → Catch-up → 80/20), 대형 LP 전용 Side Letter.",
  keywords: ["Fund", "LPA", "Limited Partnership Agreement", "Capital Call", "Management Fee", "Carried Interest", "Hurdle Rate", "Distribution Waterfall", "Side Letter"],
  alternates: {
    canonical: "/deal-101/fund-ch02-lpa-mechanics",
    languages: {
      ko: "/deal-101/fund-ch02-lpa-mechanics",
      en: "/en/deal-101/fund-ch02-lpa-mechanics",
      "x-default": "/deal-101/fund-ch02-lpa-mechanics",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    title: "Fund Ch.2 — LPA 핵심 조항과 출자 메커니즘",
    description: "19개 핵심 조항 · J-curve · Management Fee 구조 · Waterfall · Side Letter",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() {
  return <MaFund02Client lang="ko" />;
}
