"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ── Animation variants ──────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};
const stagger = (delay = 0.08) => ({
  hidden: {},
  visible: { transition: { staggerChildren: delay } },
});

// ── COLOR MAP ────────────────────────────────────────────────────
const COLOR_MAP: Record<string, { bg: string; border: string; text: string; badge: string; dot: string }> = {
  blue:    { bg: "bg-blue-50 dark:bg-blue-900/20",     border: "border-blue-200 dark:border-blue-800",     text: "text-blue-700 dark:text-blue-300",     badge: "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300",     dot: "bg-blue-500" },
  amber:   { bg: "bg-amber-50 dark:bg-amber-900/20",   border: "border-amber-200 dark:border-amber-800",   text: "text-amber-700 dark:text-amber-300",   badge: "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300",   dot: "bg-amber-500" },
  emerald: { bg: "bg-emerald-50 dark:bg-emerald-900/20", border: "border-emerald-200 dark:border-emerald-800", text: "text-emerald-700 dark:text-emerald-300", badge: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300", dot: "bg-emerald-500" },
  rose:    { bg: "bg-rose-50 dark:bg-rose-900/20",     border: "border-rose-200 dark:border-rose-800",     text: "text-rose-700 dark:text-rose-300",     badge: "bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300",     dot: "bg-rose-500" },
  violet:  { bg: "bg-violet-50 dark:bg-violet-900/20", border: "border-violet-200 dark:border-violet-800", text: "text-violet-700 dark:text-violet-300", badge: "bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300", dot: "bg-violet-500" },
  indigo:  { bg: "bg-indigo-50 dark:bg-indigo-900/20", border: "border-indigo-200 dark:border-indigo-800", text: "text-indigo-700 dark:text-indigo-300", badge: "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300", dot: "bg-indigo-500" },
  sky:     { bg: "bg-sky-50 dark:bg-sky-900/20",       border: "border-sky-200 dark:border-sky-800",       text: "text-sky-700 dark:text-sky-300",       badge: "bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300",       dot: "bg-sky-500" },
  orange:  { bg: "bg-orange-50 dark:bg-orange-900/20", border: "border-orange-200 dark:border-orange-800", text: "text-orange-700 dark:text-orange-300", badge: "bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300", dot: "bg-orange-500" },
};

// ── Data ────────────────────────────────────────────────────────
const ARR_DRIVERS = [
  {
    num: "01",
    title: "NRR (Net Revenue Retention)",
    body: "Calculated as renewals + upsells minus churn from existing customers. 120%+ = world-class, 100%+ = healthy. Below 100% signals net customer attrition. High NRR is the primary justification for a premium ARR multiple.",
    color: "violet",
  },
  {
    num: "02",
    title: "ARR Growth Rate",
    body: "Year-over-year ARR growth. Companies growing at 50%+ command premium multiples. As growth decelerates, multiples compress rapidly. ARR growth is driven by two levers: new customer acquisition and upsell within the existing base.",
    color: "blue",
  },
  {
    num: "03",
    title: "Gross Margin",
    body: "The ideal SaaS gross margin is 70%+. As cloud infrastructure costs are optimized at scale, improving margins as the company grows becomes the structural basis for a premium ARR multiple.",
    color: "emerald",
  },
  {
    num: "04",
    title: "Rule of 40",
    body: "ARR growth rate + FCF (free cash flow) margin ≥ 40%. The SaaS industry's standard measure of the growth-profitability balance. Companies that meet this threshold tend to command premium ARR multiples.",
    color: "sky",
  },
  {
    num: "05",
    title: "CAC Payback Period",
    body: "How many months it takes to recoup the cost of acquiring a new customer. Under 12 months is ideal; exceeding 18 months is read as a signal of declining growth efficiency.",
    color: "amber",
  },
];

const ARR_CYCLE = [
  { period: "2019", range: "Average 8 – 12×", note: "Normal rates, rational growth-stock valuations", color: "emerald" },
  { period: "2020 – 2021 (Bubble)", range: "20 – 50×, some 100×+", note: "COVID digital acceleration + zero interest rates. Bubble territory.", color: "rose" },
  { period: "2022", range: "Rapid compression to 5 – 8×", note: "Fed rate hikes + growth stock selloff. Broad multiple contraction.", color: "amber" },
  { period: "2023 – present", range: "15 – 25× (incl. AI premium)", note: "Reorientation toward scale and profitability. AI SaaS commands a separate premium.", color: "blue" },
];

const CASE_STUDIES = [
  {
    title: "Salesforce × MuleSoft ($6.5B, 2018)",
    badge: "Ecosystem Expansion",
    color: "blue",
    multiple: "~22×",
    multipleLabel: "ARR multiple",
    rows: [
      { label: "Deal overview", value: "MuleSoft ARR of ~$296M. Salesforce acquired the #1 API integration platform at $6.5B." },
      { label: "ARR multiple", value: "Approximately 22× on $296M ARR — among the highest in enterprise software M&A at the time." },
      { label: "Premium rationale", value: "#1 market share in API integration, strong cross-sell potential with existing Salesforce customers, high NRR from enterprise accounts." },
      { label: "Post-acquisition", value: "By 2023, MuleSoft contributed billions to Salesforce's total ARR and became the core layer of Salesforce Integration Cloud." },
    ],
  },
  {
    title: "SAP × Qualtrics ($8B, 2019 / Re-IPO $12.5B / Re-privatized $12.5B)",
    badge: "Acquisition → IPO → Re-privatization",
    color: "violet",
    multiple: "~20×",
    multipleLabel: "ARR multiple at time of acquisition",
    rows: [
      { label: "Deal overview", value: "SAP acquired experience management (XM) SaaS platform Qualtrics for $8B just before its IPO. ARR at ~$400M." },
      { label: "ARR multiple", value: "Approximately 20× on $400M ARR. SAP expected synergies with its existing CRM customer base." },
      { label: "What made it unusual", value: "SAP acquired the company but then re-listed Qualtrics on NASDAQ at $12.5B in 2021 as a standalone entity. Silver Lake and Canada Pension subsequently took it private again in 2023 at $12.5B." },
      { label: "Key lesson", value: "The growth potential of the XM SaaS market and the value of an independent platform justified the ARR multiple. The same asset was re-priced from $8B to $12.5B within four years." },
    ],
  },
];

const RELATED_CONCEPTS = [
  { label: "EV/Sales Multiple", href: "/en/deal-101/ev-sales", note: "Non-SaaS growth company basis" },
  { label: "SaaS Valuation", href: "/en/deal-101/saas-valuation", note: "SaaS-specific metrics" },
  { label: "EV/EBITDA Multiple", href: "/en/deal-101/ev-ebitda", note: "Mature company valuation" },
];

// ── Component ────────────────────────────────────────────────────
export default function ArrMultipleClientEn() {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-12">
            <motion.nav
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}
              className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 mb-6"
            >
              <Link href="/en/deal-101" className="hover:text-blue-500 transition-colors">Deal 101</Link>
              <span>/</span>
              <span className="text-gray-600 dark:text-gray-300 font-medium">ARR Multiple</span>
            </motion.nav>

            <motion.div variants={stagger(0.1)} initial="hidden" animate="visible">
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-[11px] font-semibold rounded-full px-2.5 py-0.5 bg-violet-50 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300">
                  Valuation
                </span>
                <span className="text-[11px] text-gray-400 dark:text-gray-500">SaaS deep dive · ~10 min read</span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                ARR Multiple
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-3 text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
                The core language of SaaS M&A. Why ARR is fundamentally different from ordinary revenue — and what separates a 20× company from a 5× one.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-4">
                <Link href="/deal-101/arr-multiple" className="text-xs text-gray-400 hover:text-blue-500 transition-colors">
                  한국어로 읽기 →
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-14 space-y-20">

          {/* ══ 1. What is the ARR Multiple ═══════════════════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              What is the ARR Multiple?
            </motion.h2>

            <motion.div variants={fadeUp} className="space-y-4 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                <strong className="text-gray-800 dark:text-gray-200">ARR (Annual Recurring Revenue)</strong> is the annualized figure for subscription-based revenue.
                It is calculated as MRR (Monthly Recurring Revenue) × 12 and includes{" "}
                <strong className="text-gray-800 dark:text-gray-200">only pure recurring revenue — one-time fees and professional services are excluded</strong>.
              </p>
              <p>
                <strong className="text-gray-800 dark:text-gray-200">ARR Multiple = EV ÷ ARR.</strong>{" "}
                The difference from EV/Revenue lies in the denominator. Because ARR excludes one-time revenue, it precisely isolates the recurring engine that drives a SaaS business.
                Two companies each at $100M revenue can represent entirely different business quality depending on the ARR mix.
              </p>
              <p>
                The ARR multiple is used primarily in SaaS startup M&A, private SaaS investments, and VC/PE portfolio valuations.
                Unlike the public-market EV/NTM Revenue, the ARR multiple is typically calculated directly against a private company&apos;s current ARR.
              </p>
            </motion.div>

            {/* ARR structure */}
            <motion.div variants={fadeUp} className="mt-8 rounded-2xl bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-950/30 dark:to-indigo-950/20 border border-violet-100 dark:border-violet-900/50 p-6">
              <p className="text-xs font-semibold text-violet-500 dark:text-violet-400 uppercase tracking-wider mb-4">ARR Calculation Structure</p>
              <div className="space-y-2">
                {[
                  { label: "MRR (Monthly Recurring Revenue)", note: "Monthly recurring subscription revenue", color: "text-violet-600 dark:text-violet-400" },
                  { label: "× 12", note: "Annualized", color: "text-gray-400" },
                  { label: "= ARR (Annual Recurring Revenue)", note: "Annual recurring revenue — one-time fees excluded", color: "text-violet-700 dark:text-violet-300", bold: true },
                  { label: "ARR Multiple = EV ÷ ARR", note: "The benchmark for SaaS company valuation", color: "text-gray-900 dark:text-gray-100", bold: true },
                ].map((row) => (
                  <div key={row.label} className={`flex items-center gap-3 py-1.5 ${row.bold ? "border-t border-violet-200 dark:border-violet-800 pt-2.5 mt-1" : ""}`}>
                    <span className={`text-sm ${row.bold ? "font-bold" : "font-medium"} ${row.color} flex-1`}>{row.label}</span>
                    <span className="text-[11px] text-gray-400 dark:text-gray-500">{row.note}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Think of it this way box */}
            <motion.div variants={fadeUp} className="mt-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 Think of it this way</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                The true value of ARR is the product of how many paying subscribers you have, how long they stay, and how much more they spend over time.
                The ARR multiple is the question: how many times that compounding growth engine are you willing to buy it for today?
              </p>
            </motion.div>
          </motion.section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ══ 2. Five metrics that drive the ARR multiple ════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Five Metrics That Drive the ARR Multiple
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base text-gray-500 dark:text-gray-400 mb-8">
              Two companies each at $50M ARR can trade at anywhere from 5× to 25× depending on these five metrics.
            </motion.p>

            <motion.div variants={stagger(0.07)} className="space-y-3">
              {ARR_DRIVERS.map((item) => {
                const c = COLOR_MAP[item.color];
                return (
                  <motion.div
                    key={item.num}
                    variants={fadeUp}
                    className={`rounded-xl border p-4 ${c.border} ${c.bg}`}
                  >
                    <div className="flex items-start gap-3">
                      <span className={`text-[11px] font-black flex-shrink-0 mt-0.5 ${c.text}`}>{item.num}</span>
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Key insight — Rule of 40 */}
            <motion.div variants={fadeUp} className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Key Insight — Rule of 40</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Rule of 40 has the strongest empirical correlation with ARR multiples among SaaS metrics.
                Example: ARR growth 35% + FCF margin 10% = 45 → passes. Growth 20% + FCF margin 15% = 35 → fails.
                Companies that exceed 40 are far more likely to command premium ARR multiples; those below face multiple compression pressure.
              </p>
            </motion.div>
          </motion.section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ══ 3. ARR multiple cycle ══════════════════════════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              The ARR Multiple Cycle — Bubble and Correction
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base text-gray-500 dark:text-gray-400 mb-8">
              ARR multiples are acutely sensitive not just to a SaaS company&apos;s intrinsic quality but also to the macroeconomic rate environment and growth-stock sentiment.
            </motion.p>

            <motion.div variants={stagger(0.08)} className="space-y-3">
              {ARR_CYCLE.map((item) => {
                const c = COLOR_MAP[item.color];
                return (
                  <motion.div
                    key={item.period}
                    variants={fadeUp}
                    className={`rounded-xl border p-4 ${c.border} ${c.bg}`}
                  >
                    <div className="flex flex-wrap items-start gap-3">
                      <span className={`text-xs font-black flex-shrink-0 ${c.text} w-36`}>{item.period}</span>
                      <div className="flex-1">
                        <p className={`text-sm font-bold ${c.text} mb-0.5`}>{item.range}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{item.note}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 The M&A Discount Convention</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                In M&A deals, it is standard practice to apply a{" "}
                <strong className="text-gray-800 dark:text-gray-200">20–35% discount</strong> to the ARR multiple of comparable public SaaS companies.
                Private companies lack a liquidity premium, and acquirers pay a separate control premium — these structural factors drive the discount.
              </p>
            </motion.div>
          </motion.section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ══ 4. Case studies ═══════════════════════════════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Case Studies
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base text-gray-500 dark:text-gray-400 mb-8">
              Two real deals where the ARR multiple was the core valuation argument.
            </motion.p>

            <motion.div variants={stagger(0.1)} className="space-y-6">
              {CASE_STUDIES.map((cs) => {
                const c = COLOR_MAP[cs.color];
                return (
                  <motion.div
                    key={cs.title}
                    variants={fadeUp}
                    className={`rounded-2xl border p-6 ${c.border} ${c.bg}`}
                  >
                    <div className="flex flex-wrap items-start gap-3 mb-4">
                      <span className={`text-[11px] font-bold rounded-full px-2.5 py-0.5 ${c.badge}`}>
                        {cs.badge}
                      </span>
                      <span className={`font-black text-2xl font-mono ml-auto ${c.text}`}>{cs.multiple}</span>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-1">{cs.title}</h3>
                    <p className={`text-[11px] font-medium mb-4 ${c.text}`}>{cs.multipleLabel}</p>
                    <div className="space-y-2.5">
                      {cs.rows.map((row) => (
                        <div key={row.label} className="flex gap-3 text-sm">
                          <span className="font-semibold text-gray-600 dark:text-gray-400 flex-shrink-0 w-32 text-xs pt-0.5">{row.label}</span>
                          <span className="text-gray-700 dark:text-gray-300 leading-relaxed text-xs">{row.value}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ══ 5. Key takeaways ══════════════════════════════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
              <span className="text-xs font-bold bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-full px-3 py-1">
                Key Takeaways
              </span>
              <span className="text-xs text-gray-400 dark:text-gray-500">ARR Multiple in one page</span>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-950/40 dark:to-indigo-950/30 border border-violet-100 dark:border-violet-900/50 p-6 mb-5">
              <p className="text-[11px] font-semibold text-violet-500 dark:text-violet-400 uppercase tracking-wider mb-2">One-line definition</p>
              <p className="text-base font-bold text-gray-900 dark:text-gray-100 leading-snug">
                The ARR multiple measures &ldquo;how many times a SaaS company&apos;s pure recurring revenue engine is priced into its current enterprise value&rdquo; — it is a bet on the durability of compounding growth.
              </p>
            </motion.div>

            <motion.div variants={stagger(0.07)} className="space-y-2.5">
              {[
                { num: "01", title: "ARR is not ordinary revenue", body: "It includes only pure recurring subscription revenue — one-time fees and consulting revenue are excluded. Two companies at the same top-line revenue can have very different business quality depending on their ARR mix.", color: "text-violet-500" },
                { num: "02", title: "NRR is the primary driver of the ARR multiple", body: "A 120%+ NRR means revenue grows even without adding a single new customer. This structural advantage of compounding ARR without new acquisition spend is what commands the premium.", color: "text-blue-500" },
                { num: "03", title: "Rule of 40 measures the growth-profitability balance", body: "Companies that balance high growth with profitability command premium multiples over those that pursue growth or profitability alone.", color: "text-emerald-500" },
                { num: "04", title: "M&A prices in a discount to public comps", body: "Acquiring a private SaaS company at a 20–35% discount to public-market ARR multiples is standard. The absence of liquidity and the control premium structure both drive this discount.", color: "text-amber-500" },
              ].map((pt) => (
                <motion.div key={pt.num} variants={fadeUp}
                  className="flex gap-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/60 px-4 py-3.5"
                >
                  <span className={`text-[11px] font-black flex-shrink-0 mt-0.5 ${pt.color}`}>{pt.num}</span>
                  <div>
                    <p className="text-xs font-bold text-gray-900 dark:text-gray-100 mb-0.5">{pt.title}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{pt.body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ══ 6. Related concepts ═══════════════════════════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">Related Concepts</motion.h2>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {RELATED_CONCEPTS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-1.5 rounded-full border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 px-3.5 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 hover:border-violet-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                >
                  {item.label}
                  <span className="text-gray-400 dark:text-gray-500 text-[10px]">· {item.note}</span>
                </Link>
              ))}
            </motion.div>
          </motion.section>

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-center pt-2"
          >
            <Link href="/en/deal-101" className="text-sm text-gray-400 hover:text-violet-500 transition-colors">
              ← All Deal 101 Concepts
            </Link>
          </motion.div>

        </div>
      </main>
      <Footer />
    </>
  );
}
