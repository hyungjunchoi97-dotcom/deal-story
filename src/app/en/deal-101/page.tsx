/**
 * Deal 101 — Concept Hub Index (EN)
 * Mirrors /deal-101/page.tsx structure in English
 */
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ALL_DEALS_EN } from "@/data/deals/en";

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

// ── Concept catalog ──────────────────────────────────────────────
const CONCEPT_CATALOG = [
  // Valuation
  {
    slug: "ev-ebitda",
    term: "EV/EBITDA Multiple",
    tagline: "The starting point of any M&A price conversation — enterprise value divided by operating cash generation",
    category: "Valuation",
    published: true,
  },
  {
    slug: "adjusted-ebitda",
    term: "Adjusted EBITDA",
    tagline: "EV = Multiple × EBITDA — why every add-back is a battle, who benefits, and how FDD teams push back",
    category: "Valuation",
    published: true,
  },
  {
    slug: "ev-sales",
    term: "EV/Sales Multiple",
    tagline: "Revenue-based valuation for high-growth companies with negative EBITDA",
    category: "Valuation",
    published: false,
  },
  {
    slug: "arr-multiple",
    term: "ARR Multiple",
    tagline: "SaaS-specific valuation — enterprise value relative to annual recurring revenue",
    category: "Valuation",
    published: false,
  },
  {
    slug: "acquisition-premium",
    term: "Acquisition Premium",
    tagline: "How much more the buyer pays versus the market price — the control premium",
    category: "Valuation",
    published: false,
  },
  {
    slug: "saas-valuation",
    term: "SaaS Valuation",
    tagline: "ARR, NRR, and growth-led valuation methodology for subscription software businesses",
    category: "Valuation",
    published: false,
  },
  // Deal Structure
  {
    slug: "ma-process",
    term: "The M&A Process, End to End",
    tagline: "Six phases from strategy to closing — stakeholders, key documents, and why deals succeed or fail",
    category: "Deal Structure",
    published: true,
  },
  {
    slug: "lbo",
    term: "LBO (Leveraged Buyout)",
    tagline: "Using the target's own assets and cash flows as collateral to minimize equity outlay — the PE core strategy",
    category: "Deal Structure",
    published: false,
  },
  {
    slug: "tender-offer",
    term: "Tender Offer",
    tagline: "The acquirer goes directly to shareholders with a purchase offer, bypassing the board",
    category: "Deal Structure",
    published: false,
  },
  {
    slug: "spinoff",
    term: "Spin-off",
    tagline: "Separating a business unit into an independent company and distributing shares to existing investors",
    category: "Deal Structure",
    published: false,
  },
  {
    slug: "reverse-morris-trust",
    term: "Reverse Morris Trust",
    tagline: "A tax-efficient M&A structure: spin off a subsidiary, then merge it with an acquirer",
    category: "Deal Structure",
    published: false,
  },
  {
    slug: "break-fee",
    term: "Break-up Fee",
    tagline: "Termination fee paid if a party walks away — signals deal conviction and negotiating leverage",
    category: "Deal Structure",
    published: false,
  },
  {
    slug: "mac-clause",
    term: "MAC Clause",
    tagline: "Allows the buyer to exit if a materially adverse change occurs between signing and closing",
    category: "Deal Structure",
    published: false,
  },
  // Regulatory & Legal
  {
    slug: "antitrust",
    term: "Antitrust Review",
    tagline: "How competition authorities assess whether a deal harms market competition",
    category: "Regulatory & Legal",
    published: false,
  },
  {
    slug: "regulatory-risk",
    term: "Regulatory Risk in M&A",
    tagline: "The uncertainty that regulators impose conditions, require divestitures, or block a deal outright",
    category: "Regulatory & Legal",
    published: false,
  },
  // Strategy
  {
    slug: "strategic-ma",
    term: "Strategic M&A",
    tagline: "Acquisitions driven by market position, synergies, and capability — not financial returns alone",
    category: "Strategy",
    published: false,
  },
  {
    slug: "vertical-integration",
    term: "Vertical Integration",
    tagline: "Controlling the full supply chain from raw materials to distribution under one entity",
    category: "Strategy",
    published: false,
  },
  {
    slug: "subscription-economy",
    term: "Subscription Economy",
    tagline: "The shift from one-time sales to recurring revenue — driving ARR, lock-in, and LTV",
    category: "Strategy",
    published: false,
  },
  {
    slug: "platform-strategy",
    term: "Platform Strategy",
    tagline: "Connecting products and partners on a core platform to maximize ecosystem value",
    category: "Strategy",
    published: false,
  },
  {
    slug: "competitive-moat",
    term: "Competitive Moat",
    tagline: "Durable competitive advantages that are difficult for competitors to replicate",
    category: "Strategy",
    published: false,
  },
];

