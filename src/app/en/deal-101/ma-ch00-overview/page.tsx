/**
 * Ch.0 — M&A Series Deal Type Matrix (EN)
 */
import type { Metadata } from "next";
import MaCh00OverviewClient from "@/app/deal-101/ma-ch00-overview/MaCh00OverviewClient";

export const metadata: Metadata = {
  title: "M&A Series — Deal Type Matrix (Ch.0) | Deal Story",
  description:
    "GS·MS·JPM M&A full lifecycle in 14 chapters + interactive 5-axis matrix. See how variants — sell vs. buy, auction vs. negotiated, public/private/carve-out/distressed — change the workflow chapter by chapter.",
  keywords: [
    "M&A series", "M&A process", "deal type matrix", "Goldman Sachs M&A",
    "sell-side", "buy-side", "broad auction", "negotiated", "public take-private",
    "carve-out", "distressed", "M&A workflow",
  ],
  alternates: {
    canonical: "/en/deal-101/ma-ch00-overview",
    languages: {
      ko: "/deal-101/ma-ch00-overview",
      en: "/en/deal-101/ma-ch00-overview",
      "x-default": "/deal-101/ma-ch00-overview",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    title: "M&A Series — Deal Type Matrix (Ch.0)",
    description: "Interactive 5-axis matrix mapping how variants shift the 14-chapter M&A workflow",
    images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() {
  return <MaCh00OverviewClient lang="en" />;
}
