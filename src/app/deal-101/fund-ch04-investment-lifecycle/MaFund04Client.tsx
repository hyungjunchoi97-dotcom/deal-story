/**
 * Fund 시리즈 Ch.4 — 자금이 운용되는 과정 (Sourcing → Exit)
 *
 * 톤 가이드:
 *  - 자연스러운 한국어 + 영어 전문 용어
 *  - 시각화 4개: Deal funnel 50:1 · IC memo 구성 · DD workstream timeline · PE 실무진 hierarchy
 *  - 모든 데이터 상수 KO/EN 분리
 */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import SeriesNav from "@/components/SeriesNav";
import { FUND_CHAPTERS, getFundChapterBySlug, getFundSeriesNav } from "@/data/fund-series";

type Lang = "ko" | "en";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-40px" };
const fadeUp = (d = 0) => ({
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE, delay: d } },
});

const SLUG = "fund-ch04-investment-lifecycle";
const ACCENT = "#f59e0b";
const BLUE = "#2563eb";
const GREEN = "#16a34a";
const RED = "#dc2626";
const PURPLE = "#a855f7";
const TEAL = "#0891b2";

// Deal funnel — 50:1 — Sourcing → Close
const FUNNEL_STAGES = [
  {
    koStage: "Initial Sourcing",
    enStage: "Initial Sourcing",
    n: 250,
    koDesc: "Banker · broker · proprietary network · cold outreach",
    enDesc: "Bankers, brokers, proprietary network, cold outreach",
    koLeadBy: "Associates · VPs (broad scan)",
    enLeadBy: "Associates and VPs (broad scan)",
    duration: 0,
    color: "#94a3b8",
  },
  {
    koStage: "Preliminary Review",
    enStage: "Preliminary Review",
    n: 50,
    koDesc: "1-pager 또는 teaser · 빠른 internal screen",
    enDesc: "1-pagers or teasers · quick internal screen",
    koLeadBy: "Associates · VPs",
    enLeadBy: "Associates / VPs",
    duration: 1,
    color: BLUE,
  },
  {
    koStage: "Initial Pass / IOI",
    enStage: "Initial Pass / IOI",
    n: 12,
    koDesc: "Indication of Interest 제출 · CIM 받음",
    enDesc: "Submit IOI · receive CIM (info memo)",
    koLeadBy: "VPs · Principals lead",
    enLeadBy: "VPs / Principals lead",
    duration: 2,
    color: PURPLE,
  },
  {
    koStage: "Pre-IC Discussion",
    enStage: "Pre-IC Discussion",
    n: 5,
    koDesc: "Partner들에게 informal pitch · DD 시작 승인",
    enDesc: "Informal partner pitch · DD start approval",
    koLeadBy: "Principal · MD",
    enLeadBy: "Principal / MD",
    duration: 3,
    color: TEAL,
  },
  {
    koStage: "LOI / Binding Bid",
    enStage: "LOI / Binding Bid",
    n: 3,
    koDesc: "Letter of Intent · 가격 제시 · exclusivity 협상",
    enDesc: "Letter of Intent · price · exclusivity negotiation",
    koLeadBy: "MD · Partner",
    enLeadBy: "MD / Partner",
    duration: 5,
    color: ACCENT,
  },
  {
    koStage: "Final IC + Close",
    enStage: "Final IC + Close",
    n: 1,
    koDesc: "Full IC memo · Partner vote · Definitive agreement",
    enDesc: "Full IC memo · partner vote · definitive agreement",
    koLeadBy: "Partner unanimous (보통)",
    enLeadBy: "Partner unanimous (usually)",
    duration: 8,
    color: GREEN,
  },
];

