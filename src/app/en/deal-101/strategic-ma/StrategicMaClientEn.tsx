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

// ── Six strategic M&A motives ──────────────────────────────────────
const MOTIVES = [
  {
    title: "Horizontal Integration",
    color: "blue",
    desc: "Acquiring a direct competitor in the same market to expand market share and capture economies of scale. The primary target of antitrust review.",
    example: "Facebook × Instagram (2012) — absorbed the leading mobile photo-sharing competitor to consolidate social media dominance.",
  },
  {
    title: "Vertical Integration",
    color: "emerald",
    desc: "Acquiring companies upstream (suppliers) or downstream (distributors) in the value chain to control costs and protect margins.",
    example: "Amazon × Whole Foods (2017) — an e-commerce giant acquiring a brick-and-mortar grocery network to control the last-mile supply chain.",
  },
  {
    title: "Technology / IP Acquisition",
    color: "violet",
    desc: "Acquiring technology, intellectual property, or a platform faster than building it organically. The 'buy vs build' equation tilts toward buying when time-to-market is critical.",
    example: "Google × YouTube ($1.65B, 2006) / Microsoft × GitHub ($7.5B, 2018) — direct acquisition of developer platforms.",
  },
  {
    title: "Market Entry",
    color: "sky",
    desc: "Rapidly entering a new geography, customer segment, or vertical by buying an established player rather than building from scratch.",
    example: "Global strategics entering Southeast Asian markets by acquiring local incumbents with existing brand, customers, and regulatory relationships.",
  },
  {
    title: "Acqui-hire",
    color: "amber",
    desc: "The acquisition is primarily motivated by the team — engineers, founders, or researchers — rather than the product or revenue. The product may be wound down.",
    example: "Apple × Siri (2010) and multiple AI research team acquisitions — the talent was the asset, not the product.",
  },
  {
    title: "Defensive M&A",
    color: "rose",
    desc: "Acquiring a target preemptively to prevent a competitor from acquiring it first. The fear of a competitor gaining the asset drives both urgency and price.",
    example: "Meta × WhatsApp ($19B, 2014) — acquired before Google or Twitter could, locking down a messaging platform with 450M monthly active users.",
  },
];

// ── Strategic buyer vs financial buyer ────────────────────────────
const BUYER_COMPARE = [
  {
    type: "Strategic Buyer",
    color: "blue",
    points: [
      "Can pay for synergy value (cost savings + revenue upside) on top of standalone DCF",
      "Justifies higher acquisition premiums through synergy math",
      "Less dependent on leverage — can use own balance sheet",
      "Post-merger integration (PMI) execution is the critical risk",
      "Typical deals: horizontal/vertical M&A, tech acquisitions, defensive M&A",
    ],
  },
  {
    type: "Financial Buyer / PE",
    color: "violet",
    points: [
      "Creates returns through leverage (LBO) + operational improvements",
      "Does not need synergies — can run as standalone and sell later",
      "Generally bids 20–30% below strategic buyers in competitive processes",
      "Can outbid strategics when portfolio synergies exist or in high-leverage environments",
      "Typical deals: LBO, MBO, carve-outs, take-privates",
    ],
  },
];

// ── Case studies ───────────────────────────────────────────────────
const CASES = [
  {
    title: "Meta × Instagram ($1B, 2012) — arguably the greatest M&A deal in history",
    typeLabel: "Defensive + Platform Expansion",
    typeColor: "rose",
    dealSize: "Paid $1B → estimated ~$100B+ value by 2018",
    analogy: "Instead of capturing a few pawns, Zuckerberg removed the piece that would have become the opponent's queen. The board changed.",
    paragraphs: [
      "In April 2012, Mark Zuckerberg announced the acquisition of Instagram — 13 employees, 30 million users, zero revenue — for $1 billion. It was the highest price ever paid for a startup at the time. No financial model could justify it on a standalone basis.",
      "The strategic logic had two layers. First, Facebook was a PC-centric platform while Instagram was growing explosively on mobile photo sharing. If that trend continued, Facebook risked losing its younger user base entirely. Second, there was a real risk that Google or Twitter would acquire Instagram first — the classic defensive M&A trigger.",
      "The outcome rewrote M&A history. By 2018, independent estimates valued Instagram at over $100 billion — more than 100x the acquisition price. Instagram's advertising revenue grew to represent roughly 30% of Facebook's total revenue. A $1 billion investment became one of the most profitable acquisitions ever made.",
    ],
    lesson: "The core lesson of strategic M&A: a price that cannot be justified by a financial model can still be right if the strategic logic is sound. When defensive motivation and platform expansion overlap, deal value compounds over time in ways that no spreadsheet can capture at signing.",
  },
  {
    title: "Microsoft × LinkedIn ($26.2B, 2016)",
    typeLabel: "Enterprise + Data Synergy",
    typeColor: "blue",
    dealSize: "~50% premium to market cap",
    analogy: "Microsoft attached the professional social graph to its enterprise software ecosystem. Office suddenly had people in it.",
    paragraphs: [
      "In June 2016, Microsoft announced the acquisition of LinkedIn, the professional social network with 430 million members, for $26.2 billion — approximately a 50% premium to LinkedIn's market capitalization. The deal was personally championed by CEO Satya Nadella.",
      "The strategic thesis: connecting LinkedIn's professional identity and relationship graph to Microsoft's enterprise product suite (Office 365, Dynamics CRM, Azure). Sales teams using Dynamics could surface LinkedIn connections. Office users could see LinkedIn profiles inline. Azure could power LinkedIn's infrastructure. The professional data layer that Microsoft's products lacked would be acquired, not built.",
      "LinkedIn was kept as an independent brand and operating unit — a deliberate choice to protect its user trust and avoid the cultural clashes that sink many integrations. By 2022, LinkedIn reported $13.8 billion in annual revenue — generating revenue equal to more than half the acquisition price from a single business unit. The LinkedIn Sales Navigator integration with Dynamics is cited as a textbook example of enterprise data synergy.",
    ],
    lesson: "A 50% premium is justified when the synergy thesis is specific, measurable, and credible. The decision to keep LinkedIn independent was not a concession — it was the strategy. Successful strategic integration is not about merging everything; it is about connecting exactly the right pieces.",
  },
];

