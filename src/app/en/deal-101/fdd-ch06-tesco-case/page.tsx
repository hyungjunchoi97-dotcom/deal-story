import type { Metadata } from "next";
import MaFdd06Client from "@/app/deal-101/fdd-ch06-tesco-case/MaFdd06Client";

export const metadata: Metadata = {
  title: "FDD Ch.6 — Case: Tesco's £263M accounting scandal (2014) | Deal Story",
  description:
    "Pulling supplier rebates forward and deferring costs — the timing manipulation, the signals 30-year long-tenure auditor PwC missed, the SFO DPA of £129M, and five FDD checkpoints.",
  keywords: ["FDD", "Tesco Scandal", "Supplier Rebate", "Commercial Income", "PwC", "Serious Fraud Office", "DPA"],
  alternates: {
    canonical: "/en/deal-101/fdd-ch06-tesco-case",
    languages: {
      ko: "/deal-101/fdd-ch06-tesco-case",
      en: "/en/deal-101/fdd-ch06-tesco-case",
      "x-default": "/deal-101/fdd-ch06-tesco-case",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    title: "FDD Ch.6 — Case: Tesco's £263M accounting scandal (2014)",
    description: "Supplier rebate timing manipulation, audit failure, five FDD checkpoints",
    images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() {
  return <MaFdd06Client lang="en" />;
}
