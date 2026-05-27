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

// ── RMT steps data ───────────────────────────────────────────────
const RMT_STEPS = [
  {
    step: "Step 1",
    title: "Strategic Decision",
    color: "blue",
    icon: "🎯",
    desc: "The parent company identifies a business unit it wants to divest. It confirms that a direct cash sale would trigger substantial capital gains tax, and begins evaluating the RMT structure.",
    detail: "Tax counsel and legal advisors assess RMT eligibility. The decision to seek a Private Letter Ruling (PLR) from the IRS is made at this stage.",
  },
  {
    step: "Step 2",
    title: "Spin-off Execution",
    color: "emerald",
    icon: "🔀",
    desc: "The business unit is separated into a standalone legal entity (NewCo). Existing shareholders of the parent company receive NewCo shares.",
    detail: "The spin-off must meet the requirements of IRC Section 355 to qualify as tax-free. After the spin-off, shareholders hold both parent company stock and NewCo stock simultaneously.",
  },
  {
    step: "Step 3",
    title: "Merger Negotiation",
    color: "violet",
    icon: "🤝",
    desc: "A strategic partner (the acquirer) signs a merger agreement with NewCo. Through the merger, the partner effectively acquires the business unit.",
    detail: "The merger can be structured as: the acquirer's entity merging into NewCo, or NewCo merging into a subsidiary of the acquirer. Either way, the post-merger ownership structure must satisfy the 50% requirement.",
  },
  {
    step: "Step 4",
    title: "50% Ownership Requirement Check",
    color: "amber",
    icon: "⚖️",
    desc: "After the merger, original NewCo shareholders (i.e., former parent shareholders) must hold at least 50.1% of the merged entity. This is required for the tax-free treatment to apply.",
    detail: "This is the most critical and most constraining condition in any RMT. If the acquirer is too large, satisfying this requirement becomes structurally impossible. Careful sizing of the acquirer's existing equity base is essential.",
  },
  {
    step: "Step 5",
    title: "Merger Completion",
    color: "indigo",
    icon: "✅",
    desc: "The strategic partner effectively acquires the business unit (NewCo). The parent company completes the divestiture without triggering corporate-level tax.",
    detail: "Former parent shareholders become shareholders in the newly merged entity. The parent company sheds the business unit and improves its balance sheet. The partner acquires a large business unit without a cash outlay.",
  },
];

// ── Pros and cons ────────────────────────────────────────────────
const PROS = [
  { icon: "💰", title: "Billions in Tax Savings", color: "emerald", desc: "No capital gains tax compared to a direct cash sale. On large divestitures, the savings can run into the billions of dollars." },
  { icon: "📈", title: "Full Value Transfer to Shareholders", color: "blue", desc: "Existing shareholders of the parent become shareholders in the new merged entity, tax-free. No value is lost to the IRS." },
  { icon: "🏦", title: "No Cash Outlay for the Acquirer", color: "violet", desc: "The strategic partner acquires a large business unit without writing a check. Significant transactions are possible without leverage." },
];

const CONS = [
  { icon: "⚖️", title: "The 50% Ownership Test", color: "rose", desc: "If former parent shareholders hold less than 50.1% after the merger, the tax-free treatment fails entirely. Very large acquirers may make this test impossible to satisfy." },
  { icon: "🏛️", title: "IRS Pre-Approval Required", color: "amber", desc: "Securing a Private Letter Ruling (PLR) from the IRS requires a formal application and can take several months — with meaningful execution risk throughout." },
  { icon: "⏱️", title: "Extended Deal Timeline", color: "orange", desc: "End-to-end execution typically takes 12 to 24 months. Legal, tax, and advisory fees are substantially higher than a standard M&A transaction." },
  { icon: "🔧", title: "Structural Complexity", color: "indigo", desc: "Two transactions — a spin-off and a merger — must be designed and executed in sequence. Tax, legal, and regulatory issues compound at every layer." },
];

