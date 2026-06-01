/**
 * Modelling 시리즈 Ch.5 — Operating Model: Driver-based Forecasting
 *
 * 톤 가이드 (Mod Ch.1-4 동일):
 *  - 자연스러운 한국어 + Excel 표현 적극 사용
 *  - 시각화 4개: Top-down vs Bottom-up · 5 산업 driver 표 · SaaS cohort · Scenario manager
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

const SLUG = "mod-ch05-operating";
const ACCENT = "#10b981";
const BLUE = "#2563eb";
const ORANGE = "#f97316";
const RED = "#dc2626";
const PURPLE = "#a855f7";

// Top-down vs Bottom-up 비교
const APPROACH_COMPARE = [
  {
    koItem: "출발점",
    enItem: "Starting point",
    koTop: "시장 전체 규모 × 점유율",
    enTop: "Total addressable market × share",
    koBot: "회사의 운영 단위 (매장·고객·인력)",
    enBot: "The unit the business actually operates on",
  },
  {
    koItem: "정확도",
    enItem: "Accuracy",
    koTop: "낮음 — 상위 가정 한 줄로 결정",
    enTop: "Low — driven by one top-level assumption",
    koBot: "높음 — 각 driver를 따로 검증 가능",
    enBot: "High — each driver verifiable individually",
  },
  {
    koItem: "작업 분량",
    enItem: "Effort",
    koTop: "적음 — 5-10 셀로 매출 도출",
    enTop: "Light — revenue from 5-10 cells",
    koBot: "많음 — driver별로 sheet 한 페이지씩",
    enBot: "Heavy — one page per driver",
  },
  {
    koItem: "Board 설득력",
    enItem: "Boardroom defensibility",
    koTop: "약함 — \"왜 점유율이 그렇게 되나\" 답 어려움",
    enTop: "Weak — 'why that share?' is hard to defend",
    koBot: "강함 — \"이 매장이 이렇게 굴러간다\" 직접 보여줌",
    enBot: "Strong — 'this store works like this' is concrete",
  },
  {
    koItem: "주로 쓰이는 곳",
    enItem: "Where it's used",
    koTop: "Early-stage · TAM-driven · 신사업",
    enTop: "Early-stage, TAM-driven, new ventures",
    koBot: "M&A · LBO · 성숙 사업 평가",
    enBot: "M&A, LBO, mature-business valuation",
  },
];

// 산업별 driver 패턴
const INDUSTRY_DRIVERS = [
  {
    koIndustry: "SaaS",
    enIndustry: "SaaS",
    koFormula: "ARR = ARPU × Customers",
    enFormula: "ARR = ARPU × Customers",
    drivers: ["ARPU", "Customers", "Churn %", "NRR"],
    koExample: "ARPU $80 × 고객 50,000 × NRR 115% = $4.6M ARR",
    enExample: "ARPU $80 × 50,000 customers × 115% NRR = $4.6M ARR",
    color: BLUE,
  },
  {
    koIndustry: "Retail (소매)",
    enIndustry: "Retail",
    koFormula: "Revenue = Stores × Rev/store × Like-for-like growth",
    enFormula: "Revenue = stores × rev/store × LFL growth",
    drivers: ["Store count", "Rev/store", "LFL %", "신규 오픈 schedule"],
    koExample: "매장 250개 × $3.2M × LFL +2.5% = $820M",
    enExample: "250 stores × $3.2M × LFL +2.5% = $820M",
    color: ORANGE,
  },
  {
    koIndustry: "Manufacturing",
    enIndustry: "Manufacturing",
    koFormula: "Revenue = Volume × ASP × Mix",
    enFormula: "Revenue = volume × ASP × mix",
    drivers: ["Volume (units)", "ASP", "Mix (product split)", "Capacity util %"],
    koExample: "120K units × $4,500 ASP = $540M",
    enExample: "120K units × $4,500 ASP = $540M",
    color: ACCENT,
  },
  {
    koIndustry: "Hospitality (호텔)",
    enIndustry: "Hospitality",
    koFormula: "Revenue = Rooms × ADR × Occupancy × 365",
    enFormula: "Revenue = rooms × ADR × occupancy × 365",
    drivers: ["Rooms", "ADR ($/night)", "Occupancy %", "RevPAR"],
    koExample: "5,000 rooms × $220 × 72% × 365 = $290M",
    enExample: "5,000 rooms × $220 × 72% × 365 = $290M",
    color: PURPLE,
  },
  {
    koIndustry: "Professional Services",
    enIndustry: "Professional services",
    koFormula: "Revenue = Billable hours × Bill rate × Headcount",
    enFormula: "Revenue = billable hours × bill rate × headcount",
    drivers: ["Headcount", "Utilization %", "Bill rate $/hr", "Realization %"],
    koExample: "800 staff × 1,800 hr × $350 × 92% = $464M",
    enExample: "800 staff × 1,800 hr × $350 × 92% = $464M",
    color: "#0891b2",
  },
];

// SaaS cohort table — Vintage × Period (NRR%)
// Rows = vintage year, columns = month/year after entry
const COHORT_VINTAGES = ["2020", "2021", "2022", "2023", "2024"];
const COHORT_PERIODS = ["Y0 (acquire)", "Y1", "Y2", "Y3", "Y4"];
// NRR per cohort per period (%)
// 2020 cohort sees Y0=100, Y1=110, Y2=118, ... (best mature retention)
// 2024 cohort only has Y0 data
const COHORT_NRR: (number | null)[][] = [
  // 2020
  [100, 110, 118, 122, 125],
  // 2021
  [100, 112, 120, 124, null],
  // 2022
  [100, 115, 121, null, null],
  // 2023
  [100, 116, null, null, null],
  // 2024
  [100, null, null, null, null],
];

// Scenario manager — Bear / Base / Bull driver toggle
const SCENARIO_DRIVERS = [
  {
    koDriver: "Revenue growth %",
    enDriver: "Revenue growth %",
    bear: "+4%",
    base: "+8%",
    bull: "+13%",
  },
  {
    koDriver: "EBITDA margin",
    enDriver: "EBITDA margin",
    bear: "20.0%",
    base: "22.0%",
    bull: "24.5%",
  },
  {
    koDriver: "Customer churn",
    enDriver: "Customer churn",
    bear: "12.0%",
    base: "8.0%",
    bull: "5.5%",
  },
  {
    koDriver: "New store openings/yr",
    enDriver: "New store openings/yr",
    bear: "15",
    base: "25",
    bull: "40",
  },
  {
    koDriver: "Capex % of revenue",
    enDriver: "Capex % of revenue",
    bear: "6.0%",
    base: "5.0%",
    bull: "4.0%",
  },
];

const SCENARIO_RESULTS = [
  { koName: "Bear", enName: "Bear", color: RED,    ev: 720,  irr: 11.5 },
  { koName: "Base", enName: "Base", color: ACCENT, ev: 990,  irr: 18.0 },
  { koName: "Bull", enName: "Bull", color: "#16a34a", ev: 1320, irr: 25.8 },
];

const cohortColor = (val: number | null): string => {
  if (val === null) return "transparent";
  if (val >= 120) return ACCENT;
  if (val >= 110) return ACCENT + "cc";
  if (val >= 100) return ACCENT + "80";
  return RED + "60";
};

export default function MaMod05Client({ lang }: { lang: Lang }) {
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
            <span className="text-gray-600 dark:text-gray-300 font-medium">{ko ? "Modelling 시리즈 · Ch.5" : "Modelling Series · Ch.5"}</span>
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

          {/* § 1 — Driver-based가 왜 다른가 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Driver-based — 매출을 \"운영 단위\"로 쪼개기" : "Driver-based — break revenue into operating units"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Ch.3 DCF와 Ch.4 LBO의 출발점이 모두 \"Revenue 가정\" 한 줄이었어요. 그 한 줄을 어떻게 만드냐가 Operating Model의 일이에요. 두 가지 접근이 있어요. Top-down — \"시장 전체 규모 × 우리 점유율\" 로 도출. Bottom-up — \"매장 250개 × 매장당 매출 $3.2M\" 처럼 운영을 굴리는 단위로 쪼개서 곱하는 방식."
                : "Both Ch.3 (DCF) and Ch.4 (LBO) started from a single 'revenue assumption.' How that line gets built is the operating model's job. Two approaches. Top-down — 'total market × our share.' Bottom-up — '250 stores × $3.2M per store,' breaking it into the units the business actually operates on."}</p>
              <p>{ko
                ? "M&A·LBO valuation에서는 거의 항상 bottom-up이 표준이에요. 이유는 단순해요. Board에 가서 \"우리 매출은 시장의 8%가 될 거예요\" 라고 하면 \"왜 8%인데?\" 라는 질문에 답이 어려운데, \"우리 250개 매장이 매장당 $3.2M을 만든다\" 면 매장 하나만 가져다가 검증할 수 있거든요. 가정의 단위가 작아질수록 defensibility가 올라가요."
                : "M&A and LBO valuations almost always default to bottom-up. The reason is simple. Tell a board 'we'll capture 8% of the market' and you can't answer 'why 8%?' Tell them '250 stores × $3.2M each' and they can pick one store and verify. The smaller the assumption unit, the higher the defensibility."}</p>
              <p>{ko
                ? "이번 챕터에서는 (1) Top-down vs Bottom-up의 trade-off (2) 산업별로 driver의 단위가 어떻게 달라지는지 (3) SaaS의 핵심 도구인 cohort analysis (4) Bear/Base/Bull을 sheet 레벨에서 한 번에 toggle하는 Scenario Manager를 봅니다."
                : "This chapter walks (1) the top-down vs bottom-up trade-off, (2) how driver units shift across industries, (3) cohort analysis — the core SaaS tool, (4) toggling Bear/Base/Bull at sheet level with Scenario Manager."}</p>
            </div>

            {/* Top vs Bottom 비교 */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5 overflow-x-auto">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                {ko ? "Top-down vs Bottom-up" : "Top-down vs bottom-up"}
              </p>
              <table className="w-full text-[12px]">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-2 pr-3 font-semibold text-gray-500 dark:text-gray-400 w-[22%]"></th>
                    <th className="text-left py-2 pr-3 font-semibold text-gray-900 dark:text-gray-100">{ko ? "Top-down" : "Top-down"}</th>
                    <th className="text-left py-2 font-semibold" style={{ color: ACCENT }}>{ko ? "Bottom-up (driver-based)" : "Bottom-up (driver-based)"}</th>
                  </tr>
                </thead>
                <tbody>
                  {APPROACH_COMPARE.map((c, i) => (
                    <tr key={i} className="border-b border-gray-100 dark:border-gray-800/60 last:border-0">
                      <td className="py-2 pr-3 text-gray-500 dark:text-gray-400 align-top text-[11px]">{ko ? c.koItem : c.enItem}</td>
                      <td className="py-2 pr-3 text-gray-700 dark:text-gray-300 align-top">{ko ? c.koTop : c.enTop}</td>
                      <td className="py-2 align-top text-gray-700 dark:text-gray-300">{ko ? c.koBot : c.enBot}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 2 — 산업별 driver */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "산업별 driver — 5가지 표준 패턴" : "Industry drivers — five standard patterns"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Bottom-up forecasting의 첫 단계가 \"이 산업의 driver가 무엇인가\" 를 정하는 일이에요. SaaS면 ARPU와 고객 수, 소매면 매장 수와 매장당 매출, 호텔이면 객실 수·ADR·occupancy. 산업이 정해지면 driver가 거의 자동으로 결정됩니다."
                : "First move in bottom-up forecasting: 'what are this industry's drivers?' SaaS → ARPU and customer count. Retail → stores and revenue per store. Hospitality → rooms, ADR, occupancy. Pick the industry and the drivers fall out."}</p>
              <p>{ko
                ? "Driver를 어떻게 잡느냐가 모델의 sensitivity 구조를 결정해요. 매장 수를 driver로 잡으면 \"매장 10개 더 열면 매출 +$32M\" 처럼 결과가 단순하게 떨어지고, sensitivity table도 매장 수 × LFL 같은 형태로 자연스럽게 만들 수 있어요. Driver가 잘 잡혀 있으면 sensitivity가 의미 있는 sensitivity가 됩니다."
                : "Driver choice shapes the model's sensitivity structure. Using store count as the driver gives clean outputs like '+10 stores → +$32M.' Sensitivity tables build naturally on 'store count × LFL.' Good drivers make for meaningful sensitivities."}</p>
            </div>

            {/* Industry drivers 카탈로그 */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "5개 산업의 driver 패턴" : "Driver patterns across 5 industries"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "Revenue를 어느 단위로 쪼개는지가 산업의 본질을 결정." : "How revenue gets decomposed reflects the industry's underlying unit."}
              </p>
              <div className="space-y-3">
                {INDUSTRY_DRIVERS.map((d, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.45, delay: i * 0.07, ease: EASE }}
                    className="rounded-lg p-4 border"
                    style={{ borderColor: d.color + "60", background: d.color + "0d" }}
                  >
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="text-[13px] font-bold" style={{ color: d.color }}>{ko ? d.koIndustry : d.enIndustry}</span>
                      <span className="text-[10.5px] font-mono text-gray-500 dark:text-gray-400">{ko ? d.koFormula : d.enFormula}</span>
                    </div>
                    <div className="flex gap-1.5 flex-wrap mb-2">
                      {d.drivers.map((dr, j) => (
                        <span key={j} className="text-[10px] font-mono px-2 py-0.5 rounded" style={{ background: d.color + "26", color: d.color }}>
                          {dr}
                        </span>
                      ))}
                    </div>
                    <p className="text-[10.5px] text-gray-600 dark:text-gray-400 font-mono leading-snug">{ko ? d.koExample : d.enExample}</p>
                  </motion.div>
                ))}
              </div>
              <p className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "Driver는 회사가 \"무엇으로 돈을 버는가\" 의 mechanism이에요. 잘못 잡으면 모든 가정이 헛돌게 됩니다. 그래서 sector banker는 자기 산업의 driver를 정확히 알고 있고, 그게 IB에서 sector specialization이 가치 있는 이유."
                  : "Drivers describe how the business actually makes money. Get them wrong and every assumption misfires. Sector bankers know their industry's drivers cold — which is exactly why sector specialization matters in IB."}
              </p>
            </div>
          </motion.section>

          {/* Mid share */}
          <ShareButtons title={ko ? chapter.titleKo : chapter.titleEn} variant="mid" lang={lang} />

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 3 — SaaS cohort */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "SaaS Cohort Analysis — Retention curve를 sheet로" : "SaaS cohort analysis — retention curves in sheet form"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "SaaS 모델에서 가장 차별화된 작업이 cohort analysis예요. 같은 시점에 가입한 고객 그룹 (vintage) 이 시간이 지남에 따라 ARPU가 어떻게 변하는지를 추적합니다. 핵심 지표가 Net Revenue Retention (NRR) — 100%면 그대로, 110%면 retention + upsell로 매출이 10% 늘었다는 뜻."
                : "The most distinctive piece of a SaaS model is cohort analysis. Track how the same group of customers acquired at one point (a vintage) sees their ARPU evolve over time. The headline metric is Net Revenue Retention (NRR) — 100% holds flat, 110% means retention + upsell lifted revenue 10%."}</p>
              <p>{ko
                ? "Cohort table은 행이 vintage (가입 연도), 열이 elapsed period (가입 후 1년·2년...). 각 cell이 그 vintage의 그 시점 NRR. 대각선이 \"오늘\" 이고, 대각선 위쪽 셀들은 비어있어요 (아직 도달 안 한 미래). 이 table이 다 차오를수록 회사의 retention pattern이 명확히 보입니다."
                : "Cohort tables have vintages (acquisition year) as rows and elapsed period (year 1, year 2, ...) as columns. Each cell is the NRR for that vintage at that point. The diagonal is 'today'; cells above are empty (future not yet realized). As the table fills, retention patterns become unmistakable."}</p>
              <p>{ko
                ? "Forecasting에서는 historical cohort의 패턴을 미래 vintage에도 적용해요. 예를 들어 2020 cohort가 Y3에 NRR 122%였다면 2024 cohort도 Y3에 비슷할 거라고 가정. 이게 SaaS DCF에서 5년 revenue forecast의 핵심 mechanism이고, peer comparison에서 \"우리 NRR이 peer 대비 어떤가\" 가 가장 자주 보는 KPI예요."
                : "Forecasting applies historical cohort patterns to future vintages. If the 2020 cohort hit 122% NRR at Y3, you assume the 2024 cohort lands similarly at Y3. That's the core mechanism behind 5-year revenue forecasts in SaaS DCFs, and 'how does our NRR compare to peers?' is the most-tracked KPI in peer comps."}</p>
            </div>

            {/* Cohort table */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Cohort NRR Table — Vintage × Period (%)" : "Cohort NRR table — vintage × period (%)"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                {ko ? "각 vintage의 Y3 NRR이 모두 120% 부근으로 수렴 — \"우리 product는 retention이 안정적\" 패턴." : "Every vintage clusters near 120% NRR at Y3 — 'retention is stable across cohorts.'"}
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-[11.5px] font-mono">
                  <thead>
                    <tr>
                      <th className="text-left p-2 font-semibold text-gray-500 dark:text-gray-400 w-20">Vintage</th>
                      {COHORT_PERIODS.map((p, i) => (
                        <th key={i} className="text-right p-2 font-semibold text-gray-500 dark:text-gray-400">{p}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {COHORT_VINTAGES.map((v, ri) => (
                      <tr key={ri} className="border-t border-gray-100 dark:border-gray-800">
                        <td className="p-2 text-gray-700 dark:text-gray-300 font-semibold">{v}</td>
                        {COHORT_NRR[ri].map((val, ci) => {
                          const bg = cohortColor(val);
                          return (
                            <td
                              key={ci}
                              className="p-2 text-right"
                              style={{
                                background: bg,
                                color: val !== null && val >= 100 ? "#fff" : val !== null ? "#dc2626" : "#cbd5e1",
                                fontWeight: val !== null ? 600 : 400,
                              }}
                            >
                              {val !== null ? `${val}%` : "—"}
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
                  ? "2020 vintage가 Y4까지 도달 — 가장 mature한 데이터. 2024 vintage는 Y0만 있음. Forecast는 \"2024 vintage도 2020처럼 Y4에 125%\" 라는 가정. 이 가정의 defensibility가 SaaS valuation의 핵심."
                  : "2020 vintage has Y4 data — the most mature. 2024 vintage only Y0. Forecast assumes '2024 will also hit ~125% by Y4, like 2020.' The defensibility of that assumption is the heart of SaaS valuation."}
              </p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 4 — Scenario Manager */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Scenario Manager — Bear / Base / Bull을 한 셀로 toggle" : "Scenario manager — toggling Bear / Base / Bull from a single cell"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Valuation Ch.2에서 Bear/Base/Bull 시나리오를 봤었어요. Excel에서 그걸 어떻게 구현하느냐가 이번 § 의 주제. 두 가지 방법이 있어요. (1) Scenario Manager (Data → What-If Analysis → Scenario Manager) — Excel 내장 기능. (2) CHOOSE 또는 INDEX 함수 + 한 cell에 1·2·3 입력해서 driver를 toggle."
                : "Valuation Ch.2 covered the Bear/Base/Bull idea. This section is how to wire it into Excel. Two approaches. (1) Scenario Manager (Data → What-If Analysis → Scenario Manager) — Excel's built-in tool. (2) CHOOSE or INDEX functions with a single 1/2/3 toggle cell that flips drivers."}</p>
              <p>{ko
                ? "실무에서는 (2)번 방식이 더 표준이에요. Driver sheet에 행 하나마다 Bear/Base/Bull 3개 값을 두고, 옆에 \"=CHOOSE(scenario, bear, base, bull)\" 형태의 셀로 활성 값을 뽑아냅니다. Scenario 셀에 1을 입력하면 모델 전체가 Bear, 2면 Base, 3면 Bull. 한 셀 바꾸면 모델 전체가 다른 scenario로 즉시 전환."
                : "Standard practice leans toward (2). On the driver sheet, each row holds three values — Bear, Base, Bull — and the adjacent cell uses '=CHOOSE(scenario, bear, base, bull)' to pull the active value. Type 1 in the scenario cell → entire model is Bear. 2 → Base. 3 → Bull. One cell flips the whole model."}</p>
              <p>{ko
                ? "왜 Excel Scenario Manager보다 CHOOSE 방식을 더 쓰냐면 — 투명성 때문이에요. Scenario Manager는 메뉴 안에 시나리오 정의가 숨어 있어서 다음 사람이 어디서 뭐가 바뀌는지 알기 어려운데, CHOOSE 방식은 sheet 위에 \"Bear $X / Base $Y / Bull $Z\" 가 그대로 보여요. Audit하기 훨씬 쉽고, Ch.1에서 본 \"색 convention\" 도 그대로 작동합니다."
                : "Why CHOOSE beats Scenario Manager — transparency. Scenario Manager buries scenarios inside a menu; the next person can't see what changes. CHOOSE displays 'Bear $X / Base $Y / Bull $Z' right on the sheet. Audit becomes far easier, and Ch.1's color convention still works seamlessly."}</p>
            </div>

            {/* Scenario driver toggle */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Scenario Driver Sheet — CHOOSE로 toggle" : "Scenario driver sheet — toggled by CHOOSE"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                {ko ? "각 driver마다 Bear/Base/Bull 값. \"Scenario\" 셀(상단)에 1·2·3 입력해서 모델 전체 전환." : "Each driver carries Bear/Base/Bull. Enter 1/2/3 in the Scenario cell to flip the whole model."}
              </p>

              {/* Scenario toggle cell */}
              <div className="flex items-baseline gap-3 mb-4 rounded p-2.5" style={{ background: ACCENT + "1a", border: `1px solid ${ACCENT}60` }}>
                <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: ACCENT }}>{ko ? "Scenario cell (1·2·3)" : "Scenario cell (1·2·3)"}</span>
                <span className="text-[14px] font-mono font-bold" style={{ color: ACCENT }}>= 2 (Base)</span>
              </div>

              {/* Driver table */}
              <table className="w-full text-[11.5px] font-mono">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left p-2 font-semibold text-gray-500 dark:text-gray-400 w-[34%]">Driver</th>
                    <th className="text-right p-2 font-semibold" style={{ color: RED }}>Bear (1)</th>
                    <th className="text-right p-2 font-semibold" style={{ color: ACCENT }}>Base (2)</th>
                    <th className="text-right p-2 font-semibold" style={{ color: "#16a34a" }}>Bull (3)</th>
                  </tr>
                </thead>
                <tbody>
                  {SCENARIO_DRIVERS.map((d, i) => (
                    <tr key={i} className="border-b border-gray-100 dark:border-gray-800/60 last:border-0">
                      <td className="p-2 text-gray-700 dark:text-gray-300 font-medium">{ko ? d.koDriver : d.enDriver}</td>
                      <td className="p-2 text-right" style={{ color: RED }}>{d.bear}</td>
                      <td className="p-2 text-right" style={{ color: ACCENT, fontWeight: 700, background: ACCENT + "1a" }}>{d.base}</td>
                      <td className="p-2 text-right" style={{ color: "#16a34a" }}>{d.bull}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Results */}
              <div className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
                  {ko ? "Scenario별 출력 (EV $M · IRR %)" : "Output by scenario (EV $M · IRR %)"}
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {SCENARIO_RESULTS.map((r, i) => (
                    <div key={i} className="rounded-lg p-3 text-center" style={{ background: r.color + "1a", border: `1px solid ${r.color}60` }}>
                      <p className="text-[10.5px] font-bold uppercase tracking-wider mb-1" style={{ color: r.color }}>{ko ? r.koName : r.enName}</p>
                      <p className="text-[14px] font-mono font-bold" style={{ color: r.color }}>${r.ev}M</p>
                      <p className="text-[10px] font-mono" style={{ color: r.color }}>IRR {r.irr}%</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-4 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "Scenario 셀을 1로 바꾸면 즉시 EV $720M / IRR 11.5%로 전환. 3으로 바꾸면 $1,320M / 25.8%. 한 셀 toggle로 board에 가져가는 3개 case가 동시에 보입니다."
                  : "Toggle the cell to 1 and EV instantly becomes $720M / IRR 11.5%. To 3 and it's $1,320M / 25.8%. A single cell flips all three board cases on demand."}
              </p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 5 — 정리 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Operating Model이 다른 모든 sheet의 출발점" : "The Operating Model is where every other sheet starts"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Ch.1-4가 \"모델의 작동 방식\" 을 다뤘다면 이번 챕터는 \"모델의 가장 깊은 가정이 어디서 시작되나\" 를 봤어요. Driver-based forecasting이 잘 잡혀 있어야 DCF의 revenue projection이 의미 있고, LBO의 cash sweep이 정확하게 굴러가고, Football Field의 range가 좁아질 수 있어요."
                : "Ch.1-4 covered 'how the model works.' This chapter covers 'where the deepest assumptions begin.' Driver-based forecasting has to land cleanly for DCF revenue projections to be meaningful, LBO cash sweeps to compute correctly, and the football field range to tighten."}</p>
              <p>{ko
                ? "Sector banker가 자기 산업의 driver를 정확히 외우고 있는 게 그래서 중요해요. SaaS analyst는 NRR·ARPU·CAC payback을 기본으로 알고 있고, Retail banker는 LFL·매장당 매출·신규 오픈 ramp curve를 외우고 있고, 호텔 banker는 ADR·RevPAR·occupancy seasonality를 알고 있습니다. IB junior가 sector 결정할 때 이 driver들이 \"내가 평생 만질 단위\" 가 된다는 점이 중요한 고려 요소예요."
                : "That's why sector bankers know their drivers cold. SaaS analysts default-know NRR, ARPU, CAC payback. Retail bankers know LFL, revenue per store, new-store ramp curves. Hotel bankers know ADR, RevPAR, occupancy seasonality. When IB juniors pick a sector, choosing those drivers as 'the units I'll spend a career on' is a real consideration."}</p>
              <p>{ko
                ? "다음 챕터에서는 Modelling 시리즈 마지막 — 실제 deal model을 sheet-by-sheet로 따라가는 case study. Microsoft × LinkedIn ($26.2B, 2016) 의 strategic acquisition model을 통해 지금까지 본 sheet들이 어떻게 한 deal에 묶이는지를 봅니다."
                : "The last chapter wraps the series with a real-deal walkthrough — Microsoft × LinkedIn ($26.2B, 2016), a strategic-acquisition model. We'll watch every sheet we've discussed in this series come together in one live deal."}</p>
            </div>
          </motion.section>

          {/* Next chapter */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mt-12 mb-10">
            <div className="border-l-2 pl-4 py-1" style={{ borderColor: ACCENT }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>{ko ? "다음 챕터" : "Next chapter"}</p>
              <p className="text-[15px] font-bold text-gray-900 dark:text-gray-100">
                Ch.6 — {ko ? "Case · Microsoft × LinkedIn ($26.2B, 2016) — model walkthrough" : "Case · Microsoft × LinkedIn ($26.2B, 2016) — model walkthrough"}
              </p>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                {ko
                  ? "Strategic acquisition model의 sheet 구성, LinkedIn cohort data를 활용한 revenue forecast, synergy 추정, accretion/dilution 분석을 sheet-by-sheet로."
                  : "Sheet structure of a strategic-acquisition model, LinkedIn cohort-based revenue forecast, synergy estimation, and accretion/dilution analysis — walked sheet by sheet."}
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
