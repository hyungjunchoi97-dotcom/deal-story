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

// ── Restructuring methods comparison data ────────────────────────
const RESTRUCTURE_TYPES = [
  {
    name: "Spin-off",
    color: "emerald",
    cashReceived: "None",
    taxEfficiency: "Highest (tax-free)",
    ownershipChange: "New shares distributed to existing shareholders",
    bestFor: "Resolving conglomerate discount, strategic focus",
  },
  {
    name: "Carve-out / IPO",
    color: "blue",
    cashReceived: "Yes (new capital raised)",
    taxEfficiency: "Moderate",
    ownershipChange: "Partial IPO of subsidiary, parent retains stake",
    bestFor: "Raising growth capital + gaining market validation",
  },
  {
    name: "Divestiture",
    color: "amber",
    cashReceived: "Yes (cash sale)",
    taxEfficiency: "Low (capital gains tax applies)",
    ownershipChange: "Full sale to a third party",
    bestFor: "Fast cash, divesting non-core assets",
  },
  {
    name: "Split-off",
    color: "violet",
    cashReceived: "None",
    taxEfficiency: "High",
    ownershipChange: "Select shareholders exchange parent shares for subsidiary shares",
    bestFor: "Shareholder choice, ownership structure optimization",
  },
  {
    name: "Reverse Morris Trust",
    color: "indigo",
    cashReceived: "None",
    taxEfficiency: "Highest (spin-off + merger combined)",
    ownershipChange: "Spin-off then merger with strategic partner",
    bestFor: "Tax-efficient large-scale business unit M&A",
  },
];

// ── Value creation drivers ───────────────────────────────────────
const VALUE_DRIVERS = [
  {
    icon: "📉",
    title: "Eliminating the Conglomerate Discount",
    color: "emerald",
    desc: "Markets apply a single blended multiple to complex portfolios, discounting the whole. After separation, each unit gets the premium multiple appropriate for its sector.",
    detail: "A high-growth tech division trapped inside a mature industrial conglomerate will never receive a tech valuation multiple. After the spin-off, the tech unit might trade at 20–30x EV/EBITDA while the industrial unit trades at 8–12x — each properly priced for its own investor base.",
  },
  {
    icon: "🎯",
    title: "Sharper Management Focus",
    color: "blue",
    desc: "The new standalone CEO focuses entirely on one business. Strategy sharpens, capital allocation improves, and decision-making accelerates.",
    detail: "Inside a conglomerate, growth divisions often depend on cash flows from mature divisions and lose their own capacity for innovation. Independence creates direct P&L accountability and forces each team to stand on its own.",
  },
  {
    icon: "🔗",
    title: "Incentive Alignment",
    color: "violet",
    desc: "Executives of the spun-off entity now hold stock options directly tied to that specific business's share price.",
    detail: "A division head inside a large conglomerate can barely move the parent's stock price. Once independent, their decisions directly show up in the stock price — maximizing motivation and owner-operator alignment.",
  },
  {
    icon: "💼",
    title: "Reaching the Right Investor Base",
    color: "amber",
    desc: "High-growth tech divisions attract growth investors; steady cash-flow businesses attract value and income investors.",
    detail: "When the investor base doesn't match the business profile, the stock trades at a discount. Separation lets each investor type choose exactly what they want — increasing demand and adding a valuation premium for both.",
  },
];

