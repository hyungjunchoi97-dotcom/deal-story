/**
 * M&A 시리즈 Ch.1 — 전과정 흐름 (6개월의 여정)
 *
 * Sections:
 *  § 1. 왜 단순한가
 *  § 2. 9단계 타임라인
 *  § 3. 병렬로 굴러가는 4개 워크스트림
 *  § 4. 진짜 어려운 건 어디인가 (Ch.3-6 preview)
 *  § 5. Sell-side vs Buy-side — 같은 지도
 */
"use client";

import { useState } from "react";
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

const SLUG = "ma-ch01-overview";
const ACCENT = "#3b82f6"; // blue-500

// ── 9-stage timeline ──────────────────────────────────────────────────
// week = relative position (0-30)
const STAGES = [
  { week: 0,  ko: "Pitch / Mandate 수주",       en: "Pitch / Mandate win",       descKo: "Engagement letter 사인, MNPI wall 발동",       descEn: "Engagement letter signed, MNPI wall raised" },
  { week: 3,  ko: "Teaser + Buyer list",         en: "Teaser + Buyer list",        descKo: "익명 2장짜리 + Long list 100명 → Short list 30명",      descEn: "2-page anonymous + Long list of 100 → Short list of 30" },
  { week: 6,  ko: "NDA + CIM 배포",              en: "NDA + CIM distribution",     descKo: "NDA 사인 buyer 약 25명에게 CIM 60-100p",          descEn: "CIM 60-100p sent to ~25 NDA-signed buyers" },
  { week: 8,  ko: "IOI (1차 입찰)",              en: "IOI (1st round bids)",       descKo: "Non-binding offers — 가격 range + 자금조달",      descEn: "Non-binding — price range + financing source" },
  { week: 11, ko: "Mgmt presentation + VDR",     en: "Mgmt presentation + VDR",     descKo: "Shortlist 5-7명에게 경영진 발표 + 전체 dataroom 오픈",  descEn: "5-7 finalists hear management + full dataroom opens" },
  { week: 14, ko: "DD 진행 (FDD·LDD·CDD)",       en: "DD (FDD/LDD/CDD)",           descKo: "Big 4 + 컨설팅 + 법무가 병렬 진행. Q&A 200+ 라운드",    descEn: "Big 4 + consultants + law firm in parallel. 200+ Q&A rounds" },
  { week: 18, ko: "Final bid + SPA mark-up",     en: "Final bids + SPA mark-up",   descKo: "Binding offer + SPA 수정안 동시 제출",            descEn: "Binding offer + marked-up SPA submitted together" },
  { week: 22, ko: "SPA 협상 + Signing",          en: "SPA negotiation + Signing",  descKo: "최종 협상 1-3주, 사인 시 deal announce",          descEn: "1-3 weeks of final negotiation, then deal announced" },
  { week: 30, ko: "Regulatory + Closing",        en: "Regulatory + Closing",       descKo: "HSR·EU·MOFCOM·KFTC 통과 후 funds wire",            descEn: "After HSR/EU/MOFCOM/KFTC clearance, funds wired" },
];

// ── Parallel workstreams (Gantt) ──────────────────────────────────────
const WORKSTREAMS = [
  {
    actor: "IB",
    koActor: "IB (Lead)",
    enActor: "IB (Lead)",
    color: "#3b82f6",
    tracks: [
      { startWeek: 0,  endWeek: 30, koLabel: "전체 오케스트레이션", enLabel: "Overall orchestration" },
    ],
  },
  {
    actor: "FDD",
    koActor: "회계법인 FAS",
    enActor: "Accounting (FAS)",
    color: "#8b5cf6",
    tracks: [
      { startWeek: 2,  endWeek: 6,  koLabel: "Vendor DD",  enLabel: "Vendor DD" },
      { startWeek: 11, endWeek: 18, koLabel: "Buy-side FDD", enLabel: "Buy-side FDD" },
    ],
  },
  {
    actor: "CDD",
    koActor: "컨설팅사",
    enActor: "Consultants",
    color: "#10b981",
    tracks: [
      { startWeek: 11, endWeek: 18, koLabel: "CDD (시장·고객)", enLabel: "CDD (market/customer)" },
    ],
  },
  {
    actor: "LDD",
    koActor: "법무법인",
    enActor: "Law firm",
    color: "#f59e0b",
    tracks: [
      { startWeek: 3,  endWeek: 6,  koLabel: "VDR 정리·NDA",   enLabel: "VDR cleanup, NDAs" },
      { startWeek: 11, endWeek: 22, koLabel: "Buy-side LDD + SPA 작성", enLabel: "Buy-side LDD + SPA drafting" },
    ],
  },
  {
    actor: "Client",
    koActor: "클라이언트 (CEO·CFO·Board)",
    enActor: "Client (CEO/CFO/Board)",
    color: "#f43f5e",
    tracks: [
      { startWeek: 11, endWeek: 12, koLabel: "Mgmt presentation",         enLabel: "Mgmt presentation" },
      { startWeek: 18, endWeek: 22, koLabel: "Final 협상 의사결정",       enLabel: "Final negotiation decisions" },
    ],
  },
];

