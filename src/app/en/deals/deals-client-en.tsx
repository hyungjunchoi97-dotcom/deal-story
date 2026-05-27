"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { DEAL_CATEGORY_COLOR, DEAL_CATEGORY_ORDER } from "@/lib/types";
import { DEAL_CATEGORY_LABEL_EN } from "@/lib/i18n";
import type { DealData, DealCategory } from "@/lib/deal-data";

function DealCardEn({ deal }: { deal: DealData }) {
  return (
    <Link href={`/en/deals/${deal.slug}`} className="group block h-full">
      <article className="h-full rounded-2xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 p-5 transition-all duration-200 group-hover:border-blue-300 dark:group-hover:border-blue-700 group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] group-hover:-translate-y-0.5">

        {/* Company icons */}
        <div className="flex items-center gap-2.5 mb-4">
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-[10px] tracking-tight shadow-sm flex-shrink-0 ${deal.acquirer.bg}`}>
            {deal.acquirer.initials}
          </div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-300 dark:text-gray-600 flex-shrink-0" aria-hidden={true}>
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
          </svg>
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-[10px] tracking-tight shadow-sm flex-shrink-0 ${deal.target.bg}`}>
            {deal.target.initials}
          </div>
          <div className="ml-auto flex items-center gap-1.5">
            <span className={`text-[10px] font-semibold rounded-full px-2 py-0.5 ${DEAL_CATEGORY_COLOR[deal.category]}`}>
              {DEAL_CATEGORY_LABEL_EN[deal.category]}
            </span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-sm font-bold text-gray-900 dark:text-gray-100 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1.5">
          {deal.title}
        </h2>

        {/* Excerpt */}
        <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2 mb-4">
          {deal.excerpt}
        </p>

        {/* Footer meta */}
        <div className="flex items-end justify-between mt-auto pt-3 border-t border-gray-100 dark:border-gray-800">
          <div>
            <p className="text-base font-bold text-amber-500 leading-none">
              {deal.dealSummary.dealValueDisplay.split("(")[0].trim()}
            </p>
            <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5">
              {deal.acquirer.label} → {deal.target.label}
            </p>
          </div>
          <div className="text-right">
            <p className="text-[11px] text-gray-400 dark:text-gray-500">{deal.industry}</p>
            <p className="text-[11px] text-gray-400 dark:text-gray-500">{deal.closedDisplay ?? deal.announcedDisplay}</p>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default function DealsClientEn({ initialDeals }: { initialDeals: DealData[] }) {
  const [category, setCategory] = useState<DealCategory | "all">("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let list = initialDeals;
    if (category !== "all") {
      list = list.filter((d) => d.category === category);
    }
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(
        (d) =>
          d.title.toLowerCase().includes(q) ||
          d.acquirer.label.toLowerCase().includes(q) ||
          d.target.label.toLowerCase().includes(q) ||
          d.excerpt.toLowerCase().includes(q) ||
          d.industry.toLowerCase().includes(q)
      );
    }
    return list;
  }, [initialDeals, category, search]);

  return (
    <div>
      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-5">
        <button
          onClick={() => setCategory("all")}
          className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
            category === "all"
              ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900"
              : "text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
        >
          All
        </button>
        {DEAL_CATEGORY_ORDER.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat as DealCategory)}
            className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
              category === cat
                ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900"
                : "text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {DEAL_CATEGORY_LABEL_EN[cat as DealCategory]}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by deal name, company, or sector..."
          className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 text-sm text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-700 transition"
        />
      </div>

      {/* Count */}
      <p className="text-xs text-gray-400 dark:text-gray-600 mb-4">{filtered.length} deal{filtered.length !== 1 ? "s" : ""}</p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400 dark:text-gray-600 text-sm">
          No deals found.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filtered.map((deal) => (
            <DealCardEn key={deal.slug} deal={deal} />
          ))}
        </div>
      )}
    </div>
  );
}
