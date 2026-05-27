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

// ── Five moat types ──────────────────────────────────────────────
const MOAT_TYPES = [
  {
    id: "network",
    label: "Network Effects",
    subtitle: "The most powerful moat in the digital era",
    color: "blue",
    strength: "Strongest",
    description: "The service becomes more valuable as more users join. The gap between the leader and challengers widens over time, because every new user reinforces the incumbent's advantage.",
    examples: ["Visa / Mastercard — more merchants = more cardholders = more merchants", "Meta — more friends on the platform = higher cost of leaving", "Airbnb — more hosts and travelers = better matching quality"],
    weakness: "If the network fails to reach critical mass, the effect reverses. A competing platform that gains more users faster can trigger rapid switching.",
  },
  {
    id: "switching",
    label: "Switching Costs",
    subtitle: "High cost, time, or risk of changing providers",
    color: "violet",
    strength: "Strong",
    description: "The cost, time, and risk of migrating to a competitor is high enough that customers stay — not because they love the product, but because leaving is too painful. Especially powerful in enterprise software, financial services, and healthcare.",
    examples: ["Salesforce CRM — years of sales data and custom workflows are trapped inside", "Oracle DB — a database migration takes months and costs tens of millions of dollars", "Adobe CC — the workflow and file format lock-in makes switching impractical"],
    weakness: "Technology paradigm shifts can reset switching costs. The cloud transition significantly eroded the switching costs of legacy on-premise software vendors.",
  },
  {
    id: "cost",
    label: "Cost Advantage",
    subtitle: "Structurally lower costs through scale or proprietary resources",
    color: "emerald",
    strength: "Medium–Strong",
    description: "The ability to produce and deliver at a structurally lower cost than competitors — whether through economies of scale, unique assets, or proprietary processes. Same price means higher margins; same margins means lower prices.",
    examples: ["Amazon logistics network — own infrastructure keeps delivery costs 30–50% below competitors", "Walmart purchasing power — scale gives it negotiating leverage over every supplier", "Texas Instruments — proprietary manufacturing processes create a durable cost edge"],
    weakness: "Technological innovation can disrupt the underlying cost structure. If drone delivery becomes viable at scale, Amazon's existing logistics infrastructure advantage could erode.",
  },
  {
    id: "intangible",
    label: "Intangible Assets",
    subtitle: "Brand, patents, regulatory licenses",
    color: "amber",
    strength: "Varies by sector",
    description: "Assets that competitors cannot replicate with capital alone — regardless of how much they spend or how quickly. Luxury brand aspiration, pharmaceutical patents, and financial licenses are the clearest examples.",
    examples: ["LVMH luxury brands — decades of heritage and perceived scarcity are not replicable with advertising spend", "Pharma patents — exclusive selling rights for the patent life of the drug", "Banking / securities licenses — new entrants face years of regulatory hurdles to obtain equivalent authorization"],
    weakness: "Vulnerable to patent expiration, brand reputation events, and regulatory change. Kodak's brand moat was made irrelevant by digital photography — the shift made the intangible asset obsolete.",
  },
  {
    id: "scale",
    label: "Efficient Scale",
    subtitle: "A limited market that cannot support additional entrants",
    color: "sky",
    strength: "Strong in niche markets",
    description: "The market is only large enough for one or two profitable players. The incumbent already satisfies demand, so a second entrant would earn below-cost returns — making entry economically irrational.",
    examples: ["Local monopoly airports — a second airport in the same city would be uneconomical", "Regional cable companies — building a second cable infrastructure in the same area destroys returns for both", "Medical waste processors — local regulatory permits plus small addressable market"],
    weakness: "Technology shifts or market expansion can open new entry vectors. Streaming video disrupted the efficient scale moat of local cable TV operators.",
  },
];

