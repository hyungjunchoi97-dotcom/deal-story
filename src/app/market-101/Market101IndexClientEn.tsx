"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ALL_MARKET101_CONCEPTS,
  MARKET_101_CATEGORIES,
  CATEGORY_COLOR,
  type MarketConcept,
} from "@/data/market-101-concepts";

const CAT_META: Record<string, { letter?: string; icon: string; desc: string }> = {
  dcm:        { letter: "A", icon: "📊", desc: "Debt Capital Markets — bond issuance, syndication, pricing" },
  ecm:        { letter: "B", icon: "📈", desc: "Equity Capital Markets — IPO, follow-on, block deals" },
  fig:        {              icon: "🏦", desc: "Financial Institutions — bank capital, AT1, CoCo, bail-in" },
  sovereign:  {              icon: "🌐", desc: "Sovereign — government bonds, EM debt, century bonds" },
  structured: { letter: "C", icon: "🧩", desc: "Structured Finance — ABS, CLO, CDO, CMBS" },
  levfin:     { letter: "D", icon: "💰", desc: "Leveraged Finance — HY bonds, leveraged loans, LBO" },
  syndloan:   { letter: "E", icon: "🤝", desc: "Syndicated Loans — MLA, agent bank, IG vs leveraged loans" },
};

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const listItem = {
  hidden: { opacity: 0, x: -8 },
  show: (i: number) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.3, ease: EASE, delay: i * 0.04 },
  }),
};

