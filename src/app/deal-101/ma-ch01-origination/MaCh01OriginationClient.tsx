/**
 * Ch.1 — Origination & Pitching
 * GS·MS·JPM이 mandate를 따오는 실무 워크플로우
 */
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import MaChapterNav from "@/components/ma/MaChapterNav";
import PhaseBadge from "@/components/ma/PhaseBadge";
import VariantSnapshot from "@/components/ma/VariantSnapshot";
import SeriesNav from "@/components/SeriesNav";
import {
  getMaChapterBySlug,
  getMaSeriesNav,
  getPhase,
} from "@/data/ma-series";

type Lang = "ko" | "en";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };

const SLUG = "ma-ch01-origination";

// ── Coverage Matrix Data ─────────────────────────────────────────────
const COVERAGE_MATRIX = {
  industries: [
    { id: "tmt",       ko: "TMT (Tech·Media·Telecom)",  en: "TMT" },
    { id: "hc",        ko: "Healthcare",                en: "Healthcare" },
    { id: "industrials", ko: "Industrials",            en: "Industrials" },
    { id: "consumer",  ko: "Consumer & Retail",         en: "Consumer & Retail" },
    { id: "fig",       ko: "FIG (Financial Inst.)",     en: "FIG" },
    { id: "energy",    ko: "Energy & Power",            en: "Energy & Power" },
    { id: "sponsors",  ko: "Financial Sponsors",        en: "Financial Sponsors" },
  ],
  geos: [
    { id: "amer", ko: "Americas", en: "Americas" },
    { id: "emea", ko: "EMEA",     en: "EMEA" },
    { id: "apac", ko: "APAC",     en: "APAC" },
  ],
};

// ── Pipeline Funnel ──────────────────────────────────────────────────
const PIPELINE_FUNNEL = [
  { stage: "tapping",   ko: "Tapping",         en: "Tapping",         koSub: "CEO/CFO 접촉",       enSub: "CEO/CFO touches",     count: 100, color: "#94a3b8" },
  { stage: "meeting",   ko: "Meeting",         en: "Meeting",         koSub: "1:1 미팅",            enSub: "1-on-1 meeting",      count: 35,  color: "#64748b" },
  { stage: "pitch",     ko: "Pitch 초청",      en: "Invited to pitch", koSub: "Bake-off 진입",      enSub: "Bake-off entry",      count: 12,  color: "#475569" },
  { stage: "shortlist", ko: "Shortlist",       en: "Shortlist",       koSub: "2-3 finalist",       enSub: "2-3 finalists",       count: 5,   color: "#334155" },
  { stage: "mandate",   ko: "Mandate 수주",    en: "Mandate won",     koSub: "Engagement letter",  enSub: "Engagement letter",   count: 2,   color: "#1e293b" },
];

// ── Pitch Book TOC ───────────────────────────────────────────────────
const PITCHBOOK_TOC = [
  { id: "cover",        ko: "표지",                en: "Cover",                       pages: 1,  pct: 3,   accent: "bg-gray-500"   },
  { id: "exec-summary", ko: "Executive Summary",   en: "Executive Summary",           pages: 2,  pct: 6,   accent: "bg-blue-600"   },
  { id: "market",       ko: "Market Environment",  en: "Market Environment",          pages: 5,  pct: 14,  accent: "bg-blue-500"   },
  { id: "alternatives", ko: "Strategic Alternatives", en: "Strategic Alternatives",   pages: 5,  pct: 14,  accent: "bg-indigo-500" },
  { id: "precedent",    ko: "Precedent Transactions", en: "Precedent Transactions",   pages: 4,  pct: 11,  accent: "bg-violet-500" },
  { id: "comps",        ko: "Trading Comparables", en: "Trading Comparables",         pages: 4,  pct: 11,  accent: "bg-violet-600" },
  { id: "valuation",    ko: "Valuation Perspectives", en: "Valuation Perspectives",   pages: 5,  pct: 14,  accent: "bg-purple-600" },
  { id: "process",      ko: "Process Considerations", en: "Process Considerations",   pages: 3,  pct: 8,   accent: "bg-pink-500"   },
  { id: "whyus",        ko: "Why [Bank Name]",     en: "Why [Bank Name]",             pages: 3,  pct: 8,   accent: "bg-rose-500"   },
  { id: "team",         ko: "Team & Credentials",  en: "Team & Credentials",          pages: 2,  pct: 6,   accent: "bg-orange-500" },
  { id: "appendix",     ko: "Appendix",            en: "Appendix",                    pages: 2,  pct: 5,   accent: "bg-gray-400"   },
];

