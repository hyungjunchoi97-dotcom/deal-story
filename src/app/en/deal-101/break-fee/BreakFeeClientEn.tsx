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

export default function BreakFeeClientEn() {
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
              <span className="text-xs text-gray-400">Break-up Fee</span>
            </div>
            <span className={`inline-block text-xs font-medium rounded-full px-3 py-1 mb-4 ${COLOR_MAP.violet.badge}`}>
              Deal Structure
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              Break-up Fee
              <span className="block text-lg sm:text-xl font-medium text-gray-500 dark:text-gray-400 mt-1">
                The Price of Walking Away from a Deal
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              A termination fee paid when one party walks away after signing the SPA — how buyer and reverse fees differ,
              typical sizes as a percentage of deal value, and what actually happened in Adobe/Figma and Musk/Twitter.
            </p>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-12">

          {/* ── 1. Definition ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">What Is a Break-up Fee?</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
              A break-up fee (also called a termination fee) is{" "}
              <strong className="text-gray-800 dark:text-gray-200">
                a contractual payment one party must make to the other if it walks away from a signed SPA (Stock Purchase Agreement).
              </strong>{" "}
              It converts the uncertainty of deal abandonment into a predictable dollar figure and signals each party's commitment
              to closing.
            </p>

            {/* Analogy */}
            <div className={`rounded-lg border p-4 ${COLOR_MAP.amber.bg} ${COLOR_MAP.amber.border}`}>
              <p className={`text-xs font-semibold mb-1 ${COLOR_MAP.amber.text}`}>💡 Analogy</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                Think of it like a wedding venue deposit. Once you've signed the contract, calling off the event means forfeiting
                a non-refundable fee — because the venue (and the other party) turned down other bookings based on your commitment.
                In M&A, the break-up fee plays the same role: you're free to walk, but freedom has a price tag.
              </p>
            </div>
          </motion.section>

          {/* ── 2. How It Works ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">How It Works</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
              Break-up fees come in two forms, depending on which party is walking away.
            </p>

            <div className="space-y-4">
              {/* Buyer Termination Fee */}
              <div className={`rounded-xl border p-5 ${COLOR_MAP.violet.border} ${COLOR_MAP.violet.bg}`}>
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-2 h-2 rounded-full shrink-0 ${COLOR_MAP.violet.dot}`} />
                  <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">
                    Buyer Termination Fee (Standard Break-up Fee)
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                  Paid by the buyer to the seller if the buyer terminates the deal. Typically{" "}
                  <strong className="text-gray-800 dark:text-gray-200">2–4% of the deal value.</strong>
                </p>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex gap-2">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${COLOR_MAP.violet.dot}`} />
                    <span>Compensates the seller for opportunity cost (passing up other bidders)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${COLOR_MAP.violet.dot}`} />
                    <span>Signals the buyer's seriousness and commitment to the market</span>
                  </li>
                  <li className="flex gap-2">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${COLOR_MAP.violet.dot}`} />
                    <span>May be triggered by regulatory failure, not just voluntary termination</span>
                  </li>
                </ul>
              </div>

              {/* Reverse Termination Fee */}
              <div className={`rounded-xl border p-5 ${COLOR_MAP.rose.border} ${COLOR_MAP.rose.bg}`}>
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-2 h-2 rounded-full shrink-0 ${COLOR_MAP.rose.dot}`} />
                  <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">
                    Reverse Termination Fee (Reverse Break-up Fee)
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                  Paid by the seller to the buyer — most often when the seller's board accepts a{" "}
                  <strong className="text-gray-800 dark:text-gray-200">Superior Proposal</strong> from a competing bidder or
                  withdraws its board recommendation. Also applies in PE deals when debt financing falls through.
                  Typically <strong className="text-gray-800 dark:text-gray-200">3–5% of deal value</strong> (sometimes higher).
                </p>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex gap-2">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${COLOR_MAP.rose.dot}`} />
                    <span>Often acts as a liability cap for the buyer — capping damages at the fee amount</span>
                  </li>
                  <li className="flex gap-2">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${COLOR_MAP.rose.dot}`} />
                    <span>Set higher than the buyer fee as stronger seller-side protection</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Size summary */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className={`rounded-lg p-4 border text-center ${COLOR_MAP.violet.border} ${COLOR_MAP.violet.bg}`}>
                <p className={`text-xs font-semibold ${COLOR_MAP.violet.text} mb-1`}>Buyer Fee</p>
                <p className="text-xl font-bold text-gray-900 dark:text-gray-100">2 – 4%</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">of deal value</p>
              </div>
              <div className={`rounded-lg p-4 border text-center ${COLOR_MAP.rose.border} ${COLOR_MAP.rose.bg}`}>
                <p className={`text-xs font-semibold ${COLOR_MAP.rose.text} mb-1`}>Reverse Fee</p>
                <p className="text-xl font-bold text-gray-900 dark:text-gray-100">3 – 5%</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">of deal value (or higher)</p>
              </div>
            </div>
          </motion.section>

          {/* ── 3. Why It Matters ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">Why It Matters</h2>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                Between signing and closing, the seller turns down competing bids, discloses the deal to employees, and incurs
                regulatory filing costs. If the buyer suddenly walks, all of those costs fall on the seller.
              </p>
              <p>
                The break-up fee <strong className="text-gray-800 dark:text-gray-200">converts that uncertainty into a known number</strong> —
                making the cost of walking away explicit and quantifiable. A higher fee signals stronger deal conviction.
                A fee that's too low suggests the buyer may be leaving the door open.
              </p>
              <p>
                Importantly, the fee size alone doesn't tell the whole story. Whether Specific Performance clauses exist in the
                SPA can dramatically change what "walking away" actually costs.
              </p>
            </div>
          </motion.section>

          {/* ── 4. Cases ── */}
          <section>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-6">Cases — How It Played Out</h2>
            </motion.div>

            <div className="space-y-6">

              {/* Case 1: Adobe × Figma */}
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
                      Buyer Fee Paid
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">Adobe × Figma — A $1 Billion Break-up Fee</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">$20B deal / 2022–2023</p>
                  </div>
                  <div className={`text-xs font-medium rounded-lg px-3 py-2 ${COLOR_MAP.rose.bg} ${COLOR_MAP.rose.text} border ${COLOR_MAP.rose.border}`}>
                    Fee = 5% of deal value
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  <div className={`rounded-lg border p-3 ${COLOR_MAP.amber.bg} ${COLOR_MAP.amber.border}`}>
                    <p className={`text-xs font-semibold mb-1 ${COLOR_MAP.amber.text}`}>💡 Context</p>
                    <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                      The market-leading design suite tried to acquire its top competitor — and regulators decided
                      that would eliminate meaningful competition.
                    </p>
                  </div>

                  <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    <p>
                      In September 2022, Adobe announced a ~$20B acquisition of Figma — the largest SaaS M&A deal ever at roughly
                      50x ARR. The SPA included a buyer break-up fee of{" "}
                      <strong className="text-gray-800 dark:text-gray-200">$1 billion payable to Figma</strong> if Adobe failed
                      to obtain regulatory clearance.
                    </p>
                    <p>
                      The EU Commission and UK CMA both concluded that the two companies were dominant players in UI design software.
                      Combined, they would eliminate competition. After 15 months of proposed remedies, Adobe terminated the deal
                      in December 2023.
                    </p>
                    <p>
                      Figma received the full $1B despite the deal collapsing through no fault of its own. That cash gave Figma
                      a strong runway as an independent company preparing for a future IPO.
                    </p>
                  </div>

                  <div className={`rounded-lg border p-3 ${COLOR_MAP.blue.bg} ${COLOR_MAP.blue.border}`}>
                    <p className={`text-xs font-semibold mb-1 ${COLOR_MAP.blue.text}`}>🔑 Key Lesson</p>
                    <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                      Break-up fees cover regulatory risk, not just voluntary termination. Adobe didn't choose to fail — regulators
                      blocked the deal — but the SPA still triggered the $1B payment. In large horizontal mergers, how regulatory
                      failure scenarios are handled in the fee clause is a major negotiation point.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Case 2: Musk × Twitter */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-4 flex items-start justify-between gap-3 flex-wrap">
                  <div>
                    <span className={`inline-block text-xs font-medium rounded-full px-2.5 py-0.5 mb-2 ${COLOR_MAP.amber.badge}`}>
                      Specific Performance Won
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">Musk × Twitter — When the Fee Isn't the Exit</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">$44B deal / 2022</p>
                  </div>
                  <div className={`text-xs font-medium rounded-lg px-3 py-2 ${COLOR_MAP.amber.bg} ${COLOR_MAP.amber.text} border ${COLOR_MAP.amber.border}`}>
                    Deal forced to close
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  <div className={`rounded-lg border p-3 ${COLOR_MAP.amber.bg} ${COLOR_MAP.amber.border}`}>
                    <p className={`text-xs font-semibold mb-1 ${COLOR_MAP.amber.text}`}>💡 Context</p>
                    <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                      Like signing a contract to buy a house, then declaring "I've changed my mind — this place is
                      overpriced" — only to have the seller respond: "We'll see you in court."
                    </p>
                  </div>

                  <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    <p>
                      The Twitter SPA included a{" "}
                      <strong className="text-gray-800 dark:text-gray-200">$1B buyer break-up fee</strong> payable to Twitter
                      if Musk terminated the deal. In July 2022, Musk attempted to invoke the fee and exit, claiming Twitter's
                      misrepresentation of bot account numbers constituted a MAC.
                    </p>
                    <p>
                      Twitter's board didn't accept the $1B and walk away. Instead, it sued for{" "}
                      <strong className="text-gray-800 dark:text-gray-200">Specific Performance</strong> — demanding the court
                      compel Musk to close the deal at the agreed price. The Twitter SPA explicitly preserved this right.
                      Delaware's Court of Chancery scheduled a trial for October 2022.
                    </p>
                    <p>
                      Days before trial, Musk agreed to close at the original $54.20 per share. Facing a near-certain court
                      order to complete the acquisition anyway, paying $1B and walking away was no longer a viable option.
                    </p>
                  </div>

                  <div className={`rounded-lg border p-3 ${COLOR_MAP.blue.bg} ${COLOR_MAP.blue.border}`}>
                    <p className={`text-xs font-semibold mb-1 ${COLOR_MAP.blue.text}`}>🔑 Key Lesson</p>
                    <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                      A break-up fee only sets the price of walking away{" "}
                      <strong className="text-blue-700 dark:text-blue-300">if the SPA allows it.</strong>{" "}
                      When a Specific Performance clause is present, the court can order the buyer to close regardless.
                      In major deals, the Specific Performance provision is often a more powerful enforcement tool than the
                      fee itself — which means buyers can't always treat the break-up fee as a simple call option to exit.
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </section>

          {/* ── 5. Key Insight ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className={`rounded-xl border p-5 ${COLOR_MAP.blue.border} ${COLOR_MAP.blue.bg}`}>
              <p className={`text-xs font-semibold mb-2 ${COLOR_MAP.blue.text}`}>🔑 Key Insight</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                Break-up fees make the cost of walking away predictable. But in major deals, the{" "}
                <strong className="text-blue-700 dark:text-blue-300">Specific Performance clause</strong> in the SPA can be
                a far more powerful enforcement tool than the fee itself. The assumption that "I can always pay the fee and exit"
                may not hold — depending on how the SPA is drafted, a court can compel the buyer to close the deal outright.
              </p>
            </div>
          </motion.section>

          {/* ── 6. Related Concepts ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">Related Concepts</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  href: "/en/deal-101/mac-clause",
                  title: "MAC Clause",
                  desc: "The other exit mechanism — and why courts almost never accept it",
                  badge: "Deal Structure",
                },
                {
                  href: "/en/deal-101/ma-process",
                  title: "M&A Process — Phase 5 SPA",
                  desc: "The full picture of the SPA negotiation phase where break-up fees are set",
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
