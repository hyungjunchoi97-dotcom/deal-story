"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ── Animation helper ─────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// ── Color map ────────────────────────────────────────────────────
const COLOR_MAP: Record<string, { badge: string; border: string; bg: string; text: string; dot: string }> = {
  blue:    { badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",    border: "border-blue-200 dark:border-blue-800",   bg: "bg-blue-50 dark:bg-blue-900/20",    text: "text-blue-700 dark:text-blue-300",    dot: "bg-blue-500" },
  violet:  { badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300", border: "border-violet-200 dark:border-violet-800", bg: "bg-violet-50 dark:bg-violet-900/20", text: "text-violet-700 dark:text-violet-300", dot: "bg-violet-500" },
  amber:   { badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",  border: "border-amber-200 dark:border-amber-800",  bg: "bg-amber-50 dark:bg-amber-900/20",   text: "text-amber-700 dark:text-amber-300",   dot: "bg-amber-500" },
  rose:    { badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",    border: "border-rose-200 dark:border-rose-800",   bg: "bg-rose-50 dark:bg-rose-900/20",    text: "text-rose-700 dark:text-rose-300",    dot: "bg-rose-500" },
  emerald: { badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300", border: "border-emerald-200 dark:border-emerald-800", bg: "bg-emerald-50 dark:bg-emerald-900/20", text: "text-emerald-700 dark:text-emerald-300", dot: "bg-emerald-500" },
  teal:    { badge: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",    border: "border-teal-200 dark:border-teal-800",   bg: "bg-teal-50 dark:bg-teal-900/20",    text: "text-teal-700 dark:text-teal-300",    dot: "bg-teal-500" },
};

// ── Return drivers ───────────────────────────────────────────────
const DRIVERS = [
  {
    num: "①",
    title: "Leverage Effect",
    color: "blue",
    desc: "By minimizing equity and maximizing debt, the same increase in EV produces a much higher return on equity. Buy a $100M company with $30M equity + $70M debt and sell for $150M — EV rose 50%, but your equity return is ($150M − $70M) ÷ $30M = 2.67x, not 1.5x.",
    formula: "Equity Return = (Exit EV − Remaining Debt) ÷ Entry Equity",
  },
  {
    num: "②",
    title: "Multiple Expansion",
    color: "violet",
    desc: "Buy at a low EV/EBITDA multiple, sell at a higher one. Enter at 7x, exit at 10x — even with zero EBITDA growth, the pure multiple gap generates profit. Business cycles, sector re-ratings, and IPO market conditions all move multiples.",
    formula: "Multiple Expansion Gain = EBITDA × (Exit Multiple − Entry Multiple)",
  },
  {
    num: "③",
    title: "EBITDA Growth",
    color: "emerald",
    desc: "Improve actual operating performance during the holding period to grow EBITDA itself. Cost cuts, revenue expansion, divesting non-core businesses, and management changes are the main levers. Higher EBITDA accelerates debt paydown and lifts EV at exit even at the same multiple.",
    formula: "EV at Exit = Exit Multiple × EBITDA at Exit",
  },
];

// ── Target criteria ──────────────────────────────────────────────
const TARGET_CONDITIONS = [
  { title: "Stable, predictable free cash flow", desc: "Debt service requires consistent FCF. Cyclical sectors (hotels, airlines, retail) can see interest coverage collapse in a downturn.", color: "blue" },
  { title: "Tangible assets available as collateral", desc: "Lenders need real estate, equipment, or inventory to secure the loan. Software companies have limited collateral value, which caps leverage.", color: "violet" },
  { title: "Non-core assets available for sale", desc: "Post-acquisition asset sales accelerate debt repayment. Sale & Leaseback is a common tactic — but it creates permanent fixed lease obligations.", color: "amber" },
  { title: "Room for operational improvement", desc: "Companies with inefficient cost structures or owner-absent management offer the biggest post-PE improvement potential. MIPs align management incentives with the PE's return goals.", color: "rose" },
  { title: "Low existing leverage", desc: "A company already carrying heavy debt cannot support additional acquisition financing. Low Net Debt / EBITDA means more room to add LBO leverage.", color: "emerald" },
];

// ── Stakeholders ─────────────────────────────────────────────────
const STAKEHOLDERS = [
  {
    role: "PE GP (Fund Manager)",
    color: "blue",
    responsibility: "Deal sourcing, valuation, deal structuring, portfolio management, and exit decisions. Controls the target's board post-close and decides whether to retain or replace management.",
  },
  {
    role: "LP (Limited Partners)",
    color: "violet",
    responsibility: "Pension funds, insurers, sovereign wealth funds, endowments. They commit capital to the fund and receive returns based on GP performance. They don't manage deals but set investment guidelines and strategy constraints.",
  },
  {
    role: "Acquisition Finance Banks",
    color: "amber",
    responsibility: "Structure Senior Debt and Mezzanine tranches and syndicate them across multiple lenders. Set interest coverage ratios and leverage covenants to manage borrower risk.",
  },
  {
    role: "Target Management",
    color: "rose",
    responsibility: "In MBOs, management invests equity alongside the PE. The Management Incentive Plan (MIP) rewards them with options or sweet equity when performance hurdles are met.",
  },
  {
    role: "Law Firms",
    color: "emerald",
    responsibility: "Handle SPA negotiation, Credit Agreement drafting, security documentation, and SHA. Cross-border deals involve multiple jurisdictions simultaneously.",
  },
];

// ── Key documents ─────────────────────────────────────────────────
const KEY_DOCS = [
  { name: "LBO Model", color: "blue", desc: "Financial model simulating leverage levels, IRR, and MoM (Money-on-Money) multiples across scenarios. Inputs: Entry Multiple, Exit Multiple, leverage ratio, holding period, EBITDA growth. The core evidence for IC (Investment Committee) approval." },
  { name: "Credit Agreement", color: "violet", desc: "The debt contract specifying interest rates, maturity, amortization schedule, and financial covenants (Net Debt/EBITDA cap, interest coverage ratio). Covenant breach triggers Event of Default (EOD) provisions." },
  { name: "Management Incentive Plan (MIP)", color: "amber", desc: "Designs performance-linked incentives for management — stock options or sweet equity. A ratchet structure means management's upside increases nonlinearly once IRR or MoM thresholds are crossed." },
  { name: "Exit Scenario Analysis", color: "rose", desc: "Compares expected returns across IPO, Trade Sale, and Secondary Buyout (SBO) paths. Includes IRR sensitivity analysis across holding periods (3/5/7 years) and Exit Multiple ranges." },
];

// ── Case studies ─────────────────────────────────────────────────
const CASES = [
  {
    slug: null,
    title: "The Deal That Defined LBO",
    company: "KKR × RJR Nabisco (1988)",
    type: "Success Case",
    typeColor: "emerald",
    dealSize: "$31.1B — largest LBO at the time",
    analogy: "Like buying a massive grocery conglomerate entirely on credit, then selling it piece by piece to pay off the loans and pocket the profit. You bought the house with maximum mortgage, then sold the furniture, appliances, and spare rooms one by one.",
    paragraphs: [
      "In 1988, KKR acquired tobacco-and-food conglomerate RJR Nabisco for $31.1B — the largest LBO in history at the time, structured with seven layers of leverage, mostly high-yield (junk) bonds. KKR minimized its equity contribution and maximized debt.",
      "Post-acquisition, KKR divested non-core divisions — Del Monte Foods, European food operations — systematically paying down debt. The deal became the subject of 'Barbarians at the Gate,' the definitive book (and film) on 1980s PE excess.",
      "Final returns were somewhat below initial expectations, but KKR realized significant profit over the five-year hold. Above all, the deal proved that PE could acquire even the largest corporations through leverage — defining the industry for decades.",
    ],
    lesson: "LBO works best when the target has underperforming assets and clear operational upside. Rapid debt repayment through non-core asset sales dramatically reduces leverage risk. But when leverage is too high, even a mild economic downturn can threaten the entire structure.",
  },
  {
    slug: null,
    title: "The LBO Textbook",
    company: "Blackstone × Hilton Hotels (2007→2018)",
    type: "Success Case",
    typeColor: "emerald",
    dealSize: "$26B LBO / ~$14B total profit",
    analogy: "A hotel chain that looked like it would go bankrupt after the 2008 crisis ended up as a blockbuster IPO. They bought a house that caught fire, put it out, renovated it, and sold it for several times what they paid.",
    paragraphs: [
      "In 2007, Blackstone acquired Hilton Hotels for $26B. The timing was brutal — one year later the 2008 financial crisis hit and the hotel sector cratered. Hilton briefly entered debt restructuring negotiations.",
      "Blackstone held firm. They brought in a new CEO and pivoted Hilton to an asset-light, franchise-centered model — a business less sensitive to economic cycles. Franchise fee income was far more stable than owned-hotel revenue.",
      "Hilton IPO'd in 2013, and Blackstone gradually sold its stake over five years, realizing roughly $14B in total profit. It ranks among the most profitable PE deals ever executed.",
    ],
    lesson: "LBO success is driven by portfolio management capability, not leverage. The ability to redesign a business model through a crisis — and pick the right exit moment — determines final returns. Leverage is a tool; understanding the business is the edge.",
  },
  {
    slug: "mbk-homeplus",
    title: "When LBO Goes Wrong",
    company: "MBK Partners × Homeplus (2015)",
    type: "Failure Case",
    typeColor: "rose",
    dealSize: "~KRW 7.2 trillion",
    analogy: "Like selling the house to extract cash and then renting it back — only to have your income cut in half when e-commerce made your tenants (shoppers) disappear. Fixed rent piled up while revenue collapsed.",
    paragraphs: [
      "In 2015, MBK Partners acquired Homeplus from UK's Tesco for approximately KRW 7.2 trillion — the largest retail PE deal in Asian history. MBK then sold Homeplus stores and leased them back (Sale & Leaseback), recovering over KRW 4 trillion in cash.",
      "The problem was structural: e-commerce was dismantling large-format offline retail. Homeplus's revenue and EBITDA steadily declined, compounded by the heavy fixed lease obligations created by the Sale & Leaseback. The financial structure deteriorated rapidly.",
      "In March 2025, Homeplus filed for court receivership (corporate rehabilitation). Trillions in acquisition debt and lease deposits were frozen, and hundreds of suppliers were left with unpaid receivables. A KRW 7.2 trillion deal ended in insolvency ten years later.",
    ],
    lesson: "LBO in industries undergoing structural disruption is fatal. Sale & Leaseback generates short-term cash but permanently raises fixed costs. DD needs to examine not just current EBITDA but whether the industry can sustain those cash flows five to seven years out.",
  },
];

// ── Success/failure factors ───────────────────────────────────────
const SUCCESS_FACTORS = [
  { factor: "FCF Stability", success: "Sufficient cash flow to service debt", failure: "Coverage collapses in a downturn", color: "blue" },
  { factor: "Leverage Level", success: "Net Debt/EBITDA 4–6x (conservative)", failure: "7x+ excessive leverage", color: "violet" },
  { factor: "Exit Timing", success: "IPO/sale during multiple expansion", failure: "Forced exit in recession, multiple contraction", color: "amber" },
  { factor: "EBITDA Growth", success: "Cost cuts + revenue growth improve EBITDA", failure: "Structural industry decline shrinks EBITDA", color: "rose" },
  { factor: "Asset Divestitures", success: "Early debt paydown reduces leverage risk", failure: "S&LB creates permanent fixed lease burden", color: "emerald" },
  { factor: "DD Quality", success: "Structural industry change fully examined", failure: "Current EBITDA taken at face value, future ignored", color: "teal" },
];

export default function LboClientEn() {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── Hero ── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-10">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/en/deal-101" className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                ← Deal 101
              </Link>
              <span className="text-xs text-gray-300 dark:text-gray-600">/</span>
              <span className="text-xs text-gray-400">LBO</span>
            </div>
            <span className="inline-block text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 rounded-full px-3 py-1 mb-4">
              Deal Structure
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              LBO (Leveraged Buyout) — Buying a Company with Its Own Money
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              LBO is private equity's core strategy: use the target company's own assets and cash flows as collateral to borrow most of the purchase price, amplifying equity returns. Here's how it works, when it succeeds, and when it blows up.
            </p>

            {/* Quick navigation */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { href: "#principle", label: "Core Mechanics" },
                { href: "#drivers", label: "Return Drivers" },
                { href: "#target", label: "Target Criteria" },
                { href: "#stakeholders", label: "Stakeholders" },
                { href: "#documents", label: "Key Documents" },
                { href: "#cases", label: "Case Studies" },
                { href: "#summary", label: "Success & Failure" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-16">

          {/* ── 1. Core mechanics ── */}
          <motion.section
            id="principle"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">1. Core Mechanics — Why LBO?</h2>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                The logic of an LBO is straightforward: <strong className="text-gray-800 dark:text-gray-200">minimize equity, maximize debt secured against the target's own assets and future cash flows.</strong> The less equity you put in, the higher your return on equity for the same dollar gain in enterprise value — that is the essence of the leverage effect.
              </p>
              <p>
                PE funds favor LBOs because leverage lets them acquire companies far larger than their fund size. A $1B fund can execute a $3–4B deal when 60–70% is debt-financed. The flip side: more debt means larger interest payments, and if cash flows disappoint, the whole structure is at risk.
              </p>
            </div>

            {/* Analogy */}
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 my-5">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 Think of it this way</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                It's like buying a house with a mortgage. You put in $200K of your own money and borrow $600K from a bank to buy an $800K house. If the house rises to $1M, your gain is $200K on a $200K investment — 100% return. Had you bought it with $800K cash, you'd have earned only 25%. That multiplied return is the power of leverage.
              </p>
            </div>

            {/* Formulas */}
            <div className="rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 p-5">
              <h3 className="text-sm font-bold text-blue-700 dark:text-blue-300 mb-3">Core LBO Formulas</h3>
              <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200 font-mono">
                <p>EV (Enterprise Value) = Equity + Net Debt</p>
                <p>IRR = f (Entry Multiple, Exit Multiple, Leverage, Holding Period, EBITDA Growth)</p>
                <p>MoM = Exit Equity ÷ Entry Equity</p>
              </div>
              <p className="mt-3 text-xs text-blue-700 dark:text-blue-300 leading-relaxed">
                PE target IRR is typically 20%+, MoM 2.0–3.0x+. Average holding period: 4–7 years.
              </p>
            </div>

            {/* Key insight */}
            <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Key Insight</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                Leverage amplifies returns — and risk in equal measure. A 20% shortfall in expected cash flows can destroy interest coverage when leverage is high. That's why downside scenario analysis in an LBO model is just as important as the base case.
              </p>
            </div>
          </motion.section>

          {/* ── 2. Return drivers ── */}
          <motion.section
            id="drivers"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">2. How LBOs Generate Returns — 3 Drivers</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">A PE fund's final IRR and MoM are determined by the combination of these three factors. Good deals have at least two working in their favor.</p>

            <div className="space-y-4">
              {DRIVERS.map((d) => {
                const c = COLOR_MAP[d.color];
                return (
                  <div key={d.num} className={`rounded-xl border ${c.border} ${c.bg} p-5`}>
                    <div className="flex items-start gap-3">
                      <span className={`text-lg font-bold ${c.text} shrink-0`}>{d.num}</span>
                      <div className="flex-1">
                        <h3 className={`text-sm font-bold ${c.text} mb-2`}>{d.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{d.desc}</p>
                        <div className={`rounded-lg px-3 py-2 bg-white/60 dark:bg-gray-900/40 border ${c.border}`}>
                          <p className={`text-xs font-mono font-semibold ${c.text}`}>{d.formula}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Key Insight</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                In the low-rate era of the 2010s, leverage alone plus multiple expansion was enough for strong IRRs. Since 2022's rate surge, EBITDA growth has become the dominant driver. When the rate environment shifts, so does the LBO return structure.
              </p>
            </div>
          </motion.section>

          {/* ── 3. Target criteria ── */}
          <motion.section
            id="target"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">3. What Makes an Ideal LBO Target</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              Not every company is LBO-friendly. The more of these conditions a target meets, the higher the leverage it can support and the higher the probability of success.
            </p>

            <div className="space-y-3">
              {TARGET_CONDITIONS.map((item, i) => {
                const c = COLOR_MAP[item.color];
                return (
                  <div key={i} className="flex gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 text-sm">
                    <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${c.dot}`} />
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200 mb-1">{item.title}</p>
                      <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 Think of it this way</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                An ideal LBO target is like a house you can finance heavily: stable rental demand (cash flow), strong collateral value (tangible assets), renovation upside (operational improvement), and no existing liens (low current debt). Buy a structurally challenged property in a declining neighborhood with maximum leverage and you get the Homeplus story.
              </p>
            </div>
          </motion.section>

          {/* ── 4. Stakeholders ── */}
          <motion.section
            id="stakeholders"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">4. Stakeholders & Their Roles</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              Multiple parties with different incentives participate in an LBO. Understanding those incentives reveals the deal's underlying dynamics.
            </p>

            <div className="space-y-3">
              {STAKEHOLDERS.map((s, i) => {
                const c = COLOR_MAP[s.color];
                return (
                  <div key={i} className="flex gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 text-sm">
                    <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${c.dot}`} />
                    <div>
                      <span className="font-semibold text-gray-800 dark:text-gray-200">{s.role}</span>
                      <p className="text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{s.responsibility}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Key Insight</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                The GP earns Carried Interest — typically 20% of gains above the hurdle rate. They only win if the fund as a whole wins. Banks, by contrast, earn fixed interest and set conservative covenants to protect against downside. This misalignment drives the key tension in every leverage negotiation.
              </p>
            </div>
          </motion.section>

          {/* ── 5. Key documents ── */}
          <motion.section
            id="documents"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">5. Key Documents</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              Four documents sit at the heart of every LBO transaction, each controlling a different dimension of the deal.
            </p>

            <div className="space-y-3">
              {KEY_DOCS.map((doc, i) => {
                const c = COLOR_MAP[doc.color];
                return (
                  <div key={i} className="p-4 rounded-xl border border-gray-100 dark:border-gray-700 text-sm">
                    <span className={`inline-block text-xs font-semibold rounded px-2 py-0.5 mb-2 ${c.badge}`}>{doc.name}</span>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{doc.desc}</p>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ── 6. Case studies ── */}
          <section id="cases">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">6. Case Studies — Where LBOs Succeed and Fail</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                LBO doesn't end with an IRR formula on a whiteboard. The same leverage structure produces wildly different outcomes depending on the industry, timing, and how the business is managed.
              </p>
            </motion.div>

            <div className="space-y-8">
              {CASES.map((c_item, idx) => {
                const c = COLOR_MAP[c_item.typeColor];
                return (
                  <motion.div
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                  >
                    {/* Case header */}
                    <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-4 flex items-start justify-between gap-3 flex-wrap">
                      <div>
                        <span className={`inline-block text-xs font-medium rounded-full px-2.5 py-0.5 mb-2 ${c.badge}`}>
                          {c_item.type}
                        </span>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{c_item.title}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{c_item.company}</p>
                      </div>
                      <div className={`text-xs font-medium rounded-lg px-3 py-2 ${c.bg} ${c.text} border ${c.border}`}>
                        💰 {c_item.dealSize}
                      </div>
                    </div>

                    <div className="p-5 space-y-4">
                      {/* Analogy */}
                      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                        <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 Think of it this way</p>
                        <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">{c_item.analogy}</p>
                      </div>

                      {/* Body */}
                      <div className="space-y-3">
                        {c_item.paragraphs.map((p, i) => (
                          <p key={i} className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{p}</p>
                        ))}
                      </div>

                      {/* Lesson */}
                      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                        <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Key Lesson</p>
                        <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">{c_item.lesson}</p>
                      </div>

                      {/* Deal link */}
                      {c_item.slug && (
                        <Link
                          href={`/deals/${c_item.slug}`}
                          className="inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          Read the full deal story →
                        </Link>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* ── 7. Success/failure summary ── */}
          <motion.section
            id="summary"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">7. LBO Success & Failure Factors</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-3 pr-4 text-xs font-bold text-gray-500 dark:text-gray-400 w-1/4">Factor</th>
                    <th className="text-left py-3 pr-4 text-xs font-bold text-emerald-600 dark:text-emerald-400 w-[37.5%]">Success Condition</th>
                    <th className="text-left py-3 text-xs font-bold text-rose-600 dark:text-rose-400 w-[37.5%]">Failure Condition</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {SUCCESS_FACTORS.map((row, i) => {
                    const c = COLOR_MAP[row.color];
                    return (
                      <tr key={i}>
                        <td className="py-3 pr-4">
                          <span className={`text-xs font-semibold rounded px-2 py-0.5 ${c.badge}`}>{row.factor}</span>
                        </td>
                        <td className="py-3 pr-4 text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{row.success}</td>
                        <td className="py-3 text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{row.failure}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="mt-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Key Insight</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                LBO is a tool, not a strategy. Whether that tool generates value depends on target selection, operational improvement, and exit timing. Leverage makes a good deal great and a bad deal catastrophic.
              </p>
            </div>
          </motion.section>

          {/* ── Related concepts ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">Related Concepts</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/en/deal-101/ma-process", title: "M&A Process", desc: "The full deal flow that an LBO transaction follows from start to close", badge: "Deal Structure" },
                { href: "/en/deal-101/ev-ebitda", title: "EV/EBITDA Multiple", desc: "The core valuation metric that sets Entry and Exit prices in an LBO", badge: "Valuation" },
                { href: "/en/deal-101/adjusted-ebitda", title: "Adjusted EBITDA", desc: "The baseline figure that determines leverage capacity and IRR calculations", badge: "Valuation" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group block p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
                >
                  <span className="text-[10px] font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 rounded-full px-2 py-0.5">
                    {item.badge}
                  </span>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mt-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.desc}</p>
                </Link>
              ))}
            </div>
          </motion.section>

        </div>
      </main>
      <Footer />
    </>
  );
}