// ── Related concepts ───────────────────────────────────────────────
const RELATED = [
  { href: "/en/deal-101/synergy", title: "Synergy", desc: "The financial foundation of strategic M&A — how cost and revenue synergies are modeled and validated.", badge: "Valuation" },
  { href: "/en/deal-101/acquisition-premium", title: "Acquisition Premium", desc: "Strategic price = standalone DCF + PV of synergies + control premium. How the math works.", badge: "Valuation" },
  { href: "/en/deal-101/pmi", title: "PMI (Post-Merger Integration)", desc: "Where strategic M&A either realizes its value or destroys it — the integration execution challenge.", badge: "M&A Execution" },
  { href: "/en/deal-101/vertical-integration", title: "Vertical Integration", desc: "The strategic logic and risks of acquiring up or down the value chain.", badge: "Strategy" },
];

export function StrategicMaClientEn() {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── Hero ── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-10">
            <div className="flex items-center gap-2 mb-3">
              <Link href="/en/deal-101" className="text-xs text-gray-500 hover:text-blue-600 transition-colors">Deal 101</Link>
              <span className="text-xs text-gray-300 dark:text-gray-600">›</span>
              <span className="text-xs text-gray-500">Strategy</span>
            </div>
            <span className="inline-block text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 rounded-full px-3 py-1 mb-4">
              Strategy
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Strategic M&A
            </h1>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
              Acquisitions driven by market position, technology, and capability — not IRR. Why strategic buyers can pay more than PE, and what separates the deals that work from those that don&apos;t.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { href: "#what", label: "What is strategic M&A" },
                { href: "#motives", label: "6 motives" },
                { href: "#buyers", label: "Strategic vs PE" },
                { href: "#pricing", label: "Pricing structure" },
                { href: "#cases", label: "Case studies" },
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

          {/* ── Section 1: What is strategic M&A ── */}
          <motion.section
            id="what"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">What is Strategic M&A?</h2>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
              <p>
                <strong className="text-gray-800 dark:text-gray-200">Strategic M&A</strong> is an acquisition where the primary objective is not a financial return (IRR) but the acquisition of market position, technology, capabilities, or customer relationships. The acquirer is typically a company in the same or an adjacent industry — a strategic buyer.
              </p>
              <p>
                Unlike a financial buyer (PE firm) that creates value through leverage and operational improvements, a strategic buyer pays for the synergy value created by combining the target with its existing business. This is why strategic buyers can — and routinely do — pay higher prices than PE.
              </p>
              <p>
                However, the ability to pay more does not automatically produce a better outcome. Failed synergy realization (PMI failure) and overpaid premiums are the two most common causes of value destruction in strategic M&A.
              </p>
            </div>
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-5">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 Think of it this way</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                In chess, a strategic M&A move is not capturing a few pawns — it is taking the opponent&apos;s queen and changing how the whole game is played. Individual financial metrics cannot explain the move. The logic only becomes clear when you see how the entire board shifts.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { title: "Market position", color: "blue", desc: "Acquire market share, brand, and customer base in one move — far faster than organic growth." },
                { title: "Technology & capabilities", color: "violet", desc: "The 'build vs buy' question — when internal development takes years, acquisition delivers in months." },
                { title: "Competitive restructuring", color: "rose", desc: "Absorb a competitor or pre-empt a rival from acquiring a key asset — reshaping the competitive landscape." },
              ].map((item) => {
                const c = COLOR_MAP[item.color];
                return (
                  <div key={item.title} className={`rounded-xl border ${c.border} ${c.bg} p-4`}>
                    <h3 className={`text-xs font-bold ${c.text} mb-2`}>{item.title}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ── Section 2: Six motives ── */}
          <motion.section
            id="motives"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Six Strategic M&A Motives</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              The &quot;why&quot; behind a deal determines the premium level, deal structure, and PMI approach. The same target can justify very different prices depending on the strategic motive.
            </p>
            <div className="space-y-3">
              {MOTIVES.map((item) => {
                const c = COLOR_MAP[item.color];
                return (
                  <div key={item.title} className={`rounded-xl border ${c.border} ${c.bg} p-4`}>
                    <h3 className={`text-sm font-bold ${c.text} mb-2`}>{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-2">{item.desc}</p>
                    <div className="bg-white/60 dark:bg-gray-800/40 rounded-lg p-3">
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                        <strong className="text-gray-700 dark:text-gray-300">Example:</strong> {item.example}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ── Section 3: Strategic vs PE ── */}
          <motion.section
            id="buyers"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Strategic Buyer vs Financial Buyer (PE)</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              When a strategic buyer and a PE firm bid on the same asset, the underlying price logic is fundamentally different.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {BUYER_COMPARE.map((buyer) => {
                const c = COLOR_MAP[buyer.color];
                return (
                  <div key={buyer.type} className={`rounded-xl border ${c.border} ${c.bg} p-4`}>
                    <h3 className={`text-sm font-bold ${c.text} mb-3`}>{buyer.type}</h3>
                    <ul className="space-y-2">
                      {buyer.points.map((point, i) => (
                        <li key={i} className="flex gap-2 text-xs text-gray-600 dark:text-gray-400">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Key Insight</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                Strategic buyers can pay more because of synergies. The formula: <strong>Strategic Price = Standalone DCF Value + PV of Synergies + Control Premium</strong>. Because PE firms have no synergies to add, they typically bid 20–30% below strategic buyers in a competitive process — unless they have a portfolio company that creates synergy of its own.
              </p>
            </div>
          </motion.section>

          {/* ── Section 4: Pricing structure ── */}
          <motion.section
            id="pricing"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">Strategic M&A Pricing Structure</h2>
            <div className="space-y-3">
              {[
                {
                  step: "1",
                  title: "Standalone DCF Value",
                  color: "blue",
                  desc: "The intrinsic value of the target as an independent business, without any synergies. This is the price floor — a rational buyer will not pay less than this for a controlling stake.",
                },
                {
                  step: "2",
                  title: "+ PV of Synergies",
                  color: "emerald",
                  desc: "Present value of cost synergies (eliminating redundancies) plus revenue synergies (cross-selling, new markets). Only a strategic buyer can realize these — this is what distinguishes strategic from financial pricing.",
                },
                {
                  step: "3",
                  title: "+ Control Premium",
                  color: "violet",
                  desc: "The premium paid for the right to control the business and make strategic decisions. Typically 20–40% above the pre-deal trading price, benchmarked against comparable transaction multiples.",
                },
                {
                  step: "4",
                  title: "= Strategic Acquisition Price",
                  color: "rose",
                  desc: "The maximum price a rational strategic buyer should pay. Any price above this point is value-destructive for the acquirer. In negotiations, this number is never disclosed — it is the BATNA ceiling.",
                },
              ].map((item) => {
                const c = COLOR_MAP[item.color];
                return (
                  <div key={item.step} className={`rounded-xl border ${c.border} p-4 flex gap-4`}>
                    <div className={`text-lg font-bold ${c.text} shrink-0 w-6 text-center`}>{item.step}</div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ── Section 5: Case studies ── */}
          <section id="cases">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Two Case Studies</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Two of the most successful strategic M&A deals in history — both justified by strategic logic that financial models alone could not explain.
              </p>
            </motion.div>
            <div className="space-y-8">
              {CASES.map((cs, idx) => {
                const c = COLOR_MAP[cs.typeColor];
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
                        <span className={`inline-block text-xs font-medium rounded-full px-2.5 py-0.5 mb-2 ${c.badge}`}>
                          {cs.typeLabel}
                        </span>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{cs.title}</h3>
                      </div>
                      <div className={`text-xs font-medium rounded-lg px-3 py-2 ${c.bg} ${c.text} border ${c.border} shrink-0`}>
                        {cs.dealSize}
                      </div>
                    </div>
                    <div className="p-5 space-y-4">
                      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                        <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 Think of it this way</p>
                        <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">{cs.analogy}</p>
                      </div>
                      <div className="space-y-3">
                        {cs.paragraphs.map((p, i) => (
                          <p key={i} className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{p}</p>
                        ))}
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                        <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Key Insight</p>
                        <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">{cs.lesson}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* ── Related concepts ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">Related Concepts</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {RELATED.map((item) => (
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
