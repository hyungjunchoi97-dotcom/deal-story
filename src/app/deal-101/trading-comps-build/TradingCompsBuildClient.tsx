"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell, LabelList,
} from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";

// ── Types ─────────────────────────────────────────────────────────────────────
type Lang = "ko" | "en";
interface Props { lang: Lang; }

// ── Accent ────────────────────────────────────────────────────────────────────
const ACCENT = "#f59e0b"; // amber-500 (Modelling 시리즈)
const ACCENT_LIGHT = "#fffbeb"; // amber-50
const SIBLING = "#0891b2"; // cyan-600 (Valuation 시리즈)

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
  { slug: "dcf-model-setup",         ch: 1, title: (ko: boolean) => ko ? "Ch.1 셋업"           : "Ch.1 Setup",            published: true  },
  { slug: "trading-comps-build",     ch: 2, title: (ko: boolean) => ko ? "Ch.2 Trading Build"  : "Ch.2 Trading Build",    published: true  },
  { slug: "transaction-comps-build", ch: 3, title: (ko: boolean) => ko ? "Ch.3 Txn Build"      : "Ch.3 Txn Build",        published: true  },
  { slug: "football-field-build",    ch: 4, title: (ko: boolean) => ko ? "Ch.4 Football Field" : "Ch.4 Football Field",   published: false },
];
const THIS_CH = 2;

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
              <span key={ch.slug} className="text-[11px] px-3 py-1.5 rounded-full font-medium text-gray-300 dark:text-gray-600 bg-gray-50 dark:bg-gray-900 cursor-not-allowed">
                {ch.title(ko)} · {ko ? "준비 중" : "Soon"}
              </span>
            );
          }
          return (
            <Link key={ch.slug} href={`${base}/${ch.slug}`}
              className={`text-[11px] px-3 py-1.5 rounded-full font-medium transition-colors ${
                isCurrent ? "text-white" : "text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
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

// ── Data Sources ─────────────────────────────────────────────────────────────
const SOURCES_COMP = [
  { name: "Capital IQ (S&P)", costKo: "$$$",      strengthKo: "IB 표준 · 가장 상세한 financial detail · cell function (=CIQ()) live link", strengthEn: "IB standard · richest financial detail · cell function (=CIQ()) live link", icon: "📊" },
  { name: "Bloomberg (BLP)",   costKo: "$$$",      strengthKo: "real-time price · BEst consensus · 강력한 screener · BICS·BCLASS",            strengthEn: "real-time price · BEst consensus · strong screener · BICS/BCLASS",          icon: "💹" },
  { name: "FactSet",           costKo: "$$$",      strengthKo: "cleaner UI · 빠른 historical multiples · LionShares ownership",                strengthEn: "cleaner UI · fast historical multiples · LionShares ownership",            icon: "🦁" },
  { name: "PitchBook",         costKo: "$$",       strengthKo: "PE-focused · private deal coverage 강함 · public peer set은 gap 존재",       strengthEn: "PE-focused · strong private deal coverage · gaps in public peer set",      icon: "🎯" },
];

// ── Screening Funnel (CIQ steps) ─────────────────────────────────────────────
const FUNNEL = [
  { stepKo: "1. Industry Code",           stepEn: "1. Industry Code",            n: 350, color: "#fcd34d" },
  { stepKo: "2. Geography",                stepEn: "2. Geography",                 n: 180, color: "#fbbf24" },
  { stepKo: "3. Market Cap",               stepEn: "3. Market Cap",                n: 80,  color: "#f59e0b" },
  { stepKo: "4. Business Model",           stepEn: "4. Business Model",            n: 25,  color: "#d97706" },
  { stepKo: "5. Financial Health",         stepEn: "5. Financial Health",          n: 15,  color: "#b45309" },
  { stepKo: "6. Manual Curation",          stepEn: "6. Manual Curation",           n: 8,   color: "#92400e" },
];

// ── 6 Filter Steps Detail ────────────────────────────────────────────────────
const FILTER_DETAIL = [
  {
    n: "01",
    titleKo: "Industry Code",
    titleEn: "Industry Code",
    fieldKo: "CIQ filter:",
    code: "Primary GICS Code = 50202010 (Interactive Home Entertainment)",
    altKo: "대안: SIC 7372, NAICS 511210",
    altEn: "Alternates: SIC 7372, NAICS 511210",
    outputKo: "Output: ~350 names",
    outputEn: "Output: ~350 names",
  },
  {
    n: "02",
    titleKo: "Geography",
    titleEn: "Geography",
    fieldKo: "CIQ filter:",
    code: "HQ Country IN (US, JP, KR, DE, FR, UK, IT, SE, NL, FI)",
    altKo: "Developed Markets — IB 표준 peer pool",
    altEn: "Developed Markets — IB standard peer pool",
    outputKo: "Output: ~180 names",
    outputEn: "Output: ~180 names",
  },
  {
    n: "03",
    titleKo: "Market Cap Range",
    titleEn: "Market Cap Range",
    fieldKo: "CIQ filter ($70B target):",
    code: "Market Cap BETWEEN $5B AND $200B",
    altKo: "±10x target size band",
    altEn: "±10x target size band",
    outputKo: "Output: ~80 names",
    outputEn: "Output: ~80 names",
  },
  {
    n: "04",
    titleKo: "Business Model Similarity",
    titleEn: "Business Model Similarity",
    fieldKo: "CIQ multi-filter:",
    code: "LTM EBITDA Margin BETWEEN 15% AND 50% AND Revenue 3y CAGR BETWEEN 5% AND 30% AND LTM Revenue > $500M",
    altKo: "Margin·growth·scale 3축 동시 적용",
    altEn: "Margin / growth / scale on three axes simultaneously",
    outputKo: "Output: ~25 names",
    outputEn: "Output: ~25 names",
  },
  {
    n: "05",
    titleKo: "Financial Health",
    titleEn: "Financial Health",
    fieldKo: "CIQ filter:",
    code: "LTM EBITDA > 0 AND Net Debt / EBITDA > -3x",
    altKo: "Distressed 및 cash-rich outlier 제거",
    altEn: "Remove distressed and cash-rich outliers",
    outputKo: "Output: ~15 names",
    outputEn: "Output: ~15 names",
  },
  {
    n: "06",
    titleKo: "Manual Curation",
    titleEn: "Manual Curation",
    fieldKo: "Senior associate review:",
    code: "Reject pure-mobile (Glu), state-influenced (full Tencent scope) → final 8 names",
    altKo: "EA · Take-Two · Ubisoft · Nintendo · NEXON · NetEase · Capcom · Square Enix",
    altEn: "EA · Take-Two · Ubisoft · Nintendo · NEXON · NetEase · Capcom · Square Enix",
    outputKo: "Final: 8 names",
    outputEn: "Final: 8 names",
  },
];

// ── 4-Sheet Workbook ─────────────────────────────────────────────────────────
const SHEETS = [
  {
    n: 1, code: "1_Universe", color: "#fcd34d", icon: "📋",
    titleKo: "Universe (Long List)",
    titleEn: "Universe (Long List)",
    purposeKo: "50–80개 screening candidate 전체. Justification 컬럼으로 yes/no 결정 audit trail 유지.",
    purposeEn: "All 50–80 screening candidates. A 'Justification' column keeps a yes/no decision audit trail.",
    rowsKo: "Ticker · Name · Country · Mkt Cap · LTM Revenue · LTM EBITDA · Margin · Keep? (Y/N) · Reason",
    rowsEn: "Ticker · Name · Country · Mkt Cap · LTM Revenue · LTM EBITDA · Margin · Keep? (Y/N) · Reason",
  },
  {
    n: 2, code: "2_Comps", color: "#f59e0b", icon: "📊",
    titleKo: "Comps (Final 8–12)",
    titleEn: "Comps (Final 8–12)",
    purposeKo: "Universe에서 final로 선택된 peer. TEV 컴포넌트 전부 분해, NTM·LTM 멀티플 자동 계산.",
    purposeEn: "Peers selected from Universe. All TEV components decomposed, NTM/LTM multiples auto-computed.",
    rowsKo: "Ticker · Mkt Cap · Debt · Cash · Pref · MI · OpLease · TEV · NTM Rev · NTM EBITDA · LTM 동일 · 모든 멀티플",
    rowsEn: "Ticker · Mkt Cap · Debt · Cash · Pref · MI · OpLease · TEV · NTM Rev · NTM EBITDA · same for LTM · all multiples",
  },
  {
    n: 3, code: "3_Stats", color: "#d97706", icon: "📈",
    titleKo: "Stats",
    titleEn: "Stats",
    purposeKo: "Mean / Median / 25th / 75th / Min / Max — 모든 multiple에 대해. Hi/Lo trimmed mean 옵션.",
    purposeEn: "Mean / Median / 25th / 75th / Min / Max — for every multiple. Hi/Lo trimmed mean is optional.",
    rowsKo: "NTM EV/EBITDA · NTM EV/Sales · LTM EV/EBITDA · LTM EV/Sales · P/E · 각각 6개 통계",
    rowsEn: "NTM EV/EBITDA · NTM EV/Sales · LTM EV/EBITDA · LTM EV/Sales · P/E · all six statistics each",
  },
  {
    n: 4, code: "4_Output", color: "#b45309", icon: "🎯",
    titleKo: "Output (Football Field Input)",
    titleEn: "Output (Football Field Input)",
    purposeKo: "선택된 multiple range를 target metric에 적용 → implied EV range → equity range. Football field용 input.",
    purposeEn: "Apply selected multiple range to target metric → implied EV range → equity range. Input for football field.",
    rowsKo: "Selected range (25th–75th) · Target metric · Implied EV · Less Net Debt · Equity · /Shares · Implied Price",
    rowsEn: "Selected range (25th–75th) · Target metric · Implied EV · Less Net Debt · Equity · /Shares · Implied Price",
  },
];

// ── Sanity Checks ────────────────────────────────────────────────────────────
const SANITY = [
  { ko: "All TEVs reconcile to market cap + net debt + adjustments", en: "All TEVs reconcile to market cap + net debt + adjustments" },
  { ko: "All NTM forecasts have ≥3 analyst coverage (else flag)",      en: "All NTM forecasts have ≥3 analyst coverage (else flag)" },
  { ko: "No peers in transition (mid-divestment, restructuring)",      en: "No peers in transition (mid-divestment, restructuring)" },
  { ko: "Median is within 25th–75th range (no extreme skew)",          en: "Median sits within 25th–75th range (no extreme skew)" },
  { ko: "FX uniform USD",                                              en: "FX uniformly converted to USD" },
  { ko: "Footnote each peer with justification",                       en: "Footnote each peer with justification" },
];

// ── Common Errors ───────────────────────────────────────────────────────────
const ERRORS = [
  { n: "01", titleKo: "Static cell references instead of CIQ live links", titleEn: "Static cell references instead of CIQ live links", bodyKo: "Price를 hard code하면 다음 주 model open할 때 outdated. =CIQ() 또는 BDP/BDH live link 필수.", bodyEn: "Hard-coding price means the next time the model opens, it's outdated. =CIQ() or BDP/BDH live links are mandatory." },
  { n: "02", titleKo: "Mixing fiscal years without stub adjustment",      titleEn: "Mixing fiscal years without stub adjustment",       bodyKo: "March FY (Japan) 회사와 December FY 회사를 같은 NTM column에 둠. Stub-period로 normalize 필요.",  bodyEn: "Mixing March FY (Japan) firms with December FY firms in one NTM column. Normalize via stub-period." },
  { n: "03", titleKo: "Hard-coded TEV when one component changes",         titleEn: "Hard-coded TEV when one component changes",          bodyKo: "Debt 또는 Cash를 manual로 적으면 다음 10-Q 업데이트 시 TEV가 안 바뀜. 전부 link.",              bodyEn: "Manually entering Debt or Cash means TEV doesn't move on the next 10-Q. Link everything." },
  { n: "04", titleKo: "Missing operating lease for pre/post-2019 mix",     titleEn: "Missing operating lease for pre/post-2019 mix",      bodyKo: "ASC 842 / IFRS 16 이전 peer와 이후 peer가 섞이면 multiple 5–15% 왜곡. IQ_OPER_LEASE 컬럼 항상 포함.", bodyEn: "Mixing pre/post-ASC 842 / IFRS 16 peers distorts multiples 5–15%. Always include the IQ_OPER_LEASE column." },
  { n: "05", titleKo: "Including peer's own subsidiary as separate peer",  titleEn: "Including peer's own subsidiary as separate peer",   bodyKo: "Activision Blizzard와 King Digital을 별도 peer로 추가 (King은 ATVI의 100% sub) — 같은 cash flow를 두 번 셈.",     bodyEn: "Adding Activision Blizzard and King Digital as separate peers (King is 100% owned by ATVI) — double-counts the same cash flow." },
  { n: "06", titleKo: "No transparency on Yes/No keep decisions",          titleEn: "No transparency on Yes/No keep decisions",            bodyKo: "Universe sheet에 reason column 없이 peer를 reject. Senior 리뷰 시 'why not Ubisoft?' 질문에 답 못함.",          bodyEn: "Rejecting peers on the Universe sheet without a 'reason' column. When seniors ask 'why not Ubisoft?', you can't answer." },
];

// ── Sources ──────────────────────────────────────────────────────────────────
const SOURCES = [
  { id: 1, text: "S&P Capital IQ Pro — Comparable Companies Analysis User Guide (2024 ed.)." },
  { id: 2, text: "Pignataro, P. (2022). Financial Modeling and Valuation (2nd ed.). Wiley." },
  { id: 3, text: "Rosenbaum, J. & Pearl, J. (2020). Investment Banking: Valuation, LBOs, M&A, and IPOs (3rd ed.). Wiley." },
  { id: 4, text: "Bloomberg L.P. — BEst Estimates & Excel Add-in Reference (BDP / BDH / BEst function library)." },
  { id: 5, text: "Wall Street Prep. (2024). Comparable Company Analysis Build Handbook." },
  { id: 6, text: "FASB ASC 842 / IASB IFRS 16 — Lease Accounting Standards." },
];

// ── FAQ ──────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko ? "Capital IQ 없이도 Trading Comps build이 가능한가?" : "Can I build Trading Comps without Capital IQ?",
    a: (ko: boolean) => ko
      ? "가능하다. 단 시간 비용이 3–5배. CIQ가 자동 제공하는 것을 manual로 대체: ① SEC EDGAR 10-K로 peer financials, ② Yahoo Finance·StockAnalysis.com으로 historical prices·multiples, ③ Bloomberg consensus 대신 sell-side report 직접 (또는 무료 SimplyWall.St·Koyfin), ④ Operating lease는 10-K Notes에서 직접 추출. 단점: live link 없어서 매주 manual refresh 필요. 실무에서는 PE associate가 CIQ 라이센스 없이 starting screen만 free tier로 (~$500/month 가입)하는 케이스 있음."
      : "Yes, at 3–5x the time cost. Manual substitutes for CIQ's automations: ① SEC EDGAR 10-Ks for peer financials, ② Yahoo Finance / StockAnalysis.com for historical prices and multiples, ③ direct sell-side reports (or free Koyfin / SimplyWall.St) instead of Bloomberg consensus, ④ pull operating leases manually from 10-K Notes. Downside: no live link means weekly manual refresh. In practice, PE associates without CIQ licenses subscribe to a starter-tier (~$500/month).",
  },
  {
    q: (ko: boolean) => ko ? "Peer가 8개보다 적게 나오면?" : "What if fewer than 8 peers come out?",
    a: (ko: boolean) => ko
      ? "Three options. ① Broaden filter (geography를 US-only에서 Developed Markets로, market cap range를 ±5x에서 ±10x로). ② Adjacent industry inclusion + adjustment factor (예: pure-play 없으면 일반 entertainment를 포함하고 margin spread 조정). ③ Build with 5 peers + 분명히 표시 ('limited peer set' 경고를 footnote에 기입). 실제 fairness opinion에서도 narrow industry는 5–6 peer로 진행되는 경우 있음 — 단 conclusion에 disclaimer 필요."
      : "Three options. ① Broaden filters (geography from US-only to Developed Markets, cap range from ±5x to ±10x). ② Include adjacent industry + adjustment factor (no pure-play → include general entertainment and adjust for margin spread). ③ Build with 5 peers and flag clearly ('limited peer set' as a footnote). Real fairness opinions sometimes run with 5–6 peers in narrow industries — with a disclaimer in the conclusion.",
  },
  {
    q: (ko: boolean) => ko ? "Excel vs Google Sheets — Trading Comps에는 어느 게 낫나?" : "Excel vs Google Sheets — which fits Trading Comps?",
    a: (ko: boolean) => ko
      ? "Excel이 압도적이다. 두 가지 이유. ① CIQ·Bloomberg·FactSet의 cell function이 Excel addin으로만 동작 — Sheets에는 third-party connector가 있지만 불안정. ② 4-sheet 구조 · 100+ cells의 multiple calculation은 Sheets에서 느려진다. 단, 첫 screening (Universe) 단계에서 share·collaborate가 필요하면 Sheets로 시작해서 final 8개 결정 후 Excel로 옮기는 hybrid도 흔하다."
      : "Excel dominates, for two reasons. ① Cell functions in CIQ / Bloomberg / FactSet work as Excel add-ins; third-party Sheets connectors are unreliable. ② A 4-sheet structure with 100+ multiple calculations gets sluggish in Sheets. That said, when screening (Universe) needs collaboration, a common hybrid is: start in Sheets, then once final 8 are picked, migrate to Excel.",
  },
  {
    q: (ko: boolean) => ko ? "NTM consensus가 stale하면 어떻게 처리?" : "How do you handle stale NTM consensus?",
    a: (ko: boolean) => ko
      ? "두 가지 방법. ① Bloomberg BEst의 'analysts updated last 30 days' filter를 켜서 fresh estimate만 사용 — peer당 estimate 분포의 quality check. ② Stale 발견되면 (예: earnings 직후 yet-to-update), 직접 다음 quarter consensus를 build (sell-side reports의 next 4 quarters EBITDA average). Capital IQ는 'Last Estimate Date'를 컬럼으로 노출 — 30일 이상 지난 peer는 flag로 표시 후 senior에게 보고."
      : "Two methods. ① Turn on Bloomberg BEst's 'analysts updated last 30 days' filter for fresh-only estimates — quality-checking the distribution per peer. ② When stale (e.g. post-earnings before refresh), build next-quarter consensus by hand: average the next-4-quarter EBITDA from sell-side reports. CIQ exposes 'Last Estimate Date' as a column — flag peers >30 days stale and escalate to seniors.",
  },
  {
    q: (ko: boolean) => ko ? "Football Field에 Trading Comps를 어떻게 입력하나?" : "How does Trading Comps feed the Football Field?",
    a: (ko: boolean) => ko
      ? "Sheet 4 (Output)이 football field input format이다. 표준 입력은 (Low, High, Mid) 3-tuple — Low = 25th percentile multiple × target metric, High = 75th percentile, Mid = median. 각 multiple type (NTM EV/EBITDA, LTM EV/EBITDA, EV/Sales) 별로 별도 row. Football Field에서는 horizontal bar chart로 plotted (Val Ch.3 / Modelling Ch.4에서 다룸)."
      : "Sheet 4 (Output) is in football-field input format. The standard input is a (Low, High, Mid) triplet — Low = 25th-percentile multiple × target metric, High = 75th, Mid = median. One row per multiple type (NTM EV/EBITDA, LTM EV/EBITDA, EV/Sales). The football field renders them as a horizontal bar chart (covered in Val Ch.3 / Modelling Ch.4).",
  },
];

// ── Main ─────────────────────────────────────────────────────────────────────
export default function TradingCompsBuildClient({ lang }: Props) {
  const ko = lang === "ko";

  const titleKo = "Modelling 101 Ch.2 — Trading Comps Build (CIQ)";
  const titleEn = "Modelling 101 Ch.2 — Trading Comps Build (CIQ)";
  const subKo = "Capital IQ 스크리닝 → 4시트 Excel 워크북 → Football Field input ready";
  const subEn = "From Capital IQ screening to a 4-sheet Excel workbook to football-field-ready output";
  const tagsKo = ["Capital IQ", "Excel", "4-sheet", "TEV", "NTM Multiple", "Screening"];
  const tagsEn = ["Capital IQ", "Excel", "4-sheet", "TEV", "NTM Multiple", "Screening"];

  return (
    <>
      <Header />
      <main className="flex-1 bg-white dark:bg-gray-950">

        {/* ── Masthead ── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-10">

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}
              className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-4"
            >
              <Link href={ko ? "/" : "/en"} className="hover:text-amber-600 transition-colors">{ko ? "홈" : "Home"}</Link>
              <span>›</span>
              <Link href={ko ? "/deal-101" : "/en/deal-101"} className="hover:text-amber-600 transition-colors">{ko ? "딜 101" : "Deal 101"}</Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300 font-medium">{ko ? "Trading Comps Build" : "Trading Comps Build"}</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold text-white" style={{ background: ACCENT }}>
                Modelling 101
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded-full font-semibold" style={{ background: ACCENT_LIGHT, color: ACCENT }}>Ch.2</span>
              <span className="text-[11px] text-gray-400 dark:text-gray-500">{ko ? "20분 읽기" : "20 min read"}</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-3"
            >
              {ko ? titleKo : titleEn}
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
              className="text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl"
            >
              {ko ? subKo : subEn}
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap gap-1.5 mt-4"
            >
              {(ko ? tagsKo : tagsEn).map((tag) => (
                <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full font-medium" style={{ background: ACCENT_LIGHT, color: ACCENT }}>
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.25 }}
              className="mt-4 flex items-center gap-2"
            >
              <Link href="/deal-101/trading-comps-build"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${ko ? "text-white" : "text-gray-400 hover:text-gray-600"}`}
                style={ko ? { background: ACCENT } : {}}
              >한국어</Link>
              <Link href="/en/deal-101/trading-comps-build"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${!ko ? "text-white" : "text-gray-400 hover:text-gray-600"}`}
                style={!ko ? { background: ACCENT } : {}}
              >English</Link>
            </motion.div>

            {/* Prominent cross-link to Val Ch.1 */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.32 }}
              className="mt-6 rounded-xl border-2 p-4 flex items-center gap-3 flex-wrap"
              style={{ borderColor: SIBLING + "40", background: "#ecfeff" }}
            >
              <span className="text-2xl flex-shrink-0">📐</span>
              <div className="flex-1 min-w-[200px]">
                <p className="text-[12px] font-bold mb-0.5" style={{ color: SIBLING }}>
                  {ko ? "개념부터 보고 오세요" : "Start with the concept"}
                </p>
                <p className="text-[11px] text-gray-600 dark:text-gray-400">
                  {ko ? "Trading Comps가 왜 NTM·median·8–12 peer로 표준화됐는지 — Valuation Ch.1에서 먼저 이해하면 모든 셀이 자연스러워진다" : "Why Trading Comps standardize on NTM, median, and 8–12 peers — Val Ch.1 explains it first, and every cell becomes obvious"}
                </p>
              </div>
              <Link href={ko ? "/deal-101/trading-comps" : "/en/deal-101/trading-comps"}
                className="text-[11px] px-3 py-1.5 rounded-full font-bold text-white hover:opacity-80 transition-opacity whitespace-nowrap"
                style={{ background: SIBLING }}
              >
                {ko ? "Valuation Ch.1 →" : "Valuation Ch.1 →"}
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

          {/* ══ Section 1 — Hero ═════════════════════════════════════════════════ */}
          <motion.section id="intro" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "왜 build 방법이 중요한가" : "Why the Build Matters"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "350개 → 8개로 좁히는 funnel — 그리고 4시트 워크북" : "From 350 to 8 — the funnel and 4-sheet workbook"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              {(ko ? [
                "Val Ch.1에서 본 6-단계 peer universe 프로세스를 Capital IQ Pro의 실제 field name과 filter value로 구현한다. Activision peer set 케이스로 step-by-step — 350개의 후보에서 final 8개 (EA · Take-Two · Ubisoft · Nintendo · NEXON · NetEase · Capcom · Square Enix)까지.",
                "워크북 구조는 4-sheet 표준: 1_Universe (long list) → 2_Comps (final 8–12) → 3_Stats (mean/median/IQR) → 4_Output (football field input). 모든 cell이 CIQ live link이거나 BLUE input — 다음 주에 model 열어도 즉시 refresh된다.",
              ] : [
                "Implement Val Ch.1's six-step peer universe process using Capital IQ Pro's actual field names and filter values. Step-by-step on the Activision peer set — from 350 candidates to a final eight (EA · Take-Two · Ubisoft · Nintendo · NEXON · NetEase · Capcom · Square Enix).",
                "Workbook structure follows the 4-sheet standard: 1_Universe (long list) → 2_Comps (final 8–12) → 3_Stats (mean/median/IQR) → 4_Output (football field input). Every cell is either a CIQ live link or a BLUE input — open the model next week and it refreshes instantly.",
              ]).map((para, j) => (
                <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">{para}</motion.p>
              ))}
            </div>
          </motion.section>

          {/* ══ Section 2 — Data Source Comparison ═══════════════════════════════ */}
          <motion.section id="sources" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "Data Source 비교" : "Data Source Comparison"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "4개 도구 — 각각의 strength" : "Four Tools — Each With a Strength"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SOURCES_COMP.map((s, i) => (
                <motion.div key={s.name} variants={fadeUp(i * 0.05)}
                  className="rounded-2xl border border-gray-200/70 dark:border-gray-700/60 bg-white dark:bg-gray-900/50 p-4"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{s.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <p className="text-[13px] font-bold text-gray-900 dark:text-gray-100">{s.name}</p>
                        <span className="text-[10px] font-mono font-bold" style={{ color: ACCENT }}>{s.costKo}</span>
                      </div>
                      <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed">{ko ? s.strengthKo : s.strengthEn}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* ══ Section 3 — 6-Filter CIQ Workflow ═════════════════════════════════ */}
          <motion.section id="workflow" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "CIQ 6-필터 워크플로우" : "CIQ 6-Filter Workflow"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "Activision Peer Set 케이스 — 350 → 8" : "Activision Peer Set Case — 350 → 8"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            {/* Funnel Chart */}
            <motion.div variants={fadeUp(0.05)} className="rounded-xl border border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-900 mb-6">
              <h3 className="text-[14px] font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "Screening Funnel — peer 수의 감소" : "Screening Funnel — Peer Count Drop"}
              </h3>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 mb-4">
                {ko ? "각 필터가 peer set을 좁힌다 — 350개에서 final 8개까지" : "Each filter narrows the peer set — from 350 candidates to a final eight"}
              </p>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart layout="vertical" data={FUNNEL.map((d) => ({ step: ko ? d.stepKo : d.stepEn, n: d.n, color: d.color }))} margin={{ top: 5, right: 50, left: 10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" horizontal={false} />
                  <XAxis type="number" tick={{ fontSize: 10, fill: "#6b7280" }} domain={[0, 400]} />
                  <YAxis type="category" dataKey="step" tick={{ fontSize: 10, fill: "#6b7280" }} width={140} />
                  <Tooltip
                    formatter={((v: number) => [`${v} ${ko ? "개" : "names"}`, ko ? "Peer 수" : "Peers"]) as never}
                    contentStyle={{ fontSize: 11, borderRadius: 8 }}
                  />
                  <Bar dataKey="n" radius={[0, 4, 4, 0]}>
                    {FUNNEL.map((d, i) => <Cell key={i} fill={d.color} />)}
                    <LabelList dataKey="n" position="right" style={{ fontSize: 10, fontWeight: 700, fill: "#374151" }} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Filter Detail Cards */}
            <motion.div variants={stagger} className="space-y-3">
              {FILTER_DETAIL.map((f, i) => (
                <motion.div key={f.n} variants={fadeUp(i * 0.05)}
                  className="rounded-2xl border border-gray-200/70 dark:border-gray-700/60 bg-white dark:bg-gray-900/50 p-5"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-[14px] font-black flex-shrink-0" style={{ color: ACCENT }}>{f.n}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[14px] font-bold text-gray-900 dark:text-gray-100 mb-2">{ko ? f.titleKo : f.titleEn}</h3>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 font-semibold mb-1">{ko ? f.fieldKo : f.fieldKo}</p>
                      <div className="rounded-lg p-2.5 mb-2 font-mono text-[11px] bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 overflow-x-auto">
                        <code className="text-gray-800 dark:text-gray-200 whitespace-nowrap">{f.code}</code>
                      </div>
                      <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed mb-1">{ko ? f.altKo : f.altEn}</p>
                      <p className="text-[11px] font-bold" style={{ color: ACCENT }}>{ko ? f.outputKo : f.outputEn}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* ══ Section 4 — 4-Sheet Workbook ══════════════════════════════════════ */}
          <motion.section id="workbook" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "4-시트 워크북" : "4-Sheet Workbook"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "Universe · Comps · Stats · Output" : "Universe · Comps · Stats · Output"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            {/* Workbook tabs visual */}
            <motion.div variants={fadeUp(0.05)}
              className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40 p-4 mb-6"
            >
              <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 dark:text-gray-500 mb-3">
                {ko ? "워크북 탭 (왼쪽에서 오른쪽으로 데이터 흐름)" : "Workbook tabs (data flows left to right)"}
              </p>
              <div className="flex items-center gap-0.5 overflow-x-auto pb-2">
                {SHEETS.map((s, i) => (
                  <div key={s.n} className="flex items-center flex-shrink-0">
                    <div className="px-3 py-2 rounded-t-lg border-t-2 border-x border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 font-mono text-[11px] font-bold"
                      style={{ borderTopColor: s.color }}
                    >
                      <span className="mr-1">{s.icon}</span>
                      {s.code}
                    </div>
                    {i < SHEETS.length - 1 && <span className="text-gray-300 dark:text-gray-600 px-1">→</span>}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Sheet detail cards */}
            <motion.div variants={stagger} className="space-y-3">
              {SHEETS.map((s, i) => (
                <motion.div key={s.n} variants={fadeUp(i * 0.05)}
                  className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  <div className="flex items-stretch gap-0">
                    <div className="flex-shrink-0 w-1.5" style={{ background: s.color }} />
                    <div className="flex-1 p-4">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="text-2xl" aria-hidden>{s.icon}</span>
                        <span className="font-mono text-[12px] font-bold px-2 py-0.5 rounded text-white" style={{ background: s.color }}>{s.code}</span>
                        <span className="text-[14px] font-bold text-gray-900 dark:text-gray-100">{ko ? s.titleKo : s.titleEn}</span>
                      </div>
                      <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{ko ? s.purposeKo : s.purposeEn}</p>
                      <div className="rounded-lg p-2.5 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700">
                        <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">{ko ? "행 구조" : "Row Structure"}</p>
                        <p className="font-mono text-[10px] text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? s.rowsKo : s.rowsEn}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* ══ Section 5 — TEV Auto-Calc Formula ═════════════════════════════════ */}
          <motion.section id="tev" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "TEV Auto-Calc" : "TEV Auto-Calc"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "CIQ field code로 자동화하는 TEV 공식" : "Automating TEV via CIQ Field Codes"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={fadeUp(0.05)} className="rounded-2xl p-6 border-2 mb-5" style={{ borderColor: ACCENT + "40", background: ACCENT_LIGHT }}>
              <p className="text-[11px] font-black uppercase tracking-widest mb-3" style={{ color: ACCENT }}>
                {ko ? "기본 공식" : "Base Formula"}
              </p>
              <div className="text-center py-3">
                <p className="font-mono text-[13px] sm:text-[15px] font-bold text-gray-900 dark:text-gray-100">
                  TEV = Market_Cap + Debt − Cash + Preferred + MI + OpLease_Liability
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp(0.1)} className="rounded-xl border border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-900">
              <p className="text-[12px] font-bold text-gray-700 dark:text-gray-300 mb-3">{ko ? "CIQ Field Code 매핑" : "CIQ Field Code Mapping"}</p>
              <div className="space-y-2 font-mono text-[11px]">
                <div className="flex items-center gap-3 p-2 rounded bg-gray-50 dark:bg-gray-900/50">
                  <span className="text-gray-500 w-32">Market Cap</span>
                  <span className="text-gray-300">=</span>
                  <code className="text-amber-700 dark:text-amber-400 font-bold">=CIQ(ticker, "IQ_MARKETCAP")</code>
                </div>
                <div className="flex items-center gap-3 p-2 rounded bg-gray-50 dark:bg-gray-900/50">
                  <span className="text-gray-500 w-32">Total Debt</span>
                  <span className="text-gray-300">=</span>
                  <code className="text-amber-700 dark:text-amber-400 font-bold">=CIQ(ticker, "IQ_TOTAL_DEBT")</code>
                </div>
                <div className="flex items-center gap-3 p-2 rounded bg-gray-50 dark:bg-gray-900/50">
                  <span className="text-gray-500 w-32">Cash</span>
                  <span className="text-gray-300">=</span>
                  <code className="text-amber-700 dark:text-amber-400 font-bold">=CIQ(ticker, "IQ_CASH_EQUIV")</code>
                </div>
                <div className="flex items-center gap-3 p-2 rounded bg-gray-50 dark:bg-gray-900/50">
                  <span className="text-gray-500 w-32">Preferred</span>
                  <span className="text-gray-300">=</span>
                  <code className="text-amber-700 dark:text-amber-400 font-bold">=CIQ(ticker, "IQ_PREF_EQUITY")</code>
                </div>
                <div className="flex items-center gap-3 p-2 rounded bg-gray-50 dark:bg-gray-900/50">
                  <span className="text-gray-500 w-32">Minority Interest</span>
                  <span className="text-gray-300">=</span>
                  <code className="text-amber-700 dark:text-amber-400 font-bold">=CIQ(ticker, "IQ_MINORITY_INTEREST")</code>
                </div>
                <div className="flex items-center gap-3 p-2 rounded bg-gray-50 dark:bg-gray-900/50">
                  <span className="text-gray-500 w-32">Operating Lease</span>
                  <span className="text-gray-300">=</span>
                  <code className="text-amber-700 dark:text-amber-400 font-bold">=CIQ(ticker, "IQ_ST_OPER_LEASE")+CIQ(ticker, "IQ_LT_OPER_LEASE")</code>
                </div>
              </div>
              <p className="text-[10px] text-gray-400 mt-3">
                {ko ? "* 모든 cell이 live link — peer가 quarterly report 발표하면 자동 refresh" : "* All cells are live links — peer quarterly reports auto-refresh the model"}
              </p>
            </motion.div>
          </motion.section>

          {/* ══ Section 6 — NTM Pull Pattern ══════════════════════════════════════ */}
          <motion.section id="ntm" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "NTM Multiple Pull" : "NTM Multiple Pull"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "Consensus forward EBITDA를 가져오는 패턴" : "Pulling Consensus Forward EBITDA"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={fadeUp(0.05)} className="rounded-xl border border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-900 mb-4">
              <p className="text-[12px] font-bold text-gray-700 dark:text-gray-300 mb-3">{ko ? "Capital IQ NTM EBITDA Formula" : "Capital IQ NTM EBITDA Formula"}</p>
              <div className="font-mono text-[11px] rounded-lg bg-gray-50 dark:bg-gray-900/50 p-3 border border-gray-200 dark:border-gray-700">
                <code className="text-amber-700 dark:text-amber-400 font-bold">=CIQ(ticker, "IQ_EBITDA", "FY+1", "Mean")</code>
              </div>
              <ul className="mt-3 space-y-1.5 text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed">
                <li>• <code className="text-amber-700 font-mono">"FY+1"</code> {ko ? "= 다음 fiscal year consensus" : "= next fiscal year consensus"}</li>
                <li>• <code className="text-amber-700 font-mono">"Mean"</code> {ko ? "= analyst average (Median, Median_LowHigh 옵션 있음)" : "= analyst average (Median, Median_LowHigh available)"}</li>
                <li>• <strong>{ko ? "Stub period 처리:" : "Stub period handling:"}</strong> {ko ? "March FY (Japan) 회사는 calendar normalize" : "March FY (Japan) firms need calendar normalization"}</li>
                <li>• <strong>{ko ? "Fresh check:" : "Fresh check:"}</strong> <code className="text-amber-700 font-mono">=CIQ(ticker, "IQ_LAST_EST_DATE")</code> {ko ? "로 30일 이내 update 확인" : "to verify last update is within 30 days"}</li>
              </ul>
            </motion.div>
          </motion.section>

          {/* ══ Section 7 — Adjustments Layer ═════════════════════════════════════ */}
          <motion.section id="adjustments" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "Adjustments Layer" : "Adjustments Layer"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "Mean/Median 전에 반드시 정규화" : "Normalize Before Computing Mean/Median"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { titleKo: "Operating Lease 정규화",      titleEn: "Operating Lease Normalization",       bodyKo: "Pre-2019 vs Post-2019 peer 섞이면 TEV/EBITDA 왜곡 5–15%. 통일 시점 (보통 post-2019) 적용.",         bodyEn: "Mixing pre/post-2019 peers distorts TEV/EBITDA 5–15%. Standardize to post-2019 reporting." },
                { titleKo: "One-time items removal",       titleEn: "One-time items removal",                bodyKo: "M&A fees, impairments, COVID 부양금, restructuring charge. Adjusted EBITDA로 통일.",                  bodyEn: "M&A fees, impairments, COVID stimulus, restructuring charges — strip to Adjusted EBITDA." },
                { titleKo: "FX Normalization",             titleEn: "FX Normalization",                       bodyKo: "Yen·KRW·EUR을 모두 USD로 변환. Spot rate (announcement date) 사용.",                                  bodyEn: "Convert Yen, KRW, EUR to USD using announcement-date spot rates." },
                { titleKo: "Adjusted EBITDA Reconciliation", titleEn: "Adjusted EBITDA Reconciliation",       bodyKo: "각 peer가 자체 'Adjusted'를 publish — 그대로 받지 말고, 동일 정의로 build (stock comp 포함 여부 등).",   bodyEn: "Each peer publishes its own 'Adjusted' — don't take at face value; rebuild under one definition (stock comp included or excluded)." },
              ].map((a, i) => (
                <motion.div key={i} variants={fadeUp(i * 0.05)}
                  className="rounded-2xl border border-gray-200/70 dark:border-gray-700/60 bg-white dark:bg-gray-900/50 p-4"
                >
                  <h3 className="text-[13px] font-bold text-gray-900 dark:text-gray-100 mb-2">{ko ? a.titleKo : a.titleEn}</h3>
                  <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed">{ko ? a.bodyKo : a.bodyEn}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp(0.2)} className="mt-4 rounded-xl p-4 border" style={{ background: ACCENT_LIGHT, borderColor: ACCENT + "30" }}>
              <p className="text-[12px] text-gray-700 dark:text-gray-700 leading-relaxed">
                <strong style={{ color: ACCENT }}>{ko ? "→ Transparency rule:" : "→ Transparency rule:"}</strong>{" "}
                {ko
                  ? "Excel에 'Adjustments' 컬럼을 별도로 만들고 각 adjustment의 dollar amount와 reason을 표시. Senior가 'why $50m adjustment?'라고 물으면 즉시 답해야 한다."
                  : "Keep an 'Adjustments' column in Excel with the dollar amount and reason for each adjustment. When a senior asks 'why a $50m adjustment?', you should answer immediately."}
              </p>
            </motion.div>
          </motion.section>

          {/* ══ Section 8 — Sanity Checks ═════════════════════════════════════════ */}
          <motion.section id="sanity" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "Sanity Check Workflow" : "Sanity Check Workflow"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "6가지 — publishing 전 필수" : "Six Mandatory Pre-Publish Checks"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={stagger} className="space-y-2">
              {SANITY.map((c, i) => (
                <motion.div key={i} variants={fadeUp(i * 0.04)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/50"
                >
                  <span className="text-lg flex-shrink-0">☑️</span>
                  <span className="text-[12px] text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? c.ko : c.en}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* ══ Section 9 — Common Modeling Errors ════════════════════════════════ */}
          <motion.section id="errors" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "흔한 모델링 에러" : "Common Modeling Errors"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "6가지 — 그리고 어떻게 피하는가" : "Six Errors — and How to Avoid Each"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ERRORS.map((e, i) => (
                <motion.div key={e.n} variants={fadeUp(i * 0.05)}
                  className="rounded-2xl border border-gray-200/70 dark:border-gray-700/60 bg-white dark:bg-gray-900/50 p-5"
                >
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-[14px] font-black flex-shrink-0" style={{ color: ACCENT }}>{e.n}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[13px] font-bold text-gray-900 dark:text-gray-100 mb-2">{ko ? e.titleKo : e.titleEn}</h3>
                      <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed">{ko ? e.bodyKo : e.bodyEn}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* ══ Section 10 — REVERSE CROSS-LINK + Next Chapter ════════════════════ */}
          <motion.section id="cross-link" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()}
              className="rounded-3xl p-8 border-2 relative overflow-hidden mb-4"
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
                  ? "왜 NTM 멀티플이 표준인지, 왜 median이 mean보다 robust한지, Trading vs Transaction의 본질적 차이가 무엇인지 — 그 이론적 근거가 Valuation Ch.1에 있다."
                  : "Why NTM is the standard, why median beats mean, what really separates Trading from Transaction — the theoretical reasoning lives in Val Ch.1."}
              </p>
              <Link href={ko ? "/deal-101/trading-comps" : "/en/deal-101/trading-comps"}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold text-white hover:opacity-90 transition-opacity shadow-md"
                style={{ background: SIBLING }}
              >
                📐 {ko ? "Valuation Ch.1 — Trading Comps Concept" : "Valuation Ch.1 — Trading Comps Concept"}
                <span className="text-lg">→</span>
              </Link>
            </motion.div>

            {/* Next Chapter — amber */}
            <motion.div variants={fadeUp(0.1)}
              className="rounded-2xl p-5 border-2 flex items-center gap-4 flex-wrap"
              style={{ borderColor: ACCENT, background: ACCENT_LIGHT }}
            >
              <span className="text-3xl flex-shrink-0">🚀</span>
              <div className="flex-1 min-w-[200px]">
                <p className="text-[12px] font-bold mb-0.5" style={{ color: ACCENT }}>
                  {ko ? "다음 챕터 → Modelling 시리즈" : "Next chapter → Modelling Series"}
                </p>
                <h3 className="text-[16px] font-bold text-gray-900 dark:text-gray-100 mb-1">
                  {ko ? "Transaction Comps Build (Mergermarket)" : "Transaction Comps Build (Mergermarket)"}
                </h3>
                <p className="text-[11px] text-gray-700 dark:text-gray-400 leading-relaxed">
                  {ko
                    ? "Mergermarket 8-단계 필터, Premium 분해, Synergy backout NPV, Strategic vs Financial cohort"
                    : "Mergermarket 8-step filter, premium decomposition, synergy backout NPV, strategic vs financial cohort split"}
                </p>
              </div>
              <Link href={ko ? "/deal-101/transaction-comps-build" : "/en/deal-101/transaction-comps-build"}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold text-white hover:opacity-90 transition-opacity whitespace-nowrap"
                style={{ background: ACCENT }}
              >
                Modelling Ch.3 →
              </Link>
            </motion.div>
          </motion.section>

          {/* ── Share — mid ─────────────────────────────────────────────── */}
          <div className="flex justify-center -mt-8">
            <ShareButtons title={ko ? titleKo : titleEn} variant="mid" lang={lang} />
          </div>

          {/* ══ FAQ ═════════════════════════════════════════════════════════════ */}
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
              <Link href={ko ? "/deal-101/dcf-model-setup" : "/en/deal-101/dcf-model-setup"}
                className="text-[12px] px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-amber-300 hover:text-amber-600 transition-colors"
              >
                ← {ko ? "Ch.1 DCF 모델 셋업" : "Ch.1 DCF Model Setup"}
              </Link>
              <Link href={ko ? "/deal-101/transaction-comps-build" : "/en/deal-101/transaction-comps-build"}
                className="text-[12px] px-4 py-2 rounded-full text-white transition-opacity hover:opacity-80"
                style={{ background: ACCENT }}
              >
                {ko ? "Ch.3 Transaction Comps Build →" : "Ch.3 Transaction Comps Build →"}
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
          <div className="flex justify-center pb-4">
            <ShareButtons title={ko ? titleKo : titleEn} variant="bottom" lang={lang} />
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
