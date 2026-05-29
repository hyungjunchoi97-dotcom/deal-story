import type { Metadata } from "next";
import MaCh03FddCaseClient from "@/app/deal-101/ma-ch03-fdd-case/MaCh03FddCaseClient";

export const metadata: Metadata = {
  title: "M&A Ch.3 — The FDD Fight: one-time vs recurring (Wasserstein × RJR + WeWork) | Deal Story",
  description:
    "FDD reduces to one question — one-time or recurring. How Bruce Wasserstein × RJR Nabisco (1988) effectively invented Adjusted EBITDA, and how WeWork's Community Adjusted EBITDA (2019) crossed into fiction. 8 add-back categories + price impact math.",
  keywords: ["FDD", "Adjusted EBITDA", "Quality of Earnings", "Bruce Wasserstein", "RJR Nabisco", "WeWork", "Community Adjusted EBITDA", "Add-back"],
  alternates: {
    canonical: "/en/deal-101/ma-ch03-fdd-case",
    languages: {
      ko: "/deal-101/ma-ch03-fdd-case",
      en: "/en/deal-101/ma-ch03-fdd-case",
      "x-default": "/deal-101/ma-ch03-fdd-case",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    title: "M&A Ch.3 — The FDD Fight: one-time vs recurring",
    description: "The EBITDA add-back fight through Wasserstein × RJR Nabisco and WeWork",
    images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() {
  return <MaCh03FddCaseClient lang="en" />;
}
