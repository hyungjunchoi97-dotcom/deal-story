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

// ── Network effects data ─────────────────────────────────────────
const NETWORK_EFFECTS = [
  {
    id: "direct",
    label: "Direct Network Effect",
    subtitle: "Same-side network growth",
    color: "blue",
    description: "Each new user on the same side of the platform makes the service more valuable for every existing user on that side. The network becomes more useful simply because more people are on it.",
    examples: ["WhatsApp, KakaoTalk — more friends = more value", "Telephone networks — more subscribers = more people you can call", "Zoom — more colleagues using it = harder to justify switching"],
  },
  {
    id: "indirect",
    label: "Indirect Network Effect",
    subtitle: "Cross-side network growth",
    color: "violet",
    description: "Growth on one side of the platform increases value for the other side — and vice versa. This two-sided flywheel is the defining feature of marketplace and platform businesses.",
    examples: ["More iOS users → more app developers → better apps → more iOS users", "More Uber riders → more drivers → shorter wait times → more riders", "More Airbnb travelers → more hosts → more listings → more travelers"],
  },
  {
    id: "data",
    label: "Data Network Effect",
    subtitle: "Algorithmic improvement through scale",
    color: "emerald",
    description: "More users generate more data → better AI and algorithms → better product → more users. Data functions as a moat because incumbents hold data that competitors cannot replicate regardless of capital.",
    examples: ["Google Search — more queries = more accurate results", "Netflix recommendations — more viewing data = better personalization", "Waze — more drivers = more precise real-time traffic"],
  },
  {
    id: "supply",
    label: "Supply-side Network Effect",
    subtitle: "More suppliers, more value for consumers",
    color: "orange",
    description: "As more suppliers (sellers, developers, creators) join the platform, the variety and quality available to consumers improves — which in turn attracts more consumers, which attracts more suppliers.",
    examples: ["Amazon Marketplace — more sellers = more product selection", "App Store — more developers = richer app ecosystem", "YouTube — more creators = more content = more watch time"],
  },
];

// ── M&A acquisition rationale ───────────────────────────────────
const MA_REASONS = [
  { icon: "🌐", title: "Acquire Network Effects Instantly", color: "blue", desc: "Building a platform from scratch takes a decade. Acquiring one that has already crossed the critical mass threshold gives you the network effects immediately. That's why acquirers pay a premium." },
  { icon: "👥", title: "Secure a User Base", color: "violet", desc: "DAU (daily active users) and MAU (monthly active users) are the source of future revenue. Buying an existing user base is far faster than building one organically." },
  { icon: "📊", title: "Acquire Proprietary Data Assets", color: "emerald", desc: "Years of accumulated behavioral data from a platform is a non-replicable asset. No amount of capital can compress the time needed to build an equivalent dataset." },
  { icon: "🏗️", title: "Enter or Block a Competing Ecosystem", color: "amber", desc: "Gain a foothold in an ecosystem you couldn't access organically — or prevent a rival platform from threatening your existing ecosystem before it reaches critical mass." },
  { icon: "🛡️", title: "Eliminate a Potential Competitor", color: "rose", desc: "Pre-emptively acquire a platform that could become a competitive threat. Meta's acquisitions of Instagram and WhatsApp are the canonical examples of this playbook." },
];

// ── Case studies ─────────────────────────────────────────────────
const CASES = [
  {
    title: "Google × YouTube ($1.65B, 2006)",
    subtitle: "One of the highest-ROI acquisitions in history",
    typeColor: "emerald",
    type: "Historic Success",
    background: "YouTube was 18 months old, had 65 employees, and was generating almost no revenue. Google Video was losing ground in the online video race.",
    strategy: "Acquire the platform before its network effects crossed the tipping point. A two-sided network between content creators and viewers was already forming.",
    result: "YouTube generated approximately $31B in ad revenue in 2023 alone — over 18x the $1.65B acquisition price, annually.",
    synergy: "Google's infrastructure (CDN, AdSense ad system) combined with YouTube's network effects. The pairing was the core of the value creation.",
    lesson: "A platform's value is not in its current revenue — it's in whether its network is approaching a tipping point. Paying $1.65B for an 18-month-old company with near-zero revenue wasn't reckless. It was reading the network correctly.",
  },
  {
    title: "Microsoft × LinkedIn ($26.2B, 2016) + GitHub ($7.5B, 2018)",
    subtitle: "Building a professional and developer platform ecosystem",
    typeColor: "blue",
    type: "Strategic Ecosystem Play",
    background: "LinkedIn: 430M professional social graph + job market data. GitHub: 28M developer code collaboration platform.",
    strategy: "Promise independence to preserve platform trust, while quietly expanding the connection points to Microsoft's enterprise ecosystem.",
    result: "LinkedIn × Microsoft Dynamics (CRM) integration, GitHub × Azure DevOps, and GitHub Copilot — an AI coding assistant built on the world's largest code repository.",
    synergy: "Connecting two distinct professional platforms (professional network + developer network) to strengthen Microsoft's enterprise ecosystem flywheel.",
    lesson: "Preserving platform independence after acquisition creates more value, not less. Ecosystem connection outperforms forced integration as the platform M&A playbook.",
  },
];