// ── Case study data ──────────────────────────────────────────────
const CASES = [
  {
    title: "AT&T × WarnerMedia → Warner Bros. Discovery (2021–2022)",
    dealContext: "AT&T acquired Time Warner for $85.4B in 2018 — then divested it just 3–4 years later",
    color: "blue",
    typeLabel: "Large-Scale RMT",
    typeColor: "blue",
    analogy: "A telecom giant that overpaid for an entertainment company realized the tax bill on a direct sale was unworkable. The RMT let them spin off WarnerMedia, have it merge with Discovery, and effectively exit — without triggering corporate-level capital gains tax.",
    paragraphs: [
      "AT&T acquired Time Warner (WarnerMedia) for $85.4B in 2018, envisioning a media empire built around HBO, CNN, and Warner Bros. Studios. But surging streaming competition and ballooning debt forced a strategic reversal within just a few years.",
      "An RMT structure was applied. AT&T spun off WarnerMedia, and the separated WarnerMedia then merged with Discovery Communications to form Warner Bros. Discovery (WBD). In the process, AT&T also transferred approximately $43B of debt alongside WarnerMedia — a significant balance sheet benefit.",
      "AT&T shareholders received a 71% stake in Warner Bros. Discovery. The RMT structure allowed AT&T to avoid what would have been a massive capital gains tax bill on the divestiture of an asset it had paid top dollar to acquire.",
      "The aftermath is complicated. WBD has struggled since its 2022 listing, with intense streaming competition and heavy debt weighing on the stock. The deal structure itself worked as designed — but the strategic environment WBD faces remains difficult.",
    ],
    lesson: "The RMT performed exactly as intended on the tax front. But deal structure and business success are separate questions. AT&T saved on taxes; whether WBD can win in streaming is a different battle entirely. A well-designed structure does not guarantee a good business outcome.",
    lessonColor: "blue",
  },
  {
    title: "Abbott × AbbVie Separation (2013)",
    dealContext: "Abbott Laboratories separated its pharmaceutical business (AbbVie) including Humira",
    color: "emerald",
    typeLabel: "Tax-Efficient Separation",
    typeColor: "emerald",
    analogy: "When a blockbuster biologic and a medical device business share one stock ticker, the ultra-high-margin pharmaceutical value gets trapped at a blended multiple. The moment AbbVie traded independently, the market priced Humira's dominance properly.",
    paragraphs: [
      "In 2013, Abbott Laboratories separated its pharmaceutical business into AbbVie, leaving Abbott to focus on medical devices and diagnostics. A tax-efficient RMT-style structure was used for the separation. AbbVie went public carrying Humira (adalimumab), then the world's best-selling biologic, along with the rest of Abbott's pharmaceutical portfolio.",
      "At the time of separation, AbbVie's market cap was approximately $10B. Humira subsequently grew into a global blockbuster in rheumatoid arthritis, psoriasis, and Crohn's disease — driving AbbVie to the top tier of the global pharmaceutical industry. By 2022, AbbVie's market cap exceeded $260B.",
      "Abbott itself charted an independent growth trajectory after the separation, focusing on medical devices and diagnostics. Its FreeStyle Libre continuous glucose monitor became one of the most commercially successful products in the medical device industry.",
    ],
    lesson: "Inside the combined Abbott, Humira's extraordinary profitability was buried inside a blended multiple that included lower-margin medical devices. The moment AbbVie traded independently, pharmaceutical investors gave it the premium multiple it deserved. A dramatic illustration of single-asset value discovery through a tax-efficient separation.",
    lessonColor: "emerald",
  },
];

