import type { Metadata } from "next";
import MaFdd04Client from "./MaFdd04Client";

export const metadata: Metadata = {
  title: "FDD Ch.4 — Hidden Liabilities & Off-Balance-Sheet 발굴 | Deal Story",
  description:
    "Pension, tax exposure, litigation, environmental, customer concentration 등 10개 hidden liability buckets, 산업별 hot spot, basket·cap·escrow mechanics, R&W insurance.",
  keywords: ["FDD", "Hidden Liabilities", "Off-Balance-Sheet", "Indemnification", "R&W Insurance", "Basket Cap Escrow", "SPA"],
  alternates: {
    canonical: "/deal-101/fdd-ch04-hidden-liabilities",
    languages: {
      ko: "/deal-101/fdd-ch04-hidden-liabilities",
      en: "/en/deal-101/fdd-ch04-hidden-liabilities",
      "x-default": "/deal-101/fdd-ch04-hidden-liabilities",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    title: "FDD Ch.4 — Hidden Liabilities & Off-Balance-Sheet 발굴",
    description: "10 buckets, 산업별 hot spot, basket·cap·escrow mechanics, R&W insurance",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() {
  return <MaFdd04Client lang="ko" />;
}
