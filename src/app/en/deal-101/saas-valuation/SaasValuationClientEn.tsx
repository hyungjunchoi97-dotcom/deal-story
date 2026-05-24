"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

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

// ── Data (outside component function) ──────────────────────────────

const METRICS = [
  {
    num: "01",
    name: "ARR (Annual Recurring Revenue)",
    label: "Recurring Revenue Base",
    formula: "MRR × 12",
    desc: "The foundation of any SaaS business. Annualized revenue from active subscriptions. One-time fees are excluded.",
    color: "blue",
  },
  {
    num: "02",
    name: "NRR / NDR (Net Revenue Retention)",
    label: "Retention Quality",
    formula: "(Starting ARR + Expansion − Contraction − Churn) ÷ Starting ARR",
    desc: "Revenue retained and grown from the existing customer base over 12 months. Above 100% means growth with zero new customers. 120%+ is best-in-class.",
    color: "emerald",
  },
  {
    num: "03",
    name: "Gross Churn",
    label: "Churn Rate",
    formula: "Churned ARR ÷ Beginning ARR",
    desc: "Percentage of ARR lost to cancellations. Under 5% annually is ideal for enterprise SaaS. Above 10% is a red flag.",
    color: "rose",
  },
  {
    num: "04",
    name: "Gross Margin",
    label: "Unit Economics",
    formula: "(Revenue − COGS) ÷ Revenue",
    desc: "SaaS typically runs 65–80% gross margin since COGS is mostly cloud infrastructure. Below 70% warrants a cost structure review.",
    color: "indigo",
  },
  {
    num: "05",
    name: "CAC (Customer Acquisition Cost)",
    label: "Acquisition Efficiency",
    formula: "S&M Spend ÷ New Customers Acquired",
    desc: "Total cost to acquire one new customer. The key question is how efficiently CAC converts to lifetime value.",
    color: "amber",
  },
  {
    num: "06",
    name: "LTV (Lifetime Value)",
    label: "Customer Economics",
    formula: "ARPU × Gross Margin ÷ Churn Rate",
    desc: "Total margin a customer generates over their lifetime. LTV:CAC of 3:1 or higher is the benchmark for healthy unit economics.",
    color: "violet",
  },
  {
    num: "07",
    name: "CAC Payback Period",
    label: "Capital Efficiency",
    formula: "CAC ÷ (ARPU × Gross Margin)",
    desc: "Months to recover the cost of acquiring a customer. Under 12 months = excellent, 18–24 months = acceptable, 24+ months = concerning.",
    color: "orange",
  },
];

const RULE40_EXAMPLES = [
  { growth: 30, fcf: 15, score: 45, label: "Healthy", color: "emerald", verdict: "Strong growth with real profitability — premium warranted" },
  { growth: 60, fcf: -10, score: 50, label: "Acceptable", color: "blue", verdict: "Aggressive growth investment — expected to profit at scale" },
  { growth: 15, fcf: 5, score: 20, label: "Concerning", color: "rose", verdict: "Low growth + low margin — premium valuation not justified" },
];

const MULTIPLES = [
  { condition: "NRR 120%+ & Growth 40%+", range: "15 – 25× ARR", note: "Top-tier SaaS — high multiple justified" },
  { condition: "NRR 110–120% & Growth 30–40%", range: "10 – 15× ARR", note: "High-quality SaaS — solid premium" },
  { condition: "NRR 100–110% & Growth 20–30%", range: "6 – 12× ARR", note: "Average SaaS — market rate" },
  { condition: "NRR below 100% or Growth under 10%", range: "3 – 6× ARR", note: "Discounted — churn risk reflected" },
];

const RELATED_LINKS = [
  { href: "/en/deal-101/arr-multiple", label: "ARR Multiple", note: "SaaS-specific metric" },
  { href: "/en/deal-101/ev-sales", label: "EV/Sales Multiple", note: "Revenue-based valuation" },
  { href: "/en/deal-101/adjusted-ebitda", label: "Adjusted EBITDA", note: "Profitability adjustments" },
];

// ── Component ──────────────────────────────────────────────────────

