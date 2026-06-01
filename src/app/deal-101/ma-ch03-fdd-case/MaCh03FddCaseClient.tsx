/**
 * M&A 시리즈 Ch.3 — FDD 실랑이: 1회성 vs 반복적
 *
 * 메인 케이스: Bruce Wasserstein × RJR Nabisco (1988)
 * 모던 렌즈:    WeWork Community Adjusted EBITDA (2019)
 *
 * Sections:
 *  § 1 한 줄 정리 — FDD의 전부는 1회성 vs 반복적
 *  § 2 왜 $1 EBITDA가 $10 가격이 되는가
 *  § 3 Add-back 카테고리 도감 (8개 + 색상 분류)
 *  § 4 케이스 1: Wasserstein × RJR Nabisco (1988)
 *  § 5 케이스 2: WeWork Community Adjusted EBITDA (2019)
 *  § 6 IB Lead가 이 싸움에서 실제로 하는 일
 */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import SeriesNav from "@/components/SeriesNav";
import { MA_CHAPTERS, getMaChapterBySlug, getMaSeriesNav } from "@/data/ma-series";
import LikeButton from "@/components/LikeButton";

type Lang = "ko" | "en";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (d = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay: d } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

const SLUG = "ma-ch03-fdd-case";
const ACCENT = "#3b82f6";

// ── Add-back taxonomy ────────────────────────────────────────────────
const ADDBACKS = [
  { koCat: "Stock-based compensation",   enCat: "Stock-based compensation",   verdict: "recurring", koWhy: "매년 발생, 직원 보상 비용의 핵심", enWhy: "Recurs every year — core employee compensation" },
  { koCat: "Restructuring charges",       enCat: "Restructuring charges",       verdict: "one-time", koWhy: "특정 구조조정 프로젝트, 끝나면 사라짐", enWhy: "Tied to a specific restructuring project, ends when complete" },
  { koCat: "M&A integration costs",       enCat: "M&A integration costs",       verdict: "one-time", koWhy: "이번 deal 한정. 단, frequent acquirer는 회색", enWhy: "Limited to this deal. Grey area for frequent acquirers" },
  { koCat: "Litigation settlements",      enCat: "Litigation settlements",      verdict: "grey",     koWhy: "한 건이면 1회성, 반복되면 사업 패턴",          enWhy: "One case is one-time; repeated cases reflect a business pattern" },
  { koCat: "COVID-related charges",       enCat: "COVID-related charges",       verdict: "one-time", koWhy: "팬데믹 한정 비용 (PPE, 영업중단 손실)",          enWhy: "Pandemic-specific (PPE, business interruption losses)" },
  { koCat: "Owner's compensation excess", enCat: "Owner's compensation excess", verdict: "one-time", koWhy: "Private company에서 owner 과다 보상 정상화", enWhy: "Normalizing excess owner pay in private companies" },
  { koCat: "Bad debt write-offs",         enCat: "Bad debt write-offs",         verdict: "recurring",koWhy: "사업 모델의 일부 — credit risk는 항상 있음",      enWhy: "Part of the business model — credit risk is always there" },
  { koCat: "Consulting / advisory fees",  enCat: "Consulting / advisory fees",  verdict: "grey",     koWhy: "Deal 한정이면 1회성, 항시 외주면 반복적",        enWhy: "Deal-specific is one-time; ongoing outsourcing is recurring" },
];

// ── RJR Nabisco bid table ────────────────────────────────────────────
const RJR_BIDS = [
  { koBidder: "Ross Johnson (Management) + Shearson Lehman", enBidder: "Ross Johnson (Management) + Shearson Lehman", banker: "Bruce Wasserstein (First Boston)", initial: "$75", final: "$112", koAdj: "Management projection 가장 aggressive — 향후 EBITDA 성장 가정 +18%/yr", enAdj: "Most aggressive management projection — +18% YoY EBITDA growth assumed" },
  { koBidder: "KKR (Kohlberg Kravis Roberts)",               enBidder: "KKR (Kohlberg Kravis Roberts)",               banker: "Drexel Burnham + Morgan Stanley",      initial: "$90", final: "$109", koAdj: "더 보수적 projection + 자산 매각 가정 ($5B 매각 후 부채 상환)", enAdj: "More conservative projection + asset sale assumption ($5B divestiture for debt paydown)" },
  { koBidder: "Forstmann Little",                            enBidder: "Forstmann Little",                            banker: "Goldman Sachs",                         initial: "$94", final: "$94",  koAdj: "Junk bond 없이 보수적 자본구조 고집 → 결국 입찰 포기", enAdj: "Refused to use junk bonds, stuck to conservative cap structure → withdrew" },
];

