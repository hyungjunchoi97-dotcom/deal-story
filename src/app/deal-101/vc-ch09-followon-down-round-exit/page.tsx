import type { Metadata } from "next";
import MaVc09Client from "./MaVc09Client";

export const metadata: Metadata = {
  title: "VC Ch.9 — Follow-on · Down Round · Exit: VC 수명의 후반전 | Deal Story",
  description: "Round type 5가지 (Up·Flat·Down·Bridge·Recap) · Anti-dilution 4 방식 · Exit options 6가지 (IPO·Strategic M&A·PE·Secondary·Acqui-hire·Wind-down) · VC power law (5% Tier 1 / 50% Write-off) · Famous exits (WhatsApp $19B·Coupang $60B·Toss·Krafton·Theranos·WeWork $0).",
  keywords: ["VC Exit", "Down Round", "Anti-dilution", "IPO", "M&A", "Power Law", "WhatsApp", "Coupang", "Theranos", "WeWork"],
  alternates: { canonical: "/deal-101/vc-ch09-followon-down-round-exit", languages: { ko: "/deal-101/vc-ch09-followon-down-round-exit", en: "/en/deal-101/vc-ch09-followon-down-round-exit", "x-default": "/deal-101/vc-ch09-followon-down-round-exit" } },
  openGraph: { type: "article", siteName: "Deal Story", locale: "ko_KR", alternateLocale: ["en_US"], title: "VC Ch.9 — Follow-on · Down Round · Exit", description: "Round 5가지 · Exit 6가지 · Power law · Famous exits", images: [{ url: "/api/og", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() { return <MaVc09Client lang="ko" />; }
