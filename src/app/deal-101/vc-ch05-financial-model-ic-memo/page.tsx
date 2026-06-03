import type { Metadata } from "next";
import MaVc05Client from "./MaVc05Client";

export const metadata: Metadata = {
  title: "VC Ch.5 — Financial Modeling + IC Memo: 심사역의 가장 큰 산출물 | Deal Story",
  description: "심사역의 3 model (3-statement projection · VC return model · Cap table waterfall) · VC return model worked example (\\$5M @ \\$25M post → 16.5x weighted MOIC) · IC memo 12 section 30-50 page · 한국 8-13명 투자위원회 · US vs KR IC 6 차이.",
  keywords: ["VC IC Memo", "Investment Committee", "VC Return Model", "MOIC", "IRR", "Cap Table"],
  alternates: { canonical: "/deal-101/vc-ch05-financial-model-ic-memo", languages: { ko: "/deal-101/vc-ch05-financial-model-ic-memo", en: "/en/deal-101/vc-ch05-financial-model-ic-memo", "x-default": "/deal-101/vc-ch05-financial-model-ic-memo" } },
  openGraph: { type: "article", siteName: "Deal Story", locale: "ko_KR", alternateLocale: ["en_US"], title: "VC Ch.5 — Financial Model + IC Memo", description: "3 model · VC return model · IC memo 12 section · KR vs US IC", images: [{ url: "/api/og", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() { return <MaVc05Client lang="ko" />; }
