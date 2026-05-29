"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, XAxis, YAxis, Legend, ReferenceLine,
} from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";

// ── Types ─────────────────────────────────────────────────────────────────────
type Lang = "ko" | "en";
interface Props { lang: Lang; }

// ── Accent ────────────────────────────────────────────────────────────────────
const ACCENT = "#f59e0b"; // amber-500
const ACCENT_LIGHT = "#fffbeb"; // amber-50
const SIBLING = "#0891b2"; // cyan-600 (Valuation series)

// ── Animation ─────────────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

// ── Series Nav ────────────────────────────────────────────────────────────────
const MODEL_SERIES = [
  { slug: "dcf-model-setup",   ch: 1, title: (ko: boolean) => ko ? "Ch.1 셋업"        : "Ch.1 Setup",       published: true  },
  { slug: "dcf-fcf-build",     ch: 2, title: (ko: boolean) => ko ? "Ch.2 FCF Build"   : "Ch.2 FCF Build",   published: false },
  { slug: "dcf-wacc-excel",    ch: 3, title: (ko: boolean) => ko ? "Ch.3 WACC"         : "Ch.3 WACC",         published: false },
  { slug: "dcf-tv-model",      ch: 4, title: (ko: boolean) => ko ? "Ch.4 TV 모델링"    : "Ch.4 TV Model",     published: false },
  { slug: "dcf-sensitivity",   ch: 5, title: (ko: boolean) => ko ? "Ch.5 민감도"       : "Ch.5 Sensitivity",  published: false },
];
const THIS_CH = 1;

