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

// ── Five types of regulatory risk ─────────────────────────────────
const RISK_TYPES = [
  {
    title: "Antitrust / Competition Law",
    color: "rose",
    desc: "The most common regulatory risk. When a merger would substantially lessen competition in a market, authorities can block it, require divestitures, or impose behavioral conditions.",
    authorities: "FTC & DOJ (US), EC (EU), CMA (UK), SAMR (China)",
    note: "Pre-merger filing is mandatory above certain deal size or revenue thresholds in each jurisdiction. A global deal may require simultaneous filings in 10+ countries.",
  },
  {
    title: "Foreign Investment / National Security (CFIUS/FDI)",
    color: "violet",
    desc: "When a foreign acquirer targets a business with national security implications — semiconductors, defense, telecom, AI — a dedicated security review is triggered.",
    authorities: "CFIUS/FIRRMA (US), EU FDI Regulation, UK NSI Act",
    note: "CFIUS can block a deal or require the acquirer to divest an already-closed investment. Mandatory filing in critical tech sectors. Hard to structure around.",
  },
  {
    title: "Sector-Specific Regulation",
    color: "blue",
    desc: "Regulated industries require approval from the relevant sector regulator in addition to antitrust clearance. Banking, telecom, broadcasting, and healthcare all run on separate tracks.",
    authorities: "Fed / OCC (banking), FCC (telecom/broadcast), FDA (healthcare)",
    note: "If the sector license or approval is core to the deal rationale, a sector regulator denial can kill the deal's strategic purpose entirely.",
  },
  {
    title: "Data & Privacy Regulation",
    color: "indigo",
    desc: "Combining large personal data sets raises monopolization and privacy concerns. Data-rich deals now face heightened scrutiny under GDPR, CCPA, and equivalent national laws.",
    authorities: "GDPR (EU), CCPA (California), PDPA (Korea)",
    note: "EU Data Protection Authorities intervened in multiple Meta acquisitions. As AI and data assets grow in value, this risk category is expanding rapidly.",
  },
  {
    title: "Environmental & Labor Regulation",
    color: "emerald",
    desc: "Large M&A transactions in certain jurisdictions require environmental impact assessments or formal labor union consent before closing.",
    authorities: "EPA (US), Ministry of Environment (Korea), labor unions",
    note: "In Germany, France, and other European countries, works council (Betriebsrat) approval is often a closing condition. Can add months to the timeline.",
  },
];

// ── How major regulators approach reviews ─────────────────────────
const REGULATORS = [
  {
    name: "FTC / DOJ (United States)",
    color: "rose",
    law: "HSR Act / Clayton Act",
    timeline: "30 days + Phase 2 if triggered",
    desc: "Pre-merger notification required under the Hart-Scott-Rodino Act. The initial 30-day waiting period can be extended by a Second Request, which can add months. The FTC and DOJ divide industry coverage between them.",
  },
  {
    name: "European Commission",
    color: "violet",
    law: "EU Merger Regulation",
    timeline: "Phase I: 25 working days / Phase II: 90+ working days",
    desc: "EUMR notification when EU-wide turnover thresholds are met. Phase I clears straightforward deals; Phase II is an in-depth investigation. The EC applies a broad market definition lens and can impose far-reaching conditions.",
  },
  {
    name: "UK CMA",
    color: "sky",
    law: "Enterprise Act 2002",
    timeline: "Phase 1: 40 days / Phase 2: 24+ weeks",
    desc: "Independent review since Brexit. Any global deal with material UK revenue may require separate CMA notification. The CMA initially moved to block Microsoft/Activision before accepting structural remedies after 18 months.",
  },
  {
    name: "SAMR (China)",
    color: "amber",
    law: "Anti-Monopoly Law",
    timeline: "30–180 days (in practice, open-ended)",
    desc: "Mandatory notification when China revenue thresholds are met. Since the US–China trade war intensified from 2018, SAMR review has been used as a geopolitical lever. Qualcomm/NXP collapsed solely because SAMR stayed silent past the SPA deadline.",
  },
];

// ── Five types of remedies ─────────────────────────────────────────
const REMEDIES = [
  { title: "Divestiture", color: "rose", desc: "Commit to selling off the business unit that raises competition concerns to a third party. The most powerful structural remedy. MS/Activision: cloud streaming rights sold to Ubisoft." },
  { title: "Behavioral Remedies", color: "blue", desc: "Commitments to license IP to competitors, open interfaces, or guarantee interoperability. Less dilutive to deal value but regulators prefer structural remedies." },
  { title: "Firewall / Information Barrier", color: "violet", desc: "Commit to blocking internal access to competitively sensitive information from the target. Common in vertical integration deals where the target serves the acquirer's competitors." },
  { title: "Deal Restructuring", color: "emerald", desc: "Narrow the acquisition scope, exclude specific assets, or convert to a minority stake. Surgically removes the parts of the deal that regulators object to." },
  { title: "Voluntary Termination", color: "amber", desc: "Walk away before a formal block is issued. Triggers the Break-up Fee but ends the uncertainty. Adobe/Figma: $1B Break-up Fee paid after EU Phase II headed toward a prohibition." },
];

