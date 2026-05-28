"use client";

/**
 * DealsFolderClient — 딜 아카이브 인덱스 (KO/EN 공용)
 *
 * Market(/market), Market 101(/market-101), Notes(/notes) 와 동일한
 * 폴더(아코디언) UX를 딜 페이지에도 적용한다.
 *
 * 카테고리 5종을 폴더로 펼침:
 *   A. M&A · B. LBO · C. Activism · D. Restructuring · E. Control Contest
 *
 * LBO 딜은 별도 `lboDeals` prop으로 받음 (LboDeal 타입은 DealData와 다른
 * 메트릭을 가지므로 별도 행 컴포넌트로 렌더).
 */

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { DealData, DealCategory } from "@/lib/deal-data";
import type { LboDeal } from "@/lib/lbo-deal-data";

type Lang = "ko" | "en";
type FolderKey = DealCategory | "lbo";

// ── 카테고리 메타 ─────────────────────────────────────────────────────────────
const FOLDERS: Array<{
  key: FolderKey;
  letter: string;
  label: string;
  labelEn: string;
  icon: string;
  desc: string;
  descEn: string;
  accent: string;       // hex/tailwind for accent bar
  dot: string;          // tailwind bg- for badge
  bg: string;           // tailwind bg-tint
  fg: string;           // tailwind text color
}> = [
  {
    key: "ma",
    letter: "A",
    label: "M&A",
    labelEn: "M&A",
    icon: "🤝",
    desc: "기업 인수합병 — 전략적 매수와 메가딜",
    descEn: "Mergers & Acquisitions — strategic buyers and megadeals",
    accent: "#3b82f6",
    dot: "bg-blue-500",
    bg: "bg-blue-50 dark:bg-blue-900/30",
    fg: "text-blue-700 dark:text-blue-300",
  },
  {
    key: "lbo",
    letter: "B",
    label: "LBO",
    labelEn: "LBO",
    icon: "💰",
    desc: "레버리지 바이아웃 — PE 펀드의 차입 매수",
    descEn: "Leveraged Buyouts — PE-sponsored debt-financed takeovers",
    accent: "#6366f1",
    dot: "bg-indigo-500",
    bg: "bg-indigo-50 dark:bg-indigo-900/30",
    fg: "text-indigo-700 dark:text-indigo-300",
  },
  {
    key: "activism",
    letter: "C",
    label: "행동주의",
    labelEn: "Activism",
    icon: "⚡",
    desc: "행동주의 캠페인 — 주주가치 제고 압박",
    descEn: "Activist campaigns — shareholder value pressure",
    accent: "#f43f5e",
    dot: "bg-rose-500",
    bg: "bg-rose-50 dark:bg-rose-900/30",
    fg: "text-rose-700 dark:text-rose-300",
  },
  {
    key: "restructuring",
    letter: "D",
    label: "구조조정",
    labelEn: "Restructuring",
    icon: "🔧",
    desc: "기업 회생·재편 — 채무 재조정과 사업 재편",
    descEn: "Corporate reorganization — debt restructuring and turnarounds",
    accent: "#f59e0b",
    dot: "bg-amber-500",
    bg: "bg-amber-50 dark:bg-amber-900/30",
    fg: "text-amber-700 dark:text-amber-300",
  },
  {
    key: "control",
    letter: "E",
    label: "경영권 분쟁",
    labelEn: "Control Contest",
    icon: "👑",
    desc: "지배구조 다툼 — 적대적 인수와 위임장 대결",
    descEn: "Governance battles — hostile bids and proxy fights",
    accent: "#a855f7",
    dot: "bg-purple-500",
    bg: "bg-purple-50 dark:bg-purple-900/30",
    fg: "text-purple-700 dark:text-purple-300",
  },
];

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const listItem = {
  hidden: { opacity: 0, x: -8 },
  show: (i: number) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.28, ease: EASE, delay: Math.min(i * 0.04, 0.4) },
  }),
};

