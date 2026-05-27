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

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Announcement",
    desc: "The acquirer files SEC Schedule TO and discloses the offer price and timeline. Premium of 20–40% over the current market price is typical. Risk arbitrage positions form immediately after announcement.",
    color: "blue",
  },
  {
    num: "02",
    title: "Offer Period",
    desc: "Minimum 20 business days under U.S. rules. Shareholders decide whether to tender their shares at the offer price. The acquirer may revise terms during this window.",
    color: "indigo",
  },
  {
    num: "03",
    title: "Board Response",
    desc: "The target board can pursue a white knight, activate a poison pill, or seek injunctive relief. The board files SEC Schedule 14D-9 with its recommendation to shareholders.",
    color: "amber",
  },
  {
    num: "04",
    title: "Proration",
    desc: "If tendered shares exceed the target amount, the acquirer purchases on a pro-rata basis. Example: if 2× the target is tendered, only 50% of each holder's shares are purchased.",
    color: "orange",
  },
  {
    num: "05",
    title: "Completion or Withdrawal",
    desc: "If the minimum condition (typically 50%+ or 90%) is met, the deal closes and delisting begins. If not met, the offer lapses and the share price typically reverts.",
    color: "emerald",
  },
];

const DEFENSE_STRATEGIES = [
  {
    title: "Poison Pill (Shareholder Rights Plan)",
    desc: "When any shareholder exceeds 20% ownership, all other shareholders gain the right to purchase new shares at a deep discount. This dilutes the acquirer's stake dramatically, making the acquisition prohibitively expensive.",
    color: "rose",
    tag: "Most powerful defense",
  },
  {
    title: "White Knight",
    desc: "The target board solicits a friendly third-party acquirer to preempt the hostile bidder. The alternative acquirer agrees to terms acceptable to the board. A classic M&A defense that preserves board control.",
    color: "emerald",
    tag: "Alternative acquirer",
  },
  {
    title: "Pac-Man Defense",
    desc: "The target company launches a counter tender offer for the acquirer. In practice, this requires roughly equal financial firepower, so it is rarely executed — but the threat alone can shift negotiating dynamics.",
    color: "amber",
    tag: "Counter-attack",
  },
  {
    title: "Crown Jewel Defense",
    desc: "The target sells its most attractive assets to a third party, reducing the incentive for the acquirer to complete the takeover. Courts scrutinize this tactic carefully for fiduciary duty violations.",
    color: "violet",
    tag: "Asset defense",
  },
  {
    title: "Litigation",
    desc: "Filing for injunctive relief based on antitrust violations, procedural defects in the tender offer, or inadequate disclosure. Often used as a time-buying tactic to allow other defenses to be set up.",
    color: "sky",
    tag: "Procedural defense",
  },
];

const RELATED_LINKS = [
  { href: "/en/deal-101/ma-process", label: "M&A Process", note: "Full deal lifecycle" },
  { href: "/en/deal-101/break-fee", label: "Break-up Fee", note: "Termination penalty" },
  { href: "/en/deal-101/mac-clause", label: "MAC Clause", note: "Material adverse change" },
  { href: "/en/deal-101/antitrust", label: "Antitrust", note: "Regulatory risk" },
];

// ── Component ──────────────────────────────────────────────────────

