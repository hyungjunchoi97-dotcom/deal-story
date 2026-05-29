import type { Metadata } from "next";
import MaCh02StakeholdersClient from "./MaCh02StakeholdersClient";

export const metadata: Metadata = {
  title: "M&A Ch.2 — 이해관계자 도감 (누가 무엇을 하는가) | Deal Story",
  description:
    "한 딜에 평균 8개 firm이 굴러간다. IB Lead · 회계 FAS · 컨설팅 · 법무 · Lender + CEO·CFO·Board. 각자의 deliverable, 등장 시점, IB와의 인터페이스, 그리고 IB가 놓치면 어떻게 되는지.",
  keywords: ["M&A 이해관계자", "IB Lead", "Big 4 FAS", "MBB CDD", "법무법인 LDD", "M&A advisor"],
  alternates: {
    canonical: "/deal-101/ma-ch02-stakeholders",
    languages: {
      ko: "/deal-101/ma-ch02-stakeholders",
      en: "/en/deal-101/ma-ch02-stakeholders",
      "x-default": "/deal-101/ma-ch02-stakeholders",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    title: "M&A Ch.2 — 이해관계자 도감",
    description: "IB · 회계 FAS · 컨설팅 · 법무 · Lender + 클라이언트. 누가 무엇을 만들고 언제 등장하는가",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() {
  return <MaCh02StakeholdersClient lang="ko" />;
}
