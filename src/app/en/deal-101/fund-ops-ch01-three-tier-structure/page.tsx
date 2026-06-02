import type { Metadata } from "next";
import MaFundOps01Client from "@/app/deal-101/fund-ops-ch01-three-tier-structure/MaFundOps01Client";

export const metadata: Metadata = {
  title: "Fund Ops Ch.1 — Front, middle, back office: three lenses on running a fund | Deal Story",
  description:
    "Why PE and VC firms split into front, middle, and back office — the expensive lessons from Madoff, Abraaj, and Lime. Q1 2026 mega-cap PE headcount mix (25/22/40), top 10 fund administrators ($11.5T AUA), US vs Korea five-level comp ladder, and ten entry routes via Big 4, fund admins, IB ops, and Big Law.",
  keywords: ["Fund Ops", "Front Office", "Middle Office", "Back Office", "Fund Administration", "PE Operations", "Compliance", "Risk", "Valuation", "Treasury", "Apex Group", "SS&C", "Citco", "Alter Domus"],
  alternates: {
    canonical: "/en/deal-101/fund-ops-ch01-three-tier-structure",
    languages: {
      ko: "/deal-101/fund-ops-ch01-three-tier-structure",
      en: "/en/deal-101/fund-ops-ch01-three-tier-structure",
      "x-default": "/deal-101/fund-ops-ch01-three-tier-structure",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    title: "Fund Ops Ch.1 — Front, middle, back office: three lenses on running a fund",
    description: "The three principles of separation · Q1 2026 top 10 fund admins · US vs Korea comp ladders · entry routes and careers",
    images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() {
  return <MaFundOps01Client lang="en" />;
}
