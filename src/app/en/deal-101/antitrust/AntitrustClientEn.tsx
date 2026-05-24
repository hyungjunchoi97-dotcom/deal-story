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

// ── Major regulatory authorities ──────────────────────────────────
const AUTHORITIES = [
  {
    name: "KFTC (Korea Fair Trade Commission)",
    country: "South Korea",
    law: "Monopoly Regulation and Fair Trade Act",
    timeline: "30–120 days",
    color: "blue",
    note: "Mandatory filing when Korean revenue thresholds are met. Even large global deals must file if the target or acquirer has material Korean sales.",
  },
  {
    name: "European Commission",
    country: "European Union",
    law: "EC Merger Regulation",
    timeline: "Phase I: 25 days / Phase II: 90+ days",
    color: "violet",
    note: "Phase I clears deals with no serious competition concerns. Phase II is a deep-dive investigation. Adobe/Figma entered Phase II and headed toward a block before the parties terminated.",
  },
  {
    name: "DOJ / FTC",
    country: "United States",
    law: "HSR Act, Clayton Act",
    timeline: "30 days (months if Second Request issued)",
    color: "rose",
    note: "Pre-merger notification required under the HSR Act. A Second Request triggers months of additional review. The FTC and DOJ divide industry coverage between them.",
  },
  {
    name: "MOFCOM",
    country: "China",
    law: "Anti-Monopoly Law",
    timeline: "30–180 days",
    color: "amber",
    note: "Mandatory filing when China revenue thresholds are met. When geopolitical tensions rise, review can extend indefinitely. The direct reason Qualcomm/NXP collapsed.",
  },
  {
    name: "CFIUS",
    country: "United States",
    law: "FIRRMA (national security)",
    timeline: "30–45 days",
    color: "emerald",
    note: "Reviews foreign acquisitions of US businesses for national security implications. Mandatory filing in semiconductors, AI, telecom, and defense. CFIUS can block or unwind a deal.",
  },
  {
    name: "UK CMA",
    country: "United Kingdom (post-Brexit)",
    law: "Enterprise Act 2002",
    timeline: "Phase I: 40 days / Phase II: 24+ weeks",
    color: "teal",
    note: "Independent from the EU since Brexit. The CMA initially moved to block Microsoft/Activision over cloud gaming concerns before accepting structural remedies.",
  },
];

// ── Core concepts ─────────────────────────────────────────────────
const CONCEPTS = [
  {
    title: "Market Definition",
    color: "blue",
    description:
      "The first question regulators ask: 'Do these two companies compete in the same market?' They define the product market (which products are substitutes?) and the geographic market (where does competition actually occur?).",
    example: "The central dispute in Adobe/Figma: 'Are Figma and Adobe XD in the same market?' The EU defined UI/UX design software as a distinct market and concluded both companies were dominant players in it.",
  },
  {
    title: "HHI (Herfindahl-Hirschman Index)",
    color: "violet",
    description:
      "A standard measure of market concentration. Calculated as the sum of squared market shares for all firms in the market. Higher HHI means the market is more concentrated — closer to monopoly.",
    example: "HHI below 1,500: competitive market / HHI 1,500–2,500: moderately concentrated / HHI above 2,500: highly concentrated. A post-merger delta HHI above 200 typically triggers scrutiny.",
  },
  {
    title: "Horizontal vs. Vertical Mergers",
    color: "rose",
    description:
      "Horizontal mergers combine direct competitors in the same market — the classic market concentration concern. Vertical mergers combine firms at different levels of the supply chain — the concern is foreclosure of rival access to inputs or distribution.",
    example: "Adobe/Figma was a horizontal merger. Microsoft/Activision was a hybrid: horizontal in gaming publishing plus vertical in cloud platform distribution, making the analysis significantly more complex.",
  },
  {
    title: "Potential Competition Theory",
    color: "amber",
    description:
      "Even if two firms don't currently compete directly, regulators may block a merger if one is a credible potential entrant into the other's market. Eliminating a future competitor before it arrives can be just as harmful as eliminating a current one.",
    example: "Figma was not a direct Adobe competitor in all product segments in 2022, but the EU's core concern was that Figma was a credible potential competitor across creative software — and the merger would eliminate that future competitive pressure.",
  },
];

