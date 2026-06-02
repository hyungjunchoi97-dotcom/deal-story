import type { Metadata } from "next";
import MaFundOps07Client from "@/app/deal-101/fund-ops-ch07-ai-tech-future/MaFundOps07Client";

export const metadata: Metadata = {
  title: "Fund Ops Ch.7 — AI, tech stack, and the future of fund ops (2026 forward) | Deal Story",
  description:
    "Six fund-ops platforms (eFront, Investran, Allvue, Carta, DealCloud, Backstop) · eight AI use cases (LP chatbot, ESG automation, NAV reconciliation, DD doc analysis) · six-layer cybersecurity (zero-trust, MFA, DLP) · four tokenization milestones (KKR, Hamilton Lane, Apollo, BlackRock BUIDL) · six predictions for 2030.",
  keywords: ["Fund Ops", "AI", "Tokenization", "eFront", "Investran", "Allvue", "Carta", "DealCloud", "KKR Tokenized", "Cybersecurity", "Zero Trust"],
  alternates: {
    canonical: "/en/deal-101/fund-ops-ch07-ai-tech-future",
    languages: { ko: "/deal-101/fund-ops-ch07-ai-tech-future", en: "/en/deal-101/fund-ops-ch07-ai-tech-future", "x-default": "/deal-101/fund-ops-ch07-ai-tech-future" },
  },
  openGraph: { type: "article", siteName: "Deal Story", locale: "en_US", alternateLocale: ["ko_KR"], title: "Fund Ops Ch.7 — AI, tech stack, and the future of fund ops", description: "Six platforms · eight AI cases · six-layer cyber · four tokenization milestones · 2030 forecast", images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() { return <MaFundOps07Client lang="en" />; }