// IC memo 표준 구성 (10 sections)
const IC_MEMO_SECTIONS = [
  { koSection: "Executive Summary",          enSection: "Executive Summary",          koContent: "딜 요약 · 가격 · expected returns · key risk 3개",       enContent: "Deal summary · price · expected returns · top-3 risks" },
  { koSection: "Industry Overview",          enSection: "Industry Overview",          koContent: "시장 규모 · 성장률 · 경쟁 구도 · regulatory",            enContent: "Market size · growth · competition · regulatory" },
  { koSection: "Company Overview",           enSection: "Company Overview",           koContent: "Business model · history · management team",            enContent: "Business model · history · management team" },
  { koSection: "Financial Performance",      enSection: "Financial Performance",      koContent: "3-5년 historical · LTM · adjusted EBITDA bridge",       enContent: "3-5 yr historical · LTM · adjusted EBITDA bridge" },
  { koSection: "Investment Thesis",          enSection: "Investment Thesis",          koContent: "Value creation levers 3-5개 · differentiated angle",   enContent: "3-5 value creation levers · differentiated angle" },
  { koSection: "Valuation & Returns",        enSection: "Valuation & Returns",        koContent: "Entry multiple · LBO model · IRR · MOIC · sensitivity", enContent: "Entry multiple · LBO model · IRR · MOIC · sensitivity" },
  { koSection: "Diligence Findings",          enSection: "Diligence Findings",          koContent: "Commercial · Financial · Legal · Operational summary",   enContent: "Commercial · financial · legal · operational summary" },
  { koSection: "Risks & Mitigants",          enSection: "Risks & Mitigants",          koContent: "Top 5-10 risk · 각자 mitigation 계획",                  enContent: "Top 5-10 risks · mitigation plan per risk" },
  { koSection: "Exit Strategy",              enSection: "Exit Strategy",              koContent: "예상 hold period · potential exits · target multiple",  enContent: "Hold period · potential exits · target multiple" },
  { koSection: "Recommendation",             enSection: "Recommendation",             koContent: "Approve / Pass / Defer · 가격 ceiling · structuring",   koLast: true,
                                                                                       enContent: "Approve / pass / defer · price ceiling · structuring",  enLast: true },
];

// DD 6 workstream timeline (8-12 weeks)
const DD_WORKSTREAMS = [
  {
    koName: "Commercial DD (CDD)",
    enName: "Commercial DD (CDD)",
    weeks: [1, 8],
    leadBy: "MBB consultant (Bain · BCG · McKinsey)",
    koDesc: "시장 분석 · 고객 인터뷰 · 경쟁 구도 · 성장 가정",
    enDesc: "Market analysis · customer interviews · competition · growth assumptions",
    color: ACCENT,
  },
  {
    koName: "Financial DD (FDD)",
    enName: "Financial DD (FDD)",
    weeks: [2, 8],
    leadBy: "Big 4 TS (PwC · EY · Deloitte · KPMG)",
    koDesc: "QoE · NWC normalization · hidden liability · cash flow",
    enDesc: "QoE · NWC normalization · hidden liabilities · cash flow",
    color: GREEN,
  },
  {
    koName: "Legal DD (LDD)",
    enName: "Legal DD (LDD)",
    weeks: [3, 10],
    leadBy: "법무법인 (Kirkland · Latham · Paul Weiss · 김장)",
    enLeadBy: "Law firms (Kirkland · Latham · Paul Weiss · Kim & Chang)",
    koDesc: "Contract · litigation · IP · regulatory · employment",
    enDesc: "Contracts · litigation · IP · regulatory · employment",
    color: PURPLE,
  },
  {
    koName: "Operational DD",
    enName: "Operational DD",
    weeks: [4, 9],
    leadBy: "Operating Partner + 산업 전문가",
    enLeadBy: "Operating Partner + industry experts",
    koDesc: "Supply chain · IT systems · org structure · efficiency 개선 여지",
    enDesc: "Supply chain · IT systems · org structure · efficiency opportunities",
    color: BLUE,
  },
  {
    koName: "Tech / IT DD",
    enName: "Tech / IT DD",
    weeks: [5, 9],
    leadBy: "Tech advisor (Accenture · West Monroe)",
    enLeadBy: "Tech advisors (Accenture · West Monroe)",
    koDesc: "Tech stack · cybersecurity · scalability · IT capex 필요",
    enDesc: "Tech stack · cybersecurity · scalability · IT capex needs",
    color: TEAL,
  },
  {
    koName: "HR / Cultural DD",
    enName: "HR / Cultural DD",
    weeks: [6, 10],
    leadBy: "HR consultant (Korn Ferry · Spencer Stuart)",
    enLeadBy: "HR consultants (Korn Ferry · Spencer Stuart)",
    koDesc: "Management quality · culture · key person risk · retention",
    enDesc: "Management quality · culture · key person risk · retention",
    color: RED,
  },
];

