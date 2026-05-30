import type { Metadata } from "next";
import MaVal01Client from "@/app/deal-101/val-ch01-frameworks/MaVal01Client";

export const metadata: Metadata = {
  title: "Valuation Ch.1 — Three ways to put a number on a business | Deal Story",
  description:
    "DCF, multiples, and asset-based — when each is used, and why bankers always show all three. The start of the Valuation series.",
  keywords: ["Valuation", "DCF", "Multiples", "Trading Comps", "Transaction Comps", "Football Field", "Asset-based"],
  alternates: {
    canonical: "/en/deal-101/val-ch01-frameworks",
    languages: {
      ko: "/deal-101/val-ch01-frameworks",
      en: "/en/deal-101/val-ch01-frameworks",
      "x-default": "/deal-101/val-ch01-frameworks",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    title: "Valuation Ch.1 — Three ways to put a number on a business",
    description: "DCF, multiples, asset-based — when each is used, why all three get shown together",
    images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() {
  return <MaVal01Client lang="en" />;
}