// ── Outcome types ─────────────────────────────────────────────────
const OUTCOMES = [
  {
    type: "Unconditional Clearance",
    icon: "✓",
    color: "emerald",
    description: "No competition concerns identified. The vast majority of M&A filings receive unconditional clearance within the Phase I window.",
    example: "Deals with limited market overlap, low combined market share, or where the competitive effects are clearly immaterial.",
  },
  {
    type: "Conditional Clearance (Remedies)",
    icon: "△",
    color: "amber",
    description: "Competition concerns exist but can be resolved through remedies. Structural remedies (divestitures) or behavioral remedies (pricing or access commitments).",
    example: "Microsoft/Activision: EU and UK CMA approved subject to Microsoft divesting cloud-streaming rights for Activision titles to Ubisoft.",
  },
  {
    type: "Block (Prohibition)",
    icon: "✕",
    color: "rose",
    description: "The merger would irreparably harm market competition and no remedy can adequately address the harm.",
    example: "Adobe/Figma: EU Phase II was moving toward a formal prohibition before the parties voluntarily terminated the deal.",
  },
];

// ── Stakeholders ──────────────────────────────────────────────────
const STAKEHOLDERS = [
  {
    role: "Antitrust Law Firms",
    color: "blue",
    responsibility: "Prepare merger control filings, hire economists, respond to regulator information requests, and lead remedy negotiations. Large cross-border deals require separate specialist teams in each jurisdiction. The choice of outside counsel often determines how a filing strategy is framed.",
  },
  {
    role: "Economists",
    color: "violet",
    responsibility: "Conduct HHI analysis, submit market definition opinions, model price effects. The economic debate between the merging parties' experts and the regulator's in-house economists can directly swing the outcome of a Phase II review.",
  },
  {
    role: "Regulatory Reviewers",
    color: "rose",
    responsibility: "Issue requests for information (RFIs), conduct market surveys, interview third parties (rivals, customers), hold hearings. The theoretical framework a case team uses to define the market often determines whether the deal survives.",
  },
  {
    role: "Corporate Strategy / CFO",
    color: "amber",
    responsibility: "Decide whether to accept proposed remedies — will divesting a business unit destroy the deal's strategic rationale? Since regulatory approval is a closing condition (CP) in the SPA, prolonged remedy negotiations put the entire deal at risk.",
  },
];