export function SaasValuationClientEn() {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── Hero ── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-10">
            <div className="flex items-center gap-2 mb-4">
              <Link
                href="/en/deal-101"
                className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                ← Deal 101
              </Link>
              <span className="text-xs text-gray-300 dark:text-gray-600">/</span>
              <span className="text-xs text-gray-400">Valuation</span>
              <span className="text-xs text-gray-300 dark:text-gray-600">/</span>
              <span className="text-xs text-gray-400">SaaS Valuation</span>
            </div>
            <span className={`inline-block text-xs font-medium rounded-full px-3 py-1 mb-4 ${COLOR_MAP.blue.badge}`}>
              Valuation
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              SaaS Valuation
              <span className="block text-lg sm:text-xl font-medium text-gray-500 dark:text-gray-400 mt-1">
                ARR, NRR &amp; Rule of 40 Explained
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              Why EBITDA multiples break down for SaaS companies. From 7 core metrics to ARR multiple
              benchmarks, Rule of 40, and GitHub &amp; Zendesk case studies — everything in one place.
            </p>
            <div className="mt-4">
              <Link href="/deal-101/saas-valuation" className="text-xs text-gray-400 hover:text-blue-500 transition-colors">
                한국어로 읽기 →
              </Link>
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-14">

          {/* ── 1. Why SaaS Valuation Is Different ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
              Why SaaS Valuation Is Different
            </h2>
            <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                SaaS stands for Software as a Service — subscription-based software where customers pay
                a recurring fee monthly or annually rather than purchasing a one-time license.
                This structure creates a fundamentally different revenue profile from traditional businesses.
              </p>
              <p>
                Traditional EBITDA-based valuation measures the profit a business generates <strong className="text-gray-800 dark:text-gray-200">today</strong>.
                But SaaS companies spend heavily upfront to acquire customers (CAC), which means they are
                <strong className="text-gray-800 dark:text-gray-200"> often unprofitable early on</strong>. Applying EBITDA multiples
                to a high-growth SaaS company would yield a value close to zero or even negative.
              </p>
              <p>
                Yet once a customer is acquired, they pay recurring fees for years. Today's losses are an
                investment in future cash flows. The value of a SaaS business is therefore
                <strong className="text-gray-800 dark:text-gray-200"> "how long and how much will it earn going forward"</strong> — not
                what it earns right now.
              </p>
            </div>

            {/* Analogy */}
            <div className={`mt-5 rounded-lg border p-4 ${COLOR_MAP.amber.bg} ${COLOR_MAP.amber.border}`}>
              <p className={`text-xs font-semibold mb-1 ${COLOR_MAP.amber.text}`}>💡 Think of it this way</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                You don&apos;t value a newly planted tree by how tall it is today — you value it by how large
                it will grow. SaaS valuation is not about current earnings; it is about measuring how long
                and how fast that recurring revenue stream will compound.
              </p>
            </div>
          </motion.section>

          {/* ── 2. 7 Core SaaS Metrics ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">7 Core SaaS Metrics</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              The first data points any M&A due diligence team will request.
            </p>
            <div className="space-y-3">
              {METRICS.map((m) => (
                <div
                  key={m.num}
                  className={`rounded-xl border p-4 ${COLOR_MAP[m.color].border} ${COLOR_MAP[m.color].bg}`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`text-[11px] font-black flex-shrink-0 mt-0.5 ${COLOR_MAP[m.color].text}`}>
                      {m.num}
                    </span>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{m.name}</h3>
                        <span className={`text-[10px] font-medium rounded-full px-2 py-0.5 ${COLOR_MAP[m.color].badge}`}>
                          {m.label}
                        </span>
                      </div>
                      <p className={`text-[11px] font-mono mb-1.5 ${COLOR_MAP[m.color].text}`}>{m.formula}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Key Insight */}
            <div className={`mt-5 rounded-lg border p-4 ${COLOR_MAP.blue.bg} ${COLOR_MAP.blue.border}`}>
              <p className={`text-xs font-semibold mb-1 ${COLOR_MAP.blue.text}`}>🔑 Key Insight</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                A 1% improvement in NRR compounds dramatically over time. A company at 120% NRR will
                have roughly 2.5× the ARR of a 100% NRR company after 5 years — assuming zero new customer
                additions. This is why NRR improvement potential is often the central thesis in SaaS M&A deals.
              </p>
            </div>
          </motion.section>

          {/* ── 3. Rule of 40 ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Rule of 40</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              A single number that balances growth and profitability. The most widely cited KPI
              by SaaS investors and M&A deal teams.
            </p>

            {/* Formula */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 border border-blue-100 dark:border-blue-900/50 p-6 text-center mb-6">
              <p className="text-2xl font-black text-blue-700 dark:text-blue-300 font-mono">
                ARR Growth (%) + FCF Margin (%) ≥ 40
              </p>
              <p className="text-xs text-blue-500 dark:text-blue-400 mt-2">
                Rule of 40 Score = Growth Rate + Profitability Margin
              </p>
            </div>

            <div className="space-y-3 mb-5">
              {RULE40_EXAMPLES.map((ex) => (
                <div
                  key={ex.label}
                  className={`rounded-xl border p-4 flex items-center gap-4 ${COLOR_MAP[ex.color].border} ${COLOR_MAP[ex.color].bg}`}
                >
                  <div className="text-center flex-shrink-0 w-16">
                    <p className={`text-2xl font-black ${COLOR_MAP[ex.color].text}`}>{ex.score}</p>
                    <p className={`text-[10px] font-semibold ${COLOR_MAP[ex.color].text}`}>{ex.label}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">
                      {ex.growth}% growth + {ex.fcf > 0 ? "+" : ""}{ex.fcf}% FCF margin = {ex.score} pts
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{ex.verdict}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                In M&A, a <strong className="text-gray-800 dark:text-gray-200">Rule of 40 score above 50</strong> commands a clear valuation premium,
                while below 30 introduces a discount. The Rule of 40 is a directional benchmark, not an
                absolute threshold — higher growth justifies a wider tolerance for losses.
              </p>
            </div>
          </motion.section>

          {/* ── 4. ARR Multiple Benchmarks ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
              SaaS M&A Valuation Framework
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              Primary methods: ARR multiple, NTM Revenue multiple, DCF (terminal value model).
              The ARR multiple benchmark table used most commonly in practice.
            </p>
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700/60 overflow-hidden mb-5">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 dark:border-gray-700/60 bg-gray-50 dark:bg-gray-800/50">
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400">Condition (NRR &amp; Growth)</th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400">ARR Multiple</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 hidden sm:table-cell">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700/60">
                  {MULTIPLES.map((row) => (
                    <tr key={row.condition} className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors">
                      <td className="px-4 py-3 text-xs text-gray-700 dark:text-gray-300">{row.condition}</td>
                      <td className="px-4 py-3 text-right font-mono font-bold text-blue-600 dark:text-blue-400">{row.range}</td>
                      <td className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400 hidden sm:table-cell">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              * Multiples compressed 30–50% from 2021 peak levels following the 2022 rate-hike cycle. Always contextualize within the market environment.
            </p>
          </motion.section>

          {/* ── 5. Case Studies ── */}
          <section>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-6">Case Studies</h2>
            </motion.div>

            <div className="space-y-6">

              {/* Case 1: Microsoft × GitHub */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-4 flex items-start justify-between gap-3 flex-wrap">
                  <div>
                    <span className={`inline-block text-xs font-medium rounded-full px-2.5 py-0.5 mb-2 ${COLOR_MAP.blue.badge}`}>
                      Strategic Acquisition
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">
                      Microsoft × GitHub — $7.5B (2018)
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Estimated ARR multiple ~30×</p>
                  </div>
                  <div className={`text-xs font-medium rounded-lg px-3 py-2 ${COLOR_MAP.blue.bg} ${COLOR_MAP.blue.text} border ${COLOR_MAP.blue.border}`}>
                    Platform Ecosystem Premium
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  <div className={`rounded-lg border p-3 ${COLOR_MAP.amber.bg} ${COLOR_MAP.amber.border}`}>
                    <p className={`text-xs font-semibold mb-1 ${COLOR_MAP.amber.text}`}>💡 Think of it this way</p>
                    <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                      Microsoft didn&apos;t just buy a company — it acquired the &quot;digital office building&quot;
                      where 28 million developers go to work every day. The value of that building is not
                      measured by its rent today but by what will be built inside it tomorrow.
                    </p>
                  </div>

                  <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    <p>
                      At the time of acquisition, GitHub&apos;s ARR was estimated at $200–250M. Microsoft paid
                      $7.5B, implying roughly 30× ARR — a steep multiple on the surface.
                      But Microsoft&apos;s thesis was not about current revenue.
                    </p>
                    <p>
                      The real assets were: a 28M+ developer network, the gravitational center of the open-source
                      ecosystem, and a vehicle to reposition Microsoft as developer-friendly.
                      GitHub was not just a SaaS product — it was a
                      <strong className="text-gray-800 dark:text-gray-200"> developer platform with compounding network effects.</strong>
                    </p>
                    <p>
                      Post-acquisition, GitHub Actions and GitHub Copilot drove rapid paid conversion growth,
                      with ARR multiplying several times over. In hindsight, 30× ARR in 2018 turned out to be
                      cheap relative to the value created.
                    </p>
                  </div>

                  <div className={`rounded-lg border p-3 ${COLOR_MAP.blue.bg} ${COLOR_MAP.blue.border}`}>
                    <p className={`text-xs font-semibold mb-1 ${COLOR_MAP.blue.text}`}>🔑 Key Insight</p>
                    <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                      SaaS platforms with genuine network effects can justify multiples well above
                      pure ARR benchmarks. The premium must be grounded in a clear post-acquisition
                      value creation thesis — not just a growth story.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Case 2: Zendesk Take-Private */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-4 flex items-start justify-between gap-3 flex-wrap">
                  <div>
                    <span className={`inline-block text-xs font-medium rounded-full px-2.5 py-0.5 mb-2 ${COLOR_MAP.violet.badge}`}>
                      PE Take-Private
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">
                      Zendesk Take-Private — $10.2B (2022, Hellman &amp; Friedman + Permira)
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">NTM Revenue multiple ~5.5×</p>
                  </div>
                  <div className={`text-xs font-medium rounded-lg px-3 py-2 ${COLOR_MAP.violet.bg} ${COLOR_MAP.violet.text} border ${COLOR_MAP.violet.border}`}>
                    Buying at the Valuation Trough
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    <p>
                      In early 2022, Zendesk attempted a merger with Momentive (parent of SurveyMonkey).
                      Shareholders voted it down. Rather than continuing as a standalone public company,
                      Zendesk entered take-private discussions, ultimately agreeing to be acquired by
                      Hellman &amp; Friedman and Permira for $10.2B.
                    </p>
                    <p>
                      The NTM Revenue multiple of approximately 5.5× was well below the 2021 peak of 15–20×,
                      as aggressive Fed rate hikes had compressed growth-stock multiples across the board.
                      The PE consortium entered at a cyclical low.
                    </p>
                    <p>
                      The investment thesis: Zendesk&apos;s durable ARR base in global customer service software,
                      freedom from public-market quarterly earnings pressure, and margin improvement through
                      portfolio rationalization.
                    </p>
                  </div>

                  <div className={`rounded-lg border p-3 ${COLOR_MAP.blue.bg} ${COLOR_MAP.blue.border}`}>
                    <p className={`text-xs font-semibold mb-1 ${COLOR_MAP.blue.text}`}>🔑 Key Insight</p>
                    <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                      SaaS valuations are highly sensitive to interest rates and market cycles.
                      Zendesk is a textbook example of disciplined PE buying a quality SaaS asset
                      at half its peak multiple — the take-private window opens precisely when public
                      market sentiment overcorrects on growth stocks.
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </section>

          {/* ── 6. Related Concepts ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">Related Concepts</h2>
            <div className="flex flex-wrap gap-2">
              {RELATED_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-1.5 rounded-full border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 px-3.5 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item.label}
                  <span className="text-gray-400 dark:text-gray-500 text-[10px]">· {item.note}</span>
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
