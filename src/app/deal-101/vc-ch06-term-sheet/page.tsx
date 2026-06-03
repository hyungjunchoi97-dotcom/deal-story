import type { Metadata } from "next";
import MaVc06Client from "./MaVc06Client";

export const metadata: Metadata = {
  title: "VC Ch.6 — Term Sheet 7대 조항 + Negotiation 실무 | Deal Story",
  description: "Pre-money valuation · Liquidation preference (1x non-participating 표준) · Anti-dilution (broad-based weighted avg) · Board composition · Pro-rata · Drag-along · Vesting cliff · SAFE vs Priced Round · 심사역 권한 vs Partner 결정 · Famous cases (Facebook·Snap·WeWork·Theranos).",
  keywords: ["VC Term Sheet", "Liquidation Preference", "Anti-dilution", "Pro-rata", "Drag-along", "SAFE", "Snap Dual-class", "WeWork Supervoting"],
  alternates: { canonical: "/deal-101/vc-ch06-term-sheet", languages: { ko: "/deal-101/vc-ch06-term-sheet", en: "/en/deal-101/vc-ch06-term-sheet", "x-default": "/deal-101/vc-ch06-term-sheet" } },
  openGraph: { type: "article", siteName: "Deal Story", locale: "ko_KR", alternateLocale: ["en_US"], title: "VC Ch.6 — Term Sheet + Negotiation", description: "7대 조항 · SAFE vs Priced · 심사역 권한 · Snap·WeWork 사례", images: [{ url: "/api/og", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() { return <MaVc06Client lang="ko" />; }