export default function PlatformStrategyClientEn() {
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
            <span className="inline-block text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 rounded-full px-3 py-1 mb-4">
              Strategy
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              Platform Strategy — The M&A Premium That Network Effects Create
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              Platform vs pipeline, four types of network effects, five reasons acquirers pay premiums for platforms, and case studies on Google×YouTube and Microsoft×LinkedIn/GitHub.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { href: "#definition", label: "What Is a Platform?", color: "blue" },
                { href: "#network-effects", label: "4 Network Effects", color: "violet" },
                { href: "#ma-reasons", label: "5 Acquisition Rationales", color: "emerald" },
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

          {/* ── 1. What Is a Platform ── */}
          <motion.section id="definition" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">What Is a Platform</h2>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                A platform is <strong className="text-gray-800 dark:text-gray-200">infrastructure that connects two or more distinct user groups</strong>, each providing value to the other through the platform.
              </p>
              <p>
                The contrast with a pipeline business is central to understanding platform strategy. A pipeline creates value by transforming inputs into outputs and delivering them to end consumers — a one-way flow. A platform facilitates bilateral exchange between producers and consumers, and the platform itself is the infrastructure that makes that exchange possible.
              </p>
              <p>
                In M&A, platforms matter because the competitive moat created by network effects cannot be replicated in the short term. A platform that has crossed critical mass converges toward a winner-takes-most structure. Acquirers pay large premiums to own that structure.
              </p>
            </div>

            {/* Pipeline vs Platform comparison table */}
            <div className="mt-5 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60">
                    <th className="text-left text-xs font-bold text-gray-600 dark:text-gray-400 px-4 py-3 w-1/3">Dimension</th>
                    <th className="text-left text-xs font-bold text-gray-700 dark:text-gray-300 px-4 py-3 w-1/3">Pipeline (Traditional)</th>
                    <th className="text-left text-xs font-bold text-blue-700 dark:text-blue-300 px-4 py-3 w-1/3">Platform Business</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { category: "Value flow", pipeline: "One-way (producer → consumer)", platform: "Two-way (producer ↔ consumer)" },
                    { category: "Core asset", pipeline: "Factories, inventory, workforce", platform: "User network, data" },
                    { category: "Growth model", pipeline: "Linear via capital investment", platform: "Exponential via network effects" },
                    { category: "Competitive moat", pipeline: "Capital, brand", platform: "Network effects (non-replicable)" },
                    { category: "Examples", pipeline: "Toyota, Samsung, Nike", platform: "Uber, Airbnb, App Store" },
                  ].map((row, i) => (
                    <tr key={i} className={`border-b border-gray-100 dark:border-gray-700/50 ${i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50/50 dark:bg-gray-800/20"}`}>
                      <td className="px-4 py-3 text-xs font-semibold text-gray-700 dark:text-gray-300">{row.category}</td>
                      <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400">{row.pipeline}</td>
                      <td className="px-4 py-3 text-xs text-blue-600 dark:text-blue-400 font-medium">{row.platform}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Analogy */}
            <div className="mt-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 Think of it this way</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                A traditional business is a well — someone draws water and sells it. A platform is a water main. Once it connects every source (producer) to every home (consumer), all the water flows through that pipe. A competitor can dig a new well, but replacing a water main that's already connected to the entire city is a different challenge entirely.
              </p>
            </div>

            {/* Insight */}
            <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Key Insight</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                Platform companies command EV/EBITDA multiples of 20–40x or higher — not simply because of high growth rates, but because of structural defensibility. The moat is the network itself, and the network compounds as long as users keep joining.
              </p>
            </div>
          </motion.section>

          {/* ── 2. Four Types of Network Effects ── */}
          <motion.section id="network-effects" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">The Core of Platform Strategy — Four Types of Network Effects</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              A network effect is when a product or service becomes more valuable as more people use it. Not all network effects are the same — understanding the type determines how defensible a platform's moat actually is.
            </p>

            <div className="space-y-4">
              {NETWORK_EFFECTS.map((effect) => {
                const c = COLOR_MAP[effect.color];
                return (
                  <div key={effect.id} className={`rounded-xl border ${c.border} ${c.bg} p-5`}>
                    <div className="flex items-start gap-3 mb-3">
                      <div>
                        <h3 className="text-base font-bold text-gray-900 dark:text-gray-100">{effect.label}</h3>
                        <span className={`text-xs font-medium ${c.text}`}>{effect.subtitle}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{effect.description}</p>
                    <div>
                      <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">Examples</h4>
                      <ul className="space-y-1">
                        {effect.examples.map((ex, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />
                            {ex}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Key Insight</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                The most defensible platforms combine multiple network effect types simultaneously. Google has data network effects plus supply-side effects (advertisers). Amazon stacks supply-side (sellers), direct (Prime members), and data effects. The more network effect types a platform combines, the higher the M&A premium it commands.
              </p>
            </div>
          </motion.section>

          {/* ── 3. Why Acquirers Buy Platforms ── */}
          <motion.section id="ma-reasons" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Platform M&A — Why Acquirers Buy Platforms</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Strategic acquirers pay premiums for platform companies for five core reasons. In practice, most platform acquisitions are driven by more than one of these simultaneously.
            </p>

            <div className="space-y-3">
              {MA_REASONS.map((reason, i) => {
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

            <div className="mt-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 Think of it this way</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                Acquiring a platform is like buying the busiest town square in a city. It already has merchants (suppliers) and shoppers (consumers) flowing through it. Building a new square from scratch takes years of placemaking. Buying one that already has foot traffic is 10x faster — which is exactly why platforms trade at a premium.
              </p>
            </div>
          </motion.section>

          {/* ── 4. Case Studies ── */}
          <section id="cases">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Case Studies — The Platform M&A Playbook</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Both deals were criticized as overpriced at announcement. Both became among the most successful acquisitions in history.
              </p>
            </motion.div>

            <div className="space-y-8">
              {CASES.map((caseItem, idx) => {
                const typeC = COLOR_MAP[caseItem.typeColor];
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
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{caseItem.subtitle}</p>
                      </div>
                    </div>

                    <div className="p-5 space-y-4">
                      <div className="grid sm:grid-cols-2 gap-3">
                        {[
                          { label: "Background", value: caseItem.background },
                          { label: "Strategy", value: caseItem.strategy },
                          { label: "Outcome", value: caseItem.result },
                          { label: "Core Synergy", value: caseItem.synergy },
                        ].map((item, i) => (
                          <div key={i} className="bg-gray-50 dark:bg-gray-800/40 rounded-lg p-3">
                            <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">{item.label}</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.value}</p>
                          </div>
                        ))}
                      </div>

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
                { href: "/en/deal-101/competitive-moat", title: "Competitive Moat", desc: "How network effects function as a moat. Five moat types and their relationship to valuation multiples.", badge: "Strategy" },
                { href: "/en/deal-101/strategic-ma", title: "Strategic M&A", desc: "Types and decision frameworks for strategic acquisitions, including platform deals.", badge: "Strategy" },
                { href: "/en/deal-101/antitrust", title: "Antitrust Risk", desc: "Platform M&A and antitrust scrutiny — Meta and Google cases.", badge: "Regulatory" },
                { href: "/en/deal-101/synergy", title: "Synergy", desc: "Expected synergies in platform M&A — feasibility and timeline.", badge: "Valuation" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group block p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
                >
                  <span className="text-[10px] font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 rounded-full px-2 py-0.5">
                    {item.badge}
                  </span>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mt-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
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
