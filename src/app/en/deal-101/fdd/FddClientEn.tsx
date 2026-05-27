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

// ── FDD 5 core tasks ─────────────────────────────────────────────
const FDD_TASKS = [
  {
    num: "01",
    title: "Quality of Earnings (QoE) Analysis",
    color: "rose",
    desc: "Decompose the IM's EBITDA to separate genuinely recurring earnings from one-time or non-recurring items. Verify whether each adjustment in the Adjusted EBITDA is legitimate, and surface any instances where accounting policy changes have artificially inflated profits.",
    detail: [
      "Revenue recognition policy changes (pulling forward revenue by changing timing)",
      "Isolate one-time gains — asset sale gains, insurance proceeds, government subsidies",
      "Re-examine recurring costs that were arbitrarily adjusted (stock-based comp, R&D, marketing)",
      "Assess how customer concentration and contract expiry risk affect future revenue",
    ],
    output: "Adjusted EBITDA → QoE EBITDA Bridge",
  },
  {
    num: "02",
    title: "Working Capital Analysis",
    color: "blue",
    desc: "Determine the Normalized Working Capital (NWC) level. This becomes the reference point for the SPA price adjustment mechanism. Verify whether accounts receivable DSO and inventory turnover are within normal ranges.",
    detail: [
      "Monthly working capital trend analysis over the trailing 12–24 months",
      "Normalize for seasonality to determine a representative NWC level",
      "Identify uncollectable receivables (bad debt) in the AR balance",
      "Identify obsolete or excess inventory items",
      "Provide the basis for setting the NWC Peg in the SPA",
    ],
    output: "Normalized Working Capital analysis and Peg recommendation",
  },
  {
    num: "03",
    title: "Off-Balance-Sheet Liability Identification",
    color: "violet",
    desc: "Surface potential liabilities not reflected in the financial statements: pending litigation, product warranties, environmental obligations, pension shortfalls, and deferred compensation. These findings form the basis for Reps & Warranties in the SPA.",
    detail: [
      "Estimate the size of pending lawsuits and potential claims",
      "Review adequacy of product warranty provisions",
      "Operating lease liabilities (for companies under pre-IFRS 16 standards)",
      "Actual funding shortfall in defined benefit (DB) pension plans",
      "Deferred performance compensation and severance settlement gaps",
      "Environmental remediation obligations and carbon liabilities",
    ],
    output: "Off-balance-sheet liability schedule (amount + probability rating)",
  },
  {
    num: "04",
    title: "Cash Flow Verification",
    color: "teal",
    desc: "Verify whether reported EBITDA actually converts into cash. Assess whether CapEx levels are sufficient to maintain the business (maintenance vs. growth CapEx), and determine the true level of free cash flow.",
    detail: [
      "Trend analysis of EBITDA-to-operating-cash-flow conversion rate",
      "Separate maintenance CapEx from growth CapEx",
      "True FCF = EBITDA − taxes − maintenance CapEx − working capital changes",
      "Identify cases where understated CapEx inflates reported FCF relative to EBITDA",
    ],
    output: "FCF Bridge and CapEx analysis",
  },
  {
    num: "05",
    title: "Tax Risk Assessment",
    color: "emerald",
    desc: "Identify tax risks not fully reflected in the financial statements: deferred tax assets, unpaid taxes, pending audits, and transfer pricing exposure.",
    detail: [
      "Assess recoverability of deferred tax assets",
      "Review tax audit history and currently open tax disputes",
      "Transfer pricing risk assessment",
      "Costs expensed but potentially disallowed as deductions by tax authorities",
    ],
    output: "Tax risk schedule and estimated exposure amounts",
  },
];

// ── QoE report structure ─────────────────────────────────────────
const QOE_SECTIONS = [
  { section: "Section 1", title: "EBITDA Bridge", desc: "IM EBITDA → Adjusted EBITDA → QoE EBITDA. Each adjustment item reviewed for legitimacy and re-adjusted as necessary.", color: "rose" },
  { section: "Section 2", title: "Working Capital Analysis", desc: "Monthly NWC trend, normalized NWC level, SPA Peg recommendation.", color: "blue" },
  { section: "Section 3", title: "Off-Balance-Sheet Liabilities", desc: "Amount, timing, probability rating (High / Medium / Low) for each identified item.", color: "violet" },
  { section: "Section 4", title: "CapEx Analysis", desc: "Maintenance vs. growth CapEx separation, FCF conversion efficiency.", color: "teal" },
  { section: "Section 5", title: "Tax Risk", desc: "Deferred taxes, audit exposure, estimated contingent tax liabilities.", color: "emerald" },
];

