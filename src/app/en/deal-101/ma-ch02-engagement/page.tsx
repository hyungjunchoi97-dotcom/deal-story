import type { Metadata } from "next";
import MaCh02EngagementClient from "@/app/deal-101/ma-ch02-engagement/MaCh02EngagementClient";

export const metadata: Metadata = {
  title: "M&A Ch.2 — Engagement Letter & Fee Economics | Deal Story",
  description:
    "How BB, MM, and boutique fees actually work. Retainer/Milestone/Success 3-layer stack, interactive fee calculator, sell vs buy vs fairness economics, what a 24-month tail really means, MNPI wall.",
  keywords: ["M&A fee", "Engagement letter", "Success fee", "Lehman formula", "Tail period", "MNPI wall", "Retainer", "Sell-side fee"],
  alternates: {
    canonical: "/en/deal-101/ma-ch02-engagement",
    languages: { ko: "/deal-101/ma-ch02-engagement", en: "/en/deal-101/ma-ch02-engagement", "x-default": "/deal-101/ma-ch02-engagement" },
  },
  openGraph: { type: "article", siteName: "Deal Story", locale: "en_US", alternateLocale: ["ko_KR"], title: "M&A Ch.2 — Engagement Letter & Fee Economics", images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() { return <MaCh02EngagementClient lang="en" />; }
