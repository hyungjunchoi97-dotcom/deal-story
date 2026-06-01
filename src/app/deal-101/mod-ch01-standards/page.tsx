import type { Metadata } from "next";
import MaMod01Client from "./MaMod01Client";

export const metadata: Metadata = {
  title: "Modelling Ch.1 — 모델의 표준 규칙 (color · sign · sheet 구조 · audit) | Deal Story",
  description:
    "IB·PE가 공유하는 4가지 표준 규칙: color coding, sign convention, 10-sheet 표준 layout, audit checks. 좋은 model이 좋은 의사결정을 만든다.",
  keywords: ["Modelling", "Financial Model", "Color Coding", "Sign Convention", "Sheet Structure", "Audit Checks", "Excel"],
  alternates: {
    canonical: "/deal-101/mod-ch01-standards",
    languages: {
      ko: "/deal-101/mod-ch01-standards",
      en: "/en/deal-101/mod-ch01-standards",
      "x-default": "/deal-101/mod-ch01-standards",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    title: "Modelling Ch.1 — 모델의 표준 규칙",
    description: "Color coding · sign convention · sheet 구조 · audit checks — IB·PE 공유 알파벳",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() {
  return <MaMod01Client lang="ko" />;
}
