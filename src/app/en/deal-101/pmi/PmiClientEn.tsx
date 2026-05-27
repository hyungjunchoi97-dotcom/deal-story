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

// ── Three integration challenges ─────────────────────────────────
const THREE_CHALLENGES = [
  {
    num: "01",
    title: "Organizational Integration",
    subtitle: "People & Structure",
    color: "violet",
    description: "Which teams survive, who becomes the leader, and how does the reporting structure change? The most sensitive PMI dimension.",
    detail: "The moment two org charts are merged, overlapping functions appear and leadership positions collide. Top performers immediately sense what's happening to their role. If uncertainty drags on, the best people leave first — because they have the most options.",
    risks: ["Key talent attrition", "Leadership role conflicts", "Reporting structure chaos", "Unclear accountability"],
  },
  {
    num: "02",
    title: "IT Systems Integration",
    subtitle: "Technology & Data",
    color: "blue",
    description: "ERP, CRM, finance systems — the most time-consuming and expensive integration challenge.",
    detail: "Two companies often run completely different ERPs (SAP vs Oracle), different CRMs, different HR platforms. Merging them can take years, and the migration process creates real risks of data loss and business disruption. IT integration cost is consistently the most underestimated item in any deal.",
    risks: ["ERP/CRM integration delays (can take years)", "Data migration failures", "Cybersecurity vulnerabilities", "Cost and timeline overruns"],
  },
  {
    num: "03",
    title: "Culture Integration",
    subtitle: "The Invisible Variable",
    color: "rose",
    description: "The least visible but most lethal dimension. 'Us vs them' divides an organization faster than any spreadsheet can track.",
    detail: "Decision-making style, operating pace, hierarchy preferences, attitudes toward failure — this is all culture. When two cultures collide, an informal war starts independent of the formal org chart. Because it doesn't show up in any number, management tends to underestimate it. Yet it's often the longest-lasting and most expensive integration cost.",
    risks: ["'Our way vs their way' friction", "Acquirer superiority complex → talent drain at target", "Informal factions forming", "Morale decline and productivity loss"],
  },
];

// ── Integration spectrum ──────────────────────────────────────────
const INTEGRATION_SPECTRUM = [
  {
    type: "Full Integration",
    subtitle: "One company, one brand",
    color: "teal",
    desc: "Brand, systems, and organization fully merged. Maximizes cost synergies but also carries the highest culture-clash risk.",
    examples: ["Manufacturing mergers", "Same-industry consolidations"],
    synergy: "Maximum",
    risk: "Highest",
  },
  {
    type: "Partial Integration",
    subtitle: "Shared back-office, independent front-end",
    color: "violet",
    desc: "Finance and back-office merged; business operations remain independent. Balances synergy capture with operational autonomy.",
    examples: ["Conglomerate division absorption", "Platform company vertical acquisitions"],
    synergy: "Medium",
    risk: "Medium",
  },
  {
    type: "Standalone / Arm's Length",
    subtitle: "Brand and operations stay separate",
    color: "amber",
    desc: "Only the equity changes hands; the acquired company runs independently. Minimal synergy, but minimal integration risk and culture disruption.",
    examples: ["PE portfolio operations", "Creative studio acquisitions (Disney × Pixar)"],
    synergy: "Minimal",
    risk: "Minimal",
  },
];

// ── PMI timeline ──────────────────────────────────────────────────
const PMI_TIMELINE = [
  {
    period: "Day 1–30",
    title: "Immediate actions",
    color: "teal",
    tasks: [
      "Execute communication plan — announce integration direction to employees, customers, and partners",
      "Activate key-talent retention packages — signal immediately that valued people are valued",
      "Deliver quick wins — visible early results to build integration momentum",
      "Stand up the PMI Office and set KPIs",
    ],
  },
  {
    period: "Day 31–100",
    title: "Early integration",
    color: "blue",
    tasks: [
      "Finalize org structure — make it clear who sits where",
      "Begin consolidating duplicate functions — finance, legal, HR back-office first",
      "Decide brand architecture — which brand stays, which is retired",
      "Strengthen customer communication — reassure on service continuity",
    ],
  },
  {
    period: "Month 4–12",
    title: "Mid-term integration",
    color: "violet",
    tasks: [
      "Begin IT system migration — phased execution per the road map",
      "Consolidate financial reporting — establish a single reporting line",
      "Begin realizing cost synergies — eliminate duplicate spend",
      "Rationalize product and service portfolio",
    ],
  },
  {
    period: "Year 2–3",
    title: "Long-term integration",
    color: "emerald",
    tasks: [
      "Complete culture integration — common values and behavioral norms internalized",
      "Complete full IT integration",
      "Begin realizing revenue synergies — cross-selling, new market expansion",
      "Integration performance review — actual results vs synergy targets at deal time",
    ],
  },
];

