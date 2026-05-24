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

// ── Six LDD review areas ─────────────────────────────────────────
const REVIEW_AREAS = [
  {
    num: "01",
    title: "Contract Risk",
    color: "blue",
    items: [
      { label: "Change of Control Clauses", desc: "Do major customer or supplier contracts contain a provision allowing the counterparty to terminate if control of the target changes? If the deal's value thesis depends on those contracts, a single Change of Control clause can destroy the rationale." },
      { label: "Long-Term Contract Performance Obligations", desc: "What performance obligations must the acquirer fulfill post-closing? Scope of liquidated damages or penalties for late delivery or quality failures." },
      { label: "Transferability of License Agreements", desc: "Can core technology, brand, or content licenses be automatically assigned to the acquirer, or is separate counterparty consent required? A non-transferable license can block post-closing operations." },
    ],
  },
  {
    num: "02",
    title: "Intellectual Property (IP)",
    color: "violet",
    items: [
      { label: "Clean IP Ownership", desc: "Confirm that all key IP is owned by the corporate entity, not registered in the names of founders or key engineers. Individually held patents and trademarks do not automatically transfer with the acquisition." },
      { label: "IP Litigation History", desc: "Past patent infringement or trademark disputes. Any currently active IP litigation. Does a potential adverse ruling threaten the ability to manufacture or sell the core product — a survival-level risk?" },
      { label: "Open-Source License Risk", desc: "Common in software companies. If copyleft licenses (GPL, LGPL) are embedded in core products, source code disclosure obligations may arise upon distribution." },
    ],
  },
  {
    num: "03",
    title: "Litigation & Disputes",
    color: "amber",
    items: [
      { label: "Active Litigation Inventory", desc: "Full list of civil, criminal, and administrative proceedings. For each case: estimated exposure and current stage. A single claim can exceed the target's entire EBITDA." },
      { label: "Regulatory Investigation Status", desc: "Whether competition authorities, financial regulators, or environmental agencies are conducting active investigations. Potential fines, operating restrictions, or license revocations." },
      { label: "Contingent Liability", desc: "Claims not yet filed but reasonably foreseeable — wrongful termination claims from former employees, consumer harm from product defects, or historical contract breaches. These are off-balance-sheet but real liabilities." },
    ],
  },
  {
    num: "04",
    title: "Regulatory Licenses & Permits",
    color: "rose",
    items: [
      { label: "Validity of Operational Permits", desc: "Are all required licenses and permits currently valid? Are any expiring soon, and might renewal conditions be more stringent than the original grant?" },
      { label: "Post-Closing Transfer or Re-Application Requirements", desc: "Some licenses lapse upon a change of ownership and require re-application. In highly regulated sectors — financial services, pharma, defense, telecoms — this process can outlast the closing timeline." },
      { label: "Sector-Specific Regulatory Compliance", desc: "Banking capital ratios, pharmaceutical GMP certification, defense export authorizations, food safety certifications. Any compliance history with violations, including any ongoing remediation." },
    ],
  },
  {
    num: "05",
    title: "Labor & Employment",
    color: "emerald",
    items: [
      { label: "Collective Bargaining Agreements", desc: "Key terms and expiration dates of CBAs. Post-closing wage negotiation and strike risk. Does the union hold Change of Control rights under the agreement?" },
      { label: "Key Employee Agreements", desc: "Validity of non-compete and NDA agreements for senior management and key engineers. Business impact if those individuals depart post-closing. Presence of accelerated vesting provisions triggered by the transaction." },
      { label: "Accrued Wage & Severance Liabilities", desc: "Unpaid severance for long-tenure employees, accrued vacation, and unpaid bonuses. Potential liabilities payable in one lump sum post-closing. Especially material if a workforce reduction is anticipated." },
    ],
  },
  {
    num: "06",
    title: "Environmental Risk",
    color: "teal",
    items: [
      { label: "Soil & Groundwater Contamination", desc: "Historical contamination from past operations. Remediation costs can run into hundreds of millions. Especially material in manufacturing, chemicals, energy, and mining." },
      { label: "Carbon Emissions & Environmental Compliance", desc: "Exposure to tightening carbon pricing and emissions regulation. Current emissions versus permitted levels. Estimated future carbon cost burden." },
      { label: "Hazardous Materials History", desc: "Past use of asbestos, heavy metals, or regulated chemicals, and how these were handled. Even if current practices comply with law, historical use can generate future litigation risk." },
    ],
  },
];