export function TenderOfferClientEn() {
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
              <span className="text-xs text-gray-400">Deal Structure</span>
              <span className="text-xs text-gray-300 dark:text-gray-600">/</span>
              <span className="text-xs text-gray-400">Tender Offer</span>
            </div>
            <span className={`inline-block text-xs font-medium rounded-full px-3 py-1 mb-4 ${COLOR_MAP.rose.badge}`}>
              Deal Structure
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              Tender Offer
              <span className="block text-lg sm:text-xl font-medium text-gray-500 dark:text-gray-400 mt-1">
                Going Directly to Shareholders — Bypassing the Board
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              Process, five defense tactics, the Musk/Twitter specific performance saga,
              and the Microsoft/Activision 18-month regulatory battle — everything about tender offers.
            </p>
            <div className="mt-4">
              <Link href="/deal-101/tender-offer" className="text-xs text-gray-400 hover:text-blue-500 transition-colors">
                한국어로 읽기 →
              </Link>
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-14">

          {/* ── 1. What Is a Tender Offer ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">What Is a Tender Offer?</h2>
            <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                A tender offer is a bid in which <strong className="text-gray-800 dark:text-gray-200">the acquirer approaches shareholders directly
                — bypassing the target&apos;s board of directors — to purchase their shares at a specified price</strong>.
                In a conventional negotiated M&A, the acquirer negotiates with management first and the board
                then recommends the deal to shareholders. A tender offer reverses this sequence.
              </p>
              <p>
                Three primary situations where a tender offer is used:
              </p>
              <ul className="space-y-2 pl-4">
                <li className="flex gap-2">
                  <span className="text-rose-400 flex-shrink-0 font-bold">①</span>
                  <span><strong className="text-gray-800 dark:text-gray-200">Hostile takeover:</strong> The board refuses to negotiate, so the acquirer appeals directly to shareholders.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-rose-400 flex-shrink-0 font-bold">②</span>
                  <span><strong className="text-gray-800 dark:text-gray-200">Speed:</strong> Setting a firm price and deadline can accelerate majority-stake acquisition vs. a prolonged negotiation.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-rose-400 flex-shrink-0 font-bold">③</span>
                  <span><strong className="text-gray-800 dark:text-gray-200">Going private:</strong> PE firms use tender offers to buy out public minority shareholders and delist the company.</span>
                </li>
              </ul>
            </div>

            {/* Analogy */}
            <div className={`mt-5 rounded-lg border p-4 ${COLOR_MAP.amber.bg} ${COLOR_MAP.amber.border}`}>
              <p className={`text-xs font-semibold mb-1 ${COLOR_MAP.amber.text}`}>💡 Think of it this way</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                If the landlord (the board) refuses to sell, the buyer goes directly to the tenants (shareholders)
                who each own a piece of the building and says: &quot;I&apos;ll offer you a better price for your share
                than you&apos;d get on the open market.&quot; If enough tenants say yes, the deal goes through —
                with or without the landlord&apos;s blessing.
              </p>
            </div>
          </motion.section>

          {/* ── 2. The Tender Offer Process ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">The Tender Offer Process</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              Typically 4–8 weeks from announcement to completion. U.S. rules apply.
            </p>
            <div className="space-y-3">
              {PROCESS_STEPS.map((step) => (
                <div
                  key={step.num}
                  className={`rounded-xl border p-4 flex items-start gap-3 ${COLOR_MAP[step.color].border} ${COLOR_MAP[step.color].bg}`}
                >
                  <span className={`text-base font-black flex-shrink-0 ${COLOR_MAP[step.color].text}`}>
                    {step.num}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* ── 3. Defense Tactics ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
              Defense Tactics — From the Target&apos;s Perspective
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              Tools available to a target board facing an unsolicited tender offer.
              Not all defenses are permissible — Delaware courts scrutinize whether directors
              are acting in the best interests of shareholders (fiduciary duty).
            </p>
            <div className="space-y-3">
              {DEFENSE_STRATEGIES.map((d) => (
                <div
                  key={d.title}
                  className={`rounded-xl border p-4 ${COLOR_MAP[d.color].border} ${COLOR_MAP[d.color].bg}`}
                >
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{d.title}</h3>
                    <span className={`text-[10px] font-medium rounded-full px-2 py-0.5 ${COLOR_MAP[d.color].badge}`}>
                      {d.tag}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* ── 4. Case Studies ── */}
          <section>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-6">Case Studies</h2>
            </motion.div>

            <div className="space-y-6">

              {/* Case 1: Musk × Twitter */}
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
                      Friendly → Forced Completion
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">
                      Elon Musk × Twitter — $44B (2022)
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">From attempted walkout to forced close</p>
                  </div>
                  <div className={`text-xs font-medium rounded-lg px-3 py-2 ${COLOR_MAP.amber.bg} ${COLOR_MAP.amber.text} border ${COLOR_MAP.amber.border}`}>
                    Specific Performance Won
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    <p>
                      In April 2022, Musk offered $54.20 per share for all of Twitter. The board accepted
                      and an SPA was signed. A rare case of a tender offer being embraced by the board.
                    </p>
                    <p>
                      In May, Musk attempted to terminate, claiming Twitter had
                      <strong className="text-gray-800 dark:text-gray-200"> misrepresented the number of bot accounts — a MAC event</strong>.
                      Twitter sued in Delaware Chancery Court, seeking Specific Performance:
                      &quot;There is no valid termination right. Close the deal as agreed.&quot;
                    </p>
                    <p>
                      As the October trial approached and discovery uncovered unfavorable internal communications,
                      Musk agreed to <strong className="text-gray-800 dark:text-gray-200">complete the acquisition at the original $54.20</strong> —
                      just days before the trial was to begin.
                    </p>
                  </div>

                  <div className={`rounded-lg border p-3 ${COLOR_MAP.blue.bg} ${COLOR_MAP.blue.border}`}>
                    <p className={`text-xs font-semibold mb-1 ${COLOR_MAP.blue.text}`}>🔑 Key Insight</p>
                    <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                      Attempting to walk away from a signed SPA without a valid MAC trigger can result in a
                      court ordering Specific Performance — i.e., you must close the deal. The break-up fee
                      (~$1B) is not an automatic exit option if the SPA includes a Specific Performance clause.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Case 2: Microsoft × Activision */}
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
                      Friendly Deal — Regulatory Battle
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">
                      Microsoft × Activision Blizzard — $68.7B (2023)
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Largest gaming M&A ever / 16-month regulatory war</p>
                  </div>
                  <div className={`text-xs font-medium rounded-lg px-3 py-2 ${COLOR_MAP.blue.bg} ${COLOR_MAP.blue.text} border ${COLOR_MAP.blue.border}`}>
                    Textbook Antitrust Risk
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    <p>
                      In January 2022, Microsoft announced a $95-per-share offer for Activision Blizzard
                      (~45% premium). The Activision board was supportive. A friendly deal — in theory.
                    </p>
                    <p>
                      The FTC and the UK&apos;s CMA filed antitrust actions.
                      <strong className="text-gray-800 dark:text-gray-200"> The CMA focused on cloud gaming market concentration</strong>,
                      blocking the deal for 16 months.
                    </p>
                    <p>
                      Microsoft offered structural remedies — licensing Activision&apos;s cloud gaming streaming
                      rights to Ubisoft for 15 years. The CMA accepted in October 2023,
                      and the deal finally closed as the largest gaming acquisition in history.
                    </p>
                  </div>

                  <div className={`rounded-lg border p-3 ${COLOR_MAP.blue.bg} ${COLOR_MAP.blue.border}`}>
                    <p className={`text-xs font-semibold mb-1 ${COLOR_MAP.blue.text}`}>🔑 Key Insight</p>
                    <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                      Even a friendly tender offer can take 18+ months to close due to regulatory risk.
                      The deal spread in risk arb reflects this uncertainty in real time.
                      For large tech deals, antitrust strategy must be designed into the deal structure
                      from day one — not treated as an afterthought.
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </section>

          {/* ── 5. Related Concepts ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">Related Concepts</h2>
            <div className="flex flex-wrap gap-2">
              {RELATED_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-1.5 rounded-full border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 px-3.5 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 hover:border-rose-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
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
