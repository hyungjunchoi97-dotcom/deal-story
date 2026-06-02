import type { Metadata } from "next";
import MaFund06Client from "@/app/deal-101/fund-ch06-market-players/MaFund06Client";

export const metadata: Metadata = {
  title: "Fund Ch.6 — Korea vs US market and the player atlas | Deal Story",
  description:
    "Global private capital $12.5T AUM breakdown, US top 12 PE (Blackstone $1,075B → Warburg Pincus $83B) plus top 8 VC, Korea's 8 PE houses (MBK, Hahn, IMM, STIC, VIG, UCK, Glenwood, Centroid) and 8 VC houses, seven KR-vs-US differences, and a wrap to the Fund series.",
  keywords: ["Fund", "Market Players", "MBK", "IMM", "STIC", "Hahn", "Blackstone", "KKR", "Sequoia", "Korea PE", "Korea VC", "NPS", "KVIC"],
  alternates: {
    canonical: "/en/deal-101/fund-ch06-market-players",
    languages: {
      ko: "/deal-101/fund-ch06-market-players",
      en: "/en/deal-101/fund-ch06-market-players",
      "x-default": "/deal-101/fund-ch06-market-players",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    title: "Fund Ch.6 — Korea vs US market and the player atlas",
    description: "Global $12.5T · US top PE/VC · Korea PE/VC atlas · seven KR-vs-US differences · Fund series wrap",
    images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() {
  return <MaFund06Client lang="en" />;
}