// ── Case study data ──────────────────────────────────────────────
const CASES = [
  {
    title: "PayPal × eBay Separation (2015)",
    dealContext: "Icahn activist pressure → 1 PayPal share distributed per 1 eBay share held",
    color: "blue",
    typeLabel: "Successful Spin-off",
    typeColor: "emerald",
    analogy: "When a fintech payments company and an e-commerce marketplace share the same stock ticker, the payments business gets stuck with an e-commerce multiple. Separate them and each gets a proper price tag.",
    paragraphs: [
      "eBay and PayPal had been a combined conglomerate since 2002. For years, PayPal was viewed merely as eBay's payment infrastructure. But the smartphone era and the fintech boom made PayPal's standalone growth potential unmistakably clear. In 2014, billionaire activist Carl Icahn pushed hard for the separation.",
      "In July 2015, eBay spun off PayPal. eBay shareholders received one PayPal share for every eBay share they held. At separation, PayPal's market cap was approximately $47B.",
      "The result was dramatic. As an independent fintech growth stock, PayPal was re-rated by the market and surpassed a $340B market cap at its 2021 peak. eBay, freed to focus purely on e-commerce, also improved its profitability and capital returns.",
    ],
    lesson: "While combined, PayPal's fintech potential was buried inside eBay's e-commerce valuation multiple. The separation benefited both businesses. A textbook case of conglomerate discount elimination.",
    lessonColor: "blue",
  },
  {
    title: "GE's Three-Way Break-Up (2021–2024) — The Largest Corporate Dismantling in History",
    dealContext: "GE HealthCare (2023 IPO) → GE Vernova (2024 spin-off) → GE Aerospace (remaining)",
    color: "rose",
    typeLabel: "100-Year Conglomerate Dissolved",
    typeColor: "rose",
    analogy: "A century-old department store selling appliances, healthcare, energy, and jet engines under one roof meant no department could compete on a specialist's terms. Break it apart and each specialist shop finally gets what it's worth.",
    paragraphs: [
      "Founded in 1892, GE was once the world's largest company by market cap. But decades of operating appliances, medical devices, energy, financial services, and aviation under one roof took their toll. GE was removed from the Dow Jones Industrial Average in 2018.",
      "In 2021, CEO Larry Culp made the historic call: split GE into three independent publicly traded companies. GE HealthCare listed first in 2023 (valued at roughly $25B at IPO). GE Vernova — the energy division — separated in 2024 and rose quickly on power transition demand. The remaining business became GE Aerospace.",
      "After the break-up, the combined market cap of the three entities far exceeded GE's market cap as a single entity. A hundred years of conglomerate discount was finally resolved.",
    ],
    lesson: "Even a 100-year-old conglomerate can and should be broken up when the parts are worth more than the whole. GE stands as the largest case study in conglomerate discount resolution — and proof that sum-of-the-parts value is real.",
    lessonColor: "rose",
  },
];