// ── Stakeholders ──────────────────────────────────────────────────
const STAKEHOLDERS = [
  {
    role: "PMI Office (Integration Management Office, IMO)",
    color: "teal",
    responsibility: "The overall project manager of the integration. Owns the timeline, KPIs, and issue tracking. Reports integration progress to leadership and removes decision-making bottlenecks across teams. Without real authority, it becomes a ceremonial body.",
  },
  {
    role: "HR Team",
    color: "violet",
    responsibility: "Key-talent retention, org design (who goes where), and management of culture dynamics. The communication in the first 30 days post-close sets the tone for talent attrition over the next three years.",
  },
  {
    role: "IT Team",
    color: "blue",
    responsibility: "Systems integration road map, data migration execution, security integration. IT integration is the longest-running workstream — preparation must begin during due diligence, well before close.",
  },
  {
    role: "Brand / Marketing Team",
    color: "amber",
    responsibility: "Brand architecture decisions — which brand to keep, which to phase out. Communicates to customers that 'things are changing but service will be better.' Managing perception is as important as managing the integration itself.",
  },
  {
    role: "Finance Team",
    color: "emerald",
    responsibility: "Budget integration, financial reporting consolidation, synergy KPI tracking. Responsible for verifying in numbers whether the predicted synergies are actually being realized — the post-acquisition audit of the deal thesis.",
  },
  {
    role: "Legal Team",
    color: "rose",
    responsibility: "Contract transfers, regulatory compliance, employment agreement restructuring. In cross-border deals, ongoing monitoring of labor law, competition law, and data protection requirements across multiple jurisdictions.",
  },
];

// ── Case studies ─────────────────────────────────────────────────
const CASES = [
  {
    company: "Disney × Pixar",
    year: "2006",
    price: "$7.4B",
    type: "Successful PMI",
    typeColor: "emerald",
    title: "Preserving independence as the integration strategy",
    analogy: "The new owner walked in and said: 'Keep doing things your way — I'm here to learn from you.' It was a declaration that the acquirer would not destroy the creative culture it had just bought.",
    paragraphs: [
      "When Disney acquired Pixar for $7.4B in 2006, the biggest fear was that the corporate giant would crush the small, creative studio's culture. There was even internal precedent at Disney for exactly that outcome.",
      "CEO Bob Iger made a different call. He kept Pixar's founding leadership — John Lasseter and Ed Catmull — in place, left Pixar's independent studio structure and creative decision-making processes untouched, and then imported Pixar's approach back into Disney Animation.",
      "The results were unambiguous: 'Coco,' 'Inside Out,' 'Up,' and 'Toy Story 3' followed in succession. Pixar's creative output accelerated after the acquisition rather than declining. It stands as one of the most successful PMI outcomes in M&A history, particularly for creative industries.",
    ],
    lesson: "In creative industry M&A, the most important PMI decision is not 'how fast do we integrate?' but 'what do we refuse to touch?' When the acquired company's core value is its people and culture, the first principle of integration is preservation, not assimilation.",
    integrationApproach: "Standalone (with cultural reverse-transfer)",
  },
  {
    company: "HP × Compaq",
    year: "2001",
    price: "$25B",
    type: "Failed PMI",
    typeColor: "rose",
    title: "The IT integration failure",
    analogy: "They tried to merge two complex ERP systems into one — and ended up with a situation where neither worked properly. The act of combining broke both systems simultaneously.",
    paragraphs: [
      "HP's $25B acquisition of Compaq in 2001 was controversial from the start. The Hewlett and Packard founding families publicly opposed it: 'You're just doubling the complexity.' They were right about more than they knew.",
      "Post-merger, IT systems integration alone took years. HP and Compaq each ran their own ERP, CRM, and sales management platforms. The integration triggered simultaneous sales organization conflicts, product line overlap (HP's server line vs Compaq's ProLiant), and culture clashes — all at once.",
      "PC market share temporarily rose post-merger, but the cost increases and organizational chaos erased those gains. In 2014, HP split into two companies: HP Inc. (consumer PCs) and Hewlett Packard Enterprise (enterprise IT). The integration synergies projected at deal time were never realized.",
    ],
    lesson: "IT integration is consistently the most underestimated cost and time item in any M&A. The complexity doesn't add — it multiplies. Independent IT integration cost and timeline assessment must happen during due diligence, and the findings must be reflected in deal pricing.",
    integrationApproach: "Full Integration — failed",
  },
  {
    company: "Daimler × Chrysler",
    year: "1998–2007",
    price: "$36B",
    type: "Failed PMI",
    typeColor: "rose",
    title: "When culture war tears an organization apart",
    analogy: "A precision-engineering, punctual, hierarchy-driven German organization and a fast-moving, design-focused, autonomous American organization moved under the same roof — and fought without ceasing until they finally divorced.",
    paragraphs: [
      "In 1998, the merger of Daimler-Benz (Germany) and Chrysler (US) was announced as a 'Merger of Equals' — $36B in deal value, the largest automotive M&A in history at the time. Both companies would build a new entity together as equal partners.",
      "In practice, it was an acquisition. German executives held dominant authority in board and management composition, and most of Chrysler's senior leadership was replaced. German decision-making culture (hierarchy, consensus-driven) collided head-on with American culture (speed, autonomy), and the organization fractured.",
      "The Chrysler division recorded repeated losses, and Daimler sold it to Cerberus Capital Management in 2007 for $7.4B — less than a fifth of the original acquisition price. The 'Merger of Equals' became one of the most expensive PMI failures in corporate history.",
    ],
    lesson: "In PMI, 'merger' is political language. Without clear operational leadership over who actually runs the integration, two organizational cultures do not coexist — they go to war. 'Merger of Equals' is almost always a negotiating tactic, not an operating reality.",
    integrationApproach: "Full Integration attempted — culture war failure",
  },
];

