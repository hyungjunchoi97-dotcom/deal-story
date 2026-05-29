import type { Metadata } from "next";
import MaCh05BuyerListClient from "./MaCh05BuyerListClient";
export const metadata: Metadata = {
  title: "M&A Ch.5 — Buyer List & Process Design | Deal Story",
  description: "Broad auction · Limited · Targeted · Negotiated · Reverse inquiry 5가지 process trade-off, Strategic/PE/Family Office buyer taxonomy",
  keywords: ["Buyer list", "Process design", "Broad auction", "Limited auction", "Negotiated deal", "Strategic buyer", "PE sponsor"],
  alternates: { canonical: "/deal-101/ma-ch05-buyer-list", languages: { ko: "/deal-101/ma-ch05-buyer-list", en: "/en/deal-101/ma-ch05-buyer-list", "x-default": "/deal-101/ma-ch05-buyer-list" } },
  openGraph: { type: "article", siteName: "Deal Story", locale: "ko_KR", alternateLocale: ["en_US"], title: "M&A Ch.5 — Buyer List & Process Design", images: [{ url: "/api/og", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};
export default function Page() { return <MaCh05BuyerListClient lang="ko" />; }
