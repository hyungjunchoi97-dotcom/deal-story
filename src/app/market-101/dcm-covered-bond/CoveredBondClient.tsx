"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";
import type { MarketConcept } from "@/data/market-101-concepts";
import SeriesNav from "@/components/SeriesNav";
import { getMarket101Nav } from "@/data/market-101-concepts";
import LikeButton from "@/components/LikeButton";

// ── Types ─────────────────────────────────────────────────────────────────────
type Lang = "ko" | "en";

// ── Animation ─────────────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const accent = "#14b8a6"; // teal-500

// ── Chapter anchors ────────────────────────────────────────────────────────────
const CHAPTERS = [
  { id: "ch1", ko: "Ch.1 커버드본드란",       en: "Ch.1 What Are Covered Bonds" },
  { id: "ch2", ko: "Ch.2 200년의 역사",       en: "Ch.2 200 Years of History"   },
  { id: "ch3", ko: "Ch.3 2008년과 MBS 비교",  en: "Ch.3 vs MBS in 2008"         },
];

// ── Covered Bond vs MBS comparison table ──────────────────────────────────────
const VS_TABLE = [
  {
    feature:     (ko: boolean) => ko ? "자산 위치"       : "Asset Location",
    coveredBond: (ko: boolean) => ko ? "발행사 대차대조표 유지"    : "Stays on issuer's balance sheet",
    mbs:         (ko: boolean) => ko ? "SPV로 True Sale" : "True Sale to SPV",
  },
  {
    feature:     (ko: boolean) => ko ? "투자자 청구권"    : "Investor Claim",
    coveredBond: (ko: boolean) => ko ? "이중 (발행사 + 담보풀)" : "Dual (issuer + cover pool)",
    mbs:         (ko: boolean) => ko ? "SPV 현금흐름만"  : "SPV cash flows only",
  },
  {
    feature:     (ko: boolean) => ko ? "발행사 파산 시"   : "Issuer Bankruptcy",
    coveredBond: (ko: boolean) => ko ? "담보풀 우선 접근 유지" : "Priority access to cover pool maintained",
    mbs:         (ko: boolean) => ko ? "SPV는 이론상 분리" : "SPV theoretically isolated",
  },
  {
    feature:     (ko: boolean) => ko ? "규제 요건"        : "Regulatory Requirements",
    coveredBond: (ko: boolean) => ko ? "엄격 (LTV 상한, OC 의무, 감사)" : "Strict (LTV cap, OC requirement, audit)",
    mbs:         (ko: boolean) => ko ? "구조에 따라 다양" : "Varies by structure",
  },
  {
    feature:     (ko: boolean) => ko ? "신용등급"         : "Credit Rating",
    coveredBond: (ko: boolean) => ko ? "통상 발행사보다 높음 (AAA 가능)" : "Typically higher than issuer (AAA possible)",
    mbs:         (ko: boolean) => ko ? "트랜치별 상이"    : "Varies by tranche",
  },
  {
    feature:     (ko: boolean) => ko ? "역사적 손실"      : "Historical Losses",
    coveredBond: (ko: boolean) => ko ? "250년간 0건 (독일 Pfandbrief)" : "Zero in 250 years (German Pfandbrief)",
    mbs:         (ko: boolean) => ko ? "2008년 서브프라임 대규모 손실" : "Massive losses in 2008 subprime crisis",
  },
];

