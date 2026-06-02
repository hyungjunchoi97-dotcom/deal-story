/**
 * Modelling 시리즈 Ch.4 — LBO Model
 *
 * 톤 가이드 (Mod Ch.1-3 동일):
 *  - 자연스러운 한국어 + Excel 표현 적극 사용
 *  - 시각화 4개: Sheet 흐름 · Sources & Uses · Debt schedule + cash sweep · Returns waterfall
 *  - 모든 데이터 상수 KO/EN 분리
 */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import SeriesNav from "@/components/SeriesNav";
import { MOD_CHAPTERS, getModChapterBySlug, getModSeriesNav } from "@/data/modelling-series";

type Lang = "ko" | "en";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-40px" };
const fadeUp = (d = 0) => ({
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE, delay: d } },
});

const SLUG = "mod-ch04-lbo";
const ACCENT = "#10b981";
const BLUE = "#2563eb";
const ORANGE = "#f97316";
const RED = "#dc2626";

// LBO model sheet 흐름
const SHEETS = [
  { koName: "Assumptions",      enName: "Assumptions",      koDesc: "Deal terms · debt pricing · exit",  enDesc: "Deal terms, debt pricing, exit",  role: "input" },
  { koName: "Sources & Uses",   enName: "Sources & Uses",   koDesc: "자금 조달 = 자금 사용 (≠ 0이면 깨짐)", enDesc: "Sources = Uses (anything else and it's broken)", role: "input" },
  { koName: "Operating Model",  enName: "Operating Model",  koDesc: "Revenue · EBITDA · CapEx · NWC",     enDesc: "Revenue, EBITDA, CapEx, NWC",     role: "calc" },
  { koName: "3-Statement",      enName: "3-Statement",      koDesc: "IS · BS · CFS with new cap structure", enDesc: "IS, BS, CFS under new cap structure", role: "calc" },
  { koName: "Debt Schedule",    enName: "Debt Schedule",    koDesc: "Tranche별 잔액 · cash sweep · interest", enDesc: "Tranche-by-tranche balance, cash sweep, interest", role: "calc" },
  { koName: "Returns",          enName: "Returns",          koDesc: "Exit Equity Value → IRR · MOIC · waterfall", enDesc: "Exit equity → IRR, MOIC, waterfall", role: "output" },
];

// Sources & Uses mini-table — $M
type CellType = "header" | "label" | "input" | "formula" | "link" | "result" | "section";
const SU_SOURCES = [
  { koLabel: "Senior TLA",          enLabel: "Senior TLA",          val: 150,  pct: 18.8, koDesc: "L+250 · 7-yr amort",       enDesc: "L+250 · 7-yr amort" },
  { koLabel: "Senior TLB",          enLabel: "Senior TLB",          val: 250,  pct: 31.3, koDesc: "L+375 · 7-yr cov-lite",    enDesc: "L+375 · 7-yr cov-lite" },
  { koLabel: "Senior Notes",        enLabel: "Senior Notes",        val: 100,  pct: 12.5, koDesc: "8.5% fixed · 8-yr bullet", enDesc: "8.5% fixed · 8-yr bullet" },
  { koLabel: "Mezzanine",           enLabel: "Mezzanine",           val: 50,   pct:  6.3, koDesc: "12% PIK + 2% cash",        enDesc: "12% PIK + 2% cash" },
  { koLabel: "Sponsor Equity",      enLabel: "Sponsor Equity",      val: 240,  pct: 30.0, koDesc: "PE fund LP·GP contribution", enDesc: "PE fund LP/GP contribution" },
  { koLabel: "Mgmt Rollover",       enLabel: "Mgmt Rollover",       val: 10,   pct:  1.3, koDesc: "기존 mgmt 지분 재투자",      enDesc: "Mgmt equity rolled over" },
];
const SU_USES = [
  { koLabel: "Purchase Price (Equity)", enLabel: "Purchase Price (Equity)", val: 600, koDesc: "$60/share × 10M shares",   enDesc: "$60/share × 10M shares" },
  { koLabel: "Refinance Existing Debt", enLabel: "Refinance Existing Debt", val: 180, koDesc: "기존 차입 상환",            enDesc: "Refinance pre-deal debt" },
  { koLabel: "Transaction Fees",         enLabel: "Transaction Fees",         val: 12,  koDesc: "IB · 법무 · 회계 · arrange", enDesc: "IB, legal, accounting, arrange" },
  { koLabel: "Reserves",                 enLabel: "Reserves",                 val: 8,   koDesc: "운영 reserve · working capital", enDesc: "Operating + working capital reserves" },
];
const SU_TOTAL = 800;

