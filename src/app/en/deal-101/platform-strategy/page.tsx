/**
 * Deal 101 / Platform Strategy (EN) — Server Component
 */
import type { Metadata } from "next";
import PlatformStrategyClientEn from "./PlatformStrategyClientEn";

export const metadata: Metadata = {
  title: "Platform Strategy — The M&A Premium That Network Effects Create | Deal Story",
  description:
    "Platform vs pipeline, four network effect types (direct, indirect, data, supply-side), five reasons acquirers pay premiums for platforms, and case studies on Google×YouTube and Microsoft×LinkedIn/GitHub.",
  keywords: [
    "platform strategy",
    "network effects",
    "platform M&A",
    "direct network effect",
    "indirect network effect",
    "Google YouTube acquisition",
    "Microsoft LinkedIn acquisition",
    "platform business model",
  ],
  alternates: {
    canonical: "/en/deal-101/platform-strategy",
    languages: {
      ko: "/deal-101/platform-strategy",
      en: "/en/deal-101/platform-strategy",
      "x-default": "/deal-101/platform-strategy",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    images: [{ url: "/api/og?lang=en", width: 1200, height: 630, alt: "Deal Story" }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() {
  return <PlatformStrategyClientEn />;
}
