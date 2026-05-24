/**
 * Deal 101 / Tender Offer (EN) — Server Component
 */
import type { Metadata } from "next";
import { TenderOfferClientEn } from "./TenderOfferClientEn";

export const metadata: Metadata = {
  title: "Tender Offer Explained — Hostile Takeovers & Defense Tactics | Deal Story",
  description:
    "What is a tender offer? How acquirers bypass the board and appeal directly to shareholders. Process, defense tactics (poison pill, white knight), Musk/Twitter and Microsoft/Activision case studies.",
  keywords: [
    "tender offer",
    "hostile takeover",
    "poison pill",
    "white knight",
    "going private",
    "M&A defense",
    "shareholder rights plan",
  ],
  alternates: {
    canonical: "/en/deal-101/tender-offer",
    languages: {
      ko: "/deal-101/tender-offer",
      en: "/en/deal-101/tender-offer",
      "x-default": "/deal-101/tender-offer",
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
  return <TenderOfferClientEn />;
}
