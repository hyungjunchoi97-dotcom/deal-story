"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ALL_MARKET_DEALS,
  DEAL_CATEGORY_META,
  type DealCategory,
} from "@/data/market-deals";

type Lang = "ko" | "en";

// ── 카테고리 아이콘 & 설명 ─────────────────────────────────────────────────────
const CAT_EXTRA: Record<DealCategory, { icon: string; desc: string; border: string }> = {
  creator:   { icon: "🌱", desc: "자본시장의 룰을 새로 쓴 혁신적 구조",       descEn: "Landmark deals that rewrote capital market rules",    border: "border-emerald-200 dark:border-emerald-800" },
  sovereign: { icon: "🌐", desc: "국채 역사를 만든 소버린 딜들",              descEn: "Sovereign deals that made bond market history",       border: "border-blue-200 dark:border-blue-800"    },
  fig:       { icon: "🏦", desc: "금융기관 자본 위기와 극적인 구제",           descEn: "Bank capital crises and dramatic rescues",            border: "border-rose-200 dark:border-rose-800"    },
  structure: { icon: "🏗️", desc: "복잡한 구조화·통화·규제의 경계",            descEn: "Complex structures at the edge of currency & rules",  border: "border-violet-200 dark:border-violet-800"},
  corporate: { icon: "🏢", desc: "국영기업과 대형 기업의 채권시장 데뷔",       descEn: "SOE and corporate debuts in the bond market",         border: "border-orange-200 dark:border-orange-800"},
  crisis:    { icon: "⚡", desc: "디폴트·뱅크런·시장 붕괴의 교훈",            descEn: "Lessons from defaults, bank runs & market crashes",   border: "border-gray-200 dark:border-gray-700"   },
};

const CATEGORIES: DealCategory[] = [
  "creator", "sovereign", "fig", "structure", "corporate", "crisis",
];

// ── 발행사 이니셜 ──────────────────────────────────────────────────────────────
function issuerInitials(name: string): string {
  const clean = name.replace(/\s*\(.*?\)\s*/g, " ").trim();
  const words = clean.split(/\s+/).filter(Boolean);
  if (words.length === 0) return "—";
  if (words.length === 1) return words[0].slice(0, 3).toUpperCase();
  return words.slice(0, 3).map((w) => w[0]).join("").toUpperCase();
}

// ── 애니메이션 ─────────────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const listItem = {
  hidden: { opacity: 0, x: -8 },
  show: (i: number) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.28, ease: EASE, delay: i * 0.04 },
  }),
};

