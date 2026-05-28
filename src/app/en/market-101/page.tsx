import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryHero from "@/components/CategoryHero";
import Market101IndexClientEn from "@/app/market-101/Market101IndexClientEn";

export const metadata: Metadata = {
  title: "Market 101 — Capital Markets Concept Dictionary | Deal Story",
  description:
    "DCM, ECM, S&T, FIG, and Sovereign — core capital markets concepts explained with real deal examples.",
  alternates: {
    canonical: "/en/market-101",
    languages: { ko: "/market-101", en: "/en/market-101", "x-default": "/market-101" },
  },
};

export default function Market101PageEn() {
  return (
    <>
      <Header />
      <main className="flex-1">

        <CategoryHero
          lang="en"
          breadcrumb="Market 101"
          title="Market 101"
          description="Capital markets concept dictionary — DCM, ECM, S&T, FIG, Sovereign, and LevFin explained with real deal examples. Click a category folder to expand."
          crossLinks={[
            {
              key: "market",
              href: "/en/market",
              label: "Capital markets landmark deals → Market Story",
              badge: "M",
            },
            {
              key: "deal-101",
              href: "/en/deal-101",
              label: "M&A concept dictionary → Deal 101",
              badge: "101",
            },
          ]}
        />

        {/* ── Folder UI (Client Component) ── */}
        <Market101IndexClientEn />

      </main>
      <Footer />
    </>
  );
}