// ── Stakeholders ─────────────────────────────────────────────────
const STAKEHOLDERS = [
  {
    role: "Big 4 FDD Team",
    detail: "5–15 professionals working intensively for 4–8 weeks. They review thousands of documents in the VDR and exchange hundreds of Q&A items with the seller's finance team. They own the QoE report.",
    color: "rose",
  },
  {
    role: "Buy-side Finance Team",
    detail: "Works alongside the FDD team to validate key assumptions. Coordinates with the IB on which findings to leverage in price adjustment negotiations.",
    color: "blue",
  },
  {
    role: "Seller CFO Team",
    detail: "Responds to Q&A and provides supporting documents. Has an inherent incentive to minimize unfavorable findings and maximize favorable adjustments.",
    color: "violet",
  },
  {
    role: "Buy-side Investment Bank",
    detail: "Converts FDD findings into price negotiation arguments. Structures the rationale: 'QoE EBITDA is $X million lower than the IM, therefore the LOI price should be adjusted accordingly.'",
    color: "emerald",
  },
];

// ── Case studies ─────────────────────────────────────────────────
const CASES = [
  {
    company: "WeWork (2019 IPO attempt)",
    title: "What FDD Would Have Caught — The Community Adjusted EBITDA Fiction",
    type: "No FDD → Value Collapse",
    typeColor: "rose",
    analogy: "Claiming profitability by stripping out employee compensation, marketing spend, and most operating costs as 'adjustments' — then daring investors to disagree. Independent QoE analysis would have assigned a very different number.",
    paragraphs: [
      "Ahead of its 2019 IPO, WeWork introduced investors to 'Community Adjusted EBITDA' in its S-1 filing. This proprietary metric excluded stock-based compensation, marketing expenses, building pre-opening costs, and most general & administrative costs — presenting the company as highly profitable.",
      "After the S-1 was filed, investors and analysts began working through the actual numbers. The real cash burn rate was hundreds of millions of dollars per quarter. Most of the excluded costs were recurring, necessary operating expenses. Under a standard QoE framework, virtually none of those adjustments would have been accepted.",
      "The IPO was withdrawn. WeWork's valuation collapsed from $47 billion to $2.9 billion. The company filed for bankruptcy in 2023. Had independent QoE analysis been required before the IPO, the initial valuation expectations would have been set at an entirely different level.",
    ],
    lesson: "Verifying the legitimacy of each Adjusted EBITDA adjustment item is the central purpose of QoE analysis. The fundamental question is: is each adjustment genuinely non-recurring, or is it a recurring operating cost being hidden? That distinction is everything.",
    relatedConcept: { href: "/en/deal-101/adjusted-ebitda", label: "Read: Adjusted EBITDA →" },
  },
  {
    company: "HP × Autonomy (2011)",
    title: "The Cost of FDD Failure — $8.8 Billion in Write-Downs",
    type: "FDD Failure → Massive Loss",
    typeColor: "amber",
    analogy: "Paying $8.8 billion for a car because the mechanic missed a catastrophic engine failure. The exterior looked fine — but the inside had been engineered to look better than it was.",
    paragraphs: [
      "In 2011, HP acquired UK software company Autonomy for $10.3 billion. The rationale was strategic positioning in the enterprise search and analytics software market — a category HP expected to grow rapidly.",
      "One year later, in November 2012, HP announced an $8.8 billion impairment charge. HP's claim: Autonomy had categorized hardware sales as software revenue, manipulated the timing of revenue recognition to inflate ARR, and misrepresented the nature of its recurring revenue streams. HP alleged more than $5 billion in accounting improprieties.",
      "Autonomy's former management strongly denied the allegations, countering that HP's own poor management post-acquisition was the real cause. The dispute became a years-long legal battle. Regardless of where the truth lies, a rigorous FDD examination of revenue recognition policies and the composition of revenue streams could plausibly have changed the outcome.",
    ],
    lesson: "Changes in revenue recognition policy and sudden shifts in revenue composition (software vs. hardware) are the first and deepest questions FDD should pursue. 'Why did these numbers suddenly improve so dramatically?' should be FDD's opening question — not a footnote.",
  },
  {
    company: "Verizon × Yahoo (2016–2017)",
    title: "A Major Security Breach Discovered During DD — $350M Price Cut",
    type: "Contingent Liability Found in DD",
    typeColor: "violet",
    analogy: "Signing a purchase contract for a house, then discovering during inspection that there's a hidden burst pipe in the basement no one knew about. Rather than canceling, both sides agreed on a price reduction to cover the damage.",
    paragraphs: [
      "In July 2016, Verizon agreed to acquire Yahoo's internet business for $4.83 billion, targeting Yahoo's search, email, and digital media assets.",
      "During due diligence, Yahoo disclosed a massive data breach that had occurred in 2013–2014, compromising approximately 3 billion user accounts — the largest data breach ever reported at the time. The disclosure came after the acquisition agreement was already signed.",
      "Verizon immediately initiated price renegotiation. The deal ultimately closed at a $350 million discount, with Yahoo agreeing to share responsibility for legal liabilities arising from the breach. It became a textbook example of a contingent liability discovered during DD directly translating into a revised SPA price.",
    ],
    lesson: "FDD does not review pure financials in isolation. The impact of contingent liabilities — security breaches, pending litigation, regulatory violations — on future cash flows must be explicitly assessed. The Verizon × Yahoo case demonstrates perfectly that DD findings translate directly into SPA price adjustments.",
  },
];