// ── Bake-off Decision Criteria ───────────────────────────────────────
const BAKEOFF_CRITERIA = [
  { ko: "Sector expertise",          en: "Sector expertise",          weight: 25, descKo: "최근 12개월 deal 트랙 + MD의 sub-sector 깊이",                 descEn: "Last-12-month deal track + MD's sub-sector depth" },
  { ko: "Team chemistry",            en: "Team chemistry",            weight: 20, descKo: "CEO와 MD 1대1 결합도. '딜 동안 50번 통화할 사람'",          descEn: "1-on-1 fit between CEO and MD — 'someone you'll call 50x'" },
  { ko: "Buyer network",             en: "Buyer network",             weight: 20, descKo: "PE sponsor 커버리지 / 전략 인수자 contacts 깊이",            descEn: "PE sponsor coverage + strategic buyer contact depth" },
  { ko: "Fee proposal",              en: "Fee proposal",              weight: 15, descKo: "1% vs 1.2% 차이는 보통 secondary — chemistry 다음",         descEn: "1% vs 1.2% is usually secondary to chemistry" },
  { ko: "Conflicts",                 en: "Conflicts",                 weight: 10, descKo: "다른 sector 고객이 잠재 buyer면 conflict — 자주 발생",       descEn: "Other clients as potential buyers create conflicts — common" },
  { ko: "Process design",            en: "Process design",            weight: 10, descKo: "Broad auction vs negotiated 추천. CEO 의사에 맞는지",        descEn: "Broad vs negotiated recommendation — alignment with CEO's intent" },
];

// ── House Size Comparison ────────────────────────────────────────────
const HOUSE_TIERS = [
  {
    tier: "BB",
    koLabel: "Bulge Bracket",
    enLabel: "Bulge Bracket",
    examples: "GS, MS, JPM, BofA, Citi, Barclays, UBS, DB",
    koOrigination: "Sector head MD + dedicated coverage 팀. Account plan 연 단위 운영. 24h Presentation Services 백업",
    enOrigination: "Sector head MD + dedicated coverage team. Annual account plans. 24h Presentation Services back-up",
    koPitch:        "Full 40p pitch book. Deck deck mark-up 4-6번. PS팀에 야간 outsource",
    enPitch:        "Full 40p pitch book. 4-6 markup rounds. Overnight to Presentation Services team",
  },
  {
    tier: "MM",
    koLabel: "Middle Market",
    enLabel: "Middle Market",
    examples: "Houlihan Lokey, Lincoln, Harris Williams, Raymond James, William Blair",
    koOrigination: "Sector MD + 작은 coverage 팀. $50M-1B 딜 집중. Sponsor 관계 깊음",
    enOrigination: "Sector MD + smaller coverage team. Focus on $50M-1B deals. Deep sponsor relationships",
    koPitch:        "25-30p pitch book. Senior banker가 직접 챕터 작성",
    enPitch:        "25-30p pitch book. Senior bankers write chapters directly",
  },
  {
    tier: "Boutique",
    koLabel: "Boutique",
    enLabel: "Boutique",
    examples: "Centerview, Evercore, Lazard, PJT, Moelis, Guggenheim",
    koOrigination: "Founding partners가 직접 tapping. CEO 관계 기반 — 'phone book M&A'",
    enOrigination: "Founding partners do the tapping themselves. CEO-relationship driven — 'phone book M&A'",
    koPitch:        "15-25p, partner가 직접 작성. PS팀 없으니 애널리스트가 디자인까지",
    enPitch:        "15-25p, partner-written. No PS team — analysts handle design themselves",
  },
];