// ── Market data by country ────────────────────────────────────────────────────
const MARKET_DATA = [
  {
    country: (ko: boolean) => ko ? "덴마크"    : "Denmark",
    size: "$500bn+", pct: "14%", bar: 100, color: "bg-teal-500",
    note: (ko: boolean) => ko ? "주택금융 95% 커버드본드" : "95% of housing finance via covered bonds",
  },
  {
    country: (ko: boolean) => ko ? "독일"      : "Germany",
    size: "$400bn+", pct: "11%", bar: 80, color: "bg-blue-500",
    note: (ko: boolean) => ko ? "Pfandbrief — 세계 최초 커버드본드" : "Pfandbrief — world's first covered bond",
  },
  {
    country: (ko: boolean) => ko ? "프랑스"    : "France",
    size: "$380bn+", pct: "11%", bar: 76, color: "bg-violet-500",
    note: (ko: boolean) => ko ? "Obligations Foncières" : "Obligations Foncières",
  },
  {
    country: (ko: boolean) => ko ? "스웨덴"    : "Sweden",
    size: "$300bn+", pct: "9%",  bar: 60, color: "bg-indigo-500",
    note: (ko: boolean) => ko ? "주택담보대출 60% 커버드본드" : "60% of mortgages funded via covered bonds",
  },
  {
    country: (ko: boolean) => ko ? "기타 유럽" : "Other Europe",
    size: "$1.9tn+", pct: "55%", bar: 45, color: "bg-gray-400",
    note: (ko: boolean) => ko ? "스페인, 이탈리아, 영국 등" : "Spain, Italy, UK, others",
  },
];

// ── Case Studies ──────────────────────────────────────────────────────────────
const CASE_STUDIES = [
  {
    slug: "dcm-covered-bond",
    emoji: "🏰",
    tier: (ko: boolean) => ko ? "역사적 사례" : "Historical Case",
    title: (ko: boolean) => ko
      ? "독일 Pfandbrief — 250년의 무손실 기록"
      : "German Pfandbrief — 250 Years of Zero Losses",
    tagline: (ko: boolean) => ko
      ? "1769년 프리드리히 대왕 도입 → 두 차례 세계대전에도 투자자 손실 제로"
      : "Introduced by Frederick the Great in 1769 → zero investor losses through two World Wars",
    lesson: (ko: boolean) => ko
      ? "이중 청구권 + 과담보 + 법적 담보풀 분리의 조합이 250년의 기록을 만든 핵심이다. 규제 의무화와 외부 감사가 이 구조를 유지시킨다."
      : "The combination of dual recourse + overcollateralization + legally segregated cover pools created this 250-year record. Regulatory mandates and external audits maintain the structure.",
    color: "border-teal-200 dark:border-teal-700 bg-teal-50/60 dark:bg-teal-900/20",
    labelColor: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
  },
  {
    slug: "dcm-covered-bond",
    emoji: "🧊",
    tier: (ko: boolean) => ko ? "한계 사례" : "Limitation Case",
    title: (ko: boolean) => ko
      ? "아이슬란드 은행 시스템 붕괴 (2008)"
      : "Iceland Banking System Collapse (2008)",
    tagline: (ko: boolean) => ko
      ? "Landsbanki 등 3개 주요 은행 동시 파산 — 커버드본드 보유자도 손실 불가피"
      : "Simultaneous bankruptcy of Landsbanki and two other major banks — covered bond holders faced losses",
    lesson: (ko: boolean) => ko
      ? "이중 청구권은 발행 은행 시스템의 전면 붕괴를 막지 못한다. 커버드본드의 안전성은 발행 은행의 시스템 건전성에 달려있다. '준소버린'이라도 소버린이 무너지면 함께 무너진다."
      : "Dual recourse cannot protect against systemic collapse of the entire issuing bank sector. Covered bond safety ultimately depends on issuer system soundness. Even 'quasi-sovereign' collapses when the sovereign fails.",
    color: "border-orange-200 dark:border-orange-700 bg-orange-50/60 dark:bg-orange-900/20",
    labelColor: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  },
];

