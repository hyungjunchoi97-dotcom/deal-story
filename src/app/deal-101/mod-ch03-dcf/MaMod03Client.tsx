/**
 * Modelling 시리즈 Ch.3 — DCF Model in Excel
 *
 * Valuation 시리즈 Ch.2의 내용을 sheet 구조 + cell logic 관점에서 다시 봄.
 *  - 자연스러운 한국어 + Excel 표현(셀 참조·수식) 적극 사용
 *  - 시각화 4개: Sheet 흐름 · WACC mini-sheet · FCF build mini-sheet · Sensitivity 2D table
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

const SLUG = "mod-ch03-dcf";
const ACCENT = "#10b981";
const BLUE = "#2563eb";
const ORANGE = "#f97316";

// DCF model sheet flow
const SHEETS = [
  {
    koName: "WACC",
    enName: "WACC",
    koDesc: "할인율 master sheet — 한 페이지로 5-10 셀",
    enDesc: "Discount-rate master sheet — 5-10 cells on a single page",
    role: "input",
  },
  {
    koName: "Operating Model",
    enName: "Operating Model",
    koDesc: "Revenue · Margin · EBITDA · D&A · CapEx · NWC",
    enDesc: "Revenue, margins, EBITDA, D&A, CapEx, NWC",
    role: "calc",
  },
  {
    koName: "DCF",
    enName: "DCF",
    koDesc: "FCF build · Discounting · Terminal Value · EV",
    enDesc: "FCF build, discounting, terminal value, EV",
    role: "calc",
  },
  {
    koName: "Sensitivity",
    enName: "Sensitivity",
    koDesc: "Data Table (WACC × g) · Scenarios",
    enDesc: "Data table (WACC × g), scenarios",
    role: "output",
  },
  {
    koName: "Output / Football Field",
    enName: "Output / Football Field",
    koDesc: "DCF range를 Football Field에 한 막대로",
    enDesc: "DCF range becomes one bar on the football field",
    role: "output",
  },
];

// WACC mini-sheet — 셀 단위로
type CellType = "header" | "label" | "input" | "formula" | "link" | "result";
const WACC_ROWS: Array<{ cells: Array<{ val: string; type: CellType; koNote?: string; enNote?: string }> }> = [
  { cells: [
    { val: "Item",                type: "header" },
    { val: "Value",               type: "header" },
    { val: "Source",              type: "header" },
  ]},
  { cells: [
    { val: "Risk-free rate (Rf)", type: "label" },
    { val: "4.20%",                type: "input" },
    { val: "10Y UST · Bloomberg",  type: "label" },
  ]},
  { cells: [
    { val: "Equity Risk Premium",  type: "label" },
    { val: "5.50%",                type: "input" },
    { val: "Damodaran (월 업데이트)", type: "label" },
  ]},
  { cells: [
    { val: "Unlevered Beta",       type: "label" },
    { val: "0.95",                 type: "input" },
    { val: "Peer median · CapIQ",  type: "label" },
  ]},
  { cells: [
    { val: "D/E (target)",         type: "label" },
    { val: "30.0%",                type: "input" },
    { val: "Mgmt guidance",        type: "label" },
  ]},
  { cells: [
    { val: "Tax rate",             type: "label" },
    { val: "23.0%",                type: "input" },
    { val: "Statutory + state",    type: "label" },
  ]},
  { cells: [
    { val: "Re-levered Beta",      type: "label" },
    { val: "=B4*(1+(1-B7)*B6/(1-B6))", type: "formula" },
    { val: "1.17",                 type: "result" },
  ]},
  { cells: [
    { val: "Cost of Equity",       type: "label" },
    { val: "=B3+B8*B4_ERP",         type: "formula" },
    { val: "10.62%",               type: "result" },
  ]},
  { cells: [
    { val: "Cost of Debt (pre-tax)", type: "label" },
    { val: "6.00%",                type: "input" },
    { val: "Current bond yield",   type: "label" },
  ]},
  { cells: [
    { val: "After-tax Cost of Debt", type: "label" },
    { val: "=B10*(1-B7)",          type: "formula" },
    { val: "4.62%",                type: "result" },
  ]},
  { cells: [
    { val: "= WACC",               type: "label" },
    { val: "=Ce*(E/V) + Cd*(D/V)", type: "formula" },
    { val: "9.20%",                type: "result" },
  ]},
];

// FCF build mini-sheet — Year by year ($M)
// Columns: label / 2025E / 2026E / 2027E / 2028E / 2029E
const FCF_ROWS: Array<{ cells: Array<{ val: string; type: CellType }> }> = [
  { cells: [
    { val: "Year",          type: "header" },
    { val: "2025E",         type: "header" },
    { val: "2026E",         type: "header" },
    { val: "2027E",         type: "header" },
    { val: "2028E",         type: "header" },
    { val: "2029E",         type: "header" },
  ]},
  { cells: [
    { val: "EBIT",          type: "label" },
    { val: "=Op!E5",        type: "link" },
    { val: "=Op!F5",        type: "link" },
    { val: "=Op!G5",        type: "link" },
    { val: "=Op!H5",        type: "link" },
    { val: "=Op!I5",        type: "link" },
  ]},
  { cells: [
    { val: "× (1−t)",       type: "label" },
    { val: "=WACC!t",       type: "link" },
    { val: "=WACC!t",       type: "link" },
    { val: "=WACC!t",       type: "link" },
    { val: "=WACC!t",       type: "link" },
    { val: "=WACC!t",       type: "link" },
  ]},
  { cells: [
    { val: "= NOPAT",       type: "label" },
    { val: "=B2*(1−B3)",    type: "formula" },
    { val: "=C2*(1−C3)",    type: "formula" },
    { val: "=D2*(1−D3)",    type: "formula" },
    { val: "=E2*(1−E3)",    type: "formula" },
    { val: "=F2*(1−F3)",    type: "formula" },
  ]},
  { cells: [
    { val: "+ D&A",         type: "label" },
    { val: "=Op!E6",        type: "link" },
    { val: "=Op!F6",        type: "link" },
    { val: "=Op!G6",        type: "link" },
    { val: "=Op!H6",        type: "link" },
    { val: "=Op!I6",        type: "link" },
  ]},
  { cells: [
    { val: "− CapEx",       type: "label" },
    { val: "=Op!E7",        type: "link" },
    { val: "=Op!F7",        type: "link" },
    { val: "=Op!G7",        type: "link" },
    { val: "=Op!H7",        type: "link" },
    { val: "=Op!I7",        type: "link" },
  ]},
  { cells: [
    { val: "− ΔNWC",        type: "label" },
    { val: "=Op!E8",        type: "link" },
    { val: "=Op!F8",        type: "link" },
    { val: "=Op!G8",        type: "link" },
    { val: "=Op!H8",        type: "link" },
    { val: "=Op!I8",        type: "link" },
  ]},
  { cells: [
    { val: "= FCF",         type: "label" },
    { val: "=SUM(B4:B7)",   type: "formula" },
    { val: "=SUM(C4:C7)",   type: "formula" },
    { val: "=SUM(D4:D7)",   type: "formula" },
    { val: "=SUM(E4:E7)",   type: "formula" },
    { val: "=SUM(F4:F7)",   type: "formula" },
  ]},
  { cells: [
    { val: "Discount factor", type: "label" },
    { val: "=1/(1+W)^0.5",  type: "formula" },
    { val: "=1/(1+W)^1.5",  type: "formula" },
    { val: "=1/(1+W)^2.5",  type: "formula" },
    { val: "=1/(1+W)^3.5",  type: "formula" },
    { val: "=1/(1+W)^4.5",  type: "formula" },
  ]},
  { cells: [
    { val: "= PV(FCF)",     type: "label" },
    { val: "=B8*B9",        type: "result" },
    { val: "=C8*C9",        type: "result" },
    { val: "=D8*D9",        type: "result" },
    { val: "=E8*E9",        type: "result" },
    { val: "=F8*F9",        type: "result" },
  ]},
];

// Terminal Value — 두 가지 방식 비교
const TV_METHODS = [
  {
    koName: "Gordon Growth (Perpetuity)",
    enName: "Gordon Growth (Perpetuity)",
    formula: "TV = FCF(n+1) / (WACC − g)",
    koInput: "g = 2.5% (long-run nominal growth)",
    enInput: "g = 2.5% (long-run nominal growth)",
    result: 1840,
    color: ACCENT,
    koProsCons: "장점: 이론적으로 깔끔 / 단점: g와 WACC 차이에 매우 민감",
    enProsCons: "Pro: theoretically clean / Con: extremely sensitive to (WACC − g) gap",
  },
  {
    koName: "Exit Multiple",
    enName: "Exit Multiple",
    formula: "TV = EBITDA(n) × Exit multiple",
    koInput: "Exit multiple = 10.0x (peer median)",
    enInput: "Exit multiple = 10.0x (peer median)",
    result: 1750,
    color: BLUE,
    koProsCons: "장점: peer 시장가 반영 / 단점: peer market 변동에 민감",
    enProsCons: "Pro: anchored in market multiples / Con: moves with peer market conditions",
  },
];

// Sensitivity 2D data table — EV by WACC × g
const SENS_WACC = [8.0, 8.5, 9.0, 9.5, 10.0];
const SENS_G = [3.0, 2.5, 2.0, 1.5, 1.0];
// EV ($M)
const SENS_GRID: number[][] = [
  // g=3.0
  [1620, 1500, 1395, 1305, 1225],
  // g=2.5
  [1530, 1420, 1325, 1240, 1165],
  // g=2.0
  [1460, 1355, 1265, 1185, 1115],
  // g=1.5
  [1400, 1300, 1215, 1140, 1075],
  // g=1.0
  [1350, 1255, 1175, 1100, 1040],
];
const SENS_BASE_ROW = 1; // g=2.5
const SENS_BASE_COL = 2; // WACC=9.0

const cellTextColor = (type: CellType) => {
  if (type === "input") return "#2563eb";
  if (type === "formula") return "#0f172a";
  if (type === "link") return "#16a34a";
  if (type === "result") return "#f97316";
  if (type === "header") return "#475569";
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

export default function MaMod03Client({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const chapter = getModChapterBySlug(SLUG)!;
  const { prev, next } = getModSeriesNav(SLUG);
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
            <span className="text-gray-600 dark:text-gray-300 font-medium">{ko ? "Modelling 시리즈 · Ch.3" : "Modelling Series · Ch.3"}</span>
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

          {/* § 1 — DCF Model의 sheet 구조 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "DCF Model — sheet 4-5개로 끝난다" : "DCF model — four or five sheets does it"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Valuation 시리즈 Ch.2에서 DCF가 가정-계산-출력 세 블록이라는 걸 봤어요. 그걸 Excel로 옮기면 sheet 4-5개로 끝납니다. WACC sheet 하나, Operating Model 하나, DCF sheet 하나, Sensitivity 하나, 그리고 결과를 Football Field로 보내는 Output. 한 sheet의 분량도 작아요. WACC sheet는 10-15 셀, DCF sheet는 한 page 길이."
                : "Valuation Ch.2 broke a DCF into three blocks — inputs, calc, output. Moving it into Excel takes four or five sheets. A WACC sheet, an Operating Model, a DCF sheet, a Sensitivity sheet, and an Output that feeds the football field. Each sheet is small too. The WACC sheet is 10-15 cells; the DCF sheet fits on one page."}</p>
              <p>{ko
                ? "왜 sheet를 굳이 나누냐면, 정보 흐름을 한 방향으로 만들기 위해서예요. WACC sheet의 출력 = DCF sheet의 입력, Operating Model의 EBIT = DCF sheet의 입력. 가정을 바꾸면 좌→우로 흐름이 자동으로 따라옵니다. 한 sheet에 다 모아두면 무엇이 입력이고 무엇이 출력인지 구분이 안 돼서 디버깅이 불가능해져요."
                : "Why separate sheets? To force information into a single direction. WACC output → DCF input. Operating Model EBIT → DCF input. Change an assumption and the flow propagates left to right automatically. Cramming everything into one sheet erases the input/output distinction and makes debugging impossible."}</p>
            </div>

            {/* Sheet flow */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                {ko ? "DCF Model — sheet 흐름 (좌 → 우)" : "DCF model — sheet flow (left → right)"}
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
                        transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
                        className="grid grid-cols-[auto_180px_1fr_auto] gap-3 items-center px-3 py-2 rounded-md border"
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
              <p className="mt-4 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "01-02가 input layer, 03이 계산, 04-05가 output. 가정 한 줄을 바꿔도 변화가 좌→우로 자동 전파."
                  : "01-02 are input, 03 calculates, 04-05 are output. Change one input and the propagation flows left to right automatically."}
              </p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 2 — WACC sheet */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "WACC sheet — 한 페이지로 끝나는 master input" : "WACC sheet — the single-page master input"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "WACC sheet은 보통 10-15 셀 안에 다 들어가요. 6개 input (Rf, ERP, unlevered β, D/E, tax, cost of debt) 과 3개 formula (re-levered β, cost of equity, after-tax cost of debt) 와 1개 result (WACC). 한 페이지 안에서 \"이 셀 하나 바꾸면 WACC이 얼마로 움직이나\" 가 한눈에 보입니다."
                : "The WACC sheet usually fits inside 10-15 cells. Six inputs (Rf, ERP, unlevered β, D/E, tax, cost of debt), three formulas (re-levered β, cost of equity, after-tax cost of debt), and one result (WACC). One page, and 'change this cell, watch WACC move' is visible at a glance."}</p>
              <p>{ko
                ? "Re-levered β의 공식이 약간 까다로워요. Levered β = Unlevered β × (1 + (1-t) × D/E). 이 공식 자체는 한 셀에 들어가지만, 셀 안에서 4개 input을 참조해야 합니다. 이 셀이 다른 모든 sheet의 \"기준점\"이 되는 셈이에요."
                : "The re-levered β formula is the tricky bit. Levered β = Unlevered β × (1 + (1-t) × D/E). The formula sits in one cell but references four inputs. That single cell becomes the anchor for every other sheet."}</p>
            </div>

            {/* WACC mini-sheet */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "WACC Sheet — 실제 셀 단위" : "WACC sheet — at the cell level"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                {ko ? "파랑 = input · 검정 = formula · 주황 = result (다른 sheet가 link). 최종 WACC 9.20%." : "Blue = input · Black = formula · Orange = result (linked from elsewhere). Final WACC 9.20%."}
              </p>
              <div className="overflow-x-auto -mx-1 px-1">
                <div className="inline-block min-w-full">
                  {WACC_ROWS.map((row, ri) => (
                    <div key={ri} className="grid grid-cols-[1.4fr_1fr_1.2fr] gap-0">
                      {row.cells.map((cell, ci) => (
                        <motion.div
                          key={ci}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={VP}
                          transition={{ duration: 0.3, delay: (ri * 3 + ci) * 0.02 }}
                          className="border-r border-b border-gray-100 dark:border-gray-800 px-2 py-1.5 text-[10.5px] font-mono"
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
                  ? "6 input (파랑) → 3 formula (검정) → 1 result WACC. 다른 sheet들은 이 마지막 셀(주황)만 link해서 가져갑니다. \"WACC 한 셀 바꾸기\" 가 모델 전체에 즉시 반영되는 구조."
                  : "6 inputs (blue) → 3 formulas (black) → 1 result (WACC). Every other sheet only links the final orange cell. 'Change WACC in one cell, propagate everywhere' becomes immediate."}
              </p>
            </div>
          </motion.section>

          {/* Mid share */}
          <ShareButtons title={ko ? chapter.titleKo : chapter.titleEn} variant="mid" likeSlug={SLUG} lang={lang} />

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 3 — FCF build */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "FCF build — cell-by-cell" : "FCF build — cell by cell"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "DCF sheet의 본문이 FCF build예요. 매년 EBIT × (1−t) + D&A − CapEx − ΔNWC = FCF 라는 공식이 5-10년 column에 똑같이 반복됩니다. 행은 EBIT, NOPAT, D&A, CapEx, NWC, FCF로 6-8행. 한 페이지가 다예요."
                : "The DCF sheet's body is the FCF build. EBIT × (1−t) + D&A − CapEx − ΔNWC = FCF, repeated across 5-10 year columns. Rows are EBIT, NOPAT, D&A, CapEx, NWC, FCF — six to eight lines total. One page is the whole thing."}</p>
              <p>{ko
                ? "한 가지 디테일이 discount factor예요. 보통 mid-year convention을 씁니다 — \"FCF가 연 중간에 발생한다\" 는 가정이에요. Year 1 이면 = 1/(1+WACC)^0.5, Year 2 면 = 1/(1+WACC)^1.5. 이렇게 해야 \"연말에 한 번에 발생\" 가정보다 PV가 약간 올라가요."
                : "One detail: the discount factor. Standard practice uses the mid-year convention — assuming FCF arrives at mid-year. Year 1 = 1/(1+WACC)^0.5, Year 2 = 1/(1+WACC)^1.5. This lifts PV slightly above the 'year-end' assumption."}</p>
            </div>

            {/* FCF mini-sheet */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "FCF Build — 5년 forecast" : "FCF build — 5-year forecast"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                {ko ? "녹색 link = Operating Model·WACC sheet에서 참조 · 주황 result = 최종 PV(FCF)" : "Green links pull from Operating Model and WACC · Orange results are the final PV(FCF)"}
              </p>
              <div className="overflow-x-auto -mx-1 px-1">
                <div className="inline-block min-w-full">
                  {FCF_ROWS.map((row, ri) => (
                    <div key={ri} className="grid grid-cols-[1.3fr_repeat(5,1fr)] gap-0">
                      {row.cells.map((cell, ci) => (
                        <motion.div
                          key={ci}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={VP}
                          transition={{ duration: 0.25, delay: (ri * 6 + ci) * 0.012 }}
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
                  ? "10행 × 6열 = 60 셀의 작은 sheet 안에 5년 FCF의 모든 mechanics가 들어 있어요. 행 단위로 같은 공식이 반복되니까 한 열을 만들고 그대로 복사해서 나머지 4열에 붙이면 끝."
                  : "60 cells (10 rows × 6 cols) hold all the mechanics of 5-year FCF. Same formula repeats across columns — build one column, copy and paste to the other four."}
              </p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 4 — Terminal Value */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Terminal Value — 두 방식 같이 보여주기" : "Terminal value — show both methods"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Terminal value는 forecast 마지막 해 이후의 모든 cash flow를 한 숫자로 압축한 거예요. 보통 EV의 60-75%를 차지할 정도로 큰 항목이라 두 가지 방식으로 따로 계산해서 같이 보여주는 게 표준 관행입니다."
                : "Terminal value compresses every cash flow beyond the last forecast year into a single number. Typically 60-75% of EV — so big that standard practice computes it two ways side by side."}</p>
              <p>{ko
                ? "Gordon Growth (perpetuity) 방식이 첫 번째예요. TV = FCF(n+1) / (WACC − g). 단순한 공식이지만 (WACC − g) 가 분모라 그 갭이 0.5%p만 움직여도 TV가 큰 폭으로 흔들립니다. 두 번째는 Exit Multiple. TV = EBITDA(n) × Exit multiple. Peer market에서 가져온 multiple을 곱하는 방식이라 시장 컨디션 변화에 민감하지만 직관적이에요."
                : "Gordon Growth (perpetuity): TV = FCF(n+1) / (WACC − g). Simple formula, but (WACC − g) sits in the denominator — a 0.5pp shift moves TV sharply. Exit Multiple: TV = EBITDA(n) × Exit multiple. Multiplying by a peer-derived multiple — sensitive to market conditions but intuitive."}</p>
              <p>{ko
                ? "둘 다 계산해서 평균을 쓰거나 range를 만드는 게 일반적. 두 결과가 크게 어긋나면 가정 한쪽이 틀렸다는 신호고, 비슷하면 서로 confirmation이 됩니다. 셀 단위로는 한 줄 공식이라 작업 분량은 안 큽니다 — 어디에 어떤 방식이 들어가는지를 정확히 두는 게 핵심이에요."
                : "Common practice averages the two or uses them as a range. Big divergence flags a broken assumption; close agreement provides mutual confirmation. At the cell level, each is a one-line formula — the trick is placing them precisely."}</p>
            </div>

            {/* TV method 비교 */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Terminal Value — 두 방식 비교" : "Terminal value — two methods"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                {ko ? "$1,840M (Gordon) vs $1,750M (Exit Multiple). 둘 다 같은 가정 set에서 도출." : "$1,840M (Gordon) vs $1,750M (Exit Multiple). Both from the same assumption set."}
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {TV_METHODS.map((m, i) => (
                  <div key={i} className="rounded-lg p-4 border" style={{ borderColor: m.color + "60", background: m.color + "0d" }}>
                    <p className="text-[12px] font-bold mb-1" style={{ color: m.color }}>{ko ? m.koName : m.enName}</p>
                    <p className="text-[10.5px] font-mono text-gray-700 dark:text-gray-300 mb-1.5">{m.formula}</p>
                    <p className="text-[10.5px] text-gray-500 dark:text-gray-400 mb-2.5 leading-snug">{ko ? m.koInput : m.enInput}</p>
                    <div className="flex items-baseline justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
                      <span className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-gray-500">{ko ? "TV 결과" : "TV result"}</span>
                      <span className="text-[15px] font-mono font-bold" style={{ color: m.color }}>${m.result.toLocaleString()}M</span>
                    </div>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-snug mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">{ko ? m.koProsCons : m.enProsCons}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "TV 평균 ≈ $1,795M (양쪽 +/− 5%). PV(TV) 로 할인하면 약 $1,160M. 5년 PV(FCF) 합과 더하면 EV ≈ $1,325M. EV − Net Debt = Equity Value."
                  : "Average TV ≈ $1,795M (±5%). Discount to PV(TV) ≈ $1,160M. Add to summed PV(FCF) → EV ≈ $1,325M. EV − Net Debt = Equity Value."}
              </p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 5 — Sensitivity Data Table */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Sensitivity — Excel Data Table로 WACC × g" : "Sensitivity — WACC × g via Excel data table"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Valuation Ch.2에서 봤듯이 DCF 결과를 흔드는 가장 큰 두 변수가 WACC과 terminal growth (g) 예요. 둘의 조합으로 EV가 어떻게 움직이는지를 보여주는 게 2D sensitivity table. Excel의 Data Table 기능 (Data → What-If Analysis → Data Table) 으로 한 번에 만들 수 있어요."
                : "Valuation Ch.2 showed the two biggest swing factors in a DCF are WACC and terminal growth (g). A 2D sensitivity table shows how their combinations move EV. Excel's Data Table (Data → What-If Analysis → Data Table) builds it in one shot."}</p>
              <p>{ko
                ? "Setup이 약간 까다로운데 한번 외우면 어디서나 같음. (1) 결과 cell (EV) 를 좌상단에 link. (2) Column에 WACC 값들, row에 g 값들 깔기. (3) 좌상단 셀부터 우하단 셀까지 selection. (4) Data Table 다이얼로그에서 \"Row input cell\" = WACC 셀 reference, \"Column input cell\" = g 셀 reference. 한 번 만들면 모델 어디서 가정을 바꿔도 자동으로 grid가 업데이트돼요."
                : "Setup is a bit fiddly but a one-time learn. (1) Link the result cell (EV) to the top-left. (2) Lay out WACC values across the column header and g values down the rows. (3) Select from top-left to bottom-right. (4) In the Data Table dialog: 'Row input cell' = WACC cell ref, 'Column input cell' = g cell ref. Once built, the grid recomputes automatically whenever any input changes."}</p>
            </div>

            {/* Sensitivity 2D table */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Sensitivity — Enterprise Value ($M)" : "Sensitivity — Enterprise Value ($M)"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                {ko ? "행 = g (terminal growth), 열 = WACC. 진한 셀이 base case (g=2.5%, WACC=9.0%)." : "Row = g (terminal growth), column = WACC. Highlighted cell is the base case."}
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-[11.5px] font-mono">
                  <thead>
                    <tr>
                      <th className="text-left p-2 font-semibold text-gray-500 dark:text-gray-400 w-16">{ko ? "g \\ WACC" : "g \\ WACC"}</th>
                      {SENS_WACC.map((w, i) => (
                        <th key={i} className="text-right p-2 font-semibold text-gray-500 dark:text-gray-400">
                          {w.toFixed(1)}%
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {SENS_G.map((g, ri) => (
                      <tr key={ri} className="border-t border-gray-100 dark:border-gray-800">
                        <td className="p-2 text-gray-500 dark:text-gray-400 font-semibold">{g.toFixed(1)}%</td>
                        {SENS_WACC.map((_, ci) => {
                          const v = SENS_GRID[ri][ci];
                          const isBase = ri === SENS_BASE_ROW && ci === SENS_BASE_COL;
                          const intensity = Math.max(0, Math.min(1, (v - 1000) / (1700 - 1000)));
                          const bg = `${ACCENT}${Math.round(intensity * 30).toString(16).padStart(2, "0")}`;
                          return (
                            <td
                              key={ci}
                              className="p-2 text-right text-gray-700 dark:text-gray-300"
                              style={{
                                background: isBase ? `${ACCENT}40` : bg,
                                outline: isBase ? `1.5px solid ${ACCENT}` : "none",
                                outlineOffset: "-1.5px",
                                fontWeight: isBase ? 700 : 400,
                                color: isBase ? ACCENT : undefined,
                              }}
                            >
                              ${v.toLocaleString()}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "Base $1,325M (g=2.5%, WACC=9.0%). 한 쪽 끝 (g=3.0%, WACC=8.0%) $1,620M, 반대쪽 (g=1.0%, WACC=10.0%) $1,040M. 같은 회사에서 EV가 ±20% 흔들리는 게 DCF의 본질이고, Football Field가 필요한 이유예요."
                  : "Base $1,325M (g=2.5%, WACC=9.0%). One corner $1,620M, the opposite $1,040M. Same company, ±20% on EV — exactly why the football field exists."}
              </p>
            </div>

            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4 mt-7">
              <p>{ko
                ? "여기까지가 DCF model의 sheet 작업 전체예요. WACC sheet (10-15 셀) + Operating Model (1 page) + DCF sheet (60-80 셀) + Sensitivity (Data Table 한 번). 다음 챕터에서는 LBO model — Sources & Uses, debt schedule, returns waterfall — 을 같은 방식으로 봅니다."
                : "That's the entire DCF model in sheet form. WACC sheet (10-15 cells) + Operating Model (one page) + DCF sheet (60-80 cells) + Sensitivity (one Data Table). Next chapter does the same for the LBO model — sources & uses, debt schedule, returns waterfall."}</p>
            </div>
          </motion.section>

          {/* Next chapter */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mt-12 mb-10">
            <div className="border-l-2 pl-4 py-1" style={{ borderColor: ACCENT }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>{ko ? "다음 챕터" : "Next chapter"}</p>
              <p className="text-[15px] font-bold text-gray-900 dark:text-gray-100">
                Ch.4 — {ko ? "LBO Model — Sources & Uses, Debt Schedule, Returns" : "LBO Model — sources & uses, debt schedule, returns"}
              </p>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                {ko
                  ? "Cap structure setup, debt schedule with cash sweep, returns waterfall (preferred / common / GP carry), IRR back-solver를 Goal Seek으로 푸는 mechanism."
                  : "Cap structure setup, debt schedule with cash sweep, returns waterfall (preferred / common / GP carry), and IRR back-solver via Goal Seek."}
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
