/**
 * Deal 101 / EV/EBITDA Multiple (EN)
 * ─ Concept explainer + reverse-linked deals
 */
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ALL_DEALS_EN } from "@/data/deals/en";
import { DEAL_CATEGORY_COLOR } from "@/lib/types";
import { DEAL_CATEGORY_LABEL_EN } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "EV/EBITDA Multiple Explained — Deal 101 | Deal Story",
  description:
    "The go-to valuation metric in M&A. From the formula and industry benchmarks to real deal applications — everything you need to understand EV/EBITDA in one page.",
  alternates: {
    canonical: "/en/deal-101/ev-ebitda",
    languages: {
      ko: "/deal-101/ev-ebitda",
      en: "/en/deal-101/ev-ebitda",
      "x-default": "/deal-101/ev-ebitda",
    },
  },
};

const CONCEPT_SLUG = "/deal-101/ev-ebitda";

const BENCHMARKS = [
  { sector: "Enterprise Software", range: "15 – 30×", note: "Subscription transition, ARR growth premium" },
  { sector: "Gaming & Media IP", range: "15 – 25×", note: "IP perpetuity value, platform synergies" },
  { sector: "Luxury & Consumer", range: "12 – 22×", note: "Brand heritage premium" },
  { sector: "Real Estate / Asset Mgmt", range: "12 – 22×", note: "AUM growth & platform premium" },
  { sector: "Retail / Hypermarket", range: "6 – 15×", note: "Structural decline, e-commerce headwind" },
  { sector: "Semiconductors / Hardware", range: "10 – 20×", note: "Cycle sensitivity, heavy capex" },
  { sector: "Energy / Infrastructure", range: "5 – 12×", note: "Capital intensity, regulatory exposure" },
];

const LIMITATIONS = [
  {
    icon: "✕",
    title: "Meaningless for EBITDA-negative companies",
    body: "A negative denominator renders the multiple useless. High-growth SaaS deals like Salesforce/Slack use EV/Revenue or EV/ARR instead.",
  },
  {
    icon: "✕",
    title: "Ignores capex differences",
    body: "EBITDA doesn't deduct capital expenditure. Capital-intensive sectors (semiconductors, airlines) are better evaluated on EBIT or free cash flow.",
  },
  {
    icon: "✕",
    title: "Doesn't capture growth",
    body: "Two companies at the same EV/EBITDA but different growth rates are very different investments. Consider EV/EBITDA-to-growth or EV/NTM EBITDA for high-growth targets.",
  },
  {
    icon: "✕",
    title: "Cross-sector comparisons are invalid",
    body: "Software at 20× and retail at 20× are entirely different situations. Comparable company analysis only works within the same sector.",
  },
];

