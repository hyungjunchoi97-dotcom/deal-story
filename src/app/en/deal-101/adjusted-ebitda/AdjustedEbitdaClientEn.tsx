"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { DEAL_CATEGORY_LABEL_EN } from "@/lib/i18n";

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

// ── Multiplier impact data ─────────────────────────────────────
const MULTIPLIER_IMPACT = [
  { addback: 5, multiples: [10, 12, 15, 18, 20] },
  { addback: 10, multiples: [10, 12, 15, 18, 20] },
  { addback: 25, multiples: [10, 12, 15, 18, 20] },
];

// ── Stakeholder data ───────────────────────────────────────────
const STAKEHOLDERS = [
  {
    role: "Sell-side Advisory IB",
    subtitle: "M&A Advisory",
    incentive: "Maximize EBITDA",
    why: "Success fees = 0.5–2% of deal value. A $10M add-back at a 15× multiple raises deal size by $150M → adds $1.5M in fees.",
    color: "border-rose-200 dark:border-rose-800/50 bg-rose-50/40 dark:bg-rose-950/10",
    badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
    direction: "↑ EBITDA",
  },
  {
    role: "Management Team",
    subtitle: "MIP / Equity Rollover",
    incentive: "Hit EBITDA targets",
    why: "Management Incentive Plans (MIPs) are tied to exit EBITDA or deal multiple. Management controls the data room while being the primary beneficiary of higher add-backs — the most acute conflict of interest.",
    color: "border-rose-200 dark:border-rose-800/50 bg-rose-50/40 dark:bg-rose-950/10",
    badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
    direction: "↑ EBITDA",
  },
  {
    role: "Leveraged Finance Team",
    subtitle: "LevFin — Debt Origination",
    incentive: "Maximize loan size",
    why: "LevFin fees = 1–2% of loan principal — bigger loan, bigger fee. Higher EBITDA allows more leverage (typical 5× EBITDA limit). After syndication, risk is off-balance-sheet — the core 'Originate to Distribute' structural problem.",
    color: "border-amber-200 dark:border-amber-800/50 bg-amber-50/40 dark:bg-amber-950/10",
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    direction: "↑ EBITDA",
  },
  {
    role: "Syndication / CLOs",
    subtitle: "Institutional Loan Investors",
    incentive: "Secure yield",
    why: "Investment decisions based on credit memos written by LevFin banks. Covenant-lite structures remove EBITDA-linked covenants — no early warning when performance deteriorates. A key driver of the leveraged loan market expanding from $600B to $1.3T between 2015–2019.",
    color: "border-amber-200 dark:border-amber-800/50 bg-amber-50/40 dark:bg-amber-950/10",
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    direction: "Neutral (passive)",
  },
  {
    role: "Credit Rating Agencies",
    subtitle: "S&P / Moody's / Fitch",
    incentive: "Apply internal EBITDA standards",
    why: "Issuer-paid model — the same structural conflict as the 2008 mortgage crisis. However, S&P and Moody's apply their own EBITDA adjustments (capitalizing operating leases, including pension deficits), often rating leverage 1–2 turns higher than company-reported figures.",
    color: "border-amber-200 dark:border-amber-800/50 bg-amber-50/40 dark:bg-amber-950/10",
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    direction: "Internal standard",
  },
  {
    role: "FDD / QoE Team",
    subtitle: "Buy-side Financial Due Diligence",
    incentive: "Reality-check EBITDA",
    why: "Hired by the buyer to independently verify. Theoretically the last line of defense. However, kill-deal pressure is real — damaging relationships with sellers and IBs. Typical haircut: 10–30%. KPMG data: in 35% of deals, EBITDA misses FDD estimates by 15%+ within 12 months.",
    color: "border-emerald-200 dark:border-emerald-800/50 bg-emerald-50/40 dark:bg-emerald-950/10",
    badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    direction: "↓ EBITDA",
  },
];

