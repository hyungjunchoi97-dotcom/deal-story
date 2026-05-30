/**
 * Learn — Unified Concept Hub (EN)
 */
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryHero from "@/components/CategoryHero";
import LearnIndexClient from "@/app/learn/LearnIndexClient";

export const metadata: Metadata = {
  title: "Learn — IB & PE Concept Archive | Deal Story",
  description:
    "M&A, LBO, Valuation, FDD, DCM, ECM, FIG, Structured, LevFin — core concepts from real deals and capital markets, explained with the cases they came from.",
  alternates: {
    canonical: "/en/learn",
    languages: { ko: "/learn", en: "/en/learn", "x-default": "/learn" },
  },
  openGraph: {
    type: "website",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    images: [
      { url: "/api/og?lang=en", width: 1200, height: 630, alt: "Deal Story — Learn" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og?lang=en"],
  },
};

export default function LearnIndexPageEn() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <CategoryHero
          lang="en"
          breadcrumb="Learn"
          title="Learn"
          description="Core concepts from real deals and capital markets. Each page links to the deals or market events where the concept actually showed up."
          crossLinks={[
            {
              key: "market",
              href: "/en/market",
              label: "Capital markets landmark deals → Market Story",
              badge: "M",
            },
          ]}
        />

        <div className="max-w-3xl mx-auto px-5 py-10">
          <LearnIndexClient lang="en" />
        </div>
      </main>
      <Footer />
    </>
  );
}