const CATEGORIES = ["Valuation", "Deal Structure", "Regulatory & Legal", "Strategy"] as const;

const CATEGORY_COLOR: Record<string, string> = {
  "Valuation":          "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  "Deal Structure":     "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  "Regulatory & Legal": "bg-rose-50 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300",
  "Strategy":           "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
};

export default function Deal101IndexPageEn() {
  const publishedCount = CONCEPT_CATALOG.filter((c) => c.published).length;
  const totalCount = CONCEPT_CATALOG.length;

  // Count linked deals per concept
  const dealCountBySlug: Record<string, number> = {};
  for (const concept of CONCEPT_CATALOG) {
    const href = `/deal-101/${concept.slug}`;
    dealCountBySlug[concept.slug] = ALL_DEALS_EN.filter((d) =>
      d.concepts?.some((c) => c.href === href)
    ).length;
  }

  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-10">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 rounded-full px-3 py-1 mb-4">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
              Concept × Deal Archive
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Deal 101</h1>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
              Core financial concepts from real M&A deals — explained in context.
              Each concept page links directly to the deals where it appeared.
            </p>
            <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">
              {publishedCount} published · {totalCount - publishedCount} coming soon
            </p>
          </div>
        </section>

        {/* ── Concept grid by category ──────────────────────────── */}
        <div className="max-w-3xl mx-auto px-5 py-10 space-y-12">
          {CATEGORIES.map((cat) => {
            const concepts = CONCEPT_CATALOG.filter((c) => c.category === cat);
            return (
              <section key={cat}>
                <div className="flex items-center gap-2 mb-5">
                  <span className={`text-[11px] font-bold rounded-full px-2.5 py-0.5 ${CATEGORY_COLOR[cat]}`}>
                    {cat}
                  </span>
                  <span className="text-xs text-gray-400 dark:text-gray-500">{concepts.length} concepts</span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {concepts.map((concept) => {
                    const dealCount = dealCountBySlug[concept.slug] ?? 0;

                    if (concept.published) {
                      return (
                        <Link
                          key={concept.slug}
                          href={`/en/deal-101/${concept.slug}`}
                          className="group block rounded-xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 p-4 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md transition-all"
                        >
                          <div className="flex items-start justify-between gap-2 mb-1.5">
                            <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                              {concept.term}
                            </h3>
                            <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 rounded-full px-2 py-0.5 flex-shrink-0 whitespace-nowrap">
                              Read →
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-3">
                            {concept.tagline}
                          </p>
                          {dealCount > 0 && (
                            <p className="text-[11px] text-gray-400 dark:text-gray-500">
                              Appears in {dealCount} {dealCount === 1 ? "deal" : "deals"}
                            </p>
                          )}
                        </Link>
                      );
                    }

                    // Coming soon
                    return (
                      <div
                        key={concept.slug}
                        className="rounded-xl border border-dashed border-gray-200 dark:border-gray-700/40 bg-gray-50/50 dark:bg-gray-900/30 p-4"
                      >
                        <div className="flex items-start justify-between gap-2 mb-1.5">
                          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-500 leading-snug">
                            {concept.term}
                          </h3>
                          <span className="text-[10px] text-gray-400 dark:text-gray-600 bg-gray-100 dark:bg-gray-800 rounded-full px-2 py-0.5 flex-shrink-0 whitespace-nowrap">
                            Coming soon
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 dark:text-gray-500 leading-relaxed">
                          {concept.tagline}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

      </main>
      <Footer />
    </>
  );
}
