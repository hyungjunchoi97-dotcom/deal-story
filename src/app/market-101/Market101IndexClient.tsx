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

// ── 카테고리 아이콘 & 설명 ─────────────────────────────────────────────────
const CAT_META: Record<string, { icon: string; desc: string; descEn: string }> = {
  dcm:        { icon: "📊", desc: "부채자본시장 — 채권 발행·신디케이션·프라이싱", descEn: "Debt Capital Markets — bond issuance, syndication, pricing" },
  ecm:        { icon: "📈", desc: "주식자본시장 — IPO·유상증자·블록딜", descEn: "Equity Capital Markets — IPO, follow-on, block deals" },
  st:         { icon: "⚡", desc: "세일즈 & 트레이딩 — 마켓메이킹·포지션·리스크", descEn: "Sales & Trading — market making, positioning, risk" },
  structure:  { icon: "🏗️", desc: "구조·규제 — 바젤·자기자본·규제 프레임워크", descEn: "Structure & Regulation — Basel, capital ratios, regulatory" },
  sales:      { icon: "🤝", desc: "세일즈 — 클라이언트 커버리지·피치·관계관리", descEn: "Sales — client coverage, pitch, relationship management" },
  fig:        { icon: "🏦", desc: "금융기관 — 은행 자본구조·AT1·CoCo·베일인", descEn: "Financial Institutions — bank capital, AT1, CoCo, bail-in" },
  sovereign:  { icon: "🌐", desc: "소버린 — 국채·EM 채권·세기채", descEn: "Sovereign — government bonds, EM debt, century bonds" },
  structured: { icon: "🧩", desc: "구조화금융 — ABS·CLO·CDO·CMBS", descEn: "Structured Finance — ABS, CLO, CDO, CMBS" },
  levfin:     { icon: "💰", desc: "레버리지드 파이낸스 — HY채권·레버드론·LBO", descEn: "Leveraged Finance — HY bonds, leveraged loans, LBO" },
  syndloan:   { icon: "🤝", desc: "신디케이티드론 — MLA·에이전트은행·IG론 vs 레버리지드론", descEn: "Syndicated Loans — MLA, agent bank, IG vs leveraged loans" },
};

// ── 애니메이션 ─────────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const listItem = {
  hidden: { opacity: 0, x: -8 },
  show: (i: number) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.3, ease: EASE, delay: i * 0.04 },
  }),
};

// ── 아이콘: 열린/닫힌 폴더 SVG ────────────────────────────────────────────
function FolderIcon({ open }: { open: boolean }) {
  return (
    <motion.svg
      width="20" height="20" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round"
      animate={{ scale: open ? 1.08 : 1 }}
      transition={{ duration: 0.2 }}
      className="flex-shrink-0"
    >
      {open ? (
        // open folder
        <>
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
          <line x1="2" y1="10" x2="22" y2="10" />
        </>
      ) : (
        // closed folder
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      )}
    </motion.svg>
  );
}