// ── Case studies ───────────────────────────────────────────────────
const CASES = [
  {
    title: "NVIDIA × Arm ($40B announced 2020 → abandoned 2022)",
    typeLabel: "Regulatory Block",
    typeColor: "rose",
    dealSize: "$1.25B Break-up Fee paid",
    analogy: "Every chipmaker in the world depends on Arm's neutral IP licensing. One of those chipmakers tried to buy the referee — and the other players collectively said no.",
    paragraphs: [
      "In September 2020, NVIDIA announced the acquisition of Arm from SoftBank for $40 billion. Arm designs the instruction set architecture (ISA) used in over 90% of the world's smartphone processors and licenses it to virtually every major chip company — including Qualcomm, Samsung, and Apple. Arm operated as a neutral infrastructure provider. NVIDIA was both an Arm licensee and a direct competitor to many of Arm's other licensees.",
      "The FTC, European Commission, UK CMA, and China's SAMR all launched deep-dive investigations simultaneously. The core concern was simple: if NVIDIA owned Arm, it could deny or degrade licenses to competitors, giving itself a structural advantage across the entire semiconductor industry. NVIDIA proposed behavioral remedies guaranteeing Arm's neutrality, but regulators were not persuaded.",
      "In January 2022, the FTC filed suit to block the deal. The CMA and EC were on a similar trajectory. Facing an unwinnable multi-front regulatory war, NVIDIA and SoftBank announced the termination of the deal in February 2022. NVIDIA paid SoftBank a $1.25 billion Break-up Fee. Arm subsequently went public on Nasdaq in September 2023.",
    ],
    lesson: "When the acquisition target is critical infrastructure that the acquirer's entire industry depends on, regulatory approval is effectively impossible — especially when the acquirer is also a direct competitor to the target's customers. Deals of this type require a frank regulatory feasibility assessment before signing.",
  },
  {
    title: "Illumina × GRAIL ($7.1B closed 2021 → divestiture ordered 2023)",
    typeLabel: "Gun-Jumping",
    typeColor: "violet",
    dealSize: "~$1B loss + regulatory fines",
    analogy: "The referee blew the whistle and the team ran onto the field anyway — then got handed a forfeit.",
    paragraphs: [
      "Illumina holds a near-monopoly in DNA sequencing instruments. GRAIL, a biotech startup originally spun out of Illumina, was developing multi-cancer early-detection blood tests that depended on Illumina's sequencers. In 2021, Illumina acquired GRAIL for $7.1 billion — before receiving regulatory clearance from either the EC or the FTC.",
      "This was gun-jumping: closing a merger before the required regulatory approvals are in place. The EC's concern was that Illumina, by owning GRAIL, would have both the incentive and the ability to disadvantage competing cancer diagnostics companies by restricting access to its sequencers. The FTC raised parallel concerns in the US.",
      "In 2023, the EC ordered Illumina to divest GRAIL. Illumina appealed, but EU courts upheld the order. The FTC pursued a similar divestiture order domestically. After years of legal battles, Illumina completed the GRAIL divestiture, absorbing approximately $1 billion in losses and regulatory fines in the process.",
    ],
    lesson: "Gun-jumping — closing a deal before regulatory approval — can result in a divestiture order that undoes everything. The logic of 'once we've closed, we've won' does not hold in a world where regulators have broad unwinding powers. Closing conditions in the SPA must clearly tie closing to regulatory clearance.",
  },
];

// ── Related concepts ───────────────────────────────────────────────
const RELATED = [
  { href: "/en/deal-101/antitrust", title: "Antitrust & Merger Control", desc: "FTC, EC, CMA, MOFCOM — how competition authorities review deals and what happens when they object.", badge: "Regulatory & Legal" },
  { href: "/en/deal-101/mac-clause", title: "MAC Clause", desc: "When regulatory risk materializes, the MAC clause determines whether the deal can be terminated.", badge: "Deal Structure" },
  { href: "/en/deal-101/break-fee", title: "Break-up Fee", desc: "The regulatory break fee structure — who pays when a regulator kills the deal.", badge: "Deal Structure" },
  { href: "/en/deal-101/ma-process", title: "M&A Process", desc: "Where regulatory clearance fits in the full M&A timeline from LOI to closing.", badge: "M&A Basics" },
];