// ── WeWork community-adjusted EBITDA bridge ──────────────────────────
const WEWORK_BRIDGE = [
  { koLabel: "GAAP Operating Loss",            enLabel: "GAAP Operating Loss",            value: -1900, color: "#ef4444", koNote: "실제 GAAP 손실 (2018)",                                     enNote: "Actual GAAP loss (2018)" },
  { koLabel: "+ Stock-based comp",             enLabel: "+ Stock-based comp",             value: 350,   color: "#f59e0b", koNote: "표준 add-back. 정상 (recurring 논쟁 있음)",                  enNote: "Standard add-back. Conventional (with recurring debate)" },
  { koLabel: "+ Pre-opening costs",            enLabel: "+ Pre-opening costs",            value: 460,   color: "#f59e0b", koNote: "새 office 오픈 비용 — 성장 중 매년 발생하면 사실상 recurring", enNote: "New office openings — effectively recurring during growth phase" },
  { koLabel: "+ G&A, sales, marketing",        enLabel: "+ G&A, sales, marketing",        value: 1200,  color: "#dc2626", koNote: "★ Neumann의 발명 — 'community building 비용은 투자'",         enNote: "★ Neumann's invention — 'community building costs are investments'" },
  { koLabel: "+ Growth-related expense",       enLabel: "+ Growth-related expense",       value: 1490,  color: "#dc2626", koNote: "★ Marketing + 인력 채용비를 'growth investment'로 reclass",   enNote: "★ Reclassified marketing + headcount as 'growth investment'" },
  { koLabel: "= Community Adjusted EBITDA",    enLabel: "= Community Adjusted EBITDA",    value: 1600,  color: "#10b981", koNote: "최종 발표 수치 (2018)",                                       enNote: "Final reported figure (2018)" },
];

const WEWORK_MAX = 2000;

