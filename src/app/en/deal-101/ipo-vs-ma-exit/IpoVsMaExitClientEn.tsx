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
  blue:    { badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300", border: "border-blue-200 dark:border-blue-800", bg: "bg-blue-50 dark:bg-blue-900/20", text: "text-blue-700 dark:text-blue-300", dot: "bg-blue-500" },
  violet:  { badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300", border: "border-violet-200 dark:border-violet-800", bg: "bg-violet-50 dark:bg-violet-900/20", text: "text-violet-700 dark:text-violet-300", dot: "bg-violet-500" },
  amber:   { badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300", border: "border-amber-200 dark:border-amber-800", bg: "bg-amber-50 dark:bg-amber-900/20", text: "text-amber-700 dark:text-amber-300", dot: "bg-amber-500" },
  rose:    { badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300", border: "border-rose-200 dark:border-rose-800", bg: "bg-rose-50 dark:bg-rose-900/20", text: "text-rose-700 dark:text-rose-300", dot: "bg-rose-500" },
  emerald: { badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300", border: "border-emerald-200 dark:border-emerald-800", bg: "bg-emerald-50 dark:bg-emerald-900/20", text: "text-emerald-700 dark:text-emerald-300", dot: "bg-emerald-500" },
  teal:    { badge: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300", border: "border-teal-200 dark:border-teal-800", bg: "bg-teal-50 dark:bg-teal-900/20", text: "text-teal-700 dark:text-teal-300", dot: "bg-teal-500" },
};

// ── IPO pros & cons ──────────────────────────────────────────────
const IPO_PROS = [
  { title: "Market Price Discovery", desc: "If the stock rises above the IPO price post-listing, sellers capture additional upside. The market — not a single buyer — determines value." },
  { title: "Partial Exit", desc: "Sellers don't have to liquidate the entire position at once. A portion can be sold at IPO while the rest rides market appreciation." },
  { title: "Brand & Credibility", desc: "Being a public company enhances trust with customers, partners, and top-tier talent. The listing itself becomes a marketing asset." },
  { title: "Strategic Currency", desc: "Listed shares can be used as acquisition currency, allowing the company to make acquisitions without spending cash." },
];
const IPO_CONS = [
  { title: "Disclosure Burden", desc: "Quarterly earnings, material contracts, and executive compensation must be disclosed publicly — handing competitive intelligence to rivals." },
  { title: "Lock-up Period", desc: "Major shareholders typically cannot sell for 180 days to one year post-IPO. If the stock drops during that window, there is no exit." },
  { title: "Market Timing Risk", desc: "A poor market environment at the time of offering can significantly reduce the valuation. Timing cannot be fully controlled." },
  { title: "Years to a Clean Exit", desc: "Selling a large block post-IPO requires multiple block deals and secondary sales over years. A truly clean exit takes far longer than the listing date." },
];

// ── M&A pros & cons ──────────────────────────────────────────────
const MA_PROS = [
  { title: "Clean Exit", desc: "One transaction, full cash proceeds. No exposure to stock price movement after closing." },
  { title: "Control Premium", desc: "Strategic buyers pay 20–40% above market value to capture synergies. Competitive auctions push the premium higher." },
  { title: "Predictable Timeline", desc: "Not dependent on capital market conditions. A strong strategic buyer can close a deal even when IPO markets are frozen." },
];
const MA_CONS = [
  { title: "Price Ceiling", desc: "The maximum price is capped at what the buyer is willing to pay. Without competitive bidding, price maximization is difficult." },
  { title: "Loss of Control", desc: "Post-sale, founders and PE sponsors exit. Brand, culture, and headcount may change under the new owner." },
  { title: "Regulatory Risk", desc: "If the buyer is a direct competitor, antitrust authorities may block the deal. Adobe × Figma is the defining example." },
];

// ── Situation table ──────────────────────────────────────────────
const SITUATION_TABLE = [
  { situation: "Public market valuations are elevated", recommendation: "IPO", color: "emerald" },
  { situation: "A strategic buyer offers compelling synergies", recommendation: "Trade Sale", color: "blue" },
  { situation: "Founders want to avoid public disclosure", recommendation: "Trade Sale", color: "blue" },
  { situation: "PE fund approaching its investment horizon", recommendation: "Trade Sale or Secondary", color: "violet" },
  { situation: "Company has scale, track record, and institutional-quality reporting", recommendation: "IPO", color: "emerald" },
  { situation: "Competitive auction can be structured", recommendation: "Trade Sale", color: "blue" },
  { situation: "IPO window is closed", recommendation: "Trade Sale or Secondary", color: "violet" },
];

// ── Case studies ─────────────────────────────────────────────────
const CASES = [
  {
    company: "Figma",
    title: "When the M&A Path Closes, the IPO Path Opens",
    type: "Exit Strategy Pivot",
    typeColor: "emerald",
    analogy: "Like a property seller whose deal with a major developer fell through due to regulations — only to list the property publicly and attract even more interest than expected.",
    paragraphs: [
      "In September 2022, Adobe announced it would acquire Figma — the dominant UI/UX design collaboration tool — for approximately $20 billion. It was the highest revenue multiple ever paid in a SaaS acquisition. Adobe's rationale was clear: combine Creative Cloud with Figma to dominate the design software market entirely.",
      "Regulators saw it differently. Both the EU and UK CMA concluded that Adobe and Figma were dominant players in the same market and that the merger would eliminate meaningful competition. After 15 months of attempted remedies, the deal collapsed in December 2023. Adobe paid Figma a $1 billion break-up fee.",
      "The apparent failure turned into something else. Figma received $1 billion in cash while retaining full independence, and pivoted directly to an IPO. With ARR surpassing $700 million by 2024–2025, Figma's IPO valuation could exceed the original Adobe offer price — a scenario that would have been impossible had the M&A closed.",
    ],
    lesson: "IPO and M&A exit are not mutually exclusive. When one path closes, the other opens. What matters is building optionality — the ability to pivot between exit strategies based on market conditions, regulatory outcomes, and company fundamentals.",
  },
  {
    company: "Arm Holdings",
    title: "NVIDIA Deal Blocked → SoftBank IPO at $54B",
    type: "M&A Blocked, IPO Succeeds",
    typeColor: "blue",
    analogy: "Like a seller who couldn't complete a direct sale to a large buyer — only to list publicly and receive a higher valuation than the blocked deal would have delivered.",
    paragraphs: [
      "SoftBank acquired UK chip IP company Arm for roughly $32 billion in 2016. In 2020, SoftBank agreed to sell Arm to NVIDIA for $40 billion — which would have been the largest semiconductor acquisition in history.",
      "US FTC, the EU, and the UK CMA all raised antitrust concerns: NVIDIA owning Arm would give it leverage over the entire semiconductor supply chain. In February 2022, NVIDIA formally abandoned the acquisition.",
      "SoftBank pivoted to an IPO. In September 2023, Arm listed on the Nasdaq. Its market capitalization exceeded $54 billion on listing day — surpassing the blocked $40 billion NVIDIA price. The result depended heavily on market timing: Arm benefited directly from the AI semiconductor boom. A softer market environment would have produced a very different outcome.",
    ],
    lesson: "There is no single 'correct' exit path. Arm's case shows that a strategic acquirer isn't always needed to realize full value. But IPO success depends critically on market timing — the AI tailwind that drove Arm's valuation may not exist for every company at every point in time.",
  },
];

export default function IpoVsMaExitClientEn() {
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
              <span className="text-xs text-gray-400">IPO vs. M&A Exit</span>
            </div>
            <span className="inline-block text-xs font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 rounded-full px-3 py-1 mb-4">
              Deal Structure
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              IPO vs. M&A Exit — How Investors and Founders Cash Out
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              The two primary exit paths for PE funds and founders — going public versus selling to a strategic buyer. Their trade-offs, selection criteria, and how real deals have pivoted between them.
            </p>

            {/* Quick navigation */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { href: "#exit-overview", label: "What Is an Exit" },
                { href: "#ipo-pros-cons", label: "IPO Pros & Cons" },
                { href: "#ma-pros-cons", label: "M&A Pros & Cons" },
                { href: "#when-to-choose", label: "Selection Criteria" },
                { href: "#cases", label: "Case Studies" },
              ].map((item) => (
                <a key={item.href} href={item.href} className="rounded-full px-3 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 hover:opacity-80 transition-opacity">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-16">

          {/* ── Section 1: What is an exit ── */}
          <motion.section id="exit-overview" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">What Is an Exit?</h2>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                For PE funds and startup founders, an <strong className="text-gray-800 dark:text-gray-200">exit</strong> is the moment investment capital becomes realized cash. No matter how good a business is or how cheaply it was acquired, value is only real once it is converted into cash proceeds.
              </p>
              <p>
                There are three primary exit options: <strong className="text-gray-800 dark:text-gray-200">① IPO</strong> — listing shares on a public market so retail and institutional investors can buy them; <strong className="text-gray-800 dark:text-gray-200">② Trade Sale (Strategic M&A)</strong> — selling the company to a buyer within or adjacent to the industry; <strong className="text-gray-800 dark:text-gray-200">③ Secondary Buyout</strong> — one PE fund selling to another PE fund.
              </p>
              <p>
                The most important comparison — and the most debated — is between IPO and trade sale. They operate under entirely different market logics, timelines, and risk structures.
              </p>
            </div>

            {/* Analogy */}
            <div className="mt-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 Think of it this way</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                Selling a restaurant by listing it on a public marketplace (IPO) versus selling it outright to a large chain (M&A). Which is better depends entirely on the current temperature of the restaurant market, the size of your operation, and whether you want to stay involved after the sale.
              </p>
            </div>

            {/* 3 exit types summary */}
            <div className="mt-5 grid sm:grid-cols-3 gap-3">
              {[
                { type: "IPO", desc: "Public listing. Shares sold to a broad investor base through a public offering.", color: "emerald" },
                { type: "Trade Sale", desc: "Full sale to a strategic buyer in the same or adjacent industry. Synergy premium possible.", color: "blue" },
                { type: "Secondary Buyout", desc: "PE fund sells to another PE fund. Primary option when no strategic buyer is available.", color: "violet" },
              ].map((item) => {
                const c = COLOR_MAP[item.color];
                return (
                  <div key={item.type} className={`rounded-lg border ${c.border} ${c.bg} p-3`}>
                    <span className={`text-xs font-bold ${c.text}`}>{item.type}</span>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1.5 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ── Section 2: IPO pros & cons ── */}
          <motion.section id="ipo-pros-cons" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block text-xs font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 rounded-full px-3 py-1">IPO</span>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">IPO: Pros and Cons</h2>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
              An IPO distributes shares to public market investors rather than selling to one buyer. Liquidity is achieved gradually through market pricing, not in a single transaction.
            </p>

            <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-3">Advantages</h3>
            <div className="space-y-2 mb-5">
              {IPO_PROS.map((item, i) => (
                <div key={i} className="flex gap-3 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/50 text-sm">
                  <div className="mt-1.5 w-2 h-2 rounded-full shrink-0 bg-emerald-500" />
                  <div>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">{item.title}</span>
                    <p className="text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-3">Disadvantages</h3>
            <div className="space-y-2 mb-5">
              {IPO_CONS.map((item, i) => (
                <div key={i} className="flex gap-3 p-3 rounded-lg bg-rose-50 dark:bg-rose-900/20 border border-rose-100 dark:border-rose-800/50 text-sm">
                  <div className="mt-1.5 w-2 h-2 rounded-full shrink-0 bg-rose-500" />
                  <div>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">{item.title}</span>
                    <p className="text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Key Insight</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                The biggest IPO trap: <strong>listing day is not exit day</strong>. Large shareholders typically need years of block deals and secondary sales to fully monetize. If the stock price falls during that period, expected returns evaporate.
              </p>
            </div>
          </motion.section>

          {/* ── Section 3: M&A pros & cons ── */}
          <motion.section id="ma-pros-cons" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 rounded-full px-3 py-1">Trade Sale</span>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">M&A Trade Sale: Pros and Cons</h2>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
              A trade sale transfers the entire company to one buyer — typically in exchange for a single cash payment. The result is cleaner, but the outcome depends heavily on buyer quality and competitive tension.
            </p>

            <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-3">Advantages</h3>
            <div className="space-y-2 mb-5">
              {MA_PROS.map((item, i) => (
                <div key={i} className="flex gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50 text-sm">
                  <div className="mt-1.5 w-2 h-2 rounded-full shrink-0 bg-blue-500" />
                  <div>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">{item.title}</span>
                    <p className="text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-3">Disadvantages</h3>
            <div className="space-y-2 mb-5">
              {MA_CONS.map((item, i) => (
                <div key={i} className="flex gap-3 p-3 rounded-lg bg-rose-50 dark:bg-rose-900/20 border border-rose-100 dark:border-rose-800/50 text-sm">
                  <div className="mt-1.5 w-2 h-2 rounded-full shrink-0 bg-rose-500" />
                  <div>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">{item.title}</span>
                    <p className="text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Key Insight</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                The single most powerful lever in a trade sale is <strong>competitive tension (auction dynamics)</strong>. Sell-side bankers are paid to bring multiple strategic and financial buyers to the table simultaneously. Without competition, price maximization is nearly impossible.
              </p>
            </div>
          </motion.section>

          {/* ── Section 4: Selection criteria ── */}
          <motion.section id="when-to-choose" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">Which Exit to Choose and When</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
              There is no universally superior exit option. The optimal path depends on market conditions, company characteristics, and the seller's objectives.
            </p>

            <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800/60 border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 w-3/5">Situation</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Recommended Exit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {SITUATION_TABLE.map((row, i) => {
                    const c = COLOR_MAP[row.color];
                    return (
                      <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{row.situation}</td>
                        <td className="px-4 py-3">
                          <span className={`inline-block text-xs font-medium rounded-full px-2.5 py-0.5 ${c.badge}`}>{row.recommendation}</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="mt-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 Think of it this way</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                Selling at an open-air market (IPO) versus selling directly to a major buyer (trade sale). On a good day, the market delivers a higher price. On a rainy day, you want a committed buyer who will show up regardless.
              </p>
            </div>
          </motion.section>

          {/* ── Case studies ── */}
          <section id="cases">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Case Studies — How Exit Strategies Shift in Practice</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Textbook criteria collapse under real-world pressure. These two cases show how fluidly IPO and M&A paths can substitute for each other.
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
                    <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-4 flex items-start justify-between gap-3 flex-wrap">
                      <div>
                        <span className={`inline-block text-xs font-medium rounded-full px-2.5 py-0.5 mb-2 ${c.badge}`}>
                          {c_item.type}
                        </span>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{c_item.title}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{c_item.company}</p>
                      </div>
                    </div>

                    <div className="p-5 space-y-4">
                      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                        <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 Think of it this way</p>
                        <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">{c_item.analogy}</p>
                      </div>

                      <div className="space-y-3">
                        {c_item.paragraphs.map((p, i) => (
                          <p key={i} className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{p}</p>
                        ))}
                      </div>

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

          {/* ── Key insight ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-5">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-2">🔑 Key Insight</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                IPO and M&A exit are instruments suited to different market conditions and objectives. For PE funds and founders, the right question is never "which is inherently better" — it is <strong>"which delivers the best outcome given today's market and this company's specific situation."</strong> As Figma and Arm demonstrate, the ability to pivot fluidly between exit paths when one closes is often what separates realized value from paper gains.
              </p>
            </div>
          </motion.section>

          {/* ── Related concepts ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">Related Concepts</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/en/deal-101/lbo", title: "LBO (Leveraged Buyout)", desc: "The PE fund's core acquisition structure — from entry to exit and how returns are generated", badge: "Deal Structure" },
                { href: "/en/deal-101/ma-process", title: "The M&A Process", desc: "From strategy through closing — the full sell-side process step by step", badge: "Deal Structure" },
                { href: "/en/deal-101/antitrust", title: "Antitrust & Merger Control", desc: "The regulatory dimension that blocked Figma and Arm — and how it reshapes exit planning", badge: "Regulation" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group block p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-600 transition-colors"
                >
                  <span className="text-[10px] font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 rounded-full px-2 py-0.5">
                    {item.badge}
                  </span>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mt-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
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