// ── FAQ ────────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko
      ? "커버드본드가 왜 회사채보다 낮은 금리로 발행되나요?"
      : "Why do covered bonds issue at lower rates than corporate bonds?",
    a: (ko: boolean) => ko
      ? "이중 청구권(발행사 + 담보풀) 덕분에 투자자 위험이 더 낮기 때문입니다. 발행사가 부도나도 담보풀에 우선 접근할 수 있어 손실 가능성이 크게 낮습니다. 또한 250년 이상의 손실 없는 역사가 시장 신뢰를 뒷받침합니다."
      : "Because dual recourse (issuer + cover pool) means lower investor risk. Even if the issuer defaults, priority access to the cover pool dramatically reduces loss probability. Over 250 years of zero-loss history also underpins market confidence.",
  },
  {
    q: (ko: boolean) => ko
      ? "HQLA와 커버드본드의 관계는?"
      : "What is the relationship between HQLA and covered bonds?",
    a: (ko: boolean) => ko
      ? "바젤 III 규제에서 은행은 30일 스트레스 시나리오를 견딜 고품질 유동성 자산(HQLA)을 보유해야 합니다. 일정 요건을 충족한 커버드본드는 HQLA Level 2A로 인정돼 은행의 유동성커버리지비율(LCR) 충족에 활용됩니다. 이것이 은행들이 커버드본드를 적극 발행하는 이유 중 하나입니다."
      : "Under Basel III, banks must hold High-Quality Liquid Assets (HQLA) to survive a 30-day stress scenario. Covered bonds meeting certain requirements qualify as HQLA Level 2A, enabling banks to use them for Liquidity Coverage Ratio (LCR) compliance. This is one reason banks actively issue covered bonds.",
  },
  {
    q: (ko: boolean) => ko
      ? "한국에도 커버드본드 시장이 있나요?"
      : "Does Korea have a covered bond market?",
    a: (ko: boolean) => ko
      ? "예. 2014년 '이중상환청구권부채권' 제도가 도입됐고, 은행들이 주택담보대출을 담보로 발행할 수 있습니다. 그러나 한국 커버드본드 시장은 유럽 대비 규모가 작고 주택금융공사(HF) MBS가 시장을 주도합니다. 시장 발전을 위한 유동성 개선과 투자자 기반 확대가 과제입니다."
      : "Yes. The 'dual recourse bond' (이중상환청구권부채권) framework was introduced in 2014, enabling banks to issue against residential mortgage collateral. However, Korea's covered bond market is small relative to Europe, with Korea Housing Finance Corporation (HF) MBS dominating housing finance. Market development faces challenges of improving liquidity and expanding the investor base.",
  },
  {
    q: (ko: boolean) => ko
      ? "과담보(OC) 요건이 왜 중요한가요?"
      : "Why is the overcollateralization (OC) requirement important?",
    a: (ko: boolean) => ko
      ? "OC는 발행 채권 가치보다 담보풀이 더 커야 한다는 요건입니다. 담보자산 일부(예: LTV 상승으로 담보 가치 하락)가 부실화돼도 투자자를 보호하는 완충재입니다. 통상 105–110% OC가 요구됩니다. 이 완충재가 없으면 커버드본드가 이중 청구권을 보장하더라도 실질 보호가 약해집니다."
      : "OC requires the cover pool to exceed outstanding bond value. It acts as a buffer protecting investors when some collateral assets underperform (e.g., LTV rises as collateral value falls). Typically 105–110% OC is required. Without this buffer, dual recourse offers weaker practical protection even if legally guaranteed.",
  },
  {
    q: (ko: boolean) => ko
      ? "커버드본드와 ABS는 어떻게 다른가요?"
      : "How are covered bonds different from ABS?",
    a: (ko: boolean) => ko
      ? "ABS(자산담보부증권)는 자산을 True Sale로 SPV에 이전하고 투자자는 SPV의 현금흐름만 청구할 수 있습니다. 커버드본드는 자산이 대차대조표에 남고 투자자는 발행사 + 담보풀 이중 청구권을 갖습니다. ABS는 더 복잡한 트랜칭 구조가 가능하고, 커버드본드는 단순하지만 더 엄격한 규제와 더 강한 투자자 보호를 제공합니다."
      : "In ABS, assets are True Sale transferred to an SPV and investors can only claim SPV cash flows. In covered bonds, assets stay on the balance sheet and investors have dual recourse (issuer + cover pool). ABS allows more complex tranching structures; covered bonds are simpler but offer stricter regulation and stronger investor protection.",
  },
];