// ── Where it gets hard (preview of Ch.3-6) ────────────────────────────
const HARD_POINTS = [
  { num: 3, koTitle: "FDD: EBITDA 1회성 vs 반복적",          enTitle: "FDD: one-time vs recurring",         koBody: "회계법인이 정한 'Adjusted EBITDA'를 가지고 buyer 자문사와 끝까지 실랑이. 한 항목당 ±$50M 가격 swing.", enBody: "The 'Adjusted EBITDA' set by the FAS team is fought line by line with the buyer's advisor. Each item can swing price by $50M+." },
  { num: 4, koTitle: "Valuation: 가정과 Comps",                enTitle: "Valuation: assumptions and comps",   koBody: "DCF는 WACC보다 Revenue projection 가정이 진짜 싸움. Comps는 peer universe 선정의 art.", enBody: "In DCF, revenue projection assumptions matter far more than WACC. Comps come down to the art of peer selection." },
  { num: 5, koTitle: "Orchestration: 4개 advisor + client 동시 관리", enTitle: "Orchestration: 4 advisors + client",  koBody: "IB Lead가 회계·컨설팅·법무 + CEO/CFO + buyer side 까지 동시에 굴림. 진짜 IB의 일.", enBody: "IB Lead simultaneously runs accounting, consultants, law firm, CEO/CFO, and the buyer side. This is the actual IB job." },
  { num: 6, koTitle: "SPA + 클로징: 가격을 흔드는 막판 조항", enTitle: "SPA + Closing: clauses that move price",  koBody: "NWC, escrow, earnout, MAC — 사인 후에도 가격을 흔드는 조항들. 그리고 regulatory가 deal을 깬다.", enBody: "NWC, escrow, earnout, MAC — clauses that shift price even after signing. And regulatory can still kill the deal." },
];

// ── Sell vs Buy side comparison ───────────────────────────────────────
const SIDE_COMPARE = [
  { koLabel: "이니시에이션", enLabel: "Initiation",     sellKo: "Mandate가 mandate", sellEn: "Mandate-driven",       buyKo: "Targeted search + relationship", buyEn: "Targeted search + relationship" },
  { koLabel: "마케팅 문서",  enLabel: "Marketing docs",  sellKo: "CIM·Teaser 만들기", sellEn: "Build CIM/Teaser",      buyKo: "CIM 받아 보고 평가",          buyEn: "Read CIMs, evaluate" },
  { koLabel: "DD",           enLabel: "DD",              sellKo: "Vendor DD 발주",     sellEn: "Commission Vendor DD",  buyKo: "본인 비용으로 풀 DD",         buyEn: "Full DD at own expense" },
  { koLabel: "가격 책정",    enLabel: "Pricing",         sellKo: "Reserve price 정함", sellEn: "Set reserve price",     buyKo: "Max bid 산정",                 buyEn: "Calculate max bid" },
  { koLabel: "Closing",      enLabel: "Closing",         sellKo: "Funds 수령",          sellEn: "Receive funds",         buyKo: "Funds wire + PMI 시작",       buyEn: "Wire funds + start PMI" },
];

