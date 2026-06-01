/**
 * Modelling 시리즈 Ch.2 — 3-Statement Model 연결 mechanics
 *
 * 톤 가이드 (Mod Ch.1 + Valuation 시리즈 정리 버전):
 *  - 자연스러운 한국어 + Excel 표현(셀 참조·수식) 적극 사용
 *  - 시각화 4개: 3-Stmt 연결 다이어그램 · BS 디버깅 flowchart · Circular reference loop · 통합 mini-sheet
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

const SLUG = "mod-ch02-three-statement";
const ACCENT = "#10b981";
const BLUE = "#2563eb";
const ORANGE = "#f97316";
const RED = "#dc2626";

// 세 statement 간 연결 — IS / BS / CFS link 6개
const LINKS = [
  {
    koFrom: "IS · Net Income",
    enFrom: "IS · Net Income",
    koTo: "CFS · Starting line",
    enTo: "CFS · Starting line",
    koDesc: "CFS의 첫 줄이 IS의 net income",
    enDesc: "CFS opens with IS net income",
    color: ACCENT,
  },
  {
    koFrom: "IS · Net Income",
    enFrom: "IS · Net Income",
    koTo: "BS · Retained Earnings",
    enTo: "BS · Retained Earnings",
    koDesc: "Beg RE + NI − Dividend = End RE",
    enDesc: "Beg RE + NI − Dividends = End RE",
    color: ACCENT,
  },
  {
    koFrom: "IS · D&A (비용)",
    enFrom: "IS · D&A (expense)",
    koTo: "CFS · D&A add-back (양수)",
    enTo: "CFS · D&A add-back (positive)",
    koDesc: "Non-cash 비용이므로 CFS에서 다시 더해줌",
    enDesc: "Non-cash expense added back in CFS",
    color: BLUE,
  },
  {
    koFrom: "CFS · CapEx (음수)",
    enFrom: "CFS · CapEx (negative)",
    koTo: "BS · PP&E 증가",
    enTo: "BS · PP&E increase",
    koDesc: "Beg PP&E + CapEx − D&A = End PP&E",
    enDesc: "Beg PP&E + CapEx − D&A = End PP&E",
    color: BLUE,
  },
  {
    koFrom: "CFS · ΔWorking Capital",
    enFrom: "CFS · ΔWorking Capital",
    koTo: "BS · 운영 CA/CL 변화",
    enTo: "BS · operating CA/CL changes",
    koDesc: "AR·Inventory·AP 변화가 OCF에 반영",
    enDesc: "AR, inventory, AP changes flow into OCF",
    color: BLUE,
  },
  {
    koFrom: "CFS · Net Cash Change",
    enFrom: "CFS · Net Cash Change",
    koTo: "BS · Cash 변화",
    enTo: "BS · Cash change",
    koDesc: "BS의 Cash 변화 = CFS의 net change (정확히)",
    enDesc: "BS Δcash must equal CFS net change (exactly)",
    color: ORANGE,
  },
];

// BS 안 맞을 때 — 5가지 원인 + 디버깅 순서
const DEBUG_CAUSES = [
  {
    rank: 1,
    koName: "Plug 누락 — Cash 또는 RE 미업데이트",
    enName: "Missing plug — cash or RE not updated",
    koHow: "End Cash = Beg Cash + CFS net change 가 안 됐거나, End RE = Beg RE + NI − Div 가 안 됨",
    enHow: "End cash ≠ Beg cash + CFS net change, or End RE ≠ Beg RE + NI − Div",
    risk: "high" as const,
  },
  {
    rank: 2,
    koName: "Sign error — 부호 잘못",
    enName: "Sign error — wrong sign",
    koHow: "CapEx를 양수로 잡거나, ΔAR을 반대 부호로 잡음",
    enHow: "CapEx flipped to positive, or ΔAR taken with the wrong sign",
    risk: "high" as const,
  },
  {
    rank: 3,
    koName: "Timing mismatch — Beg vs End",
    enName: "Timing mismatch — beg vs end",
    koHow: "Interest를 ending debt가 아닌 beg debt로 잡는 식의 시점 혼선",
    enHow: "e.g. computing interest on ending debt instead of average",
    risk: "med" as const,
  },
  {
    rank: 4,
    koName: "Double counting — 두 곳에 들어감",
    enName: "Double counting — captured twice",
    koHow: "Stock-based comp을 IS에도 비용 처리하고 CFS에서도 add-back",
    enHow: "SBC charged in IS and also added back in CFS (correct), but BS not adjusted",
    risk: "med" as const,
  },
  {
    rank: 5,
    koName: "Hardcoded number가 깨뜨림",
    enName: "Hardcoded number breaking flow",
    koHow: "수식에 박힌 숫자가 가정 변경에 안 따라옴 → 어딘가 link 끊김",
    enHow: "A number buried in a formula doesn't follow assumption changes → a link breaks",
    risk: "low" as const,
  },
];

// Circular reference loop — 6 단계
const CIRCULAR_LOOP = [
  { koLabel: "Net Income",            enLabel: "Net Income",            koDep: "Interest expense에 의존" ,         enDep: "Depends on interest expense" },
  { koLabel: "Cash from Operations",  enLabel: "Cash from Operations",  koDep: "Net Income에서 시작",              enDep: "Starts from net income" },
  { koLabel: "Ending Cash",            enLabel: "Ending Cash",            koDep: "Beg Cash + CFS net change",        enDep: "Beg cash + CFS net change" },
  { koLabel: "Cash Sweep",             enLabel: "Cash Sweep",             koDep: "잉여 cash로 debt 조기 상환",       enDep: "Excess cash pays down debt early" },
  { koLabel: "Ending Debt",            enLabel: "Ending Debt",            koDep: "Beg debt − cash sweep",            enDep: "Beg debt − cash sweep" },
  { koLabel: "Interest Expense",       enLabel: "Interest Expense",       koDep: "Average debt × interest rate",     enDep: "Average debt × interest rate" },
];

// 통합 3-Statement mini-sheet — 단순화 (단위 $M)
// 한 row = 한 라인, columns = 2024A · 2025E · 2026E
type CellType = "header" | "label" | "input" | "formula" | "link" | "section" | "plug" | "check";
const STMT_ROWS: Array<{
  type: "section" | "data";
  koLabel?: string; enLabel?: string;
  cells?: Array<{ val: string; type: CellType }>;
}> = [
  // ============ IS ============
  { type: "section", koLabel: "Income Statement", enLabel: "Income Statement" },
  { type: "data", koLabel: "Revenue",          enLabel: "Revenue",
    cells: [
      { val: "Revenue",       type: "label" },
      { val: "1,000",         type: "input" },
      { val: "=B*(1+g)",      type: "formula" },
      { val: "=C*(1+g)",      type: "formula" },
    ]},
  { type: "data", koLabel: "EBITDA",           enLabel: "EBITDA",
    cells: [
      { val: "EBITDA",        type: "label" },
      { val: "220",           type: "input" },
      { val: "=C*margin",     type: "formula" },
      { val: "=D*margin",     type: "formula" },
    ]},
  { type: "data", koLabel: "− D&A",            enLabel: "− D&A",
    cells: [
      { val: "− D&A",         type: "label" },
      { val: "(40)",          type: "input" },
      { val: "(45)",          type: "input" },
      { val: "(50)",          type: "input" },
    ]},
  { type: "data", koLabel: "− Interest",       enLabel: "− Interest",
    cells: [
      { val: "− Interest",    type: "label" },
      { val: "(15)",          type: "input" },
      { val: "=avg(debt)*r",  type: "formula" },
      { val: "=avg(debt)*r",  type: "formula" },
    ]},
  { type: "data", koLabel: "− Tax",            enLabel: "− Tax",
    cells: [
      { val: "− Tax",         type: "label" },
      { val: "(40)",          type: "formula" },
      { val: "=EBT*t",        type: "formula" },
      { val: "=EBT*t",        type: "formula" },
    ]},
  { type: "data", koLabel: "= Net Income",     enLabel: "= Net Income",
    cells: [
      { val: "= NI",          type: "label" },
      { val: "125",           type: "formula" },
      { val: "=EBT−Tax",      type: "formula" },
      { val: "=EBT−Tax",      type: "formula" },
    ]},
  // ============ CFS ============
  { type: "section", koLabel: "Cash Flow Statement", enLabel: "Cash Flow Statement" },
  { type: "data", koLabel: "Net Income",       enLabel: "Net Income",
    cells: [
      { val: "Net Income",    type: "label" },
      { val: "=IS.NI",        type: "link" },
      { val: "=IS.NI",        type: "link" },
      { val: "=IS.NI",        type: "link" },
    ]},
  { type: "data", koLabel: "+ D&A",            enLabel: "+ D&A",
    cells: [
      { val: "+ D&A",         type: "label" },
      { val: "40",            type: "link" },
      { val: "45",            type: "link" },
      { val: "50",            type: "link" },
    ]},
  { type: "data", koLabel: "− ΔNWC",            enLabel: "− ΔNWC",
    cells: [
      { val: "− ΔNWC",        type: "label" },
      { val: "(10)",          type: "formula" },
      { val: "(12)",          type: "formula" },
      { val: "(13)",          type: "formula" },
    ]},
  { type: "data", koLabel: "− CapEx",           enLabel: "− CapEx",
    cells: [
      { val: "− CapEx",       type: "label" },
      { val: "(50)",          type: "input" },
      { val: "(55)",          type: "input" },
      { val: "(60)",          type: "input" },
    ]},
  { type: "data", koLabel: "= Net Cash Change", enLabel: "= Net Cash Change",
    cells: [
      { val: "= Δ Cash",      type: "label" },
      { val: "105",           type: "formula" },
      { val: "=SUM",          type: "formula" },
      { val: "=SUM",          type: "formula" },
    ]},
  // ============ BS ============
  { type: "section", koLabel: "Balance Sheet (시점: End of Year)", enLabel: "Balance Sheet (point-in-time: end of year)" },
  { type: "data", koLabel: "Cash",             enLabel: "Cash",
    cells: [
      { val: "Cash",          type: "label" },
      { val: "200",           type: "input" },
      { val: "=Beg+ΔCash",    type: "plug" },
      { val: "=Beg+ΔCash",    type: "plug" },
    ]},
  { type: "data", koLabel: "PP&E (net)",       enLabel: "PP&E (net)",
    cells: [
      { val: "PP&E",          type: "label" },
      { val: "500",           type: "input" },
      { val: "=Beg+CapEx−D&A",type: "formula" },
      { val: "=Beg+CapEx−D&A",type: "formula" },
    ]},
  { type: "data", koLabel: "Debt",             enLabel: "Debt",
    cells: [
      { val: "Debt",          type: "label" },
      { val: "300",           type: "input" },
      { val: "=Beg−Sweep",    type: "formula" },
      { val: "=Beg−Sweep",    type: "formula" },
    ]},
  { type: "data", koLabel: "Retained Earnings",enLabel: "Retained Earnings",
    cells: [
      { val: "RE",            type: "label" },
      { val: "400",           type: "input" },
      { val: "=Beg+NI−Div",   type: "plug" },
      { val: "=Beg+NI−Div",   type: "plug" },
    ]},
  { type: "data", koLabel: "✓ BS Check",       enLabel: "✓ BS Check",
    cells: [
      { val: "✓ Check",       type: "label" },
      { val: "OK",            type: "check" },
      { val: "OK",            type: "check" },
      { val: "OK",            type: "check" },
    ]},
];

const cellTextColor = (type: CellType) => {
  if (type === "input") return "#2563eb";
  if (type === "formula") return "#0f172a";
  if (type === "link") return "#16a34a";
  if (type === "plug") return "#f97316";
  if (type === "check") return "#16a34a";
  if (type === "section") return "#475569";
  return "#64748b";
};
const cellBg = (type: CellType) => {
  if (type === "input") return "#eff6ff";
  if (type === "formula") return "#ffffff";
  if (type === "link") return "#f0fdf4";
  if (type === "plug") return "#fff7ed";
  if (type === "check") return "#dcfce7";
  if (type === "header") return "#f1f5f9";
  return "#ffffff";
};

const riskColor = (r: "high" | "med" | "low") => r === "high" ? RED : r === "med" ? "#f59e0b" : "#94a3b8";

export default function MaMod02Client({ lang }: { lang: Lang }) {
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
            <span className="text-gray-600 dark:text-gray-300 font-medium">{ko ? "Modelling 시리즈 · Ch.2" : "Modelling Series · Ch.2"}</span>
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

          {/* § 1 — 세 statement이 무엇을 보여주는가 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "세 statement이 무엇을 보여주는가" : "What each of the three statements shows"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "회계의 세 statement은 같은 회사를 세 가지 다른 lens로 보여줍니다. Income Statement (IS) 는 \"일정 기간 동안 얼마를 벌었나\"의 flow, Balance Sheet (BS) 는 \"특정 시점에 무엇을 갖고 있는가\"의 stock, Cash Flow Statement (CFS) 는 \"일정 기간 동안 cash가 어떻게 움직였나\"의 flow. 같은 회사의 같은 회계 기간을 세 각도에서 보는 거예요."
                : "The three statements show the same company through three different lenses. The Income Statement (IS) is the flow of 'what was earned over a period.' The Balance Sheet (BS) is the stock of 'what's owned at a point in time.' The Cash Flow Statement (CFS) is the flow of 'how cash moved during the period.' Same company, same period — three angles."}</p>
              <p>{ko
                ? "Modelling 관점에서 중요한 건 \"이 세 statement이 따로 떨어진 sheet가 아니라 셀-수준에서 연결되어야 한다\"는 점이에요. IS의 net income은 CFS의 첫 줄이 되고, BS의 retained earnings로 흘러갑니다. CFS의 net cash change는 BS의 cash 변화량과 정확히 일치해야 해요. 한 셀이라도 이 연결이 끊기면 BS가 안 맞고, 모델 전체가 깨집니다."
                : "What matters for modeling: these three aren't separate sheets — they must be linked cell-by-cell. IS net income becomes the first line of CFS and flows into BS retained earnings. CFS net cash change must equal BS Δcash exactly. Break a single link and the BS won't balance — the whole model is broken."}</p>
              <p>{ko
                ? "이번 챕터에서는 (1) 세 statement이 어떤 line으로 연결되는지 (2) BS가 안 맞을 때 어디부터 디버깅하는지 (3) Interest × Debt × Cash로 만들어지는 circular reference를 어떻게 푸는지를 봅니다. 마지막은 한 페이지에 IS·CFS·BS가 다 들어간 통합 sheet 형태로 마무리해요."
                : "This chapter walks (1) which lines connect the three statements, (2) how to debug when the BS doesn't balance, (3) how to resolve the interest × debt × cash circular reference. It closes with an integrated single-page IS / CFS / BS layout."}</p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 2 — 연결 mechanics */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Statement 간 연결 — 6개의 핵심 link" : "How the statements link — six core connections"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "세 statement이 어떻게 연결되는지를 외워둘 필요는 없어요. 6개 핵심 link만 머리에 있으면 나머지는 그 위에서 자연스럽게 흘러갑니다."
                : "You don't need to memorize every connection between the three statements. Six core links are enough — everything else flows naturally from those."}</p>
            </div>

            {/* Link 다이어그램 */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "IS · CFS · BS — 6개 link" : "IS · CFS · BS — six links"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "녹색 = IS·CFS·BS의 NI 흐름 / 파랑 = D&A·CapEx·NWC 운영 link / 주황 = cash check (가장 중요)" : "Green = NI flow IS→CFS→BS / Blue = D&A, CapEx, NWC operating links / Orange = cash check (the most important)"}
              </p>
              <div className="space-y-3">
                {LINKS.map((l, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.45, delay: i * 0.07, ease: EASE }}
                    className="grid grid-cols-[auto_1fr_auto_1fr] gap-2 sm:gap-3 items-center"
                  >
                    <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500">{String(i + 1).padStart(2, "0")}</span>
                    <div className="rounded-md p-2 border" style={{ borderColor: l.color + "60", background: l.color + "0d" }}>
                      <p className="text-[11.5px] font-semibold leading-snug" style={{ color: l.color }}>{ko ? l.koFrom : l.enFrom}</p>
                    </div>
                    <span className="text-gray-300 dark:text-gray-600 text-sm">→</span>
                    <div className="rounded-md p-2 border" style={{ borderColor: l.color + "60", background: l.color + "0d" }}>
                      <p className="text-[11.5px] font-semibold leading-snug" style={{ color: l.color }}>{ko ? l.koTo : l.enTo}</p>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-snug mt-0.5">{ko ? l.koDesc : l.enDesc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "가장 중요한 link가 6번 \"CFS의 net cash change = BS의 cash 변화\"예요. 이 한 줄이 안 맞으면 다른 모든 link 중 하나가 깨졌다는 신호. 디버깅은 항상 이 cash check에서 시작합니다."
                  : "The most important link is #6 — 'CFS net change = BS Δcash.' If this fails, one of the other links is broken. Debugging always starts here."}
              </p>
            </div>
          </motion.section>

          {/* Mid share */}
          <ShareButtons title={ko ? chapter.titleKo : chapter.titleEn} variant="mid" lang={lang} />

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 3 — BS 디버깅 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "\"BS가 안 맞아요\" — 디버깅 흐름" : "\"My balance sheet doesn't balance\" — the debug flow"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Modelling을 처음 배우는 사람이 가장 자주 마주치는 순간이 \"내 BS가 안 맞아요\" 예요. Assets ≠ Liabilities + Equity. 한 셀이 $1 만큼 안 맞아도 모델 전체를 share할 수 없어요. 어디부터 손대야 하나."
                : "The single most common moment for anyone learning modeling: 'my BS won't balance.' Assets ≠ Liabilities + Equity. Off by $1 and the model can't be shared. Where do you start?"}</p>
              <p>{ko
                ? "디버깅 순서가 정해져 있어요. 첫째, IS의 net income이 BS의 retained earnings 변화량과 일치하는지 확인 (Beg RE + NI − Dividend = End RE). 둘째, CFS의 net cash change가 BS의 cash 변화량과 일치하는지 확인 (Beg Cash + Δ Cash = End Cash). 이 두 가지가 BS를 맞추는 \"plug\" 라인이에요. 둘 중 하나가 안 맞으면 거기서 BS 깨짐의 원인이 99% 발견됩니다."
                : "There's a fixed order. First, check that IS net income matches the change in BS retained earnings (Beg RE + NI − Div = End RE). Second, check that CFS net cash change matches BS Δcash (Beg + Δ = End). These two are the 'plug' lines that close the BS. 99% of BS-balance issues are found in one of these two."}</p>
              <p>{ko
                ? "여전히 안 맞으면 5가지 흔한 원인을 순서대로 점검합니다. 각각이 모델의 어느 셀에서 어떻게 발견되는지가 정해져 있어서, 한 번 외워두면 디버깅 시간이 크게 단축돼요."
                : "If it still doesn't balance, run through the five common causes in order. Each has a specific cell pattern to look at — memorize once and debug time drops dramatically."}</p>
            </div>

            {/* Debug causes 패널 */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "BS 안 맞는 5가지 원인 — 발견 빈도 순" : "Five causes of an unbalanced BS — by frequency"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "Risk = 발견 빈도. High부터 먼저 점검." : "Risk = frequency. Start with the highs."}
              </p>
              <div className="space-y-3">
                {DEBUG_CAUSES.map((d, i) => {
                  const color = riskColor(d.risk);
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={VP}
                      transition={{ duration: 0.45, delay: i * 0.07, ease: EASE }}
                      className="grid grid-cols-[auto_1fr_auto] gap-3 items-start px-3 py-2.5 rounded-md border"
                      style={{ borderColor: color + "60", background: color + "0d" }}
                    >
                      <span className="text-[12px] font-mono font-bold flex-shrink-0" style={{ color }}>#{d.rank}</span>
                      <div className="min-w-0">
                        <p className="text-[12px] font-bold text-gray-900 dark:text-gray-100 mb-0.5">{ko ? d.koName : d.enName}</p>
                        <p className="text-[10.5px] text-gray-500 dark:text-gray-400 leading-snug">{ko ? d.koHow : d.enHow}</p>
                      </div>
                      <span
                        className="text-[9.5px] font-bold px-2 py-0.5 rounded uppercase tracking-wider flex-shrink-0"
                        style={{ background: color, color: "#fff" }}
                      >
                        {d.risk}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
              <p className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "Debug 흐름: 먼저 RE plug와 Cash plug 확인 → 안 맞으면 위 5가지 순서로 검색. 보통 3가지 안에서 발견됩니다."
                  : "Debug flow: first check the RE plug and the Cash plug → then run through the five causes above in order. Usually fixed within the first three."}
              </p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 4 — Circular reference */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Circular Reference — Interest × Debt × Cash가 만드는 cycle" : "Circular reference — the interest × debt × cash loop"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "3-statement model을 만들면 거의 항상 한 가지 문제에 부딪쳐요. Excel이 \"Circular reference detected\" 라는 경고를 띄우는 거. 처음 보는 사람은 \"내가 뭘 잘못 짰지\" 라고 생각하지만, 이건 모델이 정상적으로 작동하기 위해 발생하는 \"의도된 순환\" 이에요."
                : "Almost every 3-statement model hits the same wall: Excel flashes 'circular reference detected.' First-timers panic and assume they broke something — but this is an intended circularity that's required for the model to function."}</p>
              <p>{ko
                ? "원인을 풀어보면 이래요. Net income은 interest expense에 의존, interest expense는 average debt에 의존, average debt는 ending debt에 의존, ending debt는 cash sweep (잉여 cash로 debt 조기 상환) 에 의존, cash sweep는 ending cash에 의존, ending cash는 cash from operations에 의존, cash from operations는 net income에서 시작. 즉 net income → cash → debt → interest → net income으로 cycle이 닫혀요."
                : "Trace the chain: net income depends on interest, interest depends on average debt, average debt depends on ending debt, ending debt depends on cash sweep (excess cash paying down debt early), cash sweep depends on ending cash, ending cash depends on cash from operations, cash from operations starts from net income. The cycle closes: net income → cash → debt → interest → net income."}</p>
              <p>{ko
                ? "Excel은 이걸 \"iterative calculation\" 기능으로 풉니다. File → Options → Formulas → Enable iterative calculation 체크. Max iterations는 100, Max change는 0.001 정도로 설정. Excel이 처음 net income을 가정해서 한 번 계산하고, 그 결과로 다시 계산하고, 100회 정도 반복하면 결과가 수렴해요. LBO model에서는 거의 default로 활성화돼 있습니다."
                : "Excel solves this via iterative calculation. File → Options → Formulas → Enable iterative calculation. Max iterations 100, max change ~0.001. Excel assumes a starting net income, computes once, feeds the result back, repeats ~100 times until results converge. LBO models have it on by default."}</p>
            </div>

            {/* Circular loop 다이어그램 */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Circular Reference — 6단계 cycle" : "Circular reference — 6-step cycle"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "각 단계가 다음 단계에 의존, 마지막이 첫 단계로 돌아감." : "Each step depends on the next; the last returns to the first."}
              </p>
              <div className="space-y-2.5">
                {CIRCULAR_LOOP.map((c, i) => {
                  const isLast = i === CIRCULAR_LOOP.length - 1;
                  return (
                    <div key={i}>
                      <motion.div
                        initial={{ opacity: 0, x: -6 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={VP}
                        transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
                        className="grid grid-cols-[auto_1fr] gap-3 items-center px-3 py-2 rounded-md border"
                        style={{ borderColor: ACCENT + "60", background: ACCENT + "0d" }}
                      >
                        <span className="text-[10px] font-mono font-bold flex-shrink-0" style={{ color: ACCENT }}>{String(i + 1).padStart(2, "0")}</span>
                        <div className="min-w-0 flex items-baseline justify-between gap-3">
                          <span className="text-[12.5px] font-bold text-gray-900 dark:text-gray-100">{ko ? c.koLabel : c.enLabel}</span>
                          <span className="text-[10.5px] text-gray-500 dark:text-gray-400 leading-snug">{ko ? c.koDep : c.enDep}</span>
                        </div>
                      </motion.div>
                      {!isLast && (
                        <div className="text-center text-gray-300 dark:text-gray-600 text-[12px] leading-none py-0.5">↓</div>
                      )}
                    </div>
                  );
                })}
                <div className="text-center text-gray-400 dark:text-gray-500 text-[10px] font-mono italic mt-1">
                  ↪ {ko ? "다시 Net Income으로 (cycle 닫힘)" : "Loops back to Net Income"}
                </div>
              </div>
              <p className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "수렴 안 되면 iterative calculation이 꺼져 있거나, cycle 외부에 추가 circular가 있는 것. Audit sheet의 \"Iterative calc enabled\" check가 그래서 표준 항목이에요 (Ch.1 § 5)."
                  : "If it doesn't converge, iterative calc is disabled or there's an extra circular outside the cycle. That's exactly why 'Iterative calc enabled' is a standard audit check (Ch.1 § 5)."}
              </p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 5 — 통합 mini-sheet */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "한 페이지로 — 통합 3-Statement mini-sheet" : "On one page — the integrated 3-statement mini-sheet"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "지금까지 본 link, 디버깅, circular reference를 한 sheet에 정리해 볼게요. 표준 형태는 위에서 아래로 IS → CFS → BS 순서. 한 column이 한 회계 연도. 작년 (Actual)부터 forecast 연도까지 column이 늘어나는 구조예요."
                : "Putting it all together — links, debugging, circulars — on one sheet. The standard layout flows top-down: IS → CFS → BS. Each column is one fiscal year, growing rightward from last year's actual into forecast."}</p>
              <p>{ko
                ? "아래 mini-sheet에서 색이 의미하는 건 Ch.1과 동일해요. 파랑은 input(가정), 검정은 자체 formula, 녹색은 다른 statement에서의 link, 주황은 plug 라인 (cash 또는 RE), 녹색 박스는 audit check OK 상태. 이 한 페이지를 외워두면 어떤 모델이든 \"어디가 어디에 박혀 있는지\"가 보입니다."
                : "Color in the mini-sheet matches Ch.1's convention. Blue = input (assumption), black = in-sheet formula, green = cross-statement link, orange = plug line (cash or RE), green box = audit check OK. Once you've memorized this single page, any model becomes 'I can see what plugs into what.'"}</p>
            </div>

            {/* Mini integrated sheet */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "통합 3-Statement Mini-Sheet — 단위 $M" : "Integrated 3-statement mini-sheet — $M"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "위 = IS · 가운데 = CFS · 아래 = BS. Plug 라인(주황)이 BS를 맞춰주는 핵심." : "Top = IS · middle = CFS · bottom = BS. Plug lines (orange) are what closes the BS."}
              </p>

              {/* Column headers */}
              <div className="overflow-x-auto -mx-1 px-1">
                <div className="inline-block min-w-full">
                  <div className="grid grid-cols-[1.5fr_repeat(3,1fr)] gap-0">
                    <div className="text-[9.5px] font-mono py-1.5 px-2 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"></div>
                    {["2024A", "2025E", "2026E"].map((y, i) => (
                      <div key={i} className="text-[10px] font-mono font-bold py-1.5 px-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-center">{y}</div>
                    ))}
                  </div>
                  {/* Rows */}
                  {STMT_ROWS.map((row, ri) => {
                    if (row.type === "section") {
                      return (
                        <div key={ri} className="grid grid-cols-[1.5fr_repeat(3,1fr)] gap-0">
                          <div
                            className="col-span-4 text-[10px] font-bold uppercase tracking-wider py-1.5 px-2 mt-1"
                            style={{ background: ACCENT + "1a", color: ACCENT }}
                          >
                            {ko ? row.koLabel : row.enLabel}
                          </div>
                        </div>
                      );
                    }
                    return (
                      <div key={ri} className="grid grid-cols-[1.5fr_repeat(3,1fr)] gap-0">
                        {row.cells?.map((cell, ci) => (
                          <motion.div
                            key={ci}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={VP}
                            transition={{ duration: 0.3, delay: (ri * 4 + ci) * 0.015 }}
                            className="border-r border-b border-gray-100 dark:border-gray-800 px-2 py-1.5 text-[10px] font-mono"
                            style={{ background: cellBg(cell.type), color: cellTextColor(cell.type) }}
                          >
                            {cell.val}
                          </motion.div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Color legend */}
              <div className="mt-5 grid grid-cols-2 sm:grid-cols-5 gap-2 text-[10px]">
                <div className="flex items-center gap-1.5">
                  <span className="inline-block w-3 h-3 rounded" style={{ background: "#eff6ff", border: "1px solid #2563eb40" }} />
                  <span style={{ color: BLUE }}>Input</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="inline-block w-3 h-3 rounded" style={{ background: "#ffffff", border: "1px solid #cbd5e1" }} />
                  <span className="text-gray-700 dark:text-gray-300">Formula</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="inline-block w-3 h-3 rounded" style={{ background: "#f0fdf4", border: "1px solid #16a34a40" }} />
                  <span style={{ color: "#16a34a" }}>Link</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="inline-block w-3 h-3 rounded" style={{ background: "#fff7ed", border: `1px solid ${ORANGE}40` }} />
                  <span style={{ color: ORANGE }}>Plug</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="inline-block w-3 h-3 rounded" style={{ background: "#dcfce7", border: "1px solid #16a34a40" }} />
                  <span style={{ color: "#16a34a" }}>OK</span>
                </div>
              </div>

              <p className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "주황색 Plug 두 줄 — BS의 Cash와 Retained Earnings — 가 IS·CFS의 결과를 받아서 BS를 닫아줍니다. 마지막 \"✓ BS Check\" 가 OK면 모델이 정합. 이 한 sheet가 valuation·LBO·operating model 모두의 토대예요."
                  : "The two orange plug lines — BS Cash and Retained Earnings — receive results from IS and CFS to close the BS. When '✓ BS Check' shows OK, the model is consistent. This single sheet is the foundation for every valuation, LBO, and operating model."}
              </p>
            </div>

            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4 mt-7">
              <p>{ko
                ? "다음 챕터부터는 이 3-Statement 위에 specific model들이 올라갑니다. Ch.3는 DCF model — WACC sheet, FCF build, Terminal Value, Sensitivity data table. Valuation 시리즈 Ch.2에서 봤던 작업을 sheet 구조와 셀 단위로 다시 보는 형태예요."
                : "From the next chapter, specific models stack on top of this 3-statement. Ch.3 is the DCF model — WACC sheet, FCF build, terminal value, sensitivity data table. The work covered in Valuation Ch.2 walked through in sheet structure and cell-level mechanics."}</p>
            </div>
          </motion.section>

          {/* Next chapter */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mt-12 mb-10">
            <div className="border-l-2 pl-4 py-1" style={{ borderColor: ACCENT }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>{ko ? "다음 챕터" : "Next chapter"}</p>
              <p className="text-[15px] font-bold text-gray-900 dark:text-gray-100">
                Ch.3 — {ko ? "DCF Model in Excel — Valuation Ch.2를 sheet로" : "DCF Model in Excel — Valuation Ch.2 turned into sheets"}
              </p>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                {ko
                  ? "Revenue projection · WACC sheet · FCF cell-by-cell · Terminal Value 두 가지 방식 (Gordon vs Exit multiple) · Sensitivity data table — DCF model의 sheet 구조 전체."
                  : "Revenue projection, WACC sheet, FCF cell by cell, two terminal-value methods (Gordon vs exit multiple), sensitivity data tables — the whole DCF model in sheet form."}
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
