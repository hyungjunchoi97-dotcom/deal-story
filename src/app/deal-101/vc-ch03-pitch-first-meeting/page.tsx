import type { Metadata } from "next";
import MaVc03Client from "./MaVc03Client";

export const metadata: Metadata = {
  title: "VC Ch.3 — Pitch & First Meeting: 30분의 게임 | Deal Story",
  description: "심사역의 5-factor evaluation rubric (Team 50% + Market + Traction + Product + Why Now) · 창업자 10-slide deck 표준 구조 · 30분 meeting dynamic (2분 결정·28분 confirm) · Famous decks (Airbnb·WeWork·Toss·Coupang·Snap) · Post-meeting follow-up 흐름.",
  keywords: ["VC Pitch", "Pitch Deck", "10 Slide", "First Meeting", "Sequoia Deck", "Airbnb Deck", "Stripe Deck"],
  alternates: { canonical: "/deal-101/vc-ch03-pitch-first-meeting", languages: { ko: "/deal-101/vc-ch03-pitch-first-meeting", en: "/en/deal-101/vc-ch03-pitch-first-meeting", "x-default": "/deal-101/vc-ch03-pitch-first-meeting" } },
  openGraph: { type: "article", siteName: "Deal Story", locale: "ko_KR", alternateLocale: ["en_US"], title: "VC Ch.3 — Pitch & First Meeting", description: "5-factor rubric · 10-slide deck · 30분 dynamic · Famous decks", images: [{ url: "/api/og", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() { return <MaVc03Client lang="ko" />; }