// ── Valuation bands by moat strength ────────────────────────────
const VALUATION_BANDS = [
  { moat: "No Moat", multiple: "4–8x", color: "rose", risk: "High risk of profit erosion as competition intensifies", example: "Generic manufacturing, commodity retail" },
  { moat: "Narrow Moat", multiple: "8–14x", color: "amber", risk: "Short-to-medium-term competitive advantage, 5–10 years sustainable", example: "Regional market leaders, niche branded products" },
  { moat: "Wide Moat", multiple: "15–25x+", color: "emerald", risk: "Durable competitive advantage, 10+ years", example: "Visa, LVMH, Google, Oracle" },
];

// ── Case studies ─────────────────────────────────────────────────
const CASES = [
  {
    title: "Danaher — The M&A Machine That Only Buys Moated Businesses",
    dealValue: "Cumulative tens of billions",
    type: "PE + Strategic Hybrid Success",
    typeColor: "emerald",
    analogy: "Danaher is a mechanic who only buys high-performance used engines — then strips them down and reassembles each part more precisely using its DBS toolkit. If the engine doesn't have real horsepower (a moat), Danaher doesn't buy it.",
    paragraphs: [
      "The Danaher Business System (DBS) — inspired by the Toyota Production System — is the proprietary operating framework Danaher applies after every acquisition to deepen the target's moat rather than just extract cost. Beckman Coulter (medical instruments, $6.8B), Pall Corporation (filtration, $13.8B), and Cytiva (biotech manufacturing, acquired from GE for $21.4B) all share one defining trait: extremely high customer switching costs in scientific and medical equipment.",
      "The pattern is unmistakable. Once a Beckman Coulter analyzer is installed in a lab, the calibration protocols, consumables, and software ecosystem are all tied to that instrument. Replacing it means replacing the entire workflow. Danaher installs DBS on top of that switching cost moat — tightening the lock-in further.",
      "Result: roughly 20%+ compound annual returns from 1984 to 2023 — more than three times the S&P 500 over the same period. Forty years of executing the same formula: identify switching-cost moats, acquire them at fair prices, and deepen the moat with DBS.",
    ],
    lesson: "The key to sustained M&A success is not how well you integrate good businesses — it's whether you select businesses with durable moats in the first place. Danaher made moat selection the single most important criterion in its acquisition process.",
    moatType: "Switching Cost Moat",
    moatColor: "violet",
  },
  {
    title: "LVMH's Luxury Empire — A Portfolio of Intangible Asset Moats",
    dealValue: "Including Tiffany $15.8B (2020)",
    type: "Intangible Asset Moat Accumulation",
    typeColor: "amber",
    analogy: "LVMH is a collector of rare wine vintages. No amount of money can replicate what time and heritage have built into each bottle — and the value only appreciates. That's why LVMH buys without hesitation even during a crisis.",
    paragraphs: [
      "LVMH's acquired brands — Louis Vuitton, Dior, Bulgari ($4.3B), TAG Heuer, Tiffany & Co. ($15.8B, 2020) — all share the same moat structure: decades of heritage, scarcity perception, and aspirational value. These characteristics cannot be manufactured with advertising spend, regardless of the budget. That is precisely what makes them moats.",
      "The Tiffany acquisition thesis: LVMH paid $15.8B in the middle of the COVID-19 pandemic. Against widespread market skepticism, LVMH was pricing in the structural growth of Chinese luxury consumption and the enduring premium of the Tiffany brand in the US and Asia. Luxury brand moats preserve pricing power even through economic downturns — a key part of the underwriting.",
      "Result: LVMH reported revenue of €79.2B and operating profit of €21.1B in 2022 — an operating margin of approximately 26%. That margin is the proof point for the luxury moat thesis. A brand powerful enough to hold prices during a recession is both a defensive moat and an offensive growth engine simultaneously.",
    ],
    lesson: "Intangible asset moats (brands) reveal their true value during economic downturns. Moat-less businesses cut prices to maintain volume; businesses with strong brand moats hold or raise prices. The real value of a brand moat in M&A underwriting only becomes fully visible when the cycle turns down.",
    moatType: "Intangible Asset Moat (Brand)",
    moatColor: "amber",
  },
];

