/**
 * Notes — Index (EN)
 */
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryHero from "@/components/CategoryHero";
import { ALL_NOTES } from "@/data/notes";
import { SITE_URL } from "@/lib/site";
import NotesIndexClient from "@/app/notes/NotesIndexClient";

export const metadata: Metadata = {
  title: "Notes — Financial & Investment Analysis | Deal Story",
  description:
    "Korea Discount, activist investing, global capital markets — in-depth notes grounded in data and primary sources.",
  keywords: [
    "Korea discount", "activist investing", "inheritance tax", "Japan TSE reform",
    "value-up program", "PBR", "Elliott Management", "Align Partners", "corporate governance",
  ],
  alternates: {
    canonical: "/en/notes",
    languages: { ko: "/notes", en: "/en/notes", "x-default": "/notes" },
  },
  openGraph: {
    title: "Notes — Financial & Investment Analysis | Deal Story",
    description: "In-depth financial and investment analysis notes grounded in data and primary sources.",
    type: "website",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    images: [{ url: "/api/og?lang=en", width: 1200, height: 630, alt: "Deal Story — Notes" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og?lang=en"],
  },
};

export default function NotesPageEn() {
  const published = ALL_NOTES.filter((n) => n.status === "published");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Notes — Financial & Investment Analysis | Deal Story",
    description: "In-depth financial and investment analysis notes grounded in data and primary sources.",
    url: `${SITE_URL}/en/notes`,
    publisher: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
    inLanguage: "en",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <CategoryHero
          lang="en"
          breadcrumb="Notes"
          title="Notes"
          description="Korea discount, activist investing, global capital markets — data-driven, source-backed analytical notes on finance and investing."
          crossLinks={[
            { key: "deals", href: "/en/deals", label: "Real deal cases → Deal Archive", badge: "D" },
            { key: "deal-101", href: "/en/deal-101", label: "Concept dictionary → Deal 101", badge: "101" },
          ]}
        />

        {/* ── Notes list ────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto px-5 py-10">
          <NotesIndexClient notes={published} lang="en" />
        </div>
      </main>
      <Footer />
    </>
  );
}
