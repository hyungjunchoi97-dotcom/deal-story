/**
 * Modelling 시리즈 Ch.1 — 모델의 표준 규칙
 *
 * 톤 가이드:
 *  - 자연스러운 한국어 + 영어는 꼭 필요한 전문 용어만
 *  - Excel 표현(셀 참조, 수식 등)은 적극 사용 — 이 시리즈의 핵심 컨텐츠
 *  - 시각화 4개: Color coding mini-sheet · Sheet 구조 stack · Sign convention 표 · Audit checks 패널
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

const SLUG = "mod-ch01-standards";
const ACCENT = "#10b981"; // Modelling 시리즈 컬러 — 녹색 (Excel formula 색과 연결)

// Color coding 4 types
const CELL_PALETTE = [
  {
    koType: "Input (assumption)",
    enType: "Input (assumption)",
    color: "#2563eb",
    bg: "#dbeafe",
    sample: "10.5%",
    koDesc: "사람이 직접 타이핑하는 가정. 매출 성장률, WACC 등.",
    enDesc: "Anything a human types in. Growth rate, WACC, etc.",
  },
  {
    koType: "Formula (자체 계산)",
    enType: "Formula (in-sheet calc)",
    color: "#0f172a",
    bg: "#f1f5f9",
    sample: "=B5*C5",
    koDesc: "같은 sheet 안에서 계산되는 수식.",
    enDesc: "A formula computed within the same sheet.",
  },
  {
    koType: "Link (다른 sheet 참조)",
    enType: "Link (cross-sheet ref)",
    color: "#16a34a",
    bg: "#dcfce7",
    sample: "='Op'!E10",
    koDesc: "다른 sheet의 셀을 참조. Cross-sheet 연결.",
    enDesc: "Reference to another sheet — cross-sheet link.",
  },
  {
    koType: "External / Hardcoded (위험)",
    enType: "External / hardcoded (warn)",
    color: "#dc2626",
    bg: "#fee2e2",
    sample: "=[wb.xlsx]Sheet!A1",
    koDesc: "외부 파일 참조 또는 수식 안에 박힌 숫자. 거의 항상 잘못된 패턴.",
    enDesc: "External workbook reference or hardcoded number inside a formula. Almost always wrong.",
  },
];

// Mini-spreadsheet 예시 — 5 row × 5 column
// 각 셀: { val, type: 'header' | 'input' | 'formula' | 'link' | 'label' }
type CellType = "header" | "input" | "formula" | "link" | "label" | "external";
const MINI_GRID: Array<Array<{ val: string; type: CellType; koHint?: string; enHint?: string }>> = [
  // Row 0 (header)
  [
    { val: "", type: "header" },
    { val: "2024A", type: "header" },
    { val: "2025E", type: "header" },
    { val: "2026E", type: "header" },
    { val: "2027E", type: "header" },
  ],
  // Row 1 — Revenue
  [
    { val: "Revenue ($M)", type: "label" },
    { val: "='Hist'!E5", type: "link", koHint: "Historical sheet 참조", enHint: "Pulled from Historical sheet" },
    { val: "=B2*(1+C3)", type: "formula", koHint: "전년도 × (1 + 성장률)", enHint: "Prior year × (1 + growth)" },
    { val: "=C2*(1+D3)", type: "formula" },
    { val: "=D2*(1+E3)", type: "formula" },
  ],
  // Row 2 — Growth %
  [
    { val: "Growth %", type: "label" },
    { val: "", type: "label" },
    { val: "12.0%", type: "input", koHint: "분석가가 직접 입력", enHint: "Typed by the analyst" },
    { val: "10.5%", type: "input" },
    { val: "9.0%", type: "input" },
  ],
  // Row 3 — EBITDA Margin
  [
    { val: "EBITDA margin %", type: "label" },
    { val: "22.0%", type: "input" },
    { val: "23.0%", type: "input" },
    { val: "24.0%", type: "input" },
    { val: "25.0%", type: "input" },
  ],
  // Row 4 — EBITDA
  [
    { val: "EBITDA ($M)", type: "label" },
    { val: "=B2*B4", type: "formula" },
    { val: "=C2*C4", type: "formula" },
    { val: "=D2*D4", type: "formula" },
    { val: "=E2*E4", type: "formula" },
  ],
];

const COL_LABELS = ["", "A", "B", "C", "D", "E"];
const ROW_LABELS = ["", "1", "2", "3", "4", "5"];

// Sign convention 표
const SIGN_TABLE = [
  { koItem: "Revenue",                    enItem: "Revenue",                    pl: "+",   cf: "+",   koNote: "매출 — 정상 양수",                       enNote: "Top-line — positive" },
  { koItem: "COGS · Operating Expense",   enItem: "COGS · operating expense",   pl: "−",   cf: "−",   koNote: "비용 — 음수로 표기 (P&L 차감)",          enNote: "Costs shown negative (deducted in P&L)" },
  { koItem: "EBITDA · Operating Income",   enItem: "EBITDA · operating income",   pl: "+",   cf: "+",   koNote: "정상 양수",                                 enNote: "Positive (operating profit)" },
  { koItem: "D&A (감가상각)",              enItem: "D&A (depreciation)",          pl: "−",   cf: "+",   koNote: "P&L 비용 / CF에서는 non-cash add-back",   enNote: "Expense in P&L / added back in CF (non-cash)" },
  { koItem: "Capex",                      enItem: "Capex",                      pl: "—",   cf: "−",   koNote: "P&L에 없음 / CF outflow",                  enNote: "Not on P&L / outflow in CF" },
  { koItem: "ΔNWC (NWC 증가)",             enItem: "ΔNWC (NWC increase)",         pl: "—",   cf: "−",   koNote: "NWC 증가는 cash 흡수 → 음수",            enNote: "Increase absorbs cash → negative" },
  { koItem: "Tax",                        enItem: "Tax",                        pl: "−",   cf: "−",   koNote: "P&L 차감 + CF outflow 모두 음수",         enNote: "Negative in both — deduction + outflow" },
  { koItem: "Interest expense",           enItem: "Interest expense",           pl: "−",   cf: "−",   koNote: "P&L 차감 + 실제 cash outflow",            enNote: "Deduction in P&L + real cash outflow" },
  { koItem: "Debt 신규 발행",              enItem: "Debt issuance",                pl: "—",   cf: "+",   koNote: "P&L 영향 없음 / cash inflow",            enNote: "No P&L impact / cash inflow" },
  { koItem: "Debt 상환",                   enItem: "Debt repayment",              pl: "—",   cf: "−",   koNote: "P&L 영향 없음 / cash outflow",            enNote: "No P&L impact / cash outflow" },
];

// Sheet 구조 — 표준 10 sheets
const SHEETS = [
  { koName: "Cover",                  enName: "Cover",                  koPurpose: "제목 · 작성자 · 버전 · 변경 이력",            enPurpose: "Title, author, version, change log" },
  { koName: "Assumptions",            enName: "Assumptions",            koPurpose: "모든 input을 한 곳에. 분석가가 만지는 sheet.",  enPurpose: "All inputs in one place. The analyst's main sheet." },
  { koName: "Historical",             enName: "Historical",             koPurpose: "과거 재무. 그대로 hardcode 됨.",                 enPurpose: "Historical financials. Hardcoded as filed." },
  { koName: "Operating Model",        enName: "Operating Model",        koPurpose: "Revenue build · Margin · Driver-based forecast", enPurpose: "Revenue build, margins, driver-based forecast" },
  { koName: "3-Statement",            enName: "3-Statement",            koPurpose: "IS · BS · CFS 통합 · 연결",                       enPurpose: "Linked IS, BS, CFS" },
  { koName: "DCF",                    enName: "DCF",                    koPurpose: "WACC · FCF · Terminal Value · EV",               enPurpose: "WACC, FCF, terminal value, EV" },
  { koName: "Comps",                  enName: "Comps",                  koPurpose: "Trading + Transaction multiples",                enPurpose: "Trading + transaction multiples" },
  { koName: "LBO (optional)",         enName: "LBO (optional)",         koPurpose: "Sources & Uses · Debt schedule · Returns",       enPurpose: "Sources & uses, debt schedule, returns" },
  { koName: "Output · Football Field",enName: "Output · Football Field",koPurpose: "최종 valuation range 요약",                       enPurpose: "Final valuation range summary" },
  { koName: "Sensitivity",            enName: "Sensitivity",            koPurpose: "Data table · scenario manager",                  enPurpose: "Data tables, scenario manager" },
  { koName: "Audit · Checks",         enName: "Audit · Checks",         koPurpose: "BS balance · CF roll-forward · integrity tests", koSpecial: true, enSpecial: true,
    enPurpose: "BS balance, CF roll-forward, integrity tests" },
];

// Audit checks 패널
const AUDIT_CHECKS = [
  {
    koName: "Balance Sheet 일치",
    enName: "Balance sheet ties",
    koFormula: "=ABS(자산 합계 − (부채+자본)) < 0.01",
    enFormula: "=ABS(Total Assets − (Liab+Equity)) < 0.01",
    status: "OK" as const,
    koDesc: "BS의 좌우가 정확히 맞는지",
    enDesc: "Whether the BS balances exactly",
  },
  {
    koName: "Cash 변화량 일치",
    enName: "Cash roll-forward ties",
    koFormula: "=ABS(BS 변화 − CFS 변화) < 0.01",
    enFormula: "=ABS(ΔBS Cash − ΔCFS Cash) < 0.01",
    status: "OK" as const,
    koDesc: "BS의 cash 변화 = CFS의 net change",
    enDesc: "BS cash change = CFS net change",
  },
  {
    koName: "Net Income tie",
    enName: "Net income ties",
    koFormula: "=IS!NI = CFS!StartingNI",
    enFormula: "=IS!NI = CFS!StartingNI",
    status: "OK" as const,
    koDesc: "P&L의 net income = CFS 시작점",
    enDesc: "P&L net income = CFS starting point",
  },
  {
    koName: "Iterative calc 활성화",
    enName: "Iterative calc enabled",
    koFormula: "(File → Options → Formulas → Enable iterative)",
    enFormula: "(File → Options → Formulas → Enable iterative)",
    status: "OK" as const,
    koDesc: "Circular reference 처리에 필수",
    enDesc: "Required to handle circular references",
  },
  {
    koName: "Hardcoded number 점검",
    enName: "Hardcoded numbers in formulas",
    koFormula: "수식 안에 박힌 숫자 검색",
    enFormula: "Scan for numbers buried inside formulas",
    status: "WARN" as const,
    koDesc: "수식에 직접 박힌 숫자가 있으면 audit 어려움",
    enDesc: "Numbers hardcoded in formulas are an audit nightmare",
  },
  {
    koName: "External link 없음",
    enName: "No external links",
    koFormula: "Data → Edit Links에서 ext file 없는지 확인",
    enFormula: "Data → Edit Links — confirm no external workbooks",
    status: "OK" as const,
    koDesc: "외부 파일 참조는 sharing 시 깨짐",
    enDesc: "External refs break the moment you share the file",
  },
];

const cellTextColor = (type: CellType) => {
  if (type === "input") return "#2563eb";
  if (type === "formula") return "#0f172a";
  if (type === "link") return "#16a34a";
  if (type === "external") return "#dc2626";
  if (type === "header") return "#475569";
  return "#64748b";
};
const cellBg = (type: CellType) => {
  if (type === "input") return "#eff6ff";
  if (type === "formula") return "#ffffff";
  if (type === "link") return "#f0fdf4";
  if (type === "external") return "#fef2f2";
  if (type === "header") return "#f1f5f9";
  return "#ffffff";
};

export default function MaMod01Client({ lang }: { lang: Lang }) {
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
            <span className="text-gray-600 dark:text-gray-300 font-medium">{ko ? "Modelling 시리즈 · Ch.1" : "Modelling Series · Ch.1"}</span>
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

          {/* § 1 — 모델은 communication 도구 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "모델은 결국 communication 도구다" : "A model is a communication tool"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "IB analyst가 만든 valuation model은 본인이 끝까지 가지고 있는 파일이 아니에요. Associate가 검토하고, VP가 가정을 손보고, MD가 board meeting 전 한 번 더 보고, 그 다음에는 buyer의 deal team이 받아서 자기들 model과 통합합니다. 한 모델이 보통 5-7명의 손을 거치고, 각자 1-2시간 안에 그 모델 안에서 \"우리 회사가 어떤 가정으로 어떻게 계산됐는지\"를 따라갈 수 있어야 해요."
                : "A valuation model an IB analyst builds doesn't stay with the analyst. The associate reviews it, the VP tweaks assumptions, the MD looks once before the board meeting, then the buyer's deal team takes it and merges it with their own. Five to seven hands typically touch a model, and each person has to follow 'what assumptions did we use and how were they computed?' inside 1-2 hours."}</p>
              <p>{ko
                ? "그래서 모델을 만드는 진짜 목적은 \"내가 계산하는 것\"이 아니라 \"다음 사람이 따라 읽을 수 있게 만드는 것\"이에요. 이 차이가 \"잘 만든 모델\"의 정의를 결정합니다. 좋은 모델 = 누가 와도 30분 안에 sheet 구조를 파악하고 1-2시간 안에 핵심 가정을 디버깅할 수 있는 모델. 그렇게 만들려면 모두가 같은 규칙을 따라야 해요."
                : "So the real point of building a model isn't 'me computing it' — it's 'the next person being able to read it.' That distinction defines what 'good model' means. A good model = anyone can grasp the sheet structure in 30 minutes and debug the core assumptions in 1-2 hours. Getting there requires everyone to follow the same rules."}</p>
              <p>{ko
                ? "이번 챕터에서는 IB·PE 어디서나 비슷한 형태로 쓰는 4가지 규칙을 정리합니다. Color coding, sign convention, sheet 구조, 그리고 audit checks. 시리즈의 나머지 챕터들 (3-Statement, DCF, LBO, Operating Model) 은 모두 이 4가지 규칙 위에서 작동해요."
                : "This chapter lays out the four rules every IB and PE shares. Color coding, sign convention, sheet structure, and audit checks. Every other chapter in this series (3-statement, DCF, LBO, operating model) operates on top of these four."}</p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 2 — Color coding */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Color coding — 모델의 alphabet" : "Color coding — the alphabet of the model"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "모델을 열었을 때 가장 먼저 보이는 게 셀의 색이에요. IB·PE 어디서나 비슷한 4-color convention을 씁니다. 파랑은 input (사람이 직접 입력한 가정), 검정은 같은 sheet 안의 formula, 녹색은 다른 sheet로 가는 link, 빨강은 external link 또는 수식 안에 박힌 hardcoded number — 거의 항상 잘못된 신호."
                : "First thing you see when you open a model is the cell colors. IB and PE use a near-identical 4-color convention. Blue = input (typed-in assumption). Black = formula within the same sheet. Green = cross-sheet link. Red = external link or hardcoded number inside a formula — almost always a red flag."}</p>
              <p>{ko
                ? "왜 색까지 정해두냐면 — 셀을 하나 클릭하지 않고도 \"이 셀이 사람이 만든 가정인지, 자동 계산인지, 다른 sheet에서 온 값인지\"를 즉시 알 수 있어야 하기 때문이에요. 가정을 디버깅할 때 \"파란색 셀만 따라가면 된다\"는 게 핵심. 다른 색은 결과물이고, 파란색만이 실제 가정이니까."
                : "Why even codify the colors? So you can tell 'is this cell a human assumption, a calc, or a value from another sheet?' without clicking a single cell. When debugging, 'just follow the blue cells' is the rule — the other colors are outputs, only the blues are real assumptions."}</p>
              <p>{ko
                ? "빨간색 셀이 보이면 어떻게 해야 하나. External link면 즉시 제거 — 다른 file에 의존하는 model은 그 file이 사라지는 순간 깨집니다. Hardcoded number (예: =B5*1.105 처럼 수식 안에 숫자 박힌 형태) 면 그 숫자를 빼내서 가정 cell로 옮긴 다음 reference로 바꿔야 해요. 1.105 같은 숫자가 의미하는 게 무엇인지 (10.5% 성장률?) 셀에서 보이지 않으면 다음 사람이 알 길이 없습니다."
                : "What to do when you see red. External link → remove immediately; models depending on other files break the moment that file moves. Hardcoded number in a formula (like =B5*1.105) → extract the number into an assumption cell and reference it. Otherwise the next person has no idea what 1.105 means (a 10.5% growth rate? something else?)."}</p>
            </div>

            {/* Mini-spreadsheet 시각화 */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Mini spreadsheet — 4-color convention" : "Mini spreadsheet — 4-color convention"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                {ko ? "Revenue · Growth · Margin · EBITDA를 단순화한 예시." : "A simplified Revenue · Growth · Margin · EBITDA grid."}
              </p>

              {/* Palette legend */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                {CELL_PALETTE.map((p, i) => (
                  <div key={i} className="rounded-md p-2 border" style={{ background: p.bg, borderColor: p.color + "40" }}>
                    <p className="text-[10px] font-bold mb-0.5" style={{ color: p.color }}>{ko ? p.koType : p.enType}</p>
                    <p className="text-[10px] font-mono mb-0.5" style={{ color: p.color }}>{p.sample}</p>
                  </div>
                ))}
              </div>

              {/* Mini grid */}
              <div className="overflow-x-auto -mx-1 px-1">
                <div className="inline-block min-w-full">
                  {/* Column labels */}
                  <div className="grid grid-cols-[40px_repeat(5,1fr)] gap-0">
                    {COL_LABELS.map((c, i) => (
                      <div key={i} className="text-[9px] font-mono text-center text-gray-400 dark:text-gray-500 py-1">{c}</div>
                    ))}
                  </div>
                  {/* Rows */}
                  {MINI_GRID.map((row, ri) => (
                    <div key={ri} className="grid grid-cols-[40px_repeat(5,1fr)] gap-0">
                      <div className="text-[9px] font-mono text-center text-gray-400 dark:text-gray-500 py-2 border-r border-gray-100 dark:border-gray-800">{ROW_LABELS[ri + 1]}</div>
                      {row.map((cell, ci) => (
                        <motion.div
                          key={ci}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={VP}
                          transition={{ duration: 0.35, delay: (ri * 5 + ci) * 0.025 }}
                          className="border-r border-b border-gray-100 dark:border-gray-800 px-2 py-2 text-[10.5px] font-mono min-w-[80px]"
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
                  ? "이 grid를 1초만 봐도 \"파란색 셀(Growth %, EBITDA margin %, B2)이 가정이고, 검정색 셀(B5, C5, D5, E5)이 자동 계산이고, 녹색 셀(B2)이 historical sheet에서 온 link\"라는 게 보입니다. 디버깅할 때 파란색만 따라가면 끝나요."
                  : "One second of looking and you know the blues (Growth %, EBITDA margin %, B2) are the assumptions, the blacks (B5, C5, D5, E5) are auto-calc, the green (B2) pulls from the historical sheet. Debug by following only the blues."}
              </p>
            </div>
          </motion.section>

          {/* Mid share */}
          <ShareButtons title={ko ? chapter.titleKo : chapter.titleEn} variant="mid" likeSlug={SLUG} lang={lang} />

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 3 — Sign convention */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Sign convention — 부호 일관성" : "Sign convention — keeping signs consistent"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "두 번째 표준 규칙이 부호(sign)예요. 모델 전체에서 \"양수와 음수의 의미\"가 일관돼야 합니다. 어떤 sheet에서는 COGS를 양수로 잡고 다른 sheet에서는 음수로 잡으면 어딘가에서 sign error가 발생해요. 보통 발견될 때까지 며칠씩 걸리는 종류의 오류입니다."
                : "Second rule is sign. The meaning of positive and negative has to be consistent across the model. COGS as positive in one sheet and negative in another guarantees a sign error somewhere — the kind that takes days to surface."}</p>
              <p>{ko
                ? "표준은 단순해요. P&L에서는 비용을 음수로 표기하고 (그래서 모든 라인을 더하면 net income이 나옴), Cash Flow Statement에서는 cash outflow를 음수로 표기 (그래서 모든 라인을 더하면 net cash change가 나옴). 두 statement에서 부호가 다르게 보이는 항목들이 있는데, 헷갈리지 않게 정리해두면 다음 작업이 훨씬 빨라져요."
                : "The standard is simple. In the P&L, costs are negative (so summing all lines gives net income). In the cash flow statement, cash outflows are negative (so summing all lines gives net cash change). A few items sit at different signs in the two statements — keeping them straight saves enormous time later."}</p>
            </div>

            {/* Sign convention 표 */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5 overflow-x-auto">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                {ko ? "표준 sign convention — 항목별 부호" : "Standard sign convention — by line item"}
              </p>
              <table className="w-full text-[12px]">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-2 pr-3 font-semibold text-gray-500 dark:text-gray-400 w-[28%]">{ko ? "항목" : "Item"}</th>
                    <th className="text-center py-2 px-2 font-semibold text-gray-500 dark:text-gray-400 w-[12%]">P&L</th>
                    <th className="text-center py-2 px-2 font-semibold text-gray-500 dark:text-gray-400 w-[12%]">CF</th>
                    <th className="text-left py-2 pl-3 font-semibold text-gray-500 dark:text-gray-400">{ko ? "설명" : "Note"}</th>
                  </tr>
                </thead>
                <tbody>
                  {SIGN_TABLE.map((s, i) => (
                    <tr key={i} className="border-b border-gray-100 dark:border-gray-800/60 last:border-0">
                      <td className="py-2 pr-3 text-gray-700 dark:text-gray-300 align-top font-medium">{ko ? s.koItem : s.enItem}</td>
                      <td className="py-2 px-2 text-center align-top">
                        <span className="font-mono font-bold" style={{ color: s.pl === "+" ? "#16a34a" : s.pl === "−" ? "#dc2626" : "#94a3b8" }}>{s.pl}</span>
                      </td>
                      <td className="py-2 px-2 text-center align-top">
                        <span className="font-mono font-bold" style={{ color: s.cf === "+" ? "#16a34a" : s.cf === "−" ? "#dc2626" : "#94a3b8" }}>{s.cf}</span>
                      </td>
                      <td className="py-2 pl-3 text-gray-500 dark:text-gray-400 align-top text-[11px]">{ko ? s.koNote : s.enNote}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-4 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "주의할 항목: D&A는 P&L에서는 음수(비용), CF에서는 양수(non-cash add-back). Tax/Interest도 두 statement에서 모두 음수지만 P&L과 CF의 \"음수\"가 다른 의미라는 점."
                  : "Watch: D&A is negative in P&L (expense) but positive in CF (non-cash add-back). Tax and interest sit negative in both, but the 'negative' has different meaning in P&L vs CF."}
              </p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 4 — Sheet 구조 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Sheet 구조 — 표준 layout" : "Sheet structure — the standard layout"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "한 workbook 안에 sheet가 10개 정도 들어가요. 순서도 정해져 있어요 — 왼쪽이 input·assumption sheet들, 오른쪽으로 갈수록 결과·output sheet들. 사람이 좌→우로 읽는 방향과 데이터 흐름이 일치하도록 배치합니다."
                : "Roughly ten sheets in a workbook. The order is fixed — inputs and assumptions on the left, results and outputs on the right. The arrangement mirrors the way people read left-to-right and how data flows."}</p>
              <p>{ko
                ? "가장 흔한 mistake가 \"Assumptions를 sheet 곳곳에 흩어두는 것\"이에요. 매출 가정은 Operating sheet에, WACC은 DCF sheet에, terminal growth는 또 다른 곳에 있으면 디버깅이 불가능해집니다. 모든 가정은 한 \"Assumptions\" sheet에 모아두고, 나머지 sheet는 그 sheet를 reference 만 합니다. 이렇게 하면 \"가정 한 줄을 바꾸면 모델 전체가 어떻게 움직이는지\"가 한 곳에서 통제돼요."
                : "The most common mistake is scattering assumptions across sheets. Revenue assumptions in Operating, WACC in DCF, terminal growth somewhere else — debugging becomes impossible. Put all assumptions into a single 'Assumptions' sheet; have every other sheet reference it. That way, 'change one assumption, watch what moves' is controlled from one place."}</p>
            </div>

            {/* Sheet stack */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                {ko ? "표준 workbook — 10 sheets in order" : "Standard workbook — 10 sheets in order"}
              </p>
              <div className="space-y-1.5">
                {SHEETS.map((s, i) => {
                  const isAudit = i === SHEETS.length - 1;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={VP}
                      transition={{ duration: 0.4, delay: i * 0.05, ease: EASE }}
                      className="grid grid-cols-[32px_auto_1fr] gap-3 items-center px-3 py-2 rounded-md"
                      style={{
                        background: isAudit ? `${ACCENT}1a` : i < 3 ? `${ACCENT}08` : "transparent",
                        border: `1px solid ${isAudit ? ACCENT + "80" : "transparent"}`,
                      }}
                    >
                      <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-[12.5px] font-bold whitespace-nowrap" style={{ color: isAudit ? ACCENT : undefined }}>{ko ? s.koName : s.enName}</span>
                      <span className="text-[11px] text-gray-500 dark:text-gray-400 leading-snug">{ko ? s.koPurpose : s.enPurpose}</span>
                    </motion.div>
                  );
                })}
              </div>
              <p className="mt-5 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "왼쪽(01-03 Cover·Assumptions·Historical)이 input layer, 가운데(04-08)가 계산 layer, 오른쪽(09-10)이 output/검증 layer. 정보가 좌에서 우로 흐릅니다. 가장 마지막의 Audit sheet가 시리즈 Ch.1 마지막 § 5에서 다루는 자동 검증."
                  : "Left (01-03 Cover, Assumptions, Historical) is the input layer; middle (04-08) computes; right (09-10) outputs and audits. Information flows left to right. The final Audit sheet is the self-checking layer covered in § 5."}
              </p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 5 — Audit checks */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Audit checks — 모델이 자기 자신을 검사하게" : "Audit checks — let the model check itself"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "마지막 표준 규칙이 audit sheet예요. 모델의 정합성을 자동으로 검증하는 cell들을 한 곳에 모아둡니다. 가장 기본이 BS balance check — 자산 합계가 부채+자본과 일치하는지. =ABS(자산 − (부채+자본)) < 0.01 형태의 한 줄 수식이면 충분해요. OK / ERROR 두 가지로 표시하면 모델 어디든 가정을 바꿔도 한 셀만 보면 모델이 깨졌는지 알 수 있어요."
                : "The last standard is the audit sheet. A single place that collects cells which self-verify the model's integrity. The most basic is the BS balance check — does Assets = Liabilities + Equity? A one-line formula like =ABS(Assets − (Liab+Equity)) < 0.01 is enough. Display OK or ERROR and you can change any assumption anywhere, then glance at one cell to know if the model broke."}</p>
              <p>{ko
                ? "잘 만든 모델에는 audit check가 보통 5-8개 들어가요. BS balance, cash roll-forward (BS의 cash 변화 = CFS의 net change), net income tie (P&L의 NI = CFS 시작점), iterative calc 활성화 여부, hardcoded number 점검, external link 없음 등. Sheet 어딘가에 ERROR가 하나 떠 있으면 그 모델은 share하지 않는다 — 이게 quality control의 기본이에요."
                : "A well-built model usually carries 5-8 audit checks. BS balance, cash roll-forward (BS Δcash = CFS net change), net-income tie (P&L NI = CFS start), iterative calc enabled, hardcoded number scan, no external links. If a single ERROR shows in the audit sheet, you don't share that model — the rule of quality control."}</p>
            </div>

            {/* Audit panel */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Audit Checks — Sheet 10의 표준 항목" : "Audit checks — sheet 10 standard items"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "각 check는 OK / WARN / ERROR 형태로 한 줄 결과. 하나라도 ERROR면 share 보류." : "Each check returns OK / WARN / ERROR in one line. A single ERROR holds the model from sharing."}
              </p>
              <div className="space-y-2.5">
                {AUDIT_CHECKS.map((a, i) => {
                  const isOk = a.status === "OK";
                  const isWarn = a.status === "WARN";
                  const color = isOk ? "#16a34a" : isWarn ? "#f59e0b" : "#dc2626";
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -6 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={VP}
                      transition={{ duration: 0.4, delay: i * 0.06, ease: EASE }}
                      className="grid grid-cols-[auto_1fr_auto] gap-3 items-center px-3 py-2.5 rounded-md border"
                      style={{ borderColor: color + "60", background: color + "0d" }}
                    >
                      <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500">{String(i + 1).padStart(2, "0")}</span>
                      <div className="min-w-0">
                        <p className="text-[12px] font-bold text-gray-900 dark:text-gray-100 mb-0.5">{ko ? a.koName : a.enName}</p>
                        <p className="text-[10.5px] font-mono text-gray-600 dark:text-gray-400 leading-snug truncate">{ko ? a.koFormula : a.enFormula}</p>
                        <p className="text-[10.5px] text-gray-500 dark:text-gray-400 leading-snug mt-0.5">{ko ? a.koDesc : a.enDesc}</p>
                      </div>
                      <span
                        className="text-[10.5px] font-bold px-2.5 py-1 rounded uppercase tracking-wider flex-shrink-0"
                        style={{ background: color, color: "#fff" }}
                      >
                        {a.status}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
              <p className="mt-5 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "위 패널에서 5번 \"Hardcoded number\"가 WARN 상태. 모델 안에 수식에 직접 박힌 숫자가 일부 있다는 신호. 다음 작업 전에 정리하면 모델 quality가 올라갑니다."
                  : "Item 5 'Hardcoded number' shows WARN — some numbers are still buried inside formulas. Clean them up before the next iteration and model quality lifts."}
              </p>
            </div>

            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4 mt-7">
              <p>{ko
                ? "이 4가지 규칙 — color, sign, sheet 구조, audit — 이 모든 IB·PE 모델의 공통 알파벳입니다. 다음 챕터들에서 다룰 3-Statement, DCF, LBO, Operating Model은 모두 이 알파벳 위에서 작동해요. 다음 챕터 Ch.2에서는 IS·BS·CFS가 어떻게 연결되는지 — \"BS가 안 맞을 때\"를 어떻게 디버깅하는지 — 를 봅니다."
                : "These four rules — color, sign, sheet structure, audit — form the shared alphabet of every IB and PE model. The 3-statement, DCF, LBO, and operating models in later chapters all run on this alphabet. Ch.2 walks through how IS, BS, and CFS link — and how to debug 'why doesn't my BS balance?'"}</p>
            </div>
          </motion.section>

          {/* Next chapter */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mt-12 mb-10">
            <div className="border-l-2 pl-4 py-1" style={{ borderColor: ACCENT }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>{ko ? "다음 챕터" : "Next chapter"}</p>
              <p className="text-[15px] font-bold text-gray-900 dark:text-gray-100">
                Ch.2 — {ko ? "3-Statement Model — IS · BS · CFS 연결 mechanics" : "3-Statement Model — how IS / BS / CFS connect"}
              </p>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                {ko
                  ? "세 statement이 어떤 line으로 어떻게 연결되는지, BS가 안 맞을 때 디버깅 흐름, interest × debt × cash가 만드는 circular reference를 iterative calculation으로 푸는 mechanism."
                  : "Which lines connect the three statements and how, debugging an unbalanced BS, and resolving the interest × debt × cash circular reference via iterative calculation."}
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
