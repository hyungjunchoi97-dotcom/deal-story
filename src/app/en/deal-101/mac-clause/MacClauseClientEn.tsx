"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ── Animation helper ──────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const COLOR_MAP: Record<string, { badge: string; border: string; bg: string; text: string; dot: string }> = {
  blue:    { badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300", border: "border-blue-200 dark:border-blue-800", bg: "bg-blue-50 dark:bg-blue-900/20", text: "text-blue-700 dark:text-blue-300", dot: "bg-blue-500" },
  violet:  { badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300", border: "border-violet-200 dark:border-violet-800", bg: "bg-violet-50 dark:bg-violet-900/20", text: "text-violet-700 dark:text-violet-300", dot: "bg-violet-500" },
  amber:   { badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300", border: "border-amber-200 dark:border-amber-800", bg: "bg-amber-50 dark:bg-amber-900/20", text: "text-amber-700 dark:text-amber-300", dot: "bg-amber-500" },
  rose:    { badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300", border: "border-rose-200 dark:border-rose-800", bg: "bg-rose-50 dark:bg-rose-900/20", text: "text-rose-700 dark:text-rose-300", dot: "bg-rose-500" },
  emerald: { badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300", border: "border-emerald-200 dark:border-emerald-800", bg: "bg-emerald-50 dark:bg-emerald-900/20", text: "text-emerald-700 dark:text-emerald-300", dot: "bg-emerald-500" },
  teal:    { badge: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300", border: "border-teal-200 dark:border-teal-800", bg: "bg-teal-50 dark:bg-teal-900/20", text: "text-teal-700 dark:text-teal-300", dot: "bg-teal-500" },
};

export default function MacClauseClientEn() {
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
              <span className="text-xs text-gray-400">MAC Clause</span>
            </div>
            <span className={`inline-block text-xs font-medium rounded-full px-3 py-1 mb-4 ${COLOR_MAP.violet.badge}`}>
              Deal Structure
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              MAC Clause
              <span className="block text-lg sm:text-xl font-medium text-gray-500 dark:text-gray-400 mt-1">
                The Escape Hatch That Rarely Opens
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              A Material Adverse Change clause lets a buyer exit a signed SPA if something fundamental changes —
              but courts set the bar extraordinarily high. Two contrasting cases show exactly when it fails and
              when it succeeds.
            </p>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-12">

          {/* ── 1. Definition ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">What Is a MAC Clause?</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
              A MAC (Material Adverse Change) clause — also called a MAE (Material Adverse Effect) clause — is a{" "}
              <strong className="text-gray-800 dark:text-gray-200">
                contractual provision that allows the buyer to terminate a signed SPA if a materially adverse change
                occurs in the target company or its industry between signing and closing.
              </strong>{" "}
              It is designed as buyer insurance, but in practice courts almost never accept a MAC claim as valid.
            </p>

            {/* Analogy */}
            <div className={`rounded-lg border p-4 ${COLOR_MAP.amber.bg} ${COLOR_MAP.amber.border}`}>
              <p className={`text-xs font-semibold mb-1 ${COLOR_MAP.amber.text}`}>💡 Analogy</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                Imagine you put a deposit on a house — then before you hand over the full payment, the house burns down.
                A MAC clause protects you in that scenario: you shouldn't have to buy a fundamentally different asset at
                the originally agreed price. But "the market went down" or "I changed my mind" doesn't qualify.
                The fire has to be real, structural, and undeniable.
              </p>
            </div>
          </motion.section>

          {/* ── 2. The High Bar Courts Set ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">The Bar Courts Set — Extremely High</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
              Delaware's Court of Chancery — the authoritative venue for M&A disputes — applies a rigorous standard.
              All of the following conditions must effectively be met for a MAC claim to succeed.
            </p>

            <div className="space-y-3">
              {[
                {
                  label: "Short-term events don't qualify",
                  desc: "A stock price drop, a weak quarter, or a temporary business slowdown is not a MAC. The change must durably and structurally impair the company's long-term value.",
                  color: "rose",
                },
                {
                  label: "Industry-wide effects are typically excluded",
                  desc: "Pandemics, interest rate spikes, recessions, wars — macro events affecting the whole industry are usually carved out of the MAC definition by SPA carve-outs. This is standard drafting practice.",
                  color: "amber",
                },
                {
                  label: "The company itself must be fundamentally different",
                  desc: "\"The price looks too high now\" is not a MAC. The business model, core assets, or revenue-generating capacity must be structurally destroyed.",
                  color: "violet",
                },
                {
                  label: "Known risks before signing cannot become a MAC",
                  desc: "If the risk was publicly known or disclosed before the SPA was signed, the buyer cannot invoke it as a new MAC afterward. It must be a genuinely new development.",
                  color: "blue",
                },
              ].map((item, i) => {
                const c = COLOR_MAP[item.color];
                return (
                  <div key={i} className="flex gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 text-sm">
                    <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${c.dot}`} />
                    <div>
                      <span className="font-semibold text-gray-800 dark:text-gray-200">{item.label}</span>
                      <p className="text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ── 3. Negotiation Points ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">Negotiation Dynamics</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              The scope of the MAC definition is itself a major negotiation battleground.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className={`rounded-xl border p-4 ${COLOR_MAP.violet.border} ${COLOR_MAP.violet.bg}`}>
                <p className={`text-xs font-semibold ${COLOR_MAP.violet.text} mb-2`}>Buyer's Strategy</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Define MAC as <strong className="text-gray-800 dark:text-gray-200">broadly</strong> as possible.
                  Keep the carve-out list short and narrow. Maximize the number of scenarios in which the buyer can walk away.
                </p>
              </div>
              <div className={`rounded-xl border p-4 ${COLOR_MAP.rose.border} ${COLOR_MAP.rose.bg}`}>
                <p className={`text-xs font-semibold ${COLOR_MAP.rose.text} mb-2`}>Seller's Strategy</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Define MAC as <strong className="text-gray-800 dark:text-gray-200">narrowly</strong> as possible.
                  Carve out industry-wide risks, economic conditions, interest rate changes, war, and any
                  other systemic risks. Leave the buyer no escape route.
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 leading-relaxed">
              In practice, the most contested point is whether a carve-out applies when the target is
              "disproportionately affected" compared to peers — sellers want to remove this exception;
              buyers want to keep it.
            </p>
          </motion.section>

          {/* ── 4. Cases ── */}
          <section>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Cases — MAC Accepted vs. Rejected</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                These two cases, side by side, make the court's standard unmistakably clear.
              </p>
            </motion.div>

            <div className="space-y-6">

              {/* Case 1: Musk × Twitter — MAC failed */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-4 flex items-start justify-between gap-3 flex-wrap">
                  <div>
                    <span className={`inline-block text-xs font-medium rounded-full px-2.5 py-0.5 mb-2 ${COLOR_MAP.rose.badge}`}>
                      MAC Claim Failed
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">Musk × Twitter — "Bot Accounts = MAC" Rejected</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">$44B deal / 2022</p>
                  </div>
                  <div className={`text-xs font-medium rounded-lg px-3 py-2 ${COLOR_MAP.rose.bg} ${COLOR_MAP.rose.text} border ${COLOR_MAP.rose.border}`}>
                    Deal forced to close
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  <div className={`rounded-lg border p-3 ${COLOR_MAP.amber.bg} ${COLOR_MAP.amber.border}`}>
                    <p className={`text-xs font-semibold mb-1 ${COLOR_MAP.amber.text}`}>💡 Context</p>
                    <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                      The textbook case for what courts won't accept as a MAC: "the price looks too rich now."
                    </p>
                  </div>

                  <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    <p>
                      In July 2022, Musk declared that Twitter's alleged misrepresentation of its bot account
                      numbers constituted a MAC, and attempted to terminate the $44B deal. Twitter's stock had fallen
                      well below the agreed price of $54.20, making the deal look expensive.
                    </p>
                    <p>
                      Twitter fired back immediately: the bot account issue was{" "}
                      <strong className="text-gray-800 dark:text-gray-200">publicly known before the SPA was signed</strong>.
                      It was not a new MAC — it was a pre-existing, disclosed risk. Delaware's Court of Chancery
                      signaled that the MAC argument was unlikely to succeed.
                    </p>
                    <p>
                      Rather than face a near-certain Specific Performance order compelling him to close at $54.20 anyway,
                      Musk agreed to complete the acquisition at the original price just before trial began.
                      The MAC claim effectively failed.
                    </p>
                  </div>

                  <div className={`rounded-lg border p-3 ${COLOR_MAP.blue.bg} ${COLOR_MAP.blue.border}`}>
                    <p className={`text-xs font-semibold mb-1 ${COLOR_MAP.blue.text}`}>🔑 Key Lesson</p>
                    <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                      Courts almost never accept a MAC claim. Pre-existing risks, price remorse, and temporary
                      deterioration don't qualify. Invoking MAC as a backdoor exit from an overpriced deal
                      almost always backfires.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Case 2: Akorn × Fresenius — MAC succeeded */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-4 flex items-start justify-between gap-3 flex-wrap">
                  <div>
                    <span className={`inline-block text-xs font-medium rounded-full px-2.5 py-0.5 mb-2 ${COLOR_MAP.emerald.badge}`}>
                      MAC Accepted (Rare Precedent)
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">Akorn × Fresenius — A MAC That Actually Held Up</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">$4.3B deal / 2017–2018</p>
                  </div>
                  <div className={`text-xs font-medium rounded-lg px-3 py-2 ${COLOR_MAP.emerald.bg} ${COLOR_MAP.emerald.text} border ${COLOR_MAP.emerald.border}`}>
                    Termination permitted
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  <div className={`rounded-lg border p-3 ${COLOR_MAP.amber.bg} ${COLOR_MAP.amber.border}`}>
                    <p className={`text-xs font-semibold mb-1 ${COLOR_MAP.amber.text}`}>💡 Context</p>
                    <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                      Not a falling price — a house with structural damage that wasn't visible until after the contract was signed.
                    </p>
                  </div>

                  <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    <p>
                      In 2017, Germany's Fresenius agreed to acquire U.S. generic drug maker Akorn for $4.3B.
                      After signing, post-signing diligence uncovered something alarming:
                    </p>
                    <p>
                      Akorn had submitted{" "}
                      <strong className="text-gray-800 dark:text-gray-200">fabricated data to the FDA</strong>, and its
                      regulatory compliance systems had essentially collapsed. Fresenius reported this to the FDA directly.
                      An FDA investigation confirmed the violations.
                    </p>
                    <p>
                      In 2018, Delaware's Court of Chancery ruled that this constituted a genuine MAC — not a financial
                      downturn, but a structural destruction of the company's regulatory standing and core business value.
                      This is one of the extremely rare instances in Delaware history where a MAC claim was formally upheld.
                    </p>
                  </div>

                  <div className={`rounded-lg border p-3 ${COLOR_MAP.blue.bg} ${COLOR_MAP.blue.border}`}>
                    <p className={`text-xs font-semibold mb-1 ${COLOR_MAP.blue.text}`}>🔑 Key Lesson</p>
                    <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                      For MAC to succeed, the company must be fundamentally different from what was contracted for —
                      not just cheaper or less appealing. Akorn's FDA data fraud met that bar because it structurally
                      destroyed the company's value as a regulated pharmaceutical business. Cases like this are extremely rare.
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </section>

          {/* ── Side-by-side comparison ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">Side-by-Side Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-2 px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 w-1/4"> </th>
                    <th className="text-left py-2 px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 w-3/8">Musk × Twitter</th>
                    <th className="text-left py-2 px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 w-3/8">Akorn × Fresenius</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {[
                    { label: "MAC claim basis", a: "Bot account misrepresentation", b: "FDA data fraud & compliance collapse" },
                    { label: "Court outcome", a: "MAC effectively rejected", b: "MAC formally upheld (historic)" },
                    { label: "Result", a: "Buyer forced to close at original price", b: "Termination permitted" },
                    { label: "Key distinction", a: "Pre-existing, known risk before signing", b: "Post-signing discovery of structural fraud" },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="py-2.5 px-3 text-xs font-medium text-gray-600 dark:text-gray-400">{row.label}</td>
                      <td className="py-2.5 px-3 text-xs text-gray-600 dark:text-gray-400">{row.a}</td>
                      <td className="py-2.5 px-3 text-xs text-gray-600 dark:text-gray-400">{row.b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* ── 5. Key Insight ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className={`rounded-xl border p-5 ${COLOR_MAP.blue.border} ${COLOR_MAP.blue.bg}`}>
              <p className={`text-xs font-semibold mb-2 ${COLOR_MAP.blue.text}`}>🔑 Key Insight</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                The MAC clause looks like buyer insurance, but courts apply an extremely high bar before accepting it.{" "}
                <strong className="text-blue-700 dark:text-blue-300">Narrowing the MAC definition is the seller's strategy</strong>;
                broadening it is the buyer's. But even with a wide MAC clause, if the SPA includes a Specific Performance
                provision, a court can compel the buyer to close regardless — making MAC just one layer of a more complex picture.
              </p>
            </div>
          </motion.section>

          {/* ── 6. Related Concepts ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">Related Concepts</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  href: "/en/deal-101/break-fee",
                  title: "Break-up Fee",
                  desc: "The other side of deal protection — and what happens when specific performance overrides it",
                  badge: "Deal Structure",
                },
                {
                  href: "/en/deal-101/ma-process",
                  title: "M&A Process — Phase 5 SPA",
                  desc: "The full SPA negotiation phase where MAC clauses and break-up fees are set",
                  badge: "Process",
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group block p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-violet-300 dark:hover:border-violet-600 transition-colors"
                >
                  <span className={`text-[10px] font-medium rounded-full px-2 py-0.5 ${COLOR_MAP.violet.badge}`}>
                    {item.badge}
                  </span>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mt-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
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
