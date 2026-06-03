import type { Metadata } from "next";
import MaVc09Client from "@/app/deal-101/vc-ch09-followon-down-round-exit/MaVc09Client";

export const metadata: Metadata = {
  title: "VC Ch.9 — Follow-on, down rounds, and exit: the second half of the VC lifecycle | Deal Story",
  description: "Five round types (up, flat, down, bridge, recap), four anti-dilution mechanisms, six exit options (IPO, strategic M&A, PE, secondary, acqui-hire, wind-down), the VC power law (5% Tier 1 / 50% write-off), famous exits (WhatsApp $19B, Coupang $60B, Toss, Krafton, Theranos, WeWork $0).",
  keywords: ["VC Exit", "Down Round", "Anti-dilution", "IPO", "M&A", "Power Law", "WhatsApp", "Coupang", "Theranos", "WeWork"],
  alternates: { canonical: "/en/deal-101/vc-ch09-followon-down-round-exit", languages: { ko: "/deal-101/vc-ch09-followon-down-round-exit", en: "/en/deal-101/vc-ch09-followon-down-round-exit", "x-default": "/deal-101/vc-ch09-followon-down-round-exit" } },
  openGraph: { type: "article", siteName: "Deal Story", locale: "en_US", alternateLocale: ["ko_KR"], title: "VC Ch.9 — Follow-on · Down Round · Exit", description: "Five round types · six exits · power law · famous exits", images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() { return <MaVc09Client lang="en" />; }
