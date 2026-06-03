import type { Metadata } from "next";
import MaVc08Client from "@/app/deal-101/vc-ch08-post-investment-portfolio/MaVc08Client";

export const metadata: Metadata = {
  title: "VC Ch.8 — Post-investment + portfolio management: running 15-25 portcos at once | Deal Story",
  description: "Founder monthly update (six sections), the associate's portfolio week (~15% of time), seven value-add modes (hiring, BD, follow-on, PR, advisor, strategic, crisis), reserve allocation (strong upsider → failing), six portfolio red flags, famous value-add (Stripe, Uber, Toss, Twitter).",
  keywords: ["VC Portfolio Management", "Monthly Update", "Board Management", "Value Add", "Reserve Allocation"],
  alternates: { canonical: "/en/deal-101/vc-ch08-post-investment-portfolio", languages: { ko: "/deal-101/vc-ch08-post-investment-portfolio", en: "/en/deal-101/vc-ch08-post-investment-portfolio", "x-default": "/deal-101/vc-ch08-post-investment-portfolio" } },
  openGraph: { type: "article", siteName: "Deal Story", locale: "en_US", alternateLocale: ["ko_KR"], title: "VC Ch.8 — Post-investment + portfolio mgmt", description: "Monthly update · associate's week · value-add · red flags", images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() { return <MaVc08Client lang="en" />; }
