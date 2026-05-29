import type { Metadata } from "next";
import MaCh06ClosingCaseClient from "./MaCh06ClosingCaseClient";

export const metadata: Metadata = {
  title: "M&A Ch.6 — 가격 협상 + 클로징 막판 (Twitter × Musk + Adobe × Figma) | Deal Story",
  description:
    "사인하면 끝이 아니다. SPA 4 조항이 가격을 끝까지 흔든다. Twitter × Musk (2022) — Specific performance가 $44B 사수. Adobe × Figma (2023) — Regulatory가 deal을 깨고 $1B break fee. M&A 시리즈 마무리.",
  keywords: ["SPA", "Specific Performance", "MAC clause", "NWC adjustment", "Break fee", "Twitter Musk", "Adobe Figma", "Regulatory", "EU Commission", "CMA"],
  alternates: {
    canonical: "/deal-101/ma-ch06-closing-case",
    languages: {
      ko: "/deal-101/ma-ch06-closing-case",
      en: "/en/deal-101/ma-ch06-closing-case",
      "x-default": "/deal-101/ma-ch06-closing-case",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    title: "M&A Ch.6 — 가격 협상 + 클로징 막판",
    description: "Twitter SPA specific performance + Adobe×Figma regulatory 패배",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() {
  return <MaCh06ClosingCaseClient lang="ko" />;
}