// ── Related Terms ──────────────────────────────────────────────────────────────
const RELATED_TERMS = [
  { slug: "dcm-overview",       ko: "DCM 개요 ↗",       en: "DCM Overview ↗"    },
  { slug: "structured-abs",     ko: "ABS 구조 ↗",       en: "ABS Structure ↗"   },
  { slug: "structured-cmbs",    ko: "CMBS ↗",           en: "CMBS ↗"            },
  { slug: "dcm-investors",      ko: "채권 투자자 ↗",    en: "Bond Investors ↗"  },
];

// ── Sub-components ─────────────────────────────────────────────────────────────

function ChapterNav({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <div className="sticky top-0 z-20 bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-3xl mx-auto px-5 overflow-x-auto">
        <div className="flex gap-1 py-2.5 min-w-max">
          {CHAPTERS.map((ch) => (
            <a
              key={ch.id}
              href={`#${ch.id}`}
              className="flex-shrink-0 px-3 py-1.5 rounded-full text-[11px] font-semibold text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors"
            >
              {ko ? ch.ko : ch.en}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function VsTable({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.15)} className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60 mt-8">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "커버드본드 vs MBS — 구조 비교" : "Covered Bond vs MBS — Structure Comparison"}
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[480px]">
          <thead>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <th className="text-left px-4 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest w-1/4">
                {ko ? "항목" : "Feature"}
              </th>
              <th className="text-left px-4 py-3 text-[10px] font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest w-3/8">
                {ko ? "커버드본드" : "Covered Bond"}
              </th>
              <th className="text-left px-4 py-3 text-[10px] font-bold text-orange-600 dark:text-orange-400 uppercase tracking-widest w-3/8">
                MBS
              </th>
            </tr>
          </thead>
          <tbody>
            {VS_TABLE.map((row, i) => (
              <motion.tr
                key={i}
                variants={fadeUp(i * 0.04)}
                className="border-b border-gray-50 dark:border-gray-800/60 hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors"
              >
                <td className="px-4 py-3 text-[11px] font-semibold text-gray-600 dark:text-gray-300">
                  {row.feature(ko)}
                </td>
                <td className="px-4 py-3 text-[11px] text-teal-700 dark:text-teal-300 leading-relaxed">
                  {row.coveredBond(ko)}
                </td>
                <td className="px-4 py-3 text-[11px] text-orange-700 dark:text-orange-300 leading-relaxed">
                  {row.mbs(ko)}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

function MarketSizeChart({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.15)} className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60 mt-8">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "유럽 커버드본드 시장 — 국가별 규모 ($3.5조 총계)" : "European Covered Bond Market — By Country ($3.5T Total)"}
        </p>
      </div>
      <div className="p-5 sm:p-6 space-y-4">
        {MARKET_DATA.map((item, i) => (
          <div key={i}>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <span className="text-[12px] font-semibold text-gray-700 dark:text-gray-300">
                  {item.country(ko)}
                </span>
                <span className="text-[10px] text-gray-400 dark:text-gray-500">
                  {item.note(ko)}
                </span>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="text-[11px] font-bold text-gray-600 dark:text-gray-400 tabular-nums">{item.size}</span>
                <span className="text-[10px] text-gray-400 dark:text-gray-500 w-8 text-right">{item.pct}</span>
              </div>
            </div>
            <div className="h-3 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
              <motion.div
                className={`h-full rounded-full ${item.color}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${item.bar}%` }}
                viewport={VP}
                transition={{ duration: 0.8, delay: i * 0.1, ease: EASE }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="bg-teal-50 dark:bg-teal-900/20 px-5 py-3 border-t border-teal-100 dark:border-teal-800">
        <p className="text-[12px] text-teal-700 dark:text-teal-300 text-center leading-relaxed">
          {ko
            ? "유럽의 커버드본드 시장은 주택금융의 근간이다. 덴마크는 전체 주택금융의 95%가 커버드본드를 통해 이루어진다."
            : "Europe's covered bond market is the backbone of housing finance. In Denmark, 95% of all housing finance flows through covered bonds."}
        </p>
      </div>
    </motion.div>
  );
}

function DualRecourseCallout({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8 rounded-2xl overflow-hidden border border-teal-200/60 dark:border-teal-700/60">
      <div className="bg-teal-50 dark:bg-teal-900/20 px-5 py-3 border-b border-teal-100/60 dark:border-teal-800/60">
        <p className="text-[10px] font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest">
          {ko ? "이중 청구권 구조 — 시각화" : "Dual Recourse Structure — Visualization"}
        </p>
      </div>
      <div className="p-6">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {/* Investor box */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VP}
            transition={{ duration: 0.5, ease: EASE }}
            className="rounded-xl border border-teal-200 dark:border-teal-700 bg-teal-50 dark:bg-teal-900/30 px-5 py-4 text-center w-full sm:w-40 flex-shrink-0"
          >
            <p className="text-[13px] font-black text-teal-800 dark:text-teal-200 mb-1">
              {ko ? "투자자" : "Investor"}
            </p>
            <p className="text-[10px] text-teal-600 dark:text-teal-400">
              {ko ? "커버드본드 보유" : "Covered bond holder"}
            </p>
          </motion.div>

          {/* Arrows */}
          <div className="flex sm:flex-col items-center gap-2 flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={VP}
              transition={{ duration: 0.4, delay: 0.2, ease: EASE }}
              className="text-center"
            >
              <div className="text-[10px] text-gray-500 dark:text-gray-400 font-semibold">
                {ko ? "① 일반 청구권" : "① General claim"}
              </div>
              <div className="text-teal-400 text-lg">→</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={VP}
              transition={{ duration: 0.4, delay: 0.3, ease: EASE }}
              className="text-center"
            >
              <div className="text-[10px] text-gray-500 dark:text-gray-400 font-semibold">
                {ko ? "② 우선 청구권" : "② Priority claim"}
              </div>
              <div className="text-teal-400 text-lg">→</div>
            </motion.div>
          </div>

          {/* Right side: bank + cover pool */}
          <div className="flex flex-col gap-3 flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VP}
              transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
              className="rounded-xl border border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/20 px-4 py-3 text-center"
            >
              <p className="text-[12px] font-black text-blue-800 dark:text-blue-200">
                {ko ? "발행 은행" : "Issuing Bank"}
              </p>
              <p className="text-[10px] text-blue-600 dark:text-blue-400">
                {ko ? "일반 대차대조표 자산" : "General balance sheet assets"}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VP}
              transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
              className="rounded-xl border border-teal-200 dark:border-teal-700 bg-teal-50/80 dark:bg-teal-900/30 px-4 py-3 text-center"
            >
              <p className="text-[12px] font-black text-teal-800 dark:text-teal-200">
                {ko ? "담보풀 (Cover Pool)" : "Cover Pool"}
              </p>
              <p className="text-[10px] text-teal-600 dark:text-teal-400">
                {ko ? "법적 분리 · OC 105–110% · 외부 감사" : "Legally segregated · OC 105–110% · External audit"}
              </p>
            </motion.div>
          </div>
        </div>

        <div className="mt-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800 px-4 py-3">
          <p className="text-[11px] text-amber-700 dark:text-amber-300 leading-relaxed">
            {ko
              ? "핵심: 은행이 파산해도 커버드본드 보유자는 담보풀에 우선 접근한다. 담보풀과 일반 대차대조표는 법적으로 분리된다."
              : "Key: Even if the bank fails, covered bond holders maintain priority access to the cover pool. The cover pool and general balance sheet are legally separated."}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function CaseStudyCards({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={VP} className="mt-8 space-y-4">
      {CASE_STUDIES.map((cs, i) => (
        <motion.div key={cs.slug + i} variants={fadeUp(i * 0.07)} className={`rounded-2xl border p-5 ${cs.color}`}>
          <div className="flex items-start gap-3">
            <span className="text-3xl flex-shrink-0">{cs.emoji}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-2">
                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${cs.labelColor}`}>
                  {cs.tier(ko)}
                </span>
              </div>
              <h3 className="text-[15px] font-black text-gray-900 dark:text-gray-100 mb-1">{cs.title(ko)}</h3>
              <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{cs.tagline(ko)}</p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed border-l-2 border-gray-300 dark:border-gray-600 pl-3">
                {cs.lesson(ko)}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

// ── Main Export ────────────────────────────────────────────────────────────────
export default function CoveredBondClient({ concept, lang }: { concept: MarketConcept; lang: Lang }) {
  const ko = lang === "ko";
  const nav = getMarket101Nav("dcm-covered-bond");

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* JSON-LD: Article */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: ko ? concept.title : concept.titleEn,
              description: ko ? concept.excerpt : concept.excerptEn,
              author: { "@type": "Organization", name: "Deal Story" },
              publisher: { "@type": "Organization", name: "Deal Story" },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": ko
                  ? "https://dealstory.io/market-101/dcm-covered-bond"
                  : "https://dealstory.io/en/market-101/dcm-covered-bond",
              },
            }),
          }}
        />
        {/* JSON-LD: FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQS.map((f) => ({
                "@type": "Question",
                name: f.q(ko),
                acceptedAnswer: { "@type": "Answer", text: f.a(ko) },
              })),
            }),
          }}
        />

        {/* Hero */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-3xl mx-auto px-5 py-10">
            <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-4">
              <Link href={ko ? "/" : "/en"} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                {ko ? "홈" : "Home"}
              </Link>
              <span>›</span>
              <Link href={ko ? "/market-101" : "/en/market-101"} className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                Market 101
              </Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300">
                {ko ? "커버드본드" : "Covered Bond"}
              </span>
            </div>

            <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold mb-4 bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300">
              {ko ? "DCM — 커버드본드 가이드" : "DCM — Covered Bond Guide"}
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 leading-snug mb-2"
            >
              {ko ? concept.title : concept.titleEn}
            </motion.h1>

            {ko && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[12px] text-gray-400 dark:text-gray-500 italic mb-4"
              >
                {concept.titleEn}
              </motion.p>
            )}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              {ko ? concept.excerpt : concept.excerptEn}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mt-5 flex-wrap"
            >
              <span className="text-[11px] text-gray-400 dark:text-gray-500">
                {concept.readingMinutes}{ko ? "분 읽기" : " min read"}
              </span>
              <span className="text-gray-300 dark:text-gray-600">·</span>
              <div className="flex gap-1.5 flex-wrap">
                {(ko ? concept.tags : (concept.tagsEn ?? concept.tags)).slice(0, 6).map((tag) => (
                  <span key={tag} className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded text-[10px]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-4 flex items-center gap-2"
            >
              <Link
                href="/market-101/dcm-covered-bond"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${
                  ko
                    ? "bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300"
                    : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                }`}
              >
                한국어
              </Link>
              <Link
                href="/en/market-101/dcm-covered-bond"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${
                  !ko
                    ? "bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300"
                    : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                }`}
              >
                English
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Share — top */}
        <div className="flex justify-end max-w-3xl mx-auto px-5 mb-2 mt-4">
          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="top" lang={lang} />
          <LikeButton slug={concept.slug} lang={lang} />
        </div>

        {/* Chapter Nav */}
        <ChapterNav lang={lang} />

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-20">

          {/* Ch.1 커버드본드란 */}
          <motion.section id="ch1" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-teal-600 dark:text-teal-400 uppercase tracking-widest mb-1">Ch.1</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? concept.sections[0].heading : concept.sections[0].headingEn}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: accent + "4d" }}>
              <div className="space-y-3">
                {(ko ? concept.sections[0].body : concept.sections[0].bodyEn)
                  .split("\n\n")
                  .map((para, j) => (
                    <motion.p
                      key={j}
                      variants={fadeUp(j * 0.04)}
                      className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed"
                    >
                      {para}
                    </motion.p>
                  ))}
              </div>
            </div>

            <DualRecourseCallout ko={ko} />
            <VsTable ko={ko} />
          </motion.section>

          {/* Ch.2 200년의 역사 */}
          <motion.section id="ch2" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-teal-600 dark:text-teal-400 uppercase tracking-widest mb-1">Ch.2</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? concept.sections[1].heading : concept.sections[1].headingEn}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: accent + "4d" }}>
              <div className="space-y-3">
                {(ko ? concept.sections[1].body : concept.sections[1].bodyEn)
                  .split("\n\n")
                  .map((para, j) => (
                    <motion.p
                      key={j}
                      variants={fadeUp(j * 0.04)}
                      className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed"
                    >
                      {para}
                    </motion.p>
                  ))}
              </div>
            </div>

            <MarketSizeChart ko={ko} />

            {/* Banker's blockquote */}
            <motion.blockquote variants={fadeUp(0.15)} className="mt-8 border-l-4 border-teal-400 pl-4">
              <p className="text-[13px] italic text-gray-600 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "\"Pfandbrief는 단순한 채권이 아니다 — 두 번의 세계대전을 견뎌낸 법적·규제적 인프라의 산물이다. 250년의 역사가 그 구조의 강건함을 증명한다.\""
                  : "\"The Pfandbrief is not just a bond — it's the product of a legal and regulatory infrastructure that survived two world wars. 250 years of history proves the robustness of that structure.\""}
              </p>
              <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-2">
                {ko ? "— DCM FIG 뱅커, 프랑크푸르트·서울 복수 발행 경험, 2024" : "— DCM FIG Banker, Frankfurt & Seoul multi-market veteran, 2024"}
              </p>
            </motion.blockquote>
          </motion.section>

          {/* Ch.3 2008년과 MBS 비교 */}
          <motion.section id="ch3" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-teal-600 dark:text-teal-400 uppercase tracking-widest mb-1">Ch.3</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? concept.sections[2].heading : concept.sections[2].headingEn}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-8" style={{ borderColor: accent + "4d" }}>
              <div className="space-y-3">
                {(ko ? concept.sections[2].body : concept.sections[2].bodyEn)
                  .split("\n\n")
                  .map((para, j) => (
                    <motion.p
                      key={j}
                      variants={fadeUp(j * 0.04)}
                      className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed"
                    >
                      {para}
                    </motion.p>
                  ))}
              </div>
            </div>

            {/* Case Studies */}
            <motion.p variants={fadeUp(0)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
              {ko
                ? "두 가지 사례가 커버드본드의 강점과 한계를 동시에 보여준다."
                : "Two cases simultaneously illustrate both the strengths and limits of covered bonds."}
            </motion.p>

            <CaseStudyCards ko={ko} />
          </motion.section>

          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="mid" likeSlug={concept.slug} lang={lang} />

          {/* Key Terms */}
          {concept.keyTerms && concept.keyTerms.length > 0 && (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.h2 variants={fadeUp()} className="text-[13px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
                {ko ? "핵심 용어" : "Key Terms"}
              </motion.h2>
              <motion.div variants={fadeUp(0.05)} className="space-y-3">
                {concept.keyTerms.map((kt) => (
                  <div key={kt.term} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4">
                    <div className="flex items-baseline gap-2 mb-1.5">
                      <span className="text-[13px] font-black text-gray-900 dark:text-gray-100">{ko ? kt.term : kt.termEn}</span>
                      {ko && <span className="text-[10px] text-gray-400 dark:text-gray-500 italic">{kt.termEn}</span>}
                    </div>
                    <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed">
                      {ko ? kt.definition : kt.definitionEn}
                    </p>
                  </div>
                ))}
              </motion.div>
            </motion.section>
          )}

          {/* FAQ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-2">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>
            <motion.div variants={fadeUp(0.05)}>
              <FaqAccordion items={FAQS.map((f) => ({ q: f.q(ko), a: f.a(ko) }))} />
            </motion.div>
          </motion.section>

          {/* Related Concepts */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.h2 variants={fadeUp()} className="text-[13px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
              {ko ? "관련 개념" : "Related Concepts"}
            </motion.h2>
            <motion.div variants={fadeUp(0.05)} className="flex flex-wrap gap-2">
              {RELATED_TERMS.map((term) => (
                <Link
                  key={term.slug}
                  href={`${ko ? "" : "/en"}/market-101/${term.slug}`}
                  className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-[12px] font-medium text-gray-700 dark:text-gray-300 hover:border-teal-300 dark:hover:border-teal-700 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
                >
                  {ko ? term.ko : term.en}
                </Link>
              ))}
            </motion.div>
          </motion.section>

          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="bottom" lang={lang} />

          <LikeButton slug={concept.slug} lang={lang} />

          {/* References */}
          {concept.references && concept.references.length > 0 && (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP} className="border-t border-gray-200 dark:border-gray-700 pt-8">
              <motion.h2 variants={fadeUp()} className="text-[13px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
                {ko ? "참고 자료" : "References"}
              </motion.h2>
              <ol className="space-y-2.5">
                {concept.references.map((ref) => (
                  <motion.li key={ref.id} variants={fadeUp()} className="flex gap-3 text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[10px] font-bold mt-0.5">
                      {ref.id}
                    </span>
                    <span>
                      <span className="font-medium text-gray-600 dark:text-gray-300">{ref.author}.</span>{" "}
                      {ref.url ? (
                        <a href={ref.url} target="_blank" rel="noopener noreferrer" className="italic hover:text-teal-600 dark:hover:text-teal-400 hover:underline transition-colors">
                          {ref.title}
                        </a>
                      ) : (
                        <span className="italic">{ref.title}</span>
                      )}
                      {". "}<span className="text-gray-400 dark:text-gray-500">{ref.source}.</span>
                    </span>
                  </motion.li>
                ))}
              </ol>
            </motion.section>
          )}

          {/* SeriesNav */}
          <SeriesNav
            prev={
              nav.prev
                ? {
                    href: `${ko ? "" : "/en"}/market-101/${nav.prev.slug}`,
                    title: ko ? nav.prev.title : (nav.prev.titleEn ?? nav.prev.title),
                  }
                : null
            }
            next={
              nav.next
                ? {
                    href: `${ko ? "" : "/en"}/market-101/${nav.next.slug}`,
                    title: ko ? nav.next.title : (nav.next.titleEn ?? nav.next.title),
                  }
                : null
            }
            lang={lang}
          />

          {/* Back links */}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-3">
            <Link href={ko ? "/market-101" : "/en/market-101"} className="inline-flex items-center gap-1.5 text-[13px] font-medium text-teal-600 dark:text-teal-400 hover:underline">
              ← {ko ? "Market 101 전체 보기" : "All Market 101"}
            </Link>
            <Link href={ko ? "/market-101/dcm-overview" : "/en/market-101/dcm-overview"} className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:underline">
              {ko ? "DCM 개요 →" : "DCM Overview →"}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