// ── Case studies ──────────────────────────────────────────────────
const CASES = [
  {
    slug: "adobe-figma-blocked",
    title: "The $20B Deal the EU Killed",
    company: "Adobe × Figma (2022–2023)",
    type: "Blocked",
    typeColor: "rose",
    premium: "$1B break-up fee paid",
    analogy: "The two biggest players in the game tried to merge — and the referee said 'then the game stops working' and stepped in.",
    paragraphs: [
      "In September 2022, Adobe announced it would acquire Figma for approximately $20B — roughly 50× Figma's ~$400M ARR, the highest SaaS acquisition multiple on record at the time. Adobe's strategic goal was to dominate the design software market by combining Creative Cloud with Figma's collaborative UI/UX platform.",
      "The European Commission opened a Phase II investigation. Two theories drove the inquiry: first, this was a horizontal merger between two dominant players in the UI/UX design software market. Second — and more novel — Figma was a credible potential competitor to Adobe across the broader creative software landscape. Acquiring Figma would eliminate that future competitive pressure. No remedy Adobe proposed was deemed sufficient to resolve these concerns.",
      "After 15 months of review, Adobe and Figma voluntarily terminated the deal in December 2023. Adobe paid Figma the contractually agreed $1B break-up fee. Figma remained independent and subsequently began preparing for an IPO.",
    ],
    lesson: "Horizontal mergers between SaaS platforms are increasingly blocked under the 'potential competition' theory. Regulatory viability must be assessed independently — before, not after, the LOI is signed. A $1B cash loss and 15 months of distraction was the price of skipping that assessment.",
  },
  {
    slug: "microsoft-activision",
    title: "Cleared After 18 Months — With Conditions",
    company: "Microsoft × Activision Blizzard (2022–2023)",
    type: "Conditional Clearance",
    typeColor: "amber",
    premium: "$68.7B deal, ~45% premium",
    analogy: "Three referees gave three different verdicts on the same play — and the deal closed when two of them said conditional yes.",
    paragraphs: [
      "In January 2022, Microsoft announced it would acquire Activision Blizzard for $68.7B — the largest gaming deal in history. The strategic logic was to secure franchises including Call of Duty, World of Warcraft, and Candy Crush. What followed was one of the most complex multi-jurisdictional regulatory battles in M&A history.",
      "Each regulator reached a different conclusion. The EU approved the deal with behavioral conditions after Microsoft committed to license Call of Duty and other titles to rival PC and console platforms. The US FTC sought a preliminary injunction to block the deal but lost in federal court. The UK CMA was the most difficult: it initially moved toward a block on cloud gaming grounds, then reversed course after Microsoft agreed to divest cloud-streaming rights for Activision's titles to Ubisoft — a structural remedy that permanently separated those rights from Microsoft.",
      "The deal closed in October 2023. The same transaction received three different conclusions from three different regulators: EU — behavioral remedy clearance; US — FTC court defeat cleared the path; UK — structural remedy clearance. Each came with different conditions attached.",
    ],
    lesson: "Global deals require simultaneous multi-jurisdiction management. Clearance from one regulator provides no protection against another. Different authorities apply different market definitions and theories, so each jurisdiction needs a tailored strategy. The value lost through remedies must also be modeled in advance — divesting cloud-streaming rights permanently changed the economics of the deal.",
  },
  {
    slug: "qualcomm-nxp",
    title: "One Country, One Veto — $44B Deal Killed by China Alone",
    company: "Qualcomm × NXP Semiconductors (2016–2018)",
    type: "Geopolitical Risk",
    typeColor: "violet",
    premium: "$44B total deal size, $2B break-up fee",
    analogy: "Ninety-nine people voted yes, one person voted no, and that one vote invalidated the entire ballot — that one vote belonged to China.",
    paragraphs: [
      "In October 2016, Qualcomm announced it would acquire Dutch semiconductor firm NXP Semiconductors for $44B. The deal would combine Qualcomm's mobile chip leadership with NXP's dominance in automotive semiconductors. Eight regulatory authorities — including the US, EU, South Korea, and Japan — reviewed the transaction. All eight approved. One did not: China's MOFCOM.",
      "The year 2018 was when the US-China trade war escalated sharply. MOFCOM had been conducting its review for 18 months and had not issued a decision. Qualcomm and NXP's combined China revenue represented approximately 60% of the total deal. Without MOFCOM approval, closing was legally impossible. MOFCOM indicated it would approve only if Qualcomm accepted conditions — including mandatory technology licensing to Chinese competitors — that would fundamentally undermine the strategic value of the acquisition.",
      "With the SPA expiration deadline approaching and no MOFCOM approval in sight, Qualcomm terminated the deal in July 2018. Qualcomm paid NXP a $2B break-up fee. The episode became the defining case study in how geopolitical risk can penetrate the regulatory review process.",
    ],
    lesson: "For global tech deals with significant China revenue, MOFCOM is not a routine filing — it is a standalone strategic risk factor. When US-China tensions are elevated, the review process can become a geopolitical instrument. SPA expiration provisions must be designed with MOFCOM timeline risk explicitly in mind, and deal teams should model 'What if MOFCOM never approves?' as a primary scenario, not a tail risk.",
  },
];