// ── 일반 딜 행 ────────────────────────────────────────────────────────────────
function DealRow({
  deal, index, accent, fg, lang,
}: {
  deal: DealData;
  index: number;
  accent: string;
  fg: string;
  lang: Lang;
}) {
  const ko = lang === "ko";
  const base = ko ? "/deals" : "/en/deals";
  const dealValue = deal.dealSummary.dealValueDisplay.split("(")[0].trim();
  const year = deal.closedDisplay ?? deal.announcedDisplay;

  return (
    <motion.div custom={index} variants={listItem} initial="hidden" animate="show">
      <Link href={`${base}/${deal.slug}`}>
        <div className="group flex items-start gap-3 p-3.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700/50">
          {/* Acquirer → Target 로고 */}
          <div className="flex items-center gap-1.5 flex-shrink-0 mt-0.5">
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-white font-black text-[9px] shadow-sm ${deal.acquirer.bg}`}>
              {deal.acquirer.initials}
            </div>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-300 dark:text-gray-600" aria-hidden>
              <polyline points="9 18 15 12 9 6" />
            </svg>
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-white font-black text-[9px] shadow-sm ${deal.target.bg}`}>
              {deal.target.initials}
            </div>
          </div>

          {/* 텍스트 */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5 flex-wrap">
              <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400">
                {dealValue}
              </span>
              <span className="text-[10px] text-gray-400 dark:text-gray-500 truncate">
                {year} · {deal.industry}
              </span>
            </div>
            <p className={`text-[14px] font-semibold leading-snug group-hover:underline transition-colors line-clamp-1 ${fg}`}>
              {deal.title}
            </p>
            <p className="mt-0.5 text-[11px] text-gray-400 dark:text-gray-500 line-clamp-1 leading-relaxed">
              {deal.excerpt}
            </p>
          </div>

          {/* 화살표 */}
          <div className="flex flex-col items-end gap-1 flex-shrink-0 pt-0.5">
            <span
              className="text-[10px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
              style={{ color: accent }}
            >
              {ko ? "읽기 →" : "Read →"}
            </span>
            <span className="text-[10px] text-gray-400 dark:text-gray-500 whitespace-nowrap">
              {deal.acquirer.label.length > 12 ? deal.acquirer.label.slice(0, 12) + "…" : deal.acquirer.label}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ── LBO 딜 행 ─────────────────────────────────────────────────────────────────
function LboDealRow({
  deal, index, accent, fg, lang,
}: {
  deal: LboDeal;
  index: number;
  accent: string;
  fg: string;
  lang: Lang;
}) {
  const ko = lang === "ko";
  const base = ko ? "/deals" : "/en/deals";
  const m = deal.lboMetrics;
  const title = ko ? deal.title : (deal.titleEn ?? deal.title);
  const excerpt = ko ? deal.excerpt : (deal.excerptEn ?? deal.excerpt);
  const industry = ko ? deal.industry : (deal.industryEn ?? deal.industry);
  const fundLabel = ko ? deal.fund.label : (deal.fund.labelEn ?? deal.fund.label);

  return (
    <motion.div custom={index} variants={listItem} initial="hidden" animate="show">
      <Link href={`${base}/${deal.slug}`}>
        <div className="group flex items-start gap-3 p-3.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700/50">
          {/* Fund → Portfolio 로고 */}
          <div className="flex items-center gap-1.5 flex-shrink-0 mt-0.5">
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-white font-black text-[9px] shadow-sm ${deal.fund.bg}`}>
              {deal.fund.initials}
            </div>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-300 dark:text-gray-600" aria-hidden>
              <polyline points="9 18 15 12 9 6" />
            </svg>
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-white font-black text-[9px] shadow-sm ${deal.portfolio.bg}`}>
              {deal.portfolio.initials}
            </div>
          </div>

          {/* 텍스트 */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5 flex-wrap">
              <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400">
                ${m.entryEvBn}B
              </span>
              {m.moic && (
                <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                  {m.moic}× MOIC
                </span>
              )}
              {m.irrPct && (
                <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400">
                  {m.irrPct}% IRR
                </span>
              )}
              <span className="text-[10px] text-gray-400 dark:text-gray-500 truncate">
                {deal.closedDisplay ?? deal.announcedDisplay} · {industry}
              </span>
            </div>
            <p className={`text-[14px] font-semibold leading-snug group-hover:underline transition-colors line-clamp-1 ${fg}`}>
              {title}
            </p>
            <p className="mt-0.5 text-[11px] text-gray-400 dark:text-gray-500 line-clamp-1 leading-relaxed">
              {excerpt}
            </p>
          </div>

          {/* 화살표 */}
          <div className="flex flex-col items-end gap-1 flex-shrink-0 pt-0.5">
            <span
              className="text-[10px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
              style={{ color: accent }}
            >
              {ko ? "읽기 →" : "Read →"}
            </span>
            <span className="text-[10px] text-gray-400 dark:text-gray-500 whitespace-nowrap">
              {fundLabel.length > 12 ? fundLabel.slice(0, 12) + "…" : fundLabel}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ── 카테고리 폴더 ─────────────────────────────────────────────────────────────
function CategoryFolder({
  meta, deals, lboDeals, forceOpen, lang,
}: {
  meta: typeof FOLDERS[number];
  deals: DealData[];
  lboDeals: LboDeal[];
  forceOpen: boolean;
  lang: Lang;
}) {
  const [open, setOpen] = useState(false);
  const isOpen = forceOpen || open;
  const ko = lang === "ko";
  const total = deals.length + lboDeals.length;

  if (total === 0) return null;

  return (
    <div
      className={`rounded-xl border transition-all duration-200 overflow-hidden ${
        isOpen
          ? "border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-900"
          : "border-gray-200/70 dark:border-gray-700/50 bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm"
      }`}
    >
      {/* 폴더 헤더 */}
      <button
        onClick={() => setOpen(!open)}
        disabled={forceOpen}
        className="w-full flex items-center gap-3.5 px-5 py-4 text-left group"
      >
        {/* 컬러 액센트 바 */}
        <div className={`w-1 self-stretch rounded-full flex-shrink-0 ${meta.dot}`} />

        {/* 레터 배지 */}
        <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-[12px] font-black text-white flex-shrink-0 ${meta.dot} ${isOpen ? "" : "opacity-80"}`}>
          {meta.letter}
        </div>

        {/* 레이블 & 설명 */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="text-[15px] font-bold text-gray-900 dark:text-gray-100">
              {ko ? meta.label : meta.labelEn}
            </span>
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${meta.bg} ${meta.fg}`}>
              {ko ? `딜 ${total}` : `${total} deal${total !== 1 ? "s" : ""}`}
            </span>
          </div>
          <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5 truncate">
            {ko ? meta.desc : meta.descEn}
          </p>
        </div>

        {/* 편 수 + 시보 */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-[12px] font-semibold text-gray-400 dark:text-gray-500">
            {ko ? `${total}편` : `${total}`}
          </span>
          {!forceOpen && (
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.25, ease: EASE }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gray-400 dark:text-gray-500">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </motion.div>
          )}
        </div>
      </button>

      {/* 폴더 콘텐츠 */}
      <AnimatePresence initial={false}>
        {isOpen && (
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
              {lboDeals.map((d, i) => (
                <LboDealRow key={d.slug} deal={d} index={i} accent={meta.accent} fg={meta.fg} lang={lang} />
              ))}
              {deals.map((d, i) => (
                <DealRow key={d.slug} deal={d} index={lboDeals.length + i} accent={meta.accent} fg={meta.fg} lang={lang} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── 메인 ──────────────────────────────────────────────────────────────────────
export default function DealsFolderClient({
  deals,
  lboDeals = [],
  lang = "ko",
}: {
  deals: DealData[];
  lboDeals?: LboDeal[];
  lang?: Lang;
}) {
  const [search, setSearch] = useState("");
  const ko = lang === "ko";

  // 중복 제거: LBO 레지스트리에도 있는 슬러그는 일반 딜에서 제외
  // (Blackstone Hilton 등 — KO/EN 양쪽에 동일 슬러그가 별도 LboDeal 로 존재)
  const lboSlugs = useMemo(() => new Set(lboDeals.map((d) => d.slug)), [lboDeals]);
  const dedupedDeals = useMemo(
    () => deals.filter((d) => !lboSlugs.has(d.slug)),
    [deals, lboSlugs]
  );

  // 검색 필터
  const q = search.trim().toLowerCase();
  const filteredDeals = useMemo(() => {
    if (!q) return dedupedDeals;
    return dedupedDeals.filter((d) =>
      d.title.toLowerCase().includes(q) ||
      d.acquirer.label.toLowerCase().includes(q) ||
      d.target.label.toLowerCase().includes(q) ||
      d.excerpt.toLowerCase().includes(q) ||
      d.industry.toLowerCase().includes(q)
    );
  }, [dedupedDeals, q]);

  const filteredLbo = useMemo(() => {
    if (!q) return lboDeals;
    return lboDeals.filter((d) => {
      const title = ko ? d.title : (d.titleEn ?? d.title);
      const excerpt = ko ? d.excerpt : (d.excerptEn ?? d.excerpt);
      const fundLabel = ko ? d.fund.label : (d.fund.labelEn ?? d.fund.label);
      const portfolioLabel = ko ? d.portfolio.label : (d.portfolio.labelEn ?? d.portfolio.label);
      return (
        title.toLowerCase().includes(q) ||
        excerpt.toLowerCase().includes(q) ||
        fundLabel.toLowerCase().includes(q) ||
        portfolioLabel.toLowerCase().includes(q)
      );
    });
  }, [lboDeals, q, ko]);

  // 카테고리별 그룹핑
  const groupedRegular = useMemo(() => {
    const m = new Map<FolderKey, DealData[]>();
    for (const d of filteredDeals) {
      const arr = m.get(d.category) ?? [];
      arr.push(d);
      m.set(d.category, arr);
    }
    return m;
  }, [filteredDeals]);

  const totalRegular = filteredDeals.length;
  const totalLbo = filteredLbo.length;
  const total = totalRegular + totalLbo;
  const totalAll = dedupedDeals.length + lboDeals.length;

  // 카테고리 개수 표시용
  const presentFolders = FOLDERS.filter((f) => {
    if (f.key === "lbo") return totalLbo > 0;
    return (groupedRegular.get(f.key)?.length ?? 0) > 0;
  });

  return (
    <>
      {/* 통계 바 + 카테고리 칩 */}
      <div className="flex items-center gap-3 flex-wrap mb-5">
        <span className="text-[12px] font-semibold text-gray-500 dark:text-gray-400">
          {ko ? `${presentFolders.length}개 카테고리` : `${presentFolders.length} categories`}
        </span>
        <span className="w-1 h-1 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0" />
        <span className="text-[12px] font-semibold text-gray-500 dark:text-gray-400">
          {ko ? `총 ${total}/${totalAll} 딜` : `${total}/${totalAll} deals`}
        </span>

        {/* 카테고리 도트 */}
        <div className="ml-auto hidden sm:flex items-center gap-1.5 flex-wrap">
          {FOLDERS.map((f) => {
            const count = f.key === "lbo"
              ? totalLbo
              : (groupedRegular.get(f.key)?.length ?? 0);
            if (count === 0 && !q) {
              // 데이터 없으면 표시 안 함 (필터링 결과 0개는 동일)
              const totalForKey = f.key === "lbo"
                ? lboDeals.length
                : dedupedDeals.filter((d) => d.category === f.key).length;
              if (totalForKey === 0) return null;
            }
            return (
              <span
                key={f.key}
                className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${f.bg} ${f.fg}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${f.dot}`} />
                {f.letter}. {ko ? f.label : f.labelEn} {count}
              </span>
            );
          })}
        </div>
      </div>

      {/* 검색 */}
      <input
        type="search"
        placeholder={ko ? "딜명, 회사명, 산업으로 검색..." : "Search by deal, company, or sector..."}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-xl border border-gray-200 dark:border-gray-700 px-4 py-2.5 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 mb-5"
      />

      {/* 폴더 목록 */}
      {total === 0 ? (
        <div className="py-20 text-center">
          <p className="text-sm text-gray-400 dark:text-gray-500">
            {q
              ? (ko ? "검색 결과가 없습니다." : "No deals found.")
              : (ko ? "아직 등록된 딜이 없습니다." : "No deals registered yet.")}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {FOLDERS.map((f) => {
            const isLbo = f.key === "lbo";
            const folderDeals = isLbo ? [] : (groupedRegular.get(f.key) ?? []);
            const folderLbo = isLbo ? filteredLbo : [];
            if (folderDeals.length + folderLbo.length === 0) return null;
            return (
              <CategoryFolder
                key={f.key}
                meta={f}
                deals={folderDeals}
                lboDeals={folderLbo}
                forceOpen={!!q}
                lang={lang}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
