import type { Metadata } from "next";
import MaCh05OrchestrationCaseClient from "./MaCh05OrchestrationCaseClient";

export const metadata: Metadata = {
  title: "M&A Ch.5 — IB Lead 오케스트레이션 (Rohatyn × NYC + Bayer × Monsanto) | Deal Story",
  description:
    "IB의 진짜 일 = 일을 만드는 게 아니라 일하는 사람을 만드는 것. Felix Rohatyn × NYC bailout (1975) — orchestration의 archetype. Bayer × Monsanto (2016) — operational 성공 + 전략적 synthesis 실패 → $60B 가치 파괴.",
  keywords: ["IB Orchestration", "Felix Rohatyn", "Lazard", "NYC bailout", "MAC", "Bayer Monsanto", "Roundup", "Synthesis"],
  alternates: {
    canonical: "/deal-101/ma-ch05-orchestration-case",
    languages: {
      ko: "/deal-101/ma-ch05-orchestration-case",
      en: "/en/deal-101/ma-ch05-orchestration-case",
      "x-default": "/deal-101/ma-ch05-orchestration-case",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    title: "M&A Ch.5 — IB Lead 오케스트레이션",
    description: "Rohatyn × NYC bailout orchestration archetype + Bayer × Monsanto synthesis 실패",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() {
  return <MaCh05OrchestrationCaseClient lang="ko" />;
}