// ── Add-back legitimacy spectrum ───────────────────────────────
const ADDBACK_SPECTRUM = [
  {
    tier: "✅ Generally Accepted",
    color: "border-emerald-200 dark:border-emerald-800/40 bg-emerald-50/50 dark:bg-emerald-950/10",
    labelColor: "text-emerald-700 dark:text-emerald-400",
    items: [
      { name: "Genuine one-time legal costs", detail: "Single litigation settlements, costs for specific disputes (excluding habitually litigious sectors)" },
      { name: "Owner compensation normalization", detail: "Excess compensation above market rate at owner-operated businesses — savings realizable post-PE acquisition" },
      { name: "IPO / deal-related advisory fees", detail: "IB and legal fees for the current transaction — structurally non-recurring" },
      { name: "Natural disaster losses", detail: "Uninsured losses from floods, fires, and similar one-off events" },
    ],
  },
  {
    tier: "⚠️ Contested — Requires Evidence",
    color: "border-amber-200 dark:border-amber-800/40 bg-amber-50/50 dark:bg-amber-950/10",
    labelColor: "text-amber-700 dark:text-amber-400",
    items: [
      { name: "Restructuring charges", detail: "Appearing for 2+ consecutive years → FDD rejection. Valeant ran 8 straight quarters of 'non-recurring' restructuring" },
      { name: "CEO transition / strategic review costs", detail: "Labeled one-time, but 'transformation programs' routinely run 3–4 years" },
      { name: "COVID normalization (2020–2022)", detail: "Pandemic loss add-backs — wide variation by sector, rampant abuse in practice" },
      { name: "New location pre-opening costs", detail: "Structurally recurring at growth-stage businesses — identical to WeWork's pattern" },
    ],
  },
  {
    tier: "❌ Routinely Rejected by FDD",
    color: "border-rose-200 dark:border-rose-800/40 bg-rose-50/50 dark:bg-rose-950/10",
    labelColor: "text-rose-600 dark:text-rose-400",
    items: [
      { name: "Stock-Based Compensation (SBC)", detail: "Buffett: 'If compensation isn't an expense, what is it? Where does it go if not to P&L?' — economic dilution is real" },
      { name: "Unrealized synergy projections", detail: "Adding back cost savings not yet achieved. Rejected without run-rate evidence" },
      { name: "Full SG&A exclusion (WeWork-style)", detail: "Reclassifying core operating expenses as 'non-core' — the central problem with Community-Adjusted EBITDA" },
      { name: "Serial M&A integration costs", detail: "Integration costs from serial acquirers add-backed every deal — effectively a permanent cost" },
    ],
  },
];