// ── Severity classification ──────────────────────────────────────
const SEVERITY_LEVELS = [
  {
    level: "Material",
    color: "rose",
    action: "Price adjustment or special SPA provision required",
    examples: "Change of Control clause in a key customer contract, large active litigation, unclear ownership of core patents",
  },
  {
    level: "Moderate",
    color: "amber",
    action: "Monitoring provision or condition precedent (CP)",
    examples: "Expiring license nearing renewal, minor labor dispute, transfer restriction on non-core contract",
  },
  {
    level: "Minor",
    color: "emerald",
    action: "Disclosure only — manage post-closing",
    examples: "Minor administrative procedural violation, small expiring contract, incomplete registration of non-core IP",
  },
];

// ── Case studies ─────────────────────────────────────────────────
const CASES = [
  {
    title: "LDD Reduced the Price by $350 Million",
    company: "Verizon × Yahoo",
    year: "2016–2017",
    type: "LDD Price Reduction Case",
    typeColor: "rose",
    analogy: "After signing the purchase agreement, an inspection uncovered a concealed burst pipe in the basement. Finding it meant the price could be cut.",
    paragraphs: [
      "In July 2016, Verizon agreed to acquire Yahoo's internet business for $4.83 billion. During due diligence, it emerged that Yahoo had suffered two massive security breaches: 500 million accounts compromised in 2013 and 3 billion accounts in 2014.",
      "An integrated LDD and FDD review estimated the legal exposure: SEC investigations, shareholder class-action suits, and regulatory inquiries across multiple jurisdictions. The financial impact of these undisclosed liabilities was material.",
      "The outcome: Verizon renegotiated, securing a $350 million price reduction plus a 50/50 split on future legal costs. A textbook case of LDD findings translating directly into a price adjustment.",
    ],
    lesson: "LDD is not just a risk inventory exercise. The end product is a present-value estimate of each discovered legal risk, brought to the negotiating table. 'What is the PV of this liability?' is the question that connects legal findings to price.",
  },
  {
    title: "LDD Findings Reshaped the Acquisition Structure Itself",
    company: "Microsoft × LinkedIn",
    year: "2016",
    type: "LDD Structure Design Case",
    typeColor: "blue",
    analogy: "Before buying the house, you discovered that new construction regulations were coming to the neighborhood — and negotiated both the price and the extension plan to account for them.",
    paragraphs: [
      "In the $26.2 billion acquisition, the LDD team identified material risk around European personal data regulations (then the EU Data Protection Directive, later strengthened into GDPR in 2018) and the legal constraints on leveraging LinkedIn's vast personal data.",
      "Rather than simply flagging the risk in the report, Microsoft incorporated the findings into its integration design: LinkedIn would continue to operate as a standalone entity, and its personal data processing systems would remain separate from Microsoft's infrastructure.",
      "When GDPR took effect in 2018, LinkedIn was structurally positioned to manage compliance more defensively than it would have been under a full integration. The LDD response at deal time became proactive risk management.",
    ],
    lesson: "LDD is not a checklist that populates Reps & Warranties. Legal risk findings must feed directly into post-closing business structure and integration planning. The question is not only 'what is legally wrong?' but 'how must the acquisition structure change as a result?'",
  },
];

// ── Related concepts ─────────────────────────────────────────────
const RELATED = [
  { href: "/en/deal-101/fdd", title: "FDD (Financial Due Diligence)", desc: "Verifies numerical accuracy — the other pillar of due diligence alongside LDD", badge: "Due Diligence" },
  { href: "/en/deal-101/cdd", title: "CDD (Commercial Due Diligence)", desc: "Validates business sustainability — market, customers, and competitive dynamics", badge: "Due Diligence" },
  { href: "/en/deal-101/ma-process", title: "M&A Process", desc: "LDD runs concurrently with FDD and CDD in Phase 4 — the due diligence stage", badge: "Process" },
  { href: "/en/deal-101/adjusted-ebitda", title: "Adjusted EBITDA", desc: "Contingent liabilities discovered in LDD are factored into EBITDA adjustments and price negotiations", badge: "Valuation" },
];