// ── 딜 행 (공개) ───────────────────────────────────────────────────────────────
function DealRow({
  deal, index, cat, lang,
}: {
  deal: (typeof ALL_MARKET_DEALS)[number];
  index: number;
  cat: DealCategory;
  lang: Lang;
}) {
  const ko   = lang === "ko";
  const meta = DEAL_CATEGORY_META[cat];
  const base = ko ? "/market" : "/en/market";
  return (
    <motion.div custom={index} variants={listItem} initial="hidden" animate="show">
      <Link href={`${base}/${deal.slug}`}>
        <div className="group flex items-start gap-3 p-3.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700/50">
          {/* 이니셜 배지 */}
          <div
            className={`w-8 h-8 rounded-lg flex items-center justify-center text-[9px] font-black text-white flex-shrink-0 mt-0.5 ${meta.dot}`}
          >
            {issuerInitials(ko ? deal.issuer : deal.issuerEn)}
          </div>

          {/* 텍스트 */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5 flex-wrap">
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${meta.bg} ${meta.fg}`}>
                {deal.dealYear}
              </span>
              <span className="text-[10px] text-gray-400 dark:text-gray-500 truncate">
                {ko ? deal.issuer : deal.issuerEn}
              </span>
            </div>
            <p className={`text-[14px] font-semibold leading-snug group-hover:underline transition-colors line-clamp-1 ${meta.fg}`}>
              {ko ? deal.title : deal.titleEn}
            </p>
            <p className="mt-0.5 text-[11px] text-gray-400 dark:text-gray-500 line-clamp-1 leading-relaxed">
              {ko ? deal.excerpt : deal.excerptEn}
            </p>
          </div>

          {/* 읽기 시간 + 화살표 */}
          <div className="flex flex-col items-end gap-1 flex-shrink-0 pt-0.5">
            <span className={`text-[10px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap ${meta.fg}`}>
              {ko ? "읽기 →" : "Read →"}
            </span>
            <span className="text-[10px] text-gray-400 dark:text-gray-500 whitespace-nowrap">
              {deal.readingMinutes}{ko ? "분" : " min"}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ── 딜 행 (준비 중) ────────────────────────────────────────────────────────────
function UnpublishedRow({
  deal, index, lang,
}: {
  deal: (typeof ALL_MARKET_DEALS)[number];
  index: number;
  lang: Lang;
}) {
  const ko = lang === "ko";
  return (
    <motion.div custom={index} variants={listItem} initial="hidden" animate="show">
      <div className="flex items-start gap-3 p-3.5 rounded-lg opacity-50">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[9px] font-black text-white flex-shrink-0 mt-0.5 bg-gray-300 dark:bg-gray-600">
          {issuerInitials(ko ? deal.issuer : deal.issuerEn)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
              {deal.dealYear}
            </span>
            <span className="text-[10px] text-gray-400 dark:text-gray-500 truncate">
              {ko ? deal.issuer : deal.issuerEn}
            </span>
          </div>
          <p className="text-[14px] font-medium text-gray-400 dark:text-gray-600 leading-snug line-clamp-1">
            {ko ? deal.title : deal.titleEn}
          </p>
          <p className="mt-0.5 text-[11px] text-gray-300 dark:text-gray-700 line-clamp-1">
            {ko ? deal.excerpt : deal.excerptEn}
          </p>
        </div>
        <span className="text-[10px] text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 rounded-full px-2 py-0.5 flex-shrink-0 whitespace-nowrap mt-0.5">
          {ko ? "곧 업로드" : "Coming Soon"}
        </span>
      </div>
    </motion.div>
  );
}

// ── 카테고리 폴더 ─────────────────────────────────────────────────────────────
function CategoryFolder({
  cat, deals, defaultOpen, lang,
}: {
  cat: DealCategory;
  deals: (typeof ALL_MARKET_DEALS);
  defaultOpen: boolean;
  lang: Lang;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const ko      = lang === "ko";
  const meta    = DEAL_CATEGORY_META[cat];
  const extra   = CAT_EXTRA[cat];
  const published   = deals.filter((d) => d.published);
  const unpublished = deals.filter((d) => !d.published);
  const total = deals.length;

  return (
    <div
      className={`rounded-xl border transition-all duration-200 overflow-hidden ${
        open
          ? "border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-900"
          : "border-gray-200/70 dark:border-gray-700/50 bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm"
      }`}
    >
      {/* ── 폴더 헤더 ── */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3.5 px-5 py-4 text-left group"
      >
        {/* 컬러 액센트 바 */}
        <div className={`w-1 self-stretch rounded-full flex-shrink-0 ${meta.dot}`} />

        {/* 레터 배지 */}
        <div
          className={`w-7 h-7 rounded-lg flex items-center justify-center text-[12px] font-black text-white flex-shrink-0 transition-all duration-200 ${meta.dot} ${open ? "" : "opacity-80"}`}
        >
          {meta.letter}
        </div>

        {/* 레이블 & 설명 */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="text-[15px] font-bold text-gray-900 dark:text-gray-100">
              {ko ? meta.label : meta.labelEn}
            </span>
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${meta.bg} ${meta.fg}`}>
              {ko ? "딜" : "deals"} {published.length}
            </span>
            {unpublished.length > 0 && (
              <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                {ko ? "준비 중" : "soon"} {unpublished.length}
              </span>
            )}
          </div>
          <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5 truncate">
            {ko ? extra.desc : extra.descEn}
          </p>
        </div>

        {/* 항목 수 + 시보 */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-[12px] font-semibold text-gray-400 dark:text-gray-500">
            {ko ? `${total}편` : total}
          </span>
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25, ease: EASE }}
          >
            <svg
              width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2.5"
              className="text-gray-400 dark:text-gray-500"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </motion.div>
        </div>
      </button>

      {/* ── 폴더 콘텐츠 ── */}
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

              {/* 공개 딜 */}
              {published.map((deal, i) => (
                <DealRow key={deal.slug} deal={deal} index={i} cat={cat} lang={lang} />
              ))}

              {/* 준비 중 딜 */}
              {unpublished.length > 0 && (
                <>
                  {published.length > 0 && (
                    <div className="flex items-center gap-2 my-2 px-3.5">
                      <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
                      <span className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">
                        {ko ? "곧 업로드" : "Coming Soon"}
                      </span>
                      <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
                    </div>
                  )}
                  {unpublished.map((deal, i) => (
                    <UnpublishedRow
                      key={deal.slug}
                      deal={deal}
                      index={published.length + i}
                      lang={lang}
                    />
                  ))}
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── 메인 컴포넌트 ─────────────────────────────────────────────────────────────
export default function MarketIndexClient({ lang = "ko" }: { lang?: Lang }) {
  const ko = lang === "ko";
  const publishedCount = ALL_MARKET_DEALS.filter((d) => d.published).length;
  const totalCount = ALL_MARKET_DEALS.length;

  return (
    <>
      {/* ── 통계 바 ── */}
      <div className="flex items-center gap-3 flex-wrap mb-5">
        <span className="text-[12px] font-semibold text-gray-500 dark:text-gray-400">
          {ko ? `${CATEGORIES.length}개 카테고리` : `${CATEGORIES.length} categories`}
        </span>
        <span className="w-1 h-1 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0" />
        <span className="text-[12px] font-semibold text-gray-500 dark:text-gray-400">
          {ko ? `총 ${publishedCount}편 공개` : `${publishedCount} published`}
        </span>
        {totalCount - publishedCount > 0 && (
          <>
            <span className="w-1 h-1 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0" />
            <span className="text-[12px] text-gray-400 dark:text-gray-500">
              {ko ? `${totalCount - publishedCount}편 준비 중` : `${totalCount - publishedCount} coming soon`}
            </span>
          </>
        )}

        {/* 카테고리 도트 */}
        <div className="ml-auto hidden sm:flex items-center gap-1.5 flex-wrap">
          {CATEGORIES.map((cat) => {
            const count = ALL_MARKET_DEALS.filter(
              (d) => d.category === cat && d.published
            ).length;
            const m = DEAL_CATEGORY_META[cat];
            return (
              <span
                key={cat}
                className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${m.bg} ${m.fg}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${m.dot}`} />
                {m.letter}. {ko ? m.label : m.labelEn} {count}
              </span>
            );
          })}
        </div>
      </div>

      {/* ── 카테고리 폴더 목록 ── */}
      <div className="space-y-3">
        {CATEGORIES.map((cat, i) => {
          const deals = ALL_MARKET_DEALS.filter((d) => d.category === cat);
          return (
            <CategoryFolder
              key={cat}
              cat={cat}
              deals={deals}
              defaultOpen={false}
              lang={lang}
            />
          );
        })}
      </div>
    </>
  );
}
