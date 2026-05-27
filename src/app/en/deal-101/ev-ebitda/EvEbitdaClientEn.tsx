"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DEAL_CATEGORY_COLOR } from "@/lib/types";
import { DEAL_CATEGORY_LABEL_EN } from "@/lib/i18n";
import type { DealCategory } from "@/lib/types";
import { motion } from "framer-motion";

// ── Animation variants ──────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};
const stagger = (delay = 0.08) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
});

// ── Types ───────────────────────────────────────────────────────
interface RelatedDeal {
  slug: string;
  title: string;
  category: DealCategory;
  acquirer: { initials: string; bg: string; label: string };
  target: { initials: string; bg: string; label: string };
  dealValueDisplay: string;
  conceptDescription: string;
}

// ── Data ────────────────────────────────────────────────────────
const DEAL_SNAPSHOTS = [
  { deal: "Microsoft → Activision Blizzard", multiple: "21.5×", note: "Gaming IP perpetuity and Game Pass bundle synergies priced in" },
  { deal: "Broadcom → VMware", multiple: "15.3×", note: "Low end of enterprise software range — subscription transition uncertainty discount" },
  { deal: "Blackstone → Kenedix", multiple: "19.7×", note: "Platform premium over Japan real estate AM average (10–12×)" },
  { deal: "MBK Partners → Homeplus", multiple: "22.5×", note: "Includes embedded real estate value — operating performance was effectively inflated" },
  { deal: "Elon Musk → Twitter/X", multiple: "~72×", note: "Departed from financial logic — public square control and super-app optionality premium" },
];

const DEBT_ITEMS = [
  { title: "Senior Secured Loans", body: "First-priority debt backed by company assets. Recovered first in bankruptcy. The primary funding source in LBO deals.", warn: false },
  { title: "Unsecured Bonds / Notes", body: "Issued on credit alone, no collateral. Higher yield than secured debt, subordinate in bankruptcy. Included at face value in EV.", warn: false },
  { title: "Convertible Notes", body: "Bonds convertible into equity. If stock price is above conversion price: equity dilution treatment. Below: debt treatment. One of the most debated items between deal teams.", warn: true },
  { title: "Operating Lease Liabilities (IFRS 16 / ASC 842)", body: "Since 2019, operating leases appear on the balance sheet. Airlines and retailers saw billions in 'new debt' overnight — and their EVs rose accordingly. Essential to flag when comparing pre- vs. post-2019 deals.", warn: true },
  { title: "Pension Deficit", body: "The underfunded shortfall in defined-benefit (DB) pension plans. Some deal teams include this in Net Debt to calculate 'pension-adjusted EV.' Including vs. excluding can move EV by hundreds of millions.", warn: true },
  { title: "Earnouts & Contingent Liabilities", body: "Conditional payment obligations from prior acquisitions. Not yet a cash outflow but economically equivalent to debt. Missed in diligence, they become post-close landmines.", warn: true },
];

const CASH_ITEMS = [
  { title: "Restricted Cash", body: "Cash legally or contractually earmarked for a specific purpose: escrow accounts, regulatory reserves, debt service reserves. Should be excluded or discounted from EV.", warn: true },
  { title: "Trapped Cash (Overseas Subsidiaries)", body: "Cash locked in capital-controlled countries like China or India. The parent can't freely repatriate it. Apple famously had over $252B held offshore in 2017 — a significant portion was trapped.", warn: true },
  { title: "Minimum Operating Cash", body: "The liquidity floor needed to run day-to-day operations. Only 'excess cash' above this floor should be deducted from EV. Retail businesses typically require 1–2% of annual revenue as minimum cash.", warn: false },
];

