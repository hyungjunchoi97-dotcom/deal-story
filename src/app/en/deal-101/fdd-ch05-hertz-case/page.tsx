import type { Metadata } from "next";
import MaFdd05Client from "@/app/deal-101/fdd-ch05-hertz-case/MaFdd05Client";

export const metadata: Metadata = {
  title: "FDD Ch.5 — Case: the Hertz accounting restatement (2014-2015) | Deal Story",
  description:
    "The vehicle depreciation assumption PwC missed year after year, the $235M cumulative overstatement, CEO resignation and the Carl Icahn activist push, and the five signals a buy-side FDD would have seen.",
  keywords: ["FDD", "Hertz Restatement", "Vehicle Depreciation", "Accounting Scandal", "PwC", "Carl Icahn", "SEC Enforcement"],
  alternates: {
    canonical: "/en/deal-101/fdd-ch05-hertz-case",
    languages: {
      ko: "/deal-101/fdd-ch05-hertz-case",
      en: "/en/deal-101/fdd-ch05-hertz-case",
      "x-default": "/deal-101/fdd-ch05-hertz-case",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    title: "FDD Ch.5 — Case: the Hertz accounting restatement (2014-2015)",
    description: "$235M restatement, vehicle depreciation, audit failure, five signals FDD could have caught",
    images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() {
  return <MaFdd05Client lang="en" />;
}
