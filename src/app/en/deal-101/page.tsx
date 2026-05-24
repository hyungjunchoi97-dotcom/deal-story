import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Deal 101 — M&A Fundamentals Guide | Deal Story",
  description:
    "From deal process to valuation methodology to key terms — a concise guide to understanding M&A deals, whether you're new to the space or brushing up on the fundamentals.",
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
    images: [
      { url: "/api/og?lang=en", width: 1200, height: 630, alt: "Deal Story — Deal 101" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og?lang=en"],
  },
};

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Strategy & Target Screening",
    body: "Define the acquisition thesis and screen the universe of potential targets. Filter by strategic fit, financial health, and synergy potential — narrowing from a longlist down to a shortlist.",
    tags: ["Strategy team", "IB advisor"],
  },
  {
    step: "02",
    title: "Outreach & Letter of Intent",
    body: "Approach target management confidentially and submit an LOI (Letter of Intent). The LOI outlines the indicative price range, exclusivity period, and key deal conditions.",
    tags: ["LOI", "Exclusivity"],
  },
  {
    step: "03",
    title: "Due Diligence",
    body: "Run financial, legal, tax, and commercial diligence simultaneously. Thousands of documents are reviewed via a virtual data room (VDR). Identified risks feed into price adjustments or representations & warranties.",
    tags: ["Financial DD", "Legal DD", "Tax DD"],
  },
  {
    step: "04",
    title: "Deal Structure & Valuation",
    body: "Determine the legal structure (stock vs. asset deal, LBO, etc.) and earnout terms. Cross-check DCF, comparable company multiples, and precedent transactions to triangulate the final offer price.",
    tags: ["SPA", "LBO", "Earnout"],
  },
  {
    step: "05",
    title: "SPA Signing & Regulatory Approval",
    body: "Execute the definitive purchase agreement (SPA) and obtain required regulatory clearances. Cross-border deals may require approval from the EU, US DOJ/FTC, China SAMR, and other jurisdictions.",
    tags: ["SPA", "Antitrust", "CFIUS"],
  },
  {
    step: "06",
    title: "Closing & Post-Merger Integration",
    body: "Once all conditions are met, funds transfer and ownership changes hands. PMI (Post-Merger Integration) then aligns systems, culture, and headcount to capture the expected synergies.",
    tags: ["Closing", "PMI", "Integration"],
  },
];

const VALUATION_METHODS = [
  {
    name: "EV/EBITDA Multiples",
    subtitle: "Comparable Company Analysis",
    desc: "Derive an EV/EBITDA multiple from publicly traded peers and apply it to the target. Fast and market-grounded, but may miss target-specific nuances.",
    formula: "EV = EBITDA × Multiple",
    color: "blue",
  },
  {
    name: "DCF",
    subtitle: "Discounted Cash Flow",
    desc: "Discount projected free cash flows at the WACC to arrive at present value. Theoretically rigorous, but highly sensitive to growth rate and discount rate assumptions.",
    formula: "V = Σ FCFt / (1+WACC)ᵗ + TV",
    color: "emerald",
  },
  {
    name: "Precedent Transactions",
    subtitle: "Transaction Comps",
    desc: "Reference multiples paid in comparable past M&A deals. Already reflects control premiums, making it a powerful anchor for seller-side negotiations.",
    formula: "EV = EBITDA × Deal Multiple",
    color: "amber",
  },
];

const GLOSSARY = [
  {
    term: "EV (Enterprise Value)",
    def: "Total economic value of a business. Calculated as market cap + net debt (debt minus cash). The baseline for M&A pricing.",
  },
  {
    term: "EBITDA",
    def: "Earnings Before Interest, Taxes, Depreciation & Amortization. A proxy for operating cash generation and the denominator in most valuation multiples.",
  },
  {
    term: "LBO (Leveraged Buyout)",
    def: "Acquiring a company using significant debt, secured against the target's assets and cash flows. The signature strategy of PE funds.",
  },
  {
    term: "Earnout",
    def: "A contingent payment structure where the seller receives additional consideration if post-close performance targets are met. Used to bridge valuation gaps.",
  },
  {
    term: "Break-up Fee",
    def: "A termination fee paid if one party walks away from a signed deal. Typically 1–4% of deal value. Signals deal conviction and negotiating leverage.",
  },
  {
    term: "MAC (Material Adverse Change)",
    def: "A clause allowing the buyer to walk away if a significant negative event occurs between signing and closing. Scope is heavily negotiated.",
  },
  {
    term: "R&W (Representations & Warranties)",
    def: "Factual statements made by deal parties in the purchase agreement. Creates a legal mechanism to recover losses from risks missed during diligence.",
  },
  {
    term: "Goodwill",
    def: "The excess of the purchase price over the fair value of net identifiable assets. Captures brand value, customer relationships, and synergy expectations.",
  },
  {
    term: "WACC",
    def: "Weighted Average Cost of Capital. The DCF discount rate — a blend of after-tax cost of debt and cost of equity, weighted by capital structure.",
  },
  {
    term: "Working Capital Adjustment",
    def: "A post-close true-up mechanism that adjusts the purchase price if actual working capital at closing differs from the target level agreed at signing.",
  },
  {
    term: "Staple Financing",
    def: "A financing package arranged by the sell-side bank and offered to all bidders as part of the sale process — effectively 'stapled' to the deal.",
  },
  {
    term: "Carve-out",
    def: "The separation and sale of a specific business unit or subsidiary to a third party. Common when a conglomerate wants to focus on core operations.",
  },
];