export default function LddClientEn() {
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
              <span className="text-xs text-gray-400">LDD</span>
            </div>
            <span className="inline-block text-xs font-medium bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300 rounded-full px-3 py-1 mb-4">
              Due Diligence
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              LDD (Legal Due Diligence)
              <span className="block text-lg sm:text-xl font-semibold text-gray-500 dark:text-gray-400 mt-1">
                — Finding the Hidden Legal Time Bombs
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              LDD reviews the target company's legal risk across contracts, intellectual property, litigation,
              regulatory licenses, employment, and environmental exposure. The goal is to surface contingent liabilities
              before closing — and either price them into the deal or address them in the SPA's Reps & Warranties.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {REVIEW_AREAS.map((area) => {
                const c = COLOR_MAP[area.color];
                return (
                  <a key={area.num} href={`#area-${area.num}`} className={`rounded-full px-3 py-1 text-xs font-medium ${c.badge} hover:opacity-80 transition-opacity`}>
                    {area.num}. {area.title}
                  </a>
                );
              })}
              <a href="#cases" className="rounded-full px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                Case Studies
              </a>
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-16">

          {/* ── Section 1: What is LDD ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">What Is LDD?</h2>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                Legal Due Diligence (LDD) is the workstream within M&A due diligence that performs a
                <strong className="text-gray-800 dark:text-gray-200"> comprehensive review of the target company's legal risks</strong>.
                It is conducted by M&A specialist law firms and covers six domains: contracts, intellectual property,
                litigation, regulatory licenses, employment, and environmental liability.
              </p>
              <p>
                LDD serves two purposes. First, to <strong className="text-gray-800 dark:text-gray-200">surface contingent liabilities</strong>
                before closing so they can be reflected in the purchase price. Second, to ensure that any residual legal risks
                are explicitly allocated between buyer and seller in the SPA's Representations and Warranties.
              </p>
              <p>
                While FDD and CDD verify financial numbers and business viability, LDD asks whether those assets
                can be cleanly transferred to the acquirer — and whether any legal time bomb is ticking beneath the surface.
              </p>
            </div>

            <div className="mt-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 Think of it this way</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                When buying a property, you check the title deed (is ownership clear?), the permitted use (is it legally compliant?),
                whether any unauthorized structures exist (regulatory violations), and whether any liens are registered (hidden debt).
                That is LDD. No matter how attractive the property, you cannot proceed if the title is defective or undisclosed liens exist.
              </p>
            </div>

            <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 What LDD Is Looking For</p>
              <ul className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed space-y-1 mt-1">
                <li>• Core customer or supplier contracts that auto-terminate on a change of control</li>
                <li>• Key IP registered in individual names rather than the corporate entity</li>
                <li>• Pending litigation not reflected in the financial statements</li>
                <li>• Regulatory licenses that cannot be transferred to a new owner</li>
                <li>• Labor or environmental liabilities that detonate post-closing</li>
              </ul>
            </div>
          </motion.section>

          {/* ── Section 2: Six review areas ── */}
          <section>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Six Core LDD Review Areas</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Law firms review all six areas simultaneously. On large or complex deals, specialist teams handle each domain separately.
              </p>
            </motion.div>

            <div className="space-y-8">
              {REVIEW_AREAS.map((area) => {
                const c = COLOR_MAP[area.color];
                return (
                  <motion.div
                    key={area.num}
                    id={`area-${area.num}`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                  >
                    <div className={`rounded-xl border ${c.border} ${c.bg} p-4 mb-4`}>
                      <div className="flex items-center gap-3">
                        <span className={`text-xs font-bold ${c.text}`}>{area.num}</span>
                        <h3 className="text-base font-bold text-gray-900 dark:text-gray-100">{area.title}</h3>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {area.items.map((sub, i) => (
                        <div key={i} className="flex gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 text-sm">
                          <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${c.dot}`} />
                          <div>
                            <span className="font-semibold text-gray-800 dark:text-gray-200">{sub.label}</span>
                            <p className="text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{sub.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* ── Section 3: Severity classification ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">Three-Tier Severity Classification</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              LDD reports classify every finding by materiality. The tier determines the response: price adjustment, contractual protection, or post-closing monitoring.
            </p>
            <div className="space-y-3">
              {SEVERITY_LEVELS.map((level, i) => {
                const c = COLOR_MAP[level.color];
                return (
                  <div key={i} className={`rounded-xl border ${c.border} ${c.bg} p-4`}>
                    <div className="flex items-start gap-3 flex-wrap">
                      <span className={`shrink-0 text-xs font-bold rounded-full px-3 py-1 ${c.badge}`}>{level.level}</span>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-semibold ${c.text} mb-1`}>Response: {level.action}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">Examples: {level.examples}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Key Insight</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                Change of Control clauses and IP ownership must be identified early in LDD — not near the end.
                If a key customer contract contains a termination right triggered by the acquisition, the EBITDA
                generated by that customer could disappear on day one post-closing. That is a Material finding that undermines
                the entire deal pricing premise.
              </p>
            </div>
          </motion.section>

          {/* ── Section 4: Case studies ── */}
          <section id="cases">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Case Studies — When LDD Changed the Deal</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Both cases show LDD going beyond a compliance checklist — one to cut the price, one to redesign the entire acquisition structure.
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
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{c_item.company} ({c_item.year})</p>
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

          {/* ── Related concepts ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">Related Concepts</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {RELATED.map((item) => (
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
