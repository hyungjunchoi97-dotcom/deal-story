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

// ── Three sources of premium ──────────────────────────────────────
const SOURCES = [
  {
    num: "01",
    title: "Synergy Value",
    color: "blue",
    description:
      "The present value (PV) of cost savings and revenue synergies achievable after the acquisition. When two companies combine, duplicate costs are eliminated and cross-selling becomes possible. The acquirer pays upfront for a share of that future value.",
    detail: "Example: Expected annual cost savings of $500M post-acquisition × perpetuity DCF → PV $5B. The acquirer pays a portion of this as a premium at closing.",
  },
  {
    num: "02",
    title: "Control Premium",
    color: "violet",
    description:
      "The premium attached to the right to control the company itself. Unlike a minority stake, a 100% acquisition grants authority over board composition, dividend policy, and strategic direction. The acquirer pays for that power.",
    detail: "Global average control premium: ~20–30%. A controlling stake transaction commands this much more over a comparable minority investment.",
  },
  {
    num: "03",
    title: "Strategic Scarcity",
    color: "rose",
    description:
      "\"Without this target, our strategy doesn't work\" — when there is no substitute, the premium spikes. Irreplaceable IP, a number-one market position, or an exclusive distribution network all limit the acquirer's negotiating leverage.",
    detail: "Adobe offering 50× ARR for Figma is the textbook case. Losing Figma would have threatened the entire Creative Cloud ecosystem — a classic strategic scarcity premium.",
  },
];

// ── Case studies ──────────────────────────────────────────────────
const CASES = [
  {
    company: "Microsoft × Activision Blizzard",
    premium: "~45%",
    dealValue: "$68.7B",
    color: "blue",
    description:
      "In January 2022, Microsoft announced it would acquire Activision Blizzard at $95 per share — roughly a 45% premium over the pre-announcement price of ~$65. The strategic rationale was straightforward: secure Call of Duty, World of Warcraft, Candy Crush, and dozens of other franchises in one move. After 18 months of regulatory review across multiple jurisdictions, the deal closed.",
    lesson: "A strategic scarcity premium is justified when the IP portfolio has no substitute. Regulators agreed on the substance but attached conditions — Microsoft divested cloud-streaming rights to Ubisoft to win UK approval.",
  },
  {
    company: "Elon Musk × Twitter",
    premium: "~38%",
    dealValue: "$44B",
    color: "amber",
    description:
      "In April 2022, Musk offered $54.20 per share for Twitter — a 38% premium over the ~$39 market price. After signing the LOI, Musk attempted to walk away citing misrepresented bot account figures. Twitter sued for specific performance. Days before trial, Musk closed at the original price. He later valued X at roughly $19B — far below the acquisition price.",
    lesson: "The Winner's Curse in action. Synergy PV never supported the premium; only an assumption about strategic control did. Once that assumption proved shaky, the premium translated directly into losses.",
  },
  {
    company: "Adobe × Figma",
    premium: "~50× ARR",
    dealValue: "$20B",
    color: "rose",
    description:
      "In September 2022, Adobe announced the acquisition of Figma at ~$20B — roughly 50× Figma's ~$400M ARR, the highest SaaS acquisition multiple on record. The strategic logic: lock up the UI/UX design market before Figma could grow into a full Creative Cloud competitor. After 15 months of EU Phase II review, regulators were moving toward a block. Adobe and Figma terminated the deal in December 2023. Adobe paid Figma a $1B break-up fee.",
    lesson: "Strategic scarcity justifies a premium only if the deal can close. A 50× ARR multiple collapsed into a $1B cash loss the moment regulatory risk materialized. Premium analysis must include the probability of regulatory approval.",
  },
];

