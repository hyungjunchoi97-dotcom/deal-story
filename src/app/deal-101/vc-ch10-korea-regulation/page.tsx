import type { Metadata } from "next";
import MaVc10Client from "./MaVc10Client";

export const metadata: Metadata = {
  title: "VC Ch.10 — 한국 VC 특수 Regulation: 모태펀드 · KVIC · 49인 룰 | Deal Story",
  description: "모태펀드 (한국벤처투자) 출자 process 6단계 (~12개월) · 회수 의무 (7년 60% / 10년 100%) · 자본시장법 49인 룰 · 벤처투자촉진법 · 신기술사업투자조합 vs 벤처투자조합 · 정책펀드 6종 (모태펀드 ₩9조+ · 성장사다리 · KOSME · K-Bio · K-Hydrogen · K-Reshore) · KR vs US 6 차이.",
  keywords: ["KVIC", "모태펀드", "한국벤처투자", "벤처투자촉진법", "자본시장법", "49인 룰", "성장사다리펀드", "K-Bio"],
  alternates: { canonical: "/deal-101/vc-ch10-korea-regulation", languages: { ko: "/deal-101/vc-ch10-korea-regulation", en: "/en/deal-101/vc-ch10-korea-regulation", "x-default": "/deal-101/vc-ch10-korea-regulation" } },
  openGraph: { type: "article", siteName: "Deal Story", locale: "ko_KR", alternateLocale: ["en_US"], title: "VC Ch.10 — 한국 VC Regulation", description: "KVIC 출자 6단계 · 회수 의무 · 49인 룰 · 정책펀드 6종 · KR vs US", images: [{ url: "/api/og", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() { return <MaVc10Client lang="ko" />; }
