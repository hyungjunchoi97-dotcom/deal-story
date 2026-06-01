import type { Metadata } from "next";
import MaFdd03Client from "@/app/deal-101/fdd-ch03-nwc/MaFdd03Client";

export const metadata: Metadata = {
  title: "FDD Ch.3 — Net Working Capital Normalization | Deal Story",
  description:
    "The dollar-for-dollar adjustment that lands in the SPA. NWC components, target setting, Closing Accounts vs Locked-box mechanisms, and the seller's working-capital squeeze.",
  keywords: ["FDD", "NWC", "Net Working Capital", "Closing Accounts", "Locked-box", "Working Capital Squeeze", "SPA"],
  alternates: {
    canonical: "/en/deal-101/fdd-ch03-nwc",
    languages: {
      ko: "/deal-101/fdd-ch03-nwc",
      en: "/en/deal-101/fdd-ch03-nwc",
      "x-default": "/deal-101/fdd-ch03-nwc",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    title: "FDD Ch.3 — Net Working Capital Normalization",
    description: "NWC composition, target setting, Closing Accounts vs Locked-box, the working-capital squeeze",
    images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() {
  return <MaFdd03Client lang="en" />;
}