export function RegulatoryRiskClientEn() {
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
              <span className="text-xs text-gray-500">Regulatory & Legal</span>
            </div>
            <span className="inline-block text-xs font-medium bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300 rounded-full px-3 py-1 mb-4">
              Regulatory & Legal
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              M&A Regulatory Risk
            </h1>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
              Signing the SPA is not the finish line. Between signing and closing, antitrust authorities, national security reviewers, and sector regulators each get a vote.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { href: "#what", label: "What is regulatory risk" },
                { href: "#types", label: "5 types" },
                { href: "#regulators", label: "Key authorities" },
                { href: "#remedies", label: "Remedies" },
                { href: "#cases", label: "Case studies" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-1 text-xs font-medium bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300 hover:opacity-80 transition-opacity"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-16">

          {/* ── Section 1: What is regulatory risk ── */}
          <motion.section
            id="what"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">What is M&A Regulatory Risk?</h2>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
              <p>
                <strong className="text-gray-800 dark:text-gray-200">M&A regulatory risk</strong> is the uncertainty arising between signing and closing that a regulator will block the deal, impose conditions (remedies), or delay the timeline long enough to destroy deal value.
              </p>
              <p>
                Antitrust is the most familiar form, but real deals face a broader matrix of risk: foreign investment security reviews (CFIUS), sector-specific licensing approvals, data privacy reviews, and environmental or labor requirements all run simultaneously and independently.
              </p>
              <p>
                The financial impact of regulatory risk goes well beyond the binary of block vs. pass. Prolonged review uncertainty discounts the acquirer's stock price, mandates costly Break-up Fee provisions, and inflates legal and advisory fees — even if the deal ultimately closes.
              </p>
            </div>
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-5">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 Think of it this way</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                Buying a plane ticket doesn&apos;t guarantee you board the plane. There are separate security checkpoints in the US, Europe, China, and a dozen other jurisdictions — each with independent authority to turn you back. Signing the deal is buying the ticket. Clearing every regulator is actually getting on the plane.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { title: "Deal uncertainty", color: "rose", desc: "During review, deal completion is uncertain → acquirer stock discounted, market confidence eroded." },
                { title: "Cost inflation", color: "amber", desc: "Antitrust counsel, economists, lobbyists, and consultants can cost tens of millions on a major cross-border deal." },
                { title: "Value erosion", color: "violet", desc: "Conditional approvals requiring divestitures can strip away the core strategic rationale of the deal." },
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

          {/* ── Section 2: 5 types ── */}
          <motion.section
            id="types"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Five Types of Regulatory Risk</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              Regulatory risk in M&A is not just antitrust. Depending on the deal's industry, geography, and structure, up to five distinct regulatory dimensions can apply simultaneously.
            </p>
            <div className="space-y-3">
              {RISK_TYPES.map((item) => {
                const c = COLOR_MAP[item.color];
                return (
                  <div key={item.title} className={`rounded-xl border ${c.border} p-4`}>
                    <div className="flex items-start justify-between gap-2 flex-wrap mb-2">
                      <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{item.title}</h3>
                      <span className={`text-xs rounded-full px-2.5 py-0.5 ${c.badge} shrink-0`}>{item.authorities.split("(")[0].trim()}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-2">{item.desc}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed">
                      <strong className="text-gray-600 dark:text-gray-400">Key authorities:</strong> {item.authorities}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1 leading-relaxed">{item.note}</p>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ── Section 3: Key authorities ── */}
          <motion.section
            id="regulators"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">How Major Regulators Approach Reviews</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              Each authority files independently. The slowest regulator determines the overall closing timeline.
            </p>
            <div className="space-y-3">
              {REGULATORS.map((reg) => {
                const c = COLOR_MAP[reg.color];
                return (
                  <div key={reg.name} className={`rounded-xl border ${c.border} p-4`}>
                    <div className="flex items-start justify-between gap-3 flex-wrap mb-2">
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{reg.name}</h3>
                        <span className={`text-xs ${c.text}`}>{reg.law}</span>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 shrink-0">⏱ {reg.timeline}</span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{reg.desc}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Key Insight</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                Large global deals can require simultaneous filings in 10+ jurisdictions. The overall closing timeline is set by the last regulator to clear — not the average. Identifying the "worst-case jurisdiction" early and building the deal timeline around it is the core of regulatory strategy.
              </p>
            </div>
          </motion.section>

          {/* ── Section 4: Remedies ── */}
          <motion.section
            id="remedies"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Five Ways to Resolve Regulatory Risk</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              When a regulator raises concerns, parties have a toolkit of remedies to save the deal — each with different costs and strategic implications.
            </p>
            <div className="space-y-3">
              {REMEDIES.map((item) => {
                const c = COLOR_MAP[item.color];
                return (
                  <div key={item.title} className="flex gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                    <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${c.dot}`} />
                    <div>
                      <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{item.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{item.desc}</p>
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
                Regulatory block and gun-jumping — two ways regulatory risk can materialize and the consequences that follow.
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