// ── Article Card (폴더 안) ─────────────────────────────────────────────────
function ArticleRow({ concept, index }: { concept: MarketConcept; index: number }) {
  const cc = CATEGORY_COLOR[concept.category];
  return (
    <motion.div
      custom={index}
      variants={listItem}
      initial="hidden"
      animate="show"
    >
      <Link href={`/market-101/${concept.slug}`}>
        <div className="group flex items-start gap-3 p-3.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700/50">
          {/* 아티클 배지 */}
          <span className={`mt-0.5 flex-shrink-0 inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold ${cc.bg} ${cc.fg}`}>
            아티클
          </span>
          <div className="flex-1 min-w-0">
            <p className="text-[14px] font-semibold text-gray-900 dark:text-gray-100 leading-snug group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors line-clamp-1">
              {concept.title}
            </p>
            <p className="mt-0.5 text-[11px] text-gray-400 dark:text-gray-500 line-clamp-1">
              {concept.excerpt}
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0 pt-0.5">
            <span className="text-[11px] text-gray-400 dark:text-gray-500 whitespace-nowrap">
              {concept.readingMinutes}분
            </span>
            <span className="text-teal-500 dark:text-teal-400 text-[13px] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ── Term Row (폴더 안 용어) ──────────────────────────────────────────────
function TermRow({ concept, index }: { concept: MarketConcept; index: number }) {
  return (
    <motion.div custom={index} variants={listItem} initial="hidden" animate="show">
      <Link href={`/market-101/${concept.slug}`}>
        <div className="group flex items-center gap-3 px-3.5 py-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700/50">
          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 mt-0.5" />
          <div className="flex-1 min-w-0">
            <span className="text-[13px] font-medium text-gray-700 dark:text-gray-300 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors">
              {concept.title}
            </span>
            {concept.titleEn && concept.titleEn !== concept.title && (
              <span className="ml-1.5 text-[11px] text-gray-400 dark:text-gray-500">
                {concept.titleEn}
              </span>
            )}
          </div>
          <span className="text-[11px] text-gray-400 dark:text-gray-500 flex-shrink-0">
            {concept.readingMinutes}분
          </span>
          <span className="text-teal-500 dark:text-teal-400 text-[12px] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">→</span>
        </div>
      </Link>
    </motion.div>
  );
}

// ── 준비 중 폴더 ──────────────────────────────────────────────────────────
function LockedFolder({ label, icon, desc }: { label: string; icon: string; desc: string }) {
  return (
    <div className="rounded-xl border border-dashed border-gray-200 dark:border-gray-700/50 bg-gray-50/40 dark:bg-gray-900/20 overflow-hidden">
      <div className="flex items-center gap-3 px-5 py-4">
        <span className="text-xl opacity-40">{icon}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-[15px] font-bold text-gray-400 dark:text-gray-600">{label}</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 font-semibold">
              준비 중
            </span>
          </div>
          <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5 truncate">{desc}</p>
        </div>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-300 dark:text-gray-700 flex-shrink-0">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      </div>
    </div>
  );
}

// ── 메인 폴더 컴포넌트 ────────────────────────────────────────────────────
type ExtraGroup = { label: string; dotColor: string; items: MarketConcept[] };

function CategoryFolder({
  catKey, label, dotColor, articles, terms, extraGroups = [], defaultOpen,
}: {
  catKey: string;
  label: string;
  dotColor: string;
  articles: MarketConcept[];
  terms: MarketConcept[];
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

      {/* ── 폴더 헤더 ── */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3.5 px-5 py-4 text-left group"
      >
        {/* 컬러 액센트 바 */}
        <div className={`w-1 self-stretch rounded-full flex-shrink-0 ${dotColor}`} />

        {/* 폴더 아이콘 */}
        <span className={`text-[18px] transition-all duration-200 ${open ? "grayscale-0" : "grayscale-[30%]"}`}>
          {meta?.icon ?? "📁"}
        </span>

        {/* 레이블 & 설명 */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="text-[15px] font-bold text-gray-900 dark:text-gray-100">
              {label}
            </span>
            {/* 아티클 / 용어 배지 */}
            {articles.length > 0 && (
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${cc.bg} ${cc.fg}`}>
                아티클 {articles.length}
              </span>
            )}
            {(terms.length + extraTotal) > 0 && (
              <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                용어 {terms.length + extraTotal}
              </span>
            )}
          </div>
          <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5 truncate">
            {meta?.desc ?? ""}
          </p>
        </div>

        {/* 항목 수 + 시보 */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-[12px] font-semibold text-gray-400 dark:text-gray-500">
            {total}편
          </span>
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25, ease: EASE }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gray-400 dark:text-gray-500">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </motion.div>
        </div>
      </button>

      {/* ── 폴더 콘텐츠 (accordion) ── */}
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
              {/* 구분선 */}
              <div className="h-px bg-gray-100 dark:bg-gray-800 mb-3" />

              {/* 아티클 목록 */}
              {articles.length > 0 && (
                <div className="mb-1">
                  {articles.map((c, i) => (
                    <ArticleRow key={c.slug} concept={c} index={i} />
                  ))}
                </div>
              )}

              {/* 아티클↔용어 구분 */}
              {articles.length > 0 && (terms.length + extraTotal) > 0 && (
                <div className="flex items-center gap-2 my-2 px-3.5">
                  <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
                  <span className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">용어 사전</span>
                  <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
                </div>
              )}

              {/* 네이티브 용어 목록 */}
              {terms.length > 0 && (
                <div>
                  {terms.map((c, i) => (
                    <TermRow key={c.slug} concept={c} index={articles.length + i} />
                  ))}
                </div>
              )}

              {/* extraGroups — 합병된 서브섹션 (FIG, 소버린 등) */}
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

// ── FIG·Sovereign → DCM 폴더 안으로 합병 설정 ───────────────────────────
/** DCM 폴더 안에 서브섹션으로 합병할 카테고리 키 목록 */
const MERGE_INTO_DCM: Array<{ key: string; label: string }> = [
  { key: "fig",      label: "FIG (금융기관)" },
  { key: "sovereign", label: "Sovereign (소버린)" },
];

// ── 메인 페이지 컴포넌트 ──────────────────────────────────────────────────
export default function Market101IndexClient() {
  const totalCount = ALL_MARKET101_CONCEPTS.length;

  const mergedKeys = MERGE_INTO_DCM.map((m) => m.key);

  // 카테고리별로 묶기 (MARKET_101_CATEGORIES 기준, lbo + merged 제외)
  const folders = MARKET_101_CATEGORIES
    .filter((cat) => !mergedKeys.includes(cat.key))
    .map((cat) => {
      const all = ALL_MARKET101_CONCEPTS.filter((c) => c.category === cat.key);
      // DCM에는 extraGroups(FIG·Sovereign) 추가
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
  const empty = folders.filter((f) => f.total === 0);

  return (
    <div className="max-w-3xl mx-auto px-5 py-10 space-y-10">

      {/* ── 통계 바 ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="flex flex-wrap gap-2"
      >
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-50 dark:bg-teal-900/20 text-[12px] font-semibold text-teal-700 dark:text-teal-300 border border-teal-200/60 dark:border-teal-700/40">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
          {populated.length}개 카테고리
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-[12px] font-semibold text-gray-600 dark:text-gray-400">
          총 {totalCount}편
        </div>
        {populated.map((f) => (
          <div
            key={f.key}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium ${CATEGORY_COLOR[f.key as keyof typeof CATEGORY_COLOR]?.bg ?? ""} ${CATEGORY_COLOR[f.key as keyof typeof CATEGORY_COLOR]?.fg ?? ""}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${f.dotColor}`} />
            {f.label}
            <span className="opacity-70">{f.total}</span>
            {/* DCM에 합병된 카테고리 표시 */}
            {f.key === "dcm" && MERGE_INTO_DCM.map((m) => {
              const mCat = MARKET_101_CATEGORIES.find((c) => c.key === m.key);
              return mCat ? (
                <span key={m.key} className={`w-1.5 h-1.5 rounded-full ${mCat.dotColor}`} title={mCat.label} />
              ) : null;
            })}
          </div>
        ))}
      </motion.div>

      {/* ── 폴더 목록 (데이터 있는 것) ── */}
      <div className="space-y-3">
        {populated.map((f, i) => (
          <motion.div
            key={f.key}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASE, delay: i * 0.06 }}
          >
            <CategoryFolder
              catKey={f.key}
              label={f.label}
              dotColor={f.dotColor}
              articles={f.articles}
              terms={f.terms}
              extraGroups={f.extraGroups}
              defaultOpen={i === 0}
            />
          </motion.div>
        ))}
      </div>

      {/* ── 준비 중 폴더 (데이터 없는 것) ── */}
      {empty.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[12px] font-semibold text-gray-400 dark:text-gray-500">준비 중</span>
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {empty.map((f) => (
              <LockedFolder
                key={f.key}
                label={f.label}
                icon={CAT_META[f.key]?.icon ?? "📁"}
                desc={CAT_META[f.key]?.desc ?? ""}
              />
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
