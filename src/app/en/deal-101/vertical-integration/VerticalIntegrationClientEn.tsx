"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ── Animation helper ─────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// ── Color map ────────────────────────────────────────────────────
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

// ── Strategic reasons data ───────────────────────────────────────
const STRATEGIC_REASONS = [
  {
    icon: "💰",
    title: "Cost Reduction",
    color: "emerald",
    desc: "Eliminating intermediary margins. The supplier's margin is absorbed directly, structurally improving EBITDA margins.",
  },
  {
    icon: "🔒",
    title: "Supply Security",
    color: "blue",
    desc: "Eliminating the risk of raw material or component supply disruptions. The semiconductor supply chain crisis demonstrated the cost of external dependency — vertical integration internalizes that risk.",
  },
  {
    icon: "✅",
    title: "Quality Control",
    color: "violet",
    desc: "Direct management across the entire process ensures quality consistency. The brand can own the quality standard at every step of the chain.",
  },
  {
    icon: "📊",
    title: "Data & Insights",
    color: "indigo",
    desc: "Integrating data across the full supply chain enables demand forecasting and inventory optimization. Real-time data advantages shouldn't be handed to competitors.",
  },
  {
    icon: "🚧",
    title: "Competitive Foreclosure",
    color: "rose",
    desc: "Locking up key suppliers prevents competitors from accessing the same inputs (Foreclosure). It builds structural competitive advantage that pricing alone cannot replicate.",
  },
];

// ── Risks data ───────────────────────────────────────────────────
const RISKS = [
  { icon: "💸", title: "Increased Capital Intensity", color: "rose", desc: "Owning multiple stages of the supply chain requires massive capital investment. Leverage costs rise and financial flexibility shrinks." },
  { icon: "🔀", title: "Reduced Flexibility", color: "amber", desc: "Switching external suppliers vs pivoting internal operations are completely different problems. Vertical integration makes rapid adaptation to technology shifts harder." },
  { icon: "🎯", title: "Core Competency Dilution", color: "orange", desc: "Management burden expands into non-core areas. When leadership attention is spread thin, competitive strength in the core business erodes." },
  { icon: "⚖️", title: "Antitrust Risk", color: "violet", desc: "Vertical deals attract scrutiny for supply foreclosure. Regulatory review, conditional approvals, and behavioral remedies become real risks." },
  { icon: "🤝", title: "Integration Failure", color: "indigo", desc: "PMI complexity increases with cultural mismatches. Integration costs can exceed expected synergy gains before any value is created." },
];

// ── Case studies ─────────────────────────────────────────────────
const CASES = [
  {
    company: "Amazon's Stepwise Vertical Integration — \"Empire of the Supply Chain\"",
    type: "Vertical Integration Success",
    typeColor: "emerald",
    keyDeals: [
      "2017: Amazon × Whole Foods ($13.7B) — offline distribution network and fresh food supply chain",
      "Amazon Logistics: proprietary delivery network (reducing FedEx/UPS dependency)",
      "Amazon Web Services: IT infrastructure internalized (owns the cloud layer)",
      "Amazon Studios: content production internalized (direct production for Prime Video)",
    ],
    analogy:
      "A restaurant chain that owns the farms, the delivery trucks, and the reservation app — all at once. At each stage, Amazon sells the capability to external customers while simultaneously reinforcing its own competitive position. That's the 'dual flywheel' of vertical integration.",
    paragraphs: [
      "Amazon's vertical integration is not a single blockbuster deal — it's a sustained, layered internalization strategy. The 2017 Whole Foods acquisition ($13.7B) secured offline retail footprint and fresh food supply chain in one move. Before and after that, Amazon built its own delivery trucks, drones, and aircraft, reducing dependence on FedEx and UPS by double-digit percentage points.",
      "AWS is the most dramatic example. Amazon built its own IT infrastructure, then sold that infrastructure to competitors and customers alike. This compressed internal costs while creating an entirely separate revenue stream. AWS today represents more than half of Amazon's total operating income.",
      "Amazon Studios follows the same logic. Instead of paying Netflix or Disney for content rights, Amazon produces directly. This locks in Prime Video customers while internalizing content costs that would otherwise flow to third parties.",
    ],
    lesson:
      "Vertical integration can be phased — and each phase can be monetized by selling the capability externally while reinforcing internal competitiveness. Amazon turned every integration step into a profit center, using revenue from external customers to fund the next stage of internalization. This is the playbook that elevates vertical integration beyond simple cost-cutting.",
    synergyType: "Cost Reduction + Data Advantage + Competitive Foreclosure",
    synergyColor: "emerald",
  },
  {
    company: "Apple's Chip Vertical Integration — \"The Deepest Competitive Moat\"",
    type: "Technology Moat Creation",
    typeColor: "blue",
    keyDeals: [
      "PA Semi acquisition (2008, $278M) — low-power chip design capability",
      "Intrinsity acquisition (2010) — ARM high-performance design team absorbed",
      "Multiple power chip IP acquisitions — system semiconductor internalization",
      "2020 M1: complete departure from Intel, Apple Silicon era begins",
    ],
    analogy:
      "A car company that designs its own engine — and that engine turns out to be the most fuel-efficient and powerful in the world. Competitors can't buy it, and they can't replicate it. That is precisely what Apple's chip vertical integration achieved.",
    paragraphs: [
      "Apple's semiconductor internalization, which began with the A4 chip design in 2010, reached its culmination with the M1 in 2020. The PA Semi acquisition (2008, $278M) secured low-power chip design capability. The Intrinsity acquisition (2010) absorbed an ARM high-performance design team. Two decades of incremental acquisitions opened the M1, M2, and M3 era.",
      "The result was a competitive moat no rival could cross. iPhone and Mac performance and battery life are category-leading. Apple's chips run two to three generations ahead of the competition in performance-per-watt — Windows laptop manufacturers still haven't caught the M1's 2020 efficiency benchmark.",
      "The cost impact was equally significant. Eliminating Qualcomm modem royalties (billions of dollars annually) and internalizing Intel chip margins structurally improved hardware margins. Apple now designs chips for every product in its lineup: smartphones, laptops, tablets, and smartwatches.",
    ],
    lesson:
      "The PA Semi acquisition ($278M) is routinely cited as one of the highest-ROI deals in M&A history. Vertical integration at its best doesn't just cut costs — it builds a structural advantage that competitors cannot replicate regardless of spending. The real value of vertical integration is not a lower cost base. It's a permanently differentiated product that compounds over time.",
    synergyType: "Technology Moat + Cost Reduction + Quality Control",
    synergyColor: "blue",
  },
];

