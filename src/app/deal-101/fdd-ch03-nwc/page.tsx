import type { Metadata } from "next";
import MaFdd03Client from "./MaFdd03Client";

export const metadata: Metadata = {
  title: "FDD Ch.3 — Net Working Capital Normalization | Deal Story",
  description:
    "Dollar-for-dollar로 가격에 박히는 NWC 작업. 구성요소, target 산정, Closing Accounts vs Locked-box mechanism, 매도인의 working capital squeeze 패턴.",
  keywords: ["FDD", "NWC", "Net Working Capital", "Closing Accounts", "Locked-box", "Working Capital Squeeze", "SPA"],
  alternates: {
    canonical: "/deal-101/fdd-ch03-nwc",
    languages: {
      ko: "/deal-101/fdd-ch03-nwc",
      en: "/en/deal-101/fdd-ch03-nwc",
      "x-default": "/deal-101/fdd-ch03-nwc",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    title: "FDD Ch.3 — Net Working Capital Normalization",
    description: "NWC 구성, target 산정, Closing Accounts vs Locked-box, working capital squeeze 패턴",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() {
  return <MaFdd03Client lang="ko" />;
}