const DA_INSIGHTS = [
  {
    title: "D&A is 'non-cash' — so it doesn't matter. The most dangerous oversimplification.",
    body: `The most cited reason for preferring EBITDA is that "D&A is non-cash, so add it back." This is the most dangerous misconception in valuation.

Depreciation is the deferred recognition of capex already spent. If you bought a factory machine for $100M, you depreciate $10M per year over 10 years. The cash left in Year 1 — but D&A hits the income statement for a decade.

For capital-intensive businesses (manufacturing, airlines, telecom), using EBITDA as a proxy for cash generation massively overstates real earning power. This is precisely why Warren Buffett called EBITDA "bullshit earnings."`,
    quote: `"References to EBITDA make us shudder — does management think the tooth fairy pays for capital expenditures?" — Warren Buffett, 2002 Berkshire Hathaway Letter`,
  },
  {
    title: "Hidden D&A inside COGS — the most common beginner mistake",
    body: `Most people try to find D&A as a separate line item on the income statement. But for manufacturers, plant and equipment depreciation is already embedded in COGS (Cost of Goods Sold).

Example: semiconductor fab depreciation → included in wafer manufacturing cost → flows through COGS.

To calculate EBITDA accurately, you must find the actual D&A figure in the cash flow statement (non-cash adjustments section) or the financial statement footnotes. The income statement alone won't show it.`,
    quote: null,
  },
  {
    title: "The IFRS 16 airline EBITDA surge — what actually happened",
    body: `When IFRS 16 (operating lease capitalization) took effect in 2019, airline EBITDA jumped 30–50%. The mechanics are simple.

Pre-IFRS 16: lease payments → operating expense → deducted from EBITDA
Post-IFRS 16: lease recognized as asset + liability → lease payment splits into depreciation (D) + interest (I) → both added back to EBITDA

Korean Air's EBITDA jumped by hundreds of billions of KRW after IFRS 16, with no change in actual cash flows. The lease payments were still going out. When comparing across the 2019 boundary, always separate pre- and post-IFRS 16 figures.`,
    quote: null,
  },
  {
    title: "PPA Amortization — the M&A accounting distortion",
    body: `After an acquisition, the acquirer's EBITDA can appear to deteriorate. The culprit is PPA (Purchase Price Allocation) — the acquirer allocates the purchase price to customer relationships, patents, and brand, then amortizes those intangibles.

Example: Broadcom acquiring VMware allocated tens of billions to intangible assets → massive amortization charges every quarter → EBIT drops sharply, but EBITDA (D&A add-back) is unaffected.

This is why PE investors prefer "Cash EBITDA" or "Adjusted EBITDA." PPA amortization has zero bearing on the underlying business's competitive cash generation.`,
    quote: null,
  },
];

const INTEREST_INSIGHTS = [
  {
    title: "Capital structure neutralization — same business, different leverage",
    body: `Imagine two identical convenience store chains. Company A has no debt; Company B has $300M of debt. Same operating performance, but B's interest expense crushes net income. Under P/E, A looks far more expensive. EV/EBITDA strips out interest before comparison, putting both companies on equal footing.`,
  },
  {
    title: "PIK Interest — the debt bomb that accumulates silently",
    body: `Payment-in-Kind (PIK) interest is paid not in cash but in new debt instruments. In LBO deals, junior lenders accept PIK in exchange for higher rates. Without cash pressure, interest compounds invisibly until maturity — then hits all at once. EBITDA looks healthy while the PIK bomb ticks.`,
  },
  {
    title: "Capitalized Interest",
    body: `Interest on debt used to fund construction or development can be capitalized into the asset's cost rather than expensed immediately. Real estate developers and large infrastructure builders use this treatment. Capitalized interest never appears as interest expense on the P&L, leaving both EBIT and EBITDA unaffected — while cash is actually leaving the business.`,
  },
];

const TAX_INSIGHTS = [
  {
    title: "Effective rate vs. statutory rate — what actually matters",
    body: `The statutory corporate tax rate (e.g., US 21%, Korea 24%, Ireland 12.5%) is public. The effective tax rate — what a company actually pays after deductions, credits, and tax planning — is usually lower and varies widely. EBITDA eliminates this entire layer, enabling direct comparison of operating performance across jurisdictions.`,
  },
  {
    title: "NOL (Net Operating Loss) — the hidden tax shield",
    body: `A company with accumulated tax losses can offset future taxable income, reducing cash taxes for years. This creates a real economic asset — the NOL tax shield. EBITDA ignores this entirely. In deals where NOL utilization is a core part of the investment thesis, EV/EBITDA can significantly understate the target's real value.`,
  },
];