export default function VerticalIntegrationClientEn() {
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
            <span className="inline-block text-xs font-medium bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300 rounded-full px-3 py-1 mb-4">
              Strategy
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              Vertical Integration — The M&A Strategy for Owning the Supply Chain
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              Forward vs backward integration, five strategic rationales, five structural risks, and case studies on Amazon and Apple.
            </p>

            {/* Quick nav */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { href: "#definition", label: "What Is It?", color: "blue" },
                { href: "#reasons", label: "5 Strategic Reasons", color: "emerald" },
                { href: "#risks", label: "5 Risks", color: "rose" },
                { href: "#cases", label: "Case Studies", color: "violet" },
                { href: "#related", label: "Related Concepts", color: "indigo" },
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

          {/* ── 1. What is Vertical Integration ── */}
          <motion.section id="definition" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">What Is Vertical Integration?</h2>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                Vertical integration is a strategy in which <strong className="text-gray-800 dark:text-gray-200">a company directly owns and controls multiple stages of its product or service supply chain</strong>. Through M&A, a firm acquires suppliers, distributors, or retail channels to internalize the value chain.
              </p>
              <p>
                The strategy runs in two directions.
              </p>
            </div>

            {/* Forward / Backward integration cards */}
            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 p-5">
                <p className="text-xs font-bold text-blue-700 dark:text-blue-300 mb-1">→ Forward Integration</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  Expanding into distribution and sales stages. Moving closer to the end customer.
                </p>
                <p className="mt-2 text-xs text-blue-600 dark:text-blue-400">
                  Example: Manufacturer acquires a retail chain / Farm acquires a restaurant
                </p>
              </div>
              <div className="rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/20 p-5">
                <p className="text-xs font-bold text-emerald-700 dark:text-emerald-300 mb-1">← Backward Integration</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  Expanding into raw materials and components. Moving closer to the source of supply.
                </p>
                <p className="mt-2 text-xs text-emerald-600 dark:text-emerald-400">
                  Example: Restaurant acquires a farm / Automaker acquires a battery company
                </p>
              </div>
            </div>

            {/* Why M&A instead of organic growth */}
            <div className="mt-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5">
              <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">Why M&A rather than building it organically?</p>
              <ul className="space-y-2">
                {[
                  "Speed: acquiring existing capability is faster than building it from scratch (time-to-market)",
                  "Proven capability: absorb an already-validated team, technology, and customer base instantly",
                  "Competitive blocking: prevent a rival from acquiring the same asset first",
                  "Risk reduction: skip the execution risk of greenfield development by buying an operating business",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-indigo-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Analogy */}
            <div className="mt-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 Think of it this way</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                A pizza chain that acquires a flour mill and a delivery app. Lower ingredient costs, full control over delivery quality, maximized final margin. And if that delivery app starts serving other restaurants too, you've just created a brand-new revenue stream. That's why vertical integration is so much more than a cost-cutting exercise.
              </p>
            </div>

            {/* Insight */}
            <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Key Insight</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                Vertical integration is strategically compelling not merely because it reduces costs — but because it creates assets, data, and capabilities that competitors cannot access. That's why the world's largest tech companies are the most aggressive practitioners of vertical integration via M&A.
              </p>
            </div>
          </motion.section>

          {/* ── 2. Five strategic reasons ── */}
          <motion.section id="reasons" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Five Strategic Rationales for Vertical Integration</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              The logic behind internalizing supply chain stages through M&A goes well beyond simple cost reduction.
            </p>
            <div className="space-y-3">
              {STRATEGIC_REASONS.map((reason, i) => {
                const c = COLOR_MAP[reason.color];
                return (
                  <div key={i} className="flex gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40">
                    <div className="shrink-0 text-2xl">{reason.icon}</div>
                    <div>
                      <h3 className={`text-sm font-bold ${c.text} mb-1`}>{reason.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{reason.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ── 3. Five risks ── */}
          <motion.section id="risks" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Five Structural Risks of Vertical Integration</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Vertical integration is an attractive strategy — but it carries structural risks that demand rigorous due diligence.
            </p>
            <div className="space-y-3">
              {RISKS.map((risk, i) => {
                const c = COLOR_MAP[risk.color];
                return (
                  <div key={i} className="flex gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40">
                    <div className="shrink-0 text-2xl">{risk.icon}</div>
                    <div>
                      <h3 className={`text-sm font-bold ${c.text} mb-1`}>{risk.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{risk.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Key Insight</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                Most risks of vertical integration stem from a single source: rigidity. The moment you own a supply chain stage, changing it becomes exponentially harder. In industries where technology shifts rapidly, vertical integration can be either a decisive moat or a strategic anchor — depending on whether the integrated assets remain relevant.
              </p>
            </div>
          </motion.section>

          {/* ── 4. Case studies ── */}
          <section id="cases">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Case Studies — How Vertical Integration Builds Competitive Moats</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Amazon and Apple represent the two most effective executions of vertical integration in modern business. Both went well beyond cost savings — they built structures their competitors cannot replicate.
              </p>
            </motion.div>

            <div className="space-y-8">
              {CASES.map((caseItem, idx) => {
                const typeC = COLOR_MAP[caseItem.typeColor];
                const synergyC = COLOR_MAP[caseItem.synergyColor];
                return (
                  <motion.div
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                  >
                    {/* Case header */}
                    <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-4 flex items-start justify-between gap-3 flex-wrap">
                      <div>
                        <span className={`inline-block text-xs font-medium rounded-full px-2.5 py-0.5 mb-2 ${typeC.badge}`}>
                          {caseItem.type}
                        </span>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{caseItem.company}</h3>
                      </div>
                      <div className={`text-xs font-medium rounded-lg px-3 py-2 ${synergyC.bg} ${synergyC.text} border ${synergyC.border}`}>
                        📊 {caseItem.synergyType}
                      </div>
                    </div>

                    <div className="p-5 space-y-4">
                      {/* Key deals */}
                      <div>
                        <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">Key Acquisitions</h4>
                        <ul className="space-y-1">
                          {caseItem.keyDeals.map((deal, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${synergyC.dot}`} />
                              {deal}
                            </li>
                          ))}
                        </ul>
                      </div>

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
                        <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Key Insight</p>
                        <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">{caseItem.lesson}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* ── Related concepts ── */}
          <motion.section id="related" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">Related Concepts</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/en/deal-101/strategic-ma", title: "Strategic M&A", desc: "Vertical integration is one of the core types of strategic M&A — understand the full framework", badge: "Strategy" },
                { href: "/en/deal-101/platform-strategy", title: "Platform Strategy", desc: "How platform companies use vertical integration to strengthen their ecosystems", badge: "Strategy" },
                { href: "/en/deal-101/synergy", title: "Synergy", desc: "How cost and revenue synergies from vertical integration are modeled into M&A valuation", badge: "Valuation" },
                { href: "/en/deal-101/antitrust", title: "Antitrust", desc: "Foreclosure concerns in vertical M&A and how regulators evaluate supply chain deals", badge: "Regulatory" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group block p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors"
                >
                  <span className="text-[10px] font-medium bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300 rounded-full px-2 py-0.5">
                    {item.badge}
                  </span>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mt-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
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
