/**
 * Deal 101 / 구독 경제 (KO) — Server Component
 */
import type { Metadata } from "next";
import SubscriptionEconomyClient from "./SubscriptionEconomyClient";

export const metadata: Metadata = {
  title: "구독 경제 — 반복 매출이 M&A 밸류에이션을 바꾸는 방법 | Deal Story",
  description:
    "구독 모델의 4가지 유형(SaaS·콘텐츠·이커머스·제품 구독), ARR·NRR·LTV/CAC가 기업가치에 미치는 영향, Adobe 구독 전환·Microsoft 365 케이스 스터디.",
  keywords: [
    "구독 경제",
    "SaaS 밸류에이션",
    "ARR",
    "NRR",
    "반복 매출",
    "Adobe Creative Cloud",
    "Microsoft 365",
    "구독 M&A",
  ],
  alternates: {
    canonical: "/deal-101/subscription-economy",
    languages: {
      ko: "/deal-101/subscription-economy",
      en: "/en/deal-101/subscription-economy",
      "x-default": "/deal-101/subscription-economy",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    images: [
      { url: "/api/og", width: 1200, height: 630, alt: "Deal Story" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og"],
  },
};

export default function Page() {
  return <SubscriptionEconomyClient />;
}