export default function MaCh03FddCaseClient({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const chapter = getMaChapterBySlug(SLUG)!;
  const { prev, next } = getMaSeriesNav(SLUG);
  const base = ko ? "/deal-101" : "/en/deal-101";

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="max-w-3xl mx-auto px-5 pt-8 pb-2">
          <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
            <Link href={ko ? "/" : "/en"} className="hover:text-gray-600 dark:hover:text-gray-300">{ko ? "홈" : "Home"}</Link>
            <span>›</span>
            <Link href={base} className="hover:text-gray-600 dark:hover:text-gray-300">Deal 101</Link>
            <span>›</span>
            <span className="text-gray-600 dark:text-gray-300 font-medium">{ko ? "M&A 시리즈 · Ch.3" : "M&A Series · Ch.3"}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="max-w-3xl mx-auto px-5 pt-6 pb-10">
          <div className="mb-4 flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full" style={{ background: `${ACCENT}15`, color: ACCENT }}>
              {ko ? "M&A 시리즈" : "M&A Series"} · Ch.3
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
              {chapter.readingMinutes}{ko ? "분" : " min"}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-3">
            {ko ? chapter.titleKo : chapter.titleEn}
          </h1>
          <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">
            {ko ? chapter.taglineKo : chapter.taglineEn}
          </p>
          <p className="mt-3 text-[12px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            {ko ? "케이스: " : "Cases: "}{ko ? chapter.caseKo : chapter.caseEn}
          </p>
        </section>

        {/* Series chapter pills */}
        <div className="max-w-3xl mx-auto px-5 mb-10">
          <div className="flex gap-1.5 flex-wrap">
            {MA_CHAPTERS.map((ch) => {
              const isCurrent = ch.slug === SLUG;
              const isDraft = ch.status !== "published";
              return (
                <Link
                  key={ch.slug}
                  href={`${base}/${ch.slug}`}
                  className={`text-[11px] px-3 py-1.5 rounded-full font-medium transition-colors ${
                    isCurrent
                      ? "text-white"
                      : isDraft
                      ? "text-gray-400 dark:text-gray-600 bg-gray-50 dark:bg-gray-800/40 cursor-not-allowed pointer-events-none"
                      : "text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                  style={isCurrent ? { background: ACCENT } : {}}
                >
                  Ch.{ch.ch}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 pb-16 space-y-14">

          {/* § 1 — One-line summary */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 1</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "FDD의 전부는 한 줄로 — 1회성 vs 반복적" : "FDD in one line — one-time vs recurring"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>
            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>{ko
                ? "FDD report를 처음 본 사람은 200페이지에 압도되지만, 실제 fight는 한 질문으로 요약됩니다. 이 비용이 매년 발생하는가, 아니면 한 번으로 끝나는가. 매년 발생하면 EBITDA에서 못 빼고, 한 번 끝이면 EBITDA에서 빼고 multiple 곱해 가격을 올린다. 그 분류 한 줄로 가격이 $50M, $200M씩 흔들립니다."
                : "First-timers are overwhelmed by 200-page FDD reports — but the actual fight reduces to one question. Does this expense recur every year, or is it a one-shot? Recurring means it stays in EBITDA; one-time means you strip it out and the multiple lifts the price. That single classification call moves prices by $50M, $200M at a time."}</p>
              <p>{ko
                ? "매도자는 모든 회색지대 비용을 1회성으로 분류하려 하고, 매수자는 모든 회색지대 비용을 반복적으로 분류하려 합니다. FDD report는 그 싸움의 결과물이고, IB Lead의 일은 그 fight를 가격 협상으로 번역하는 것입니다."
                : "Sellers want every grey-area expense classified as one-time; buyers want every grey-area expense classified as recurring. The FDD report is the artifact of that fight. The IB Lead's job is translating that fight into price negotiation."}</p>
            </motion.div>
          </motion.section>

          {/* § 2 — Why $1 EBITDA = $10 price */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 2</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "왜 $1 EBITDA가 $10 가격이 되는가" : "Why $1 of EBITDA becomes $10 of price"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>
            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 mb-5">
              <p>{ko
                ? "M&A 가격은 거의 항상 EV/EBITDA multiple 형태로 결정됩니다. 즉 가격 = EBITDA × Multiple. Multiple은 sector·deal 종류에 따라 보통 8-15× 범위. 따라서 EBITDA에 $1을 더하면 가격이 $8-15 늘어납니다. 이게 1회성 add-back 한 줄을 가지고 며칠을 싸우는 진짜 이유."
                : "M&A prices are almost always set as an EV/EBITDA multiple. Price = EBITDA × Multiple. The multiple typically lands in the 8-15× range depending on sector and deal type. So adding $1 to EBITDA adds $8-15 to price. That's why a single line item gets fought over for days."}</p>
            </motion.div>

            <motion.div variants={fadeUp(0.15)} className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                  {ko ? "Add-back 한 줄의 가격 임팩트 (Multiple 12× 가정)" : "Price impact of one add-back line (assuming 12× multiple)"}
                </p>
              </div>
              <div className="p-5 sm:p-6 bg-white dark:bg-gray-900">
                <table className="min-w-full text-[12px]">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 font-semibold text-gray-500 dark:text-gray-400">{ko ? "Add-back 항목" : "Add-back item"}</th>
                      <th className="text-right py-2 font-semibold text-gray-500 dark:text-gray-400">EBITDA</th>
                      <th className="text-right py-2 font-semibold text-gray-500 dark:text-gray-400">{ko ? "가격 변동" : "Price impact"}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                    <tr><td className="py-2.5 text-gray-700 dark:text-gray-300">{ko ? "Restructuring 비용 (1회성 인정 시)" : "Restructuring (if accepted as one-time)"}</td><td className="py-2.5 text-right font-mono text-emerald-600 dark:text-emerald-400">+$10M</td><td className="py-2.5 text-right font-mono text-emerald-600 dark:text-emerald-400">+$120M</td></tr>
                    <tr><td className="py-2.5 text-gray-700 dark:text-gray-300">{ko ? "Stock-based comp (recurring 인정 시)" : "Stock-based comp (if classified recurring)"}</td><td className="py-2.5 text-right font-mono text-rose-600 dark:text-rose-400">-$30M</td><td className="py-2.5 text-right font-mono text-rose-600 dark:text-rose-400">-$360M</td></tr>
                    <tr><td className="py-2.5 text-gray-700 dark:text-gray-300">{ko ? "COVID 비용 (1회성 인정 시)" : "COVID charges (if accepted as one-time)"}</td><td className="py-2.5 text-right font-mono text-emerald-600 dark:text-emerald-400">+$15M</td><td className="py-2.5 text-right font-mono text-emerald-600 dark:text-emerald-400">+$180M</td></tr>
                    <tr className="bg-gray-50 dark:bg-gray-900/40"><td className="py-2.5 font-bold text-gray-900 dark:text-gray-100">{ko ? "순 가격 영향 (이 3건만)" : "Net price impact (these 3 items)"}</td><td className="py-2.5 text-right font-mono font-bold text-gray-900 dark:text-gray-100">-$5M EBITDA</td><td className="py-2.5 text-right font-mono font-bold" style={{ color: ACCENT }}>-$60M</td></tr>
                  </tbody>
                </table>
                <p className="mt-4 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">{ko
                  ? "$1B 딜에서 add-back 3건의 분류로 $60M (6%) 가격이 흔들림. 일반적인 deal에는 8-15개 add-back이 있고 각각 며칠씩 싸움."
                  : "On a $1B deal, three add-back classifications move price by $60M (6%). Typical deals have 8-15 add-backs, each fought over for days."}</p>
              </div>
            </motion.div>
          </motion.section>

          {/* § 3 — Add-back taxonomy */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 3</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "Add-back 8개 카테고리 — 어디가 1회성이고 어디가 회색인가" : "8 add-back categories — what's one-time, what's grey"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>
            <motion.div variants={fadeUp(0.1)} className="space-y-2">
              {ADDBACKS.map((a, i) => {
                const badgeStyle =
                  a.verdict === "one-time" ? "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300" :
                  a.verdict === "recurring" ? "bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300" :
                  "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300";
                const verdictLabel =
                  a.verdict === "one-time" ? (ko ? "1회성" : "One-time") :
                  a.verdict === "recurring" ? (ko ? "반복적" : "Recurring") :
                  (ko ? "회색지대" : "Grey area");
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.3, delay: i * 0.04, ease: EASE }}
                    className="p-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 flex items-start gap-3"
                  >
                    <span className={`flex-shrink-0 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${badgeStyle}`}>{verdictLabel}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-bold text-gray-900 dark:text-gray-100 leading-snug">{ko ? a.koCat : a.enCat}</p>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5 leading-snug">{ko ? a.koWhy : a.enWhy}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.section>

          {/* § 4 — RJR Nabisco case */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 4 · {ko ? "케이스 1" : "Case 1"}</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "Wasserstein × RJR Nabisco (1988) — Adjusted EBITDA가 만들어진 순간" : "Wasserstein × RJR Nabisco (1988) — when Adjusted EBITDA was born"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>{ko
                ? "1988년 가을, RJR Nabisco (담배 RJR + 식품 Nabisco)는 LBO 사상 최대 $25B 입찰 전쟁의 무대가 됩니다. CEO Ross Johnson이 management bid를 띄우자, KKR이 hostile bid로 받아치고, Forstmann Little까지 가세하면서 3파전. 이 deal은 'Barbarians at the Gate' 책으로 영구히 documented됐고, 그 안에서 First Boston의 Bruce Wasserstein이 management side advisor로 활약합니다."
                : "Fall 1988: RJR Nabisco (tobacco RJR + food Nabisco) became the stage for the largest LBO bidding war in history at $25B. CEO Ross Johnson floated a management bid, KKR countered with a hostile, and Forstmann Little joined as the third. The deal was immortalized in 'Barbarians at the Gate.' In that book, First Boston's Bruce Wasserstein appears as advisor to the management side."}</p>
              <p>{ko
                ? "당시는 'Adjusted EBITDA'라는 용어 자체가 시장에서 정착되기 전입니다. 그러나 정확히 이 deal에서 그 개념이 발명됐다고 봐도 됩니다 — 세 입찰자가 각자 다른 'normalized cash flow' 정의로 가격을 정당화했기 때문입니다. Wasserstein은 management projection을 가장 aggressive하게 만들어서 가격을 정당화했고 (RJR의 미래 EBITDA가 18% 성장한다는 가정), KKR은 더 보수적인 baseline + asset sale을 통해 정당화했습니다."
                : "At the time, 'Adjusted EBITDA' wasn't yet a settled market term. But arguably it was invented in this very deal — three bidders justified prices using three different definitions of 'normalized cash flow.' Wasserstein built the most aggressive management projection (assuming RJR's EBITDA would compound at 18% per year). KKR justified its price with a more conservative baseline plus asset sales."}</p>
            </motion.div>

            {/* RJR bid comparison */}
            <motion.div variants={fadeUp(0.15)} className="mt-6 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                  {ko ? "RJR Nabisco 3파전 — 세 가지 EBITDA story" : "RJR Nabisco 3-way fight — three EBITDA stories"}
                </p>
              </div>
              <div className="divide-y divide-gray-100 dark:divide-gray-800">
                {RJR_BIDS.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.3, delay: i * 0.06, ease: EASE }}
                    className="p-5 bg-white dark:bg-gray-900"
                  >
                    <div className="flex items-baseline justify-between gap-3 flex-wrap mb-1.5">
                      <p className="text-[13px] font-bold text-gray-900 dark:text-gray-100">{ko ? b.koBidder : b.enBidder}</p>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 font-mono">{b.banker}</p>
                    </div>
                    <div className="flex items-baseline gap-3 mb-2 text-[12px]">
                      <span className="text-gray-500 dark:text-gray-400">Initial: <span className="font-mono text-gray-700 dark:text-gray-300">{b.initial}/sh</span></span>
                      <span className="text-gray-300 dark:text-gray-600">→</span>
                      <span className="font-bold" style={{ color: ACCENT }}>Final: <span className="font-mono">{b.final}/sh</span></span>
                    </div>
                    <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-snug">{ko ? b.koAdj : b.enAdj}</p>
                  </motion.div>
                ))}
              </div>
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-t border-gray-200 dark:border-gray-700 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko ? "결과: KKR이 $109/sh ($25B 총액)로 우승. Ross Johnson의 management bid는 board에 의해 거절됨." : "Outcome: KKR won at $109/sh ($25B total). Ross Johnson's management bid was rejected by the board."}
              </div>
            </motion.div>

            {/* Lesson */}
            <motion.div variants={fadeUp(0.2)} className="mt-6 rounded-2xl p-5 border-l-4 bg-blue-50/40 dark:bg-blue-950/20 border-blue-400 dark:border-blue-700">
              <p className="text-[10px] font-bold uppercase tracking-widest text-blue-700 dark:text-blue-300 mb-1.5">
                {ko ? "Wasserstein이 가르쳐준 lesson" : "What Wasserstein taught"}
              </p>
              <p className="text-[13px] text-blue-900 dark:text-blue-100 leading-relaxed">
                {ko
                  ? "가격은 EBITDA × Multiple이고, EBITDA는 협상 대상이다. 같은 회사를 보고 세 banker가 세 가지 다른 EBITDA story를 만들어 세 가지 다른 가격을 정당화한다. IB의 일은 자기 client에게 가장 유리한 story를 사실의 범위 안에서 짜는 것."
                  : "Price equals EBITDA times multiple — and EBITDA is negotiable. Looking at the same company, three bankers can build three different EBITDA stories to justify three different prices. The IB's job is to build the story most favorable to its client, within the bounds of fact."}
              </p>
            </motion.div>
          </motion.section>

          {/* § 5 — WeWork modern lens */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 5 · {ko ? "케이스 2" : "Case 2"}</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "WeWork (2019) — Community Adjusted EBITDA가 fiction이 된 지점" : "WeWork (2019) — when Community Adjusted EBITDA became fiction"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>{ko
                ? "Wasserstein이 1988년에 보여준 'EBITDA story는 협상 대상'이라는 원칙은 한 가지 묵시적 전제 위에 서 있습니다 — story가 사실에 fit해야 한다는 것. 그 전제가 깨질 때 무슨 일이 일어나는지를 31년 후 WeWork가 정확히 보여줬습니다."
                : "Wasserstein's 1988 principle — that the EBITDA story is negotiable — rests on one implicit premise: the story must fit the facts. WeWork showed exactly what happens when that premise breaks, 31 years later."}</p>
              <p>{ko
                ? "Adam Neumann이 만든 'Community Adjusted EBITDA'는 GAAP operating loss $-1.9B을 가져다가 stock comp + pre-opening costs + 'growth-related expense' + 'community-building expense'를 add-back으로 빼서 $1.6B의 positive EBITDA로 변신시켰습니다. 차이가 $3.5B. 이 metric으로 SoftBank가 회사를 $47B로 평가했고, IPO를 준비했으나, S-1 공시 후 시장이 metric을 거부하면서 IPO는 철회됐고 가치는 $8B로 폭락. CEO는 사임."
                : "Adam Neumann's invention, 'Community Adjusted EBITDA,' took GAAP operating loss of -$1.9B and added back stock comp + pre-opening costs + 'growth-related expense' + 'community-building expense' to transform it into +$1.6B of positive EBITDA. The gap was $3.5B. SoftBank valued the company at $47B on this metric. After the S-1 disclosed it, the market rejected the metric — the IPO was withdrawn, valuation crashed to $8B, and the CEO resigned."}</p>
            </motion.div>

            {/* WeWork bridge visualization */}
            <motion.div variants={fadeUp(0.15)} className="mt-6 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                  {ko ? "WeWork 2018 — GAAP loss → Community Adjusted EBITDA Bridge ($M)" : "WeWork 2018 — GAAP loss → Community Adjusted EBITDA Bridge ($M)"}
                </p>
              </div>
              <div className="p-5 sm:p-6 bg-white dark:bg-gray-900 space-y-2">
                {WEWORK_BRIDGE.map((item, i) => {
                  const widthPct = (Math.abs(item.value) / WEWORK_MAX) * 100;
                  const isNegative = item.value < 0;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={VP}
                      transition={{ duration: 0.35, delay: i * 0.08, ease: EASE }}
                      className="flex items-center gap-3"
                    >
                      <div className="flex-shrink-0 w-44">
                        <p className="text-[11px] font-bold text-gray-700 dark:text-gray-300 leading-tight">{ko ? item.koLabel : item.enLabel}</p>
                        <p className="text-[9px] text-gray-500 dark:text-gray-400">{ko ? item.koNote : item.enNote}</p>
                      </div>
                      <div className="flex-1 relative h-7 bg-gray-50 dark:bg-gray-800/40 rounded">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${widthPct}%` }}
                          viewport={VP}
                          transition={{ duration: 0.6, delay: i * 0.08 + 0.2, ease: EASE }}
                          className="absolute top-0 h-full rounded text-white text-[10px] font-bold flex items-center justify-end pr-2"
                          style={{ background: item.color, left: isNegative ? "auto" : 0, right: isNegative ? 0 : "auto" }}
                        >
                          {isNegative ? "−" : "+"}${Math.abs(item.value)}M
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-t border-gray-200 dark:border-gray-700 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "★ 표시 항목이 시장이 거부한 지점. Marketing·인력 채용비는 어떤 회계 기준으로도 1회성이 아님. 'Community building 비용'은 회계 카테고리로 존재하지 않음. SEC도 이 metric을 표준 GAAP/non-GAAP framework 밖으로 분류."
                  : "★ items are where the market drew the line. Marketing and headcount aren't one-time under any accounting framework. 'Community building costs' isn't a recognized accounting category. The SEC classified the metric outside the standard GAAP/non-GAAP framework."}
              </div>
            </motion.div>

            {/* Lesson */}
            <motion.div variants={fadeUp(0.2)} className="mt-6 rounded-2xl p-5 border-l-4 bg-rose-50/40 dark:bg-rose-950/20 border-rose-400 dark:border-rose-700">
              <p className="text-[10px] font-bold uppercase tracking-widest text-rose-700 dark:text-rose-300 mb-1.5">
                {ko ? "WeWork이 가르쳐준 lesson" : "What WeWork taught"}
              </p>
              <p className="text-[13px] text-rose-900 dark:text-rose-100 leading-relaxed">
                {ko
                  ? "Add-back에는 한계가 있다. 시장이 'recurring을 one-time으로 reclassify'하는 한계점을 넘어가면 그 metric은 신뢰를 잃고, 회사 전체의 valuation도 같이 무너진다. IB가 'aggressive하지만 defensible한 story'와 'fiction'의 경계를 지키는 게 client의 신뢰를 지키는 일."
                  : "There's a ceiling on add-backs. When the market sees recurring costs being reclassified as one-time past a tolerance point, the metric loses credibility — and so does the whole company's valuation. The IB's job of keeping the line between 'aggressive but defensible' and 'fiction' is what preserves client credibility."}
              </p>
            </motion.div>
          </motion.section>

          {/* § 6 — IB's actual job */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 6</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "IB Lead가 이 싸움에서 실제로 하는 일" : "What IB Lead actually does in this fight"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>
            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>{ko
                ? "Adjusted EBITDA 숫자 자체는 FAS (Big 4)가 만듭니다. IB Lead는 그 숫자를 만들지 않습니다 — IB Lead의 일은 3-way conversation을 orchestrate하는 것입니다. FAS에게 어떤 add-back을 push하고 어떤 걸 양보할지 가이드, buyer side advisor에게 어떤 항목을 defend할지 협상, client (CEO·CFO)에게 trade-off의 의미를 설명."
                : "The Adjusted EBITDA number itself is built by FAS (Big 4). The IB Lead doesn't build the number — the IB Lead's job is to orchestrate the 3-way conversation. Guide FAS on which add-backs to push and which to concede. Negotiate with the buyer side advisor on which items to defend. Translate the trade-offs to the client (CEO/CFO)."}</p>
              <p>{ko
                ? "구체적으로 IB가 결정해야 하는 4가지 — ① 어떤 add-back을 CIM에 first include할지 (default 가정), ② Buyer 자문이 challenge할 때 어디서 사수하고 어디서 양보할지, ③ Buyer 별 sensitivity를 보고 strategic vs sponsor 다른 argument 사용, ④ Final price negotiation에서 add-back 양보 → 다른 조항 (escrow, earnout) 얻기."
                : "Specifically, IB has to decide four things — (1) which add-backs to include in the CIM first (the default position), (2) which to defend and which to concede when buyer-side advisors challenge, (3) how to tailor arguments differently for strategic vs. sponsor buyers based on their sensitivities, (4) how to trade an add-back concession for a different term (escrow, earnout) in final price negotiation."}</p>
            </motion.div>

            <motion.div variants={fadeUp(0.15)} className="mt-6 rounded-2xl p-5 border-2 border-dashed" style={{ borderColor: `${ACCENT}40`, background: `${ACCENT}08` }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ color: ACCENT }}>{ko ? "한 줄 정리" : "One line"}</p>
              <p className="text-[14px] text-gray-900 dark:text-gray-100 leading-relaxed font-medium">
                {ko
                  ? "IB는 EBITDA 숫자를 만들지 않는다. IB는 그 숫자를 둘러싼 story를 만들고, 그 story로 가격을 협상한다."
                  : "IB doesn't build the EBITDA number. IB builds the story around the number — and negotiates the price with that story."}
              </p>
            </motion.div>
          </motion.section>

          {/* Next chapter preview */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP}>
            <div className="rounded-2xl p-5 sm:p-6 border-2 border-dashed" style={{ borderColor: `${ACCENT}40`, background: `${ACCENT}08` }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ color: ACCENT }}>{ko ? "다음 챕터" : "Next chapter"}</p>
              <p className="text-[15px] font-bold text-gray-900 dark:text-gray-100 mb-1.5">
                Ch.4 — {ko ? "Valuation 케이스: 가정의 게임" : "Valuation Case: the assumptions game"}
              </p>
              <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "EBITDA를 결정했으면 multiple을 곱한다. 그 multiple은 어디서 오나 — DCF · Trading Comps · Transaction Comps · LBO. 진짜 어려운 건 WACC이 아니라 revenue projection 가정과 peer universe 선정."
                  : "Once EBITDA is set, you multiply by a multiple. Where does that multiple come from — DCF, trading comps, transaction comps, LBO. The hard part isn't WACC; it's revenue projection assumptions and peer universe selection."}
              </p>
            </div>
          </motion.section>

          {/* Share */}
          <div className="pt-4 border-t border-gray-200/60 dark:border-gray-700/60">
            <ShareButtons lang={lang} title={ko ? chapter.titleKo : chapter.titleEn} />
          </div>

          {/* Series prev/next */}
          {(prev || next) && (
            <SeriesNav
              lang={lang}
              prev={prev ? { href: `${base}/${prev.slug}`, title: ko ? prev.titleKo : prev.titleEn } : null}
              next={next ? { href: `${base}/${next.slug}`, title: ko ? next.titleKo : next.titleEn } : null}
            />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