export default function AcquisitionPremiumClientEn() {
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
              <span className="text-xs text-gray-400">Acquisition Premium</span>
            </div>
            <span className="inline-block text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 rounded-full px-3 py-1 mb-4">
              Valuation
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              Acquisition Premium
              <span className="block text-lg sm:text-xl font-medium text-gray-500 dark:text-gray-400 mt-1">
                Why Buyers Pay More Than Market Price
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              In M&A, acquirers routinely pay 30–50% above the market price. Why? Three sources of premium, the Winner's Curse, and lessons from Microsoft/Activision, Twitter, and Adobe/Figma.
            </p>

            {/* Quick nav */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { href: "#definition", label: "Definition & Formula" },
                { href: "#sources", label: "3 Sources" },
                { href: "#winners-curse", label: "Winner's Curse" },
                { href: "#cases", label: "Case Studies" },
                { href: "#insight", label: "Key Insight" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 hover:opacity-80 transition-opacity"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-16">

          {/* ── Section 1: Definition & Formula ── */}
          <motion.section
            id="definition"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">What Is an Acquisition Premium?</h2>

            {/* Formula box */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-5 mb-5">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-2">Formula</p>
              <p className="text-base font-mono font-bold text-blue-800 dark:text-blue-200">
                Acquisition Premium = (Offer Price − Pre-Announcement Price) ÷ Pre-Announcement Price × 100
              </p>
              <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                <div className="bg-white dark:bg-gray-800/60 rounded-lg p-3">
                  <p className="text-xs text-gray-500 dark:text-gray-400">Example</p>
                  <p className="font-semibold text-gray-800 dark:text-gray-200 mt-1">Market price $50 → Offer $70</p>
                  <p className="text-blue-600 dark:text-blue-400 font-bold">Premium = 40%</p>
                </div>
                <div className="bg-white dark:bg-gray-800/60 rounded-lg p-3">
                  <p className="text-xs text-gray-500 dark:text-gray-400">Global Average</p>
                  <p className="font-semibold text-gray-800 dark:text-gray-200 mt-1">Strategic M&A</p>
                  <p className="text-blue-600 dark:text-blue-400 font-bold">~30–40%</p>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                An acquisition premium is the percentage above the current market price that an acquirer pays for a target company. The stock price reflects the market's consensus on the target's standalone value today — so why pay 30–40% more?
              </p>
              <p>
                The answer is that the acquirer is not buying the company's present value — it is buying its post-acquisition value. The synergies created by combining two companies, the rights conferred by full ownership, and the strategic cost of losing this specific target to a competitor all justify a premium above the market price.
              </p>
            </div>

            {/* Analogy */}
            <div className="mt-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 Think of it this way</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                Buying a thriving restaurant is like this: the owner won't sell at the current cash register value — they also want compensation for the future income they're giving up. The acquisition premium is exactly that extra payment: the buyer's share of the future value they expect to capture once they're in charge.
              </p>
            </div>
          </motion.section>

          {/* ── Section 2: Three Sources ── */}
          <motion.section
            id="sources"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Three Sources of Acquisition Premium</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              For a premium to be justified, at least one of these three sources must be large enough to cover it. When all three are weak, the premium is hard to defend.
            </p>

            <div className="space-y-4">
              {SOURCES.map((s) => {
                const c = COLOR_MAP[s.color];
                return (
                  <div key={s.num} className={`rounded-xl border ${c.border} ${c.bg} p-5`}>
                    <div className="flex items-start gap-3">
                      <span className={`text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 ${c.badge}`}>
                        {s.num}
                      </span>
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-2">{s.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{s.description}</p>
                        <div className={`rounded-lg p-3 bg-white/60 dark:bg-gray-800/40 border ${c.border}`}>
                          <p className={`text-xs font-semibold ${c.text} mb-0.5`}>In practice</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{s.detail}</p>
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
                Of the three sources, synergy value is the most quantifiable. Before submitting an LOI, ask: "Is the synergy PV I've calculated greater than the premium I'm about to pay?" If not, the gap must be explained by control value or strategic scarcity — and both need a credible argument.
              </p>
            </div>
          </motion.section>

          {/* ── Section 3: Winner's Curse ── */}
          <motion.section
            id="winners-curse"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">When the Premium Is Too High — The Winner's Curse</h2>

            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
              <p>
                In a competitive auction, the winning bidder is the person with the most optimistic assumptions. Winning a bidding war is therefore a signal that you may have overpaid relative to every other participant's assessment of value.
              </p>
              <p>
                This is the Winner's Curse. Sell-side bankers deliberately create competitive auction dynamics for exactly this reason — bidders ratchet up their offers, and premiums quickly exceed what the underlying economics can justify.
              </p>
            </div>

            {/* Analogy */}
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-5">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 Think of it this way</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                Imagine 100 bidders at an art auction. The winner is the one who valued the painting highest — but that winner paid more than every other expert's estimate. Whether the painting is actually worth that price is a separate question entirely.
              </p>
            </div>

            {/* Mechanism */}
            <div className="rounded-xl border border-rose-200 dark:border-rose-800 bg-rose-50 dark:bg-rose-900/20 p-5">
              <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-3">How the Winner's Curse Turns Into Losses</h3>
              <div className="space-y-2">
                {[
                  { step: "1", text: "Competitive auction pressure leads to emotional over-bidding → premium exceeds synergy PV" },
                  { step: "2", text: "Post-close synergies fall short (statistically, 70–80% of M&A deals miss expected synergies)" },
                  { step: "3", text: "The excess premium paid converts directly into an impairment loss for the acquirer" },
                  { step: "4", text: "Stock price declines, credit rating downgrades, or a large goodwill impairment charge is recognized" },
                ].map((item) => (
                  <div key={item.step} className="flex gap-3 items-start">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-rose-500 text-white text-xs font-bold flex items-center justify-center">
                      {item.step}
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <strong className="text-gray-800 dark:text-gray-200">AOL × Time Warner (2000):</strong> AOL acquired Time Warner at a ~40% premium for $164B. When the dot-com bubble burst, synergies never materialized. In 2002, AOL Time Warner recognized ~$99B in goodwill impairment — the largest M&A loss in history at the time.
            </div>
          </motion.section>

          {/* ── Section 4: Case Studies ── */}
          <section id="cases">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Case Studies — Was the Premium Justified?</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Three deals, three different premium levels — and three different outcomes.
              </p>
            </motion.div>

            <div className="space-y-5">
              {CASES.map((c_item, idx) => {
                const c = COLOR_MAP[c_item.color];
                return (
                  <motion.div
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                  >
                    <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-4 flex items-start justify-between gap-3 flex-wrap">
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{c_item.company}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Deal size: {c_item.dealValue}</p>
                      </div>
                      <span className={`shrink-0 text-sm font-bold rounded-lg px-3 py-1.5 ${c.bg} ${c.text} border ${c.border}`}>
                        Premium {c_item.premium}
                      </span>
                    </div>
                    <div className="p-5 space-y-3">
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{c_item.description}</p>
                      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                        <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Key Lesson</p>
                        <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">{c_item.lesson}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* ── Section 5: Key Insight ── */}
          <motion.section
            id="insight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">Key Insight — When Is a Premium Justified?</h2>

            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
              <p>The condition for a justified premium is simple:</p>
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
                <p className="text-base font-bold text-blue-800 dark:text-blue-200 text-center">
                  PV(Synergies) + Control Value &gt; Premium Paid
                </p>
              </div>
              <p>
                This equation must be calculated honestly before submitting the LOI. The pressure of a competitive auction makes it tempting to skip this step or use overly optimistic assumptions. That's precisely when the Winner's Curse strikes.
              </p>
            </div>

            {/* Pre-LOI checklist */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3">
                <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">Pre-LOI Premium Validation Checklist</h3>
              </div>
              <div className="p-5 space-y-2">
                {[
                  { color: "blue", text: "Have you calculated synergy PV independently — using conservative assumptions, not the IM's numbers?" },
                  { color: "violet", text: "Have you separately quantified the control premium component?" },
                  { color: "rose", text: "If part of the premium is strategic scarcity, have you verified there are truly no substitutes?" },
                  { color: "amber", text: "Have you set and board-approved a walk-away price before entering the auction?" },
                  { color: "emerald", text: "Do you have an internal check against emotional over-bidding in a competitive auction setting?" },
                ].map((item, i) => {
                  const c = COLOR_MAP[item.color];
                  return (
                    <div key={i} className="flex gap-3 items-start p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                      <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${c.dot}`} />
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Final Insight</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                An acquisition premium is a prepayment for future value. If that future doesn't materialize, the premium becomes a pure loss. The larger the deal and the more competitive the auction, the more rigorously this math must be done. "Does this premium still generate a positive return?" — that is the starting question of every M&A financial analysis.
              </p>
            </div>
          </motion.section>

          {/* ── Related concepts ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">Related Concepts</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/en/deal-101/ev-ebitda", title: "EV/EBITDA Multiple", desc: "The core valuation metric used to translate a premium into a deal price.", badge: "Valuation" },
                { href: "/en/deal-101/synergy", title: "Synergy", desc: "The first and most quantifiable source of premium. How to model and stress-test synergy PV.", badge: "Valuation" },
                { href: "/en/deal-101/ma-process", title: "M&A Process", desc: "The LOI stage (Phase 3) is when the premium first becomes official. See how it fits the process.", badge: "Deal Structure" },
                { href: "/en/deal-101/antitrust", title: "Antitrust & Merger Control", desc: "High-premium deals attract regulatory scrutiny. The Adobe/Figma case is the canonical example.", badge: "Regulatory & Legal" },
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
