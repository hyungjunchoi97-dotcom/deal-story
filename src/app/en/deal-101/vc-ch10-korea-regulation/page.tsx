import type { Metadata } from "next";
import MaVc10Client from "@/app/deal-101/vc-ch10-korea-regulation/MaVc10Client";

export const metadata: Metadata = {
  title: "VC Ch.10 — Korea-specific VC regulation: KVIC, fund-of-funds, the 49-LP cap | Deal Story",
  description: "KVIC fund-of-funds six-step commitment process (~12 months), recovery schedule (60% by year 7, 100% by year 10), 49-LP Capital Markets Act cap, Venture Investment Promotion Act, NTV vs venture investment unions, six policy funds (₩9T KVIC, Growth Ladder, KOSME, K-Bio, K-Hydrogen, K-Reshore), six KR vs US differences.",
  keywords: ["KVIC", "Korea Venture Investment", "Fund of Funds", "49-LP Rule", "Capital Markets Act", "Growth Ladder Fund"],
  alternates: { canonical: "/en/deal-101/vc-ch10-korea-regulation", languages: { ko: "/deal-101/vc-ch10-korea-regulation", en: "/en/deal-101/vc-ch10-korea-regulation", "x-default": "/deal-101/vc-ch10-korea-regulation" } },
  openGraph: { type: "article", siteName: "Deal Story", locale: "en_US", alternateLocale: ["ko_KR"], title: "VC Ch.10 — Korea VC regulation", description: "KVIC 6-step · recovery schedule · 49-LP cap · six policy funds · KR vs US", images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() { return <MaVc10Client lang="en" />; }