export default function AntitrustClientEn() {
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
              <span className="text-xs text-gray-400">Antitrust & Merger Control</span>
            </div>
            <span className="inline-block text-xs font-medium bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300 rounded-full px-3 py-1 mb-4">
              Regulatory & Legal
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              Antitrust & Merger Control
              <span className="block text-lg sm:text-xl font-medium text-gray-500 dark:text-gray-400 mt-1">
                When Regulators Get a Vote
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              Signing the SPA is not the finish line. Competition authorities in every major jurisdiction must clear the deal before it can close. How they review M&A, what they look for, and three case studies where the regulator changed everything.
            </p>

            {/* Quick nav */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { href: "#why", label: "Why Regulators Review" },
                { href: "#authorities", label: "Major Authorities" },
                { href: "#concepts", label: "Core Concepts" },
                { href: "#outcomes", label: "3 Outcomes" },
                { href: "#stakeholders", label: "Stakeholders" },
                { href: "#cases", label: "Case Studies" },
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

          {/* ── Section 1: Why Regulators Review M&A ── */}
          <motion.section
            id="why"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">Why Do Governments Review M&A?</h2>

            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
              <p>
                M&A changes competitive structure. When two companies become one, the number of market participants falls and the combined firm gains greater market power. Competition authorities assess whether this shift harms consumers — through higher prices, reduced innovation, or the elimination of competitive choice.
              </p>
              <p>
                The goal is not to block M&A. It is to determine whether the competitive harm is material enough to require intervention. The vast majority of deals clear without conditions. What draws scrutiny are mergers between dominant horizontal competitors, acquisitions designed to neutralize a nascent threat, and vertical integrations that foreclose rivals' access to key inputs or customers.
              </p>
            </div>

            {/* Analogy */}
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-5">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 Think of it this way</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                Imagine two grocery stores on the same block. If one buys the other, customers have nowhere else to go — and the owner can raise prices without losing business. Merger control is the mechanism that prevents this. The reviewer's core question: "After this deal closes, do consumers still have a real choice?"
              </p>
            </div>

            {/* Three review rationales */}
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { title: "Price Increase Risk", color: "rose", desc: "When competitive pressure weakens post-merger, the combined firm has less incentive to keep prices in check. This is most pronounced in concentrated markets." },
                { title: "Innovation Reduction", color: "violet", desc: "Acquiring a potential competitor removes the competitive pressure to keep innovating. Big Tech's acquisition of nascent startups is the archetypal concern." },
                { title: "Competitive Foreclosure", color: "amber", desc: "Vertical integration can block rivals from accessing key inputs or distribution channels, structurally degrading competition across the market." },
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

          {/* ── Section 2: Major Authorities ── */}
          <motion.section
            id="authorities"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Major Regulatory Authorities</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              Global deals must file in multiple jurisdictions simultaneously. Each authority reviews independently — clearance from one provides no protection against a block from another.
            </p>

            <div className="space-y-3">
              {AUTHORITIES.map((auth) => {
                const c = COLOR_MAP[auth.color];
                return (
                  <div key={auth.name} className={`rounded-xl border ${c.border} p-4`}>
                    <div className="flex items-start justify-between gap-3 flex-wrap mb-2">
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{auth.name}</h3>
                        <p className={`text-xs font-medium ${c.text}`}>{auth.country}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className={`text-xs font-medium rounded-full px-2.5 py-0.5 ${c.badge}`}>{auth.law}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">⏱ {auth.timeline}</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{auth.note}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Key Insight</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                The slowest authority sets the closing timeline for the entire deal. In Microsoft/Activision, the UK CMA was the final obstacle. In Qualcomm/NXP, MOFCOM's silence killed the deal entirely. Before filing, identify the "worst-case jurisdiction" and build the deal timeline around it.
              </p>
            </div>
          </motion.section>

          {/* ── Section 3: Core Concepts ── */}
          <motion.section
            id="concepts"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Four Core Concepts</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              Nearly every merger control dispute turns on one or more of these four concepts. Understanding them is the key to reading regulatory news accurately.
            </p>

            <div className="space-y-4">
              {CONCEPTS.map((concept, idx) => {
                const c = COLOR_MAP[concept.color];
                return (
                  <motion.div
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className={`rounded-xl border ${c.border} ${c.bg} p-5`}
                  >
                    <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-2">{concept.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{concept.description}</p>
                    <div className={`rounded-lg p-3 bg-white/60 dark:bg-gray-800/40 border ${c.border}`}>
                      <p className={`text-xs font-semibold ${c.text} mb-0.5`}>Real-world case</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{concept.example}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* ── Section 4: Three Outcomes ── */}
          <motion.section
            id="outcomes"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Three Possible Outcomes</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              Every merger review ends in one of three conclusions. Which way a remedy negotiation goes determines whether the deal closes.
            </p>

            <div className="space-y-4">
              {OUTCOMES.map((outcome) => {
                const c = COLOR_MAP[outcome.color];
                return (
                  <div key={outcome.type} className={`rounded-xl border ${c.border} overflow-hidden`}>
                    <div className={`px-5 py-3 ${c.bg} flex items-center gap-3`}>
                      <span className={`text-lg font-bold ${c.text}`}>{outcome.icon}</span>
                      <h3 className={`text-sm font-bold ${c.text}`}>{outcome.type}</h3>
                    </div>
                    <div className="p-5">
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{outcome.description}</p>
                      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3">
                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                          <strong className="text-gray-700 dark:text-gray-300">Example: </strong>{outcome.example}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Remedy types detail */}
            <div className="mt-5 rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 p-5">
              <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-3">Two Types of Conditional Approval Remedies</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="bg-white dark:bg-gray-800/60 rounded-lg p-3">
                  <p className="text-xs font-bold text-amber-700 dark:text-amber-300 mb-1">Structural Remedy</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    Divestiture of a business unit, brand, or asset to a competitor. Designed to permanently restore competitive structure. Microsoft divesting cloud-streaming rights to Ubisoft is the canonical recent example. Regulators strongly prefer structural remedies.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800/60 rounded-lg p-3">
                  <p className="text-xs font-bold text-amber-700 dark:text-amber-300 mb-1">Behavioral Remedy</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    Commitments on pricing, access, interoperability, or data sharing. Requires ongoing monitoring and enforcement. Regulators are skeptical of behavioral remedies because compliance is difficult to verify over time.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── Section 5: Stakeholders ── */}
          <motion.section
            id="stakeholders"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Stakeholders in Merger Control</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              A regulatory review is a complex intersection of law, economics, and corporate strategy. Understanding who does what is essential for reading deal news accurately.
            </p>

            <div className="space-y-3">
              {STAKEHOLDERS.map((s) => {
                const c = COLOR_MAP[s.color];
                return (
                  <div key={s.role} className="flex gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 text-sm">
                    <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${c.dot}`} />
                    <div>
                      <span className="font-semibold text-gray-800 dark:text-gray-200">{s.role}</span>
                      <p className="text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed text-xs">{s.responsibility}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ── Section 6: Case Studies ── */}
          <section id="cases">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Three Case Studies</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Blocked, conditionally approved, and killed by a single holdout — three ways regulatory review can determine a deal's fate.
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
                    {/* Case header */}
                    <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-4 flex items-start justify-between gap-3 flex-wrap">
                      <div>
                        <span className={`inline-block text-xs font-medium rounded-full px-2.5 py-0.5 mb-2 ${c.badge}`}>
                          {c_item.type}
                        </span>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{c_item.title}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{c_item.company}</p>
                      </div>
                      <div className={`text-xs font-medium rounded-lg px-3 py-2 ${c.bg} ${c.text} border ${c.border} shrink-0`}>
                        {c_item.premium}
                      </div>
                    </div>

                    <div className="p-5 space-y-4">
                      {/* Analogy */}
                      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                        <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 Think of it this way</p>
                        <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">{c_item.analogy}</p>
                      </div>

                      {/* Body */}
                      <div className="space-y-3">
                        {c_item.paragraphs.map((p, i) => (
                          <p key={i} className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{p}</p>
                        ))}
                      </div>

                      {/* Lesson */}
                      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                        <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Key Lesson</p>
                        <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">{c_item.lesson}</p>
                      </div>

                      {/* Deal link */}
                      <Link
                        href={`/en/deals/${c_item.slug}`}
                        className="inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Read the full deal story →
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* ── Final Insights ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">What Matters in Deal Practice</h2>

            <div className="space-y-3">
              {[
                { color: "blue", title: "Assess regulatory risk at Phase 1 — before the LOI", desc: "Before writing an LOI, map which jurisdictions require filing and which one poses the highest risk. Adobe should have done this EU risk assessment before announcing the deal — not 15 months into a Phase II investigation." },
                { color: "violet", title: "Design a multi-jurisdiction strategy, not a single filing approach", desc: "Global deals cannot rely on one clearance to carry the rest. Each regulator applies its own market definition theories and standards. Maintain consistent substantive positions while tailoring each jurisdiction's argument to local precedent." },
                { color: "rose", title: "Model the value impact of remedies before you need them", desc: "Conditional approval may require divesting the exact asset that made the deal strategically valuable. Microsoft had to model the economics of losing cloud-streaming rights before deciding whether those rights were a dealbreaker or an acceptable sacrifice." },
                { color: "amber", title: "Treat MOFCOM and geopolitical risk as a primary scenario — not a tail risk", desc: "For deals with material China revenue, MOFCOM is not a bureaucratic formality. When US-China tensions rise, the review process can become a geopolitical instrument. SPA expiration provisions must explicitly price in MOFCOM silence risk." },
              ].map((item) => {
                const c = COLOR_MAP[item.color];
                return (
                  <div key={item.color} className={`rounded-xl border ${c.border} ${c.bg} p-4`}>
                    <h3 className={`text-sm font-bold ${c.text} mb-2`}>{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ── Related concepts ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">Related Concepts</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/en/deal-101/ma-process", title: "M&A Process", desc: "Merger control is Phase 6 of the M&A process. See how it fits the full deal lifecycle.", badge: "Deal Structure" },
                { href: "/en/deal-101/acquisition-premium", title: "Acquisition Premium", desc: "High-premium deals attract greater regulatory scrutiny. The Adobe/Figma case is the defining example.", badge: "Valuation" },
                { href: "/en/deals/adobe-figma-blocked", title: "Adobe × Figma Deal Story", desc: "How a $20B deal ended as a $1B cash loss — full timeline and analysis.", badge: "Deal Case" },
                { href: "/en/deals/microsoft-activision", title: "Microsoft × Activision Deal Story", desc: "Three regulators, three verdicts — the full 18-month regulatory battle.", badge: "Deal Case" },
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