// PE 실무진 hierarchy
const PE_HIERARCHY = [
  {
    koLevel: "Associate (Pre-MBA)",
    enLevel: "Associate (Pre-MBA)",
    years: "2-3 yr (IB 출신)",
    enYears: "2-3 years (ex-IB)",
    base: "$150-200K",
    bonus: "100-150% base",
    carry: 0,
    color: "#94a3b8",
    koRole: "LBO modeling · financial DD · IC memo 초안 · banker tracking",
    enRole: "LBO modeling · financial DD · drafting IC memos · tracking bankers",
  },
  {
    koLevel: "Senior Associate (Post-MBA)",
    enLevel: "Senior Associate (Post-MBA)",
    years: "MBA + 2-3 yr",
    enYears: "MBA + 2-3 years",
    base: "$200-275K",
    bonus: "100-150% base",
    carry: 5,
    color: BLUE,
    koRole: "Deal lead support · DD workstream 관리 · IC memo 작성",
    enRole: "Deal lead support · DD workstream management · authoring IC memos",
  },
  {
    koLevel: "Vice President",
    enLevel: "Vice President",
    years: "5-7 yr 경력",
    enYears: "5-7 yr experience",
    base: "$275-350K",
    bonus: "100-200% base",
    carry: 15,
    color: TEAL,
    koRole: "Deal lead · 가격 협상 · portfolio company board · 일부 sourcing",
    enRole: "Deal lead · price negotiation · board service · some sourcing",
  },
  {
    koLevel: "Principal",
    enLevel: "Principal",
    years: "8-12 yr",
    enYears: "8-12 yr",
    base: "$350-500K",
    bonus: "200-300% base",
    carry: 40,
    color: PURPLE,
    koRole: "Sector lead · IC voting · banker relationship · 상당 sourcing",
    enRole: "Sector lead · IC voting · banker relationships · meaningful sourcing",
  },
  {
    koLevel: "Managing Director / Partner",
    enLevel: "Managing Director / Partner",
    years: "12+ yr",
    enYears: "12+ yr",
    base: "$500K-1M+",
    bonus: "300-500%+ base",
    carry: 100,
    color: ACCENT,
    koRole: "Sourcing · LP relations · firm strategy · final IC vote · carry pool 주력",
    enRole: "Sourcing · LP relations · firm strategy · final IC vote · primary carry recipient",
  },
];