export default function SpinoffClientEn() {
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
              <span className="text-xs text-gray-400">Spin-off</span>
            </div>
            <span className="inline-block text-xs font-medium bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300 rounded-full px-3 py-1 mb-4">
              Deal Structure
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              Spin-off — Unlocking Hidden Value by Separating Business Units
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              The go-to tool for resolving conglomerate discount. What spin-offs are, why they are tax-efficient, and how they create value — through the PayPal and GE case studies.
            </p>

            {/* Quick navigation */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { href: "#definition", label: "What is a Spin-off?", color: "violet" },
                { href: "#comparison", label: "Restructuring Methods", color: "blue" },
                { href: "#value", label: "Value Creation", color: "emerald" },
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

          {/* ── 1. What is a Spin-off ── */}
          <motion.section id="definition" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">What Is a Spin-off?</h2>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                A <strong className="text-gray-800 dark:text-gray-200">spin-off</strong> is a corporate restructuring in which a parent company separates a business unit into an independent legal entity and distributes shares in that new entity to existing shareholders at no cost.
              </p>
              <p>
                The defining feature is that <strong className="text-gray-800 dark:text-gray-200">no cash changes hands</strong>. The parent doesn't sell the division for cash — it distributes shares of the new entity to its existing shareholders.
                This structure creates significant tax advantages: under U.S. tax law (IRC Section 355), a qualifying spin-off can be executed on a tax-free or tax-deferred basis.
              </p>
            </div>

            {/* Three-way comparison */}
            <div className="mt-5 grid sm:grid-cols-3 gap-3">
              {[
                {
                  method: "Spin-off",
                  color: "emerald",
                  features: ["No cash received", "New shares distributed to existing shareholders", "Highest tax efficiency"],
                },
                {
                  method: "Carve-out / IPO",
                  color: "blue",
                  features: ["New capital raised", "Partial IPO on public markets", "Parent retains partial ownership"],
                },
                {
                  method: "Divestiture",
                  color: "amber",
                  features: ["Cash proceeds received", "Complete sale to a third party", "Capital gains tax triggered"],
                },
              ].map((item) => {
                const c = COLOR_MAP[item.color];
                return (
                  <div key={item.method} className={`rounded-xl border ${c.border} ${c.bg} p-4`}>
                    <p className={`text-xs font-bold ${c.text} mb-2`}>{item.method}</p>
                    <ul className="space-y-1">
                      {item.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* Analogy box */}
            <div className="mt-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 Think of it this way</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                Imagine a tech company and a factory sharing one stock ticker. The market can't separate their values and applies a single blended multiple — discounting both.
                Once separated, the tech unit gets re-rated as a growth stock, and the factory gets properly valued as a stable cash-flow business. Both get their fair price.
              </p>
            </div>

            {/* Key insight box */}
            <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Key Insight</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                The essence of a spin-off is revealing hidden value that the market hasn't been able to price separately.
                When a company becomes too large and complex, splitting apart can generate more shareholder value than staying together.
              </p>
            </div>
          </motion.section>

          {/* ── 2. Restructuring Methods Comparison ── */}
          <motion.section id="comparison" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Spin-off vs Other Restructuring Methods</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Spin-offs aren't the only way to separate a business unit. The right method depends on the company's specific goals — cash needs, tax situation, and desired ownership structure.
            </p>

            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60">
                    <th className="text-left font-bold text-gray-600 dark:text-gray-400 px-4 py-3">Method</th>
                    <th className="text-left font-bold text-gray-600 dark:text-gray-400 px-4 py-3">Cash Received</th>
                    <th className="text-left font-bold text-gray-600 dark:text-gray-400 px-4 py-3">Tax Efficiency</th>
                    <th className="text-left font-bold text-gray-600 dark:text-gray-400 px-4 py-3">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {RESTRUCTURE_TYPES.map((row, i) => {
                    const c = COLOR_MAP[row.color];
                    return (
                      <tr key={i} className={`border-b border-gray-100 dark:border-gray-700/50 ${i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50/50 dark:bg-gray-800/20"}`}>
                        <td className="px-4 py-3">
                          <span className={`inline-block text-xs font-semibold rounded-full px-2.5 py-0.5 ${c.badge}`}>{row.name}</span>
                        </td>
                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{row.cashReceived}</td>
                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{row.taxEfficiency}</td>
                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{row.bestFor}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* ── 3. Value Creation Mechanisms ── */}
          <motion.section id="value" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">How Spin-offs Create Value</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              A spin-off isn't just about splitting a company in two. There are concrete mechanisms by which each separated entity gets valued higher independently than it was as part of the whole.
            </p>

            <div className="space-y-4">
              {VALUE_DRIVERS.map((driver, i) => {
                const c = COLOR_MAP[driver.color];
                return (
                  <div key={i} className={`rounded-xl border ${c.border} ${c.bg} p-5`}>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl shrink-0">{driver.icon}</span>
                      <div className="flex-1">
                        <h3 className={`text-sm font-bold ${c.text} mb-1`}>{driver.title}</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-2">{driver.desc}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{driver.detail}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Key insight box */}
            <div className="mt-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Key Insight</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                "2 + 2 = 5" — the combined market cap of the separated entities can exceed the market cap of the integrated parent.
                This paradoxical arithmetic is exactly what spin-offs aim to unlock.
                The larger the conglomerate discount, the greater the value creation potential from separation.
              </p>
            </div>
          </motion.section>

          {/* ── 4. Case Studies ── */}
          <section id="cases">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Case Studies</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Two landmark spin-offs that show exactly how and why separation creates shareholder value.
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
                { href: "/en/deal-101/reverse-morris-trust", title: "Reverse Morris Trust", desc: "Combining a spin-off with a merger to transfer a business unit tax-free to a strategic partner", badge: "Deal Structure" },
                { href: "/en/deal-101/ma-process", title: "M&A Process", desc: "The full deal execution workflow, including spin-offs as a restructuring step", badge: "Deal Process" },
                { href: "/en/deal-101/ipo-vs-ma-exit", title: "IPO vs M&A Exit", desc: "Carve-out (IPO) versus spin-off — how to choose the right exit or separation structure", badge: "Deal Structure" },
                { href: "/en/deal-101/strategic-ma", title: "Strategic M&A", desc: "The role of spin-offs in a broader corporate portfolio strategy", badge: "Strategy" },
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