export default function CompetitiveMoatClientEn() {
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
              <span className="text-xs text-gray-400">Strategy</span>
            </div>
            <span className="inline-block text-xs font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 rounded-full px-3 py-1 mb-4">
              Strategy
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              Competitive Moat — The Factor That Determines M&A Valuation Multiples
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              Buffett's moat concept, five moat types (network effects, switching costs, cost advantage, intangible assets, efficient scale), how moat strength maps to EV/EBITDA multiples, and case studies on Danaher and LVMH.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { href: "#definition", label: "What Is a Moat?", color: "emerald" },
                { href: "#moat-types", label: "5 Moat Types", color: "blue" },
                { href: "#valuation", label: "Moat & Valuation", color: "violet" },
                { href: "#cases", label: "Case Studies", color: "amber" },
              ].map((nav) => {
                const c = COLOR_MAP[nav.color];
                return (
                  <a key={nav.href} href={nav.href} className={`rounded-full px-3 py-1 text-xs font-medium ${c.badge} hover:opacity-80 transition-opacity`}>
                    {nav.label}
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-16">

          {/* ── 1. What Is a Competitive Moat ── */}
          <motion.section id="definition" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">What Is a Competitive Moat</h2>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                A competitive moat is a <strong className="text-gray-800 dark:text-gray-200">sustainable competitive advantage that competitors cannot easily replicate</strong>. The concept was popularized by Warren Buffett, who defined a great business as one "surrounded by a moat that makes it very difficult for competitors to breach."
              </p>
              <p>
                In M&A, the depth of the moat directly determines the valuation multiple. Businesses without moats see their profitability eroded as competition intensifies — they trade at low multiples because buyers apply a discount for that uncertainty. Businesses with wide moats command higher multiples because acquirers and investors are willing to pay for durable earnings power.
              </p>
              <p>
                Strategic acquirers ask: "Will this business still generate these profits after I own it?" PE firms ask: "Will this company still be competitively positioned at exit, five to seven years from now?" Both questions start with moat analysis.
              </p>
            </div>

            {/* Analogy */}
            <div className="mt-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 Think of it this way</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                Imagine a company that owns the only bridge over a river in a town. It collects tolls for as long as it takes a competitor to build a second bridge. If building that second bridge takes 20 years, the company has 20 years of uncontested toll collection — and the longer that window, the more an acquirer is willing to pay to own that bridge today.
              </p>
            </div>

            {/* Insight */}
            <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Key Insight</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                Morningstar formally rates companies as No Moat, Narrow Moat, or Wide Moat. A Wide Moat rating means the company is expected to sustain excess returns (ROIC &gt; WACC) for at least 10 years. This classification maps directly to valuation multiples in M&A underwriting.
              </p>
            </div>
          </motion.section>

          {/* ── 2. Five Moat Types ── */}
          <motion.section id="moat-types" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Five Types of Competitive Moat</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Buffett's intuition, systematized by Morningstar. In practice, M&A due diligence evaluates each of these five types to assess whether a moat exists and how durable it is.
            </p>

            <div className="space-y-4">
              {MOAT_TYPES.map((moat) => {
                const c = COLOR_MAP[moat.color];
                return (
                  <div key={moat.id} className={`rounded-xl border ${c.border} ${c.bg} p-5`}>
                    <div className="flex items-start justify-between gap-3 flex-wrap mb-3">
                      <div>
                        <h3 className="text-base font-bold text-gray-900 dark:text-gray-100">{moat.label}</h3>
                        <span className={`text-xs font-medium ${c.text}`}>{moat.subtitle}</span>
                      </div>
                      <span className={`shrink-0 text-xs font-medium rounded-full px-3 py-1 ${c.badge}`}>
                        Strength: {moat.strength}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{moat.description}</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">Examples</h4>
                        <ul className="space-y-1">
                          {moat.examples.map((ex, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />
                              {ex}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">Weakness / Threat</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{moat.weakness}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ── 3. Moat and Valuation ── */}
          <motion.section id="valuation" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">How Moat Strength Maps to M&A Valuation</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              Moat depth is directly reflected in EV/EBITDA multiples. The ranges below are based on moat strength alone, without sector adjustment — actual deal multiples will vary by industry, growth rate, and interest rate environment.
            </p>

            <div className="space-y-3">
              {VALUATION_BANDS.map((band, i) => {
                const c = COLOR_MAP[band.color];
                return (
                  <div key={i} className={`rounded-xl border ${c.border} ${c.bg} p-4 flex items-start gap-4`}>
                    <div className={`shrink-0 rounded-lg px-3 py-2 text-center min-w-[72px] bg-white/60 dark:bg-gray-900/40 border ${c.border}`}>
                      <p className={`text-sm font-bold ${c.text}`}>{band.multiple}</p>
                      <p className={`text-[10px] mt-0.5 ${c.text} opacity-80`}>EV/EBITDA</p>
                    </div>
                    <div>
                      <p className={`text-sm font-bold ${c.text} mb-1`}>{band.moat}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">{band.risk}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">Examples: {band.example}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Key Insight</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                Strategic buyers ask whether the profits will persist after the acquisition closes. PE firms ask whether competitive positioning will hold at exit, five to seven years later. Both views feed directly into the EV/EBITDA multiple an acquirer is willing to pay — which is why moat analysis is a prerequisite for valuation modeling, not an afterthought.
              </p>
            </div>

            <div className="mt-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 Think of it this way</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                Paying a high multiple for a moat-less business is like putting money in a safe with no lock — the cash is there today, but competitors can reach in and take it. Paying a high multiple for a wide-moat business is like putting money in a vault — hard to open, but what's inside stays there for a long time.
              </p>
            </div>
          </motion.section>

          {/* ── 4. Case Studies ── */}
          <section id="cases">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Case Studies — Two Moat-Based M&A Playbooks</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Danaher systematically hunts for switching-cost moats and deepens them with DBS. LVMH acquires brand (intangible asset) moats and compounds them into a portfolio. Different moat types, the same underlying principle: never acquire a business without a moat.
              </p>
            </motion.div>

            <div className="space-y-8">
              {CASES.map((caseItem, idx) => {
                const typeC = COLOR_MAP[caseItem.typeColor];
                const moatC = COLOR_MAP[caseItem.moatColor];
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
                        <span className={`inline-block text-xs font-medium rounded-full px-2.5 py-0.5 mb-2 ${typeC.badge}`}>
                          {caseItem.type}
                        </span>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{caseItem.title}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Deal size: {caseItem.dealValue}</p>
                      </div>
                      <div className={`text-xs font-medium rounded-lg px-3 py-2 ${moatC.bg} ${moatC.text} border ${moatC.border}`}>
                        🏰 {caseItem.moatType}
                      </div>
                    </div>

                    <div className="p-5 space-y-4">
                      {/* Analogy */}
                      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                        <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 Think of it this way</p>
                        <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">{caseItem.analogy}</p>
                      </div>

                      {/* Body */}
                      <div className="space-y-3">
                        {caseItem.paragraphs.map((p, i) => (
                          <p key={i} className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{p}</p>
                        ))}
                      </div>

                      {/* Lesson */}
                      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                        <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Key Lesson</p>
                        <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">{caseItem.lesson}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* ── Related Concepts ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">Related Concepts</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/en/deal-101/platform-strategy", title: "Platform Strategy", desc: "How network effects function as a moat, and why platforms command acquisition premiums.", badge: "Strategy" },
                { href: "/en/deal-101/synergy", title: "Synergy", desc: "Whether synergy from acquiring a moated business is realizable — Cost vs Revenue.", badge: "Valuation" },
                { href: "/en/deal-101/ev-ebitda", title: "EV/EBITDA Multiple", desc: "How moat strength translates into specific valuation multiples in practice.", badge: "Valuation" },
                { href: "/en/deal-101/strategic-ma", title: "Strategic M&A", desc: "Decision frameworks for strategic acquisitions focused on moat acquisition.", badge: "Strategy" },
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
