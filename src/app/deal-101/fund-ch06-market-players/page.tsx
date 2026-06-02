import type { Metadata } from "next";
import MaFund06Client from "./MaFund06Client";

export const metadata: Metadata = {
  title: "Fund Ch.6 — 한국·미국 시장과 주요 플레이어 도감 | Deal Story",
  description:
    "Global Private Capital $12.5T AUM 분해, US Top 12 PE (Blackstone $1,075B → Warburg Pincus $83B) + Top 8 VC, 한국 PE 8개사 (MBK·Hahn·IMM·STIC·VIG·UCK·Glenwood·Centroid) + 한국 VC 8개사, KR vs US 7가지 차이, Fund 시리즈 마무리.",
  keywords: ["Fund", "Market Players", "MBK", "IMM", "STIC", "Hahn", "Blackstone", "KKR", "Sequoia", "한국 PE", "한국 VC", "NPS", "모태펀드"],
  alternates: {
    canonical: "/deal-101/fund-ch06-market-players",
    languages: {
      ko: "/deal-101/fund-ch06-market-players",
      en: "/en/deal-101/fund-ch06-market-players",
      "x-default": "/deal-101/fund-ch06-market-players",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    title: "Fund Ch.6 — 한국·미국 시장과 주요 플레이어 도감",
    description: "Global $12.5T · US Top PE/VC · 한국 PE/VC 도감 · KR vs US 7가지 차이 · Fund 시리즈 마무리",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() {
  return <MaFund06Client lang="ko" />;
}