// ── FAQ ──────────────────────────────────────────────────────────────
const FAQS = [
  {
    qKo: "왜 BB·MM·boutique 분류가 중요한가?",
    qEn: "Why does the BB / MM / boutique split matter?",
    aKo: "Origination 방식이 완전히 다르기 때문입니다. BB는 sector head MD + coverage 팀 + PS 백업 시스템으로 industrialized 된 origination을 합니다. 부티크는 founding partner 한 명의 CEO Rolodex에 거의 전적으로 의존합니다. 같은 딜이라도 어느 하우스가 mandate를 따느냐에 따라 process design·valuation 접근·buyer reach가 다 달라집니다.",
    aEn: "Because origination operates differently across tiers. BB runs industrialized origination — sector head MDs + coverage teams + Presentation Services back-up. Boutiques rely almost entirely on one founding partner's CEO Rolodex. The same deal can run very differently depending on which house wins the mandate.",
  },
  {
    qKo: "Pitch book 한 번 만드는 데 얼마나 걸리나?",
    qEn: "How long does it take to build a pitch book?",
    aKo: "표준 40p pitch book은 BB에서 2-3주 풀-가동 (애널리스트 2명 × 80시간/주 + VP 1명 + MD 리뷰). 첫 draft 후 MD mark-up 4-6회, PS팀 야간 polish 거쳐 final. 부티크는 더 작은 30p deck을 1-2주에 만드는 게 보통.",
    aEn: "A standard 40-page pitch book takes 2-3 weeks of full effort at a BB (2 analysts × 80 hrs/week + 1 VP + MD review). After the first draft, 4-6 MD markup cycles and overnight polish by Presentation Services. Boutiques typically build a leaner 30-page deck in 1-2 weeks.",
  },
  {
    qKo: "Bake-off에서 fee 제안이 제일 중요한 게 아닌가?",
    qEn: "Isn't fee proposal the biggest factor in a bake-off?",
    aKo: "아니에요. 1% vs 1.2% 차이는 $10억 딜에서 $200만 정도인데, 매도자 입장에서 chemistry·sector expertise·buyer reach로 인한 가격 차이가 훨씬 큽니다 (잘 디자인된 process는 종종 +10-20% premium). Fee는 보통 top-3 hygiene factor지 결정 요인이 아닙니다.",
    aEn: "No. On a $1B deal, the spread between 1% and 1.2% is only $2M — but a well-designed process can drive +10-20% premium through better chemistry, sector expertise, and buyer reach. Fee is usually a hygiene factor, not the decider.",
  },
  {
    qKo: "Sell-side vs Buy-side origination의 진짜 차이?",
    qEn: "What's the real difference between sell-side and buy-side origination?",
    aKo: "Sell-side는 outbound이 지배적입니다 — 뱅커가 CEO에게 '이 사업부를 분할 매각하면 어떨까요'라고 먼저 제안. Buy-side는 inbound retainer가 더 흔합니다 — 인수자가 '이 시장에서 인수 기회를 찾고 있다'고 요청. 결과적으로 bake-off의 dynamics가 다릅니다: sell-side는 다수 BB 경쟁, buy-side는 기존 관계 기반 단독 수임이 더 많아요.",
    aEn: "Sell-side is dominated by outbound: bankers approach CEOs first ('have you considered carving out this division'). Buy-side is more often inbound retainer: the acquirer asks for help in a target market. As a result, bake-off dynamics differ — sell-side mandates draw multi-BB competition, while buy-side ones are more often single-sourced from existing relationships.",
  },
];