export default function FddClientEn() {
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
              <span className="text-xs text-gray-400">FDD (Financial Due Diligence)</span>
            </div>
            <span className="inline-block text-xs font-medium bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300 rounded-full px-3 py-1 mb-4">
              Due Diligence
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              FDD (Financial Due Diligence) — Verifying What the IM Won't Tell You
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              The Quality of Earnings report that Big 4 teams build over 4–8 weeks and thousands of documents. Why you cannot trust the IM's EBITDA without independent verification — and what happens when you don't.
            </p>

            {/* Quick navigation */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { href: "#fdd-overview", label: "What Is FDD" },
                { href: "#fdd-tasks", label: "5 Core Tasks" },
                { href: "#qoe-structure", label: "QoE Report Structure" },
                { href: "#stakeholders", label: "Stakeholders" },
                { href: "#cases", label: "Case Studies" },
              ].map((item) => (
                <a key={item.href} href={item.href} className="rounded-full px-3 py-1 text-xs font-medium bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300 hover:opacity-80 transition-opacity">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-16">

          {/* ── Section 1: What is FDD ── */}
          <motion.section id="fdd-overview" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">What Is FDD?</h2>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                <strong className="text-gray-800 dark:text-gray-200">FDD (Financial Due Diligence)</strong> is the independent verification of a target company's financial information during the M&A due diligence phase. The purpose is singular: do not take the numbers in the IM at face value — verify them independently.
              </p>
              <p>
                FDD is performed by the Transaction Services or Deals practices of the <strong className="text-gray-800 dark:text-gray-200">Big 4 accounting firms</strong> (PwC, Deloitte, EY, KPMG). Teams of 5–15 professionals spend 4–8 weeks reviewing thousands of VDR documents and conducting hundreds of Q&A exchanges with the seller's management team.
              </p>
              <p>
                The core deliverable is the <strong className="text-gray-800 dark:text-gray-200">Quality of Earnings (QoE) report</strong>. The numbers in this report become the legal and financial basis for price adjustments in the SPA.
              </p>
            </div>

            {/* Analogy */}
            <div className="mt-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 Think of it this way</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                Reviewing the IM is like assessing a used car by its appearance. FDD is like paying a mechanic to inspect the engine, transmission, and undercarriage. Whatever the mechanic finds becomes the basis for negotiating a lower price — or walking away from the deal entirely.
              </p>
            </div>

            {/* Key info cards */}
            <div className="mt-5 grid sm:grid-cols-3 gap-3">
              {[
                { label: "Who performs it", value: "Big 4 Transaction Services teams", color: "rose" },
                { label: "Duration", value: "4–8 weeks of intensive work", color: "blue" },
                { label: "Key deliverable", value: "Quality of Earnings (QoE) report", color: "violet" },
              ].map((item) => {
                const c = COLOR_MAP[item.color];
                return (
                  <div key={item.label} className={`rounded-lg border ${c.border} ${c.bg} p-3`}>
                    <span className={`text-xs font-bold ${c.text}`}>{item.label}</span>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1.5 leading-relaxed">{item.value}</p>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ── Section 2: 5 core tasks ── */}
          <motion.section id="fdd-tasks" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">The 5 Core Tasks of FDD</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              FDD is not simply re-reading the financial statements. These five workstreams constitute the substantive content of the QoE report.
            </p>

            <div className="space-y-5">
              {FDD_TASKS.map((task) => {
                const c = COLOR_MAP[task.color];
                return (
                  <div key={task.num} className={`rounded-xl border ${c.border} overflow-hidden`}>
                    <div className={`${c.bg} px-5 py-4 flex items-start gap-4`}>
                      <span className={`shrink-0 text-lg font-bold ${c.text}`}>{task.num}</span>
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{task.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">{task.desc}</p>
                      </div>
                    </div>

                    <div className="p-5 space-y-3">
                      <div>
                        <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">Key review items</h4>
                        <ul className="space-y-1.5">
                          {task.detail.map((d, i) => (
                            <li key={i} className="flex gap-2 text-sm text-gray-600 dark:text-gray-400">
                              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className={`rounded-lg ${c.bg} border ${c.border} px-3 py-2`}>
                        <span className={`text-xs font-bold ${c.text}`}>Output: </span>
                        <span className="text-xs text-gray-600 dark:text-gray-400">{task.output}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Key Insight</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                Every FDD workstream converges on a single question: <strong>"Is the EBITDA in the IM real, and will it hold after acquisition?"</strong> When the answer is 'No,' price negotiation begins.
              </p>
            </div>
          </motion.section>

          {/* ── Section 3: QoE report structure ── */}
          <motion.section id="qoe-structure" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">QoE Report Structure</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              The Quality of Earnings report is FDD's final deliverable and the reference document for SPA price negotiations. Understanding its structure makes deal negotiations far more legible.
            </p>

            <div className="space-y-3">
              {QOE_SECTIONS.map((sec) => {
                const c = COLOR_MAP[sec.color];
                return (
                  <div key={sec.section} className="flex gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                    <div className={`shrink-0 rounded-lg ${c.bg} border ${c.border} px-3 py-2 text-center min-w-[80px]`}>
                      <span className={`text-[10px] font-bold ${c.text} block`}>{sec.section}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{sec.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{sec.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* EBITDA Bridge explanation */}
            <div className="mt-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-2">💡 What is an EBITDA Bridge?</p>
              <div className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed space-y-1">
                <p><strong>IM EBITDA</strong> (the number the seller presented)</p>
                <p className="pl-4">→ <span className="text-amber-600 dark:text-amber-400">Adjustment validation</span> (strip one-time gains, restore artificially reduced costs)</p>
                <p><strong>Adjusted EBITDA</strong> (the number the FDD team has re-validated)</p>
                <p className="pl-4">→ <span className="text-amber-600 dark:text-amber-400">Additional adjustments</span> (items newly surfaced during FDD)</p>
                <p><strong>QoE EBITDA</strong> (the number that drives SPA negotiations)</p>
              </div>
            </div>
          </motion.section>

          {/* ── Section 4: Stakeholders ── */}
          <motion.section id="stakeholders" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Stakeholders & Roles</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              FDD involves multiple parties with closely intertwined — and sometimes conflicting — incentives.
            </p>
            <div className="space-y-3">
              {STAKEHOLDERS.map((s, i) => {
                const c = COLOR_MAP[s.color];
                return (
                  <div key={i} className="flex gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 text-sm">
                    <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${c.dot}`} />
                    <div>
                      <span className={`inline-block text-xs font-semibold rounded-full px-2.5 py-0.5 mb-1.5 ${c.badge}`}>{s.role}</span>
                      <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{s.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Key Insight</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                The Big 4 FDD team is engaged by the buy-side but must operate independently. If the team softens unfavorable findings to keep the deal alive, the damage lands entirely on the acquirer later. HP × Autonomy is the defining example of what that cost looks like.
              </p>
            </div>
          </motion.section>

          {/* ── Case studies ── */}
          <section id="cases">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Case Studies — When FDD Succeeds and Fails</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Three cases that illustrate FDD's core principles in sharp relief: adjustment legitimacy (WeWork), the cost of FDD failure (HP × Autonomy), and contingent liability discovery (Verizon × Yahoo).
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
                    <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-4">
                      <span className={`inline-block text-xs font-medium rounded-full px-2.5 py-0.5 mb-2 ${c.badge}`}>
                        {c_item.type}
                      </span>
                      <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{c_item.title}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{c_item.company}</p>
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

                      {c_item.relatedConcept && (
                        <Link
                          href={c_item.relatedConcept.href}
                          className="inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          {c_item.relatedConcept.label}
                        </Link>
                      )}
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
                FDD is not about finding reasons to cut the price. It is about <strong>independently confirming what you are actually buying.</strong> When QoE EBITDA comes in below IM EBITDA, it becomes the basis for price renegotiation. When off-balance-sheet liabilities appear, they reshape the Reps & Warranties. When contingent liabilities are material, the escrow size increases. FDD translates deal risk into financial language and puts it on the negotiating table — where it belongs.
              </p>
            </div>
          </motion.section>

          {/* ── Related concepts ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">Related Concepts</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/en/deal-101/adjusted-ebitda", title: "Adjusted EBITDA", desc: "The core number FDD interrogates — what normalization means and why it matters", badge: "Valuation" },
                { href: "/en/deal-101/ma-process", title: "M&A Process Phase 4", desc: "Where FDD sits within the full M&A process timeline", badge: "Deal Structure" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group block p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-rose-300 dark:hover:border-rose-600 transition-colors"
                >
                  <span className="text-[10px] font-medium bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300 rounded-full px-2 py-0.5">
                    {item.badge}
                  </span>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mt-2 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
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
