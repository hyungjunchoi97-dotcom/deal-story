import type { Metadata } from "next";
import MaFund03Client from "@/app/deal-101/fund-ch03-fund-types/MaFund03Client";

export const metadata: Metadata = {
  title: "Fund Ch.3 — Fund types and structures: buyout, VC, credit, Korea's PEF | Deal Story",
  description:
    "Eight strategies (PE buyout, growth, VC, mezz, distressed, credit, RE, infra), closed-end vs open-end vs evergreen, public access via BDC and listed PE, plus Korea's PEF, NTV vehicles, KVIC, and KDB policy capital.",
  keywords: ["Fund", "PE Strategy", "Buyout", "Venture Capital", "Private Credit", "BDC", "PEF", "Korea Fund-of-Funds", "KVIC"],
  alternates: {
    canonical: "/en/deal-101/fund-ch03-fund-types",
    languages: {
      ko: "/deal-101/fund-ch03-fund-types",
      en: "/en/deal-101/fund-ch03-fund-types",
      "x-default": "/deal-101/fund-ch03-fund-types",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    title: "Fund Ch.3 — Fund types and structures",
    description: "Eight strategies · three structures · BDC/listed PE · Korea's distinctive vehicles",
    images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() {
  return <MaFund03Client lang="en" />;
}
