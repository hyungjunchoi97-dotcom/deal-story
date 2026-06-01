import type { Metadata } from "next";
import MaFdd05Client from "./MaFdd05Client";

export const metadata: Metadata = {
  title: "FDD Ch.5 — Case: Hertz 회계 분식 (2014-2015) | Deal Story",
  description:
    "PwC가 long-term auditor였는데 매년 놓친 vehicle depreciation 가정, $235M 누적 net income 과대계상, CEO 사임과 Carl Icahn의 활동주의, FDD lens에서 잡힐 수 있었던 5가지 신호.",
  keywords: ["FDD", "Hertz Restatement", "Vehicle Depreciation", "Accounting Scandal", "PwC", "Carl Icahn", "SEC Enforcement"],
  alternates: {
    canonical: "/deal-101/fdd-ch05-hertz-case",
    languages: {
      ko: "/deal-101/fdd-ch05-hertz-case",
      en: "/en/deal-101/fdd-ch05-hertz-case",
      "x-default": "/deal-101/fdd-ch05-hertz-case",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    title: "FDD Ch.5 — Case: Hertz 회계 분식 (2014-2015)",
    description: "$235M 재작성, vehicle depreciation 가정, audit 실패, FDD가 잡을 수 있었던 5가지 신호",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() {
  return <MaFdd05Client lang="ko" />;
}
