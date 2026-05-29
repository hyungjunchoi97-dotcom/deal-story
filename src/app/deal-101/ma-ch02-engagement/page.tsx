import type { Metadata } from "next";
import MaCh02EngagementClient from "./MaCh02EngagementClient";

export const metadata: Metadata = {
  title: "M&A Ch.2 — Engagement Letter & Fee Economics | Deal Story",
  description:
    "BB·MM·Boutique의 fee 구조와 engagement letter 메커니즘. Retainer·Milestone·Success 3층 stack, 인터랙티브 fee calculator, Sell vs Buy vs Fairness economics 비교, Tail period 24개월의 의미, MNPI wall.",
  keywords: ["M&A fee", "Engagement letter", "Success fee", "Lehman formula", "Tail period", "MNPI wall", "Retainer", "Sell-side fee"],
  alternates: {
    canonical: "/deal-101/ma-ch02-engagement",
    languages: { ko: "/deal-101/ma-ch02-engagement", en: "/en/deal-101/ma-ch02-engagement", "x-default": "/deal-101/ma-ch02-engagement" },
  },
  openGraph: { type: "article", siteName: "Deal Story", locale: "ko_KR", alternateLocale: ["en_US"], title: "M&A Ch.2 — Engagement Letter & Fee Economics", images: [{ url: "/api/og", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() { return <MaCh02EngagementClient lang="ko" />; }