export default function ReverseMorrisTrustClientEn() {
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
              <span className="text-xs text-gray-400">Deal Structure</span>
              <span className="text-xs text-gray-300 dark:text-gray-600">/</span>
              <span className="text-xs text-gray-400">Reverse Morris Trust</span>
            </div>
            <span className="inline-block text-xs font-medium bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300 rounded-full px-3 py-1 mb-4">
              Deal Structure
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              Reverse Morris Trust — Divesting a Business Unit Tax-Free
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              The advanced deal structure that combines a spin-off with a merger to avoid billions in capital gains tax. Step-by-step mechanics, the 50% ownership requirement, and case studies: AT&T×WarnerMedia and Abbott×AbbVie.
            </p>

            {/* Quick navigation */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { href: "#definition", label: "What is RMT?", color: "indigo" },
                { href: "#steps", label: "Step-by-Step Structure", color: "emerald" },
                { href: "#pros-cons", label: "Why It's Used & Constraints", color: "amber" },
                { href: "#cases", label: "Case Studies", color: "blue" },
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

          {/* ── 1. What is RMT ── */}
          <motion.section id="definition" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">What Is a Reverse Morris Trust?</h2>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                A <strong className="text-gray-800 dark:text-gray-200">Reverse Morris Trust (RMT)</strong> is an advanced M&A structure that allows a parent company to transfer a business unit to a strategic partner on a tax-free or tax-deferred basis. It achieves this by sequentially combining a tax-free spin-off (IRC Section 355) with a tax-free reorganization merger (IRC Section 368).
              </p>
              <p>
                The structure unfolds in two steps: ① the parent <strong className="text-gray-800 dark:text-gray-200">spins off</strong> the business unit into a standalone legal entity (NewCo), and ② NewCo <strong className="text-gray-800 dark:text-gray-200">merges</strong> with a strategic partner — the acquirer.
              </p>
              <p>
                The original <strong className="text-gray-800 dark:text-gray-200">Morris Trust</strong> involved the parent company merging directly with its counterpart. The RMT reverses the order — separation first, then merger — which flips the applicable size requirements. This distinction matters for the 50% ownership test.
              </p>
            </div>

            {/* Key requirements box */}
            <div className="mt-5 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20 p-5">
              <p className="text-xs font-bold text-indigo-700 dark:text-indigo-300 mb-3">⚖️ Core RMT Requirements</p>
              <div className="space-y-2">
                {[
                  "After the merger, former parent shareholders (now NewCo shareholders) must hold at least 50.1% of the merged entity",
                  "The spin-off must qualify as tax-free under IRC Section 355",
                  "The merger must qualify as a tax-free reorganization under IRC Section 368",
                  "It is standard practice to obtain a Private Letter Ruling (PLR) from the IRS before proceeding",
                ].map((req, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-indigo-800 dark:text-indigo-200">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-indigo-500" />
                    {req}
                  </div>
                ))}
              </div>
            </div>

            {/* Analogy box */}
            <div className="mt-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 Think of it this way</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                You want to sell your house, but the capital gains tax would be enormous. So you transfer the house to your child (the spin-off), and that child then forms a joint real estate company with the buyer (the merger) — effectively selling the house while avoiding a direct taxable sale. The catch: your child must own more than 50% of the new company.
              </p>
            </div>

            {/* Key insight box */}
            <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Key Insight</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                An RMT is effectively a tax-free M&A. For the parent, it is a way to divest a business unit without triggering corporate-level capital gains tax. This works because two independently tax-free transactions — a spin-off and a merger — are sequenced together. Neither step alone is an M&A; in combination, they accomplish one.
              </p>
            </div>
          </motion.section>

          {/* ── 2. Step-by-Step Structure ── */}
          <motion.section id="steps" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">The RMT Structure — Step by Step</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              An RMT is a multi-step structure where each stage has direct implications for tax treatment and ownership requirements. Understanding the sequence precisely is essential.
            </p>

            <div className="space-y-4">
              {RMT_STEPS.map((step, i) => {
                const c = COLOR_MAP[step.color];
                return (
                  <div key={i} className="flex gap-4 items-start">
                    {/* Step number */}
                    <div className={`shrink-0 rounded-xl px-3 py-2 text-center min-w-[72px] border ${c.border} ${c.bg}`}>
                      <p className={`text-xs font-bold ${c.text}`}>{step.step}</p>
                      <p className="text-lg">{step.icon}</p>
                    </div>

                    {/* Content */}
                    <div className={`flex-1 rounded-xl border ${c.border} ${c.bg} p-4`}>
                      <h3 className={`text-sm font-bold ${c.text} mb-1`}>{step.title}</h3>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-2">{step.desc}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{step.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Structure diagram */}
            <div className="mt-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5">
              <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-4">📊 RMT Structure Diagram</p>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="shrink-0 font-semibold text-gray-800 dark:text-gray-200">Parent Co.</span>
                  <span className="text-gray-400">→ spin-off →</span>
                  <span className="shrink-0 font-semibold text-emerald-700 dark:text-emerald-300">NewCo (separated entity)</span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="shrink-0 font-semibold text-emerald-700 dark:text-emerald-300">NewCo</span>
                  <span className="text-gray-400">+ merger +</span>
                  <span className="shrink-0 font-semibold text-violet-700 dark:text-violet-300">Strategic Partner</span>
                  <span className="text-gray-400">→</span>
                  <span className="shrink-0 font-semibold text-indigo-700 dark:text-indigo-300">Merged NewCo</span>
                </div>
                <div className="mt-3 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                  <p className="text-xs font-semibold text-indigo-700 dark:text-indigo-300">Requirement: former parent shareholders must hold ≥ 50.1% of Merged NewCo</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── 3. Why It's Used & Constraints ── */}
          <motion.section id="pros-cons" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Why Companies Use RMT — and Why It's Not for Everyone</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              An RMT delivers powerful tax savings, but its strict structural requirements mean it is not available to every company or every deal.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Why it's used */}
              <div>
                <h3 className="text-sm font-bold text-emerald-700 dark:text-emerald-300 mb-3">✅ Why Companies Use It</h3>
                <div className="space-y-3">
                  {PROS.map((pro, i) => {
                    const c = COLOR_MAP[pro.color];
                    return (
                      <div key={i} className={`rounded-lg border ${c.border} ${c.bg} p-3`}>
                        <div className="flex items-start gap-2">
                          <span className="text-lg shrink-0">{pro.icon}</span>
                          <div>
                            <h4 className={`text-xs font-bold ${c.text} mb-1`}>{pro.title}</h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{pro.desc}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Constraints */}
              <div>
                <h3 className="text-sm font-bold text-rose-700 dark:text-rose-300 mb-3">⚠️ Constraints and Risks</h3>
                <div className="space-y-3">
                  {CONS.map((con, i) => {
                    const c = COLOR_MAP[con.color];
                    return (
                      <div key={i} className={`rounded-lg border ${c.border} ${c.bg} p-3`}>
                        <div className="flex items-start gap-2">
                          <span className="text-lg shrink-0">{con.icon}</span>
                          <div>
                            <h4 className={`text-xs font-bold ${c.text} mb-1`}>{con.title}</h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{con.desc}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Analogy */}
            <div className="mt-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 Think of it this way</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                An RMT is the pinnacle of advanced tax planning — like the most intricate asset transfer structure a top-tier tax attorney can design. When all conditions are met, it can save billions. But if even one condition fails, the entire structure collapses and may result in an even larger tax bill than a straightforward direct sale.
              </p>
            </div>
          </motion.section>

          {/* ── 4. Case Studies ── */}
          <section id="cases">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Case Studies</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Two landmark RMT transactions that show how the structure works in practice — and what happens after the deal closes.
              </p>
            </motion.div>

            <div className="space-y-8">
              {CASES.map((caseItem, idx) => {
                const tc = COLOR_MAP[caseItem.typeColor];
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
                        <span className={`inline-block text-xs font-medium rounded-full px-2.5 py-0.5 mb-2 ${tc.badge}`}>
                          {caseItem.typeLabel}
                        </span>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{caseItem.title}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{caseItem.dealContext}</p>
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
                      <div className={`rounded-lg p-3 border ${COLOR_MAP[caseItem.lessonColor].border} ${COLOR_MAP[caseItem.lessonColor].bg}`}>
                        <p className={`text-xs font-semibold ${COLOR_MAP[caseItem.lessonColor].text} mb-1`}>🔑 Key Takeaway</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{caseItem.lesson}</p>
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
              {[
                { href: "/en/deal-101/spinoff", title: "Spin-off", desc: "Step 1 of an RMT — the mechanics of business unit separation and conglomerate discount elimination", badge: "Deal Structure" },
                { href: "/en/deal-101/ma-process", title: "M&A Process", desc: "The full deal execution workflow, including the IRS PLR approval process inside an RMT", badge: "Deal Process" },
                { href: "/en/deal-101/antitrust", title: "Antitrust Regulation", desc: "How FTC and DOJ antitrust review applies to RMT transactions involving large business units", badge: "Regulation" },
                { href: "/en/deal-101/ipo-vs-ma-exit", title: "IPO vs M&A Exit", desc: "Comparing RMT, spin-off, and carve-out — choosing the right structure for a business unit divestiture", badge: "Deal Structure" },
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