const colorMap: Record<string, string> = {
  blue: "border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/20",
  emerald: "border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/20",
  amber: "border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20",
};
const formulaColorMap: Record<string, string> = {
  blue: "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300",
  emerald: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300",
  amber: "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300",
};

export default function Deal101PageEn() {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* Hero */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-10">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 rounded-full px-3 py-1 mb-4">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
              Beginner to Pro
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Deal 101
            </h1>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
              How a deal starts, how price is determined, and what fills a 200-page purchase agreement —
              the essential M&amp;A fundamentals, distilled.
            </p>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-12 space-y-16">

          {/* ── 1. Deal Process ───────────────────────────────────── */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">The Deal Process</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
              Most M&A deals unfold over 6–18 months across the following stages.
            </p>

            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700" aria-hidden="true" />
              <ol className="space-y-6">
                {PROCESS_STEPS.map((s) => (
                  <li key={s.step} className="relative flex gap-5">
                    <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-white dark:bg-gray-900 border-2 border-blue-500 dark:border-blue-400 flex items-center justify-center">
                      <span className="text-xs font-black text-blue-600 dark:text-blue-400">{s.step}</span>
                    </div>
                    <div className="flex-1 min-w-0 pb-2">
                      <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-1">{s.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-2">{s.body}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {s.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-medium bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-full px-2.5 py-0.5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ── 2. Valuation ──────────────────────────────────────── */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Valuation Methodology</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              In practice, bankers triangulate across three methods to establish a price range.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {VALUATION_METHODS.map((m) => (
                <div key={m.name} className={`rounded-2xl border p-5 ${colorMap[m.color]}`}>
                  <p className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">{m.subtitle}</p>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-2">{m.name}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4">{m.desc}</p>
                  <code className={`text-[11px] font-mono font-semibold rounded-lg px-3 py-1.5 block text-center ${formulaColorMap[m.color]}`}>
                    {m.formula}
                  </code>
                </div>
              ))}
            </div>
          </section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ── 3. Deal Structures ────────────────────────────────── */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Deal Structures</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              The legal structure chosen determines tax treatment, liability exposure, and integration complexity.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Stock Deal",
                  pros: ["Simple; business continuity preserved", "Contracts and licenses transfer automatically"],
                  cons: ["Buyer inherits all liabilities — known and unknown", "Minority shareholder issues can arise"],
                  badge: "Most common",
                  badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
                },
                {
                  title: "Asset Deal",
                  pros: ["Buyer selects specific assets to acquire", "Contingent liabilities can be ring-fenced"],
                  cons: ["Complex transfer process for each asset class", "Contracts and customer consents must be re-obtained"],
                  badge: "Risk isolation",
                  badgeColor: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
                },
                {
                  title: "Merger",
                  pros: ["Two companies legally combine into one", "Economies of scale realized immediately"],
                  cons: ["Requires shareholder votes and court approval", "Cultural integration is complex"],
                  badge: "Strategic union",
                  badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
                },
                {
                  title: "LBO (Leveraged Buyout)",
                  pros: ["Minimizes equity outlay → high IRR potential", "Core PE fund strategy"],
                  cons: ["Heavy debt load limits financial flexibility", "Vulnerable to rate hikes and downturns"],
                  badge: "PE core structure",
                  badgeColor: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 p-5"
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{item.title}</h3>
                    <span className={`text-[10px] font-semibold rounded-full px-2 py-0.5 flex-shrink-0 ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {item.pros.map((p) => (
                      <p key={p} className="text-xs text-gray-600 dark:text-gray-400 flex gap-2">
                        <span className="text-emerald-500 font-bold flex-shrink-0">+</span>{p}
                      </p>
                    ))}
                    {item.cons.map((c) => (
                      <p key={c} className="text-xs text-gray-600 dark:text-gray-400 flex gap-2">
                        <span className="text-rose-400 font-bold flex-shrink-0">–</span>{c}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ── 4. Glossary ───────────────────────────────────────── */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Key Terms</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              12 terms that appear repeatedly in deal documents and coverage.
            </p>
            <dl className="grid gap-3 sm:grid-cols-2">
              {GLOSSARY.map((g) => (
                <div
                  key={g.term}
                  className="rounded-xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 px-4 py-3.5"
                >
                  <dt className="text-xs font-bold text-gray-900 dark:text-gray-100 mb-1">{g.term}</dt>
                  <dd className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{g.def}</dd>
                </div>
              ))}
            </dl>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