export default function MaCh01OriginationClient({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const chapter = getMaChapterBySlug(SLUG)!;
  const phase = getPhase(chapter.phase)!;
  const { prev, next } = getMaSeriesNav(SLUG);
  const base = ko ? "/deal-101" : "/en/deal-101";

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ── Breadcrumb ─────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto px-5 pt-8 pb-2">
          <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
            <Link href={ko ? "/" : "/en"} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">{ko ? "홈" : "Home"}</Link>
            <span>›</span>
            <Link href={base} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Deal 101</Link>
            <span>›</span>
            <Link href={`${base}/ma-ch00-overview`} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">{ko ? "M&A 시리즈" : "M&A Series"}</Link>
            <span>›</span>
            <span className="text-gray-600 dark:text-gray-300 font-medium">Ch.1</span>
          </div>
        </div>

        {/* ── Hero ───────────────────────────────────────────────── */}
        <section className="max-w-3xl mx-auto px-5 pt-6 pb-10">
          <div className="mb-4 flex items-center gap-2 flex-wrap">
            <PhaseBadge phase={phase} lang={lang} />
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Ch.{chapter.ch} · {chapter.readingMinutes}{ko ? "분" : " min"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-3">
            {ko ? chapter.titleKo : chapter.titleEn}
          </h1>
          <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">
            {ko ? chapter.taglineKo : chapter.taglineEn}
          </p>
          <p className="mt-3 text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed border-l-2 border-gray-300 dark:border-gray-700 pl-4">
            {ko ? chapter.questionKo : chapter.questionEn}
          </p>
        </section>

        {/* ── Series Chapter Nav ─────────────────────────────────── */}
        <MaChapterNav currentSlug={SLUG} lang={lang} />

        {/* ── 본문 ───────────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto px-5 pb-16 space-y-14">

          {/* ── Variant Snapshot ── */}
          <VariantSnapshot chapter={chapter} phase={phase} lang={lang} />

          {/* ── § 1.1 Coverage Model ── */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 1.1</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "Coverage Model — IB는 어떻게 조직되는가" : "Coverage Model — how IBs are organized"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: phase.accentHex }} />
            </motion.div>

            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>
                {ko
                  ? "GS·MS·JPM 같은 BB는 M&A 팀을 단일 부서로 운영하지 않습니다. 대신 두 축으로 매트릭스를 만듭니다 — Industry coverage (TMT·Healthcare·Industrials 등) 와 Product (M&A·ECM·DCM·Lev Fin). 둘이 교차하는 셀이 실제 딜 팀입니다. 예를 들어 'TMT M&A' 는 한 줄이 아니라 TMT industry head + M&A product head 가 공동 책임지는 책상입니다."
                  : "BBs like GS, MS, and JPM don't run M&A as a single department. They build a matrix: industry coverage (TMT, Healthcare, Industrials, etc.) crossed with product groups (M&A, ECM, DCM, Lev Fin). The intersecting cell is the actual deal team. 'TMT M&A' is not a single line — it's a desk co-owned by the TMT industry head and the M&A product head."}
              </p>
              <p>
                {ko
                  ? "여기에 세 번째 축인 Geography 가 더해집니다 (Americas / EMEA / APAC). 결과적으로 GS M&A는 약 21개의 셀 (7 industries × 3 regions) 로 매니지먼트되고, 각 셀에 senior banker(MD) 가 'book of accounts' 를 가지고 있습니다 — 보통 30-50개 회사."
                  : "Add a third axis — geography (Americas / EMEA / APAC) — and GS M&A is essentially managed across roughly 21 cells (7 industries × 3 regions). Each cell has a senior banker (MD) holding a 'book of accounts' — typically 30-50 companies."}
              </p>
            </motion.div>

            {/* Coverage matrix visual */}
            <motion.div variants={fadeUp(0.15)} className="mt-6 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                  {ko ? "BB M&A Coverage Matrix (예시)" : "BB M&A Coverage Matrix (illustrative)"}
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full text-[12px]">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left px-3 py-2.5 font-semibold text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900">
                        {ko ? "Industry × Geography" : "Industry × Geography"}
                      </th>
                      {COVERAGE_MATRIX.geos.map((g) => (
                        <th key={g.id} className="px-3 py-2.5 font-semibold text-gray-700 dark:text-gray-300 text-center">
                          {ko ? g.ko : g.en}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {COVERAGE_MATRIX.industries.map((ind, i) => (
                      <tr key={ind.id} className={i % 2 === 0 ? "bg-white dark:bg-gray-950" : "bg-gray-50/50 dark:bg-gray-900/30"}>
                        <td className="px-3 py-2.5 font-medium text-gray-800 dark:text-gray-200">{ko ? ind.ko : ind.en}</td>
                        {COVERAGE_MATRIX.geos.map((g) => (
                          <td key={g.id} className="px-3 py-2.5 text-center">
                            <span className="inline-block w-2 h-2 rounded-full" style={{ background: phase.accentHex, opacity: 0.4 + (Math.random() * 0.5) }} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-5 py-3 bg-gray-50 dark:bg-gray-800/60 border-t border-gray-200 dark:border-gray-700 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "각 셀 = sector head MD + coverage team. 진한 셀일수록 deal flow가 많은 결합 (예: TMT × Americas, Sponsors × Americas)."
                  : "Each cell = sector head MD + coverage team. Darker cells = higher deal flow (e.g., TMT × Americas, Sponsors × Americas)."}
              </div>
            </motion.div>

            {/* House tier callout */}
            <motion.div variants={fadeUp(0.2)} className="mt-6 grid sm:grid-cols-3 gap-3">
              {HOUSE_TIERS.map((h) => (
                <div key={h.tier} className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-[14px] font-black text-gray-900 dark:text-gray-100">{h.tier}</span>
                    <span className="text-[10px] text-gray-400 dark:text-gray-500">{ko ? h.koLabel : h.enLabel}</span>
                  </div>
                  <p className="text-[10px] text-gray-400 dark:text-gray-500 leading-snug mb-2 font-mono">{h.examples}</p>
                  <p className="text-[11px] text-gray-600 dark:text-gray-300 leading-relaxed">
                    {ko ? h.koOrigination : h.enOrigination}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.section>

          {/* ── § 1.2 Pipeline ── */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 1.2</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "Pipeline — Tapping에서 Mandate까지" : "Pipeline — from tapping to mandate"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: phase.accentHex }} />
            </motion.div>

            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>
                {ko
                  ? "BB 애널리스트가 mandate가 떨어지는 걸 처음 볼 때 헷갈리는 게 있습니다 — '왜 우리가 이 회사 deck을 만들고 있죠?' 답은 단순합니다. 그 회사가 우리에게 일을 맡긴 게 아니라, 우리 MD가 그 회사 CEO에게 '한번 검토해보세요' 라고 제안하고 있는 중인 거예요. 이게 outbound origination이고, M&A pipeline의 절반 이상을 차지합니다."
                  : "BB analysts hit a moment of confusion early on — 'why are we building a deck for this company?' Answer: the company hasn't hired us. Our MD is pitching their CEO with an idea. This is outbound origination, and it accounts for more than half of M&A pipeline."}
              </p>
              <p>
                {ko
                  ? "Outbound을 industrialize한 게 'tapping list'입니다. 각 sector head MD는 보통 top 30 CEOs/CFOs 의 명단을 들고 분기당 1-2회 contact를 유지합니다. 점심·conference·CEO summit·idea call — 형식은 다양해도 목적은 같습니다. 그 회사 board에 strategic alternative가 올라올 때 가장 먼저 떠올라야 합니다."
                  : "Outbound is industrialized through a 'tapping list.' Each sector head MD keeps roughly 30 top CEOs/CFOs in active rotation — quarterly touches via lunch, conferences, CEO summits, idea calls. The format varies; the goal is the same: be the first name on the board's mind when strategic alternatives come up."}
              </p>
            </motion.div>

            {/* Pipeline funnel visual */}
            <motion.div variants={fadeUp(0.15)} className="mt-6 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                  {ko ? "Sector MD의 연간 Pipeline 전환율 (예시)" : "Sector MD's annual pipeline conversion (illustrative)"}
                </p>
              </div>
              <div className="p-5 sm:p-6 bg-white dark:bg-gray-900">
                <div className="space-y-2.5">
                  {PIPELINE_FUNNEL.map((stage, i) => {
                    const widthPct = (stage.count / 100) * 100;
                    return (
                      <motion.div
                        key={stage.stage}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={VP}
                        transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
                        className="flex items-center gap-3"
                      >
                        <div className="flex-shrink-0 w-24">
                          <p className="text-[11px] font-bold text-gray-700 dark:text-gray-300">{ko ? stage.ko : stage.en}</p>
                          <p className="text-[9px] text-gray-400 dark:text-gray-500">{ko ? stage.koSub : stage.enSub}</p>
                        </div>
                        <div className="flex-1 relative h-7">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${widthPct}%` }}
                            viewport={VP}
                            transition={{ duration: 0.6, delay: i * 0.08 + 0.2, ease: EASE }}
                            className="h-full rounded-r flex items-center justify-end pr-3 text-white text-[11px] font-bold"
                            style={{ background: stage.color }}
                          >
                            {stage.count}
                          </motion.div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
              <div className="px-5 py-3 bg-gray-50 dark:bg-gray-800/60 border-t border-gray-200 dark:border-gray-700 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "100번의 tapping → 35번의 미팅 → 12번의 pitch 초청 → 5번의 shortlist → 2건의 mandate. 약 2% 전환율이 sector MD의 연간 KPI 기준선."
                  : "100 touches → 35 meetings → 12 pitch invites → 5 shortlists → 2 mandates. A ~2% conversion is the baseline KPI for a sector MD."}
              </div>
            </motion.div>
          </motion.section>

          {/* ── § 1.3 Pitch Book ── */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 1.3</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "Pitch Book — 표준 36-page anatomy" : "Pitch Book — the 36-page anatomy"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: phase.accentHex }} />
            </motion.div>

            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>
                {ko
                  ? "Pitch book은 형식이 거의 표준화돼 있습니다. 11개 섹션 약 36p — Cover · Exec Summary · Market · Strategic Alternatives · Precedent Trans · Trading Comps · Valuation · Process · Why Us · Team · Appendix. 비중을 보면 약 56%가 deal logic (Market·Alternatives·Precedent·Comps·Valuation) 이고, 22%가 process design, 14%가 firm marketing (Why Us·Team)."
                  : "Pitch books are highly standardized. 11 sections totaling ~36 pages — Cover · Executive Summary · Market · Strategic Alternatives · Precedent Trans · Trading Comps · Valuation · Process · Why Us · Team · Appendix. About 56% goes to deal logic (Market, Alternatives, Precedent, Comps, Valuation), 22% to process design, and 14% to firm marketing (Why Us, Team)."}
              </p>
              <p>
                {ko
                  ? "툴은 PowerPoint + Think-Cell이 표준 (US BB), 유럽계는 UpSlide도 많이 씁니다. 모델은 Excel + Macabacus. 큰 하우스는 deck 마무리를 PS팀에 outsource하고, 부티크나 MM은 애널리스트가 처음부터 끝까지 직접 합니다."
                  : "PowerPoint + Think-Cell is the standard tooling at US BBs; European houses tilt toward UpSlide. Models are Excel + Macabacus. Big houses outsource final deck polish to in-house Presentation Services; boutiques and MM analysts handle it themselves."}
              </p>
            </motion.div>

            {/* Pitch book TOC visual */}
            <motion.div variants={fadeUp(0.15)} className="mt-6 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                  {ko ? "표준 Pitch Book 구성 (36p 기준)" : "Standard Pitch Book Layout (36 pages)"}
                </p>
              </div>
              <div className="p-5 sm:p-6 bg-white dark:bg-gray-900 space-y-1.5">
                {PITCHBOOK_TOC.map((s, i) => (
                  <motion.div
                    key={s.id}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.3, delay: i * 0.04, ease: EASE }}
                    className="flex items-center gap-2.5"
                  >
                    <span className="flex-shrink-0 w-6 text-[10px] font-mono text-gray-400 dark:text-gray-500 text-right">{i + 1}</span>
                    <p className="flex-shrink-0 w-44 text-[12px] font-semibold text-gray-700 dark:text-gray-300">{ko ? s.ko : s.en}</p>
                    <div className="flex-1 h-3 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.pct * 2.5}%` }}
                        viewport={VP}
                        transition={{ duration: 0.5, delay: i * 0.04 + 0.2, ease: EASE }}
                        className={`h-full ${s.accent}`}
                      />
                    </div>
                    <span className="flex-shrink-0 w-12 text-[10px] text-gray-500 dark:text-gray-400 font-mono text-right">{s.pages}p</span>
                  </motion.div>
                ))}
              </div>
              <div className="px-5 py-3 bg-gray-50 dark:bg-gray-800/60 border-t border-gray-200 dark:border-gray-700 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "Total ~36 pages. Sector·딜 사이즈에 따라 30-45p 사이. Cover에는 'Project [Codename]' — 보통 도시·음식·동물 이름."
                  : "Total ~36 pages, ranging 30-45p by sector and deal size. Cover always reads 'Project [Codename]' — usually a city, food, or animal name."}
              </div>
            </motion.div>

            {/* Practitioner detail */}
            <motion.div variants={fadeUp(0.2)} className="mt-6 p-5 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/40">
              <div className="flex items-start gap-3">
                <span className="text-base">📌</span>
                <div className="flex-1 text-[13px] text-amber-900 dark:text-amber-200 leading-relaxed">
                  <p className="font-bold mb-2">{ko ? '"Page turn" 의식' : '"Page turn" ritual'}</p>
                  <p>
                    {ko
                      ? "MD에게 deck을 들고 가기 전에 VP·Associate 앞에서 한 장씩 넘기면서 설명하는 의식. 페이지 번호 안 맞거나 chart axis 라벨 빠지면 그 자리에서 다시 처음부터. 36페이지 한 번 돌리는 데 보통 90분. 한 deck당 page turn 4-6회 거친 후에야 MD review로 갑니다."
                      : "Before showing the deck to the MD, the team does a 'page turn' — flipping through page by page in front of the VP and associate. If page numbers don't line up or a chart axis label is missing, you restart from page one. A 36-page deck takes ~90 minutes per turn. Most decks survive 4-6 turns before reaching the MD."}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* ── § 1.4 Bake-off ── */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 1.4</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "Bake-off — Beauty Contest의 결정 기준" : "Bake-off — what wins the beauty contest"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: phase.accentHex }} />
            </motion.div>

            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>
                {ko
                  ? "Sell-side mandate가 정해진 회사는 보통 2-4개 IB를 'bake-off' 에 초청합니다. 각 IB는 60-90분 동안 senior team (MD + VP) 으로 pitch를 진행합니다. CEO·CFO·이사회 일부 멤버가 함께 듣고, 그 자리에서 또는 며칠 후 결정이 납니다."
                  : "When a sell-side mandate is up for grabs, the seller typically invites 2-4 IBs to a bake-off. Each runs a 60-90 minute pitch with senior team (MD + VP). The CEO, CFO, and a subset of the board attend. The decision often comes that same day, or within a few days."}
              </p>
              <p>
                {ko
                  ? "Bake-off의 결정 요인은 의외로 fee가 아닙니다. 가중치 순으로 sector expertise·team chemistry·buyer network가 70%를 차지하고, fee proposal은 보통 15% 정도. $10억 딜에서 1% vs 1.2%의 차이는 $200만에 불과한데, chemistry가 좋고 buyer network가 깊은 팀이 만들어내는 가격 차이는 종종 +10-20% 프리미엄으로 나타나기 때문입니다."
                  : "Surprisingly, fee is rarely the decider. By weight, sector expertise + team chemistry + buyer network together drive ~70% of the decision; fee proposal weighs in around 15%. On a $1B deal, the spread between 1% and 1.2% is only $2M — while better chemistry and deeper buyer reach can drive +10-20% premium in final price."}
              </p>
            </motion.div>

            {/* Bake-off decision matrix */}
            <motion.div variants={fadeUp(0.15)} className="mt-6 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                  {ko ? "Bake-off Decision Matrix — 가중치 (sell-side mandate)" : "Bake-off Decision Matrix — weights (sell-side mandate)"}
                </p>
              </div>
              <div className="divide-y divide-gray-100 dark:divide-gray-800">
                {BAKEOFF_CRITERIA.map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.3, delay: i * 0.05, ease: EASE }}
                    className="p-4 flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-12 text-right">
                      <p className="text-2xl font-black text-gray-900 dark:text-gray-100">{c.weight}<span className="text-[10px] text-gray-400 ml-0.5">%</span></p>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-bold text-gray-900 dark:text-gray-100 mb-1">{ko ? c.ko : c.en}</p>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-snug">{ko ? c.descKo : c.descEn}</p>
                    </div>
                    <div className="flex-shrink-0 w-32 h-2 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden mt-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${c.weight * 4}%` }}
                        viewport={VP}
                        transition={{ duration: 0.5, delay: i * 0.05 + 0.2, ease: EASE }}
                        className="h-full"
                        style={{ background: phase.accentHex }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.section>

          {/* ── § 1.5 Engagement Letter ── */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 1.5</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "Engagement Letter — Mandate 확정" : "Engagement Letter — locking in the mandate"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: phase.accentHex }} />
            </motion.div>

            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>
                {ko
                  ? "Bake-off에서 이기면 engagement letter 협상으로 넘어갑니다. Fee 구조 (Ch.2에서 깊게 다룸) 외에도 scope·conflict clearance·tail period·indemnification 조항이 포함됩니다. Sign 시점에 두 가지 일이 동시에 일어납니다: ① MNPI wall 발동 — 그 deal team은 그 회사의 trading activity에서 차단됨, ② Project kick-off — Day 1부터 Ch.3 CIM 작성이 시작됩니다."
                  : "Winning the bake-off triggers engagement letter negotiations. Beyond fee structure (covered in Ch.2), the letter covers scope, conflict clearance, tail period, and indemnification. Two things happen at signing: (1) the MNPI wall goes up — the deal team is blocked from trading activity in the target, and (2) project kick-off — Day 1 of CIM drafting (Ch.3) begins."}
              </p>
              <p>
                {ko
                  ? "Engagement letter는 일반적으로 5-12 페이지의 문서로, 대부분 표준화돼 있습니다. 협상 포인트는 보통 success fee 의 정확한 % · retainer 금액 · tail period (12 vs 24개월) · exclusivity 조항 정도. 이 모든 economics는 다음 챕터에서."
                  : "The engagement letter is typically a 5-12 page document, mostly standardized. The negotiation points are usually: precise success fee %, retainer amount, tail period (12 vs 24 months), and exclusivity clause. All these economics are unpacked in the next chapter."}
              </p>
            </motion.div>
          </motion.section>

          {/* ── § 1.6 Sell vs Buy origination ── */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 1.6</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "Variant Drilldown — Sell vs Buy vs Fairness" : "Variant Drilldown — sell vs buy vs fairness"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: phase.accentHex }} />
            </motion.div>

            <motion.div variants={fadeUp(0.1)} className="mt-4 grid md:grid-cols-3 gap-3">
              {[
                {
                  side: "Sell-side",
                  koOrigin: "Outbound 지배적",
                  enOrigin: "Outbound dominant",
                  koDetail: "뱅커가 CEO에게 '이 사업부를 carve-out 하면 어떨까요' 라고 idea pitch. Bake-off에서 multi-BB 경쟁이 일반적",
                  enDetail: "Banker pitches CEO with 'have you considered carving out X division.' Multi-BB competition in bake-off is common",
                  koWin: "Sector expertise + buyer network + chemistry",
                  enWin: "Sector expertise + buyer network + chemistry",
                  color: "bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800/40",
                },
                {
                  side: "Buy-side",
                  koOrigin: "Inbound retainer가 더 흔함",
                  enOrigin: "Inbound retainer more common",
                  koDetail: "인수자가 'A 시장에서 target 찾아주세요' 요청. 기존 관계 기반 단독 수임이 많음 — bake-off 없는 경우가 다수",
                  enDetail: "Acquirer asks 'find us a target in market A.' Often single-sourced from existing relationships — frequently no bake-off",
                  koWin: "Strategic dialogue 깊이 + target identification 능력",
                  enWin: "Strategic dialogue depth + target identification capability",
                  color: "bg-violet-50 dark:bg-violet-950/40 border-violet-200 dark:border-violet-800/40",
                },
                {
                  side: "Fairness Opinion",
                  koOrigin: "Independent advisor 역할",
                  enOrigin: "Independent advisor role",
                  koDetail: "이미 협상된 거래의 가격이 fair 한지 이사회에 의견 제공. Conflict 적은 boutique (Centerview·PJT) 가 자주 받음",
                  enDetail: "Provides board with opinion on fairness of an already-negotiated price. Boutiques with fewer conflicts (Centerview, PJT) often selected",
                  koWin: "Independence + valuation 신뢰성",
                  enWin: "Independence + valuation credibility",
                  color: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/40",
                },
              ].map((v, i) => (
                <motion.div
                  key={v.side}
                  variants={fadeUp(i * 0.05)}
                  className={`p-4 rounded-xl border ${v.color}`}
                >
                  <p className="text-[11px] font-black text-gray-900 dark:text-gray-100 mb-1">{v.side}</p>
                  <p className="text-[12px] font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {ko ? v.koOrigin : v.enOrigin}
                  </p>
                  <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                    {ko ? v.koDetail : v.enDetail}
                  </p>
                  <p className="text-[10px] uppercase tracking-wide font-bold text-gray-500 dark:text-gray-500 mb-0.5">
                    {ko ? "이기는 요인" : "How to win"}
                  </p>
                  <p className="text-[11px] text-gray-700 dark:text-gray-300 leading-snug">
                    {ko ? v.koWin : v.enWin}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* ── FAQ ── */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">FAQ</h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: phase.accentHex }} />
            </motion.div>
            <div className="space-y-2">
              {FAQS.map((f, i) => (
                <FaqItem key={i} qKo={f.qKo} qEn={f.qEn} aKo={f.aKo} aEn={f.aEn} ko={ko} accentHex={phase.accentHex} />
              ))}
            </div>
          </motion.section>

          {/* ── Share ── */}
          <div className="pt-4 border-t border-gray-200/60 dark:border-gray-700/60">
            <ShareButtons lang={lang} title={ko ? chapter.titleKo : chapter.titleEn} />
          </div>

          {/* ── Series Nav ── */}
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

// ── FAQ Item ─────────────────────────────────────────────────────────
function FaqItem({ qKo, qEn, aKo, aEn, ko, accentHex }: { qKo: string; qEn: string; aKo: string; aEn: string; ko: boolean; accentHex: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-xl border ${open ? "border-gray-300 dark:border-gray-600" : "border-gray-200 dark:border-gray-700"} bg-white dark:bg-gray-900 overflow-hidden`}>
      <button onClick={() => setOpen(!open)} className="w-full text-left p-4 flex items-start gap-3">
        <span className="flex-shrink-0 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded mt-0.5" style={{ background: `${accentHex}20`, color: accentHex }}>Q</span>
        <span className="flex-1 text-[14px] font-semibold text-gray-900 dark:text-gray-100">{ko ? qKo : qEn}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2, ease: EASE }} className="flex-shrink-0">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gray-400">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.span>
      </button>
      {open && (
        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} transition={{ duration: 0.3, ease: EASE }} className="overflow-hidden">
          <div className="px-4 pb-4 pt-1 pl-12 text-[13px] text-gray-600 dark:text-gray-300 leading-relaxed">
            {ko ? aKo : aEn}
          </div>
        </motion.div>
      )}
    </div>
  );
}