// Debt schedule mini-sheet — Year by year ($M)
// Columns: label / Y0 / Y1 / Y2 / Y3
const DEBT_ROWS: Array<{ cells: Array<{ val: string; type: CellType }> }> = [
  { cells: [
    { val: "Tranche · Year",   type: "header" },
    { val: "Y0 (close)",       type: "header" },
    { val: "Y1",               type: "header" },
    { val: "Y2",               type: "header" },
    { val: "Y3",               type: "header" },
  ]},
  { cells: [
    { val: "Senior TLA",       type: "label" },
    { val: "150",              type: "link" },
    { val: "=Beg−Amort−Sweep", type: "formula" },
    { val: "120",              type: "result" },
    { val: "92",               type: "result" },
  ]},
  { cells: [
    { val: "Senior TLB",       type: "label" },
    { val: "250",              type: "link" },
    { val: "=Beg−1%−Sweep",    type: "formula" },
    { val: "242",              type: "result" },
    { val: "228",              type: "result" },
  ]},
  { cells: [
    { val: "Senior Notes",     type: "label" },
    { val: "100",              type: "link" },
    { val: "100",              type: "result" },
    { val: "100",              type: "result" },
    { val: "100",              type: "result" },
  ]},
  { cells: [
    { val: "Mezz (PIK)",       type: "label" },
    { val: "50",               type: "link" },
    { val: "=Beg*(1+PIK)",     type: "formula" },
    { val: "56",               type: "result" },
    { val: "63",               type: "result" },
  ]},
  { cells: [
    { val: "= Total Debt",     type: "label" },
    { val: "550",              type: "result" },
    { val: "=SUM",             type: "result" },
    { val: "518",              type: "result" },
    { val: "483",              type: "result" },
  ]},
  { cells: [
    { val: "Cash Available",   type: "label" },
    { val: "=Op!FCF",          type: "link" },
    { val: "75",               type: "result" },
    { val: "82",               type: "result" },
    { val: "90",               type: "result" },
  ]},
  { cells: [
    { val: "− Mandatory",      type: "label" },
    { val: "—",                type: "label" },
    { val: "(4)",               type: "formula" },
    { val: "(4)",               type: "formula" },
    { val: "(4)",               type: "formula" },
  ]},
  { cells: [
    { val: "= Cash Sweep",     type: "label" },
    { val: "—",                type: "label" },
    { val: "(28)",              type: "result" },
    { val: "(30)",              type: "result" },
    { val: "(35)",              type: "result" },
  ]},
];

// Returns waterfall ($M)
const WATERFALL = [
  {
    koLabel: "Exit Equity Value (Y5)",
    enLabel: "Exit Equity Value (Y5)",
    val: 720,
    color: ACCENT,
    koNote: "Exit EV $1,200M − Net Debt $480M",
    enNote: "Exit EV $1,200M − Net Debt $480M",
  },
  {
    koLabel: "− LP Capital Return (8% Preferred)",
    enLabel: "− LP Capital Return (8% preferred)",
    val: 353,
    color: BLUE,
    koNote: "$240M × (1.08)^5 — 5년 8% compound",
    enNote: "$240M × (1.08)^5 — 5-yr 8% compound",
  },
  {
    koLabel: "− GP Catch-up",
    enLabel: "− GP Catch-up",
    val: 28,
    color: "#a855f7",
    koNote: "Catch-up까지 GP 100% (8%·20%·80%·20% 비율)",
    enNote: "GP gets 100% during catch-up to reach 20%/80%",
  },
  {
    koLabel: "= Profit pool (80/20 split)",
    enLabel: "= Profit pool (80/20 split)",
    val: 339,
    color: ORANGE,
    koNote: "남은 금액을 LP 80% · GP 20%로",
    enNote: "Remaining split 80% LP / 20% GP",
  },
  {
    koLabel: "→ LP 총 분배",
    enLabel: "→ LP total distribution",
    val: 624,
    color: ACCENT,
    koNote: "MOIC 2.6x · IRR ~21% (5-yr hold)",
    enNote: "MOIC 2.6x · IRR ~21% (5-yr hold)",
  },
  {
    koLabel: "→ GP 총 carry",
    enLabel: "→ GP total carry",
    val: 96,
    color: "#a855f7",
    koNote: "Catch-up 28 + 20% × 339 = ~96",
    enNote: "Catch-up 28 + 20% × 339 ≈ 96",
  },
];

