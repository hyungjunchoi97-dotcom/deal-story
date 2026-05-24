/**
 * Deal 101 / M&A Regulatory Risk (EN) — Server Component
 */
import type { Metadata } from "next";
import { RegulatoryRiskClientEn } from "./RegulatoryRiskClientEn";

export const metadata: Metadata = {
  title: "M&A Regulatory Risk — The Invisible Wall Between Signing and Closing | Deal 101 | Deal Story",
  description:
    "Antitrust, CFIUS/FDI national security review, sector-specific approvals — five types of regulatory risk that can block or reshape a deal, with NVIDIA×Arm and Illumina×GRAIL case studies.",
  keywords: [
    "M&A regulatory risk",
    "antitrust",
    "CFIUS",
    "FDI review",
    "merger control",
    "HSR Act",
    "EU merger regulation",
    "Break-up Fee",
    "NVIDIA Arm",
    "Illumina GRAIL",
    "gun-jumping",
  ],
  alternates: {
    canonical: "/en/deal-101/regulatory-risk",
    languages: {
      ko: "/deal-101/regulatory-risk",
      en: "/en/deal-101/regulatory-risk",
      "x-default": "/deal-101/regulatory-risk",
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
  return <RegulatoryRiskClientEn />;
}
