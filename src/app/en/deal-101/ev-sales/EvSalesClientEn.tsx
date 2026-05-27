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
const MULTIPLE_DRIVERS = [
  {
    num: "01",
    title: "Revenue Growth",
    body: "Higher YoY revenue growth justifies a higher multiple. Companies growing 50%+ typically command premium multiples. As growth decelerates, multiples compress sharply.",
    color: "blue",
  },
  {
    num: "02",
    title: "Gross Margin",
    body: "SaaS companies typically achieve 70%+ gross margins, while hardware companies run 20–30%. The higher the margin, the more cash remains per dollar of revenue — commanding a higher multiple.",
    color: "emerald",
  },
  {
    num: "03",
    title: "NRR (Net Revenue Retention)",
    body: "Net revenue retention captures renewals plus upsells minus churn. Above 100%, revenue grows even without adding new customers. Companies at 120%+ NRR command the highest multiples in SaaS M&A.",
    color: "violet",
  },
  {
    num: "04",
    title: "TAM (Total Addressable Market)",
    body: "A larger addressable market signals a longer runway for sustained growth. Companies targeting multi-billion-dollar TAMs are assigned enterprise values far beyond their current revenue.",
    color: "sky",
  },
  {
    num: "05",
    title: "Competitive Position",
    body: "Market leadership or a clear technology moat commands a 30–50% premium over peers. Network effects, high switching costs, and platform lock-in amplify the multiple.",
    color: "amber",
  },
];

const SECTOR_BENCHMARKS = [
  { sector: "SaaS (high growth, NRR 120%+)", range: "10 – 30×", note: "Subscription expansion · low churn · ARR compounding" },
  { sector: "SaaS (moderate growth)", range: "4 – 10×", note: "Stable but decelerating growth" },
  { sector: "E-commerce", range: "1 – 3×", note: "Thin margins · intense competition" },
  { sector: "Healthcare Tech", range: "3 – 8×", note: "Regulatory risk · long sales cycles" },
  { sector: "Fintech", range: "2 – 6×", note: "Regulatory environment · monetization uncertainty" },
  { sector: "Hardware / Manufacturing", range: "0.5 – 2×", note: "Low margins · high capex burden" },
];

const CASE_STUDIES = [
  {
    title: "Salesforce × Slack ($27.7B, 2021)",
    badge: "Strategic Defense Acquisition",
    color: "blue",
    multiple: "~26×",
    multipleLabel: "NTM Revenue multiple",
    rows: [
      { label: "Background", value: "Salesforce moved to counter Microsoft Teams' rapid growth by entering the enterprise collaboration market. Slack was in the midst of accelerating its enterprise customer base." },
      { label: "EV/Sales multiple", value: "Based on Slack ARR of ~$900M, NTM Revenue multiple of approximately 26× — among the highest in SaaS M&A at the time." },
      { label: "Why so high", value: "Over 82% enterprise customer retention, network effects, and urgency driven by the Microsoft rivalry all justified the premium." },
      { label: "Post-acquisition", value: "Slack became the core collaboration layer of Salesforce Customer 360, contributing to overall ARR growth across the platform." },
    ],
  },
  {
    title: "Adobe × Figma ($20B, 2022 — Deal terminated)",
    badge: "Withdrawn on antitrust grounds",
    color: "rose",
    multiple: "~50×",
    multipleLabel: "ARR multiple — among the highest ever recorded",
    rows: [
      { label: "Background", value: "Adobe sought to dominate the design tool market by acquiring Figma, whose browser-based collaborative model was architecturally distinct from Adobe's desktop products." },
      { label: "EV/Sales multiple", value: "Based on Figma ARR of ~$400M, approximately 50× — one of the highest multiples in SaaS M&A history." },
      { label: "Why this price", value: "#1 in design collaboration, a fundamentally different technology stack from Adobe, and powerful network effects with dominance over the designer community." },
      { label: "Outcome", value: "Adobe voluntarily terminated the deal in 2023 amid EU competition authority concerns. That said, the 50× multiple became an industry reference point for SaaS M&A valuation." },
    ],
  },
];

const RELATED_CONCEPTS = [
  { label: "ARR Multiple", href: "/en/deal-101/arr-multiple", note: "SaaS recurring revenue basis" },
  { label: "EV/EBITDA Multiple", href: "/en/deal-101/ev-ebitda", note: "Mature company valuation" },
  { label: "SaaS Valuation", href: "/en/deal-101/saas-valuation", note: "SaaS-specific metrics" },
  { label: "Acquisition Premium", href: "/en/deal-101/acquisition-premium", note: "Control premium" },
];

