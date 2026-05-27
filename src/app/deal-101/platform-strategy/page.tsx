/**
 * Deal 101 / 플랫폼 전략 (KO) — Server Component
 */
import type { Metadata } from "next";
import { PlatformStrategyClient } from "./PlatformStrategyClient";

export const metadata: Metadata = {
  title: "플랫폼 전략 — 네트워크 효과가 만드는 M&A 프리미엄 | Deal Story",
  description:
    "플랫폼 vs 파이프라인의 차이, 네트워크 효과 4가지 유형(직접·간접·데이터·공급자), 플랫폼을 인수하는 5가지 이유, Google×YouTube·Microsoft×LinkedIn/GitHub 케이스 스터디.",
  keywords: [
    "플랫폼 전략",
    "네트워크 효과",
    "플랫폼 M&A",
    "직접 네트워크 효과",
    "간접 네트워크 효과",
    "Google YouTube 인수",
    "Microsoft LinkedIn 인수",
    "플랫폼 비즈니스",
  ],
  alternates: {
    canonical: "/deal-101/platform-strategy",
    languages: {
      ko: "/deal-101/platform-strategy",
      en: "/en/deal-101/platform-strategy",
      "x-default": "/deal-101/platform-strategy",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    images: [{ url: "/api/og", width: 1200, height: 630, alt: "Deal Story" }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() {
  return <PlatformStrategyClient />;
}
