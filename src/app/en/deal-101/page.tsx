/**
 * Deal 101 — Concept Hub Index (EN)
 * Mirrors /deal-101/page.tsx structure in English
 */
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryHero from "@/components/CategoryHero";
import Deal101IndexClient from "@/app/deal-101/Deal101IndexClient";

export const metadata: Metadata = {
  title: "Deal 101 — M&A Concept Archive | Deal Story",
  description:
    "EV/EBITDA, LBO, antitrust — core financial concepts from real deals, explained with the cases they came from.",
  alternates: {
    canonical: "/en/deal-101",
    languages: {
      ko: "/deal-101",
      en: "/en/deal-101",
      "x-default": "/deal-101",
    },
  },
  openGraph: {
    type: "website",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    images: [
      { url: "/api/og?lang=en", width: 1200, height: 630, alt: "Deal Story — Deal 101" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og?lang=en"],
  },
};

export default function Deal101IndexPageEn() {
  return (
    <>
      <Header />
      <main className="flex-1">

        <CategoryHero
          lang="en"
          breadcrumb="Deal 101"
          title="Deal 101"
          description="Core financial concepts from real M&A deals — explained in context. Each concept page links directly to the deals where it appeared."
          crossLinks={[
            {
              key: "market",
              href: "/en/market",
              label: "Capital markets landmark deals → Market Story",
              badge: "M",
            },
          ]}
        />

        {/* ── Accordion folders ─────────────────────────────────── */}
        <div className="max-w-3xl mx-auto px-5 py-10">
          <Deal101IndexClient lang="en" />
        </div>

      </main>
      <Footer />
    </>
  );
}