// IRR sensitivity at different bid prices (max bid for 20% IRR)
const BID_TO_IRR = [
  { bid: 55, irr: 23.5, koHit: "지금 입찰가 — 충분히 viable", enHit: "Today's bid — comfortably viable" },
  { bid: 60, irr: 21.2, koHit: "Base case — 목표 IRR 위", enHit: "Base case — above target" },
  { bid: 63, irr: 20.0, koHit: "★ Max bid — IRR 정확히 20%", enHit: "★ Max bid — IRR exactly 20%" },
  { bid: 65, irr: 19.0, koHit: "Threshold 아래 — pass", enHit: "Below threshold — pass" },
  { bid: 70, irr: 16.8, koHit: "Strategic만 가능 — PE는 빠짐", enHit: "Strategic only — PE walks" },
];

const cellTextColor = (type: CellType) => {
  if (type === "input") return "#2563eb";
  if (type === "formula") return "#0f172a";
  if (type === "link") return "#16a34a";
  if (type === "result") return "#f97316";
  if (type === "header") return "#475569";
  if (type === "section") return ACCENT;
  return "#64748b";
};
const cellBg = (type: CellType) => {
  if (type === "input") return "#eff6ff";
  if (type === "formula") return "#ffffff";
  if (type === "link") return "#f0fdf4";
  if (type === "result") return "#fff7ed";
  if (type === "header") return "#f1f5f9";
  return "#ffffff";
};