function ChapterNav({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const base = ko ? "/deal-101" : "/en/deal-101";
  return (
    <div className="max-w-3xl mx-auto px-5 mb-8">
      <div className="flex gap-1.5 flex-wrap">
        {MODEL_SERIES.map((ch) => {
          const isCurrent = ch.ch === THIS_CH;
          const inactive = !ch.published && !isCurrent;
          if (inactive) {
            return (
              <span
                key={ch.slug}
                className="text-[11px] px-3 py-1.5 rounded-full font-medium text-gray-300 dark:text-gray-600 bg-gray-50 dark:bg-gray-900 cursor-not-allowed"
              >
                {ch.title(ko)} · {ko ? "준비 중" : "Soon"}
              </span>
            );
          }
          return (
            <Link
              key={ch.slug}
              href={`${base}/${ch.slug}`}
              className={`text-[11px] px-3 py-1.5 rounded-full font-medium transition-colors ${
                isCurrent
                  ? "text-white"
                  : "text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              style={isCurrent ? { background: ACCENT } : {}}
            >
              {ch.title(ko)}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

// ── 5 Sheets Architecture ─────────────────────────────────────────────────────
const SHEETS = [
  {
    n: 1,
    code: "1_Inputs",
    titleKo: "Assumptions",
    titleEn: "Assumptions",
    purposeKo: "모델 전체의 single source of truth — 하드코딩된 값은 여기에만 존재한다",
    purposeEn: "Single source of truth — all hard-coded values live here only",
    inputsKo: "Revenue growth %, Margin %, Capex %, Tax rate, WACC inputs, Terminal g",
    inputsEn: "Revenue growth %, margin %, Capex %, tax rate, WACC inputs, terminal g",
    outputsKo: "다른 모든 시트가 여기를 참조",
    outputsEn: "Every other sheet links here",
    color: "#3b82f6",
    icon: "🎛️",
  },
  {
    n: 2,
    code: "2_PnL",
    titleKo: "P&L Forecast",
    titleEn: "P&L Forecast",
    purposeKo: "Historical 3–5년 + Forecast 5–10년의 손익계산서",
    purposeEn: "Historical 3–5yr + Forecast 5–10yr income statement",
    inputsKo: "← 1_Inputs (growth %, margin %)",
    inputsEn: "← 1_Inputs (growth %, margin %)",
    outputsKo: "→ 3_FCF (EBIT, Tax)",
    outputsEn: "→ 3_FCF (EBIT, Tax)",
    color: "#10b981",
    icon: "📊",
  },
  {
    n: 3,
    code: "3_FCF",
    titleKo: "FCF Build",
    titleEn: "FCF Build",
    purposeKo: "EBIT(1−t) → +D&A − Capex − ΔNWC = UFCF, mid-year discount factor 적용",
    purposeEn: "EBIT(1−t) → +D&A − Capex − ΔNWC = UFCF, with mid-year discount factor",
    inputsKo: "← 2_PnL (EBIT), 1_Inputs (Capex %, NWC days)",
    inputsEn: "← 2_PnL (EBIT), 1_Inputs (Capex %, NWC days)",
    outputsKo: "→ 5_Val (PV of FCF)",
    outputsEn: "→ 5_Val (PV of FCF)",
    color: "#f59e0b",
    icon: "💵",
  },
  {
    n: 4,
    code: "4_WACC",
    titleKo: "WACC Calculation",
    titleEn: "WACC Calculation",
    purposeKo: "CAPM 기반 Cost of Equity + after-tax Cost of Debt, capital structure 가중평균",
    purposeEn: "CAPM-based Cost of Equity + after-tax Cost of Debt, weighted by capital structure",
    inputsKo: "← 1_Inputs (Rf, β, ERP, D/V), Bloomberg/CIQ comparables",
    inputsEn: "← 1_Inputs (Rf, β, ERP, D/V), Bloomberg/CIQ comparables",
    outputsKo: "→ 5_Val, 3_FCF (discount factor)",
    outputsEn: "→ 5_Val, 3_FCF (discount factor)",
    color: "#8b5cf6",
    icon: "📉",
  },
  {
    n: 5,
    code: "5_Val",
    titleKo: "Valuation Summary",
    titleEn: "Valuation Summary",
    purposeKo: "Σ PV(FCF) + PV(TV) − Net Debt = Equity Value → ÷ shares = implied price + sensitivity",
    purposeEn: "Σ PV(FCF) + PV(TV) − Net Debt = Equity Value → ÷ shares = implied price + sensitivity",
    inputsKo: "← 3_FCF (UFCF stream), 4_WACC (r), 1_Inputs (Net Debt, shares)",
    inputsEn: "← 3_FCF (UFCF stream), 4_WACC (r), 1_Inputs (Net Debt, shares)",
    outputsKo: "Final implied price + WACC × g sensitivity table",
    outputsEn: "Final implied price + WACC × g sensitivity table",
    color: "#ef4444",
    icon: "🎯",
  },
];

// ── Color Convention ─────────────────────────────────────────────────────────
const COLOR_LEGEND = [
  {
    color: "#2563eb",
    label: "BLUE",
    meaningKo: "Hard input (직접 타이핑)",
    meaningEn: "Hard input (typed value)",
    useKo: "1_Inputs 시트의 가정 값",
    useEn: "Assumption values on 1_Inputs",
  },
  {
    color: "#111827",
    label: "BLACK",
    meaningKo: "Formula (같은 시트 내 계산)",
    meaningEn: "Formula (same-sheet calculation)",
    useKo: "P&L의 sub-total, EBIT, FCF 계산",
    useEn: "P&L subtotals, EBIT, FCF calculations",
  },
  {
    color: "#16a34a",
    label: "GREEN",
    meaningKo: "Link from other sheet",
    meaningEn: "Link from another sheet",
    useKo: "2_PnL → 3_FCF로 EBIT 가져올 때",
    useEn: "Pulling EBIT from 2_PnL into 3_FCF",
  },
  {
    color: "#f97316",
    label: "ORANGE",
    meaningKo: "External link (다른 파일에서)",
    meaningEn: "External link (different workbook)",
    useKo: "Bloomberg/CIQ data drop, comp set",
    useEn: "Bloomberg/CIQ data drop, comp set",
  },
  {
    color: "#dc2626",
    label: "RED",
    meaningKo: "Warning / sanity check",
    meaningEn: "Warning / sanity check",
    useKo: "BS = 0 check, sum 검증, 'CHECK' flag",
    useEn: "BS = 0 check, sum verification, 'CHECK' flag",
  },
];

// ── Mid-year vs Year-end Data ────────────────────────────────────────────────
const DISCOUNT_DATA = (() => {
  const r = 0.10;
  const out: { year: number; yearEnd: number; midYear: number; gap: number }[] = [];
  for (let t = 1; t <= 10; t++) {
    const ye = 1 / Math.pow(1 + r, t);
    const my = 1 / Math.pow(1 + r, t - 0.5);
    out.push({ year: t, yearEnd: +ye.toFixed(4), midYear: +my.toFixed(4), gap: +(my - ye).toFixed(4) });
  }
  return out;
})();

// ── Setup Mistakes ───────────────────────────────────────────────────────────
const MISTAKES = [
  {
    n: "01",
    titleKo: "Inputs scattered across sheets",
    titleEn: "Inputs scattered across sheets",
    bodyKo: "Revenue growth %는 P&L에, Capex %는 FCF 시트에, Tax rate는 1_Inputs에 — 한 모델 안에서 가정이 흩어지면 디버깅 지옥. 표준은 1_Inputs 단일 시트에 모든 input을 모으는 것.",
    bodyEn: "Revenue growth in P&L, Capex in FCF, tax in Inputs — assumptions scattered across the workbook means debugging hell. The standard is to consolidate every input on a single 1_Inputs sheet.",
  },
  {
    n: "02",
    titleKo: "Hard-coded numbers mixed into formula columns",
    titleEn: "Hard-coded numbers mixed into formula columns",
    bodyKo: "Forecast 컬럼에 BLUE(input) 셀과 BLACK(formula) 셀이 섞이면 tracer가 무력. Forecast 컬럼은 100% 공식, Historical 컬럼만 hard input — 이 규칙이 깨지면 모델이 audit 불가능.",
    bodyEn: "Mixing BLUE (input) and BLACK (formula) cells in forecast columns breaks tracers. Forecast columns must be 100% formulas; only historical columns hold hard inputs. Break the rule and the model becomes un-auditable.",
  },
  {
    n: "03",
    titleKo: "No version control on assumption changes",
    titleEn: "No version control on assumption changes",
    bodyKo: "어제 본 base case가 오늘 재현이 안 되는 가장 흔한 이유는 누군가 1_Inputs의 값을 바꿔놓고 저장한 것. 'v1_base', 'v2_synergy', 'v3_downside'로 시트 또는 파일을 분리하는 것이 표준.",
    bodyEn: "The most common reason yesterday's base case doesn't reproduce today: someone overwrote a value in 1_Inputs and saved. The standard is separate sheets or files — 'v1_base', 'v2_synergy', 'v3_downside'.",
  },
  {
    n: "04",
    titleKo: "No sanity check row",
    titleEn: "No sanity check row",
    bodyKo: "P&L bottom-up sum vs top-down revenue, BS balance check (Assets = L+E), CF의 ending cash vs BS cash. Sanity check row가 없으면 0.5% 오류가 deal closing 직전에 발견된다.",
    bodyEn: "P&L bottom-up sum vs top-down revenue, BS balance check (Assets = L+E), ending cash CF vs BS cash. Without a sanity-check row, a 0.5% error gets discovered the night before closing.",
  },
  {
    n: "05",
    titleKo: "Hidden columns / rows",
    titleEn: "Hidden columns / rows",
    bodyKo: "전임자가 디버깅하느라 숨겨놓은 column이 그대로 인계되면 후임은 평생 못 찾는다. Hide 대신 Group(Outline)으로 — 접혀 있어도 + 표시가 보인다.",
    bodyEn: "A column the previous analyst hid for debugging becomes permanently invisible to the successor. Use Group (Outline) instead of Hide — collapsed but the + sign stays visible.",
  },
  {
    n: "06",
    titleKo: "No mid-year convention flag",
    titleEn: "No mid-year convention flag",
    bodyKo: "Year-end convention의 DCF는 mid-year보다 약 5% 낮은 결과를 낸다. 모델에 명시적인 'mid-year? Y/N' flag가 없으면 전임자와 5% 차이나는 valuation을 만들고 원인을 못 찾는 사고가 빈번하다.",
    bodyEn: "A year-end-convention DCF is ~5% below a mid-year DCF on the same inputs. Without an explicit 'mid-year? Y/N' flag in the model, you produce a valuation 5% off your predecessor's and can't trace why.",
  },
];

// ── MSFT × ATVI Template Variables ───────────────────────────────────────────
const MSFT_ATVI_VARS = [
  { cat: "Revenue", ko: "Console·PC revenue growth", en: "Console & PC revenue growth", baseKo: "+4% CAGR", baseEn: "+4% CAGR" },
  { cat: "Revenue", ko: "Mobile revenue growth (King)", en: "Mobile revenue growth (King)", baseKo: "+8% CAGR", baseEn: "+8% CAGR" },
  { cat: "Revenue", ko: "Game Pass synergy (incremental)", en: "Game Pass synergy (incremental)", baseKo: "+$2B by Y5", baseEn: "+$2B by Y5" },
  { cat: "Margin",  ko: "EBITDA margin (standalone)", en: "EBITDA margin (standalone)", baseKo: "34%", baseEn: "34%" },
  { cat: "Margin",  ko: "EBITDA margin (post-integration)", en: "EBITDA margin (post-integration)", baseKo: "37%", baseEn: "37%" },
  { cat: "Capex",   ko: "Capex / Revenue", en: "Capex / Revenue", baseKo: "5%", baseEn: "5%" },
  { cat: "Capex",   ko: "Studio acquisition reserve", en: "Studio acquisition reserve", baseKo: "$300M/yr", baseEn: "$300M/yr" },
  { cat: "WACC",    ko: "Risk-free rate (10y UST)", en: "Risk-free rate (10y UST)", baseKo: "3.8%", baseEn: "3.8%" },
  { cat: "WACC",    ko: "Equity Risk Premium", en: "Equity Risk Premium", baseKo: "5.5%", baseEn: "5.5%" },
  { cat: "WACC",    ko: "Levered β (gaming peers)", en: "Levered β (gaming peers)", baseKo: "1.05", baseEn: "1.05" },
  { cat: "Terminal", ko: "Terminal growth rate (g)", en: "Terminal growth rate (g)", baseKo: "2.5%", baseEn: "2.5%" },
  { cat: "Terminal", ko: "Exit EV/EBITDA (cross-check)", en: "Exit EV/EBITDA (cross-check)", baseKo: "14x", baseEn: "14x" },
];

// ── FAQ ───────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko ? "Excel vs Google Sheets, 어느 게 IB·PE 표준인가요?" : "Excel vs Google Sheets — which is the IB/PE standard?",
    a: (ko: boolean) => ko
      ? "Excel이 압도적 표준이다. 세 가지 이유에서다. ① 성능: 50개 sheet, 100k cells가 넘는 모델은 Sheets에서 visibly 느려진다. ② Formula library: Excel의 INDEX/MATCH, OFFSET, INDIRECT, GETPIVOTDATA가 Sheets보다 풍부하고 빠르다. ③ Audit tools: Trace Precedents/Dependents, Watch Window가 IB workflow에 깊이 통합되어 있다. Sheets는 early-stage startup의 quick-and-dirty 모델에는 충분하지만, IB·PE의 transaction model에는 부적합."
      : "Excel dominates. Three reasons. ① Performance: a 50-sheet, 100k-cell model is visibly slower in Sheets. ② Formula library: INDEX/MATCH, OFFSET, INDIRECT, GETPIVOTDATA are richer and faster in Excel. ③ Audit tools: Trace Precedents/Dependents and Watch Window are deeply embedded in IB workflow. Sheets is fine for early-stage startup quick-and-dirty modeling; not for an IB/PE transaction model.",
  },
  {
    q: (ko: boolean) => ko ? "5-sheet vs 10-sheet, 어느 게 더 좋은가요?" : "5-sheet vs 10-sheet — which is better?",
    a: (ko: boolean) => ko
      ? "복잡도에 맞춘다. 5-sheet (Inputs · P&L · FCF · WACC · Val)는 standalone DCF의 기본형. 10+sheet 구조는 다음 케이스에 등장: ① Segment breakdown (Console / PC / Mobile 별도 P&L), ② Synergy를 별도 시트로 분리, ③ Working capital을 BS 시트에서 detail로 모델링, ④ Sources & Uses (M&A deal일 때), ⑤ Comps & Football Field 별도 시트. 핵심 원칙: 시트는 적을수록 좋다 — 단, 시트 하나가 길어지면 분리한다. 한 시트가 200 row를 넘으면 보통 분리 신호."
      : "Scale with complexity. 5-sheet (Inputs · P&L · FCF · WACC · Val) is the standalone DCF baseline. 10+-sheet models appear when ① segment breakdown is needed (separate Console / PC / Mobile P&Ls), ② synergy isolated to its own sheet, ③ working capital detailed on a BS sheet, ④ Sources & Uses for an M&A deal, ⑤ Comps & Football Field broken out. Guiding rule: fewer sheets is better — until a sheet exceeds ~200 rows, that's usually the signal to split.",
  },
  {
    q: (ko: boolean) => ko ? "Bloomberg/Capital IQ 없이도 가능한가요?" : "Can I build this without Bloomberg or Capital IQ?",
    a: (ko: boolean) => ko
      ? "가능하지만 시간 비용이 5–10배다. Bloomberg/CIQ가 자동 제공하는 것: ① peer financials (5년 quarterly), ② β regression (5년 weekly), ③ 채권 yield curve (Rf 추정용), ④ comparable transactions DB. 이를 manual로 대체하려면: ① SEC EDGAR 10-K로 peer financials 다운로드, ② Yahoo Finance로 weekly price 가져와 Excel SLOPE/INTERCEPT로 β 계산, ③ FRED로 10년 국채 yield 확인, ④ Comps는 deal database 무료 source (S&P Capital IQ student license, Mergermarket free tier). 결론: 가능하다. 다만 한 deal에 추가로 20–30시간이 든다."
      : "Possible — at a 5–10x time cost. Bloomberg/CIQ delivers automatically: ① peer financials (5yr quarterly), ② β regression (5yr weekly), ③ corporate yield curves (for Rf), ④ comparable transactions database. Manually you can substitute: ① SEC EDGAR 10-Ks for peer financials, ② Yahoo Finance weekly prices into Excel's SLOPE/INTERCEPT for β, ③ FRED for 10yr Treasury yield, ④ free-tier deal databases (S&P Capital IQ student license, Mergermarket free tier). Yes, doable — but adds 20–30 hours per deal.",
  },
  {
    q: (ko: boolean) => ko ? "실수했을 때 어떻게 추적하나요?" : "How do I trace mistakes once they're in the model?",
    a: (ko: boolean) => ko
      ? "세 가지 도구를 순서대로 쓴다. ① Trace Precedents (Ctrl+[ 또는 Formulas → Trace Precedents): 의심 셀이 어디서 입력을 가져오는지 시각적으로 보여준다. ② Watch Window (Formulas → Watch Window): 핵심 cell (Implied Price, WACC, EV) 5–10개를 등록하면 어떤 input을 바꿔도 즉시 변화 추적. ③ Named ranges: 'WACC', 'Tax_Rate' 같은 의미 있는 이름으로 명명하면 formula가 자기 문서가 된다. 추가로 'CHECK' row를 P&L 마지막에 항상 둔다 — top-down revenue minus bottom-up revenue가 0인지 자동 verify."
      : "Three tools, in order. ① Trace Precedents (Ctrl+[ or Formulas → Trace Precedents) — visually shows where a suspect cell sources its inputs. ② Watch Window (Formulas → Watch Window) — register 5–10 key cells (Implied Price, WACC, EV) and any input change is instantly visible. ③ Named ranges — calling cells 'WACC' or 'Tax_Rate' makes formulas self-documenting. Plus, keep a 'CHECK' row at the bottom of P&L that auto-verifies top-down revenue minus bottom-up revenue equals zero.",
  },
  {
    q: (ko: boolean) => ko ? "Mid-year vs year-end convention 차이가 정말 5%인가요?" : "Is the mid-year vs year-end gap really 5%?",
    a: (ko: boolean) => ko
      ? "WACC 10%, 10년 forecast 기준 약 4.8% 차이가 난다. 수학: discount factor mid-year = 1/(1+r)^(t-0.5), year-end = 1/(1+r)^t. Mid-year의 factor가 √(1+r) 만큼 더 크다. WACC 10%에서 √1.10 ≈ 1.0488 — 즉 mid-year DCF는 year-end보다 모든 PV가 4.88% 더 크다. 실무 표준은 mid-year (cash flow가 연중 균일하게 발생한다는 가정이 현실적이기 때문). 단, exit multiple로 cross-check할 때는 year-end가 자연스럽다. 모델에 'mid-year? Y/N' flag를 두고 둘 다 계산할 수 있도록 설계하는 게 표준."
      : "At 10% WACC over a 10-year forecast, the gap is ~4.8%. Math: mid-year factor = 1/(1+r)^(t−0.5); year-end = 1/(1+r)^t. Mid-year's factor is larger by √(1+r). At 10% WACC, √1.10 ≈ 1.0488 — so every PV is 4.88% larger under mid-year. The practitioner standard is mid-year (cash flows arrive throughout the year, not in a single year-end pulse). For exit-multiple cross-checks, year-end is more natural. Build the model with a 'mid-year? Y/N' flag so you can run both.",
  },
];

// ── Sources ───────────────────────────────────────────────────────────────────
const SOURCES = [
  { id: 1, text: "Pignataro, P. (2022). Financial Modeling and Valuation: A Practical Guide to Investment Banking and Private Equity (2nd ed.). Wiley." },
  { id: 2, text: "Rosenbaum, J. & Pearl, J. (2020). Investment Banking: Valuation, LBOs, M&A, and IPOs (3rd ed.). Wiley." },
  { id: 3, text: "Benninga, S. (2014). Financial Modeling (4th ed.). MIT Press." },
  { id: 4, text: "Wall Street Prep. (2024). DCF Modeling Best Practices Handbook." },
  { id: 5, text: "Training The Street. (2023). Excel Best Practices for Investment Banking." },
  { id: 6, text: "Microsoft Corporation. (2022). Form 8-K Activision Blizzard Transaction — Public Filings." },
];

// ── Main ──────────────────────────────────────────────────────────────────────
export default function DcfModelSetupClient({ lang }: Props) {
  const ko = lang === "ko";

  const titleKo = "Modelling 101 Ch.1 — DCF 모델 셋업";
  const titleEn = "Modelling 101 Ch.1 — DCF Model Setup";
  const subKo = "실제 IB·PE 워크북은 어떻게 생겼나 — 5시트 구조로 시작하는 DCF 실무";
  const subEn = "What an actual IB/PE DCF workbook looks like — practitioner architecture starting with 5 sheets";
  const tagsKo = ["Excel", "Workbook", "5-sheet", "Cell Hygiene", "Naming"];
  const tagsEn = ["Excel", "Workbook", "5-sheet", "Cell Hygiene", "Naming"];

  return (
    <>
      <Header />
      <main className="flex-1 bg-white dark:bg-gray-950">

        {/* ── Masthead ── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-10">

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}
              className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-4"
            >
              <Link href={ko ? "/" : "/en"} className="hover:text-amber-600 transition-colors">
                {ko ? "홈" : "Home"}
              </Link>
              <span>›</span>
              <Link href={ko ? "/deal-101" : "/en/deal-101"} className="hover:text-amber-600 transition-colors">
                {ko ? "딜 101" : "Deal 101"}
              </Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300 font-medium">
                {ko ? "DCF 모델 셋업" : "DCF Model Setup"}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold text-white" style={{ background: ACCENT }}>
                Modelling 101
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded-full font-semibold" style={{ background: ACCENT_LIGHT, color: ACCENT }}>
                Ch.1
              </span>
              <span className="text-[11px] text-gray-400 dark:text-gray-500">
                {ko ? "18분 읽기" : "18 min read"}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-3"
            >
              {ko ? titleKo : titleEn}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
              className="text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl"
            >
              {ko ? subKo : subEn}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap gap-1.5 mt-4"
            >
              {(ko ? tagsKo : tagsEn).map((tag) => (
                <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full font-medium" style={{ background: ACCENT_LIGHT, color: ACCENT }}>
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.25 }}
              className="mt-4 flex items-center gap-2"
            >
              <Link href="/deal-101/dcf-model-setup"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${ko ? "text-white" : "text-gray-400 hover:text-gray-600"}`}
                style={ko ? { background: ACCENT } : {}}
              >한국어</Link>
              <Link href="/en/deal-101/dcf-model-setup"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${!ko ? "text-white" : "text-gray-400 hover:text-gray-600"}`}
                style={!ko ? { background: ACCENT } : {}}
              >English</Link>
            </motion.div>

            {/* Prominent cross-link to Val Ch.0 */}
            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.32 }}
              className="mt-6 rounded-xl border-2 p-4 flex items-center gap-3 flex-wrap"
              style={{ borderColor: SIBLING + "40", background: "#ecfeff" }}
            >
              <span className="text-2xl flex-shrink-0">📐</span>
              <div className="flex-1 min-w-[200px]">
                <p className="text-[12px] font-bold mb-0.5" style={{ color: SIBLING }}>
                  {ko ? "개념부터 보고 오세요" : "Start with the concept"}
                </p>
                <p className="text-[11px] text-gray-600 dark:text-gray-400">
                  {ko ? "이 모델이 왜 이렇게 구조화되는지 — Valuation Ch.0의 3대 요소를 먼저 이해하면 모든 sheet가 자연스러워진다" : "Why the model is structured this way — once you grasp the three pillars in Valuation Ch.0, every sheet becomes obvious"}
                </p>
              </div>
              <Link
                href={ko ? "/deal-101/dcf-overview" : "/en/deal-101/dcf-overview"}
                className="text-[11px] px-3 py-1.5 rounded-full font-bold text-white hover:opacity-80 transition-opacity whitespace-nowrap"
                style={{ background: SIBLING }}
              >
                {ko ? "Valuation Ch.0 →" : "Valuation Ch.0 →"}
              </Link>
            </motion.div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 pt-6 flex justify-end">
          <ShareButtons title={ko ? titleKo : titleEn} variant="top" lang={lang} />
        </div>
        <ChapterNav lang={lang} />

        {/* ── Body ── */}
        <div className="max-w-3xl mx-auto px-5 py-6 space-y-20">

          {/* ══ Section 1 — Hero / Intro ════════════════════════════════════════ */}
          <motion.section id="intro" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "왜 셋업이 가장 중요한가" : "Why Setup Matters Most"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "모델의 운명은 첫 30분에 결정된다" : "A Model's Fate Is Decided in the First 30 Minutes"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              {(ko ? [
                "IB 어소시에이트와 PE VP가 가장 자주 받는 질문: '모델 만드는 데 얼마 걸려요?' 정답은 항상 같다. '셋업이 30분, 나머지가 8시간.' 셋업 — 시트를 자르고, naming을 정하고, color convention을 박는 작업 — 이 잘 되어 있으면 valuation은 input만 바꾸면 즉시 나온다. 셋업이 망가지면 매 iteration마다 디버깅하느라 8시간이 24시간이 된다.",
                "이 장은 실무 워크북의 셋업을 처음부터 끝까지 보여준다. 5-sheet 아키텍처, cell color convention, sheet naming, named ranges, sign convention, mid-year flag — 모든 것이 '다음 사람이 이 모델을 받았을 때 BLUE만 바꿔도 답이 즉시 나온다'는 단 하나의 목표를 위해 설계됐다.",
              ] : [
                "The question IB associates and PE VPs hear most: 'How long does it take to build a model?' The answer is always the same: '30 minutes of setup, 8 hours of everything else.' Setup — cutting sheets, fixing naming, locking in the color convention — done right, valuation outputs update instantly with input changes. Done wrong, every iteration burns time on debugging.",
                "This chapter walks through workbook setup end to end. 5-sheet architecture, cell-color convention, sheet naming, named ranges, sign conventions, mid-year flag — every choice serves one goal: the next person inherits this model, edits only the BLUE cells, and gets the right answer immediately.",
              ]).map((para, j) => (
                <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">{para}</motion.p>
              ))}
            </div>
          </motion.section>

          {/* ══ Section 2 — 5-Sheet Architecture ════════════════════════════════ */}
          <motion.section id="five-sheets" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "5-시트 아키텍처" : "5-Sheet Architecture"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "Inputs · P&L · FCF · WACC · Val" : "Inputs · P&L · FCF · WACC · Val"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            {/* Workbook tabs visual */}
            <motion.div
              variants={fadeUp(0.05)}
              className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40 p-4 mb-6"
            >
              <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 dark:text-gray-500 mb-3">
                {ko ? "워크북 탭 (왼쪽에서 오른쪽으로 데이터 흐름)" : "Workbook tabs (data flows left to right)"}
              </p>
              <div className="flex items-center gap-0.5 overflow-x-auto pb-2">
                {SHEETS.map((s, i) => (
                  <div key={s.n} className="flex items-center flex-shrink-0">
                    <div
                      className="px-3 py-2 rounded-t-lg border-t-2 border-x border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 font-mono text-[11px] font-bold"
                      style={{ borderTopColor: s.color }}
                    >
                      <span className="mr-1">{s.icon}</span>
                      {s.code}
                    </div>
                    {i < SHEETS.length - 1 && (
                      <span className="text-gray-300 dark:text-gray-600 px-1">→</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Sheet detail cards */}
            <motion.div variants={stagger} className="space-y-3">
              {SHEETS.map((s, i) => (
                <motion.div
                  key={s.n}
                  variants={fadeUp(i * 0.05)}
                  className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  <div className="flex items-stretch gap-0">
                    <div className="flex-shrink-0 w-1.5" style={{ background: s.color }} />
                    <div className="flex-1 p-4">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="text-2xl" aria-hidden>{s.icon}</span>
                        <span className="font-mono text-[12px] font-bold px-2 py-0.5 rounded text-white" style={{ background: s.color }}>
                          {s.code}
                        </span>
                        <span className="text-[14px] font-bold text-gray-900 dark:text-gray-100">
                          {ko ? s.titleKo : s.titleEn}
                        </span>
                      </div>
                      <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                        {ko ? s.purposeKo : s.purposeEn}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                        <div className="rounded-lg p-2 bg-gray-50 dark:bg-gray-900/50">
                          <p className="text-gray-400 dark:text-gray-500 font-bold uppercase text-[9px] tracking-widest mb-0.5">
                            {ko ? "입력" : "Inputs"}
                          </p>
                          <p className="text-gray-700 dark:text-gray-300">{ko ? s.inputsKo : s.inputsEn}</p>
                        </div>
                        <div className="rounded-lg p-2 bg-gray-50 dark:bg-gray-900/50">
                          <p className="text-gray-400 dark:text-gray-500 font-bold uppercase text-[9px] tracking-widest mb-0.5">
                            {ko ? "출력" : "Outputs"}
                          </p>
                          <p className="text-gray-700 dark:text-gray-300">{ko ? s.outputsKo : s.outputsEn}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* ══ Section 3 — Color Convention ══════════════════════════════════════ */}
          <motion.section id="colors" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "Cell Hygiene" : "Cell Hygiene"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "셀 색상 컨벤션 — 5가지 색의 의미" : "Cell Color Convention — Five Colors, Five Meanings"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              <motion.p variants={fadeUp()} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "IB·PE의 unwritten rule: 모든 모델의 모든 셀은 5가지 중 한 색이어야 한다. 다른 분석가에게 모델을 넘길 때, 그가 BLUE만 바꿔도 답이 즉시 갱신된다는 신뢰가 이 규칙에서 나온다. 5색 컨벤션은 디버깅 시간을 약 90% 줄인다."
                  : "An unwritten rule in IB/PE: every cell in every model belongs to one of five colors. When you hand a model to another analyst, the trust that they can edit BLUE cells and the model just works comes from this rule. The 5-color convention cuts debugging time by ~90%."}
              </motion.p>
            </div>

            <motion.div variants={fadeUp(0.1)} className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
              <table className="w-full text-[12px]">
                <thead>
                  <tr style={{ background: ACCENT + "15" }}>
                    <th className="text-left py-3 px-4 font-bold text-gray-700 dark:text-gray-300 w-[80px]">
                      {ko ? "색상" : "Color"}
                    </th>
                    <th className="text-left py-3 px-4 font-bold text-gray-700 dark:text-gray-300">
                      {ko ? "의미" : "Meaning"}
                    </th>
                    <th className="text-left py-3 px-4 font-bold text-gray-700 dark:text-gray-300">
                      {ko ? "사용 예" : "Usage"}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {COLOR_LEGEND.map((c, i) => (
                    <tr key={i}>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-md flex-shrink-0 border border-gray-300" style={{ background: c.color }} />
                          <span className="font-mono font-bold text-[11px]" style={{ color: c.color }}>{c.label}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">{ko ? c.meaningKo : c.meaningEn}</td>
                      <td className="py-3 px-4 text-gray-500 dark:text-gray-400">{ko ? c.useKo : c.useEn}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            <motion.div
              variants={fadeUp(0.15)}
              className="mt-5 rounded-xl p-4 border"
              style={{ background: ACCENT_LIGHT, borderColor: ACCENT + "30" }}
            >
              <p className="text-[13px] font-bold mb-1" style={{ color: ACCENT }}>
                {ko ? "왜 이게 작동하는가" : "Why This Works"}
              </p>
              <p className="text-[13px] text-gray-700 dark:text-gray-700 leading-relaxed">
                {ko
                  ? "5색 컨벤션이 작동하는 이유는 model audit의 mental cost를 낮추기 때문이다. '이 cell이 input인가 formula인가?'를 더 이상 물어볼 필요가 없다 — 색이 답한다. 시니어가 모델을 review할 때 BLUE만 보면 가정을 즉시 파악할 수 있고, BLACK이 BLUE에서 다른 BLUE로 일관되게 흘러가는지 확인하면 모델의 logic이 검증된다."
                  : "The 5-color convention works because it lowers the mental cost of audit. You no longer ask 'is this cell an input or a formula?' — the color answers. Reviewing a model, a senior can scan only BLUE cells to grasp the assumptions, then verify BLACK formulas trace from BLUE to BLUE consistently to validate the logic."}
              </p>
            </motion.div>
          </motion.section>

          {/* ══ Section 4 — Time Series Convention + Mid-year Chart ═════════════ */}
          <motion.section id="time-series" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "Time Series 컨벤션" : "Time Series Convention"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "FY2024A · FY2025E — 그리고 mid-year의 5% 함정" : "FY2024A · FY2025E — and the 5% Mid-Year Trap"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              {(ko ? [
                "Time series 컨벤션은 작아 보이지만 모델 전체의 readability를 결정한다. Historical은 'FY2021A · FY2022A · FY2023A' (A = Actual), Forecast는 'FY2024E · FY2025E · FY2026E ...' (E = Estimate). A와 E 사이에는 빈 row 또는 색깔 구분을 둔다. 이렇게 하면 어디까지가 실적이고 어디부터가 가정인지 한눈에 보인다.",
                "더 중요한 것은 discount factor의 timing convention이다. Year-end convention은 cash flow가 매년 12월 31일에 일괄 발생한다고 가정한다. Mid-year convention은 cash flow가 6월 30일에 발생한다고 가정한다 — 즉 연중 균일 분포의 평균 시점. 둘의 차이는 √(1+r) ≈ 4–5%. 작아 보이지만 $50B deal에서 $2.5B이다.",
              ] : [
                "Time series convention looks small but determines the entire model's readability. Historical: 'FY2021A · FY2022A · FY2023A' (A = Actual). Forecast: 'FY2024E · FY2025E · FY2026E ...' (E = Estimate). Insert a blank row or color separator between A and E so the boundary between facts and assumptions is unmistakable.",
                "More important: the discount factor's timing convention. Year-end assumes cash flow lands on December 31 each year. Mid-year assumes it lands on June 30 — the midpoint of a uniformly distributed cash stream. The gap is √(1+r) ≈ 4–5%. Small as a percentage, $2.5B on a $50B deal.",
              ]).map((para, j) => (
                <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">{para}</motion.p>
              ))}
            </div>

            {/* Mid-year vs Year-end chart */}
            <motion.div
              variants={fadeUp(0.1)}
              className="rounded-xl border border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-900"
            >
              <h3 className="text-[14px] font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "Discount Factor 비교 — Mid-Year vs Year-End (WACC 10%)" : "Discount Factor — Mid-Year vs Year-End (WACC 10%)"}
              </h3>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 mb-4">
                {ko
                  ? "Mid-year의 factor가 √(1+r) ≈ 1.0488 배 더 크다 → 모든 PV가 약 4.88% 더 큰 결과"
                  : "Mid-year factors are √(1+r) ≈ 1.0488 larger → every PV is ~4.88% higher"}
              </p>
              <ResponsiveContainer width="100%" height={240}>
                <LineChart data={DISCOUNT_DATA} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="year" tick={{ fontSize: 10, fill: "#6b7280" }} tickFormatter={(v) => `Y${v}`} />
                  <YAxis domain={[0.3, 1]} tick={{ fontSize: 10, fill: "#6b7280" }} tickFormatter={(v) => v.toFixed(2)} width={45} />
                  <Tooltip
                    formatter={((v: number, n: string) => [v.toFixed(4), n === "midYear" ? "Mid-Year" : n === "yearEnd" ? "Year-End" : (ko ? "차이" : "Gap")]) as never}
                    labelFormatter={(l) => `Year ${l}`}
                    contentStyle={{ fontSize: 11, borderRadius: 8 }}
                  />
                  <Legend wrapperStyle={{ fontSize: 11 }} />
                  <Line type="monotone" dataKey="midYear" stroke={ACCENT} strokeWidth={2.5} name={ko ? "Mid-Year (표준)" : "Mid-Year (standard)"} dot={{ r: 3, fill: ACCENT }} />
                  <Line type="monotone" dataKey="yearEnd" stroke="#94a3b8" strokeWidth={2} strokeDasharray="4 4" name={ko ? "Year-End" : "Year-End"} dot={false} />
                </LineChart>
              </ResponsiveContainer>
              <p className="text-[10px] text-gray-400 mt-1">
                {ko
                  ? "* Y10 시점에서도 mid-year factor 0.4046 vs year-end factor 0.3855 — 약 4.96% 차이가 모든 forecast year에 누적된다."
                  : "* At Y10, mid-year factor 0.4046 vs year-end 0.3855 — a ~4.96% gap compounds across every forecast year."}
              </p>
            </motion.div>
          </motion.section>

          {/* ══ Section 5 — Naming Conventions ═══════════════════════════════════ */}
          <motion.section id="naming" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "Naming Conventions" : "Naming Conventions"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "Sheet names · Named ranges · Sign conventions" : "Sheet Names · Named Ranges · Sign Conventions"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 gap-4">
              {/* Sheet names */}
              <motion.div variants={fadeUp()} className="rounded-2xl border border-gray-200/70 dark:border-gray-700/60 bg-white dark:bg-gray-900/50 p-5">
                <p className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: ACCENT }}>
                  {ko ? "1. Sheet names — 숫자 prefix" : "1. Sheet Names — Numeric Prefix"}
                </p>
                <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                  {ko
                    ? "시트는 항상 왼쪽에서 오른쪽으로 데이터가 흐르도록 정렬한다. 숫자 prefix가 이 순서를 강제한다."
                    : "Sheets always order so data flows left to right. A numeric prefix enforces that order."}
                </p>
                <div className="font-mono text-[12px] bg-gray-50 dark:bg-gray-900 rounded-lg p-3 border border-gray-200 dark:border-gray-700 overflow-x-auto whitespace-nowrap">
                  <span className="text-gray-400">0_Data</span>
                  <span className="text-gray-300 mx-1">|</span>
                  <span style={{ color: SHEETS[0].color }}>1_Inputs</span>
                  <span className="text-gray-300 mx-1">|</span>
                  <span style={{ color: SHEETS[1].color }}>2_PnL</span>
                  <span className="text-gray-300 mx-1">|</span>
                  <span style={{ color: SHEETS[2].color }}>3_FCF</span>
                  <span className="text-gray-300 mx-1">|</span>
                  <span style={{ color: SHEETS[3].color }}>4_WACC</span>
                  <span className="text-gray-300 mx-1">|</span>
                  <span style={{ color: SHEETS[4].color }}>5_Val</span>
                  <span className="text-gray-300 mx-1">|</span>
                  <span className="text-rose-500">6_Checks</span>
                </div>
                <p className="text-[10px] text-gray-400 mt-2">
                  {ko ? "0 = raw data drop, 6 = sanity checks (오른쪽 끝)" : "0 = raw data drop, 6 = sanity checks (far right)"}
                </p>
              </motion.div>

              {/* Named ranges */}
              <motion.div variants={fadeUp(0.05)} className="rounded-2xl border border-gray-200/70 dark:border-gray-700/60 bg-white dark:bg-gray-900/50 p-5">
                <p className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: ACCENT }}>
                  {ko ? "2. Named ranges — 공식을 자기 문서화" : "2. Named Ranges — Self-Documenting Formulas"}
                </p>
                <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                  {ko
                    ? "Excel의 Name Manager (Ctrl+F3)에서 핵심 cell에 의미 있는 이름을 붙인다. Formula가 자기 문서화된다."
                    : "In Excel's Name Manager (Ctrl+F3), give meaningful names to key cells. Formulas become self-documenting."}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
                  <div className="rounded-lg bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 p-3">
                    <p className="text-rose-700 dark:text-rose-400 font-bold mb-1">❌ {ko ? "나쁜 예" : "Bad"}</p>
                    <p className="font-mono text-rose-900 dark:text-rose-300">=B45*(1-Inputs!C12)</p>
                  </div>
                  <div className="rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 p-3">
                    <p className="text-emerald-700 dark:text-emerald-400 font-bold mb-1">✅ {ko ? "좋은 예" : "Good"}</p>
                    <p className="font-mono text-emerald-900 dark:text-emerald-300">=EBIT*(1-Tax_Rate)</p>
                  </div>
                </div>
                <p className="text-[10px] text-gray-400 mt-2">
                  {ko ? "표준 이름: WACC, Tax_Rate, Terminal_Growth, Net_Debt, Diluted_Shares" : "Standard names: WACC, Tax_Rate, Terminal_Growth, Net_Debt, Diluted_Shares"}
                </p>
              </motion.div>

              {/* Sign conventions */}
              <motion.div variants={fadeUp(0.1)} className="rounded-2xl border border-gray-200/70 dark:border-gray-700/60 bg-white dark:bg-gray-900/50 p-5">
                <p className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: ACCENT }}>
                  {ko ? "3. Sign conventions — 한 번 정하고 절대 바꾸지 않는다" : "3. Sign Conventions — Pick One, Never Change"}
                </p>
                <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                  {ko
                    ? "Outflow를 어떻게 표기할지 두 가지 방법이 있고, 둘 다 valid하다. 단, 모델 전체에서 일관성이 필수다."
                    : "Two valid ways to denote outflows; the rule is consistency across the entire model."}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-3">
                    <p className="font-bold text-gray-700 dark:text-gray-300 mb-1">{ko ? "방식 A — Build positive, subtract" : "Method A — Build positive, subtract"}</p>
                    <p className="font-mono text-gray-600 dark:text-gray-400">Capex = +500</p>
                    <p className="font-mono text-gray-600 dark:text-gray-400">FCF = EBIT(1−t) + D&A − Capex − ΔNWC</p>
                  </div>
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-3">
                    <p className="font-bold text-gray-700 dark:text-gray-300 mb-1">{ko ? "방식 B — Build negative, sum" : "Method B — Build negative, sum"}</p>
                    <p className="font-mono text-gray-600 dark:text-gray-400">Capex = −500</p>
                    <p className="font-mono text-gray-600 dark:text-gray-400">FCF = SUM(EBIT(1−t), D&A, Capex, ΔNWC)</p>
                  </div>
                </div>
                <p className="text-[10px] text-gray-400 mt-2">
                  {ko ? "→ 두 방식 모두 valid. 단, 동일 모델에서 섞으면 sign error가 valuation을 망친다." : "→ Both valid. Mixing within one model produces sign errors that wreck valuations."}
                </p>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* ══ Section 6 — Common Setup Mistakes ═══════════════════════════════ */}
          <motion.section id="mistakes" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "흔한 셋업 실수" : "Common Setup Mistakes"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "6가지 — 그리고 어떻게 피하는가" : "Six of Them — and How to Avoid Each"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {MISTAKES.map((m, i) => (
                <motion.div
                  key={m.n}
                  variants={fadeUp(i * 0.05)}
                  className="rounded-2xl border border-gray-200/70 dark:border-gray-700/60 bg-white dark:bg-gray-900/50 p-5"
                >
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-[14px] font-black flex-shrink-0" style={{ color: ACCENT }}>
                      {m.n}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[13px] font-bold text-gray-900 dark:text-gray-100 mb-2">
                        {ko ? m.titleKo : m.titleEn}
                      </h3>
                      <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed">
                        {ko ? m.bodyKo : m.bodyEn}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* ══ Section 7 — Template Walkthrough: MSFT × ATVI ═══════════════════ */}
          <motion.section id="msft-atvi" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "Template Walkthrough" : "Template Walkthrough"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "Microsoft × Activision에 5-sheet 적용하기" : "Applying 5-Sheet to Microsoft × Activision"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              {(ko ? [
                "이론을 실제 deal에 적용해 본다. Microsoft × Activision Blizzard ($68.7B, 2022 발표). 5-sheet 워크북을 셋업한다면, 1_Inputs 시트에 다음 변수들이 BLUE cell로 들어간다.",
                "Revenue forecast은 세 segment로 자른다: Console (Xbox + PS5 + Switch에 출시되는 IP), PC (Battle.net), Mobile (King — Candy Crush). 각 segment의 growth rate를 별도로 모델링하고, segment별 EBITDA margin도 분리한다 (mobile이 더 높은 margin).",
                "Synergy는 두 가지 방법이 있다. (a) 1_Inputs에 synergy line을 추가해 P&L에 직접 반영, (b) 별도의 synergy sheet (6_Synergy)에 분리해 'standalone DCF + synergy DCF'로 표시. 후자가 board presentation에 유리 — 시너지의 기여를 명시적으로 보여줄 수 있다.",
              ] : [
                "Apply the theory to a real deal. Microsoft × Activision Blizzard ($68.7B, announced 2022). Setting up a 5-sheet workbook, the following variables land as BLUE cells in 1_Inputs.",
                "Revenue forecast splits into three segments: Console (IP shipping on Xbox + PS5 + Switch), PC (Battle.net), Mobile (King — Candy Crush). Each segment models growth separately, and EBITDA margin breaks out by segment (mobile higher).",
                "Synergy has two routings. (a) Add a synergy line to 1_Inputs that flows into P&L directly, or (b) isolate it on a separate 6_Synergy sheet and present as 'standalone DCF + synergy DCF'. The latter wins in a board presentation — synergy's contribution is explicit.",
              ]).map((para, j) => (
                <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">{para}</motion.p>
              ))}
            </div>

            <motion.div variants={fadeUp(0.1)} className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
              <table className="w-full text-[12px]">
                <thead>
                  <tr style={{ background: ACCENT + "15" }}>
                    <th className="text-left py-3 px-4 font-bold text-gray-700 dark:text-gray-300 w-[100px]">
                      {ko ? "카테고리" : "Category"}
                    </th>
                    <th className="text-left py-3 px-4 font-bold text-gray-700 dark:text-gray-300">
                      {ko ? "변수" : "Variable"}
                    </th>
                    <th className="text-left py-3 px-4 font-bold text-gray-700 dark:text-gray-300 w-[120px]">
                      {ko ? "Base case" : "Base case"}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {MSFT_ATVI_VARS.map((v, i) => (
                    <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-900/50">
                      <td className="py-2 px-4">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: ACCENT_LIGHT, color: ACCENT }}>
                          {v.cat}
                        </span>
                      </td>
                      <td className="py-2 px-4 text-gray-700 dark:text-gray-300">{ko ? v.ko : v.en}</td>
                      <td className="py-2 px-4 font-mono font-semibold text-blue-700 dark:text-blue-400">{ko ? v.baseKo : v.baseEn}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            <motion.div variants={fadeUp(0.15)} className="mt-4 flex items-center gap-3 flex-wrap">
              <Link
                href={ko ? "/deals/microsoft-activision" : "/en/deals/microsoft-activision"}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-semibold text-white transition-opacity hover:opacity-80"
                style={{ background: ACCENT }}
              >
                🎮 {ko ? "Microsoft × Activision 딜 전체 보기 →" : "Full Microsoft × Activision Deal →"}
              </Link>
              <span className="text-[11px] text-gray-400 dark:text-gray-500">
                {ko ? "FTC, CMA, Sony 반발, $68.7B 최종 closing" : "FTC, CMA, Sony objections, $68.7B final closing"}
              </span>
            </motion.div>
          </motion.section>

          {/* ══ Section 8 — REVERSE CROSS-LINK ═══════════════════════════════════ */}
          <motion.section id="reverse-cross-link" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div
              variants={fadeUp()}
              className="rounded-3xl p-8 border-2 relative overflow-hidden"
              style={{ borderColor: SIBLING, background: "linear-gradient(135deg, #ecfeff 0%, #fffbeb 100%)" }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10 text-[120px] leading-none -mr-4 -mt-4 select-none">💻</div>
              <p className="text-[11px] font-black uppercase tracking-widest mb-3" style={{ color: SIBLING }}>
                {ko ? "개념으로 돌아가기 — Valuation 시리즈" : "Back to the Concept — Valuation Series"}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                {ko ? "빌드 다음 → 개념 심화" : "After the Build → Deepen the Concept"}
              </h2>
              <p className="text-[14px] text-gray-700 leading-relaxed mb-6 max-w-xl">
                {ko
                  ? "5개의 시트가 왜 그렇게 구조화되는지 — Inputs가 왜 single source여야 하는지, WACC이 왜 별도 시트인지, Terminal이 왜 EV의 60–80%를 차지하는지 — 그 이론적 근거가 Valuation Ch.0에 있다. 모델을 만들기 시작하면 개념이 더 명확히 보인다."
                  : "Why the five sheets are structured this way — why Inputs must be single-source, why WACC deserves its own sheet, why Terminal can be 60–80% of EV — the theoretical reasoning lives in Valuation Ch.0. Starting to build makes the concepts sharper."}
              </p>
              <Link
                href={ko ? "/deal-101/dcf-overview" : "/en/deal-101/dcf-overview"}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold text-white hover:opacity-90 transition-opacity shadow-md"
                style={{ background: SIBLING }}
              >
                📐 {ko ? "Valuation Ch.0 — DCF란 무엇인가" : "Valuation Ch.0 — What Is DCF?"}
                <span className="text-lg">→</span>
              </Link>
              <p className="text-[10px] text-gray-500 mt-3">
                {ko ? "15분 읽기 · 3대 요소 · 절대가치 vs 상대가치 · MSFT × ATVI" : "15 min read · Three pillars · Intrinsic vs relative · MSFT × ATVI"}
              </p>
            </motion.div>
          </motion.section>

          {/* ══ Section 9 — Next Chapters Preview ═══════════════════════════════ */}
          <motion.section id="roadmap" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "시리즈 로드맵" : "Series Roadmap"}
              </p>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "Modelling 101 — 다음 챕터들" : "Modelling 101 — Next Chapters"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={stagger} className="space-y-2">
              {MODEL_SERIES.map((ch, i) => (
                <motion.div key={ch.slug} variants={fadeUp(i * 0.04)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl border ${
                    ch.ch === THIS_CH
                      ? "border-amber-300 dark:border-amber-700 bg-amber-50/60 dark:bg-amber-900/20"
                      : ch.published
                      ? "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/50 hover:border-amber-300"
                      : "border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30 opacity-60"
                  }`}
                >
                  <span className="font-mono text-[11px] font-bold w-10 flex-shrink-0" style={{ color: ACCENT }}>
                    Ch.{ch.ch}
                  </span>
                  <span className="flex-1 text-[13px] font-semibold text-gray-800 dark:text-gray-200">
                    {ch.title(ko).replace(/^Ch\.\d+\s*/, "")}
                  </span>
                  {ch.ch === THIS_CH ? (
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-bold text-white" style={{ background: ACCENT }}>
                      {ko ? "현재" : "Current"}
                    </span>
                  ) : ch.published ? (
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                      {ko ? "공개" : "Published"}
                    </span>
                  ) : (
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-medium bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                      {ko ? "준비 중" : "Coming Soon"}
                    </span>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* ── Share — mid ─────────────────────────────────────────────── */}
          <div className="flex justify-end -mt-8">
            <ShareButtons title={ko ? titleKo : titleEn} variant="mid" lang={lang} />
          </div>

          {/* ══ Section 10 — FAQ ═════════════════════════════════════════════════ */}
          <motion.section id="faq" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>FAQ</p>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
              </h2>
            </motion.div>
            <motion.div variants={fadeUp(0.05)}>
              <FaqAccordion items={FAQS.map((f) => ({ q: f.q(ko), a: f.a(ko) }))} accent={ACCENT} />
            </motion.div>
          </motion.section>

          {/* ══ Series Nav (bottom) ═════════════════════════════════════════════ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="flex items-center justify-between mb-4">
              <h3 className="text-[13px] font-bold text-gray-600 dark:text-gray-400">
                {ko ? "Modelling 101 시리즈" : "Modelling 101 Series"}
              </h3>
            </motion.div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={ko ? "/deal-101/dcf-overview" : "/en/deal-101/dcf-overview"}
                className="text-[12px] px-4 py-2 rounded-full text-white transition-opacity hover:opacity-80"
                style={{ background: SIBLING }}
              >
                ← {ko ? "Valuation Ch.0 — DCF란 무엇인가" : "Valuation Ch.0 — What Is DCF?"}
              </Link>
              <Link
                href={ko ? "/deal-101" : "/en/deal-101"}
                className="text-[12px] px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-amber-300 hover:text-amber-600 transition-colors"
              >
                {ko ? "딜 101 카탈로그 →" : "Deal 101 Catalog →"}
              </Link>
            </div>
          </motion.section>

          {/* ══ Sources ══════════════════════════════════════════════════════════ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP} className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <motion.h3 variants={fadeUp()} className="text-[13px] font-bold text-gray-500 dark:text-gray-400 mb-4">
              {ko ? "참고 자료" : "References"}
            </motion.h3>
            <motion.ol variants={stagger} className="space-y-2">
              {SOURCES.map((s) => (
                <motion.li key={s.id} variants={fadeUp()} className="text-[11px] text-gray-400 dark:text-gray-500 leading-relaxed flex gap-2">
                  <span className="font-bold flex-shrink-0">[{s.id}]</span>
                  <span>{s.text}</span>
                </motion.li>
              ))}
            </motion.ol>
          </motion.section>

          {/* ── Share — bottom ──────────────────────────────────────────── */}
          <div className="flex justify-end pb-4">
            <ShareButtons title={ko ? titleKo : titleEn} variant="bottom" lang={lang} />
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
