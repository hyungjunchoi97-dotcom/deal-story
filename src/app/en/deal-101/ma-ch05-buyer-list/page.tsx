import type { Metadata } from "next";
import MaCh05BuyerListClient from "@/app/deal-101/ma-ch05-buyer-list/MaCh05BuyerListClient";
export const metadata: Metadata = {
  title: "M&A Ch.5 — Buyer List & Process Design | Deal Story",
  description: "Trade-offs across 5 process types (broad auction → negotiated) and buyer taxonomy by strategic / PE / family office",
  keywords: ["Buyer list", "Process design", "Broad auction", "Limited auction", "Negotiated deal", "Strategic buyer", "PE sponsor"],
  alternates: { canonical: "/en/deal-101/ma-ch05-buyer-list", languages: { ko: "/deal-101/ma-ch05-buyer-list", en: "/en/deal-101/ma-ch05-buyer-list", "x-default": "/deal-101/ma-ch05-buyer-list" } },
  openGraph: { type: "article", siteName: "Deal Story", locale: "en_US", alternateLocale: ["ko_KR"], title: "M&A Ch.5 — Buyer List & Process Design", images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};
export default function Page() { return <MaCh05BuyerListClient lang="en" />; }