export default function MaCh01OverviewClient({ lang }: { lang: Lang }) {
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
            <span className="text-gray-600 dark:text-gray-300 font-medium">{ko ? "M&A 시리즈 · Ch.1" : "M&A Series · Ch.1"}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="max-w-3xl mx-auto px-5 pt-6 pb-10">
          <div className="mb-4 flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full" style={{ background: `${ACCENT}15`, color: ACCENT }}>
              {ko ? "M&A 시리즈" : "M&A Series"} · Ch.1
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

          {/* § 1. Why M&A is simpler than it looks */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 1</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "M&A는 보기보다 단순한 흐름이다" : "M&A is more linear than it looks"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>
            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>{ko
                ? "M&A는 처음 접하면 복잡해 보입니다. CIM·IOI·VDR·LOI·SPA·MAC·HSR — 약어만 수십 개에, 회계법인·법무법인·컨설팅사·은행이 동시에 굴러갑니다. 그런데 큰 그림에서 보면 의외로 명확한 한 줄로 정리됩니다."
                : "M&A looks complex at first. CIM, IOI, VDR, LOI, SPA, MAC, HSR — dozens of acronyms, with accounting firms, law firms, consultants, and banks all running in parallel. But at the highest level, it collapses into one clean line."}</p>
              <div className="rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700 p-5">
                <p className="text-[13px] font-mono leading-relaxed text-gray-700 dark:text-gray-300">
                  {ko
                    ? "회사 팔기로 결정 → 가격 정함 → 사람들 찾아서 보여줌 → 진지한 사람 골라서 자세히 보여주고 깐깐히 따져봄 → 가격·조건 협상 → 사인 → 규제 통과 → 클로징"
                    : "Decide to sell → set a price → find buyers and show them → pick serious ones and let them dig in → negotiate price and terms → sign → clear regulators → close"}
                </p>
              </div>
              <p>{ko
                ? "복잡함은 이 흐름 안에서 몇 군데에 집중되어 있습니다. FDD에서 EBITDA 한 줄을 가지고 며칠을 싸우고, Valuation 가정 하나로 가격이 $50M 흔들리고, SPA 조항 하나가 사인 후에도 돈을 옮깁니다. 그 외 단계들은 의외로 mechanical합니다. 이 챕터는 일단 큰 흐름을 한 장의 지도로 보는 것이 목적입니다."
                : "All the complexity lives in a few specific places. A single EBITDA line gets fought over for days in FDD, one valuation assumption can move price by $50M, and a single SPA clause can move money even after signing. The other stages are surprisingly mechanical. This chapter is about seeing the whole flow on a single map."}</p>
            </motion.div>
          </motion.section>

          {/* § 2. 9-stage timeline */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 2</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "9단계 타임라인 — 6개월의 표준 sell-side process" : "9-stage timeline — a 6-month standard sell-side process"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>
            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 mb-6">
              <p>{ko
                ? "Sell-side mandate 기준, mandate 수주부터 closing까지 표준 6개월 정도. Mid-cap deal 기준이며, mega-deal은 1-2년까지 늘어나기도 합니다. 단계마다 누가 무엇을 만들고, 무엇이 다음 단계로 넘어가는지 명확합니다."
                : "Standard sell-side mandate runs about 6 months from win to close. This reflects a mid-cap deal — mega-deals can stretch to 1-2 years. Every stage has a clear output and a clear handoff to the next."}</p>
            </motion.div>

            <motion.div variants={fadeUp(0.15)} className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                  {ko ? "Sell-side process 9단계" : "Sell-side 9 stages"}
                </p>
              </div>
              <div className="p-5 sm:p-6 bg-white dark:bg-gray-900 space-y-3">
                {STAGES.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.35, delay: i * 0.05, ease: EASE }}
                    className="flex items-start gap-3.5"
                  >
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[12px] font-black" style={{ background: ACCENT }}>{i + 1}</span>
                      {i < STAGES.length - 1 && <span className="w-px h-8 bg-gray-200 dark:bg-gray-700 mt-1" />}
                    </div>
                    <div className="flex-1 min-w-0 pb-3">
                      <div className="flex items-baseline gap-2 mb-1">
                        <p className="text-[13px] font-bold text-gray-900 dark:text-gray-100">{ko ? s.ko : s.en}</p>
                        <span className="text-[10px] text-gray-400 dark:text-gray-500 font-mono">W{s.week}</span>
                      </div>
                      <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-snug">{ko ? s.descKo : s.descEn}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-t border-gray-200 dark:border-gray-700 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko ? "W = mandate 수주 후 경과 주차. mid-cap 기준 6-7개월 = 24-30주." : "W = weeks from mandate win. Mid-cap deals run 6-7 months = 24-30 weeks."}
              </div>
            </motion.div>
          </motion.section>

          {/* § 3. Parallel workstreams */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 3</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "병렬로 굴러가는 워크스트림" : "Parallel workstreams"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>
            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 mb-6">
              <p>{ko
                ? "타임라인이 9단계로 진행되는 동안, 5개 주체가 병렬로 일을 합니다. IB Lead는 처음부터 끝까지 모든 트랙을 관리하고, 회계·컨설팅·법무는 자기 트랙만 책임집니다. 클라이언트(CEO·CFO)는 mgmt presentation과 final 의사결정 두 시점에 집중적으로 등장합니다."
                : "While the 9 stages run linearly, five actors work in parallel. The IB Lead runs every track from start to finish; accounting, consultants, and law firm each own their own track. The client (CEO/CFO) shows up intensely at two moments — the management presentation and final decision."}</p>
            </motion.div>

            <motion.div variants={fadeUp(0.15)} className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                  {ko ? "Gantt view — 누가 몇 주차에 무엇을 하는가" : "Gantt view — who works when"}
                </p>
              </div>
              <div className="p-5 sm:p-6 bg-white dark:bg-gray-900">
                {/* week scale */}
                <div className="flex mb-3 ml-32 text-[9px] text-gray-400 dark:text-gray-500 font-mono">
                  <span className="flex-1 text-left">W0</span>
                  <span className="flex-1 text-center">W10</span>
                  <span className="flex-1 text-center">W20</span>
                  <span className="flex-1 text-right">W30</span>
                </div>
                <div className="space-y-3">
                  {WORKSTREAMS.map((w, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-32 pr-2">
                        <p className="text-[11px] font-bold text-gray-700 dark:text-gray-300 leading-tight">{ko ? w.koActor : w.enActor}</p>
                      </div>
                      <div className="flex-1 relative h-5 bg-gray-50 dark:bg-gray-800/40 rounded">
                        {w.tracks.map((t, ti) => {
                          const leftPct = (t.startWeek / 30) * 100;
                          const widthPct = ((t.endWeek - t.startWeek) / 30) * 100;
                          return (
                            <motion.div
                              key={ti}
                              initial={{ opacity: 0, scaleX: 0 }}
                              whileInView={{ opacity: 1, scaleX: 1 }}
                              viewport={VP}
                              transition={{ duration: 0.5, delay: i * 0.08 + ti * 0.06, ease: EASE }}
                              style={{ left: `${leftPct}%`, width: `${widthPct}%`, background: w.color, transformOrigin: "left" }}
                              className="absolute top-0 h-full rounded text-white text-[9px] font-bold flex items-center px-2 truncate"
                            >
                              <span className="truncate">{ko ? t.koLabel : t.enLabel}</span>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-t border-gray-200 dark:border-gray-700 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "IB만 처음부터 끝까지 풀 액티브. 회계·컨설팅·법무는 자기 구간만 깊게 들어옴. 클라이언트는 두 시점(W11 발표, W18-22 의사결정)에 집중."
                  : "Only IB stays full-active end to end. Accounting, consultants, and law firm go deep within their slots. The client shows up intensely at two moments (W11 presentation, W18-22 decisions)."}
              </div>
            </motion.div>
          </motion.section>

          {/* § 4. Where it gets hard */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 4</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "진짜 어려운 건 어디인가" : "Where it actually gets hard"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>
            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 mb-6">
              <p>{ko
                ? "9단계 흐름 자체는 mechanical합니다. Engagement letter는 표준 양식이 있고, VDR vendor는 셋업해주고, IOI 양식도 정해져 있고, SPA도 firm template에서 시작합니다. 진짜 어려운 건 그 안에서 4군데에 집중되어 있습니다. 다음 챕터들은 이 4가지 어려운 지점을, 실제 유명 뱅커의 시점에서 케이스로 풀어갑니다."
                : "The 9-stage flow itself is mechanical. Engagement letters have standard forms, VDR vendors handle setup, IOI formats are templated, SPAs start from firm templates. The real difficulty concentrates in four specific places. The next chapters dissect each one through the perspective of a real, well-known banker."}</p>
            </motion.div>

            <motion.div variants={fadeUp(0.15)} className="grid sm:grid-cols-2 gap-3">
              {HARD_POINTS.map((h, i) => (
                <motion.div key={i} variants={fadeUp(i * 0.05)} className="p-5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded" style={{ background: `${ACCENT}15`, color: ACCENT }}>Ch.{h.num}</span>
                  </div>
                  <p className="text-[14px] font-bold text-gray-900 dark:text-gray-100 mb-2 leading-snug">{ko ? h.koTitle : h.enTitle}</p>
                  <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed">{ko ? h.koBody : h.enBody}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* § 5. Sell vs Buy */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 5</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "Sell-side vs Buy-side — 같은 지도, 다른 입장" : "Sell-side vs Buy-side — same map, opposite seats"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>
            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 mb-6">
              <p>{ko
                ? "위의 9단계는 sell-side advisor 입장입니다. Buy-side는 같은 지도를 반대편에서 본다고 생각하면 됩니다 — Teaser를 받아서 평가, NDA 사인하고 CIM 읽고, IOI 제출, DD 자체 비용으로 진행, final bid. 큰 흐름은 같지만 들어가는 비용과 정보의 방향이 반대."
                : "The 9 stages above are from the sell-side advisor's seat. Buy-side reads the same map from the opposite side — receive teasers, evaluate, sign NDA, read the CIM, submit IOI, run DD at their own cost, submit final bid. Same flow, reversed information and cost direction."}</p>
            </motion.div>

            <motion.div variants={fadeUp(0.15)} className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                  {ko ? "단계별 — Sell vs Buy 입장" : "Stage by stage — sell vs buy"}
                </p>
              </div>
              <div className="divide-y divide-gray-100 dark:divide-gray-800">
                {SIDE_COMPARE.map((row, i) => (
                  <div key={i} className="p-4 grid grid-cols-[100px,1fr,1fr] gap-3 bg-white dark:bg-gray-900">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 pt-0.5">{ko ? row.koLabel : row.enLabel}</p>
                    <div>
                      <span className="text-[9px] uppercase tracking-wider font-bold text-blue-600 dark:text-blue-400">{ko ? "Sell" : "Sell"}</span>
                      <p className="text-[12px] text-gray-700 dark:text-gray-300 mt-0.5 leading-snug">{ko ? row.sellKo : row.sellEn}</p>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-wider font-bold text-emerald-600 dark:text-emerald-400">{ko ? "Buy" : "Buy"}</span>
                      <p className="text-[12px] text-gray-700 dark:text-gray-300 mt-0.5 leading-snug">{ko ? row.buyKo : row.buyEn}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.section>

          {/* 한 줄 정리 */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-8">
            <div className="rounded-2xl p-5 sm:p-6" style={{ border: `1px solid ${ACCENT}40`, background: `${ACCENT}0F` }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: ACCENT }}>{ko ? "한 줄로 정리하면" : "In one line"}</p>
              <p className="text-[15px] font-semibold text-gray-900 dark:text-gray-100 leading-relaxed">{ko
                ? "M&A는 9단계 프로세스지만 진짜 어려운 건 4군데에 몰려 있다. 나머지는 표준 양식이고, 딜의 성패는 그 4곳에서 갈린다."
                : "M&A is a nine-step process, but the hard parts cluster in just four places. The rest is standard templates — deals are won or lost in those four."}</p>
            </div>
          </motion.section>

          {/* Next chapter preview */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP}>
            <div className="rounded-2xl p-5 sm:p-6 border-2 border-dashed" style={{ borderColor: `${ACCENT}40`, background: `${ACCENT}08` }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ color: ACCENT }}>{ko ? "다음 챕터" : "Next chapter"}</p>
              <p className="text-[15px] font-bold text-gray-900 dark:text-gray-100 mb-1.5">
                Ch.2 — {ko ? "이해관계자 도감" : "The Stakeholder Map"}
              </p>
              <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "이 9단계 안에서 IB Lead·회계 FAS·컨설팅·법무·CEO·CFO·Board·Buyer side가 각자 정확히 무엇을 만들고, 어떤 지점에서 IB와 인터페이스하는지. 누가 의사결정을 하고, 누가 fact를 만들고, 누가 협상하는지."
                  : "Inside these 9 stages, what exactly does each actor produce — IB Lead, accounting FAS, consultants, law firm, CEO/CFO/Board, buyer side — and how do they interface with IB? Who decides, who builds the facts, who negotiates?"}
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
