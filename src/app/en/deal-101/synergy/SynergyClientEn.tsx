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
  blue:    { badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",    border: "border-blue-200 dark:border-blue-800",    bg: "bg-blue-50 dark:bg-blue-900/20",    text: "text-blue-700 dark:text-blue-300",    dot: "bg-blue-500" },
  violet:  { badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300", border: "border-violet-200 dark:border-violet-800", bg: "bg-violet-50 dark:bg-violet-900/20", text: "text-violet-700 dark:text-violet-300", dot: "bg-violet-500" },
  amber:   { badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",  border: "border-amber-200 dark:border-amber-800",  bg: "bg-amber-50 dark:bg-amber-900/20",  text: "text-amber-700 dark:text-amber-300",  dot: "bg-amber-500" },
  rose:    { badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",    border: "border-rose-200 dark:border-rose-800",    bg: "bg-rose-50 dark:bg-rose-900/20",    text: "text-rose-700 dark:text-rose-300",    dot: "bg-rose-500" },
  emerald: { badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300", border: "border-emerald-200 dark:border-emerald-800", bg: "bg-emerald-50 dark:bg-emerald-900/20", text: "text-emerald-700 dark:text-emerald-300", dot: "bg-emerald-500" },
  teal:    { badge: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",    border: "border-teal-200 dark:border-teal-800",    bg: "bg-teal-50 dark:bg-teal-900/20",    text: "text-teal-700 dark:text-teal-300",    dot: "bg-teal-500" },
};

// ── Synergy type data ────────────────────────────────────────────
const SYNERGY_TYPES = [
  {
    id: "cost",
    label: "Cost Synergy",
    subtitle: "Cost Synergy — Predictable Savings",
    color: "emerald",
    likelihood: "High",
    timeline: "1–3 years",
    kpi: "EBITDA margin improvement, cost savings in absolute dollars",
    description:
      "Cost synergies come from eliminating duplicate headcount, facilities, and systems — or from gaining purchasing scale. They are concrete, controllable, and relatively straightforward to model. That's why buyers and analysts tend to assign them higher probability than revenue synergies.",
    examples: [
      "HQ consolidation → lower rent and overhead",
      "Eliminating duplicate ERP/IT systems",
      "Combined procurement lowers input costs",
      "Reducing overlapping sales and marketing teams",
    ],
    risks: [
      "Key talent leaves during restructuring uncertainty",
      "Integration costs overshoot the projected savings",
      "Organizational resistance delays the timeline",
    ],
  },
  {
    id: "revenue",
    label: "Revenue Synergy",
    subtitle: "Revenue Synergy — Compelling but Hard to Deliver",
    color: "violet",
    likelihood: "Low–Medium",
    timeline: "3–7 years",
    kpi: "Incremental revenue, cross-sell rate, new market share",
    description:
      "Revenue synergies come from cross-selling, entering new markets, or bundling products. In theory they are the most exciting part of any M&A pitch. In practice they are the hardest to realize — because customers don't care about your merger. Their buying decisions are driven by their own needs, not your integration roadmap.",
    examples: [
      "Microsoft × LinkedIn: using LinkedIn's network to sell Azure to enterprises",
      "Cross-selling: offering Company B's product to Company A's existing customers",
      "Bundling: packaging two products together at a discount",
      "Market expansion: leveraging the acquired company's distribution network",
    ],
    risks: [
      "Customers churn during merger disruption, switching to competitors",
      "Misaligned sales cultures make cross-selling nearly impossible",
      "Regulatory restrictions on bundling or exclusivity",
    ],
  },
];

// ── Synergy timeline ─────────────────────────────────────────────
const TIMELINE = [
  { period: "Day 1", label: "Immediate", color: "blue", items: ["Brand integration announcement", "Review and cancel duplicate contracts", "Identify quick-win opportunities"] },
  { period: "Year 1", label: "Early Integration", color: "emerald", items: ["Complete organizational restructuring", "Achieve ~50% of targeted cost synergies", "Headcount and facility overlap resolved"] },
  { period: "Year 2–3", label: "Full Cost Synergies", color: "amber", items: ["Full cost synergy realization", "Revenue synergy initiatives underway", "IT and system integration complete"] },
  { period: "Year 3+", label: "Revenue Synergies", color: "violet", items: ["Cross-sell results becoming measurable", "New market share gains visible", "If you get here, consider yourself lucky"] },
];

// ── Why synergies fail ───────────────────────────────────────────
const FAILURE_REASONS = [
  { icon: "💸", title: "Integration Costs Are Underestimated", desc: "The cost to merge IT systems, pay severance, and hire consultants routinely exceeds the projected savings. The net synergy number turns negative before it ever turns positive.", color: "rose" },
  { icon: "🚪", title: "Key Talent Walks Out", desc: "The most capable people have the most options. Uncertainty during a merger is exactly when they get calls from competitors — and leave, taking their institutional knowledge with them.", color: "amber" },
  { icon: "⚔️", title: "Culture Clashes", desc: "The 'us vs. them' divide. Two cultures that never truly integrate don't produce synergies — they consume energy in internal friction instead.", color: "violet" },
  { icon: "🏃", title: "Customer Churn", desc: "Customers don't wait around during merger chaos. They quietly evaluate competitors. Revenue synergy projections often assume stable customers — the opposite of what happens.", color: "blue" },
  { icon: "📈", title: "Premium Already Priced In", desc: "If the acquisition price already bakes in 100% of the projected synergies, any shortfall falls directly to the acquirer's shareholders as value destruction.", color: "emerald" },
];

// ── Case studies ─────────────────────────────────────────────────
const CASES = [
  {
    company: "Disney × Pixar (2006)",
    dealValue: "$7.4B",
    type: "Synergy Success",
    typeColor: "emerald",
    analogy: "Disney hired a brilliant chef and gave them the run of the kitchen — without rewriting the menu. The distribution pipes were connected; the creative process was left alone.",
    paragraphs: [
      "In 2006, Disney acquired Pixar for $7.4 billion. At the time, Disney's own animation studio had been struggling for years, while Pixar was posting hit after hit — Finding Nemo, The Incredibles, and more. The strategic thesis was simple: bring Pixar's creative DNA into Disney's ecosystem.",
      "What made it work was restraint. Disney kept Pixar's culture intact. Pixar co-founder John Lasseter took creative oversight of both studios, effectively reverse-importing Pixar's storytelling philosophy into Disney Animation. The result: Up, Coco, Inside Out, Toy Story 3 — and a full revival of Disney's own animated output.",
      "Outcome: The combined box office of Pixar films post-acquisition runs into the tens of billions of dollars. The $7.4B price tag is routinely cited as one of the best acquisitions in M&A history. A textbook revenue synergy success — achieved by protecting, not absorbing, the target's core strength.",
    ],
    lesson: "Creative synergies require cultural independence. The moment Disney told Pixar 'do it our way,' Pixar would have stopped being Pixar. When the acquired company's core asset is its people and culture, the right integration strategy is minimal integration.",
    synergyType: "Revenue Synergy — Delivered",
    synergyColor: "emerald",
  },
  {
    company: "AOL × Time Warner (2001)",
    dealValue: "$165B",
    type: "Catastrophic Failure",
    typeColor: "rose",
    analogy: "An internet startup and a legacy TV giant merged because 'internet plus content equals the future.' In reality, they had completely different DNA — like merging a fast-casual chain with a white-tablecloth restaurant and expecting the menus to magically combine.",
    paragraphs: [
      "At the peak of the dot-com bubble in 2001, AOL acquired Time Warner for $165 billion — the largest merger in history at the time. The synergy story was irresistible: AOL's internet platform plus Time Warner's CNN, HBO, and Warner Music content would create a digital media empire. Synergy estimates ran into the billions.",
      "Reality set in quickly. The dot-com bubble burst, gutting AOL's business model. The cultural clash between AOL's internet startup ethos and Time Warner's traditional media hierarchy was severe and unresolved. Projected synergies failed to materialize. In 2002 alone, the combined company wrote off $99 billion — the largest write-down in corporate history.",
      "Epilogue: AOL and Time Warner were formally separated in 2009. A $165B bet became the definitive case study in M&A hubris. The synergy logic — internet plus content — wasn't wrong in theory; it was overwhelmed by cultural incompatibility, a technology shift faster than anyone modeled, and a valuation built on bubble-era assumptions.",
    ],
    lesson: "A compelling synergy narrative is not the same as a realizable synergy. Industries undergoing rapid technology change are especially prone to synergy overestimation — 'future synergies' are easy to model but hard to deliver when the underlying technology shifts faster than the integration plan. Bubble-peak valuations compound every error.",
    synergyType: "Expected: Revenue Synergy | Delivered: None",
    synergyColor: "rose",
  },
  {
    company: "Daimler × Chrysler (1998–2007)",
    dealValue: "$36B",
    type: "Culture Clash — Value Destroyed",
    typeColor: "amber",
    analogy: "A German precision-engineering firm merged with an American volume-manufacturing giant. Both made cars. Neither made decisions the same way — and that difference proved fatal to every synergy on the slide deck.",
    paragraphs: [
      "In 1998, Daimler-Benz merged with Chrysler for $36 billion. The rationale: technology transfer, shared parts platforms, and a combined global distribution network would generate substantial cost and revenue synergies. The engineering heritage of Mercedes plus the market reach of Chrysler would create a global auto powerhouse.",
      "In practice, Daimler's German perfectionist engineering culture and Chrysler's American cost-efficiency culture collided at every decision point. The hoped-for parts sharing was limited by incompatible quality standards. Senior Chrysler executives departed in large numbers. Neither the cost synergies nor the revenue synergies materialized at any meaningful scale.",
      "Outcome: In 2007, Daimler sold Chrysler to private equity firm Cerberus Capital for just $7.4 billion — a $29 billion loss on a $36 billion investment in nine years. Chrysler subsequently went through bankruptcy and was acquired by Fiat. Daimler is now Mercedes-Benz, operating independently.",
    ],
    lesson: "Cultural integration is harder and more important than any line item in a synergy model. Numbers in a spreadsheet look the same regardless of whether the people producing them share a language, values, or a definition of 'quality.' Cultural due diligence deserves as much rigor as financial due diligence.",
    synergyType: "Expected: Cost + Revenue | Delivered: None",
    synergyColor: "rose",
  },
];

// ── Framework comparison table ────────────────────────────────────
const FRAMEWORK_TABLE = [
  { category: "Achievability", cost: "High", revenue: "Low–Medium" },
  { category: "Timeline", cost: "1–3 years", revenue: "3–7 years" },
  { category: "How to Measure", cost: "EBITDA margin improvement", revenue: "Incremental revenue, cross-sell rate" },
  { category: "Primary Risk", cost: "Talent attrition, integration cost overrun", revenue: "Customer churn, culture clash" },
  { category: "Management Control", cost: "Relatively high", revenue: "Low" },
  { category: "Typical M&A Model Haircut", cost: "~0–20% discount", revenue: "30–50% discount applied" },
];

export default function SynergyClientEn() {
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
              <span className="text-xs text-gray-400">Synergy</span>
            </div>
            <span className="inline-block text-xs font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 rounded-full px-3 py-1 mb-4">
              Valuation
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              Synergy — The Logic Behind Every M&A Premium
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              Cost vs revenue synergy, why 70% of deals fail to deliver, and three case studies: Disney×Pixar (success), AOL×Time Warner (failure), Daimler×Chrysler (culture clash).
            </p>

            {/* Quick nav */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { href: "#definition", label: "What is Synergy?", color: "blue" },
                { href: "#types", label: "Cost vs Revenue", color: "emerald" },
                { href: "#timeline", label: "Realization Timeline", color: "amber" },
                { href: "#why-fail", label: "Why Most Fail", color: "rose" },
                { href: "#cases", label: "Case Studies", color: "violet" },
                { href: "#framework", label: "Analysis Framework", color: "teal" },
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

          {/* ── 1. What is Synergy ── */}
          <motion.section id="definition" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">What is Synergy?</h2>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                Synergy is the idea that <strong className="text-gray-800 dark:text-gray-200">the combined entity is worth more than the sum of its parts</strong>. In M&A, it's the "1+1=3" argument — the economic justification for paying a premium above a target's standalone value.
              </p>
              <p>
                Without synergy, an acquirer paying a 30% premium over market price is simply handing 30% of the target's value to its shareholders with nothing in return. Synergy is what turns that premium from a gift into an investment thesis.
              </p>
            </div>

            {/* Formula box */}
            <div className="mt-4 rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/20 p-5">
              <p className="text-xs font-bold text-emerald-700 dark:text-emerald-300 mb-3">📐 The M&A Pricing Formula</p>
              <div className="text-center space-y-2">
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                  Acquisition Price = Standalone Value + PV of Synergies − Integration Costs
                </p>
                <div className="flex justify-center flex-wrap gap-x-4 gap-y-1 mt-3 text-xs text-gray-500 dark:text-gray-400">
                  <span><span className="font-medium text-gray-700 dark:text-gray-300">Standalone Value</span> = value the target would have independently (DCF, EV/EBITDA)</span>
                  <span><span className="font-medium text-gray-700 dark:text-gray-300">PV of Synergies</span> = present value of incremental cash flows from the combination</span>
                  <span><span className="font-medium text-gray-700 dark:text-gray-300">Integration Costs</span> = systems, severance, consulting, restructuring charges</span>
                </div>
              </div>
            </div>

            {/* Analogy */}
            <div className="mt-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 Think of it this way</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                Two restaurants merge: one kitchen gets cut (cost synergy), they start promoting each other's signature dishes to the other's regulars (revenue synergy), and their combined purchasing volume wins a better deal from the supplier (cost synergy again). But if the two head chefs have irreconcilable philosophies about food, none of that materializes.
              </p>
            </div>

            {/* Insight */}
            <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Key Insight</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                Acquisition premiums typically run 20–40% above the target's pre-deal share price. Synergy is the only thing that justifies paying that premium. If synergies don't materialize, the acquirer's shareholders absorb the entire premium as a loss — which is exactly what happens in roughly 70% of deals.
              </p>
            </div>
          </motion.section>

          {/* ── 2. Cost vs Revenue Synergy ── */}
          <motion.section id="types" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Cost Synergy vs Revenue Synergy</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Synergies split into two categories. Cost synergies reduce expenses; revenue synergies grow the top line. Both justify an acquisition premium, but their achievability and timelines are fundamentally different.
            </p>

            <div className="space-y-6">
              {SYNERGY_TYPES.map((type) => {
                const c = COLOR_MAP[type.color];
                return (
                  <div key={type.id} className={`rounded-xl border ${c.border} ${c.bg} p-5`}>
                    <div className="flex items-start justify-between gap-3 flex-wrap mb-3">
                      <div>
                        <span className={`text-xs font-bold ${c.text}`}>{type.label}</span>
                        <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mt-0.5">{type.subtitle}</h3>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        <span className={`shrink-0 text-xs font-medium rounded-full px-3 py-1 ${c.badge}`}>
                          Achievability: {type.likelihood}
                        </span>
                        <span className={`shrink-0 text-xs font-medium rounded-full px-3 py-1 ${c.badge}`}>
                          ⏱ {type.timeline}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{type.description}</p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Examples */}
                      <div>
                        <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">Real Examples</h4>
                        <ul className="space-y-1">
                          {type.examples.map((ex, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />
                              {ex}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Risks */}
                      <div>
                        <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">Key Risks</h4>
                        <ul className="space-y-1">
                          {type.risks.map((risk, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-rose-400" />
                              {risk}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        <span className="font-semibold text-gray-700 dark:text-gray-300">KPIs: </span>{type.kpi}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ── 3. Synergy Timeline ── */}
          <motion.section id="timeline" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">When Do Synergies Actually Show Up?</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Synergies don't appear on closing day. Understanding realistic timelines is central to building a credible acquisition model — and to not overpaying based on optimistic assumptions.
            </p>

            <div className="space-y-3">
              {TIMELINE.map((phase) => {
                const c = COLOR_MAP[phase.color];
                return (
                  <div key={phase.period} className="flex gap-4 items-start p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40">
                    <div className={`shrink-0 rounded-lg px-3 py-2 text-center min-w-[80px] ${c.bg} border ${c.border}`}>
                      <p className={`text-xs font-bold ${c.text}`}>{phase.period}</p>
                      <p className={`text-[10px] mt-0.5 ${c.text} opacity-80`}>{phase.label}</p>
                    </div>
                    <ul className="space-y-1 pt-1">
                      {phase.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 Think of it this way</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                A merger is like a marriage. The benefits of being together don't appear at the wedding — they develop over years of actually living together, combining habits, and learning each other's strengths. Revenue synergies are like having children: you can plan for them, but you can't guarantee them.
              </p>
            </div>
          </motion.section>

          {/* ── 4. Why 70% Fail ── */}
          <motion.section id="why-fail" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Why Do 70% of Deals Miss Their Synergy Targets?</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Research consistently finds that 70–80% of M&A deals fail to deliver their projected synergies. The cause is never one thing — it's usually several forces working together.
            </p>

            <div className="space-y-3">
              {FAILURE_REASONS.map((reason, i) => {
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

            <div className="mt-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Key Insight</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                The deepest reason synergies fail is the illusion that putting a number in a DCF model makes it real. The moment a synergy is quantified on a spreadsheet, it starts to feel like a fact. But synergies are produced by people and realized through culture. They're not a cell in a model — they're the answer to the question: "Will these two organizations actually work well together?"
              </p>
            </div>
          </motion.section>

          {/* ── 5. Case Studies ── */}
          <section id="cases">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Case Studies — What Makes Synergies Succeed or Fail</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Three deals, three different synergy outcomes. Disney×Pixar shows what success looks like. AOL×Time Warner is the defining cautionary tale. Daimler×Chrysler reveals how culture destroys synergy value no spreadsheet can capture.
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
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Deal value: {caseItem.dealValue}</p>
                      </div>
                      <div className={`text-xs font-medium rounded-lg px-3 py-2 ${synergyC.bg} ${synergyC.text} border ${synergyC.border}`}>
                        📊 {caseItem.synergyType}
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
                        <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Key Insight</p>
                        <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">{caseItem.lesson}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* ── 6. Analysis Framework ── */}
          <motion.section id="framework" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Synergy Analysis Framework</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              A reference comparison for evaluating synergies in a live M&A context.
            </p>

            {/* Table */}
            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60">
                    <th className="text-left text-xs font-bold text-gray-600 dark:text-gray-400 px-4 py-3 w-1/3">Category</th>
                    <th className="text-left text-xs font-bold text-emerald-700 dark:text-emerald-300 px-4 py-3 w-1/3">Cost Synergy</th>
                    <th className="text-left text-xs font-bold text-violet-700 dark:text-violet-300 px-4 py-3 w-1/3">Revenue Synergy</th>
                  </tr>
                </thead>
                <tbody>
                  {FRAMEWORK_TABLE.map((row, i) => (
                    <tr key={i} className={`border-b border-gray-100 dark:border-gray-700/50 ${i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50/50 dark:bg-gray-800/20"}`}>
                      <td className="px-4 py-3 text-xs font-semibold text-gray-700 dark:text-gray-300">{row.category}</td>
                      <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400">{row.cost}</td>
                      <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400">{row.revenue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Key Insight</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                Standard practice in investment banking is to apply a 30–50% haircut to revenue synergy projections in the M&A model, while applying minimal or no haircut to cost synergies. Modeling 100% of projected revenue synergies into the acquisition price is one of the fastest ways to overpay — and one of the most common mistakes deal teams make under competitive bid pressure.
              </p>
            </div>
          </motion.section>

          {/* ── Related concepts ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">Related Concepts</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/en/deal-101/ev-ebitda", title: "EV/EBITDA Multiple", desc: "How synergy-driven EBITDA improvement flows into valuation multiples", badge: "Valuation" },
                { href: "/en/deal-101/adjusted-ebitda", title: "Adjusted EBITDA", desc: "Post-synergy normalized EBITDA — the core number in M&A pricing", badge: "Valuation" },
                { href: "/en/deal-101/ma-process", title: "M&A Process", desc: "How synergy estimates are used in due diligence and SPA negotiation", badge: "Deal Structure" },
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
