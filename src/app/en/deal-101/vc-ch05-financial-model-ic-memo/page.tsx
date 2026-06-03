import type { Metadata } from "next";
import MaVc05Client from "@/app/deal-101/vc-ch05-financial-model-ic-memo/MaVc05Client";

export const metadata: Metadata = {
  title: "VC Ch.5 — Financial modeling + IC memo: the associate's biggest deliverable | Deal Story",
  description: "Three models the associate builds (3-statement projection, VC return model, cap-table waterfall), VC return model worked example ($5M @ $25M post → 16.5x weighted MOIC), 12-section IC memo (30-50 pages), 8-13 person Korean IC, six US-vs-KR IC differences.",
  keywords: ["VC IC Memo", "Investment Committee", "VC Return Model", "MOIC", "IRR", "Cap Table"],
  alternates: { canonical: "/en/deal-101/vc-ch05-financial-model-ic-memo", languages: { ko: "/deal-101/vc-ch05-financial-model-ic-memo", en: "/en/deal-101/vc-ch05-financial-model-ic-memo", "x-default": "/deal-101/vc-ch05-financial-model-ic-memo" } },
  openGraph: { type: "article", siteName: "Deal Story", locale: "en_US", alternateLocale: ["ko_KR"], title: "VC Ch.5 — Financial model + IC memo", description: "Three models · VC return model · 12-section IC memo · KR vs US IC", images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() { return <MaVc05Client lang="en" />; }
