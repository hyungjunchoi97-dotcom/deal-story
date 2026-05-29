import type { Metadata } from "next";
import MaCh03CimClient from "./MaCh03CimClient";

export const metadata: Metadata = {
  title: "M&A Ch.3 — CIM & Teaser | Deal Story",
  description: "Teaser → CIM → Management Presentation 3-tier 마케팅 문서 피라미드. CIM 표준 80p anatomy(8 섹션), Management Case vs Banker Case projection 협상, Auction·Carve-out·Public 별 분기.",
  keywords: ["CIM", "Confidential Information Memorandum", "Teaser", "Management Presentation", "Banker Case", "Vendor DD"],
  alternates: { canonical: "/deal-101/ma-ch03-cim", languages: { ko: "/deal-101/ma-ch03-cim", en: "/en/deal-101/ma-ch03-cim", "x-default": "/deal-101/ma-ch03-cim" } },
  openGraph: { type: "article", siteName: "Deal Story", locale: "ko_KR", alternateLocale: ["en_US"], title: "M&A Ch.3 — CIM & Teaser", images: [{ url: "/api/og", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() { return <MaCh03CimClient lang="ko" />; }
