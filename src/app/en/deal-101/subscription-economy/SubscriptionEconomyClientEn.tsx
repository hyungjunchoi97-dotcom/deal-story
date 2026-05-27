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

// ── Subscription model types ─────────────────────────────────────
const SUBSCRIPTION_TYPES = [
  {
    id: "saas",
    label: "SaaS (Software as a Service)",
    color: "blue",
    margin: "70%+ gross margin",
    examples: ["Salesforce", "Microsoft 365", "Adobe Creative Cloud"],
    desc: "Monthly software subscription. Delivered via the cloud, marginal costs are near zero and the margin profile is exceptional. Network effects and switching costs create powerful lock-in.",
    maNote: "SaaS companies are valued on ARR multiples. Growth rate and NRR are the primary valuation drivers.",
  },
  {
    id: "content",
    label: "Content Subscription",
    color: "violet",
    margin: "30–50% (before content costs)",
    examples: ["Netflix", "Spotify", "New York Times"],
    desc: "Regular access to digital content. Content creation and licensing costs are the key variable. Subscribers × ARPU is the most important KPI.",
    maNote: "Content IP and the subscriber database are the core assets in any acquisition.",
  },
  {
    id: "ecommerce",
    label: "E-commerce Subscription",
    color: "emerald",
    margin: "High on membership; low overall",
    examples: ["Amazon Prime", "Costco membership", "Coupang Rocket Wow"],
    desc: "Regular delivery plus membership. The annual fee itself matters less than the incremental spend by subscribers. Lock-in effect reduces customer churn across the entire platform.",
    maNote: "Annual Spend per Subscriber is the central value metric in acquisition analysis.",
  },
  {
    id: "product",
    label: "Product Subscription",
    color: "orange",
    margin: "Low on hardware; high on software",
    examples: ["Tesla FSD", "Apple One", "Dollar Shave Club"],
    desc: "Hardware plus software bundled together. Hardware margins are thin, but recurring software subscription revenue compensates over time. Revenue continues after the product is sold.",
    maNote: "The installed hardware base sets the ceiling for subscription revenue — it must be protected and grown.",
  },
];

// ── Valuation comparison table ───────────────────────────────────
const VALUATION_TABLE = [
  { category: "Typical Multiple", oneTime: "EV/EBITDA 8–12x", subscription: "EV/ARR 10–20x+" },
  { category: "Revenue Predictability", oneTime: "Low (high quarterly variance)", subscription: "High (ARR as forward indicator)" },
  { category: "Churn Risk", oneTime: "Low (transaction complete)", subscription: "Gross Churn is the critical risk" },
  { category: "Growth Momentum KPI", oneTime: "New orders, backlog", subscription: "NRR, Net New ARR" },
  { category: "Acquirer Focus", oneTime: "Assets, customers, technology", subscription: "ARR quality, churn rate, LTV/CAC" },
  { category: "PMI Synergy Type", oneTime: "Cost reduction focused", subscription: "ARR synergy + cross-sell potential" },
];