const PL_ITEMS = [
  { label: "Revenue", note: "Top line", indent: 0, bold: false, highlight: false },
  { label: "– COGS", note: "incl. manufacturing D&A", indent: 1, bold: false, highlight: false },
  { label: "= Gross Profit", note: "", indent: 0, bold: true, highlight: false },
  { label: "– SG&A / R&D", note: "", indent: 1, bold: false, highlight: false },
  { label: "– D&A (if separate)", note: "sometimes hidden in COGS", indent: 1, bold: false, highlight: false },
  { label: "= EBIT (Operating Income)", note: "", indent: 0, bold: true, highlight: false },
  { label: "+ D&A add-back", note: "↑ the key adjustment", indent: 1, bold: false, highlight: true },
  { label: "= EBITDA", note: "← baseline for M&A multiples", indent: 0, bold: true, highlight: true },
  { label: "– Interest Expense", note: "", indent: 1, bold: false, highlight: false },
  { label: "= EBT (Pre-tax Income)", note: "", indent: 0, bold: false, highlight: false },
  { label: "– Income Taxes", note: "", indent: 1, bold: false, highlight: false },
  { label: "= Net Income", note: "P/E denominator", indent: 0, bold: true, highlight: false },
];

const BENCHMARKS = [
  { sector: "Enterprise Software (SaaS)", range: "15 – 30×", note: "Subscription model, ARR growth premium" },
  { sector: "Gaming & Media IP", range: "15 – 25×", note: "IP perpetuity, platform synergy value" },
  { sector: "Luxury & Consumer Brands", range: "12 – 22×", note: "Brand heritage premium" },
  { sector: "Real Estate / Asset Management", range: "12 – 22×", note: "AUM growth, platform premium" },
  { sector: "Retail / Hypermarket", range: "6 – 15×", note: "Structural decline, e-commerce headwind" },
  { sector: "Semiconductors / Hardware", range: "10 – 20×", note: "Cycle sensitivity, heavy capex" },
  { sector: "Energy / Infrastructure", range: "5 – 12×", note: "Capital intensity, regulatory exposure" },
];

const LIMITATIONS = [
  { title: "Meaningless for EBITDA-negative companies", body: "A negative denominator makes the multiple undefined. High-growth SaaS deals like Salesforce/Slack use EV/Revenue or EV/ARR instead." },
  { title: "Ignores capex differences", body: "EBITDA doesn't deduct capital expenditure. Capital-intensive sectors — semiconductors, airlines, telecom — are better evaluated on EBIT or unlevered free cash flow." },
  { title: "Doesn't capture growth", body: "Two companies at the same EV/EBITDA but different growth trajectories are entirely different investments. Consider EV/EBITDA-to-growth or forward NTM EBITDA multiples." },
  { title: "Cross-sector comparisons are invalid", body: "Software at 20× and retail at 20× are completely different situations. Comps only work within the same sector and growth profile." },
];

const REFERENCES = [
  { label: "Warren Buffett", detail: "2002 Berkshire Hathaway Annual Letter — EBITDA critique" },
  { label: "McKinsey & Company", detail: "Valuation: Measuring and Managing the Value of Companies (7th ed.)" },
  { label: "Rosenbaum & Pearl", detail: "Investment Banking: Valuation, LBOs, M&A, and IPOs (3rd ed.)" },
  { label: "Damodaran, A.", detail: "Damodaran on Valuation — NYU Stern School of Business" },
  { label: "IFRS Foundation", detail: "IFRS 16 Leases — Implementation Guidance (2019)" },
  { label: "Wall Street Oasis", detail: "EV/EBITDA Multiple — Comprehensive Guide" },
  { label: "PitchBook", detail: "Global M&A Report 2023 — Valuation Multiples by Sector" },
];