// ── Failure checklist ─────────────────────────────────────────────
const FAILURE_CHECKLIST = [
  { item: "No monitoring of key talent attrition", severity: "Critical" },
  { item: "IT integration timeline and cost severely underestimated", severity: "Very High" },
  { item: "Acquirer superiority complex — 'we're right, they're wrong'", severity: "Very High" },
  { item: "No customer communication plan → customer attrition", severity: "High" },
  { item: "PMI Office absent or lacks real authority", severity: "High" },
  { item: "No Day 1 communication plan → rumors and anxiety spread", severity: "High" },
  { item: "Synergy KPIs not defined → no way to measure performance", severity: "Medium" },
  { item: "Integration launched without a culture diagnostic", severity: "Medium" },
];

export default function PmiClientEn() {
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
              <span className="text-xs text-gray-400">PMI</span>
            </div>
            <span className="inline-block text-xs font-medium bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300 rounded-full px-3 py-1 mb-4">
              Deal Structure
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              PMI — Post-Merger Integration
              <span className="block text-xl sm:text-2xl text-gray-500 dark:text-gray-400 mt-1 font-medium">
                Where Deals Actually Win or Lose
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              70–80% of M&A deals fail to achieve their projected synergies. The number one reason is PMI failure. The three integration challenges, the 100-day plan, and three case studies that show what the difference looks like in practice.
            </p>

            {/* Section quick-nav */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { label: "What is PMI?", href: "#what-is-pmi" },
                { label: "3 Challenges", href: "#three-challenges" },
                { label: "Integration Spectrum", href: "#spectrum" },
                { label: "Timeline", href: "#timeline" },
                { label: "Stakeholders", href: "#stakeholders" },
                { label: "Case Studies", href: "#cases" },
                { label: "Failure Checklist", href: "#checklist" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-1 text-xs font-medium bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300 hover:opacity-80 transition-opacity"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-16">

          {/* ── Section 1: What is PMI? ── */}
          <motion.section id="what-is-pmi" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">What is PMI?</h2>

            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
              <p>
                <strong className="text-gray-800 dark:text-gray-200">Post-Merger Integration (PMI)</strong> is everything that happens after the deal closes to make two companies genuinely operate as one. Signing the SPA and holding the closing dinner doesn't finish the deal — the real work starts the morning after.
              </p>
              <p>
                Research consistently shows that <strong className="text-gray-800 dark:text-gray-200">70–80% of M&A deals fail to deliver their projected synergies</strong>. The leading cause, cited again and again, is PMI failure. A company pays a massive premium to acquire another and then destroys value in the integration process.
              </p>
            </div>

            {/* Analogy */}
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-5">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 Analogy</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                Marriage isn't the wedding day — it's the life you build together afterward. No matter how spectacular the ceremony, if you can't make the relationship work, the premium you paid for the ring was wasted. The M&A closing is the wedding. PMI is the marriage itself.
              </p>
            </div>

            {/* Key stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { stat: "70–80%", label: "of deals fail to meet synergy targets", color: "rose" },
                { stat: "#1 cause", label: "PMI failure: top reason synergies aren't realized", color: "amber" },
                { stat: "2–3 years", label: "average time to complete full integration", color: "teal" },
              ].map((item) => {
                const c = COLOR_MAP[item.color];
                return (
                  <div key={item.stat} className={`rounded-xl border ${c.border} ${c.bg} p-4 text-center`}>
                    <div className={`text-xl font-bold ${c.text}`}>{item.stat}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-tight">{item.label}</div>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ── Section 2: Three challenges ── */}
          <motion.section id="three-challenges" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">The three integration challenges</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Integration involves dozens of workstreams, but the core reduces to three. How well these are managed determines whether a deal wins or loses.
            </p>

            <div className="space-y-5">
              {THREE_CHALLENGES.map((challenge) => {
                const c = COLOR_MAP[challenge.color];
                return (
                  <div key={challenge.num} className={`rounded-xl border ${c.border} overflow-hidden`}>
                    <div className={`${c.bg} px-5 py-4`}>
                      <div className="flex items-start justify-between gap-3 flex-wrap">
                        <div>
                          <span className={`text-xs font-bold ${c.text}`}>{challenge.num}</span>
                          <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mt-0.5">
                            {challenge.title}
                            <span className="text-sm font-normal text-gray-400 dark:text-gray-500 ml-2">{challenge.subtitle}</span>
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{challenge.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{challenge.detail}</p>
                      <div>
                        <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Key risks</p>
                        <div className="flex flex-wrap gap-2">
                          {challenge.risks.map((risk, i) => (
                            <span key={i} className={`text-xs font-medium rounded-full px-2.5 py-0.5 ${c.badge}`}>{risk}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ── Section 3: Integration spectrum ── */}
          <motion.section id="spectrum" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">The integration spectrum — how far do you go?</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              Integration depth is a choice. Full integration maximizes cost synergies but also maximizes culture-clash risk. The right answer depends on what you actually bought.
            </p>

            <div className="space-y-3">
              {INTEGRATION_SPECTRUM.map((item) => {
                const c = COLOR_MAP[item.color];
                return (
                  <div key={item.type} className={`rounded-xl border ${c.border} ${c.bg} p-4`}>
                    <div className="flex items-start justify-between gap-3 flex-wrap mb-2">
                      <div>
                        <span className={`text-xs font-bold ${c.text}`}>{item.type}</span>
                        <span className="text-xs text-gray-400 dark:text-gray-500 ml-2">{item.subtitle}</span>
                      </div>
                      <div className="flex gap-3 text-xs">
                        <span className="text-gray-500 dark:text-gray-400">Synergy <strong className={c.text}>{item.synergy}</strong></span>
                        <span className="text-gray-500 dark:text-gray-400">Risk <strong className={item.risk === "Highest" ? "text-rose-600 dark:text-rose-400" : item.risk === "Medium" ? "text-amber-600 dark:text-amber-400" : "text-emerald-600 dark:text-emerald-400"}>{item.risk}</strong></span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-2">{item.desc}</p>
                    <div className="flex flex-wrap gap-1">
                      {item.examples.map((ex, i) => (
                        <span key={i} className="text-xs bg-white/60 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-700 rounded-full px-2.5 py-0.5 text-gray-500 dark:text-gray-400">{ex}</span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ── Section 4: PMI timeline ── */}
          <motion.section id="timeline" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">PMI timeline — three years post-close</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              Integration starts on closing day. Day 1, Day 100, Year 1, and Year 3 each carry distinct responsibilities.
            </p>

            <div className="space-y-4">
              {PMI_TIMELINE.map((phase, idx) => {
                const c = COLOR_MAP[phase.color];
                return (
                  <motion.div
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className={`rounded-xl border ${c.border} overflow-hidden`}
                  >
                    <div className={`${c.bg} px-5 py-3 flex items-center justify-between`}>
                      <span className={`text-sm font-bold ${c.text}`}>{phase.period}</span>
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{phase.title}</span>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-2">
                        {phase.tasks.map((task, i) => (
                          <li key={i} className="flex gap-3 text-sm text-gray-600 dark:text-gray-400">
                            <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${c.dot}`} />
                            <span className="leading-relaxed">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* ── Section 5: Stakeholders ── */}
          <motion.section id="stakeholders" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">PMI stakeholders & roles</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              PMI is not one team's job. From the C-suite to the IT floor, every functional organization moves simultaneously.
            </p>

            <div className="space-y-3">
              {STAKEHOLDERS.map((s, i) => {
                const c = COLOR_MAP[s.color];
                return (
                  <div key={i} className="flex gap-3 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/30">
                    <div className={`mt-1.5 w-2.5 h-2.5 rounded-full shrink-0 ${c.dot}`} />
                    <div>
                      <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">{s.role}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{s.responsibility}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ── Section 6: Case studies ── */}
          <section id="cases">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Case studies — what success and failure actually look like</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                The same M&A transaction can produce wildly different outcomes depending on the PMI approach. Three cases prove this.
              </p>
            </motion.div>

            <div className="space-y-6">
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
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                          {c_item.company} · {c_item.year} · Deal value {c_item.price}
                        </p>
                      </div>
                      <div className={`text-xs font-medium rounded-lg px-3 py-2 ${COLOR_MAP.teal.bg} ${COLOR_MAP.teal.text} border ${COLOR_MAP.teal.border}`}>
                        {c_item.integrationApproach}
                      </div>
                    </div>

                    <div className="p-5 space-y-4">
                      {/* Analogy */}
                      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                        <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 Analogy</p>
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
                        <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Key lesson</p>
                        <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">{c_item.lesson}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* ── Section 7: Failure checklist ── */}
          <motion.section id="checklist" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">PMI failure factors — a checklist</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              If any of these apply, the integration is at risk. These risks should be identified during due diligence and built into the integration plan before close.
            </p>

            <div className="space-y-2">
              {FAILURE_CHECKLIST.map((item, i) => {
                const severityColor =
                  item.severity === "Critical" ? "rose" :
                  item.severity === "Very High" ? "amber" : "violet";
                const c = COLOR_MAP[severityColor];
                return (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                    <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${c.dot}`} />
                    <div className="flex-1 flex items-start justify-between gap-3 flex-wrap">
                      <p className="text-sm text-gray-700 dark:text-gray-300">{item.item}</p>
                      <span className={`text-xs font-semibold rounded-full px-2.5 py-0.5 shrink-0 ${c.badge}`}>
                        {item.severity}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Key insight */}
            <div className="mt-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Key insight</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                Most PMI failures don't start after closing — the seeds are planted during due diligence and SPA negotiation. Closing a deal without an integration plan is like setting a wedding date and never once discussing how you'll actually live together. The best PMI starts well before close.
              </p>
            </div>
          </motion.section>

          {/* ── Related concepts ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">Connected concepts</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/en/deal-101/ma-process", title: "The M&A Process", desc: "PMI is Phase 6 — the final stage that determines whether the deal creates or destroys value", badge: "Deal Process" },
                { href: "/en/deal-101/synergy", title: "Synergy", desc: "PMI's ultimate goal — the process of actually realizing the synergies projected at deal time", badge: "Valuation" },
                { href: "/en/deal-101/stock-vs-asset-deal", title: "Stock Deal vs. Asset Deal", desc: "Deal structure affects how integration is architected and how complex it becomes", badge: "Deal Structure" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group block p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-teal-300 dark:hover:border-teal-600 transition-colors"
                >
                  <span className="text-[10px] font-medium bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300 rounded-full px-2 py-0.5">
                    {item.badge}
                  </span>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mt-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
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
