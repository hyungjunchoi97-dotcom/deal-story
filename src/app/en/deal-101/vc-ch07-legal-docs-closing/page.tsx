import type { Metadata } from "next";
import MaVc07Client from "@/app/deal-101/vc-ch07-legal-docs-closing/MaVc07Client";

export const metadata: Metadata = {
  title: "VC Ch.7 — Legal docs (RCPS, CB, BW) + closing: Korea's unique structure | Deal Story",
  description: "Korea's standard RCPS (redeemable convertible preferred shares) and its six rights, CB and BW, the SPA and SHA, Korean Big 5 (Kim&Chang, Shin&Kim, Bae Kim Lee) vs US (Cooley, Wilson Sonsini), ₩30-80M legal fees, 50+ item closing checklist across four phases.",
  keywords: ["RCPS", "Korean Preferred Shares", "Convertible Bond", "SHA", "Kim&Chang", "Cooley", "Wilson Sonsini"],
  alternates: { canonical: "/en/deal-101/vc-ch07-legal-docs-closing", languages: { ko: "/deal-101/vc-ch07-legal-docs-closing", en: "/en/deal-101/vc-ch07-legal-docs-closing", "x-default": "/deal-101/vc-ch07-legal-docs-closing" } },
  openGraph: { type: "article", siteName: "Deal Story", locale: "en_US", alternateLocale: ["ko_KR"], title: "VC Ch.7 — Legal Docs + Closing (Korea RCPS)", description: "RCPS deep dive · six docs · Big 5 law firms · closing checklist", images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() { return <MaVc07Client lang="en" />; }