// ── Case studies ───────────────────────────────────────────────
const CASES = [
  {
    title: "WeWork — Community-Adjusted EBITDA",
    region: "🇺🇸 United States",
    year: "2019",
    color: "border-rose-200 dark:border-rose-800/40",
    badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
    summary: "Excluded all SG&A and marketing costs to flip a -$1.93B net loss into +$467M Adj. EBITDA",
    analogy: "Imagine a restaurant that says 'we're profitable if you don't count the waitstaff salaries and the advertising budget.' But those ARE the restaurant's core costs — you can't run the business without them.",
    paragraphs: [
      "WeWork's business model is simple: sign long-term leases on large floors, then sublet them as short-term flexible desks. To fill those desks, you need a sales team, marketing spend, and pre-opening costs for each new location. These were WeWork's fundamental operating costs.",
      "In its S-1 IPO filing, WeWork defined 'Community-Adjusted EBITDA' by removing not just interest, taxes, and D&A — but also all SG&A ($933M in FY2018) and pre-opening costs, labeling them 'community investments.' The result: a GAAP net loss of -$1.93B transformed into a reported profit of +$467M. A $2.4B swing.",
      "The problem is straightforward: to sign one more member, you need sales and marketing. Strip that cost and a mature, full location looks profitable. But the business as a whole — which requires constantly filling new locations — can never be profitable on those terms.",
      "The IPO was pulled in September 2019. WeWork filed for Chapter 11 bankruptcy in November 2023. SoftBank's total losses reached -$9.5B.",
    ],
    lesson: "If the cost disappears, so does the business. Excluding a core operating expense can make any company look profitable on paper.",
    numbers: [
      { label: "GAAP Net Loss (FY2018)", value: "-$1.93B" },
      { label: "Community-Adjusted EBITDA", value: "+$467M" },
      { label: "GAAP vs. Adjusted Gap", value: "~$2.4B" },
      { label: "SoftBank Total Losses", value: "-$9.5B" },
    ],
    source: "Source: WeWork S-1 filing, Aug 14, 2019 (SEC EDGAR)",
  },
  {
    title: "Valeant — Recurring 'Non-Recurring' Charges",
    region: "🇨🇦 Canada / USA",
    year: "2015",
    color: "border-amber-200 dark:border-amber-800/40",
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    summary: "Restructuring costs labeled 'non-recurring' for 8 consecutive quarters — turning GAAP EPS -$0.18 into 'Cash EPS' +$10.17",
    analogy: "Imagine taking your car to the mechanic eight quarters in a row, and each time telling your spouse 'don't worry, this is the last repair bill, it won't happen again.' By the eighth time, it's not a one-time expense — you just have a broken car.",
    paragraphs: [
      "Valeant's strategy was simple: acquire pharmaceutical companies, raise drug prices, cut R&D. Because it was constantly acquiring, it had constant integration and restructuring costs — every quarter, without fail.",
      "Each quarter, Valeant labeled these costs 'non-recurring' and excluded them from adjusted EBITDA. The effect: GAAP earnings per share of -$0.18 became the company-reported 'Cash EPS' of +$10.17. A difference of over $10 per share.",
      "The fatal flaw: this 'one-time' charge appeared for eight consecutive quarters between 2013 and 2015. When something happens eight times in a row, it isn't a one-time event — it's a structural cost of doing business. Academic research backs this up: Doyle, Jennings & Soliman (2013) showed that 65–70% of items companies call 'non-recurring' reappear in subsequent periods.",
      "The SEC opened an investigation in 2016. Financial statements were restated. The stock collapsed from a peak of $262 to below $10.",
    ],
    lesson: "When the same 'one-time' item appears two or three quarters in a row, stop calling it one-time. It's a structural cost of that business.",
    numbers: [
      { label: "GAAP EPS (FY2015)", value: "-$0.18" },
      { label: "'Cash EPS' (adjusted)", value: "+$10.17" },
      { label: "Adjusted EBITDA (FY2015)", value: "~$5.7B" },
      { label: "Stock Peak → Trough", value: "$262 → <$10" },
    ],
    source: "Source: Valeant Annual Report 2015; SEC Comment Letters (EDGAR); Doyle et al. (2013), JAE",
  },
  {
    title: "MBK Partners × Homeplus — Korea's Largest PE Buyout",
    region: "🇰🇷 South Korea",
    year: "2015–2025",
    color: "border-blue-200 dark:border-blue-800/40",
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    summary: "Sold the stores' real estate to raise cash, then leased them back — but the new rent bill never went away",
    analogy: "Imagine selling your house to raise a lump sum of cash, then renting it back from the new owner and saying 'look how much cash we have now.' The sale proceeds are one-time. The monthly rent you now owe is permanent.",
    paragraphs: [
      "In 2015, MBK Partners acquired Homeplus from Tesco for KRW 7.2T — Korea's largest-ever PE buyout, largely debt-financed at roughly 9–10× EBITDA leverage.",
      "After the acquisition, MBK raised over KRW 4T by selling Homeplus store buildings and leasing them back (sale-leaseback). The proceeds were used to pay down debt and return capital to investors. On the surface, this looked like smart financial engineering.",
      "But here's what changed: before the leasebacks, Homeplus owned its stores and had no rent. After the leasebacks, it had permanent, ongoing rent obligations for every store it had sold. This new cost was not fully priced into the deal's EBITDA projections.",
      "Compounding the problem, Korean discount retail was being devastated by Coupang, Naver, and convenience stores between 2015 and 2020. At 9–10× leverage, there was no buffer to absorb this structural shift. Homeplus filed for court receivership in February 2025.",
    ],
    lesson: "One-time sale proceeds cannot be treated as recurring EBITDA. When you sell and leaseback, a permanent rent expense is created — and it must be fully subtracted from normalized earnings.",
    numbers: [
      { label: "Acquisition Price", value: "KRW 7.2T" },
      { label: "Sale-Leaseback Proceeds", value: "KRW 4T+" },
      { label: "Leverage at Acquisition", value: "~9–10× EBITDA" },
      { label: "Court Receivership Filed", value: "Feb 2025" },
    ],
    source: "Source: Homeplus court filing (2025); Korea Fair Trade Commission; MBK Partners press releases",
  },
  {
    title: "HDC Hyundai Development × Asiana Airlines",
    region: "🇰🇷 South Korea",
    year: "2019–2020",
    color: "border-purple-200 dark:border-purple-800/40",
    badge: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
    summary: "Heavy maintenance costs treated as 'one-time' — COVID pulled the trigger, but the structural vulnerability was already there",
    analogy: "Imagine buying a car and the dealer says 'every five years you'll need a full engine overhaul.' If you then record that overhaul as a 'one-time expense,' you're fooling yourself. Five-year cycles are predictable — they're not surprises.",
    paragraphs: [
      "HDC Hyundai Development agreed to acquire Asiana Airlines for KRW 2.5T in December 2019. When COVID-19 grounded international flights in early 2020, HDC invoked the MAC (Material Adverse Change) clause and sought to exit. COVID was the trigger — but the structural vulnerabilities had been there from the start.",
      "Every commercial aircraft requires a 'D-Check' (heavy maintenance) roughly every 6–8 years: a complete disassembly and inspection of every component. Cost: hundreds of millions of won per aircraft. Because these checks don't happen annually, they're often labeled 'non-recurring' and excluded from EBITDA. But for any airline that keeps flying, D-Checks are as inevitable as fuel costs — they just happen on a longer cycle.",
      "The second issue: IFRS 16 accounting required Asiana's aircraft operating lease obligations (over KRW 2.4T) to be recognized as balance-sheet liabilities. Whether these were fully incorporated into the enterprise value calculation became a central dispute.",
      "The deal was ultimately terminated, confirmed by court ruling. The episode became a textbook example in Korean M&A circles of the gap between adjusted EBITDA and economic reality.",
    ],
    lesson: "'Infrequent' is not the same as 'one-time.' If a cost is predictable and inevitable — even on a 6-year cycle — it belongs in normalized EBITDA.",
    numbers: [
      { label: "Agreed Deal Value", value: "KRW 2.5T" },
      { label: "Contract Signed", value: "Dec 2019" },
      { label: "IFRS 16 Lease Liabilities", value: "KRW 2.4T+" },
      { label: "Deal Outcome", value: "Terminated (2020)" },
    ],
    source: "Source: Asiana Airlines SEC filings; HDC Hyundai Development press releases; FSS Korea",
  },
];

