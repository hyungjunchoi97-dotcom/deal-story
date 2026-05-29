import type { Metadata } from "next";
import MaCh03CimClient from "@/app/deal-101/ma-ch03-cim/MaCh03CimClient";

export const metadata: Metadata = {
  title: "M&A Ch.3 — CIM & Teaser | Deal Story",
  description: "The Teaser → CIM → Management Presentation 3-tier marketing pyramid. Standard 80-page CIM anatomy (8 sections), Management Case vs Banker Case projection battle, variants by auction type and target.",
  keywords: ["CIM", "Confidential Information Memorandum", "Teaser", "Management Presentation", "Banker Case", "Vendor DD"],
  alternates: { canonical: "/en/deal-101/ma-ch03-cim", languages: { ko: "/deal-101/ma-ch03-cim", en: "/en/deal-101/ma-ch03-cim", "x-default": "/deal-101/ma-ch03-cim" } },
  openGraph: { type: "article", siteName: "Deal Story", locale: "en_US", alternateLocale: ["ko_KR"], title: "M&A Ch.3 — CIM & Teaser", images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() { return <MaCh03CimClient lang="en" />; }
