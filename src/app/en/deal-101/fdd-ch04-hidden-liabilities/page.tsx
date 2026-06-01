import type { Metadata } from "next";
import MaFdd04Client from "@/app/deal-101/fdd-ch04-hidden-liabilities/MaFdd04Client";

export const metadata: Metadata = {
  title: "FDD Ch.4 — Hidden liabilities and off-balance-sheet items | Deal Story",
  description:
    "Pension, tax exposure, litigation, environmental, customer concentration — 10 hidden-liability buckets, industry hot-spot matrix, basket/cap/escrow mechanics, and R&W insurance.",
  keywords: ["FDD", "Hidden Liabilities", "Off-Balance-Sheet", "Indemnification", "R&W Insurance", "Basket Cap Escrow", "SPA"],
  alternates: {
    canonical: "/en/deal-101/fdd-ch04-hidden-liabilities",
    languages: {
      ko: "/deal-101/fdd-ch04-hidden-liabilities",
      en: "/en/deal-101/fdd-ch04-hidden-liabilities",
      "x-default": "/deal-101/fdd-ch04-hidden-liabilities",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    title: "FDD Ch.4 — Hidden liabilities and off-balance-sheet items",
    description: "10 buckets, industry hot spots, basket/cap/escrow mechanics, R&W insurance",
    images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() {
  return <MaFdd04Client lang="en" />;
}
