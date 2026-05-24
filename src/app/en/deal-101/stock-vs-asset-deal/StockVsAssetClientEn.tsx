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

// ── Stock Deal pros and cons ──────────────────────────────────────
const STOCK_PROS = [
  { title: "Simple contract transfer", desc: "Licenses and permits are attached to the corporate entity, so a share transfer automatically passes all rights — no asset-by-asset reassignment needed." },
  { title: "Business continuity preserved", desc: "Customer contracts, employment relationships, and supplier agreements carry over intact. No operational disruption on day one." },
  { title: "Efficient for large deals", desc: "When a company has thousands of assets, acquiring shares is far faster and cheaper than transferring each asset individually." },
];

const STOCK_CONS = [
  { title: "Hidden liabilities come with the deal", desc: "All contingent liabilities — undisclosed lawsuits, environmental obligations, tax assessments — transfer to the buyer. You inherit everything, known and unknown." },
  { title: "Sellers pay less tax, so they push for it", desc: "Individual sellers pay only capital gains tax on share proceeds. Asset deals create a double-tax problem (corporate tax + dividend tax), so sellers strongly prefer stock deals." },
  { title: "No tax step-up for the buyer", desc: "Assets carry over at the target's existing book values. The buyer cannot reset depreciation to current fair market value and loses the related tax shield." },
];

// ── Asset Deal pros and cons ──────────────────────────────────────
const ASSET_PROS = [
  { title: "Cherry-pick only what you need", desc: "The buyer selects specific assets — technology, customer lists, brands, equipment — and leaves behind unprofitable divisions or obsolete assets." },
  { title: "Liabilities stay with the seller", desc: "Debt, litigation, and tax contingencies remain with the selling entity. The buyer is shielded from the target's history of obligations." },
  { title: "Tax step-up benefit", desc: "Acquired assets are stepped up to fair market value on the buyer's books, raising the depreciation base and generating meaningful tax savings over the following years." },
];

const ASSET_CONS = [
  { title: "Complex asset-by-asset transfer", desc: "Contracts must be re-executed, permits re-obtained, and employees re-hired one by one. Post-close integration can take months." },
  { title: "Double taxation hurts the seller", desc: "The selling corporation pays corporate tax on the gain, then distributes the net proceeds to shareholders who owe dividend tax. Sellers resist this structure." },
  { title: "Some licenses cannot transfer", desc: "Drug approvals (FDA), broadcasting licenses, and financial licenses are often non-transferable. Asset deals may not work at all in heavily regulated industries." },
];

// ── Decision guide table ──────────────────────────────────────────
const DECISION_TABLE = [
  { situation: "Target has significant debt or litigation risk", recommendation: "Asset Deal", color: "rose", reason: "Shields the buyer from inherited liabilities" },
  { situation: "Key licenses are tied to the corporate entity", recommendation: "Stock Deal", color: "blue", reason: "Permits transfer automatically with the shares" },
  { situation: "Buying only part of a business", recommendation: "Asset Deal", color: "rose", reason: "Allows selection of specific business units or assets" },
  { situation: "PE exit — founder wants a clean exit", recommendation: "Stock Deal", color: "blue", reason: "Capital gains tax only; no double-taxation on proceeds" },
  { situation: "Pharmaceutical or regulated-industry acquisition", recommendation: "Stock Deal", color: "blue", reason: "FDA approvals are entity-bound and cannot be re-issued quickly" },
  { situation: "Distressed-asset purchase", recommendation: "Asset Deal", color: "rose", reason: "Isolate valuable assets from the troubled balance sheet" },
];

// ── Case examples ────────────────────────────────────────────────
const CASES = [
  {
    company: "Pharma company acquisition",
    structure: "Stock Deal",
    color: "blue",
    reason: "FDA new-drug approvals, clinical data packages, and GMP certifications are attached to the legal entity. Transferring them as assets is either impossible or takes years to re-approve.",
  },
  {
    company: "Distressed company asset purchase",
    structure: "Asset Deal",
    color: "rose",
    reason: "The buyer acquires equipment, technology, and customer relationships from a company loaded with debt. The liabilities stay with the bankrupt entity; the buyer takes only the operational value.",
  },
  {
    company: "Corporate division carve-out",
    structure: "Asset Deal / Carve-out",
    color: "amber",
    reason: "A parent company sells off a business unit by transferring its assets, contracts, and headcount. Often structured as a carve-out: a new entity is first spun off, then its shares are sold — a hybrid of both approaches.",
  },
];

