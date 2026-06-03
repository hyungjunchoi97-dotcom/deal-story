import type { Metadata } from "next";
import MaVc08Client from "./MaVc08Client";

export const metadata: Metadata = {
  title: "VC Ch.8 — Post-investment + Portfolio Management: 15-25 portco 동시 관리 | Deal Story",
  description: "Founder Monthly Update 6 section · 심사역의 portfolio 한 주 (15% 시간) · Value-Add 7가지 (Hiring·BD·Follow-on·PR·Advisor·Strategic·Crisis) · Reserve allocation (Strong upsider→ Failing) · Portfolio Red flags 6가지 · Famous value-add (Stripe·Uber·Toss·Twitter).",
  keywords: ["VC Portfolio Management", "Monthly Update", "Board Management", "Value Add", "Reserve Allocation"],
  alternates: { canonical: "/deal-101/vc-ch08-post-investment-portfolio", languages: { ko: "/deal-101/vc-ch08-post-investment-portfolio", en: "/en/deal-101/vc-ch08-post-investment-portfolio", "x-default": "/deal-101/vc-ch08-post-investment-portfolio" } },
  openGraph: { type: "article", siteName: "Deal Story", locale: "ko_KR", alternateLocale: ["en_US"], title: "VC Ch.8 — Post-investment + Portfolio Mgmt", description: "Monthly update · 심사역 한 주 · Value-add 7가지 · Red flags", images: [{ url: "/api/og", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() { return <MaVc08Client lang="ko" />; }
