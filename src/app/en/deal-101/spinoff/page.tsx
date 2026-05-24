/**
 * Deal 101 / Spin-off (EN) — Server Component
 */
import type { Metadata } from "next";
import SpinoffClientEn from "./SpinoffClientEn";

export const metadata: Metadata = {
  title: "Spin-off — Unlocking Hidden Value by Separating Business Units | Deal Story",
  description:
    "The go-to tool for resolving conglomerate discount. What spin-offs are, why they are tax-efficient, value creation mechanisms, and case studies: PayPal×eBay and GE's three-way break-up.",
  keywords: [
    "spin-off",
    "spinoff",
    "conglomerate discount",
    "carve-out",
    "divestiture",
    "PayPal eBay",
    "GE breakup",
    "business unit separation",
    "Section 355",
  ],
  alternates: {
    canonical: "/en/deal-101/spinoff",
    languages: {
      ko: "/deal-101/spinoff",
      en: "/en/deal-101/spinoff",
      "x-default": "/deal-101/spinoff",
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
  return <SpinoffClientEn />;
}