export default function StockVsAssetClientEn() {
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
              <span className="text-xs text-gray-400">Stock Deal vs. Asset Deal</span>
            </div>
            <span className="inline-block text-xs font-medium bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300 rounded-full px-3 py-1 mb-4">
              Deal Structure
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              Stock Deal vs. Asset Deal
              <span className="block text-xl sm:text-2xl text-gray-500 dark:text-gray-400 mt-1 font-medium">
                Buying the Company or Just Its Parts
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              The most fundamental structural choice in any M&A deal — do you buy the shares or the assets? The answer shapes taxes, liability exposure, and the entire negotiation dynamic.
            </p>

            {/* Section quick-nav */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { label: "Definitions", href: "#definition" },
                { label: "Pros & Cons", href: "#pros-cons" },
                { label: "Why Tax Drives Structure", href: "#tax" },
                { label: "Decision Guide", href: "#decision" },
                { label: "Case Examples", href: "#cases" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-1 text-xs font-medium bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300 hover:opacity-80 transition-opacity"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-16">

          {/* ── Section 1: Definitions ── */}
          <motion.section id="definition" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">What each structure actually means</h2>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {/* Stock Deal */}
              <div className={`rounded-xl border ${COLOR_MAP.blue.border} ${COLOR_MAP.blue.bg} p-5`}>
                <span className={`text-xs font-bold ${COLOR_MAP.blue.text}`}>Stock Deal</span>
                <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mt-1 mb-2">Share Purchase</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  The buyer purchases all (or a majority) of the target's shares. This transfers the entire company — assets, liabilities, contracts, permits, and litigation — exactly as it stands.
                </p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {["All assets", "All liabilities", "Contracts transfer", "Permits included"].map((tag) => (
                    <span key={tag} className={`text-[10px] font-medium rounded-full px-2 py-0.5 ${COLOR_MAP.blue.badge}`}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* Asset Deal */}
              <div className={`rounded-xl border ${COLOR_MAP.rose.border} ${COLOR_MAP.rose.bg} p-5`}>
                <span className={`text-xs font-bold ${COLOR_MAP.rose.text}`}>Asset Deal</span>
                <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mt-1 mb-2">Asset Purchase</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  The buyer selectively purchases only the assets they want. Liabilities stay with the selling entity. The buyer gets to cherry-pick what it takes on.
                </p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {["Selective assets", "Liabilities blocked", "Cherry-picking", "Tax step-up"].map((tag) => (
                    <span key={tag} className={`text-[10px] font-medium rounded-full px-2 py-0.5 ${COLOR_MAP.rose.badge}`}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Analogy */}
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 Analogy</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                <strong>A stock deal is buying the whole restaurant</strong> — the recipes, the staff, the lease, the inventory, and the debt the previous owner ran up.
                <br className="my-1" />
                <strong>An asset deal is buying just the recipes and the kitchen equipment</strong> — the previous owner keeps their debt. You take only what you came for.
              </p>
            </div>
          </motion.section>

          {/* ── Section 2: Pros & Cons ── */}
          <motion.section id="pros-cons" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Pros & Cons — buyer's perspective</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">The same deal looks completely different depending on which structure you use.</p>

            {/* Stock Deal */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs font-bold rounded-full px-3 py-1 ${COLOR_MAP.blue.badge}`}>Stock Deal</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">buyer's view</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-2">Advantages</p>
                  <div className="space-y-2">
                    {STOCK_PROS.map((item, i) => (
                      <div key={i} className="flex gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 text-sm">
                        <div className="mt-1.5 w-2 h-2 rounded-full shrink-0 bg-emerald-500" />
                        <div>
                          <span className="font-semibold text-gray-800 dark:text-gray-200">{item.title}</span>
                          <p className="text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed text-xs">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-rose-600 dark:text-rose-400 mb-2">Disadvantages</p>
                  <div className="space-y-2">
                    {STOCK_CONS.map((item, i) => (
                      <div key={i} className="flex gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 text-sm">
                        <div className="mt-1.5 w-2 h-2 rounded-full shrink-0 bg-rose-500" />
                        <div>
                          <span className="font-semibold text-gray-800 dark:text-gray-200">{item.title}</span>
                          <p className="text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed text-xs">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Asset Deal */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs font-bold rounded-full px-3 py-1 ${COLOR_MAP.rose.badge}`}>Asset Deal</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">buyer's view</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-2">Advantages</p>
                  <div className="space-y-2">
                    {ASSET_PROS.map((item, i) => (
                      <div key={i} className="flex gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 text-sm">
                        <div className="mt-1.5 w-2 h-2 rounded-full shrink-0 bg-emerald-500" />
                        <div>
                          <span className="font-semibold text-gray-800 dark:text-gray-200">{item.title}</span>
                          <p className="text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed text-xs">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-rose-600 dark:text-rose-400 mb-2">Disadvantages</p>
                  <div className="space-y-2">
                    {ASSET_CONS.map((item, i) => (
                      <div key={i} className="flex gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 text-sm">
                        <div className="mt-1.5 w-2 h-2 rounded-full shrink-0 bg-rose-500" />
                        <div>
                          <span className="font-semibold text-gray-800 dark:text-gray-200">{item.title}</span>
                          <p className="text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed text-xs">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── Section 3: Tax drives the structure ── */}
          <motion.section id="tax" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Why tax is the real driver of structure</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              The biggest point of conflict in any deal structure negotiation is taxes. Sellers and buyers have directly opposing interests.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className={`rounded-xl border ${COLOR_MAP.violet.border} ${COLOR_MAP.violet.bg} p-4`}>
                <p className={`text-xs font-bold ${COLOR_MAP.violet.text} mb-2`}>Seller's preference</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">Stock Deal</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  Individual shareholders pay only capital gains tax on the proceeds. An asset deal forces the corporation to pay corporate tax on the gain, then subjects shareholders to a second layer of dividend tax when they take the money out.
                </p>
                <div className="mt-3 text-xs font-medium text-gray-500 dark:text-gray-400">
                  Stock Deal: <span className={`font-bold ${COLOR_MAP.violet.text}`}>Capital gains tax only</span>
                </div>
                <div className="mt-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                  Asset Deal: <span className="font-bold text-rose-600 dark:text-rose-400">Corporate tax + dividend tax (double taxation)</span>
                </div>
              </div>

              <div className={`rounded-xl border ${COLOR_MAP.teal.border} ${COLOR_MAP.teal.bg} p-4`}>
                <p className={`text-xs font-bold ${COLOR_MAP.teal.text} mb-2`}>Buyer's preference</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">Asset Deal</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  Assets are stepped up to fair market value on the buyer's books (tax step-up). Higher depreciation base = significant tax savings in the years ahead. Stock deals carry over the target's original book values and provide none of this benefit.
                </p>
                <div className="mt-3 text-xs font-medium text-gray-500 dark:text-gray-400">
                  Asset Deal: <span className={`font-bold ${COLOR_MAP.teal.text}`}>Tax step-up → future tax savings</span>
                </div>
                <div className="mt-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                  Stock Deal: <span className="text-gray-400 dark:text-gray-500">Book values inherited as-is, no step-up</span>
                </div>
              </div>
            </div>

            {/* Key insight */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Key insight</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                Deal structure creates a direct conflict between seller and buyer on tax. The most common resolution is a <strong>price adjustment for the tax differential</strong> — if the seller accepts an asset deal, the buyer compensates them with a higher price that offsets the extra tax burden. Which structure "wins" is ultimately a question of whose after-tax economics are better under which scenario.
              </p>
            </div>
          </motion.section>

          {/* ── Section 4: Decision guide ── */}
          <motion.section id="decision" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">When to use each structure</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              Beyond tax, there are practical factors that push deals toward one structure or the other.
            </p>

            <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800/60">
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600 dark:text-gray-400">Situation</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600 dark:text-gray-400">Structure</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600 dark:text-gray-400 hidden sm:table-cell">Reason</th>
                  </tr>
                </thead>
                <tbody>
                  {DECISION_TABLE.map((row, i) => {
                    const c = COLOR_MAP[row.color];
                    return (
                      <tr key={i} className="border-t border-gray-100 dark:border-gray-700/60">
                        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{row.situation}</td>
                        <td className="px-4 py-3">
                          <span className={`text-xs font-semibold rounded-full px-2.5 py-0.5 ${c.badge}`}>
                            {row.recommendation}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-gray-500 dark:text-gray-400 text-xs hidden sm:table-cell">{row.reason}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* ── Section 5: Cases ── */}
          <motion.section id="cases" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Real-world case examples</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              The right structure depends on the industry and the specific deal. Here are three examples.
            </p>

            <div className="space-y-4">
              {CASES.map((item, i) => {
                const c = COLOR_MAP[item.color];
                return (
                  <div key={i} className={`rounded-xl border ${c.border} p-5`}>
                    <div className="flex items-start justify-between gap-3 flex-wrap mb-3">
                      <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{item.company}</h3>
                      <span className={`text-xs font-semibold rounded-full px-3 py-0.5 ${c.badge}`}>{item.structure}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.reason}</p>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ── Related concepts ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">Connected concepts</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/en/deal-101/ma-process", title: "The M&A Process", desc: "Deal structure is first specified in the LOI (Phase 3) and locked in the SPA (Phase 5)", badge: "Deal Process" },
                { href: "/en/deal-101/pmi", title: "PMI (Post-Merger Integration)", desc: "Stock vs asset deal affects how integration is structured after close", badge: "Deal Structure" },
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