// ── FDD EBITDA bridge data ─────────────────────────────────────
const FDD_BRIDGE = [
  { label: "Reported EBITDA (Seller)", value: "$120M", delta: null, color: "text-gray-900 dark:text-gray-100", bg: "bg-gray-100 dark:bg-gray-800" },
  { label: "(-) Restructuring add-backs reversed", value: "-$8M", delta: "recurring pattern, 3 years", color: "text-rose-600 dark:text-rose-400", bg: "bg-rose-50 dark:bg-rose-950/30" },
  { label: "(-) SBC add-backs reversed", value: "-$5M", delta: "economic dilution is real", color: "text-rose-600 dark:text-rose-400", bg: "bg-rose-50 dark:bg-rose-950/30" },
  { label: "(-) Synergy projections not achieved", value: "-$4M", delta: "zero run-rate evidence", color: "text-rose-600 dark:text-rose-400", bg: "bg-rose-50 dark:bg-rose-950/30" },
  { label: "(-) COVID normalization haircut", value: "-$4M", delta: "sector outlook risk", color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-50 dark:bg-amber-950/30" },
  { label: "FDD Adjusted EBITDA", value: "$99M", delta: "-$21M vs. seller", color: "text-blue-700 dark:text-blue-300", bg: "bg-blue-50 dark:bg-blue-950/30" },
];

// ── Red flag checklist ─────────────────────────────────────────
const RED_FLAGS = [
  { flag: "Adj. EBITDA margin significantly exceeds GAAP operating margin", detail: "Gap over 5–10% points warrants explanation" },
  { flag: "Same 'non-recurring' items appear in 2+ consecutive reporting periods", detail: "The Valeant pattern — structural cost masquerading as one-time" },
  { flag: "Add-back list exceeds 8–10 items", detail: "Complexity itself is a red flag; Doyle et al. (2013) find quality degrades sharply beyond this threshold" },
  { flag: "Synergy add-backs with no integration plan", detail: "Future savings with no evidence of execution or run-rate should be fully rejected" },
  { flag: "EBITDA headline in press release, GAAP net loss buried", detail: "Disclosure hierarchy signals management's priority — and its credibility" },
  { flag: "Adj. EBITDA used in debt covenants without independent definition", detail: "When the borrower defines the metric, covenant-lite loans lose their disciplining function" },
  { flag: "Serial acquirer's integration costs add-backed every deal", detail: "If you acquire every year and add-back integration costs every year, it is core operating cost" },
  { flag: "IFRS 16 / ASC 842 lease reclassifications without clear disclosure", detail: "Lease capitalization can materially inflate EBITDA while increasing enterprise value and debt simultaneously" },
];

// ── Related concepts ───────────────────────────────────────────
const RELATED_CONCEPTS = [
  { href: "/en/deal-101/ev-ebitda", label: "EV/EBITDA Multiple", desc: "The foundational valuation ratio — understand this before adjustments" },
];

// ── References ─────────────────────────────────────────────────
const REFERENCES = [
  { id: 1, text: "Doyle, J., Jennings, J., & Soliman, M. (2013). Do managers define non-GAAP earnings to meet or beat analyst forecasts? Journal of Accounting and Economics, 56(1), 40–56." },
  { id: 2, text: "WeWork Companies Inc. Form S-1, Securities and Exchange Commission (Aug 14, 2019). SEC EDGAR." },
  { id: 3, text: "Black, E. L., Christensen, T. E., Ciesielski, J. T., & Whipple, B. C. (2018). Non-GAAP reporting: Evidence from academia and current practice. Journal of Business Finance & Accounting, 45(3–4), 259–294." },
  { id: 4, text: "SEC Compliance & Disclosure Interpretations (C&DI): Non-GAAP Financial Measures (Updated Apr 2018). U.S. SEC." },
  { id: 5, text: "KPMG. (2022). Global M&A Trends: Post-Deal Performance and Due Diligence Findings Survey. KPMG International." },
  { id: 6, text: "S&P Global Ratings. (2023). Corporate Methodology: Ratios and Adjustments. S&P Global Market Intelligence." },
  { id: 7, text: "Valeant Pharmaceuticals International, Inc. Annual Report on Form 10-K (2015). SEC EDGAR." },
  { id: 8, text: "Lys, T., Naughton, J. P., & Wang, C. (2015). Signaling through corporate accountability reporting. Journal of Accounting and Economics, 60(1), 56–72." },
  { id: 9, text: "Deloitte. (2023). Quality of Earnings: What You Don't Know Can Hurt You. Deloitte M&A Institute." },
];

// ── Props type ─────────────────────────────────────────────────
interface RelatedDeal {
  slug: string;
  title: string;
  category: string;
  acquirer: string;
  target: string;
  dealValueDisplay: string;
  conceptDescription: string;
}

interface Props {
  relatedDeals: RelatedDeal[];
}

export default function AdjustedEbitdaClientEn({ relatedDeals }: Props) {
  const MULTIPLES_HEADER = [10, 12, 15, 18, 20];

  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-10">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Link
                href="/en/deal-101"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M19 12H5M12 5l-7 7 7 7" />
                </svg>
                Deal 101
              </Link>
              <span className="text-xs text-gray-300 dark:text-gray-600">/</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">Valuation</span>
            </div>

            <div className="inline-flex items-center gap-2 text-xs font-semibold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 rounded-full px-3 py-1 mb-4">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              Hot-Button Concept
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Adjusted EBITDA
            </h1>
            <p className="mt-1 text-lg font-medium text-rose-600 dark:text-rose-400">The Battle of Adjustments</p>

            <p className="mt-4 text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
              EV = Multiple × EBITDA. A small tweak to the denominator, amplified by the multiplier, shifts deal prices by hundreds of millions. That is why "one-time or recurring?" is the most contested question in every M&A negotiation — and why Adjusted EBITDA sits at the center of every deal structure, debt package, and incentive plan.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                ["Sell-side IB", "rose"],
                ["Management / MIP", "rose"],
                ["LevFin", "amber"],
                ["CLO / Syndication", "amber"],
                ["Rating Agencies", "amber"],
                ["FDD Team", "emerald"],
              ].map(([label, c]) => (
                <span
                  key={label}
                  className={`text-xs font-medium px-2.5 py-1 rounded-full bg-${c}-50 text-${c}-700 dark:bg-${c}-950/30 dark:text-${c}-300`}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Body ──────────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto px-5 py-10 space-y-16">

          {/* 1. The Multiplication Effect */}
          <motion.section variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 rounded-full px-2.5 py-1">01</span>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">The Multiplication Effect</h2>
            </motion.div>

            <motion.div variants={fadeUp} className="mb-6 p-5 rounded-2xl bg-gradient-to-br from-rose-50 to-orange-50 dark:from-rose-950/20 dark:to-orange-950/20 border border-rose-200/60 dark:border-rose-800/40">
              <p className="text-center text-2xl font-black text-gray-900 dark:text-gray-100 tracking-tight">
                Enterprise Value = Multiple <span className="text-rose-600">×</span> EBITDA
              </p>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                This single formula explains why every M&A deal becomes a negotiation over EBITDA definitions.
                A $10M add-back, multiplied by a 15× deal multiple, is a <strong>$150M swing in purchase price</strong>.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                Valuation impact of EBITDA add-backs by deal multiple ($ millions)
              </p>
              <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700/60">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-800/50">
                      <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-400">Add-back ($M)</th>
                      {MULTIPLES_HEADER.map((m) => (
                        <th key={m} className="px-3 py-3 text-right text-xs font-bold text-gray-600 dark:text-gray-400">{m}×</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-700/40">
                    {MULTIPLIER_IMPACT.map((row) => (
                      <tr key={row.addback} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/20 transition-colors">
                        <td className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">${row.addback}M</td>
                        {row.multiples.map((m, i) => {
                          const val = row.addback * m;
                          const intensity = val >= 400 ? "text-rose-600 dark:text-rose-400 font-bold" : val >= 200 ? "text-amber-600 dark:text-amber-400 font-semibold" : "text-gray-700 dark:text-gray-300";
                          return (
                            <td key={i} className={`px-3 py-3 text-right ${intensity}`}>${val}M</td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">
                At a 15× multiple, every $1M of EBITDA add-back translates to $15M of additional deal value.
              </p>
            </motion.div>
          </motion.section>

          {/* 2. The Conflict-of-Interest Map */}
          <motion.section variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 rounded-full px-2.5 py-1">02</span>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Conflict-of-Interest Map</h2>
            </motion.div>

            <motion.div variants={fadeUp} className="mb-5 p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/40">
              <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
                Every party involved in a leveraged deal has a financial incentive to tolerate — or actively inflate — the EBITDA figure.
                Understanding <em>who benefits from what</em> is the first step in reading any adjusted EBITDA disclosure critically.
              </p>
            </motion.div>

            <motion.div variants={stagger(0.06)} className="space-y-4">
              {STAKEHOLDERS.map((s) => (
                <motion.div key={s.role} variants={fadeUp} className={`rounded-xl border p-5 ${s.color}`}>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{s.role}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{s.subtitle}</p>
                    </div>
                    <span className={`text-[11px] font-bold rounded-full px-2.5 py-1 flex-shrink-0 ${s.badge}`}>{s.direction}</span>
                  </div>
                  <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">Incentive: {s.incentive}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{s.why}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Originate-to-Distribute callout */}
            <motion.div variants={fadeUp} className="mt-5 p-5 rounded-xl bg-gray-50 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700/60">
              <p className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-2">
                The Originate-to-Distribute Problem
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                LevFin banks structure and price a leveraged loan, collect 1–2% in upfront fees, then sell the paper to CLOs and institutional investors —
                offloading credit risk within weeks. With no skin in the game post-syndication, the incentive to challenge aggressive EBITDA assumptions evaporates.
                A 2019 Federal Reserve working paper documented that "pro-forma" EBITDA at deal close exceeded actual LTM EBITDA by a median of 18–28% across large LBO transactions between 2014–2018.
              </p>
            </motion.div>
          </motion.section>

          {/* 3. The "One-Time" Determination */}
          <motion.section variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 rounded-full px-2.5 py-1">03</span>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">The "One-Time" Test</h2>
            </motion.div>

            <motion.div variants={fadeUp} className="mb-6 p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-800/40">
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                The central battlefield in every EBITDA negotiation is simple: <strong>is this cost genuinely non-recurring?</strong>
                If it is, excluding it gives a fair picture of normalized earning power. If it is not, exclusion inflates the basis for your valuation multiple.
                Below is the practical spectrum FDD teams apply.
              </p>
            </motion.div>

            <motion.div variants={stagger(0.06)} className="space-y-4">
              {ADDBACK_SPECTRUM.map((tier) => (
                <motion.div key={tier.tier} variants={fadeUp} className={`rounded-xl border p-5 ${tier.color}`}>
                  <p className={`text-sm font-bold mb-3 ${tier.labelColor}`}>{tier.tier}</p>
                  <div className="space-y-3">
                    {tier.items.map((item) => (
                      <div key={item.name}>
                        <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{item.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Expert quotes */}
            <motion.div variants={stagger(0.05)} className="mt-5 grid sm:grid-cols-2 gap-4">
              {[
                {
                  quote: "If options aren't a form of compensation, what are they? If compensation isn't an expense, what is it? And if expenses don't go in the calculation of earnings, where in the world do they go?",
                  author: "Warren Buffett",
                  source: "Berkshire Hathaway Annual Letter, 2004",
                  color: "border-amber-200 dark:border-amber-800/40 bg-amber-50/40 dark:bg-amber-950/10",
                },
                {
                  quote: "When I see companies touting adjusted earnings that strip out most of their real costs, I take that as a signal that either management doesn't understand their own business model, or they're hoping I won't.",
                  author: "Leon Black",
                  source: "Apollo Global Management",
                  color: "border-rose-200 dark:border-rose-800/40 bg-rose-50/40 dark:bg-rose-950/10",
                },
              ].map((q) => (
                <motion.blockquote key={q.author} variants={fadeUp} className={`rounded-xl border p-4 ${q.color}`}>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3 italic">"{q.quote}"</p>
                  <footer className="text-xs text-gray-500 dark:text-gray-400">
                    <span className="font-semibold text-gray-700 dark:text-gray-300">— {q.author}</span>
                    <span className="block">{q.source}</span>
                  </footer>
                </motion.blockquote>
              ))}
            </motion.div>
          </motion.section>

          {/* 4. Case Studies */}
          <motion.section variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/40 rounded-full px-2.5 py-1">04</span>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Case Studies</h2>
            </motion.div>

            <motion.div variants={stagger(0.07)} className="space-y-8">
              {CASES.map((c) => (
                <motion.div key={c.title} variants={fadeUp} className={`rounded-2xl border ${c.color} bg-white dark:bg-gray-900 overflow-hidden`}>

                  {/* Card header */}
                  <div className="px-6 pt-6 pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-[11px] font-semibold rounded-full px-2 py-0.5 ${c.badge}`}>{c.region}</span>
                      <span className="text-xs text-gray-400 dark:text-gray-500">{c.year}</span>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 dark:text-gray-100">{c.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">{c.summary}</p>
                  </div>

                  {/* Analogy callout */}
                  <div className="mx-6 mb-4 rounded-xl bg-amber-50 dark:bg-amber-950/25 border border-amber-200 dark:border-amber-700/40 px-4 py-3 flex gap-3">
                    <span className="text-lg leading-none flex-shrink-0 mt-0.5">💡</span>
                    <div>
                      <p className="text-[11px] font-bold text-amber-600 dark:text-amber-400 mb-1 uppercase tracking-wide">Think of it this way</p>
                      <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">{c.analogy}</p>
                    </div>
                  </div>

                  {/* Number grid */}
                  <div className="px-6 mb-5">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {c.numbers.map((n) => (
                        <div key={n.label} className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3">
                          <p className="text-[10px] text-gray-500 dark:text-gray-400 mb-1 leading-snug">{n.label}</p>
                          <p className="text-sm font-bold text-gray-900 dark:text-gray-100 font-mono">{n.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Body — paragraph by paragraph */}
                  <div className="px-6 mb-5 space-y-3">
                    {c.paragraphs.map((para, i) => (
                      <p key={i} className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{para}</p>
                    ))}
                  </div>

                  {/* Key lesson */}
                  <div className="mx-6 mb-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200/70 dark:border-blue-800/40 px-4 py-3">
                    <p className="text-[11px] font-bold text-blue-600 dark:text-blue-400 mb-1 uppercase tracking-wide">Key Takeaway</p>
                    <p className="text-sm font-medium text-blue-800 dark:text-blue-300 leading-relaxed">{c.lesson}</p>
                  </div>

                  <div className="px-6 pb-5">
                    <p className="text-xs text-gray-400 dark:text-gray-500 italic">{c.source}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* 5. FDD Quality of Earnings Bridge */}
          <motion.section variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 rounded-full px-2.5 py-1">05</span>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">FDD: Quality of Earnings Bridge</h2>
            </motion.div>

            <motion.div variants={fadeUp} className="mb-6 p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-800/40">
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                Financial Due Diligence (FDD) teams rebuild EBITDA from scratch. The output is a "Quality of Earnings" bridge —
                a waterfall that walks from the seller-reported figure to the FDD-adjusted number.
                This single document is often the pivotal input for final price negotiation.
              </p>
            </motion.div>

            {/* Waterfall */}
            <motion.div variants={stagger(0.06)} className="space-y-2 mb-6">
              {FDD_BRIDGE.map((row, i) => (
                <motion.div key={i} variants={fadeUp} className={`rounded-xl px-5 py-4 ${row.bg}`}>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{row.label}</p>
                      {row.delta && <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{row.delta}</p>}
                    </div>
                    <p className={`text-base font-bold flex-shrink-0 ${row.color}`}>{row.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Impact stats */}
            <motion.div variants={stagger(0.05)} className="grid sm:grid-cols-3 gap-4">
              {[
                { stat: "-17.5%", label: "EBITDA haircut in this example", sub: "$120M → $99M" },
                { stat: "-$315M", label: "Deal price impact at 15× multiple", sub: "$21M × 15× = $315M" },
                { stat: "35%", label: "Deals where FDD EBITDA misses by 15%+ within 12 months", sub: "KPMG (2022)" },
              ].map((s) => (
                <motion.div key={s.stat} variants={fadeUp} className="rounded-xl bg-gray-50 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700/60 p-4 text-center">
                  <p className="text-2xl font-black text-gray-900 dark:text-gray-100">{s.stat}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-snug">{s.label}</p>
                  <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5">{s.sub}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* 6. Red Flag Checklist */}
          <motion.section variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 rounded-full px-2.5 py-1">06</span>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Red Flag Checklist</h2>
            </motion.div>

            <motion.div variants={stagger(0.05)} className="space-y-3">
              {RED_FLAGS.map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="flex items-start gap-3 rounded-xl bg-rose-50/40 dark:bg-rose-950/10 border border-rose-200/60 dark:border-rose-800/30 px-5 py-4">
                  <span className="flex-shrink-0 w-5 h-5 mt-0.5 bg-rose-500 dark:bg-rose-600 rounded-full flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" aria-hidden="true">
                      <path d="M12 9v4M12 17h.01" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{item.flag}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* 7. Key Summary */}
          <motion.section variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 rounded-full px-2.5 py-1">07</span>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Summary</h2>
            </motion.div>

            <motion.div variants={fadeUp} className="mb-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200/60 dark:border-blue-800/40 p-6">
              <p className="text-base font-bold text-gray-900 dark:text-gray-100 text-center">
                Adjusted EBITDA is not fraud — until it is.
              </p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center">
                The concept has a legitimate purpose: to show normalized earnings power by stripping genuine noise. The abuse potential is structural, because every party upstream of the buyer has a financial incentive to push the number higher.
              </p>
            </motion.div>

            <motion.div variants={stagger(0.05)} className="space-y-3">
              {[
                { n: "01", point: "EV = Multiple × EBITDA means EBITDA adjustments are amplified at the deal level. A $10M shift becomes a $100–200M+ swing in price depending on the multiple." },
                { n: "02", point: "The key test is not the label — it's recurrence. If the same 'one-time' item appears in three of the last five years, it is a structural cost." },
                { n: "03", point: "Every party except the FDD team (and sometimes even the FDD team, under kill-deal pressure) has an incentive to tolerate inflated EBITDA. Structural analysis of incentives is a prerequisite for reading any adjusted disclosure." },
                { n: "04", point: "FDD Quality of Earnings adjustments typically range from 10–30% haircuts. A 15% haircut at a 15× multiple reduces deal value by 2.25× the adjustment amount in absolute terms." },
                { n: "05", point: "Regulatory pressure is rising. SEC Reg G and C&DI 2016 updates require equal or greater prominence for GAAP metrics vs. non-GAAP, specific labeling, and prohibition on exclusions that mislead reasonable investors." },
              ].map((item) => (
                <motion.div key={item.n} variants={fadeUp} className="flex gap-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700/60 px-5 py-4">
                  <span className="flex-shrink-0 text-sm font-black text-blue-600 dark:text-blue-400">{item.n}</span>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{item.point}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* 8. Regulatory Framework */}
          <motion.section variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full px-2.5 py-1">08</span>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Regulatory Framework</h2>
            </motion.div>

            <motion.div variants={stagger(0.06)} className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "SEC Regulation G (2003)", body: "Requires any public company presenting non-GAAP metrics to include a quantitative reconciliation to the most directly comparable GAAP measure. Applies to all earnings releases and investor presentations.", color: "border-blue-200 dark:border-blue-800/40 bg-blue-50/40 dark:bg-blue-950/10" },
                { title: "C&DI Updates — May 2016", body: "Prohibited non-GAAP income metrics that exclude charges or liabilities requiring cash settlement. Explicitly prohibited presenting non-GAAP on a per-share basis without equally prominent GAAP disclosure.", color: "border-blue-200 dark:border-blue-800/40 bg-blue-50/40 dark:bg-blue-950/10" },
                { title: "Item 10(e) of Regulation S-K", body: "Requires that non-GAAP measures not be presented more prominently than GAAP, must use accurate description labels, and must not omit material GAAP metrics. Enforced through SEC comment letters.", color: "border-indigo-200 dark:border-indigo-800/40 bg-indigo-50/40 dark:bg-indigo-950/10" },
                { title: "ASC 718 (FASB)", body: "Stock-Based Compensation standard requires SBC to flow through the GAAP income statement. Companies that add back SBC in adjusted metrics are explicitly excluding a GAAP-mandated expense recognized because it has economic substance.", color: "border-indigo-200 dark:border-indigo-800/40 bg-indigo-50/40 dark:bg-indigo-950/10" },
              ].map((item) => (
                <motion.div key={item.title} variants={fadeUp} className={`rounded-xl border p-5 ${item.color}`}>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* 9. Related Deals */}
          {relatedDeals.length > 0 && (
            <motion.section variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <span className="text-xs font-bold text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full px-2.5 py-1">09</span>
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Deals Featuring This Concept</h2>
              </motion.div>
              <motion.div variants={stagger(0.06)} className="space-y-3">
                {relatedDeals.map((deal) => (
                  <motion.div key={deal.slug} variants={fadeUp}>
                    <Link
                      href={`/en/deals/${deal.slug}`}
                      className="group block rounded-xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 p-5 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md transition-all"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{deal.title}</h3>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{deal.acquirer} → {deal.target}</p>
                          {deal.conceptDescription && (
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">{deal.conceptDescription}</p>
                          )}
                        </div>
                        <div className="flex-shrink-0 text-right">
                          <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">{deal.dealValueDisplay}</p>
                          <span className="mt-1 inline-block text-[11px] bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-full px-2 py-0.5">
                            {DEAL_CATEGORY_LABEL_EN[deal.category as keyof typeof DEAL_CATEGORY_LABEL_EN] ?? deal.category}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>
          )}

          {/* 10. Related Concepts */}
          <motion.section variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full px-2.5 py-1">
                {relatedDeals.length > 0 ? "10" : "09"}
              </span>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Related Concepts</h2>
            </motion.div>
            <motion.div variants={stagger(0.05)} className="flex flex-wrap gap-3">
              {RELATED_CONCEPTS.map((c) => (
                <motion.div key={c.href} variants={fadeUp}>
                  <Link
                    href={c.href}
                    className="block rounded-xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 px-4 py-3 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-sm transition-all"
                  >
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">{c.label}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{c.desc}</p>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* 11. References */}
          <motion.section variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full px-2.5 py-1">
                {relatedDeals.length > 0 ? "11" : "10"}
              </span>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">References</h2>
            </motion.div>
            <motion.ol variants={stagger(0.04)} className="space-y-2">
              {REFERENCES.map((ref) => (
                <motion.li key={ref.id} variants={fadeUp} className="flex gap-3 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  <span className="flex-shrink-0 font-semibold text-gray-400 dark:text-gray-500">[{ref.id}]</span>
                  <span>{ref.text}</span>
                </motion.li>
              ))}
            </motion.ol>
          </motion.section>

        </div>
      </main>
      <Footer />
    </>
  );
}
