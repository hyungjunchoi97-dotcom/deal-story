import type { Metadata } from "next";
import MaVal01Client from "./MaVal01Client";

export const metadata: Metadata = {
  title: "Valuation Ch.1 — 회사에 값을 매기는 3가지 방법 | Deal Story",
  description:
    "DCF · Multiples · Asset-based 세 가지 방법, 언제 어느 걸 쓰는지, 그리고 왜 셋을 같이 보여주는지. Valuation 시리즈 시작.",
  keywords: ["Valuation", "DCF", "Multiples", "Trading Comps", "Transaction Comps", "Football Field", "Asset-based"],
  alternates: {
    canonical: "/deal-101/val-ch01-frameworks",
    languages: {
      ko: "/deal-101/val-ch01-frameworks",
      en: "/en/deal-101/val-ch01-frameworks",
      "x-default": "/deal-101/val-ch01-frameworks",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    title: "Valuation Ch.1 — 회사에 값을 매기는 3가지 방법",
    description: "DCF · Multiples · Asset-based — 언제 어느 걸 쓰는지, 왜 셋을 같이 보여주는지",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() {
  return <MaVal01Client lang="ko" />;
}