// ── Case studies ─────────────────────────────────────────────────
const CASES = [
  {
    company: "Adobe's Subscription Pivot — \"Short-Term Pain, Long-Term Dominance\"",
    type: "Subscription Transition Success",
    typeColor: "violet",
    timeline: [
      "2013: Creative Suite (perpetual license, ~$2,600) → Creative Cloud (monthly $50) forced transition",
      "Post-transition: stock at $40, heavy shareholder backlash",
      "2021: stock $700+, market cap $330B+ (approximately 33x growth)",
      "2022: Adobe attempts to acquire Figma ($20B) — subscription ecosystem expansion",
    ],
    analogy:
      "Tell your loyal regulars: 'Instead of paying the full bill at once, you'll now pay a smaller amount every month.' They grumble at first. But if you keep improving the menu and adding new dishes each month, they stay longer and spend more in total.",
    paragraphs: [
      "In 2013, Adobe made a decision that shook the industry. It stopped selling Creative Suite perpetual licenses (~$2,600) and forced customers onto Creative Cloud at $50/month. The stock sat around $40, shareholders revolted, and near-term revenue collapsed.",
      "Why it worked. First, Adobe's file formats (PSD, AI, PDF) created enormous switching costs. Moving to a competing product meant disrupting existing files, plugins, and workflows across entire organizations. Second, monthly updates meant customers always had the latest version. Third, cloud collaboration features strengthened team-level lock-in, not just individual.",
      "Outcome: Creative Cloud subscribers grew into the tens of millions. Adobe's market cap, approximately $10B in 2012, reached $330B at its 2021 peak — roughly 33x growth. This was not a pricing model adjustment. It was a complete business model reconstruction.",
    ],
    lesson:
      "A successful subscription transition fundamentally changes M&A valuation benchmarks. When Adobe pursued Figma at $20B (ultimately blocked by regulators), the high-ARR acquirer could credibly justify that price. Subscription-based acquirers can always pay more — because they model recurring revenue synergies, not one-time integration savings.",
    maMetric: "ARR multiple + NRR + LTV/CAC",
    maColor: "violet",
  },
  {
    company: "Microsoft 365 — The Enterprise Subscription Playbook",
    type: "Subscription Model Dominance",
    typeColor: "blue",
    timeline: [
      "Office suite (perpetual license, ~$400) → Microsoft 365 (monthly $12.50–$35/user)",
      "2023: Microsoft Commercial Cloud ARR surpasses $110B",
      "Teams bundling creates competitive advantage over Slack; maximizes switching costs",
      "Nuance acquisition (2022, $19.7B): AI voice recognition → healthcare subscription expansion",
    ],
    analogy:
      "Once an entire company runs on Word, Excel, Teams, and Outlook, switching to a competitor is not just a software decision — it means retraining staff, resolving file compatibility issues, and rebuilding workflows from scratch. The real switching cost is far higher than any subscription fee.",
    paragraphs: [
      "Microsoft's Office-to-Microsoft 365 transition is the definitive enterprise subscription playbook. Moving from a ~$400 perpetual license to $12.50–$35 per user per month looked like a per-unit price cut at first — but user count and ARR growth more than compensated over time, by multiples.",
      "Bundling Teams was the decisive move. Enterprises already paying tens of millions of dollars annually for Slack and simultaneously using Microsoft 365 faced overwhelming economic incentives to consolidate on Teams. During the pandemic in 2020–2021, Microsoft Teams monthly active users surged from tens of millions to hundreds of millions.",
      "The 2022 Nuance acquisition ($19.7B) is a subscription ecosystem expansion play. Integrating AI speech recognition into medical and enterprise subscription services was designed to grow ARR in the healthcare vertical. When a subscription company acquires another subscription company, ARR synergies are immediately visible — which is exactly why premium prices are easier to justify.",
    ],
    lesson:
      "When a subscription acquirer buys another subscription business, ARR synergies are visible from day one — making premium prices straightforward to justify. Nuance's AI technology, integrated into Microsoft's existing subscription base, immediately expands the addressable ARR of new subscription products like Dragon Medical. This is the fundamental reason M&A premiums are structurally higher in the subscription economy.",
    maMetric: "Commercial Cloud ARR + NRR + bundling effect",
    maColor: "blue",
  },
];