export default function EvEbitdaClientEn({ relatedDeals }: { relatedDeals: RelatedDeal[] }) {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── Hero ────────────────────────────────────────────── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-12">
            <motion.nav
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}
              className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 mb-6"
            >
              <Link href="/en/deal-101" className="hover:text-blue-500 transition-colors">Deal 101</Link>
              <span>/</span>
              <span className="text-gray-600 dark:text-gray-300 font-medium">EV/EBITDA Multiple</span>
            </motion.nav>

            <motion.div variants={stagger(0.1)} initial="hidden" animate="show">
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-[11px] font-semibold rounded-full px-2.5 py-0.5 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                  Valuation
                </span>
                <span className="text-[11px] text-gray-400 dark:text-gray-500">Core Fundamental · ~12 min read</span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                EV/EBITDA Multiple
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-3 text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
                The first metric any M&A banker reaches for. But the traps hidden inside — in the numerator and the denominator — will cost you if you only know the formula.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-4">
                <Link href="/deal-101/ev-ebitda" className="text-xs text-gray-400 hover:text-blue-500 transition-colors">
                  한국어로 읽기 →
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-14 space-y-20">

          {/* ══ 1. WHY ════════════════════════════════════════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Why EV/EBITDA — And Why P/E Falls Apart in M&A
            </motion.h2>

            <motion.div variants={fadeUp} className="space-y-4 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                When M&A professionals size up a deal price, the first question they ask is:
                <strong className="text-gray-800 dark:text-gray-200"> &ldquo;What multiple is this?&rdquo;</strong>
                The standard answer is expressed in EV/EBITDA.
              </p>
              <p>
                Why not P/E, the ratio every equity investor knows? Three reasons.
                First, P/E is <strong className="text-gray-800 dark:text-gray-200">distorted by capital structure.</strong>
                A heavily leveraged company has high interest expense, which crushes net income — making it look cheaper than it actually is, regardless of operating performance.
                Second, <strong className="text-gray-800 dark:text-gray-200">P/E doesn&apos;t neutralize tax rate differences.</strong>
                Comparing a Korean company (24% statutory rate) with an Irish one (12.5%) using P/E bakes in a jurisdictional distortion, not a business one.
                Third, in M&A, <strong className="text-gray-800 dark:text-gray-200">you&apos;re not just buying the equity — you&apos;re assuming the debt.</strong>
                The real acquisition cost is the total enterprise value, not the market cap.
              </p>
              <p>
                EV/EBITDA solves all three. The numerator (EV) captures the true all-in cost including debt. The denominator (EBITDA) strips out capital structure, taxes, and accounting choices — leaving pure operating cash generation. The result: apples-to-apples comparison across countries, leverage profiles, and accounting policies.
              </p>
            </motion.div>

            {/* Deal Snapshots */}
            <motion.div variants={fadeUp} className="mt-8">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Real deals at a glance — EV/EBITDA in practice</p>
              <div className="space-y-2">
                {DEAL_SNAPSHOTS.map((d, i) => (
                  <motion.div
                    key={d.deal}
                    variants={fadeUp}
                    custom={i}
                    className="flex items-start gap-4 rounded-xl border border-gray-100 dark:border-gray-700/60 bg-white dark:bg-gray-900 px-4 py-3.5"
                  >
                    <span className="font-black text-lg text-blue-600 dark:text-blue-400 font-mono w-16 flex-shrink-0 text-right">
                      {d.multiple}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-gray-800 dark:text-gray-200">{d.deal}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{d.note}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-3">
                Twitter&apos;s 72× looks like an outlier — and it is. But that&apos;s the lesson: the multiple itself matters less than the narrative that justifies it.
              </p>
            </motion.div>
          </motion.section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ══ 2. Formula ════════════════════════════════════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">The Formula</motion.h2>

            <motion.div variants={fadeUp} className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 border border-blue-100 dark:border-blue-900/50 p-8 text-center mb-8">
              <p className="text-3xl font-black text-blue-700 dark:text-blue-300 font-mono tracking-tight">
                EV / EBITDA
              </p>
              <div className="mt-4 space-y-1 text-sm text-blue-600/80 dark:text-blue-400/70 font-mono">
                <p>= (Market Cap + Total Debt – Cash &amp; Equivalents)</p>
                <p className="text-blue-400/60">÷</p>
                <p>= (Operating Income + D&amp;A)</p>
              </div>
            </motion.div>

            <motion.p variants={fadeUp} className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">
              The formula is deceptively simple. The real complexity — and where deal teams diverge by hundreds of millions — lies in what exactly goes into each component. Let&apos;s dissect both sides.
            </motion.p>
          </motion.section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ══ 3. EV Deep Dive ═══════════════════════════════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.div variants={fadeUp}>
              <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2">Numerator</p>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">EV — Enterprise Value, Fully Dissected</h2>
              <p className="text-base text-gray-500 dark:text-gray-400 mb-8">
                Translated as &ldquo;enterprise value&rdquo; but more precisely:{" "}
                <strong className="text-gray-700 dark:text-gray-300">&ldquo;the total cost of acquiring this company outright.&rdquo;</strong>{" "}
                You&apos;re not just buying the stock — you&apos;re taking on the debt. That&apos;s the fundamental distinction from market cap.
              </p>
            </motion.div>

            {/* EV Bridge */}
            <motion.div variants={fadeUp} className="rounded-2xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 p-5 mb-8">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">EV Bridge — From Equity Value to Enterprise Value</p>
              <div className="space-y-2">
                {[
                  { label: "Market Capitalization", note: "Share price × shares outstanding", color: "text-blue-600 dark:text-blue-400", sign: "" },
                  { label: "+ Short-term Debt / Current Portion of LT Debt", note: "Financial debt due within 12 months", color: "text-rose-500", sign: "+" },
                  { label: "+ Long-term Debt / Bonds", note: "Financial debt due beyond 12 months", color: "text-rose-500", sign: "+" },
                  { label: "+ Minority Interest", note: "External shareholders in consolidated subsidiaries", color: "text-amber-500", sign: "+" },
                  { label: "+ Preferred Stock", note: "Treated separately before common equity conversion", color: "text-amber-500", sign: "+" },
                  { label: "– Cash & Cash Equivalents", note: "Only freely available cash", color: "text-emerald-600 dark:text-emerald-400", sign: "–" },
                  { label: "= Enterprise Value (EV)", note: "The true all-in cost to the acquirer", color: "text-gray-900 dark:text-gray-100", sign: "=", bold: true },
                ].map((row) => (
                  <div key={row.label} className={`flex items-center gap-3 py-1.5 ${row.bold ? "border-t border-gray-200 dark:border-gray-700 pt-2.5 mt-1" : ""}`}>
                    <span className={`text-sm font-bold w-5 text-right flex-shrink-0 ${row.color}`}>{row.sign}</span>
                    <div className="flex-1">
                      <span className={`text-xs ${row.bold ? "font-black text-gray-900 dark:text-gray-100" : "font-medium text-gray-700 dark:text-gray-300"}`}>{row.label}</span>
                      {row.note && <span className="text-[11px] text-gray-400 dark:text-gray-500 ml-2">{row.note}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Debt items */}
            <motion.div variants={fadeUp}>
              <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-1">Debt — What Actually Counts</h3>
              <p className="text-base text-gray-500 dark:text-gray-400 mb-5">
                Not all debt is obvious. These are the items where deal teams frequently disagree — and where billions of dollars of EV difference originates.
              </p>
              <motion.div variants={stagger(0.07)} className="space-y-3">
                {DEBT_ITEMS.map((item) => (
                  <motion.div key={item.title} variants={fadeUp}
                    className={`rounded-xl border p-4 ${item.warn ? "border-amber-200 dark:border-amber-800/50 bg-amber-50/40 dark:bg-amber-950/10" : "border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900"}`}
                  >
                    <div className="flex items-start gap-2 mb-1">
                      {item.warn && <span className="text-amber-500 text-xs flex-shrink-0 mt-0.5">⚠</span>}
                      <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100">{item.title}</h4>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.body}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Cash items */}
            <motion.div variants={fadeUp} className="mt-10">
              <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-1">Cash — Not All Cash Is Equal</h3>
              <p className="text-base text-gray-500 dark:text-gray-400 mb-5">
                The standard formula deducts cash from EV. But &ldquo;cash&rdquo; is not a single homogeneous asset — here&apos;s what to watch for.
              </p>
              <motion.div variants={stagger(0.07)} className="space-y-3">
                {CASH_ITEMS.map((item) => (
                  <motion.div key={item.title} variants={fadeUp}
                    className={`rounded-xl border p-4 ${item.warn ? "border-amber-200 dark:border-amber-800/50 bg-amber-50/40 dark:bg-amber-950/10" : "border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900"}`}
                  >
                    <div className="flex items-start gap-2 mb-1">
                      {item.warn && <span className="text-amber-500 text-xs flex-shrink-0 mt-0.5">⚠</span>}
                      <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100">{item.title}</h4>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.body}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ══ 4. EBITDA Deep Dive ═══════════════════════════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.div variants={fadeUp}>
              <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-2">Denominator</p>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">EBITDA — The Denominator, Fully Dissected</h2>
              <p className="text-base text-gray-500 dark:text-gray-400 mb-8">
                EBITDA stands for Earnings Before Interest, Taxes, Depreciation &amp; Amortization.
                But understanding <em>why</em> each element is removed is what turns a formula into insight.
              </p>
            </motion.div>

            {/* P&L waterfall */}
            <motion.div variants={fadeUp} className="rounded-2xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 p-5 mb-10">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">P&L Waterfall — Where EBITDA sits</p>
              <div className="space-y-1.5">
                {PL_ITEMS.map((row) => (
                  <div
                    key={row.label}
                    className={`flex items-center gap-3 py-1.5 px-3 rounded-lg text-xs ${row.highlight ? "bg-emerald-50 dark:bg-emerald-950/30" : ""} ${row.bold ? "font-bold" : ""}`}
                  >
                    <span className={`flex-1 ${row.indent === 1 ? "pl-5 text-gray-500 dark:text-gray-400" : "text-gray-800 dark:text-gray-200"} ${row.highlight ? "text-emerald-700 dark:text-emerald-300 font-bold" : ""}`}>
                      {row.label}
                    </span>
                    {row.note && (
                      <span className="text-[10px] text-gray-400 dark:text-gray-500 italic">{row.note}</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* D&A deep dive */}
            <motion.div variants={fadeUp}>
              <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-1">D&amp;A — The Most Misunderstood Component</h3>
              <p className="text-base text-gray-500 dark:text-gray-400 mb-5">
                Depreciation &amp; amortization is central to EBITDA — and the most debated. The &ldquo;it&apos;s non-cash, add it back&rdquo; logic sounds reasonable. Here&apos;s why it&apos;s dangerous.
              </p>
              <motion.div variants={stagger(0.09)} className="space-y-4">
                {DA_INSIGHTS.map((insight) => (
                  <motion.div
                    key={insight.title}
                    variants={fadeUp}
                    className="rounded-xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 p-5"
                  >
                    <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-2">{insight.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed whitespace-pre-line">{insight.body}</p>
                    {insight.quote && (
                      <blockquote className="mt-3 border-l-2 border-amber-400 pl-3 text-sm text-amber-700 dark:text-amber-400 italic leading-relaxed">
                        {insight.quote}
                      </blockquote>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Interest */}
            <motion.div variants={fadeUp} className="mt-10">
              <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-1">Interest — Capital Structure Neutralization</h3>
              <p className="text-base text-gray-500 dark:text-gray-400 mb-5">
                The logic for adding back interest is straightforward: the same business looks different depending on how much debt it carries. But there are traps here too.
              </p>
              <motion.div variants={stagger(0.07)} className="space-y-3">
                {INTEREST_INSIGHTS.map((item) => (
                  <motion.div key={item.title} variants={fadeUp}
                    className="rounded-xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 p-4"
                  >
                    <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.body}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Tax */}
            <motion.div variants={fadeUp} className="mt-10">
              <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-1">Tax — Enabling Cross-Border Comparison</h3>
              <p className="text-base text-gray-500 dark:text-gray-400 mb-5">
                Tax is stripped out so you can compare operating efficiency across jurisdictions. But there are nuances practitioners often miss.
              </p>
              <motion.div variants={stagger(0.07)} className="space-y-3">
                {TAX_INSIGHTS.map((item) => (
                  <motion.div key={item.title} variants={fadeUp}
                    className="rounded-xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 p-4"
                  >
                    <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.body}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* COGS insight */}
            <motion.div variants={fadeUp} className="mt-10 rounded-xl border border-indigo-200 dark:border-indigo-800/50 bg-indigo-50/40 dark:bg-indigo-950/10 p-5">
              <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-2">
                💡 D&amp;A Hidden Inside COGS — The Most Common Beginner Error
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Many analysts go looking for a D&amp;A line item on the income statement — and can&apos;t find it.
                <strong className="text-gray-800 dark:text-gray-200"> For manufacturers, plant and equipment depreciation is already embedded in COGS.</strong>{" "}
                A semiconductor company&apos;s fab depreciation flows through wafer manufacturing cost — invisible on the face of the P&L.
                To calculate accurate EBITDA, find the actual D&amp;A in the{" "}
                <strong className="text-gray-800 dark:text-gray-200">cash flow statement (non-cash adjustments)</strong>{" "}
                or the financial statement footnotes. Miss this, and you understate EBITDA.
              </p>
            </motion.div>
          </motion.section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ══ 5. Industry Benchmarks ════════════════════════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Industry Benchmarks</motion.h2>
            <motion.p variants={fadeUp} className="text-base text-gray-500 dark:text-gray-400 mb-6">
              Appropriate multiples vary significantly by sector, growth profile, interest rates, and market cycle. These ranges reflect early-2020s global M&A; during the high-rate environment (2022–2024), sector-wide multiples contracted roughly 20–30%.
            </motion.p>
            <motion.div variants={fadeUp} className="rounded-2xl border border-gray-200 dark:border-gray-700/60 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left px-4 py-3 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Sector</th>
                    <th className="text-center px-4 py-3 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">EV/EBITDA Range</th>
                    <th className="text-left px-4 py-3 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden sm:table-cell">Key Driver</th>
                  </tr>
                </thead>
                <tbody>
                  {BENCHMARKS.map((b, i) => (
                    <tr key={b.sector} className={`border-b border-gray-100 dark:border-gray-800 ${i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50/50 dark:bg-gray-800/20"}`}>
                      <td className="px-4 py-3 text-sm font-medium text-gray-800 dark:text-gray-200">{b.sector}</td>
                      <td className="px-4 py-3 text-center">
                        <span className="font-black text-blue-600 dark:text-blue-400 font-mono text-sm">{b.range}</span>
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400 hidden sm:table-cell">{b.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </motion.section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ══ 6. Limitations ════════════════════════════════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Limitations of EV/EBITDA</motion.h2>
            <motion.p variants={fadeUp} className="text-base text-gray-500 dark:text-gray-400 mb-6">
              Powerful but not universal. In each of these situations, you must use an alternative or complementary metric.
            </motion.p>
            <motion.div variants={stagger(0.07)} className="grid sm:grid-cols-2 gap-3">
              {LIMITATIONS.map((l) => (
                <motion.div key={l.title} variants={fadeUp}
                  className="rounded-xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 p-4"
                >
                  <p className="text-rose-500 font-black text-base mb-1.5">✕</p>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-1">{l.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{l.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ══ 7. Summary ════════════════════════════════════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
              <span className="text-xs font-bold bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-full px-3 py-1">
                Key Takeaways
              </span>
              <span className="text-xs text-gray-400 dark:text-gray-500">EV/EBITDA in full</span>
            </motion.div>

            <motion.div variants={fadeUp}
              className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/30 border border-blue-100 dark:border-blue-900/50 p-6 mb-5"
            >
              <p className="text-[11px] font-semibold text-blue-500 dark:text-blue-400 uppercase tracking-wider mb-2">One-line definition</p>
              <p className="text-base font-bold text-gray-900 dark:text-gray-100 leading-snug">
                EV/EBITDA measures how many times the total acquisition cost exceeds a company&apos;s operating cash generation — stripped of capital structure, tax rates, and accounting choices.
              </p>
            </motion.div>

            <motion.div variants={stagger(0.07)} className="space-y-2.5 mb-5">
              {[
                {
                  num: "01",
                  title: "EV is not market cap",
                  body: "It&apos;s the true all-in cost to an acquirer — market cap plus net debt. Convertible notes, IFRS 16 lease liabilities, and pension deficits can be hiding inside.",
                  color: "text-blue-500",
                },
                {
                  num: "02",
                  title: "EBITDA is not cash flow",
                  body: "It ignores capex. For capital-intensive businesses — manufacturing, airlines, infrastructure — using EBITDA as a cash flow proxy creates a dangerously inflated picture of earnings.",
                  color: "text-amber-500",
                },
                {
                  num: "03",
                  title: "Capital structure neutralization is the core reason",
                  body: "A zero-debt company and a highly leveraged one can look identical in net income terms but very different in operating reality. EV/EBITDA strips the leverage out and lets you see the business.",
                  color: "text-emerald-500",
                },
                {
                  num: "04",
                  title: "Multiples are completely sector-specific",
                  body: "Software at 20× and retail at 20× mean entirely different things. Comparable company analysis is only valid within the same sector and growth profile.",
                  color: "text-purple-500",
                },
                {
                  num: "05",
                  title: "Demand transparency on Adjusted EBITDA",
                  body: "Adjusted EBITDA can include add-backs for PPA amortization, one-time costs, and stock-based compensation. Always audit the adjustments — not just the number.",
                  color: "text-rose-500",
                },
              ].map((pt) => (
                <motion.div key={pt.num} variants={fadeUp}
                  className="flex gap-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/60 px-4 py-3.5"
                >
                  <span className={`text-[11px] font-black flex-shrink-0 mt-0.5 ${pt.color}`}>{pt.num}</span>
                  <div>
                    <p className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-0.5">{pt.title}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{pt.body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-3">
              <div className="rounded-xl border border-emerald-200 dark:border-emerald-800/50 bg-emerald-50/60 dark:bg-emerald-950/20 p-4">
                <p className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 mb-2.5">✓ Use it when</p>
                <ul className="space-y-1.5">
                  {["Comparing companies in the same sector", "Low-capex businesses (SaaS, financial services)", "Cross-border deals (neutralizes tax differences)", "Early-stage LBO return screening"].map((t) => (
                    <li key={t} className="text-sm text-gray-600 dark:text-gray-400 flex gap-1.5">
                      <span className="text-emerald-500 flex-shrink-0">·</span>{t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-rose-200 dark:border-rose-800/50 bg-rose-50/60 dark:bg-rose-950/20 p-4">
                <p className="text-[11px] font-bold text-rose-500 dark:text-rose-400 mb-2.5">✕ Be cautious when</p>
                <ul className="space-y-1.5">
                  {["EBITDA-negative high-growth companies (use EV/Revenue)", "Capex-intensive sectors (airlines, manufacturing, telecom)", "Comparing across the IFRS 16 adoption boundary (2019)", "Post-acquisition targets with large PPA amortization"].map((t) => (
                    <li key={t} className="text-sm text-gray-600 dark:text-gray-400 flex gap-1.5">
                      <span className="text-rose-400 flex-shrink-0">·</span>{t}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ══ 8. Related Deals ══════════════════════════════════ */}
          {relatedDeals.length > 0 && (
            <motion.section variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <motion.h2 variants={fadeUp} className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Deals Where This Concept Appeared</motion.h2>
              <motion.p variants={fadeUp} className="text-base text-gray-500 dark:text-gray-400 mb-6">
                Real deal archive where EV/EBITDA was the core valuation argument.
              </motion.p>
              <motion.div variants={stagger(0.08)} className="grid gap-3 sm:grid-cols-2">
                {relatedDeals.map((deal) => (
                  <motion.div key={deal.slug} variants={fadeUp}>
                    <Link
                      href={`/en/deals/${deal.slug}`}
                      className="group block rounded-xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 p-4 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-white font-black text-[9px] flex-shrink-0 ${deal.acquirer.bg}`}>
                          {deal.acquirer.initials}
                        </div>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-300 dark:text-gray-600 flex-shrink-0" aria-hidden="true">
                          <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                        </svg>
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-white font-black text-[9px] flex-shrink-0 ${deal.target.bg}`}>
                          {deal.target.initials}
                        </div>
                        <span className={`ml-auto text-[10px] font-semibold rounded-full px-2 py-0.5 ${DEAL_CATEGORY_COLOR[deal.category]}`}>
                          {DEAL_CATEGORY_LABEL_EN[deal.category]}
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1.5 line-clamp-2">
                        {deal.title}
                      </h3>
                      {deal.conceptDescription && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
                          {deal.conceptDescription}
                        </p>
                      )}
                      <p className="mt-2 text-xs font-bold text-amber-500">
                        {deal.dealValueDisplay.split("(")[0].trim()}
                      </p>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>
          )}

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ══ 9. Related Concepts ═══════════════════════════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">Related Concepts</motion.h2>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {[
                { label: "EV/Sales Multiple", href: "/en/deal-101/ev-sales", note: "For EBITDA-negative companies" },
                { label: "ARR Multiple", href: "/en/deal-101/arr-multiple", note: "SaaS-specific" },
                { label: "LBO", href: "/en/deal-101/lbo", note: "Leveraged buyout structure" },
                { label: "Acquisition Premium", href: "/en/deal-101/acquisition-premium", note: "Control premium over market" },
                { label: "Antitrust Review", href: "/en/deal-101/antitrust", note: "Deal closing risk" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-1.5 rounded-full border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 px-3.5 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item.label}
                  <span className="text-gray-400 dark:text-gray-500 text-[10px]">· {item.note}</span>
                </Link>
              ))}
            </motion.div>
          </motion.section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ══ 10. References ════════════════════════════════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">References</motion.h2>
            <motion.ol variants={stagger(0.05)} className="space-y-2">
              {REFERENCES.map((ref, i) => (
                <motion.li key={ref.label} variants={fadeUp} className="flex gap-3 text-xs text-gray-500 dark:text-gray-400">
                  <span className="text-gray-300 dark:text-gray-600 font-mono flex-shrink-0">[{i + 1}]</span>
                  <span>
                    <span className="font-semibold text-gray-700 dark:text-gray-300">{ref.label}</span>
                    {" — "}{ref.detail}
                  </span>
                </motion.li>
              ))}
            </motion.ol>
          </motion.section>

          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-center pt-2"
          >
            <Link href="/en/deal-101" className="text-sm text-gray-400 hover:text-blue-500 transition-colors">
              ← All Deal 101 concepts
            </Link>
          </motion.div>

        </div>
      </main>
      <Footer />
    </>
  );
}
