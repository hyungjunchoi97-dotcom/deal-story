import type { Metadata } from "next";
import MaVc06Client from "@/app/deal-101/vc-ch06-term-sheet/MaVc06Client";

export const metadata: Metadata = {
  title: "VC Ch.6 — The seven term sheet provisions + negotiation in practice | Deal Story",
  description: "Pre-money valuation, liquidation preference (1x non-participating standard), anti-dilution (broad-based weighted average), board composition, pro-rata, drag-along, vesting cliff · SAFE vs priced round · associate authority vs partner decisions · famous cases (Facebook, Snap, WeWork, Theranos).",
  keywords: ["VC Term Sheet", "Liquidation Preference", "Anti-dilution", "Pro-rata", "Drag-along", "SAFE", "Snap Dual-class", "WeWork Supervoting"],
  alternates: { canonical: "/en/deal-101/vc-ch06-term-sheet", languages: { ko: "/deal-101/vc-ch06-term-sheet", en: "/en/deal-101/vc-ch06-term-sheet", "x-default": "/deal-101/vc-ch06-term-sheet" } },
  openGraph: { type: "article", siteName: "Deal Story", locale: "en_US", alternateLocale: ["ko_KR"], title: "VC Ch.6 — Term Sheet + Negotiation", description: "Seven provisions · SAFE vs priced · associate authority · Snap, WeWork", images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() { return <MaVc06Client lang="en" />; }