// ── Component ────────────────────────────────────────────────────
export default function EvSalesClientEn() {
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
              <span className="text-gray-600 dark:text-gray-300 font-medium">EV/Sales Multiple</span>
            </motion.nav>

            <motion.div variants={stagger(0.1)} initial="hidden" animate="visible">
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-[11px] font-semibold rounded-full px-2.5 py-0.5 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                  Valuation
                </span>
                <span className="text-[11px] text-gray-400 dark:text-gray-500">Core concept · ~10 min read</span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                EV/Sales Multiple
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-3 text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
                The logic behind paying tens of times revenue for a company with no profit. The only common valuation language in high-growth M&A.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-4">
                <Link href="/deal-101/ev-sales" className="text-xs text-gray-400 hover:text-blue-500 transition-colors">
                  한국어로 읽기 →
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-14 space-y-20">

          {/* ══ 1. What is EV/Sales ════════════════════════════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              What is EV/Sales?
            </motion.h2>

            <motion.div variants={fadeUp} className="space-y-4 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                <strong className="text-gray-800 dark:text-gray-200">EV/Sales = Enterprise Value ÷ Annual Revenue.</strong>{" "}
                It tells you how many times a company&apos;s annual revenue the total acquisition cost represents.
              </p>
              <p>
                EV/EBITDA works well for mature companies with positive EBITDA. But for high-growth startups, SaaS companies, and biotech firms where{" "}
                <strong className="text-gray-800 dark:text-gray-200">EBITDA is negative or meaningless</strong>,
                EV/Sales becomes the only common valuation benchmark. Since the denominator is revenue, the multiple is always positive — even for loss-making companies.
              </p>
              <p>
                Primary use cases include tech startup M&A, SaaS IPOs and acquisitions, and high-growth biotech valuations.
                In the PE/VC world, it is essential for pre-estimating exit multiples on portfolio companies.
              </p>
            </motion.div>

            {/* Formula box */}
            <motion.div variants={fadeUp} className="mt-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 border border-blue-100 dark:border-blue-900/50 p-8 text-center">
              <p className="text-3xl font-black text-blue-700 dark:text-blue-300 font-mono tracking-tight">
                EV / Revenue
              </p>
              <div className="mt-4 space-y-1 text-sm text-blue-600/80 dark:text-blue-400/70 font-mono">
                <p>= (Market Cap + Net Debt)</p>
                <p className="text-blue-400/60">÷</p>
                <p>= Annual Revenue (or NTM Revenue)</p>
              </div>
            </motion.div>

            {/* EV/EBITDA vs EV/Sales */}
            <motion.div variants={fadeUp} className="mt-8 grid sm:grid-cols-2 gap-3">
              <div className="rounded-xl border border-emerald-200 dark:border-emerald-800/50 bg-emerald-50/60 dark:bg-emerald-950/20 p-4">
                <p className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 mb-2">When to use EV/EBITDA</p>
                <ul className="space-y-1.5">
                  {["Mature companies with positive EBITDA", "Stable cash flow businesses", "Manufacturing · Retail · Utilities", "LBO structure analysis"].map((t) => (
                    <li key={t} className="text-xs text-gray-600 dark:text-gray-400 flex gap-1.5">
                      <span className="text-emerald-500 flex-shrink-0">·</span>{t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-blue-200 dark:border-blue-800/50 bg-blue-50/60 dark:bg-blue-950/20 p-4">
                <p className="text-[11px] font-bold text-blue-600 dark:text-blue-400 mb-2">When to use EV/Sales</p>
                <ul className="space-y-1.5">
                  {["EBITDA-negative high-growth companies", "SaaS · tech startups", "Biotech · deep tech", "VC exit multiple estimation"].map((t) => (
                    <li key={t} className="text-xs text-gray-600 dark:text-gray-400 flex gap-1.5">
                      <span className="text-blue-500 flex-shrink-0">·</span>{t}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Think of it this way box */}
            <motion.div variants={fadeUp} className="mt-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 Think of it this way</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                When valuing a startup with no profit yet, revenue is the only common language. Rapid revenue growth — even with no earnings — signals that the seeds of future profit are compounding.
                EV/Sales is the tool that prices those seeds.
              </p>
            </motion.div>
          </motion.section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ══ 2. Five drivers of the EV/Sales multiple ══════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Five Drivers of the EV/Sales Multiple
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base text-gray-500 dark:text-gray-400 mb-8">
              Two companies each at $100M revenue can trade at 5× or 30× depending on the five factors below.
            </motion.p>

            <motion.div variants={stagger(0.07)} className="space-y-3">
              {MULTIPLE_DRIVERS.map((item) => {
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

            {/* Key insight box */}
            <motion.div variants={fadeUp} className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Key Insight</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                The EV/Sales multiple is not a bet on today&apos;s profitability — it is a bet on{" "}
                <strong className="text-gray-800 dark:text-gray-200">the predictability and durability of future cash flows</strong>.
                The higher the growth rate and the clearer the margin expansion roadmap, the more the market tolerates current losses and assigns a higher multiple.
              </p>
            </motion.div>
          </motion.section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ══ 3. Sector benchmarks ══════════════════════════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              EV/Sales Benchmarks by Sector
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base text-gray-500 dark:text-gray-400 mb-6">
              Ranges post-2022 rate normalization. During the 2021 bubble, some SaaS companies traded at 100×+ — an anomaly, not a benchmark.
            </motion.p>

            <motion.div variants={fadeUp} className="rounded-2xl border border-gray-200 dark:border-gray-700/60 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 dark:border-gray-700/60 bg-gray-50 dark:bg-gray-800/50">
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400">Sector</th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400">EV/Sales Range</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 hidden sm:table-cell">Key Driver</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700/60">
                  {SECTOR_BENCHMARKS.map((b) => (
                    <tr key={b.sector} className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors">
                      <td className="px-4 py-3 font-medium text-gray-800 dark:text-gray-200 text-sm">{b.sector}</td>
                      <td className="px-4 py-3 text-right font-mono font-bold text-blue-600 dark:text-blue-400">{b.range}</td>
                      <td className="px-4 py-3 text-gray-500 dark:text-gray-400 text-xs hidden sm:table-cell">{b.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">⚠️ 2021 Bubble Warning</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                In the zero-interest-rate environment of the pandemic era, some SaaS companies exceeded 100× EV/Sales. Using that as a reference today is dangerous.
                The EV/Sales multiple is extremely sensitive to the interest rate environment and growth-stock sentiment.
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
              Two real deals where EV/Sales was the core valuation argument.
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
                          <span className="font-semibold text-gray-600 dark:text-gray-400 flex-shrink-0 w-28 text-xs pt-0.5">{row.label}</span>
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
              <span className="text-xs text-gray-400 dark:text-gray-500">EV/Sales in one page</span>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/30 border border-blue-100 dark:border-blue-900/50 p-6 mb-5">
              <p className="text-[11px] font-semibold text-blue-500 dark:text-blue-400 uppercase tracking-wider mb-2">One-line definition</p>
              <p className="text-base font-bold text-gray-900 dark:text-gray-100 leading-snug">
                EV/Sales measures &ldquo;how many times today&apos;s revenue an acquirer is paying to own the future earnings potential of a high-growth company.&rdquo;
              </p>
            </motion.div>

            <motion.div variants={stagger(0.07)} className="space-y-2.5">
              {[
                { num: "01", title: "Works when EBITDA is negative", body: "Revenue is always positive, so the multiple always computes. This is precisely why EV/Sales is indispensable in SaaS and tech M&A.", color: "text-blue-500" },
                { num: "02", title: "Growth rate dominates the multiple", body: "Even within the same sector, a 50%+ growth company can trade at 3–5× the multiple of a 10% growth company. Growth narrative is the core justification.", color: "text-violet-500" },
                { num: "03", title: "Gross margin must be read alongside", body: "A 70%+ SaaS gross margin represents a fundamentally different business quality from a 25% hardware margin. Never interpret EV/Sales without gross margin context.", color: "text-emerald-500" },
                { num: "04", title: "Extremely sensitive to interest rates", body: "EV/Sales is a growth-stock valuation. Rising rates increase the discount rate applied to future cash flows, causing multiples to compress sharply. 2022 was proof.", color: "text-amber-500" },
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
                  className="flex items-center gap-1.5 rounded-full border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 px-3.5 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
            <Link href="/en/deal-101" className="text-sm text-gray-400 hover:text-blue-500 transition-colors">
              ← All Deal 101 Concepts
            </Link>
          </motion.div>

        </div>
      </main>
      <Footer />
    </>
  );
}
