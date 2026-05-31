import type { Metadata } from "next";
import MaVal05Client from "@/app/deal-101/val-ch05-ipo-case/MaVal05Client";

export const metadata: Metadata = {
  title: "Valuation Ch.5 — IPO Case: Facebook IPO (2012) | Deal Story",
  description:
    "How Morgan Stanley arrived at the $38 offer price, the weak peer set, the mobile blind spot inside NTM revenue, and where exactly the day-one collapse traces back inside the valuation work.",
  keywords: ["Valuation", "IPO", "Facebook IPO", "Morgan Stanley", "Trading Comps", "Peer Universe", "NTM Revenue", "Mobile Monetization"],
  alternates: {
    canonical: "/en/deal-101/val-ch05-ipo-case",
    languages: {
      ko: "/deal-101/val-ch05-ipo-case",
      en: "/en/deal-101/val-ch05-ipo-case",
      "x-default": "/deal-101/val-ch05-ipo-case",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    title: "Valuation Ch.5 — IPO Case: Facebook IPO (2012)",
    description: "Pricing journey to $38, weak peer set, the mobile blind spot — anatomy of a day-one collapse",
    images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() {
  return <MaVal05Client lang="en" />;
}