function ArticleRow({ concept, index }: { concept: MarketConcept; index: number }) {
  const cc = CATEGORY_COLOR[concept.category];
  return (
    <motion.div custom={index} variants={listItem} initial="hidden" animate="show">
      <Link href={`/en/market-101/${concept.slug}`}>
        <div className="group flex items-start gap-3 p-3.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700/50">
          <span className={`mt-0.5 flex-shrink-0 inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold ${cc.bg} ${cc.fg}`}>
            Article
          </span>
          <div className="flex-1 min-w-0">
            <p className="text-[14px] font-semibold text-gray-900 dark:text-gray-100 leading-snug group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors line-clamp-1">
              {concept.titleEn || concept.title}
            </p>
            <p className="mt-0.5 text-[11px] text-gray-400 dark:text-gray-500 line-clamp-1">
              {concept.excerptEn || concept.excerpt}
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0 pt-0.5">
            <span className="text-[11px] text-gray-400 whitespace-nowrap">{concept.readingMinutes} min</span>
            <span className="text-teal-500 dark:text-teal-400 text-[13px] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function TermRow({ concept, index }: { concept: MarketConcept; index: number }) {
  return (
    <motion.div custom={index} variants={listItem} initial="hidden" animate="show">
      <Link href={`/en/market-101/${concept.slug}`}>
        <div className="group flex items-center gap-3 px-3.5 py-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700/50">
          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600" />
          <div className="flex-1 min-w-0">
            <span className="text-[13px] font-medium text-gray-700 dark:text-gray-300 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors">
              {concept.titleEn || concept.title}
            </span>
          </div>
          <span className="text-[11px] text-gray-400 flex-shrink-0">{concept.readingMinutes} min</span>
          <span className="text-teal-500 dark:text-teal-400 text-[12px] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">→</span>
        </div>
      </Link>
    </motion.div>
  );
}

// ── 합병 서브섹션 타입 ────────────────────────────────────────────────────
type ExtraGroup = { label: string; dotColor: string; items: MarketConcept[] };

function CategoryFolder({
  catKey, labelEn, dotColor, articles, terms, extraGroups = [], defaultOpen,
}: {
  catKey: string; labelEn: string; dotColor: string;
  articles: MarketConcept[]; terms: MarketConcept[];
  extraGroups?: ExtraGroup[];
  defaultOpen: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const extraTotal = extraGroups.reduce((s, g) => s + g.items.length, 0);
  const total = articles.length + terms.length + extraTotal;
  const cc = CATEGORY_COLOR[catKey as keyof typeof CATEGORY_COLOR];
  const meta = CAT_META[catKey];

  return (
    <div className={`rounded-xl border transition-all duration-200 overflow-hidden ${
      open
        ? "border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-900"
        : "border-gray-200/70 dark:border-gray-700/50 bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm"
    }`}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center gap-3.5 px-5 py-4 text-left group">
        <div className={`w-1 self-stretch rounded-full flex-shrink-0 ${dotColor}`} />
        {meta?.letter ? (
          <div
            className={`w-7 h-7 rounded-lg flex items-center justify-center text-[12px] font-black text-white flex-shrink-0 transition-all duration-200 ${dotColor} ${open ? "" : "opacity-80"}`}
          >
            {meta.letter}
          </div>
        ) : (
          <span className={`text-[18px] transition-all duration-200 ${open ? "grayscale-0" : "grayscale-[30%]"}`}>
            {meta?.icon ?? "📁"}
          </span>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="text-[15px] font-bold text-gray-900 dark:text-gray-100">{labelEn}</span>
            {articles.length > 0 && (
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${cc.bg} ${cc.fg}`}>
                {articles.length} articles
              </span>
            )}
            {(terms.length + extraTotal) > 0 && (
              <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                {terms.length + extraTotal} terms
              </span>
            )}
          </div>
          <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5 truncate">{meta?.desc ?? ""}</p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-[12px] font-semibold text-gray-400 dark:text-gray-500">{total}</span>
          <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25, ease: EASE }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gray-400 dark:text-gray-500">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </motion.div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-4 pb-4">
              <div className="h-px bg-gray-100 dark:bg-gray-800 mb-3" />
              {articles.length > 0 && (
                <div className="mb-1">
                  {articles.map((c, i) => <ArticleRow key={c.slug} concept={c} index={i} />)}
                </div>
              )}
              {articles.length > 0 && (terms.length + extraTotal) > 0 && (
                <div className="flex items-center gap-2 my-2 px-3.5">
                  <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
                  <span className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">Glossary</span>
                  <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
                </div>
              )}
              {terms.length > 0 && (
                <div>
                  {terms.map((c, i) => <TermRow key={c.slug} concept={c} index={articles.length + i} />)}
                </div>
              )}

              {/* extraGroups — merged subsections (FIG, Sovereign nested in DCM) */}
              {extraGroups.map((grp, gi) => (
                <div key={grp.label}>
                  <div className="flex items-center gap-2 mt-3 mb-1 px-3.5">
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${grp.dotColor}`} />
                    <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400">{grp.label}</span>
                    <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
                  </div>
                  {grp.items.map((c, i) => (
                    <TermRow
                      key={c.slug}
                      concept={c}
                      index={articles.length + terms.length + extraGroups.slice(0, gi).reduce((s, g) => s + g.items.length, 0) + i}
                    />
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── FIG·Sovereign → nested inside DCM folder ────────────────────────────────
/** Categories that should be merged into the DCM folder as nested subsections */
const MERGE_INTO_DCM: Array<{ key: string; label: string }> = [
  { key: "fig",      label: "FIG (Financial Institutions)" },
  { key: "sovereign", label: "Sovereign" },
];

export default function Market101IndexClientEn() {
  const totalCount = ALL_MARKET101_CONCEPTS.length;
  const mergedKeys = MERGE_INTO_DCM.map((m) => m.key);

  // Group by category, excluding categories merged into DCM
  const folders = MARKET_101_CATEGORIES
    .filter((cat) => !mergedKeys.includes(cat.key))
    .map((cat) => {
      const all = ALL_MARKET101_CONCEPTS.filter((c) => c.category === cat.key);
      // DCM gets extraGroups (FIG + Sovereign nested)
      const extraGroups: ExtraGroup[] = cat.key === "dcm"
        ? MERGE_INTO_DCM.map((m) => {
            const mCat = MARKET_101_CATEGORIES.find((c) => c.key === m.key);
            return {
              label: m.label,
              dotColor: mCat?.dotColor ?? "bg-gray-400",
              items: ALL_MARKET101_CONCEPTS.filter(
                (c) => c.category === m.key && (c.entryType === "term" || !c.entryType)
              ),
            };
          }).filter((g) => g.items.length > 0)
        : [];
      const extraTotal = extraGroups.reduce((s, g) => s + g.items.length, 0);
      return {
        ...cat,
        articles: all.filter((c) => c.entryType === "article"),
        terms: all.filter((c) => c.entryType === "term" || !c.entryType),
        extraGroups,
        total: all.length + extraTotal,
      };
    });

  const populated = folders.filter((f) => f.total > 0);

  return (
    <div className="max-w-3xl mx-auto px-5 py-10 space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="flex flex-wrap gap-2"
      >
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-50 dark:bg-teal-900/20 text-[12px] font-semibold text-teal-700 dark:text-teal-300 border border-teal-200/60 dark:border-teal-700/40">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
          {populated.length} categories
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-[12px] font-semibold text-gray-600 dark:text-gray-400">
          {totalCount} total
        </div>
        {populated.map((f) => {
          const letter = CAT_META[f.key]?.letter;
          return (
          <div key={f.key} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium ${CATEGORY_COLOR[f.key as keyof typeof CATEGORY_COLOR]?.bg ?? ""} ${CATEGORY_COLOR[f.key as keyof typeof CATEGORY_COLOR]?.fg ?? ""}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${f.dotColor}`} />
            {letter && <span className="font-black">{letter}.</span>}
            {f.labelEn}
            <span className="opacity-70">{f.total}</span>
            {/* DCM에 합병된 카테고리 표시 (작은 점) */}
            {f.key === "dcm" && MERGE_INTO_DCM.map((m) => {
              const mCat = MARKET_101_CATEGORIES.find((c) => c.key === m.key);
              return mCat ? (
                <span key={m.key} className={`w-1.5 h-1.5 rounded-full ${mCat.dotColor}`} title={mCat.labelEn} />
              ) : null;
            })}
          </div>
          );
        })}
      </motion.div>

      <div className="space-y-3">
        {populated.map((f, i) => (
          <motion.div key={f.key} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: EASE, delay: i * 0.06 }}>
            <CategoryFolder
              catKey={f.key}
              labelEn={f.labelEn}
              dotColor={f.dotColor}
              articles={f.articles}
              terms={f.terms}
              extraGroups={f.extraGroups}
              defaultOpen={false}
            />
          </motion.div>
        ))}
      </div>

    </div>
  );
}