export default function MaFund04Client({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const chapter = getFundChapterBySlug(SLUG)!;
  const { prev, next } = getFundSeriesNav(SLUG);
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
            <Link href={ko ? "/learn" : "/en/learn"} className="hover:text-gray-600 dark:hover:text-gray-300">Learn</Link>
            <span>›</span>
            <span className="text-gray-600 dark:text-gray-300 font-medium">{ko ? "Fund 시리즈 · Ch.4" : "Fund Series · Ch.4"}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="max-w-3xl mx-auto px-5 pt-6 pb-8">
          <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
            <span style={{ color: ACCENT }}>{ko ? "Fund 시리즈" : "Fund Series"}</span>
            <span>·</span>
            <span>Ch.{chapter.ch}</span>
            <span>·</span>
            <span>{chapter.readingMinutes}{ko ? "분 읽기" : " min"}</span>
          </div>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-3 leading-tight">
                {ko ? chapter.titleKo : chapter.titleEn}
              </h1>
              <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko ? chapter.taglineKo : chapter.taglineEn}
              </p>
            </div>
            <div className="flex-shrink-0 pt-1">
              <ShareButtons title={ko ? chapter.titleKo : chapter.titleEn} variant="top" lang={lang} />
            </div>
          </div>
        </section>

        {/* Series chapter pills */}
        <div className="max-w-3xl mx-auto px-5 mb-12">
          <div className="flex gap-1.5 flex-wrap">
            {FUND_CHAPTERS.map((ch) => {
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

        <article className="max-w-3xl mx-auto px-5 pb-16 prose-base">

          {/* § 1 — Deal Sourcing Funnel */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Deal Sourcing — 250개 보고 1개 closing" : "Deal sourcing — 250 reviewed, one closed"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Fund가 commitment $1B을 받으면 보통 4-5년에 걸쳐 8-15개 deal에 deploy 해요. 그런데 그 8-15개를 고르기 위해 매년 50-100개 deal을 detailed review 합니다. PE GP 한 팀이 5년 lifecycle 동안 거치는 deal pipeline이 250개 정도. 그중에서 8-15개만 실제로 closing. 비율로 보면 약 50:1 또는 30:1 funnel이에요."
                : "A fund with $1B in commitments typically deploys across 8-15 deals over 4-5 years. To pick those 8-15, a GP team reviews 50-100 deals per year in detail. Over a 5-year cycle, the pipeline runs roughly 250 deals — 8-15 closing. Funnel of 50:1 or 30:1."}</p>
              <p>{ko
                ? "Sourcing 채널이 크게 두 가지로 나뉘어요. Proprietary sourcing (관계 기반) — GP partner의 network · 산업 conference · CEO outreach · old portfolio CEO referral. 이게 가장 prized된 채널이고, 가격이 낮고 경쟁이 적은 deal이 여기서 나옵니다. 다른 채널이 Sell-side process (auction) — investment banker가 만든 process에 들어가서 다른 PE 10-20개와 경쟁하는 형태. 가격이 더 높지만 deal 자체는 검증된 quality."
                : "Sourcing splits two ways. Proprietary sourcing (relationship-based) — GP partner networks, industry conferences, CEO outreach, referrals from old portfolio CEOs. The most prized channel — lower prices, less competition. The other: sell-side processes (auctions) — competing with 10-20 other PEs inside an IB-run process. Higher prices but verified quality."}</p>
              <p>{ko
                ? "Top-tier PE GP는 proprietary sourcing 비중이 30-50%까지 올라가는데, mid-market PE는 80-90%가 auction process. 한국 PE는 글로벌 PE보다 proprietary 비중이 더 높은 편이에요 (관계 사회 + 작은 banker pool). MBK · IMM 같은 회사가 \"우리는 매년 banker가 가져오는 process는 거의 안 본다\" 라고 말하는 게 정확히 이 의미."
                : "Top-tier PE GPs push proprietary sourcing to 30-50%; mid-market PE runs 80-90% on auctions. Korean PE leans more proprietary than global PE (relationship-driven society + smaller banker pool). When MBK or IMM says 'we barely look at banker processes,' this is what they mean."}</p>
            </div>

            {/* Funnel visualization */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Deal Funnel — 250 → 1 (5년 cycle)" : "Deal funnel — 250 → 1 (5-yr cycle)"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "각 단계에서 누가 main으로 일하는지." : "Who runs the work at each stage."}
              </p>
              <div className="space-y-3">
                {FUNNEL_STAGES.map((s, i) => {
                  const widthPct = (s.n / 250) * 100;
                  const isLast = i === FUNNEL_STAGES.length - 1;
                  return (
                    <div key={i}>
                      <motion.div
                        initial={{ opacity: 0, x: -6 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={VP}
                        transition={{ duration: 0.4, delay: i * 0.07, ease: EASE }}
                      >
                        <div className="flex items-baseline justify-between mb-1">
                          <div className="flex items-baseline gap-2.5">
                            <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500">{String(i + 1).padStart(2, "0")}</span>
                            <span className="text-[12.5px] font-bold" style={{ color: s.color }}>{ko ? s.koStage : s.enStage}</span>
                            {s.duration > 0 && (
                              <span className="text-[10px] font-mono text-gray-500 dark:text-gray-400">· {ko ? `~${s.duration}주 누적` : `~${s.duration} weeks cumulative`}</span>
                            )}
                          </div>
                          <span className="text-[12px] font-mono font-bold" style={{ color: s.color }}>{s.n}{ko ? "개" : ""}</span>
                        </div>
                        <div className="h-5 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden mb-1">
                          <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={VP}
                            transition={{ duration: 0.55, delay: 0.15 + i * 0.07, ease: EASE }}
                            className="h-full rounded"
                            style={{ width: `${widthPct}%`, background: s.color, transformOrigin: "left" }}
                          />
                        </div>
                        <div className="ml-7 flex items-baseline justify-between text-[10.5px]">
                          <span className="text-gray-500 dark:text-gray-400 leading-snug">{ko ? s.koDesc : s.enDesc}</span>
                          <span className="text-gray-400 dark:text-gray-500 italic flex-shrink-0 ml-3">{ko ? s.koLeadBy : s.enLeadBy}</span>
                        </div>
                      </motion.div>
                      {!isLast && <div className="text-center text-gray-300 dark:text-gray-600 text-[11px] leading-none py-1">↓</div>}
                    </div>
                  );
                })}
              </div>
              <p className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "Conversion: Initial 250 → IOI 12 → LOI 3 → Close 1. 마지막 단계에서 LOI 3개가 동시에 진행 중일 수도 있고, 그중 가격·DD 결과에 따라 1개만 close까지 감."
                  : "Conversion: 250 initial → 12 IOI → 3 LOI → 1 close. Three LOIs may run in parallel; only one survives price and DD to close."}
              </p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 2 — IC Process + Memo */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "IC Process — Partner들이 모여서 deal을 결정한다" : "The IC process — partners gather and decide"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Investment Committee (IC) 가 PE GP의 모든 deal 결정 핵심 메커니즘이에요. Fund의 carry pool을 share하는 partner 5-15명이 정기적으로 (주 1회 또는 격주) 모여서 진행 중인 deal들을 검토하고, 새 deal에 대한 approval / pass / defer를 결정합니다."
                : "The Investment Committee (IC) is the GP's core decision mechanism. 5-15 partners sharing the fund's carry pool gather regularly (weekly or biweekly) to review live deals and approve, pass, or defer new ones."}</p>
              <p>{ko
                ? "한 deal이 IC를 통과하는 데 보통 3번의 meeting을 거쳐요. (1) Pre-IC discussion — Principal·MD가 informal하게 \"이런 deal 들어왔는데 DD 시작해도 될까\" 를 partner들에게 sound-out. (2) Pre-IC formal — DD 6-8주 진행 후 preliminary findings 공유. \"LOI 제출하자\" 결정. (3) Final IC — DD 완료 + valuation 확정 후 full IC memo로 final approval 또는 vote."
                : "A deal usually clears IC across three meetings. (1) Pre-IC discussion — principal or MD sounds out partners informally: 'this deal came in, should we start DD?' (2) Pre-IC formal — after 6-8 weeks of DD, share preliminary findings and decide 'submit LOI.' (3) Final IC — after DD completes and valuation lands, full IC memo for final approval or vote."}</p>
              <p>{ko
                ? "Voting 방식이 firm마다 다른데 크게 두 가지. \"Unanimous\" — 한 partner라도 반대하면 pass. KKR · Sequoia · Benchmark 같은 top-tier가 이 방식. \"Majority\" — 단순 과반 또는 2/3 majority. 더 빠른 결정이 가능. Unanimous가 더 보수적이고 deal quality control이 강하지만, fund가 deploy 안 되는 \"deal paralysis\" risk도 있어요. Final IC memo는 보통 80-150 페이지로 IB pitchbook과 비슷한 분량."
                : "Voting varies. 'Unanimous' — one dissent kills the deal. KKR, Sequoia, Benchmark use this. 'Majority' — simple or 2/3 majority. Faster decisions. Unanimous offers stronger quality control but creates 'deal paralysis' risk. Final IC memos run 80-150 pages — IB pitchbook scale."}</p>
            </div>

            {/* IC memo structure */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Final IC Memo — 표준 10개 sections" : "Final IC memo — standard 10 sections"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "80-150 페이지. Associate가 초안 작성, Principal·VP가 최종 정리." : "80-150 pages. Associates draft; principals and VPs finalize."}
              </p>
              <div className="space-y-2">
                {IC_MEMO_SECTIONS.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.4, delay: i * 0.05, ease: EASE }}
                    className="grid grid-cols-[auto_180px_1fr] gap-3 items-start px-3 py-2 rounded-md"
                    style={{
                      background: i === 9 ? ACCENT + "1a" : ACCENT + "06",
                      border: i === 9 ? `1px solid ${ACCENT}60` : `1px solid transparent`,
                    }}
                  >
                    <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[12px] font-bold text-gray-900 dark:text-gray-100" style={{ color: i === 9 ? ACCENT : undefined }}>
                      {ko ? s.koSection : s.enSection}
                    </span>
                    <span className="text-[10.5px] text-gray-500 dark:text-gray-400 leading-snug">{ko ? s.koContent : s.enContent}</span>
                  </motion.div>
                ))}
              </div>
              <p className="mt-4 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "Section 5 (Investment Thesis) 가 메모의 핵심. \"왜 이 deal이 우리 fund의 best return\" 인가의 3-5 line. Partner들의 vote은 사실상 thesis에 동의하느냐 여부."
                  : "Section 5 (Investment Thesis) is the memo's core. 3-5 sentences on 'why this deal is the best return for our fund.' Partner votes hinge on whether they agree with the thesis."}
              </p>
            </div>
          </motion.section>

          {/* Mid share */}
          <ShareButtons title={ko ? chapter.titleKo : chapter.titleEn} variant="mid" lang={lang} />

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 3 — Due Diligence */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Due Diligence — 6개 workstream 동시 진행" : "Due diligence — six workstreams running in parallel"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "LOI를 제출하고 exclusivity를 받으면 본격적인 due diligence 시작. PE deal의 표준 DD는 6개 workstream을 동시에 굴려요. Commercial · Financial · Legal · Operational · Tech · HR. 보통 8-12주 안에 모두 마쳐야 하고, 각 workstream은 outside advisor (MBB · Big 4 · 법무법인 등) 가 main lead."
                : "After submitting the LOI and securing exclusivity, full DD kicks off. PE deals run six workstreams in parallel: commercial, financial, legal, operational, tech, HR. Eight to twelve weeks total, each workstream led by an outside advisor (MBB, Big 4, law firms, etc.)."}</p>
              <p>{ko
                ? "PE 내부 deal team이 하는 일은 (1) workstream 별로 advisor 선정 · scope 협상 · 비용 관리, (2) 각 workstream의 findings를 weekly로 받아서 IC에 보고, (3) findings 사이의 inconsistency 발견 및 cross-check, (4) 최종 IC memo에 6개 workstream을 종합한 view 만들기. 한 deal에 DD 비용이 보통 $5-15M까지 들어가고, 만약 deal이 깨지면 그 비용은 GP 부담 (\"broken deal cost\")."
                : "The internal PE deal team does four things: (1) select advisors per workstream, scope and budget; (2) receive weekly findings from each workstream and report to IC; (3) cross-check inconsistencies across findings; (4) synthesize the six workstreams into the final IC memo's combined view. Total DD cost per deal: $5-15M. If the deal breaks, the GP eats it — 'broken deal cost.'"}</p>
              <p>{ko
                ? "Workstream 중 가장 결정적인 두 가지가 Commercial DD와 Financial DD예요. CDD는 \"이 회사의 성장 가정이 실현 가능한가\" 를 시장·고객 데이터로 검증 — Bain · BCG · McKinsey 가 industry-specific 팀으로 들어옴. FDD는 우리 FDD 시리즈에서 본 그대로 — QoE · NWC · hidden liability — Big 4 TS가 main. 이 두 workstream이 deal price·structure 결정의 80%."
                : "The two most consequential workstreams: CDD and FDD. CDD validates 'are growth assumptions achievable' through market and customer data — Bain, BCG, McKinsey deploy industry-specific teams. FDD is what the FDD series covered — QoE, NWC, hidden liabilities — led by Big 4 TS. These two determine 80% of deal price and structure."}</p>
            </div>

            {/* DD timeline gantt */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "DD 6 workstream — 12주 Gantt" : "Six DD workstreams — 12-week Gantt"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "각 workstream의 시작·종료 시점과 main advisor." : "Start, end, and main advisor per workstream."}
              </p>
              <div className="space-y-4">
                {DD_WORKSTREAMS.map((w, i) => {
                  const leftPct = ((w.weeks[0] - 1) / 12) * 100;
                  const widthPct = ((w.weeks[1] - w.weeks[0] + 1) / 12) * 100;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -6 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={VP}
                      transition={{ duration: 0.45, delay: i * 0.07, ease: EASE }}
                    >
                      <div className="flex items-baseline justify-between mb-1">
                        <span className="text-[12px] font-bold" style={{ color: w.color }}>{ko ? w.koName : w.enName}</span>
                        <span className="text-[10px] font-mono text-gray-500 dark:text-gray-400">W{w.weeks[0]}-W{w.weeks[1]}</span>
                      </div>
                      <div className="relative h-5 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden">
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={VP}
                          transition={{ duration: 0.55, delay: 0.2 + i * 0.07, ease: EASE }}
                          className="absolute top-0 h-full rounded"
                          style={{ left: `${leftPct}%`, width: `${widthPct}%`, background: w.color, transformOrigin: "left" }}
                        />
                      </div>
                      <div className="mt-1 flex items-baseline justify-between gap-3">
                        <span className="text-[10.5px] text-gray-500 dark:text-gray-400 leading-snug">{ko ? w.koDesc : w.enDesc}</span>
                        <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500 italic flex-shrink-0">{(ko ? w.leadBy : (w.enLeadBy || w.leadBy))}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              {/* X axis */}
              <div className="mt-4 pt-2 border-t border-gray-200 dark:border-gray-700 flex justify-between text-[9px] text-gray-400 dark:text-gray-500 font-mono">
                <span>W1</span>
                <span>W3</span>
                <span>W6</span>
                <span>W9</span>
                <span>W12</span>
              </div>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 4 — Closing + Hold + Exit */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Closing → Hold → Exit — 5년 동안 무슨 일이 일어나나" : "Closing → Hold → Exit — what happens over five years"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Final IC approval 후 closing까지 보통 4-8주. SPA 서명 · regulatory approval (antitrust · 한국이면 공정위) · financing 확정 · 100-day plan 준비. Closing day에 GP는 board seat 2-3개 확보하고, CEO·CFO 권한 정의가 LP의 governance package에 들어가요."
                : "From final IC approval to closing usually takes 4-8 weeks. SPA signing · regulatory approval (antitrust · KFTC in Korea) · financing finalization · 100-day plan preparation. On closing day, the GP locks in 2-3 board seats and CEO/CFO authority terms go into the governance package."}</p>
              <p>{ko
                ? "Closing 직후 100-day plan이 시작돼요. Quick wins (procurement 통합 · IT consolidation · pricing optimization) 부터 longer-term operational improvements까지. PE Buyout이 IRR을 만드는 5가지 lever — Revenue growth · Margin expansion · Multiple expansion · Debt paydown · Add-on M&A — 모두 이 100-day plan에서 시작해서 5년 hold 동안 점진적으로 실행됩니다."
                : "Right after closing, the 100-day plan begins. Quick wins (procurement integration, IT consolidation, pricing optimization) through longer-term operational improvements. PE Buyout's five IRR levers — revenue growth, margin expansion, multiple expansion, debt paydown, add-on M&A — all start in the 100-day plan and execute gradually over the 5-year hold."}</p>
              <p>{ko
                ? "Hold period 동안 GP는 분기 board meeting · KPI dashboard 추적 · management team coaching · add-on acquisition sourcing 까지 portfolio company 운영에 깊이 개입해요. 한국 PE는 \"hands-off\" approach가 강한 편이고, 미국 PE는 \"hands-on\" approach (KKR Capstone · Blackstone Portfolio Ops 같은 별도 operating team) 가 표준."
                : "During the hold, the GP runs quarterly board meetings, tracks KPI dashboards, coaches management, sources add-on acquisitions. Korean PE leans 'hands-off.' US PE runs heavy 'hands-on' with dedicated operating teams (KKR Capstone, Blackstone Portfolio Ops)."}</p>
              <p>{ko
                ? "Exit 결정은 3-7년 hold 후 GP partner들이 합의로 정해요. 옵션은 5가지 — (1) IPO (가장 큰 returns 가능하지만 timing risk), (2) Strategic sale (전략적 인수자에게 매각), (3) Sponsor-to-sponsor (다른 PE에게 매각), (4) Secondary sale (continuation fund 활용), (5) Recap (refinance + 일부 distribution). 각 option의 가격·timing·certainty를 IB가 평가해서 GP partner들이 최종 선택."
                : "Exit decisions come 3-7 years in, by partner consensus. Five options — (1) IPO (largest potential but timing risk), (2) strategic sale (to a corporate buyer), (3) sponsor-to-sponsor (to another PE), (4) secondary sale (via a continuation fund), (5) recap (refinance + partial distribution). Bankers evaluate each option's price, timing, and certainty; partners pick."}</p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 5 — PE 실무진 hierarchy */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "PE 실무진 — Associate부터 Partner까지 각 단계 역할" : "PE practitioners — what each rank actually does"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "지금까지 본 lifecycle을 \"누가 어느 단계에서 어떤 일을 하는가\" 로 다시 보면 PE 조직의 hierarchy가 보여요. Associate는 modeling과 IC memo 초안, VP는 deal lead와 가격 협상, Principal·Partner는 sourcing과 IC voting. 단계가 올라갈수록 \"실무\" 비중이 줄고 \"의사결정\" 비중이 늘어나요."
                : "Looking at the lifecycle through 'who does what at each stage' reveals PE's hierarchy. Associates handle modeling and IC memo drafts. VPs lead deals and negotiate price. Principals and partners source and vote at IC. Going up, hands-on work shrinks and decision-making expands."}</p>
              <p>{ko
                ? "보상도 단계별로 극단적으로 갈려요. Associate는 IB와 비슷한 base + bonus 구조 ($150-200K base · 100-150% bonus, carry 거의 없음). MD/Partner는 base는 비슷하지만 carry pool에서 가져가는 비중이 압도적이고, 좋은 fund 한 vintage에서 partner 한 명이 $20-50M+ carry를 받는 게 흔해요. 이게 \"PE GP가 finance 직종 중 가장 부유\" 한 이유."
                : "Comp diverges drastically by rank. Associates resemble IB ($150-200K base, 100-150% bonus, virtually no carry). MDs and partners have similar base but capture the carry pool. A single partner can receive $20-50M+ carry from one good fund vintage. That's why PE GPs are among the richest professionals in finance."}</p>
              <p>{ko
                ? "한국 PE는 단계 구분이 약간 다른데, 보통 Associate → Senior Associate → Director → Managing Director → Partner. Title이 다르지만 역할은 유사하고, 보상도 미국 대비 75-85% 수준 (base + bonus). Carry는 한국 PE도 비슷한 구조이지만, fund size가 작아서 (\$1-5B vs \$10-25B mega-cap) absolute amount는 더 낮아요."
                : "Korean PE structures titles slightly differently — typically Associate → Senior Associate → Director → MD → Partner. Titles differ but roles are similar; compensation runs 75-85% of US levels (base + bonus). Carry structures are similar, but with smaller fund sizes ($1-5B vs $10-25B mega-cap), absolute amounts come in lower."}</p>
            </div>

            {/* Hierarchy chart */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "PE Hierarchy — 5 단계 · Base · Bonus · Carry 비중" : "PE hierarchy — 5 levels · base · bonus · carry share"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "Carry 비중은 fund carry pool 100을 기준 (Partner를 100으로 정규화)." : "Carry share is normalized vs Partner = 100 of the fund's carry pool."}
              </p>
              <div className="space-y-3">
                {PE_HIERARCHY.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.45, delay: i * 0.08, ease: EASE }}
                    className="rounded-lg p-4 border"
                    style={{ borderColor: h.color + "60", background: h.color + "0d" }}
                  >
                    <div className="flex items-baseline justify-between mb-1.5">
                      <span className="text-[13px] font-bold" style={{ color: h.color }}>{ko ? h.koLevel : h.enLevel}</span>
                      <span className="text-[10px] font-mono text-gray-500 dark:text-gray-400">{ko ? h.years : h.enYears}</span>
                    </div>
                    <p className="text-[11.5px] text-gray-700 dark:text-gray-300 leading-snug mb-2.5">{ko ? h.koRole : h.enRole}</p>

                    <div className="grid grid-cols-3 gap-3 text-[10px]">
                      <div>
                        <span className="block font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-0.5">Base</span>
                        <span className="font-mono text-gray-700 dark:text-gray-300">{h.base}</span>
                      </div>
                      <div>
                        <span className="block font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-0.5">Bonus</span>
                        <span className="font-mono text-gray-700 dark:text-gray-300">{h.bonus}</span>
                      </div>
                      <div>
                        <span className="block font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-0.5">{ko ? "Carry 비중" : "Carry share"}</span>
                        <div className="flex items-center gap-1.5">
                          <span className="font-mono font-bold" style={{ color: h.color }}>{h.carry}</span>
                          <div className="flex-1 h-1.5 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden">
                            <motion.div
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              viewport={VP}
                              transition={{ duration: 0.55, delay: 0.2 + i * 0.08, ease: EASE }}
                              className="h-full rounded"
                              style={{ width: `${h.carry}%`, background: h.color, transformOrigin: "left" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "Partner 1명의 carry가 fund total carry의 5-10%. Good fund 한 vintage (\$2B fund × 2.5x MOIC = \$600M carry pool) 면 Partner 1명이 \$30-60M 받음. 이게 보통 \"successful PE Partner\" 의 한 vintage 보상."
                  : "One partner's carry = 5-10% of the fund's total. On a good vintage ($2B fund × 2.5× MOIC = $600M carry pool), one partner receives $30-60M. That's the standard 'successful PE partner' single-vintage payout."}
              </p>
            </div>

            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4 mt-7">
              <p>{ko
                ? "Ch.5에서는 이 carry pool 자체가 어떻게 굴러가는지 — Management fee 누적, Carry 계산, Distribution Waterfall mechanics, DPI · TVPI · IRR 같은 fund performance 지표를 자세히 봅니다. 그리고 Ch.6 마지막 챕터에서 한국·미국 시장 비교와 주요 player 도감으로 시리즈를 마무리."
                : "Ch.5 dives into how the carry pool actually works — cumulative management fees, carry math, distribution waterfall mechanics, and fund performance metrics like DPI, TVPI, IRR. Ch.6 closes the series with the Korea vs US market comparison and the player atlas."}</p>
            </div>
          </motion.section>

          {/* Next chapter */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mt-12 mb-10">
            <div className="border-l-2 pl-4 py-1" style={{ borderColor: ACCENT }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>{ko ? "다음 챕터" : "Next chapter"}</p>
              <p className="text-[15px] font-bold text-gray-900 dark:text-gray-100">
                Ch.5 — {ko ? "Fund 수익 구조 — LP/GP 경제학" : "Fund economics — the LP/GP math"}
              </p>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                {ko
                  ? "Management Fee 10년치 누적 · Carry 계산 mechanic · Distribution Waterfall (American vs European) 자세히 · DPI · TVPI · IRR · MOIC 지표 분해."
                  : "Cumulative 10-year management fees, carry mechanics, deep dive on American vs European waterfall, and DPI / TVPI / IRR / MOIC metrics decomposed."}
              </p>
            </div>
          </motion.section>

          {/* Bottom share */}
          <ShareButtons
            title={ko ? chapter.titleKo : chapter.titleEn}
            variant="bottom"
            lang={lang}
            readingMinutes={chapter.readingMinutes}
          />

          {/* Series prev/next */}
          {(prev || next) && (
            <div className="mt-6">
              <SeriesNav
                lang={lang}
                prev={prev ? { href: `${base}/${prev.slug}`, title: ko ? prev.titleKo : prev.titleEn } : null}
                next={next ? { href: `${base}/${next.slug}`, title: ko ? next.titleKo : next.titleEn } : null}
              />
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