export default function MaMod04Client({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const chapter = getModChapterBySlug(SLUG)!;
  const { prev, next } = getModSeriesNav(SLUG);
  const base = ko ? "/deal-101" : "/en/deal-101";

  const sourcesTotal = SU_SOURCES.reduce((s, x) => s + x.val, 0);
  const usesTotal = SU_USES.reduce((s, x) => s + x.val, 0);

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
            <span className="text-gray-600 dark:text-gray-300 font-medium">{ko ? "Modelling 시리즈 · Ch.4" : "Modelling Series · Ch.4"}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="max-w-3xl mx-auto px-5 pt-6 pb-8">
          <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
            <span style={{ color: ACCENT }}>{ko ? "Modelling 시리즈" : "Modelling Series"}</span>
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
            {MOD_CHAPTERS.map((ch) => {
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

          {/* § 1 — LBO Model — DCF와 어떻게 다른가 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "LBO Model — DCF와 어디가 다른가" : "LBO Model — how it differs from DCF"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "DCF는 회사가 만들어내는 cash flow를 할인해서 \"내재가치가 얼마인가\"를 묻는 작업이었어요. LBO model은 질문이 완전히 달라요. \"PE가 IRR 20% 맞추려면 얼마까지 낼 수 있나\" 를 푸는 작업입니다. 출력이 EV 한 숫자가 아니라 IRR과 MOIC라는 게 핵심 차이예요."
                : "A DCF discounts a company's cash flows to ask 'what's it worth intrinsically?' An LBO flips the question entirely: 'how much can PE pay and still hit a 20% IRR?' The output isn't one EV number — it's IRR and MOIC."}</p>
              <p>{ko
                ? "Sheet 구조도 그래서 달라요. DCF 시트(Ch.3)에 더해서 Sources & Uses (자금 조달과 사용), Debt Schedule (cash sweep으로 매년 debt가 어떻게 줄어드는지), 그리고 Returns sheet (exit equity → IRR/MOIC/waterfall) 가 추가됩니다. 한 model에 sheet가 6-8개. DCF model보다 두 배 정도 무겁습니다."
                : "Sheet structure shifts accordingly. On top of Ch.3's DCF sheets, you add Sources & Uses (how the deal is funded), a Debt Schedule (how cash sweep paydowns work each year), and a Returns sheet (exit equity → IRR, MOIC, waterfall). Six to eight sheets total — about twice the weight of a DCF model."}</p>
              <p>{ko
                ? "이번 챕터에서는 (1) Sources & Uses의 두 column이 정확히 일치해야 한다는 원칙 (2) Debt schedule의 cash sweep mechanism (3) Returns waterfall — preferred · catch-up · 80/20 split (4) Goal Seek으로 \"IRR 20% 맞추는 max bid\" 를 역산하는 방법을 봅니다."
                : "This chapter walks (1) the 'sources = uses' principle, (2) the cash sweep mechanism in the debt schedule, (3) the returns waterfall — preferred, catch-up, 80/20 split, (4) using Goal Seek to back-solve for the 'max bid at 20% IRR.'"}</p>
            </div>

            {/* Sheet flow */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                {ko ? "LBO Model — sheet 흐름 (6 sheets)" : "LBO model — sheet flow (6 sheets)"}
              </p>
              <div className="space-y-2.5">
                {SHEETS.map((s, i) => {
                  const isInput = s.role === "input";
                  const isCalc = s.role === "calc";
                  const isLast = i === SHEETS.length - 1;
                  const color = isInput ? BLUE : isCalc ? ACCENT : ORANGE;
                  return (
                    <div key={i}>
                      <motion.div
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={VP}
                        transition={{ duration: 0.4, delay: i * 0.07, ease: EASE }}
                        className="grid grid-cols-[auto_160px_1fr_auto] gap-3 items-center px-3 py-2 rounded-md border"
                        style={{ borderColor: color + "60", background: color + "0d" }}
                      >
                        <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500">{String(i + 1).padStart(2, "0")}</span>
                        <span className="text-[12.5px] font-bold" style={{ color }}>{ko ? s.koName : s.enName}</span>
                        <span className="text-[10.5px] text-gray-500 dark:text-gray-400 leading-snug">{ko ? s.koDesc : s.enDesc}</span>
                        <span className="text-[9.5px] font-bold px-2 py-0.5 rounded uppercase tracking-wider" style={{ background: color, color: "#fff" }}>
                          {s.role}
                        </span>
                      </motion.div>
                      {!isLast && <div className="text-center text-gray-300 dark:text-gray-600 text-[12px] leading-none py-0.5">↓</div>}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 2 — Sources & Uses */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Sources & Uses — 두 column이 정확히 일치" : "Sources & Uses — the two columns must match exactly"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "LBO model 첫 페이지에 들어가는 게 Sources & Uses 표예요. 왼쪽이 \"이 deal에 필요한 자금이 어디서 오나\" (Sources), 오른쪽이 \"그 자금을 어디에 쓰나\" (Uses). 두 column이 정확히 일치해야 합니다. $1 차이면 모델이 깨졌다는 신호."
                : "An LBO model opens with a Sources & Uses table. Left = where the funding comes from (Sources), right = what it's used for (Uses). The two columns have to match exactly. A $1 gap is a broken model."}</p>
              <p>{ko
                ? "Sources에 들어가는 항목은 보통 5-6가지. Senior debt (TLA·TLB·Senior Notes), Mezzanine, Sponsor equity (PE fund 출자), Management rollover (기존 경영진의 지분 재투자). 각 tranche의 비중이 deal의 \"leverage\" 를 결정하고, leverage가 높을수록 equity 부담이 작아지면서 IRR이 올라가요. 그래서 PE는 가능한 한 senior debt를 많이 쓰려고 합니다."
                : "Sources usually contains 5-6 items: senior debt (TLA, TLB, Senior Notes), mezzanine, sponsor equity (PE fund contribution), management rollover (existing executives rolling their equity in). Each tranche's weight sets the deal's leverage — higher leverage means smaller equity check, lifting IRR. So PE pushes for as much senior debt as the market will accept."}</p>
              <p>{ko
                ? "Uses에 들어가는 건 단순해요. Purchase price (지분 100% 인수가) + 기존 차입 refinance + Transaction fees (IB·법무·회계·arrange) + Reserves (운영 자금). 이 네 항목의 합이 Sources의 합과 같아야 합니다. 두 column 사이의 차액을 \"plug\" 로 부르고, plug가 0이 아니면 sponsor equity 라인이 자동으로 조정되도록 하는 게 표준 setup."
                : "Uses is simple: purchase price (100% equity acquisition) + refinanced existing debt + transaction fees (IB, legal, accounting, arrange) + reserves (operating capital). Sum equals the sources sum. The gap between columns is the 'plug'; if it's not zero, sponsor equity adjusts automatically in standard setups."}</p>
            </div>

            {/* Sources & Uses 표 */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Sources & Uses — $800M deal 예시" : "Sources & Uses — $800M deal example"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                {ko ? "총 leverage 3.4x EBITDA (Senior Debt $550M / EBITDA $160M)." : "Total leverage 3.4× EBITDA ($550M senior debt on $160M EBITDA)."}
              </p>
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Sources */}
                <div className="rounded-lg p-4 border" style={{ borderColor: ACCENT + "60", background: ACCENT + "0d" }}>
                  <p className="text-[11px] font-bold mb-3 uppercase tracking-wider" style={{ color: ACCENT }}>Sources</p>
                  <div className="space-y-1.5">
                    {SU_SOURCES.map((s, i) => (
                      <div key={i} className="grid grid-cols-[1fr_auto_auto] gap-2 items-baseline">
                        <div className="min-w-0">
                          <p className="text-[11px] font-semibold text-gray-900 dark:text-gray-100 leading-tight">{ko ? s.koLabel : s.enLabel}</p>
                          <p className="text-[9.5px] text-gray-500 dark:text-gray-400 leading-tight">{ko ? s.koDesc : s.enDesc}</p>
                        </div>
                        <span className="text-[11px] font-mono font-bold text-gray-900 dark:text-gray-100 flex-shrink-0">${s.val}</span>
                        <span className="text-[10px] font-mono text-gray-500 dark:text-gray-400 w-10 text-right flex-shrink-0">{s.pct.toFixed(1)}%</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-300 dark:border-gray-700 flex items-baseline justify-between">
                    <span className="text-[11.5px] font-bold uppercase tracking-wider" style={{ color: ACCENT }}>= Total Sources</span>
                    <span className="text-[13px] font-mono font-bold" style={{ color: ACCENT }}>${sourcesTotal}M</span>
                  </div>
                </div>

                {/* Uses */}
                <div className="rounded-lg p-4 border" style={{ borderColor: BLUE + "60", background: BLUE + "0d" }}>
                  <p className="text-[11px] font-bold mb-3 uppercase tracking-wider" style={{ color: BLUE }}>Uses</p>
                  <div className="space-y-1.5">
                    {SU_USES.map((u, i) => (
                      <div key={i} className="grid grid-cols-[1fr_auto] gap-2 items-baseline">
                        <div className="min-w-0">
                          <p className="text-[11px] font-semibold text-gray-900 dark:text-gray-100 leading-tight">{ko ? u.koLabel : u.enLabel}</p>
                          <p className="text-[9.5px] text-gray-500 dark:text-gray-400 leading-tight">{ko ? u.koDesc : u.enDesc}</p>
                        </div>
                        <span className="text-[11px] font-mono font-bold text-gray-900 dark:text-gray-100 flex-shrink-0">${u.val}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-300 dark:border-gray-700 flex items-baseline justify-between">
                    <span className="text-[11.5px] font-bold uppercase tracking-wider" style={{ color: BLUE }}>= Total Uses</span>
                    <span className="text-[13px] font-mono font-bold" style={{ color: BLUE }}>${usesTotal}M</span>
                  </div>
                </div>
              </div>

              {/* Check */}
              <div className="mt-4 flex items-baseline justify-between rounded-lg p-3" style={{ background: ACCENT + "1a", border: `1px solid ${ACCENT}60` }}>
                <span className="text-[12px] font-bold" style={{ color: ACCENT }}>{ko ? "✓ Sources = Uses Check" : "✓ Sources = Uses Check"}</span>
                <span className="text-[13px] font-mono font-bold" style={{ color: ACCENT }}>
                  ${sourcesTotal} − ${usesTotal} = $0 · OK
                </span>
              </div>
            </div>
          </motion.section>

          {/* Mid share */}
          <ShareButtons title={ko ? chapter.titleKo : chapter.titleEn} variant="mid" likeSlug={SLUG} lang={lang} />

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 3 — Debt Schedule + Cash Sweep */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Debt Schedule — Cash Sweep으로 매년 debt 줄이기" : "Debt schedule — paying debt down via cash sweep"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "LBO에서 가장 차별화된 sheet가 debt schedule이에요. 매년 각 tranche의 잔액이 어떻게 변하는지 추적합니다. 공식은 간단해요. Ending = Beginning − Mandatory amort − Cash sweep. Cash sweep이 LBO model의 핵심 mechanic이고, 이것 때문에 circular reference (Ch.2에서 본) 가 발생합니다."
                : "The most distinctive LBO sheet is the debt schedule. Each year, track every tranche's ending balance. The formula is simple: Ending = Beginning − mandatory amort − cash sweep. Cash sweep is the LBO model's core mechanic — and the source of the circular reference (Ch.2)."}</p>
              <p>{ko
                ? "Cash sweep은 \"운영에서 남는 cash가 무조건 senior debt 상환에 쓰인다\" 라는 약정이에요. 매년 FCF에서 mandatory amortization (보통 TLA의 1% 분기 amort 정도) 을 먼저 빼고, 남는 잉여 cash는 모두 senior tranche 순서대로 갚는 데 사용. 5년 hold 기간 동안 senior debt가 30-50% 줄어드는 게 일반적이에요."
                : "Cash sweep is the covenant that 'excess cash from operations must pay down senior debt.' Each year, take FCF minus mandatory amortization (typically 1% quarterly on the TLA), and route the excess to senior tranches in order. Over a 5-year hold, senior debt typically drops 30-50%."}</p>
              <p>{ko
                ? "Mezzanine은 다르게 작동해요. 보통 PIK (Payment-in-Kind) — interest를 cash로 안 갚고 debt 잔액에 더해버리는 방식. 그래서 mezz는 시간이 지날수록 오히려 잔액이 커집니다. 12% PIK면 매년 잔액의 12%만큼 자동 증가. 이런 unique한 mechanics를 cell formula로 정확히 잡는 게 debt schedule의 핵심이에요."
                : "Mezzanine works differently. Usually PIK (Payment-in-Kind) — interest accretes onto the balance instead of paying out in cash. So mezz balances grow over time. 12% PIK means the balance grows 12% per year automatically. Capturing these unique mechanics in cell formulas is the debt schedule's whole point."}</p>
            </div>

            {/* Debt schedule mini-sheet */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Debt Schedule — Tranche × Year ($M)" : "Debt Schedule — tranche × year ($M)"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                {ko ? "Senior TLA·TLB는 cash sweep으로 빠르게 감소. Senior Notes는 bullet maturity. Mezz는 PIK로 증가." : "TLA/TLB shrink fast via cash sweep. Senior Notes are bullet. Mezz grows via PIK."}
              </p>
              <div className="overflow-x-auto -mx-1 px-1">
                <div className="inline-block min-w-full">
                  {DEBT_ROWS.map((row, ri) => (
                    <div key={ri} className="grid grid-cols-[1.4fr_repeat(4,1fr)] gap-0">
                      {row.cells.map((cell, ci) => (
                        <motion.div
                          key={ci}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={VP}
                          transition={{ duration: 0.25, delay: (ri * 5 + ci) * 0.015 }}
                          className="border-r border-b border-gray-100 dark:border-gray-800 px-1.5 py-1.5 text-[10px] font-mono"
                          style={{ background: cellBg(cell.type), color: cellTextColor(cell.type) }}
                        >
                          {cell.val}
                        </motion.div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-4 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "Y0 → Y3 동안 Total Debt $550M → $483M로 −$67M 감소. Senior TLA가 $150M → $92M로 빠르게 줄어드는 게 핵심. Mezz는 PIK로 $50M → $63M로 오히려 증가."
                  : "Y0 → Y3: Total debt drops $550M → $483M (−$67M). TLA leads the paydown, $150M → $92M. Mezz accretes via PIK from $50M → $63M."}
              </p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 4 — Returns Waterfall */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Returns Waterfall — Preferred → Catch-up → 80/20" : "Returns waterfall — preferred → catch-up → 80/20"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Exit 시점이 되면 회사를 다시 팔거나 IPO 시켜요. Exit Equity Value = Exit EV − Net Debt. 이 금액이 LP와 GP 사이에서 어떻게 나뉘는지가 \"waterfall\" 이에요. 표준 형태는 4단계: (1) Preferred return — LP가 8% IRR 까지는 100% 먼저 받음. (2) Catch-up — GP가 catch-up까지 100% 받음 (전체 profit의 20% 비율 회복). (3) Split — 남는 부분을 80% LP / 20% GP로 나눔."
                : "At exit, the company is sold or IPO'd. Exit Equity Value = Exit EV − Net Debt. How that amount splits between LP and GP is the waterfall. Standard form is four steps: (1) Preferred return — LP receives 100% until hitting 8% IRR. (2) Catch-up — GP gets 100% to restore the 20% overall ratio. (3) Split — anything remaining splits 80% LP / 20% GP."}</p>
              <p>{ko
                ? "이 mechanic이 \"why PE가 IRR 20%에 집착하나\" 의 답이에요. Preferred return 8%를 못 채우면 GP는 carry를 한 푼도 못 받습니다. 그래서 PE 모델에서는 \"이 가격에 사면 IRR이 정확히 20%인가?\" 가 가장 중요한 질문이고, 그 질문의 답이 Returns sheet에 들어가요."
                : "This is why PE obsesses over the 20% IRR. Miss the 8% preferred and GP collects zero carry. So in PE models, 'does this price land exactly at 20% IRR?' is the headline question — and the Returns sheet holds the answer."}</p>
            </div>

            {/* Waterfall 시각화 */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Returns Waterfall — 5-yr hold, Exit Equity $720M" : "Returns Waterfall — 5-yr hold, Exit Equity $720M"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "PE Equity $240M → LP $624M + GP carry $96M" : "PE Equity $240M → LP $624M + GP carry $96M"}
              </p>

              <div className="space-y-3">
                {WATERFALL.map((w, i) => {
                  const isResult = i >= 4;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={VP}
                      transition={{ duration: 0.45, delay: i * 0.1, ease: EASE }}
                      className="grid grid-cols-[1fr_auto] gap-3 items-center px-3 py-2.5 rounded-md border"
                      style={{ borderColor: w.color + "60", background: w.color + "0d" }}
                    >
                      <div className="min-w-0">
                        <p className={`text-[12px] ${isResult ? "font-bold" : "font-semibold"}`} style={{ color: w.color }}>
                          {ko ? w.koLabel : w.enLabel}
                        </p>
                        <p className="text-[10.5px] text-gray-500 dark:text-gray-400 leading-snug">{ko ? w.koNote : w.enNote}</p>
                      </div>
                      <span className={`text-[13px] font-mono ${isResult ? "font-bold" : "font-semibold"}`} style={{ color: w.color }}>
                        ${w.val}M
                      </span>
                    </motion.div>
                  );
                })}
              </div>
              <p className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "PE Equity $240M → 5년 후 LP가 $624M 회수. MOIC = 624 / 240 = 2.6x. IRR ≈ 21%. GP carry = $96M (전체 profit 480M의 20%)."
                  : "PE equity $240M → LP recovers $624M in 5 years. MOIC = 624 / 240 = 2.6×. IRR ≈ 21%. GP carry = $96M (20% of the $480M profit pool)."}
              </p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 5 — IRR Back-solver */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "IRR Back-solver — Goal Seek로 max bid 역산" : "IRR back-solver — Goal Seek for the max bid"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "PE가 buy-side에서 가장 많이 쓰는 작업이 \"IRR 20% 맞추는 max bid 역산\" 이에요. 모델 그대로 두고, 입찰가격(Purchase Price per share) 셀과 IRR 셀만 정해놓으면 Excel이 자동으로 \"IRR=20% 만드는 입찰가\" 를 찾아줍니다. Data → What-If Analysis → Goal Seek."
                : "PE buy-side runs one move more than any other: 'back-solve the max bid that delivers a 20% IRR.' Keep the model as is, pick the bid price cell and the IRR cell, and Excel solves for 'the bid that makes IRR = 20%.' Data → What-If Analysis → Goal Seek."}</p>
              <p>{ko
                ? "Setup이 단순해요. Goal Seek 다이얼로그에서 \"Set cell\" = IRR 셀, \"To value\" = 0.20, \"By changing cell\" = bid 셀. Excel이 iterative하게 bid를 조정하면서 IRR이 정확히 20%가 되는 값을 찾아요. 보통 1-2초 안에 수렴. PE deal team은 이걸 하루에 수십 번 돌려서 \"우리 max bid는 얼마인가\" 를 매번 확인합니다."
                : "Setup is simple. Goal Seek dialog: 'Set cell' = IRR cell, 'To value' = 0.20, 'By changing cell' = bid cell. Excel iterates the bid until IRR hits exactly 20%. Usually converges in 1-2 seconds. PE deal teams run this dozens of times a day to keep 'our max bid' fresh."}</p>
            </div>

            {/* Bid → IRR 매트릭스 */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Bid 가격 → IRR (Goal Seek 결과)" : "Bid price → IRR (Goal Seek output)"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                {ko ? "20% IRR 임계값이 정확히 $63/share. 그 위로 가면 PE는 빠짐." : "$63/share is the exact 20% IRR threshold. Above that, PE walks."}
              </p>
              <div className="space-y-2.5">
                {BID_TO_IRR.map((b, i) => {
                  const isMax = b.bid === 63;
                  const aboveThreshold = b.irr >= 20;
                  const color = isMax ? ACCENT : aboveThreshold ? BLUE : RED;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -6 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={VP}
                      transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
                      className="grid grid-cols-[auto_auto_1fr] gap-3 items-center px-3 py-2 rounded-md border"
                      style={{
                        borderColor: color + (isMax ? "" : "60"),
                        borderWidth: isMax ? "1.5px" : "1px",
                        background: color + (isMax ? "1f" : "0d"),
                      }}
                    >
                      <span className="text-[12px] font-mono font-bold w-16" style={{ color }}>${b.bid}</span>
                      <span className="text-[12px] font-mono font-bold w-16" style={{ color }}>{b.irr.toFixed(1)}%</span>
                      <span className="text-[11px] text-gray-500 dark:text-gray-400 leading-snug">{ko ? b.koHit : b.enHit}</span>
                    </motion.div>
                  );
                })}
              </div>
              <p className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "Goal Seek 한 번 돌리면 \"$63/share — 그 이상은 IRR 20% 못 맞춤\" 이 즉시 나옴. 입찰 deadline 직전까지 가격 협상하면서 이 셀을 매번 갱신해서 \"우리가 더 올려도 되나\" 를 확인."
                  : "One Goal Seek run answers '$63/share — anything more fails the 20% threshold' immediately. Right up to the bid deadline, this cell gets refreshed to ask 'can we go higher?'"}
              </p>
            </div>

            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4 mt-7">
              <p>{ko
                ? "여기까지가 LBO model의 전체 흐름이에요. Sources & Uses 한 페이지, Debt Schedule 한 페이지, Returns 한 페이지. 그리고 그 위에서 Goal Seek로 max bid를 매번 역산. 다음 챕터에서는 Operating Model — driver-based forecasting — 을 봅니다. SaaS면 ARPU × Customers, 소매면 Stores × Revenue per store. 산업별로 forecast의 단위 자체가 달라요."
                : "That's the LBO model end to end. One page of sources & uses, one page of debt schedule, one page of returns. And Goal Seek running the max bid every time. Next chapter covers the operating model — driver-based forecasting. ARPU × customers for SaaS, stores × revenue per store for retail. The unit of forecasting itself shifts by industry."}</p>
            </div>
          </motion.section>

          {/* Next chapter */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mt-12 mb-10">
            <div className="border-l-2 pl-4 py-1" style={{ borderColor: ACCENT }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>{ko ? "다음 챕터" : "Next chapter"}</p>
              <p className="text-[15px] font-bold text-gray-900 dark:text-gray-100">
                Ch.5 — {ko ? "Operating Model — Driver-based Forecasting" : "Operating Model — Driver-based Forecasting"}
              </p>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                {ko
                  ? "Top-down vs bottom-up forecasting, 산업별 driver 차이 (SaaS · Retail · Manufacturing), SaaS cohort 분석, Scenario manager로 Bear/Base/Bull을 sheet 레벨에서 관리."
                  : "Top-down vs bottom-up, industry-specific drivers (SaaS, retail, manufacturing), SaaS cohort analysis, and managing Bear/Base/Bull via the Scenario Manager at sheet level."}
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
