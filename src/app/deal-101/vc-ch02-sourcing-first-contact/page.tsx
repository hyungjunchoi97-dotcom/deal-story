import type { Metadata } from "next";
import MaVc02Client from "./MaVc02Client";

export const metadata: Metadata = {
  title: "VC Ch.2 — Sourcing & First Contact: 양면 게임의 시작 | Deal Story",
  description: "4 sourcing channel (inbound·network·outbound·accelerator) · Cold email reply rate 1-3% vs warm intro 60% · 창업자 cold email 5-part 구조 · 심사역의 Affinity·DealCloud pipeline 6 stage · Internal screening memo 7 fields · Airbnb·Stripe·WhatsApp·Toss·Coupang famous intros.",
  keywords: ["VC Sourcing", "Cold Email", "Warm Intro", "심사역", "Affinity", "DealCloud", "Y Combinator", "한국 VC", "Pitch"],
  alternates: { canonical: "/deal-101/vc-ch02-sourcing-first-contact", languages: { ko: "/deal-101/vc-ch02-sourcing-first-contact", en: "/en/deal-101/vc-ch02-sourcing-first-contact", "x-default": "/deal-101/vc-ch02-sourcing-first-contact" } },
  openGraph: { type: "article", siteName: "Deal Story", locale: "ko_KR", alternateLocale: ["en_US"], title: "VC Ch.2 — Sourcing & First Contact", description: "4 sourcing 채널 · Cold email · 심사역 pipeline · Famous intros", images: [{ url: "/api/og", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() { return <MaVc02Client lang="ko" />; }
