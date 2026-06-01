import type { Metadata } from "next";
import MaFdd06Client from "./MaFdd06Client";

export const metadata: Metadata = {
  title: "FDD Ch.6 — Case: Tesco £263M Accounting Scandal (2014) | Deal Story",
  description:
    "공급업체 rebate 인식을 미리 당기고 비용은 미루는 timing manipulation, 30년 long-tenure auditor PwC가 놓친 신호, SFO DPA £129M, FDD lens의 5가지 checkpoint.",
  keywords: ["FDD", "Tesco Scandal", "Supplier Rebate", "Commercial Income", "PwC", "Serious Fraud Office", "DPA"],
  alternates: {
    canonical: "/deal-101/fdd-ch06-tesco-case",
    languages: {
      ko: "/deal-101/fdd-ch06-tesco-case",
      en: "/en/deal-101/fdd-ch06-tesco-case",
      "x-default": "/deal-101/fdd-ch06-tesco-case",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    title: "FDD Ch.6 — Case: Tesco £263M Accounting Scandal (2014)",
    description: "Supplier rebate timing manipulation, audit 실패, FDD lens의 5가지 checkpoint",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() {
  return <MaFdd06Client lang="ko" />;
}
