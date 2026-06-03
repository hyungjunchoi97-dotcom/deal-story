import type { Metadata } from "next";
import MaVc03Client from "@/app/deal-101/vc-ch03-pitch-first-meeting/MaVc03Client";

export const metadata: Metadata = {
  title: "VC Ch.3 — Pitch and first meeting: the 30-minute game | Deal Story",
  description: "The associate's 5-factor rubric (Team 50% + market + traction + product + why-now), founder 10-slide deck template, 30-minute meeting dynamic (decision in 2 min, confirm in 28), famous decks (Airbnb, WeWork, Toss, Coupang, Snap), post-meeting follow-up.",
  keywords: ["VC Pitch", "Pitch Deck", "10 Slide", "First Meeting", "Sequoia Deck", "Airbnb Deck", "Stripe Deck"],
  alternates: { canonical: "/en/deal-101/vc-ch03-pitch-first-meeting", languages: { ko: "/deal-101/vc-ch03-pitch-first-meeting", en: "/en/deal-101/vc-ch03-pitch-first-meeting", "x-default": "/deal-101/vc-ch03-pitch-first-meeting" } },
  openGraph: { type: "article", siteName: "Deal Story", locale: "en_US", alternateLocale: ["ko_KR"], title: "VC Ch.3 — Pitch and first meeting", description: "5-factor rubric · 10-slide deck · 30-min dynamic · famous decks", images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() { return <MaVc03Client lang="en" />; }