export default function SubscriptionEconomyClientEn() {
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
            <span className="inline-block text-xs font-medium bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300 rounded-full px-3 py-1 mb-4">
              Strategy
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              Subscription Economy — How Recurring Revenue Rewrites M&A Valuation
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              Four subscription model types, how ARR, NRR, and LTV/CAC drive enterprise value, and case studies on Adobe and Microsoft 365.
            </p>

            {/* Quick nav */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { href: "#definition", label: "What Is It?", color: "blue" },
                { href: "#types", label: "4 Model Types", color: "violet" },
                { href: "#valuation", label: "Valuation Impact", color: "emerald" },
                { href: "#cases", label: "Case Studies", color: "rose" },
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

          {/* ── 1. What is the Subscription Economy ── */}
          <motion.section id="definition" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">What Is the Subscription Economy?</h2>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                The subscription economy is a business model in which <strong className="text-gray-800 dark:text-gray-200">customers pay a recurring fee for access to a product or service rather than owning it outright</strong>. Unlike one-time sales, revenue is recognized over the contract period — dramatically increasing predictability.
              </p>
              <p>
                In M&A, the subscription economy matters because of the <strong className="text-gray-800 dark:text-gray-200">ARR (Annual Recurring Revenue) multiple premium</strong>. Acquirers are both willing and able to justify paying significantly higher prices for subscription businesses.
              </p>
            </div>

            {/* One-time vs subscription comparison */}
            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5">
                <p className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-2">One-Time Sales Model</p>
                <ul className="space-y-1.5">
                  {[
                    "Revenue recognized at point of sale",
                    "Next quarter's revenue is uncertain",
                    "Hard to track customer retention",
                    "EV/EBITDA 8–12x multiple",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-gray-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-900/20 p-5">
                <p className="text-xs font-bold text-violet-700 dark:text-violet-300 mb-2">Subscription Model</p>
                <ul className="space-y-1.5">
                  {[
                    "Revenue recognized over the contract period",
                    "ARR makes future revenue forecastable",
                    "NRR and Churn measure business health",
                    "EV/ARR 10–20x+ multiple",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-violet-700 dark:text-violet-300">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-violet-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Analogy */}
            <div className="mt-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 Think of it this way</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                Selling a refrigerator vs renting one. From the seller's perspective, receiving $80/month for 13 months is already more valuable than a one-time $1,000 payment — because the average customer uses it for five years. Over five years, that's $4,800 versus $1,000. Acquirers price this difference directly into their valuation models.
              </p>
            </div>

            {/* Key Insight */}
            <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Key Insight</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                Recurring revenue = predictability = lower discount rate = higher enterprise value. This is the fundamental logic behind subscription companies commanding 2–3x higher EV multiples than one-time sales businesses of equivalent revenue scale.
              </p>
            </div>
          </motion.section>

          {/* ── 2. Four model types ── */}
          <motion.section id="types" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Four Subscription Model Types</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              The subscription economy is not a single model. Each type has a distinct margin structure, key KPIs, and M&A valuation approach.
            </p>
            <div className="space-y-5">
              {SUBSCRIPTION_TYPES.map((type) => {
                const c = COLOR_MAP[type.color];
                return (
                  <div key={type.id} className={`rounded-xl border ${c.border} ${c.bg} p-5`}>
                    <div className="flex items-start justify-between gap-3 flex-wrap mb-3">
                      <div>
                        <h3 className={`text-sm font-bold ${c.text}`}>{type.label}</h3>
                        <div className="flex flex-wrap gap-1.5 mt-1.5">
                          {type.examples.map((ex, i) => (
                            <span key={i} className={`text-[10px] font-medium rounded-full px-2 py-0.5 ${c.badge}`}>{ex}</span>
                          ))}
                        </div>
                      </div>
                      <span className={`shrink-0 text-xs font-medium rounded-full px-3 py-1 ${c.badge}`}>
                        {type.margin}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{type.desc}</p>
                    <div className={`text-xs rounded-lg px-3 py-2 ${c.bg} border ${c.border} ${c.text}`}>
                      📊 M&A Lens: {type.maNote}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ── 3. Valuation impact ── */}
          <motion.section id="valuation" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">How the Subscription Economy Rewrites M&A Valuation</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              Subscription businesses are evaluated on entirely different metrics than one-time sales companies. Predictability and growth momentum are what matter most.
            </p>

            {/* Multiple comparison table */}
            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60">
                    <th className="text-left text-xs font-bold text-gray-600 dark:text-gray-400 px-4 py-3 w-1/3">Category</th>
                    <th className="text-left text-xs font-bold text-gray-600 dark:text-gray-400 px-4 py-3 w-1/3">One-Time Sales</th>
                    <th className="text-left text-xs font-bold text-violet-700 dark:text-violet-300 px-4 py-3 w-1/3">Subscription Model</th>
                  </tr>
                </thead>
                <tbody>
                  {VALUATION_TABLE.map((row, i) => (
                    <tr key={i} className={`border-b border-gray-100 dark:border-gray-700/50 ${i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50/50 dark:bg-gray-800/20"}`}>
                      <td className="px-4 py-3 text-xs font-semibold text-gray-700 dark:text-gray-300">{row.category}</td>
                      <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400">{row.oneTime}</td>
                      <td className="px-4 py-3 text-xs text-violet-700 dark:text-violet-300 font-medium">{row.subscription}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Adobe highlights */}
            <div className="rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/20 p-5 mb-5">
              <p className="text-xs font-bold text-emerald-700 dark:text-emerald-300 mb-3">📈 What Adobe's Subscription Pivot Proved</p>
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-xl font-bold text-gray-900 dark:text-gray-100">$10B</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Market cap in 2012 (pre-transition)</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400">$330B</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">2021 peak market cap</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-violet-600 dark:text-violet-400">33x</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Market cap growth in ~9 years</p>
                </div>
              </div>
              <p className="mt-4 text-xs text-emerald-700 dark:text-emerald-300">
                Near-term revenue fell sharply post-transition — then ARR exploded. Short-term pain turned into long-term dominance. The textbook subscription pivot.
              </p>
            </div>

            {/* Key metrics */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5">
              <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-3">Essential Metrics to Verify in Subscription M&A Due Diligence</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { metric: "ARR (Annual Recurring Revenue)", desc: "Annual recurring revenue — the reference point for subscription company valuation" },
                  { metric: "MRR (Monthly Recurring Revenue)", desc: "Monthly recurring revenue — tracks short-term trends and momentum" },
                  { metric: "NRR (Net Revenue Retention)", desc: "Above 100% means growth from existing customers alone, before any new sales" },
                  { metric: "Gross Churn", desc: "Percentage of ARR lost from cancellations — lower is better" },
                  { metric: "LTV (Customer Lifetime Value)", desc: "Total revenue generated by one customer over their lifetime" },
                  { metric: "CAC (Customer Acquisition Cost)", desc: "Cost to acquire one customer. LTV/CAC ≥ 3 is a healthy benchmark" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-violet-500" />
                    <div>
                      <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">{item.metric}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Key Insight</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                A subscription company with NRR above 100% grows purely from upselling and expanding existing accounts — without any new customers. That is the single most powerful argument for the premium that investors and acquirers pay for high-quality subscription businesses.
              </p>
            </div>
          </motion.section>

          {/* ── 4. Case studies ── */}
          <section id="cases">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Case Studies — How Subscription Transitions Redefined M&A Valuation</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Adobe and Microsoft are the two most dramatic demonstrations of how a subscription model transition can redefine a company's value and its capacity to pay acquisition premiums.
              </p>
            </motion.div>

            <div className="space-y-8">
              {CASES.map((caseItem, idx) => {
                const typeC = COLOR_MAP[caseItem.typeColor];
                const maC = COLOR_MAP[caseItem.maColor];
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
                      <div className={`text-xs font-medium rounded-lg px-3 py-2 ${maC.bg} ${maC.text} border ${maC.border}`}>
                        📊 Key Metrics: {caseItem.maMetric}
                      </div>
                    </div>

                    <div className="p-5 space-y-4">
                      {/* Timeline */}
                      <div>
                        <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">Key Milestones</h4>
                        <ul className="space-y-1">
                          {caseItem.timeline.map((event, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${maC.dot}`} />
                              {event}
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
                { href: "/en/deal-101/saas-valuation", title: "SaaS Valuation", desc: "How ARR multiples, Rule of 40, and NRR drive SaaS enterprise value", badge: "Valuation" },
                { href: "/en/deal-101/arr-multiple", title: "ARR Multiple", desc: "The core multiple for subscription companies and how growth/churn interact", badge: "Valuation" },
                { href: "/en/deal-101/platform-strategy", title: "Platform Strategy", desc: "Network effects and lock-in when subscription meets platform dynamics", badge: "Strategy" },
                { href: "/en/deal-101/pmi", title: "PMI (Post-Merger Integration)", desc: "How to realize ARR synergies in subscription company integrations", badge: "Deal Structure" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group block p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-violet-300 dark:hover:border-violet-600 transition-colors"
                >
                  <span className="text-[10px] font-medium bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300 rounded-full px-2 py-0.5">
                    {item.badge}
                  </span>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mt-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
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