export default function EvEbitdaPageEn() {
  const relatedDeals = ALL_DEALS_EN.filter((deal) =>
    deal.concepts?.some((c) => c.href === CONCEPT_SLUG)
  );

  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── Breadcrumb + Hero ───────────────────────────── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-10">
            <nav className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 mb-5">
              <Link href="/en/deal-101" className="hover:text-blue-500 transition-colors">Deal 101</Link>
              <span>/</span>
              <span className="text-gray-600 dark:text-gray-300 font-medium">EV/EBITDA Multiple</span>
            </nav>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-[11px] font-semibold rounded-full px-2.5 py-0.5 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                Valuation
              </span>
              <span className="text-[11px] text-gray-400 dark:text-gray-500">Core Fundamental</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              EV/EBITDA Multiple
            </h1>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
              The starting point of any M&amp;A price conversation. Divide enterprise value by operating cash generation to quickly calibrate whether a deal is cheap or expensive.
            </p>
            <div className="mt-4">
              <Link href="/deal-101/ev-ebitda" className="text-xs text-gray-400 hover:text-blue-500 transition-colors">
                한국어로 읽기 →
              </Link>
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-12 space-y-14">

          {/* ── 1. Formula ───────────────────────────────── */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">The Formula</h2>
            <div className="rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 p-6 text-center mb-6">
              <p className="text-2xl font-black text-blue-700 dark:text-blue-300 font-mono tracking-tight">
                EV / EBITDA
              </p>
              <p className="mt-2 text-sm text-blue-600/70 dark:text-blue-400/70 font-mono">
                = (Market Cap + Net Debt) ÷ (Operating Income + D&A)
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 p-5">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Numerator — EV</p>
                <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-2">Enterprise Value</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-3">
                  The total cost to acquire a business outright — including assuming its debt. More relevant than market cap for M&A because buyers inherit the full capital structure.
                </p>
                <div className="space-y-1">
                  {[
                    ["Market Cap", "Share price × shares outstanding"],
                    ["＋ Debt", "Short + long-term financial debt"],
                    ["－ Cash", "Cash and cash equivalents"],
                    ["＝ EV", "True all-in cost for the acquirer"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between text-xs">
                      <span className="text-gray-500 dark:text-gray-400">{k}</span>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 p-5">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Denominator — EBITDA</p>
                <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-2">EBITDA</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-3">
                  A capital-structure-neutral proxy for operating cash generation. Strips out financing, tax, and accounting differences so you can compare companies across countries and structures.
                </p>
                <div className="space-y-1">
                  {[
                    ["E · Earnings", "Pre-interest, pre-tax = EBIT"],
                    ["B · Before", "—"],
                    ["I · Interest", "Removes capital structure effect"],
                    ["T · Tax", "Removes jurisdiction differences"],
                    ["D · Depreciation", "Removes PP&E accounting choices"],
                    ["A · Amortization", "Removes intangible write-downs"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between text-xs">
                      <span className="text-gray-500 dark:text-gray-400 font-mono">{k}</span>
                      <span className="text-gray-700 dark:text-gray-300">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ── 2. Why M&A Uses It ───────────────────────── */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Why M&A Uses This Metric</h2>
            <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                An acquirer doesn&apos;t just buy the equity — they take on the{" "}
                <strong className="text-gray-800 dark:text-gray-200">entire business including its debt</strong>.
                That&apos;s why EV-based metrics are more realistic at the negotiating table than P/E ratios.
                Two companies with identical earnings can have vastly different acquisition costs depending on their debt loads.
              </p>
              <p>
                EBITDA is the preferred denominator because it{" "}
                <strong className="text-gray-800 dark:text-gray-200">removes country, tax, and depreciation differences</strong>.
                In cross-border M&A, comparing a US company to a Japanese company requires stripping out the noise
                of different tax regimes and accounting treatments to isolate pure operating performance.
              </p>
              <p>
                In practice, EV/EBITDA is never used in isolation. Bankers{" "}
                <strong className="text-gray-800 dark:text-gray-200">triangulate across DCF, comparable companies, and precedent transactions</strong>{" "}
                to establish a price range. EV/EBITDA serves as the quick litmus test —
                &quot;how far off market consensus is this offer?&quot;
              </p>
            </div>
          </section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ── 3. Industry Benchmarks ───────────────────── */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Industry Benchmarks</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              Appropriate multiples vary significantly by sector, growth profile, and market cycle. The ranges below reflect early-2020s global M&A norms.
            </p>
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700/60 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 dark:border-gray-700/60 bg-gray-50 dark:bg-gray-800/50">
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400">Sector</th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400">EV/EBITDA Range</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 hidden sm:table-cell">Key Driver</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700/60">
                  {BENCHMARKS.map((b) => (
                    <tr key={b.sector} className="bg-white dark:bg-gray-900">
                      <td className="px-4 py-3 font-medium text-gray-800 dark:text-gray-200">{b.sector}</td>
                      <td className="px-4 py-3 text-right font-mono font-bold text-blue-600 dark:text-blue-400">{b.range}</td>
                      <td className="px-4 py-3 text-gray-500 dark:text-gray-400 text-xs hidden sm:table-cell">{b.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ── 4. Deals That Feature This Concept ───────── */}
          {relatedDeals.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Deals Where This Concept Appears
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Real transactions where EV/EBITDA was central to the valuation narrative.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {relatedDeals.map((deal) => {
                  const concept = deal.concepts.find((c) => c.href === CONCEPT_SLUG);
                  return (
                    <Link
                      key={deal.slug}
                      href={`/en/deals/${deal.slug}`}
                      className="group block rounded-xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 p-4 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-white font-black text-[9px] flex-shrink-0 ${deal.acquirer.bg}`}>
                          {deal.acquirer.initials}
                        </div>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-300 dark:text-gray-600" aria-hidden="true">
                          <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                        </svg>
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-white font-black text-[9px] flex-shrink-0 ${deal.target.bg}`}>
                          {deal.target.initials}
                        </div>
                        <span className={`ml-auto text-[10px] font-semibold rounded-full px-2 py-0.5 ${DEAL_CATEGORY_COLOR[deal.category]}`}>
                          {DEAL_CATEGORY_LABEL_EN[deal.category]}
                        </span>
                      </div>
                      <h3 className="text-xs font-bold text-gray-900 dark:text-gray-100 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1.5 line-clamp-2">
                        {deal.title}
                      </h3>
                      {concept?.description && (
                        <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
                          {concept.description}
                        </p>
                      )}
                      <p className="mt-2 text-xs font-bold text-amber-500">
                        {deal.dealSummary.dealValueDisplay.split("(")[0].trim()}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ── 5. Limitations ───────────────────────────── */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Limitations</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              EV/EBITDA is powerful but not universal. Use alternative metrics in these situations.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {LIMITATIONS.map((l) => (
                <div key={l.title} className="rounded-xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 p-4">
                  <div className="flex items-start gap-2.5">
                    <span className="text-rose-400 font-black text-sm flex-shrink-0 mt-0.5">{l.icon}</span>
                    <div>
                      <h3 className="text-xs font-bold text-gray-900 dark:text-gray-100 mb-1">{l.title}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{l.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ── 6. Related Concepts ──────────────────────── */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Related Concepts</h2>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "EV/Sales Multiple", href: "/en/deal-101/ev-sales", note: "For EBITDA-negative companies" },
                { label: "ARR Multiple", href: "/en/deal-101/arr-multiple", note: "SaaS-specific" },
                { label: "LBO", href: "/en/deal-101/lbo", note: "Leveraged buyout structure" },
                { label: "DCF", href: "/en/deal-101/dcf", note: "Intrinsic value approach" },
                { label: "Acquisition Premium", href: "/en/deal-101/acquisition-premium", note: "Control premium over market" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 px-3.5 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item.label}
                  <span className="text-gray-400 dark:text-gray-500">{item.note}</span>
                </Link>
              ))}
            </div>
          </section>

          <div className="text-center pt-2">
            <Link href="/en/deal-101" className="text-sm text-gray-400 hover:text-blue-500 transition-colors">
              ← All Deal 101 concepts
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
