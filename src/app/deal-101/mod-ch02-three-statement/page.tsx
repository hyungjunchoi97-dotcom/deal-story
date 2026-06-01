import type { Metadata } from "next";
import MaMod02Client from "./MaMod02Client";

export const metadata: Metadata = {
  title: "Modelling Ch.2 — 3-Statement Model 연결 mechanics | Deal Story",
  description:
    "IS · BS · CFS가 어떤 line으로 연결되는지 6개 핵심 link, BS가 안 맞을 때 5가지 디버깅 원인, Interest × Debt × Cash circular reference를 iterative calculation으로 푸는 방법.",
  keywords: ["Modelling", "3-Statement Model", "Income Statement", "Balance Sheet", "Cash Flow Statement", "Circular Reference", "Iterative Calculation"],
  alternates: {
    canonical: "/deal-101/mod-ch02-three-statement",
    languages: {
      ko: "/deal-101/mod-ch02-three-statement",
      en: "/en/deal-101/mod-ch02-three-statement",
      "x-default": "/deal-101/mod-ch02-three-statement",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    title: "Modelling Ch.2 — 3-Statement Model 연결 mechanics",
    description: "6 link · BS 디버깅 5원인 · circular reference · 통합 mini-sheet",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() {
  return <MaMod02Client lang="ko" />;
}
